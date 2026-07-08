import { useState } from 'react';
import { ShieldCheck, Heart, Award, Smile, ArrowUpRight, Activity, Moon, Layers, Crosshair, Wrench, Zap, Stethoscope, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const servicesList = [
  {
    title: "Prophylaxe",
    icon: ShieldCheck,
    img: "/prophylaxe.jpeg",
    desc: "Professionelle Zahnreinigung und Prävention für dauerhafte Mundgesundheit und ein strahlendes Lächeln.",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Zahnersatz",
    icon: Award,
    img: "/zahnersatz_2K_202607061600.jpeg",
    desc: "Hochwertige, ästhetische Kronen und Brücken aus Vollkeramik. Langlebige Lösungen, die sich natürlich anfühlen.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Kinderzahnheilkunde",
    icon: Smile,
    img: "/kinder.jpeg",
    desc: "Einfühlsame und spielerische Behandlung für unsere jüngsten Patienten – für angstfreie Besuche von klein auf.",
    span: "md:col-span-1"
  },
  {
    title: "Angstpatienten",
    icon: Heart,
    img: "/angstpatient.jpg_202607062331.jpeg",
    desc: "Behutsames Vorgehen und entspannte Atmosphäre, um Ihnen die Behandlung so angenehm wie möglich zu gestalten.",
    span: "md:col-span-1",
    isHidden: true
  },
  {
    title: "Individuelle Beratung",
    icon: ShieldCheck,
    img: "/beratung.jpeg",
    desc: "Ausführliche Diagnostik und transparente Aufklärung. Wir nehmen uns Zeit für Ihre Fragen und Bedürfnisse.",
    span: "md:col-span-2",
    objectPosition: "object-top"
  },
  {
    title: "Parodontalbehandlung",
    icon: Activity,
    img: "/paradenthol behandlung.jpeg",
    desc: "Schonende Therapie von Zahnfleischerkrankungen zum sicheren Erhalt Ihres Zahnhalteapparates.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Knirscherschienen",
    icon: Moon,
    img: "/knirscherschiene.jpeg",
    desc: "Maßgeschneiderte Aufbissschienen zum Schutz Ihrer Zahnsubstanz und zur Entlastung der Kiefergelenke.",
    span: "md:col-span-1"
  },
  {
    title: "Teleskopprothesen",
    icon: Layers,
    img: "/teleskopprothesen..jpeg",
    desc: "Hochwertiger Tragekomfort für herausnehmbaren Ersatz – unsichtbare Verankerung und leichte Reinigung.",
    span: "md:col-span-1"
  },
  {
    title: "Führungstherapie",
    icon: Crosshair,
    img: "/Zahnarztpraxis_mit_Beratung_2K_202607061615.jpeg",
    desc: "Präzise Kiefergelenksvermessung und funktionelle Therapie zur Wiederherstellung der optimalen Bisslage.",
    span: "md:col-span-2",
    objectPosition: "object-top"
  },
  {
    title: "Reparaturen von Zahnersatz",
    icon: Wrench,
    img: "/reparaturen von zahnersatz.jpeg",
    desc: "Schnelle und zuverlässige Instandsetzung Ihrer Prothesen oder Brücken direkt durch unser kompetentes Team.",
    span: "md:col-span-1"
  },
  {
    title: "Schmerzbehandlung",
    icon: Zap,
    img: "/Schöne_Zähne_gesunde_Zähne_Lächeln_202607061620.jpeg",
    desc: "Akute Hilfe bei Zahnschmerzen. Wir sorgen für eine sofortige Linderung und zielgerichtete Ursachenbehandlung.",
    span: "md:col-span-1"
  },
  {
    title: "Wurzelkanalbehandlung",
    icon: Stethoscope,
    img: "/wurzelkanal behandlung.jpeg",
    desc: "Moderne, mikroskopgestützte Endodontie zur Rettung entzündeter Zähne – nahezu schmerzfrei und hochpräzise.",
    span: "md:col-span-2"
  }
];

function ServiceCard({ service, minH }: { service: typeof servicesList[0] & { isHidden?: boolean; objectPosition?: string }; minH: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  if (service.isHidden) {
    return (
      <div className="sr-only">
        <h2>{service.title}</h2>
        <p>{service.desc}</p>
      </div>
    );
  }

  return (
    <div
      className={`group relative cursor-pointer rounded-[2rem] ${service.span} ${minH}`}
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="w-full h-full relative transition-transform duration-700 shadow-lg"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          borderRadius: '2rem'
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-slate-900 rounded-[2rem] overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 bg-slate-950/40 z-10 transition-luxury" />
          <img
            src={service.img}
            alt={service.title}
            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60 transition-luxury duration-700 ${service.objectPosition || 'object-center'}`}
          />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-3 border border-white/20">
              <Icon size={18} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight text-white leading-snug">{service.title}</h3>
          </div>
          {/* White arrow - bottom right */}
          <div className="absolute bottom-5 right-5 z-20 w-9 h-9 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center transition-luxury group-hover:bg-white/30">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-[#0a1628] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4">
            <Icon size={22} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-3">{service.title}</h3>
          <p className="text-white/80 text-sm font-light leading-relaxed mb-6">{service.desc}</p>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); const el = document.getElementById('booking'); el?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/30 transition-colors shadow-sm cursor-pointer"
          >
            Termin vereinbaren <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LeistungenPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
      <SEO
        title="Alle Leistungen | Zahnarzt Adolf Roth"
        description="Von Prophylaxe über Kinderzahnheilkunde bis hin zu Zahnersatz und Implantologie. Erfahren Sie alles über das Leistungsspektrum unserer Praxis in Neuenstadt."
        canonicalPath="/leistungen"
        type="website"
        faqItems={[
          { question: 'Was kostet eine professionelle Zahnreinigung in Neuenstadt am Kocher?', answer: 'Die PZR-Kosten hängen vom individuellen Aufwand ab. Viele gesetzliche Kassen bezuschussen sie, private Kassen übernehmen sie oft vollständig.' },
          { question: 'Bieten Sie auch Angstpatienten spezielle Betreuung an?', answer: 'Ja. In unserer Praxis in Neuenstadt am Kocher nehmen wir uns Zeit, erklären jeden Schritt und wählen schonende Betäubungsmethoden für ein entspannteres Erlebnis.' },
          { question: 'Wie erreiche ich die Praxis mit dem Auto?', answer: 'Sie erreichen die Praxis über die Cleversulzbacher Str. 10 in 74196 Neuenstadt am Kocher. Direkt vor und hinter der Praxis stehen ausreichend kostenlose Patientenparkplätze zur Verfügung.' }
        ]}
        rating={4.8}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen', href: '/leistungen' }
        ]}
      />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-blue mb-8 transition-luxury"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue-dark leading-tight mb-10">
          Unser komplettes <span className="text-gradient font-serif italic pr-2">Leistungsspektrum</span>
        </h1>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <p className="text-base text-slate-500 font-light leading-relaxed max-w-xl">
            Entdecken Sie alle unsere Behandlungsfelder im Detail. Tippen Sie auf eine Kachel, um mehr zu erfahren.
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

        {/* Bento Grid – Desktop: unregelmäßig, Mobile: 1 Spalte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 auto-rows-[240px] md:auto-rows-[260px] grid-flow-row-dense">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              minH="min-h-[240px]"
            />
          ))}
        </div>

      </div>
    </div>
  );
}
