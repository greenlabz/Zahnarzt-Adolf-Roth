import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function TeethCleaning() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: 'Effektive Verfärbungsentfernung',
      description: 'Entfernt hartnäckige Kaffee-, Tee-, Rotwein- und Tabakbeläge für ein natürlich weißes Lächeln.',
    },
    {
      title: 'Aktiver Parodontitis-Schutz',
      description: 'Plaque- und Zahnsteinentfernung beugt Zahnfleischentzündungen und Knochenabbau effektiv vor.',
    },
    {
      title: 'Langanhaltendes Frischegefühl',
      description: 'Sorgt für ein spürbar sauberes Mundgefühl und beugt Mundgeruch wirksam vor.',
    },
    {
      title: 'Schonende Reinigungstechnologie',
      description: 'Schmerzfreie Behandlung mit modernster Ultraschalltechnik für eine gründliche und gleichzeitig schonende Reinigung.',
    },
  ];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section id="cleaning" className="scroll-margin-top-24 py-32 md:py-48 bg-slate-50 relative overflow-hidden w-full">
      {/* Background Accent Blobs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy and Benefits */}
          <div className="lg:col-span-6 text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Vorsorge & Ästhetik</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark tracking-tight leading-tight mb-8">
              Professionelle <br />
              <span className="text-gradient font-serif italic pr-2">Zahnreinigung.</span>
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-10">
              Selbst bei optimaler täglicher Zahnpflege erreichen Zahnbürste und Zahnseide nur rund 70% der Zahnoberflächen. Unsere professionelle Zahnreinigung (PZR) schließt diese Lücke: Sie entfernt Zahnstein, Plaque und unschöne Verfärbungen auch in den tiefsten Nischen – schmerzfrei, gründlich und nachhaltig.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-1">
                    <CheckCircle2 size={14} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{benefit.title}</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative inline-flex group mt-4">
              {/* Rotating Glow */}
              <div className="absolute -inset-[3px] rounded-full overflow-hidden blur-[6px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_260deg,#8B1D30_360deg)]" />
              </div>
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

          {/* Right Column: Split Before/After Image Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden border border-slate-200/60 shadow-2xl p-4 bg-white">
              <div 
                ref={containerRef}
                className="w-full h-full rounded-[2.5rem] overflow-hidden relative cursor-col-resize select-none touch-none group"
                onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
              >
                {/* After Image (Background / Clean) */}
                <img 
                  src="/Clean.jpeg" 
                  alt="Nachher (Sauber)" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                {/* Before Image (Foreground / Dirty) clipped */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src="/Dirty.jpeg" 
                    alt="Vorher (Unbehandelt)" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-75"
                  style={{ left: `calc(${sliderPosition}% - 2px)` }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200 text-brand-blue">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-brand-blue/40 rounded-full" />
                      <div className="w-1 h-4 bg-brand-blue/40 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div 
                  className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full pointer-events-none transition-opacity duration-300" 
                  style={{ opacity: sliderPosition > 20 ? 1 : 0 }}
                >
                  Vorher
                </div>
                <div 
                  className="absolute top-6 right-6 bg-brand-blue/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full pointer-events-none transition-opacity duration-300" 
                  style={{ opacity: sliderPosition < 80 ? 1 : 0 }}
                >
                  Nachher
                </div>

              </div>
            </div>
            
            {/* Disclaimer Text */}
            <p className="w-full max-w-lg mt-5 text-[10px] sm:text-xs text-slate-400 font-light leading-relaxed text-center lg:text-left px-2">
              Die professionelle Zahnreinigung (PZR) entfernt Beläge, Zahnstein und leichte Verfärbungen für ein frischeres Gefühl. Das Ergebnis kann je nach Ausgangssituation und individuellen Gewohnheiten (z. B. Rauchen, Kaffee, Rotwein) variieren – wir beraten dich gerne zu deinen persönlichen Möglichkeiten.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
