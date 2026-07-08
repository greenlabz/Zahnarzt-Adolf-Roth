import { useState, useEffect, useRef } from 'react';
import { X, Scale, Shield, ChevronRight } from 'lucide-react';

type Tab = 'impressum' | 'datenschutz';

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('impressum');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openHandler = (e: Event) => {
      const tab = (e as CustomEvent).detail?.tab as Tab;
      setActiveTab(tab || 'impressum');
      setIsOpen(true);
    };
    window.addEventListener('open-legal', openHandler);
    return () => window.removeEventListener('open-legal', openHandler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      scrollRef.current?.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={activeTab === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden">

        {/* Modal Header */}
        <div className="bg-brand-blue-dark px-8 py-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            {/* Tab: Impressum */}
            <button
              onClick={() => { setActiveTab('impressum'); scrollRef.current?.scrollTo(0, 0); }}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'impressum'
                  ? 'bg-white text-brand-blue-dark'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Scale size={13} />
              Impressum
            </button>
            {/* Tab: Datenschutz */}
            <button
              onClick={() => { setActiveTab('datenschutz'); scrollRef.current?.scrollTo(0, 0); }}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'datenschutz'
                  ? 'bg-white text-brand-blue-dark'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Shield size={13} />
              Datenschutz
            </button>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div ref={scrollRef} className="overflow-y-auto flex-1 px-8 py-8 text-slate-700 text-sm leading-relaxed">
          {activeTab === 'impressum' ? <Impressum /> : <Datenschutz />}
        </div>

        {/* Footer */}
        <div className="shrink-0 px-8 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-brand-blue text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-brand-blue-dark transition-all duration-200 cursor-pointer"
          >
            Schließen
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   IMPRESSUM
───────────────────────────────────────────── */
function Impressum() {
  return (
    <article>
      <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Impressum</h1>
      <p className="text-xs text-slate-400 mb-8">Angaben gemäß § 5 Telemediengesetz (TMG)</p>

      <Section title="Diensteanbieter">
        <p><strong>Adolf Roth</strong></p>
        <p>Zahnarzt</p>
        <p>Cleversulzbacher Str. 10</p>
        <p>74196 Neuenstadt am Kocher</p>
      </Section>

      <Section title="Kontakt">
        <p>Telefon: <a href="tel:+497139452176" className="text-brand-blue hover:underline">07139 452176</a></p>
        <p>E-Mail: <a href="mailto:info@zahnaerzte-roth.de" className="text-brand-blue hover:underline">info@zahnaerzte-roth.de</a></p>
      </Section>

      <Section title="Berufsbezeichnung und berufsrechtliche Regelungen">
        <p><strong>Berufsbezeichnung:</strong> Zahnarzt (verliehen in der Bundesrepublik Deutschland)</p>
        <p className="mt-2"><strong>Zuständige Kammer:</strong></p>
        <p>Landeszahnärztekammer Baden-Württemberg (LZK BW)</p>
        <p>Albstadtweg 9, 70567 Stuttgart</p>
        <p>Telefon: 0711 222 66-0</p>
        <p><a href="https://www.lzk-bw.de" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.lzk-bw.de</a></p>

        <p className="mt-3"><strong>Kassenzahnärztliche Vereinigung (KZV BW):</strong></p>
        <p>Albstadtweg 9, 70567 Stuttgart</p>
        <p>Telefon: 0711 7877-0</p>
        <p><a href="https://www.kzv-bw.de" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.kzv-bw.de</a></p>

        <p className="mt-3"><strong>Berufsrechtliche Regelungen:</strong></p>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li>Gesetz über die Ausübung der Zahnheilkunde (ZHG)</li>
          <li>Berufsordnung der Landeszahnärztekammer Baden-Württemberg</li>
          <li>Gebührenordnung für Zahnärzte (GOZ)</li>
          <li>Bundeszahnärzteordnung (BZÄO)</li>
        </ul>
        <p className="mt-2">Die berufsrechtlichen Regelungen sind einsehbar unter: <a href="https://www.lzk-bw.de" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.lzk-bw.de</a></p>
      </Section>

      <Section title="Umsatzsteuer-Identifikationsnummer">
        <p>Gemäß § 4 Nr. 14 UStG sind ärztliche und zahnärztliche Leistungen von der Umsatzsteuer befreit. Soweit umsatzsteuerpflichtige Leistungen erbracht werden, gilt:</p>
        <p className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs">
          ⚠️ Bitte tragen Sie hier Ihre Steuernummer oder USt-IdNr. ein (falls zutreffend), z. B.: Steuernummer: XX / XXX / XXXXX
        </p>
      </Section>

      <Section title="Aufsichtsbehörde">
        <p>Zuständige Aufsichtsbehörde für die Berufsausübung:</p>
        <p className="mt-1"><strong>Landeszahnärztekammer Baden-Württemberg</strong></p>
        <p>Albstadtweg 9, 70567 Stuttgart</p>
      </Section>

      <Section title="Streitschlichtung">
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
        <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">https://ec.europa.eu/consumers/odr</a></p>
        <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <p className="mt-2">Für Streitigkeiten zwischen Zahnarzt und Patient ist die <strong>Schlichtungsstelle Zahnärzte Baden-Württemberg</strong> zuständig:</p>
        <p>Albstadtweg 9, 70567 Stuttgart</p>
        <p>Telefon: 0711 222 66-0</p>
      </Section>

      <Section title="Haftungsausschluss">
        <p className="font-semibold text-slate-800 mb-1">Haftung für Inhalte</p>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">Haftung für Links</p>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">Urheberrecht</p>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
      </Section>

      <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">Stand: Juni 2025</p>
    </article>
  );
}

/* ─────────────────────────────────────────────
   DATENSCHUTZERKLÄRUNG (DSGVO-konform)
───────────────────────────────────────────── */
function Datenschutz() {
  return (
    <article>
      <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Datenschutzerklärung</h1>
      <p className="text-xs text-slate-400 mb-8">Gemäß DSGVO, BDSG und TMG — Stand: Juni 2025</p>

      <Section title="1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)">
        <p><strong>Adolf Roth</strong></p>
        <p>Zahnarzt</p>
        <p>Cleversulzbacher Str. 10, 74196 Neuenstadt am Kocher</p>
        <p>Telefon: 07139 452176</p>
        <p>E-Mail: <a href="mailto:info@zahnaerzte-roth.de" className="text-brand-blue hover:underline">info@zahnaerzte-roth.de</a></p>
      </Section>

      <Section title="2. Grundsätze der Datenverarbeitung">
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist oder Sie uns eine Einwilligung erteilt haben. Die Verarbeitung erfolgt gemäß:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen)</li>
          <li>Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtung)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
          <li>Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsdaten zur medizinischen Behandlung)</li>
        </ul>
      </Section>

      <Section title="3. Erhebung und Speicherung personenbezogener Daten">
        <p className="font-semibold text-slate-800 mb-1">3.1 Beim Besuch der Website</p>
        <p>Bei jedem Aufruf unserer Website werden vom System des Besuchers automatisch folgende Informationen erfasst und temporär in Server-Logfiles gespeichert:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. Betriebssystem</li>
        </ul>
        <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website). Speicherdauer: 7 Tage, danach automatische Löschung.</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">3.2 Kontaktaufnahme per E-Mail oder Telefon</p>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, Telefonnummer, E-Mail-Adresse, Anliegen) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. f DSGVO. Speicherdauer: bis zur abschließenden Bearbeitung Ihres Anliegens, danach gesetzliche Aufbewahrungsfristen.</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">3.3 Patientendaten (Behandlungsdaten)</p>
        <p>Zur Erfüllung unserer vertraglichen und gesetzlichen Pflichten als Zahnarztpraxis verarbeiten wir besondere Kategorien personenbezogener Daten gemäß Art. 9 DSGVO, insbesondere Gesundheitsdaten. Die Erhebung, Speicherung und Verarbeitung erfolgt ausschließlich zum Zweck der zahnärztlichen Behandlung sowie zur Erfüllung gesetzlicher Aufbewahrungspflichten (§ 630f BGB, §§ 10, 12 Berufsordnung LZK BW: mindestens 10 Jahre nach Abschluss der Behandlung).</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">3.4 Newsletter</p>
        <p>Falls Sie unseren Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse ausschließlich zur Versendung des Newsletters. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden (z. B. per E-Mail an info@zahnaerzte-roth.de). Nach Abmeldung wird Ihre E-Mail-Adresse unverzüglich gelöscht.</p>
      </Section>

      <Section title="4. Weitergabe von Daten">
        <p>Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ausschließlich:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),</li>
          <li>wenn es für die Abwicklung des Behandlungsvertrags erforderlich ist (z. B. Labore, Spezialisten, Krankenkassen; Art. 6 Abs. 1 lit. b DSGVO),</li>
          <li>zur Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO),</li>
          <li>wenn wir hierzu gesetzlich verpflichtet sind (z. B. Strafverfolgungsbehörden).</li>
        </ul>
        <p className="mt-2">Eine Übermittlung personenbezogener Daten in Drittländer außerhalb der EU findet nicht statt.</p>
      </Section>

      <Section title="5. Hosting und technische Infrastruktur">
        <p>Diese Website wird auf Servern der folgenden Gesellschaft gehostet:</p>
        <div className="mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <p className="font-semibold text-slate-800">IONOS SE</p>
          <p>Elgendorfer Str. 57, 56410 Montabaur, Deutschland</p>
          <p>Telefon: 0721 96 00</p>
          <p>E-Mail: <a href="mailto:datenschutz@ionos.de" className="text-brand-blue hover:underline">datenschutz@ionos.de</a></p>
          <p><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Datenschutzerklärung von IONOS</a></p>
        </div>
        <p className="mt-3">Mit IONOS SE besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Die Server befinden sich ausschließlich in Deutschland und der Europäischen Union. IONOS verarbeitet die Daten ausschließlich auf unsere Weisung und darf sie nicht zu eigenen Zwecken nutzen. Die Serverstandorte von IONOS befinden sich in Deutschland (Rechenzentren Karlsruhe, Berlin, Frankfurt a. M.).</p>
        <p className="mt-2">Beim Aufruf unserer Website werden durch IONOS automatisch sogenannte Server-Logfiles erstellt, die Ihren Browsertyp, Ihr Betriebssystem, die Referrer-URL, Ihren Hostnamen sowie die Zugriffszeit enthalten. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
      </Section>

      <Section title="6. Cookies">
        <p>Unsere Website setzt technisch notwendige Cookies ein, die für den Betrieb der Website erforderlich sind. Diese Cookies werden nicht für Tracking oder Werbezwecke verwendet. Technisch notwendige Cookies erfordern keine Einwilligung (§ 25 Abs. 2 TTDSG).</p>
        <p className="mt-2">Wir setzen <strong>keine</strong> Tracking-, Analyse- oder Werbe-Cookies von Drittanbietern ein.</p>
      </Section>

      <Section title="7. SSL/TLS-Verschlüsselung">
        <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung am Schloss-Symbol in der Adresszeile Ihres Browsers und daran, dass die Adresse mit „https://" beginnt.</p>
      </Section>

      <Section title="8. Externe Dienste">
        <p className="font-semibold text-slate-800 mb-1">8.1 Google Maps (falls eingebunden)</p>
        <p>Sofern wir Google Maps verwenden, geschieht dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland ist als Verantwortlicher tätig. Es gelten die Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">policies.google.com/privacy</a>. Grundlage für Drittlandtransfers: EU-Standardvertragsklauseln.</p>

        <p className="font-semibold text-slate-800 mt-4 mb-1">8.2 KI-gestützter Praxis-Assistent (Chatbot)</p>
        <p>Auf dieser Website ist ein KI-gestützter Chatbot eingebunden, der allgemeine Informationen zur Praxis bereitstellt. Es werden keine personenbezogenen Gesundheitsdaten über den Chatbot erhoben oder verarbeitet. Eingaben im Chat werden temporär zur Bearbeitung Ihrer Anfrage verarbeitet. Wir empfehlen, keine sensiblen persönlichen Daten über den Chat zu übermitteln.</p>
      </Section>

      <Section title="9. Ihre Rechte als betroffene Person (Art. 15–22 DSGVO)">
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul className="list-disc ml-5 mt-2 space-y-2">
          <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie können jederzeit unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</li>
          <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht, unrichtige personenbezogene Daten berichtigen zu lassen.</li>
          <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
          <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</li>
          <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.</li>
        </ul>
        <p className="mt-3">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@zahnaerzte-roth.de" className="text-brand-blue hover:underline">info@zahnaerzte-roth.de</a></p>
      </Section>

      <Section title="10. Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)">
        <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde für Baden-Württemberg:</p>
        <div className="mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <p className="font-semibold text-slate-800">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI)</p>
          <p>Lautenschlagerstraße 20, 70173 Stuttgart</p>
          <p>Telefon: 0711 61 55 41-0</p>
          <p>E-Mail: <a href="mailto:poststelle@lfdi.bwl.de" className="text-brand-blue hover:underline">poststelle@lfdi.bwl.de</a></p>
          <p><a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.baden-wuerttemberg.datenschutz.de</a></p>
        </div>
      </Section>

      <Section title="11. Aktualität und Änderung dieser Datenschutzerklärung">
        <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025. Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website von Ihnen abgerufen werden.</p>
      </Section>

      <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">Stand: Juni 2025 — Zahnarztpraxis Adolf Roth, Neuenstadt am Kocher</p>
    </article>
  );
}

/* Helper component */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-base font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-2 text-slate-600">{children}</div>
    </section>
  );
}
