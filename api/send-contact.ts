import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, message: 'Missing required fields.' });
    }

    const host = process.env.SMTP_HOST ?? 'oder.bitpalast.net';
    const port = Number(process.env.SMTP_PORT ?? 465);
    const secure = port === 465;
    const user = process.env.SMTP_USER ?? 'info@zahnaerzte-roth.de';
    const pass = process.env.SMTP_PASS;

    if (!pass) {
      return res.status(500).json({ ok: false, message: 'Missing SMTP_PASS.' });
    }

    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

    const patientBody = `
      <h1 style="font-size:22px; margin-bottom:8px;">Vielen Dank für Ihre Nachricht</h1>
      <p style="color:#334155;">Hallo ${escapeHtml(name)},</p>
      <p style="color:#334155;">
        wir haben Ihre Nachricht über unser Kontaktformular erhalten und werden uns schnellstmöglich bei Ihnen melden.
      </p>
      <h2 style="font-size:16px; margin-top:18px; margin-bottom:6px;">Ihre Angaben</h2>
      <ul style="color:#334155; line-height:1.7;">
        <li><strong>Name:</strong> ${escapeHtml(name)}</li>
        <li><strong>E-Mail:</strong> ${escapeHtml(email)}</li>
        <li><strong>Telefon:</strong> ${escapeHtml(phone || 'nicht angegeben')}</li>
      </ul>
      <p style="color:#334155; margin-top:14px;"><strong>Ihre Nachricht:</strong><br/>
      ${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const practiceLogoUrl = 'https://zahnaerzte-roth.de/logo.png';

    const internalBody = `
      <h1 style="font-size:22px; margin-bottom:8px;">Neue Kontaktanfrage</h1>
      <ul style="color:#334155; line-height:1.7;">
        <li><strong>Name:</strong> ${escapeHtml(name)}</li>
        <li><strong>E-Mail:</strong> ${escapeHtml(email)}</li>
        <li><strong>Telefon:</strong> ${escapeHtml(phone || 'nicht angegeben')}</li>
      </ul>
      <p style="color:#334155; margin-top:14px;"><strong>Nachricht:</strong><br/>
      ${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const [patientResult, internalResult] = await Promise.all([
      transporter.sendMail({
        from: `"Zahnarztpraxis Adolf Roth" <${user}>`,
        to: email,
        subject: 'Ihre Kontaktanfrage | Zahnarztpraxis Adolf Roth',
        html: emailHtml('Ihre Kontaktanfrage', patientBody, practiceLogoUrl),
      }),
      transporter.sendMail({
        from: `"Zahnarztpraxis Adolf Roth" <${user}>`,
        to: user,
        subject: `Neue Kontaktanfrage von ${name}`,
        html: emailHtml('Neue Kontaktanfrage', internalBody, practiceLogoUrl),
      }),
    ]);

    console.log('Mail send patient', { messageId: patientResult.messageId, to: email });
    console.log('Mail send internal', { messageId: internalResult.messageId, to: user });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Mail send error', error);
    return res.status(500).json({ ok: false, message: 'Mail send failed.' });
  }
}

function emailHtml(title: string, bodyContent: string, logoUrl: string) {
  return `
    <!doctype html>
    <html lang="de">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0; background-color:#f8fafc; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border:1px solid #e5e7eb; border-radius:24px; padding:28px 32px;">
              <tr>
                <td>
                  <img src="${logoUrl}" alt="Zahnarztpraxis Adolf Roth" width="140" style="display:block; margin-bottom:16px;" />
                  <div style="border-top:1px solid #e5e7eb; margin: 10px 0 14px;"></div>
                  <div style="color:#0f172a; line-height:1.6;">
                    ${bodyContent}
                  </div>
                  <div style="border-top:1px solid #e5e7eb; margin: 18px 0 10px;"></div>
                  <p style="font-size:12px; color:#64748b; line-height:1.5; margin:0;">
                    Zahnarztpraxis Adolf Roth<br />
                    Cleversulzbacher Str. 10<br />
                    74196 Neuenstadt am Kocher<br />
                    <a href="https://zahnaerzte-roth.de">https://zahnaerzte-roth.de</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
