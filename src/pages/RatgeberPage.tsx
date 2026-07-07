import { ArrowRight, Droplets, Shield, Clock, Heart, Activity, Sparkles, Stethoscope, Wind, Apple, Baby, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const ratgeberData = [
  {
    id: "01",
    title: "Die richtige Zahnputztechnik",
    subtitle: "KAI-Methode vs. Bass-Technik",
    icon: <Droplets className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Schrubben Sie noch oder putzen Sie schon richtig? Viele Menschen putzen ihre Zähne mit zu viel Druck oder der falschen Bewegung. Das schädigt auf Dauer das Zahnfleisch und den Zahnschmelz.</p>
        <p className="mb-4">Die goldene Regel lautet: <strong>KAI!</strong> Besonders für Kinder (aber auch für Erwachsene als Basis) ist die KAI-Methode der einfachste Einstieg:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Kauflächen:</strong> Putze die Kauflächen mit kurzen Hin- und Herbewegungen.</li>
          <li><strong>Außenflächen:</strong> Reinige die Außenflächen mit kreisenden Bewegungen von der Mitte nach außen.</li>
          <li><strong>Innenflächen:</strong> Führe die Bürste an den Innenflächen von Rot nach Weiß – also vom Zahnfleisch zum Zahn.</li>
        </ul>
        <p><strong>Profi-Tipp:</strong> Für Erwachsene empfehlen wir die sogenannte Bass-Methode. Dabei setzen Sie die Bürste im 45-Grad-Winkel am Zahnfleischrand an und rütteln den Belag sanft locker, bevor Sie ihn auswischen.</p>
      </>
    ),
    boxText: "Die Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher zeigt Ihnen bei Ihrer professionellen Zahnreinigung Ihre individuellen Schwachstellen beim Putzen und gibt Ihnen ein maßgeschneidertes Coaching für zu Hause.",
    buttonText: "Vereinbaren Sie jetzt Ihren Prophylaxe-Termin in unserer Praxis in Neuenstadt am Kocher!"
  },
  {
    id: "02",
    title: "Fluorid in der Zahnpasta",
    subtitle: "Ein echter Schutz oder schädlich?",
    icon: <Shield className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">In den sozialen Medien wird Fluorid in Zahnpasta immer wieder heiß diskutiert. Doch was sagt die Wissenschaft? Ganz einfach: Fluorid ist der wichtigste Schutzschild für Ihre Zähne gegen Karies. Es härtet den Zahnschmelz und hilft, Mineralien wieder in den Zahn einzulagern, die durch Säuren herausgelöst wurden.</p>
        <p className="font-bold mb-4">Welche Zahnpasta ist die beste für Sie?</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Bei normaler Kariesanfälligkeit:</strong> Eine fluoridhaltige Zahnpasta (für Erwachsene ca. 1.450 ppm Fluorid) ist der Goldstandard.</li>
          <li><strong>Bei empfindlichen Zähnen:</strong> Achte auf Wirkstoffe wie Kaliumnitrat oder Hydroxylapatit (auch bekannt als „künstlicher Zahnschmelz“), die die feinen Kanäle zum Zahnnerv verschließen.</li>
          <li><strong>Vorsicht bei „White“-Zahnpasten:</strong> Viele enthalten grobe Putzkörper (hoher RDA-Wert), die den Schmelz wie Schmirgelpapier abschleifen.</li>
        </ul>
      </>
    ),
    boxText: "Jedes Gebiss ist einzigartig. Bei Ihrem nächsten Kontrolltermin in unserer Zahnarztpraxis in Neuenstadt am Kocher analysieren wir Ihren Zahnschmelz und empfehlen Ihnen genau die Zahnpasta, die perfekt zu Ihren Bedürfnissen passt.",
    buttonText: "Besuchen Sie uns in Neuenstadt am Kocher für Ihre persönliche Beratung!"
  },
  {
    id: "03",
    title: "Erste Hilfe bei Zahnschmerzen am Wochenende",
    subtitle: "Was tun, wenn der Zahnarzt nicht erreichbar ist?",
    icon: <Clock className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Es passiert fast immer freitagabends oder am Sonntag: Ein pochender Schmerz schießt in den Kiefer. Bis Sie den Zahnarzt erreichen, können diese bewährten Hausmittel die Zeit überbrücken:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Kühlen, kühlen, kühlen:</strong> Lege ein kaltes, feuchtes Tuch auf die Wange. Vermeide extreme Kälte direkt auf der Haut und verzichte auf Wärme (kein Heizkissen!), da Wärme Entzündungen verschlimmern kann.</li>
          <li><strong>Kühlen, kühlen, kühlen:</strong> Legen Sie ein kaltes, feuchtes Tuch auf die Wange. Vermeiden Sie extreme Kälte direkt auf der Haut und verzichten Sie auf Wärme (kein Heizkissen!), da Wärme Entzündungen verschlimmern kann.</li>
          <li><strong>Gewürznelken:</strong> Nelkenöl wirkt desinfizierend und leicht betäubend. Sie können auch vorsichtig auf einer ganzen Nelke kauen.</li>
          <li><strong>Salzwasserspülung:</strong> Ein Teelöffel Salz in einem Glas lauwarmem Wasser auflösen und den Mund kräftig ausspülen. Das zieht Entzündungen aus dem Gewebe.</li>
          <li><strong>Schmerzmittel:</strong> Ibuprofen hilft meist besser bei Zahnschmerzen als Aspirin (Acetylsalicylsäure), da Aspirin das Blut verdünnt – das ist gefährlich, falls am Montag ein Eingriff nötig ist.</li>
        </ul>
      </>
    ),
    boxText: "Sollten die Schmerzen unerträglich werden, halten Sie nicht bis Montag durch. Auf unserer Website finden Sie die aktuelle Telefonnummer und Adresse des eingeteilten zahnärztlichen Notdienstes für Neuenstadt am Kocher und den Landkreis Heilbronn.",
    buttonText: "Hier geht es direkt zu den Notdienst-Infos für Neuenstadt am Kocher."
  },
  {
    id: "04",
    title: "Zahnarztangst bewältigen",
    subtitle: "3 Tipps für einen entspannten Besuch",
    icon: <Heart className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Schweißnasse Hände, Herzrasen und schlaflose Nächte vor dem Termin? Sie sind nicht allein. Fast jeder zweite Patient spürt eine gewisse Nervosität vor dem Zahnarztbesuch. Das Wichtigste vorweg: Ein guter Zahnarzt verurteilt Sie nicht für Ihre Angst oder den Zustand Ihrer Zähne.</p>
        <p className="font-bold mb-4">Mit diesen 3 Tipps wird der nächste Besuch leichter:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Reden ist Gold:</strong> Sagen Sie schon bei der Terminbuchung Bescheid, dass Sie Angstpatient sind. Eine gute Praxis stellt sich darauf ein und plant mehr Zeit für Sie ein.</li>
          <li><strong>Die „Stopp-Regel“ vereinbaren:</strong> Besprechen Sie vor der Behandlung ein Handzeichen (z. B. linke Hand heben). Sobald Sie das Signal geben, macht der Zahnarzt sofort eine Pause. Das gibt Ihnen die Kontrolle zurück.</li>
          <li><strong>Ablenkung im Ohr:</strong> Bringen Sie Ihre Lieblingsmusik oder ein spannendes Hörbuch und Kopfhörer mit. Das blendet die typischen Behandlungsgeräusche aus.</li>
        </ul>
      </>
    ),
    boxText: "Die Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher ist seit über 30 Jahren auf Angstpatienten eingestellt. Wir erklären jeden Schritt in aller Ruhe, nehmen uns bewusst mehr Zeit und behandeln Sie in einer stressfreien, familiären Atmosphäre.",
    buttonText: "Machen Sie den ersten Schritt und lernen Sie uns in Neuenstadt am Kocher ganz unverbindlich kennen."
  },
  {
    id: "05",
    title: "Zahnfleischbluten stoppen",
    subtitle: "Ursachen und schnelle Hilfe",
    icon: <Activity className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Ein bisschen Blut beim Zähneputzen ist kein Grund zur Panik, aber ein wichtiges Warnsignal Ihres Körpers. Gesundes Zahnfleisch blutet nicht! Meistens steckt eine Zahnfleischentzündung (Gingivitis) dahinter, ausgelöst durch Bakterien im Zahnbelag. Wird diese nicht behandelt, kann daraus Parodontitis entstehen, die den Kieferknochen angreift.</p>
        <p className="font-bold mb-4">Das können Sie sofort tun:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Zahnseide benutzen:</strong> Auch wenn es anfangs blutet – die Zahnzwischenräume müssen sauber sein, sonst nisten sich die Bakterien dort dauerhaft ein.</li>
          <li><strong>Weiche Zahnbürste wählen:</strong> Schonen Sie Ihr entzündetes Zahnfleisch mit weichen Borsten.</li>
          <li><strong>Kamillentee als Spülung:</strong> Kamille wirkt entzündungshemmend und beruhigt das Gewebe.</li>
        </ul>
      </>
    ),
    boxText: "Blutet Ihr Zahnfleisch länger als eine Woche? Lassen Sie uns in unserer Praxis in Neuenstadt am Kocher einen schmerzfreien Schnelltest (den sogenannten PSI-Index) machen. So fangen wir Entzündungen ab, bevor sie Schaden anrichten können.",
    buttonText: "Sichern Sie sich einen Termin zur Zahnfleisch-Vorsorge in Neuenstadt am Kocher!"
  },
  {
    id: "06",
    title: "Weißere Zähne",
    subtitle: "Sichere Möglichkeiten für ein strahlenderes Lächeln.",
    icon: <Sparkles className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Viele wünschen sich ein strahlenderes Lächeln. Auf dem Markt gibt es Drogerie-Produkte wie Whitening-Stripes, LED-Kits oder Aktivkohle-Zahnpasta. Oft fehlt aber eine klare Einschätzung, welche Methode wirklich hilft und schonend zum Zahnschmelz ist.</p>
        <p className="font-bold mb-4">Die wichtigste Grundregel</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Schonung:</strong> Nicht jede Anwendung ist für jeden Zahnzustand geeignet.</li>
          <li><strong>Effekt:</strong> Nur fachgerecht abgestimmte Behandlungen bringen nachhaltige Ergebnisse.</li>
          <li><strong>Check:</strong> Vor jeder kosmetischen Aufhellung sollte der Zahnarzt den Zustand prüfen.</li>
        </ul>
      </>
    ),
    boxText: "Eine schonende, individuelle Aufhellung in unserer Zahnarztpraxis in Neuenstadt am Kocher kann Ihnen ein strahlenderes Lächeln schenken – sicher und auf Ihren Zahnzustand abgestimmt.",
    buttonText: "Lassen Sie sich jetzt in Neuenstadt am Kocher von uns beraten!"
  },
  {
    id: "07",
    title: "Professionelle Zahnreinigung (PZR)",
    subtitle: "Wie oft ist sie sinnvoll?",
    icon: <Stethoscope className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Selbst wer dreimal am Tag vorbildlich putzt, erreicht nur etwa 60 Prozent der Zahnoberflächen. Der Rest – vor allem die engen Zahnzwischenräume und der Bereich unter dem Zahnfleischsaum – bleibt ein Spielplatz für Bakterien. Hier hilft die Professionelle Zahnreinigung (PZR).</p>
        <p className="font-bold mb-4">Wie oft sollten Sie zur PZR gehen?</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Der Standard:</strong> Für Menschen mit gesunden Zähnen und gesundem Zahnfleisch ist eine PZR zweimal im Jahr ideal.</li>
          <li><strong>Bei erhöhtem Risiko:</strong> Raucher, Kaffeeliebhaber, Diabetiker oder Patienten mit Parodontitis-Vorerkrankungen sollten alle 3 bis 4 Monate zur Reinigung kommen.</li>
          <li><strong>Der Ablauf in Kürze:</strong> Die Prophylaxe-Fachkraft entfernt harten Zahnstein und weiche Beläge, reinigt die Zwischenräume mit Ultraschall und Pulverstrahl (Airflow), poliert die Zähne spiegelglatt und fluoridiert sie zum Schutz.</li>
        </ul>
      </>
    ),
    boxText: "Wußten Sie, dass viele Krankenkassen die Kosten für eine PZR in unserer Praxis in Neuenstadt am Kocher bezuschussen oder sogar ganz übernehmen? Wir beraten Sie gerne dazu.",
    buttonText: "Buchen Sie Ihren nächsten PZR-Termin ganz einfach online bei uns in Neuenstadt am Kocher!"
  },
  {
    id: "08",
    title: "Mundgeruch dauerhaft loswerden",
    subtitle: "Die besten Hausmittel",
    icon: <Wind className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Mundgeruch (medizinisch: Halitosis) ist ein Tabuthema, das viele belastet. Entgegen der weitläufigen Meinung liegt die Ursache in 90 Prozent der Fälle nicht im Magen, sondern direkt in der Mundhöhle! Bakterien zersetzen dort Speisereste und produzieren übelriechende Schwefelverbindungen.</p>
        <p className="font-bold mb-4">Die besten Sofort-Tipps gegen Mundgeruch:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Benutzen Sie einen Zungenreiniger:</strong> Ein Großteil der geruchsbildenden Bakterien sitzt als Belag auf dem hinteren Drittel der Zunge. Ziehen Sie diesen täglich vorsichtig ab.</li>
          <li><strong>Viel Wasser trinken:</strong> Ein trockener Mund begünstigt Mundgeruch. Wasser regt den Speichelfluss an, der die Mundhöhle natürlich reinigt.</li>
          <li><strong>Zahnzwischenräume reinigen:</strong> Faulende Speisereste zwischen den Zähnen sind eine der häufigsten Ursachen für schlechten Atem.</li>
        </ul>
      </>
    ),
    boxText: "Chronischer Mundgeruch lässt sich oft durch eine gründliche Tiefenreinigung der Zähne und des Zahnfleisches dauerhaft beseitigen. In unserer Zahnarztpraxis in Neuenstadt am Kocher bieten wir eine diskrete Sprechstunde an, um der Ursache systematisch auf den Grund zu gehen.",
    buttonText: "Vereinbaren Sie einen diskreten Beratungstermin in Neuenstadt am Kocher."
  },
  {
    id: "09",
    title: "Zahngesunde Ernährung",
    subtitle: "Knackiges für den Zahnschmelz",
    icon: <Apple className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Dass Zucker schlecht für die Zähne ist, weiß jedes Kind. Doch wie sieht eine Ernährung aus, die unsere Zähne aktiv stärkt? Zähne brauchen Vitamine und Mineralstoffe, um widerstandsfähig zu bleiben.</p>
        <p className="font-bold mb-4">Diese Lebensmittel lieben Ihre Zähne:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Käse und Milchprodukte:</strong> Sie enthalten viel Calcium und Phosphat, die den Zahnschmelz remineralisieren. Zudem legt sich das Fett im Käse wie ein Schutzfilm um die Zähne.</li>
          <li><strong>Knackiges Gemüse (z. B. Karotten, Sellerie):</strong> Das intensive Kauen massiert das Zahnfleisch und regt den Speichelfluss an. Speichel neutralisiert Säuren im Mund.</li>
          <li><strong>Grüner Tee:</strong> Er enthält natürliche Fluoride und Polyphenole, die das Wachstum von Kariesbakterien hemmen.</li>
        </ul>
        <p><strong>Wichtig nach saurem Essen:</strong> Wenn Sie Orangen, Kiwi oder Salat mit Essig-Dressing gegessen haben, warten Sie ca. 30 Minuten mit dem Zähneputzen. Die Säure weicht den Zahnschmelz kurzfristig auf. Putzen Sie sofort, schrubben Sie die wichtige Schutzschicht weg!</p>
      </>
    ),
    boxText: "Sie möchten mehr über die richtige Vorsorge für die ganze Familie erfahren? Unser Prophylaxe-Team in Neuenstadt am Kocher steht Ihnen mit praktischen Tipps für den Alltag zur Seite.",
    buttonText: "Erfahren Sie mehr bei Ihrem nächsten Besuch in Neuenstadt am Kocher!"
  },
  {
    id: "10",
    title: "Ab wann zum Kinderzahnarzt?",
    subtitle: "Der entspannte Start für die Kleinsten",
    icon: <Baby className="w-6 h-6 text-brand-primary" />,
    content: (
      <>
        <p className="mb-4">Wann steht eigentlich der erste Besuch beim Zahnarzt an? Die Antwort überrascht viele Eltern: Schon mit dem Durchbruch des ersten Milchzahns, spätestens aber rund um den ersten Geburtstag.</p>
        <p className="mb-4">Bei diesem ersten Besuch geht es noch nicht um große Behandlungen, sondern darum, dass Ihr Kind die Praxis spielerisch kennenlernt. Die Kleinen dürfen auf dem Stuhl „Aufzug fahren“, die Instrumente anschauen und merken: Hier tut nichts weh!</p>
        <p className="font-bold mb-4">Tipps für gesunde Milchzähne von Anfang an:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Putzen Sie die ersten Zähnchen ab dem ersten Tag mit einer weichen Babyzahnbürste und einer reiskorngroßen Menge Kinderzahnpasta.</li>
          <li>Vermeiden Sie das Dauernuckeln an Fläschchen mit süßen Säften oder Tees – das ist die häufigste Ursache für frühkindliche Karies (Nuckelflaschenkaries).</li>
          <li>Gehen Sie mit gutem Beispiel voran: Lassen Sie Ihr Kind ruhig zusehen, wenn Sie sich selbst die Zähne putzen.</li>
        </ul>
      </>
    ),
    boxText: "In der Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher haben wir uns besonders auf die Bedürfnisse der kleinsten Patienten eingestellt. Mit viel Geduld, freundlichen Behandlungszimmern und spielerischen Erklärungen sorgen wir dafür, dass der Zahnarztbesuch zum positiven Abenteuer wird.",
    buttonText: "Buchen Sie jetzt den ersten Kennenlern-Termin für Ihr Kind in Neuenstadt am Kocher!"
  }
];

export default function RatgeberPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <SEO 
        title="Ratgeber für gesunde Zähne | Zahnarzt Adolf Roth" 
        description="Wertvolle Tipps und Fakten rund um Ihre Zahngesundheit. Erfahren Sie alles über richtiges Zähneputzen, Karies-Vorbeugung, Zahnfleischpflege und Hausmittel bei Zahnschmerzen."
        canonicalPath="/ratgeber" 
        type="article"
      />
      
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-blue mb-8 transition-luxury"
      >
        <ArrowLeft size={16} />
        Zurück zur Startseite
      </Link>

      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-secondary mb-4">
            Unser <span className="text-brand-primary">Ratgeber</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wertvolle Tipps, Ratschläge und interessante Fakten rund um Ihre Zahngesundheit. 
            Vom richtigen Zähneputzen bis zur optimalen Vorsorge.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-16">
        {ratgeberData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <FadeIn 
              key={item.id} 
              direction={isEven ? 'left' : 'right'}
              className={`md:w-[85%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <div 
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"
              >
                {/* Decorative side accent */}
                <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-full bg-brand-primary opacity-80`} />
                
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className={`flex flex-col md:flex-row md:items-start gap-6 mb-8 ${!isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-brand-primary font-bold text-xs tracking-widest uppercase mb-2">
                        Tipp {item.id}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-secondary mb-2 uppercase tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-slate-500 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`text-slate-600 leading-relaxed mb-10 prose prose-slate max-w-none prose-p:mb-4 prose-ul:my-4 prose-li:my-1 ${!isEven ? 'md:text-right' : ''}`}>
                    {item.content}
                  </div>

                  {/* Call to Action Box */}
                  <div className={`bg-slate-50 rounded-2xl p-6 md:p-8 border-l-4 ${!isEven ? 'border-r-4 border-l-0 text-right' : ''} border-brand-primary`}>
                    <p className="text-slate-700 italic mb-6 leading-relaxed font-medium">
                      {item.boxText}
                    </p>
                    <a 
                      href="#booking"
                      className="relative inline-flex items-center gap-3 bg-brand-primary/60 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-primary/80 transition-luxury cursor-pointer shadow-[0_0_15px_rgba(139,29,48,0.5)] border border-brand-primary/50"
                    >
                      <span>Termin vereinbaren</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-luxury">
                        <ArrowRight size={14} className="stroke-[3]" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </main>
  );
}
