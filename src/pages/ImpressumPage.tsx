import { useEffect } from 'react';
import { ArrowLeft, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light flex flex-col pt-32 pb-24 px-6 min-h-[80vh]">
      <SEO 
        title="Impressum | Zahnarzt Adolf Roth" 
        description="Rechtliche Hinweise und Kontaktangaben der Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher. Telefon, E-Mail, Adresse und berufsrechtliche Angaben."
        canonicalPath="/impressum"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Impressum', href: '/impressum' }
        ]}
      />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-blue mb-12 transition-luxury"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-brand-secondary mb-12">Impressum</h1>

          <div className="prose prose-slate prose-headings:font-serif prose-headings:text-brand-secondary prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline max-w-none text-slate-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Zahnarztpraxis Adolf Roth<br />
                Cleversulzbacher Str. 10<br />
                74196 Neuenstadt am Kocher
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Vertreten durch</h2>
              <p>Adolf Roth — Zahnarzt</p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Kontakt</h2>
              <ul className="list-none p-0 space-y-2">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-slate-600" />
                  <span>Telefon: 07139 452176</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-600" />
                  <span>E-Mail: info@zahnaerzte-roth.de</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-600" />
                  <span>Website: www.zahnarzt-roth-neuenstadt.de</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                <strong>Berufsbezeichnung:</strong> Zahnarzt<br />
                <strong>Zuständige Kammer:</strong> Landeszahnärztekammer Baden-Württemberg / Bezirkszahnärztekammer Stuttgart, Albstadtweg 9, 70567 Stuttgart<br />
                <strong>Verliehen in:</strong> Heidelberg (1993), Deutschland
              </p>
              <p className="mt-4">
                Es gelten folgende berufsrechtliche Regelungen:<br />
                - Zahnheilkundegesetz (ZHG)<br />
                - Approbationsordnung für Zahnärzte (ZApprO)<br />
                - Berufsordnung der Zahnärztekammer Baden-Württemberg<br />
                - Heilberufe-Kammergesetz Baden-Württemberg (HBKG)
              </p>
              <p className="mt-4">
                Die Regelungen sind einsehbar unter:{' '}
                <a href="https://www.zahnaerztekammer-bw.de" target="_blank" rel="noopener noreferrer">
                  www.zahnaerztekammer-bw.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Adolf Roth<br />
                Cleversulzbacher Str. 10<br />
                74196 Neuenstadt am Kocher
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>.<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Hosting und technische Infrastruktur</h2>
              <p>
                Bitpalast GmbH<br />
                Sensburger Allee 27<br />
                D-14055 Berlin (Germany)
              </p>
              <p className="mt-4">
                Amtsgericht Berlin-Charlottenburg<br />
                HRB 52699<br />
                Geschäftsführer: Peter Debik M.A.
              </p>
              <p className="mt-4">
                USt-ID DE166645846<br />
                D-U-N-S® Nr. 312741093<br />
                Bundesnetzagentur § 6 Abs. 3 TKG DREG-Nr. 19/089
              </p>
              <p className="mt-4">
                gebührenfrei (0800) 9 32 33 74<br />
                Telefax (030) 32 70 18 91<br />
                E-Mail: <a href="mailto:service@bitpalast.de">service@bitpalast.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 mt-8">Erstellung der Website</h2>
              <p>
                Konzeption, Design und technische Umsetzung dieser Website:<br />
                <strong>Green Labz Studio</strong><br />
                Inhaber: James Green<br />
                Widmannstraße 13, 74074 Heilbronn<br />
                Website: <a href="https://www.greenlabz-studio.de" target="_blank" rel="noopener noreferrer">www.greenlabz-studio.de</a><br />
                E-Mail: <a href="mailto:hallo@greenlabz-studio.de">hallo@greenlabz-studio.de</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
