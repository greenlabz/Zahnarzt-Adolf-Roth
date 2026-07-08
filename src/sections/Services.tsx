import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FlipCard({ 
  className, 
  frontContent, 
  backContent, 
  backBg = "bg-brand-primary" 
}: { 
  className: string; 
  frontContent: React.ReactNode; 
  backContent: React.ReactNode; 
  backBg?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`group relative rounded-[2rem] cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="w-full h-full relative transition-transform duration-700"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 rounded-[2rem] overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>
        
        {/* Back */}
        <div 
          className={`absolute inset-0 rounded-[2rem] overflow-hidden ${backBg} p-8 flex flex-col justify-center items-center text-center gap-4`}
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {backContent}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new Event('show-call-popup')); }}
            className="mt-2 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/30 transition-colors shadow-sm cursor-pointer"
          >
            Termin vereinbaren <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-margin-top-24 py-32 md:py-48 bg-slate-50 relative overflow-hidden w-full">
      {/* Background Decorative Mesh */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
          <div className="max-w-3xl text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Unsere Kernkompetenzen</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-blue-dark leading-tight mb-8">
              Zahnärztliche Vollversorgung <br />
              <span className="text-gradient font-serif italic pr-2">für Ihr schönstes Lächeln.</span>
            </h2>
          </div>
          <Link 
            to="/leistungen" 
            className="hidden md:inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-luxury shrink-0 shadow-[0_0_15px_rgba(139,29,48,0.3)] border border-brand-primary/50"
          >
            Alle Leistungen ansehen <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Box 1 (Groß) - Prophylaxe */}
          <FlipCard 
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
            backBg="bg-brand-blue-dark"
            frontContent={
              <>
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/20 transition-luxury" />
                <img 
                  src="/prophylaxe.jpeg" 
                  alt="Prophylaxe" 
                  className="absolute inset-0 w-full h-full object-cover md:grayscale md:contrast-125 opacity-60 transition-luxury duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Prophylaxe</h3>
                  <p className="text-white/80 text-sm md:text-base font-light max-w-sm">Professionelle Zahnreinigung für dauerhafte Mundgesundheit.</p>
                </div>
              </>
            }
            backContent={
              <>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Prophylaxe</h3>
                <p className="text-white/80 text-sm md:text-base font-light">
                  Professionelle Zahnreinigung für dauerhafte Mundgesundheit. Beugt Karies und Parodontitis vor und sorgt für ein frisches Mundgefühl.
                </p>
              </>
            }
          />

          {/* Box 2 (Hoch) - Zahnersatz */}
          <FlipCard 
            className="md:col-span-1 lg:col-span-1 md:row-span-2"
            backBg="bg-brand-blue-dark"
            frontContent={
              <>
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/20 transition-luxury" />
                <img 
                  src="/zahnersatz_2K_202607061600.jpeg" 
                  alt="Zahnersatz" 
                  className="absolute inset-0 w-full h-full object-cover md:grayscale md:contrast-125 opacity-60 transition-luxury duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Zahnersatz</h3>
                  <p className="text-white/80 text-sm font-light">Hochwertige, ästhetische Kronen und Brücken.</p>
                </div>
              </>
            }
            backContent={
              <>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Zahnersatz</h3>
                <p className="text-white/80 text-sm font-light">
                  Hochwertige, ästhetische Kronen und Brücken. Individuell angepasst für ein natürliches Aussehen und volle Kaukraft.
                </p>
              </>
            }
          />

          {/* Box 3 - Kinderzahnheilkunde */}
          <FlipCard 
            className=""
            backBg="bg-brand-blue-dark"
            frontContent={
              <>
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/20 transition-luxury" />
                <img 
                  src="/kinder.jpeg" 
                  alt="Kinderzahnheilkunde" 
                  className="absolute inset-0 w-full h-full object-cover md:grayscale md:contrast-125 opacity-60 transition-luxury duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <h3 className="text-lg font-bold text-white tracking-tight">Kinderzahnheilkunde</h3>
                </div>
              </>
            }
            backContent={
              <>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Kinderzahnheilkunde</h3>
                <p className="text-white/80 text-sm font-light">
                  Einfühlsame Behandlung für unsere kleinen Patienten, damit der Zahnarztbesuch von Anfang an positiv erlebt wird.
                </p>
              </>
            }
          />

          {/* Box 4 - Schmerzbehandlung (formerly Angstpatienten) */}
          <FlipCard 
            className=""
            backBg="bg-brand-blue-dark"
            frontContent={
              <>
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/20 transition-luxury" />
                <img 
                  src="/Schöne_Zähne_gesunde_Zähne_Lächeln_202607061620.jpeg" 
                  alt="Schmerzbehandlung" 
                  className="absolute inset-0 w-full h-full object-cover md:grayscale md:contrast-125 opacity-60 transition-luxury duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <h3 className="text-lg font-bold text-white tracking-tight">Schmerzbehandlung</h3>
                </div>
              </>
            }
            backContent={
              <>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Schmerzbehandlung</h3>
                <p className="text-white/80 text-sm font-light">
                  Akute Hilfe bei Zahnschmerzen. Wir sorgen für eine sofortige Linderung und zielgerichtete Ursachenbehandlung.
                </p>
              </>
            }
          />

          <div className="sr-only">
            <h3>Angstpatienten</h3>
            <p>
              Behutsames Vorgehen und entspannte Atmosphäre. Wir nehmen uns besonders viel Zeit und klären jeden Schritt in Ruhe auf.
            </p>
          </div>

          {/* Box 5 (Breit) - Individuelle Beratung */}
          <FlipCard 
            className="md:col-span-2 lg:col-span-2"
            backBg="bg-brand-blue-dark"
            frontContent={
              <>
                <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/20 transition-luxury" />
                <img 
                  src="/beratung.jpeg" 
                  alt="Beratung" 
                  className="absolute inset-0 w-full h-full object-cover object-top md:grayscale md:contrast-125 opacity-60 transition-luxury duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Individuelle Beratung</h3>
                  <p className="text-white/80 text-sm font-light max-w-sm">Transparente Aufklärung und Zeit für Ihre Fragen.</p>
                </div>
              </>
            }
            backContent={
              <>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Individuelle Beratung</h3>
                <p className="text-white/80 text-sm font-light">
                  Transparente Aufklärung und Zeit für Ihre Fragen. Gemeinsam finden wir die beste und schonendste Lösung für Ihre Zahngesundheit.
                </p>
              </>
            }
          />

          {/* Box 6 - Zu allen Leistungen CTA */}
          <Link to="/leistungen" className="hidden md:flex group relative overflow-hidden rounded-[2rem] bg-brand-blue-dark cursor-pointer flex-col justify-center items-center text-center p-8 transition-luxury hover:brightness-110">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/25 transition-luxury">
              <ArrowRight size={26} className="stroke-[2.5] text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug mb-2">Alle 12 Leistungen ansehen</h3>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">Jetzt entdecken →</p>
          </Link>
          
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/leistungen" 
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(139,29,48,0.3)] border border-brand-primary/50"
          >
            Alle Leistungen ansehen <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
