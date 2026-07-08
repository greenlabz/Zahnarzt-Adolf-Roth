import { Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Über 30 Jahre klinische und praktische Erfahrung',
    'Spezialisierung auf sanfte Behandlungen für Angstpatienten',
    'Digitalisierte Praxisabläufe für höchste Präzision'
  ];

  return (
    <section id="about" className="scroll-margin-top-24 py-32 md:py-48 bg-white relative overflow-hidden w-full">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Bio Text Column */}
        <div className="lg:col-span-7 text-left">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">Das Team hinter deinem Lächeln</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark tracking-tight leading-tight mb-8">
            Zahnarztpraxis A. Roth <br />
            <span className="text-gradient font-serif italic pr-2">Personalisierte Behandlungen.</span>
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Zahnmedizin, wie sie heute sein sollte</h3>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4">
            Praxisinhaber Adolf Roth führt die Praxis in zweiter Generation und bringt echte Erfahrung mit einem klaren Blick nach vorn zusammen. Seine Haltung ist einfach: Eine Behandlung zählt erst dann, wenn du dich dabei wohl und gut aufgehoben fühlst.
          </p>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4">
            An seiner Seite steht ein eingespieltes Praxisteam aus spezialisierten Prophylaxefachkräften und Assistenzpersonal, das sich laufend weiterbildet. So sorgen wir gemeinsam für die gleiche Aufmerksamkeit und Sorgfalt bei jedem Termin.
          </p>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8">
            Moderne Technik und stetige Weiterentwicklung sind für uns selbstverständlich. Deshalb vertrauen uns Patient:innen aus Hardthausen, Langenbrettach, Eberstadt, Oedheim, Bad Friedrichshall und dem gesamten Landkreis Heilbronn – ganz ohne den persönlichen Kontakt zu verlieren, der uns wichtig ist.
          </p>



          {/* Highlights List */}
          <ul className="space-y-4 mb-12">
            {highlights.map((h, i) => (
              <li key={i} className={`flex items-start gap-3 ${h.includes('Angstpatienten') ? 'sr-only' : ''}`}>
                <div className="w-5 h-5 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-slate-700 text-sm font-semibold">{h}</span>
              </li>
            ))}
          </ul>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100/80 text-left">
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-primary tracking-tight">98%</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Weiterempfehlung</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-primary tracking-tight">30+</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Jahre Praxiserfahrung</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-primary tracking-tight">5</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Fachkräfte im Team</span>
            </div>
          </div>
        </div>

        {/* Right Portrait Column (Artistic Asymmetry) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl p-4 bg-slate-50/50">
            <div className="w-full h-full rounded-[2.5rem] bg-slate-200/50 relative overflow-hidden flex flex-col justify-end p-8">
              
              <img 
                src="/adolf-clean.png" 
                alt="Adolf Roth (jun.) - Zahnarzt und Inhaber der Praxis in Neuenstadt am Kocher" 
                className="absolute inset-0 w-full h-full object-cover transition-luxury hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Graphic badge overlay */}
              <div className="relative z-10 glass-panel p-6 rounded-2xl border border-white/60 text-left">
                <p className="text-[9px] font-mono uppercase tracking-widest text-brand-blue mb-1">Zahnarzt & Praxisinhaber</p>
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">Adolf Roth (jun.)</h4>
                <p className="text-xs text-slate-500 font-light mt-1">Ihr Spezialist für Ästhetik & Funktion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
