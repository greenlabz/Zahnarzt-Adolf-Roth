import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section 
        id="hero" 
        className="relative h-screen w-full flex flex-col justify-between px-6 sm:px-12 md:px-24 pt-32 pb-8 overflow-hidden"
      >
        {/* Full-screen Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXj1-OKWywPQB9TnJxdIiKTFR73GDChSbjQCm04PP2CJuWzE-Ec6V7sW7NVjPhJGMx2uRmQo1jx3sP7JMKkGG7H4J9zEA45clyc98EVHhq81iK4mpeL_9p-aMEd7qR-IfEjXrX4V_s_ruTOHPmJ38l2oKWDK3DnjGWn_JLbs3hbMaku1gnOVIwrXBkIGkXzwlYRF49h6KmGuCa1Pz4vWn6r88j7ucCEX_7dnZP3uvZXrjjWES6EuqkwwPyzGuduVmYZMkdvcvOJ7g5" 
            alt="Familienfreundliche Zahnpflege" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/30" />
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto w-full z-10 flex-grow flex flex-col justify-center items-start text-left">
          {/* Subheading */}
          <p className="text-white/80 text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Zahnarztpraxis in Neuenstadt am Kocher
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] uppercase">
            Zähne, <br />
            denen man ansieht, <br />
            <span className="text-white font-serif italic normal-case pr-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              dass sie <span className="relative inline-block text-white font-serif italic pr-1">
                gut behandelt
                <svg className="absolute w-[110%] h-[24px] -bottom-[10px] -left-[5%] overflow-visible text-[#9c2c40]" viewBox="0 0 100 20" preserveAspectRatio="none" style={{ animation: 'fadeInDraw 1.2s ease-out 0.6s both' }}>
                  <path d="M 0,10 Q 50,22 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" pathLength="100" />
                </svg>
              </span> wurden.
            </span>
          </h1>

          {/* Subline / transition */}
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-white/90 font-serif italic tracking-tight">
            Zahnärztliche Vollversorgung für Ihr schönstes Lächeln.
          </p>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-slate-300 font-light max-w-lg leading-relaxed">
            Zahnmedizin aus Neuenstadt am Kocher für Neuenstadt am Kocher, Hardthausen, Langenbrettach, Eberstadt, Oedheim und Bad Friedrichshall. Prophylaxe, Zahnersatz, Angstpatienten und Notfalltermine in einem modernen Konzept.
          </p>

          {/* CTA and Badge Container */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* CTA Button */}
            <div className="relative inline-flex group">
              {/* Rotating Glow */}
              <div className="absolute -inset-[3px] rounded-full overflow-hidden blur-[6px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
              </div>
              
              {/* Actual Button */}
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

        {/* Bottom Bar */}
        <div className="hidden sm:flex max-w-7xl mx-auto w-full z-10 border-t border-white/10 pt-4 justify-center items-center text-[10px] text-white/60 font-medium uppercase tracking-wider">
          <span>Kompetenz für Ihre Zähne.</span>
        </div>
      </section>

      {/* Statistics Banner */}
      <div className="bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient font-serif italic pr-2 pb-1">4,8</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-widest">Google Bewertung</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient font-serif italic pr-2 pb-1">30+</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-widest">Jahre Erfahrung</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient font-serif italic pr-2 pb-1">12.000+</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-widest">Behandelte Patienten</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient font-serif italic pr-2 pb-1">LZK</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-widest">Mitglied</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
