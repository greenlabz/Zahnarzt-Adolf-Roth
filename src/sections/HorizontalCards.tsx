import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sparkles, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const imageContainer = imageContainerRef.current;
    
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;

    if (!section || !container || !card1 || !card2 || !card3) return;

    // Calculate container translation for each card index
    const getScrollAmountForCard = (index: number) => {
      const cardWidth = card1.offsetWidth || 440;
      const gap = window.innerWidth >= 768 ? 48 : 32;
      return -index * (cardWidth + gap);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3500', // scroll distance for the pinning duration
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true, // handles responsive resize updates
      },
    });

    // Initial setups for sequential slide-ins and image stacks
    gsap.set([card2, card3], { opacity: 0 });
    if (imageContainer) {
      gsap.set(imageContainer, { opacity: 0, y: 150 });
    }
    if (img1 && img2 && img3) {
      gsap.set(img1, { x: 0, y: 0, opacity: 1 });
      gsap.set([img2, img3], { x: '100%', opacity: 0 });
    }

    // Step 1: Card 1 slides up from the bottom, and Image Container slides/fades in
    tl.fromTo(card1, 
      { y: '100vh', opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
    if (imageContainer) {
      tl.to(imageContainer, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }, '<');
    }

    // Pause on Card 1
    tl.to({}, { duration: 0.8 });

    // Step 2: Card 2 slides in from the right, container scrolls left, and Image 2 stacks on Image 1
    tl.fromTo(card2,
      { x: '100vw', opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: 'power2.out' }
    );
    tl.to(container, {
      x: () => getScrollAmountForCard(1),
      ease: 'power2.out',
      duration: 1.8,
    }, '<');
    if (img2) {
      tl.fromTo(img2,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 1.8, ease: 'power2.out' },
        '<'
      );
    }

    // Pause on Card 2
    tl.to({}, { duration: 0.8 });

    // Step 3: Card 3 slides in from the right, container scrolls left, and Image 3 stacks on Image 2
    tl.fromTo(card3,
      { x: '100vw', opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: 'power2.out' }
    );
    tl.to(container, {
      x: () => getScrollAmountForCard(2),
      ease: 'power2.out',
      duration: 1.8,
    }, '<');
    if (img3) {
      tl.fromTo(img3,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 1.8, ease: 'power2.out' },
        '<'
      );
    }

    // Pause on Card 3 before releasing
    tl.to({}, { duration: 0.8 });

  }, { scope: sectionRef });

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="h-screen w-full relative bg-brand-blue-dark overflow-hidden flex flex-col justify-center"
    >
      {/* Background Accent Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="absolute top-12 md:top-20 left-12 md:left-24 max-w-xl text-left z-20">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Das Behandlungskonzept</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase">
          <span className="text-[#9c2c40] font-serif italic pr-2">Unsere drei</span> <br />
          <span className="text-gradient-gold font-serif italic pr-2">Behandlungssäulen.</span>
        </h2>
      </div>

      {/* Main Split Layout Container */}
      <div className="w-full h-[60vh] md:h-[55vh] flex items-center relative z-10 mt-16 md:mt-24">
        
        {/* Left Column: Pinned horizontal scrolling cards */}
        <div className="w-full md:w-1/2 h-full flex items-center overflow-hidden relative">
          <div 
            ref={containerRef} 
            className="flex items-center gap-8 md:gap-12 pl-12 md:pl-24 pr-12 w-max"
            style={{ willChange: 'transform' }}
          >
            {/* Card 1: Angstfreie Zahnmedizin */}
            <div 
              ref={card1Ref} 
              className="w-[300px] sm:w-[380px] md:w-[440px] h-[400px] md:h-[440px] bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group shrink-0"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
              <div className="text-left">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-105 transition-luxury duration-500">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">01 / Angstfreiheit</h3>
                <p className="text-white text-xs md:text-sm font-light leading-relaxed">
                  Wir nehmen uns viel Zeit für dich. Mit einfühlsamer Beratung und schmerzfreien Betäubungsmethoden machen wir deinen Besuch absolut entspannt und stressfrei.
                </p>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase text-left">Vertrauen & Fürsorge</div>
            </div>

            {/* Card 2: Prophylaxe & Ästhetik */}
            <div 
              ref={card2Ref}
              className="w-[300px] sm:w-[380px] md:w-[440px] h-[400px] md:h-[440px] bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group shrink-0"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
              <div className="text-left">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-105 transition-luxury duration-500">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">02 / Ästhetik</h3>
                <p className="text-white text-xs md:text-sm font-light leading-relaxed">
                  Schöne Zähne sind gesunde Zähne. Durch professionelle Zahnreinigung (PZR) und individuelle ästhetische Zahnbehandlungen verhelfen wir dir zu einem gepflegten, natürlichen Auftritt.
                </p>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase text-left">Design & Perfektion</div>
            </div>

            {/* Card 3: Zahnerhalt & Implantologie */}
            <div 
              ref={card3Ref}
              className="w-[300px] sm:w-[380px] md:w-[440px] h-[400px] md:h-[440px] bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group shrink-0"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
              <div className="text-left">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-105 transition-luxury duration-500">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">03 / Zahnerhalt</h3>
                <p className="text-white text-xs md:text-sm font-light leading-relaxed">
                  Deine natürlichen Zähne stehen bei uns immer an erster Stelle. Sollte dennoch Zahnersatz nötig sein, setzen wir auf hochwertige, biologisch verträgliche Lösungen wie Kronen und Brücken für ein natürliches Gefühl und Aussehen.
                </p>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase text-left">Biologische Verträglichkeit</div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked images corresponding to each card */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-start pl-6 pr-12 lg:pl-12 lg:pr-24 relative">
          <div 
            ref={imageContainerRef} 
            className="w-[380px] lg:w-[480px] h-[460px] lg:h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-850 bg-slate-950/40 relative"
          >
            
            {/* Image 1 */}
            <img 
              ref={img1Ref}
              src="/Zahnarztpraxis_mit_Beratung_2K_202607061615.jpeg" 
              alt="Angstfreie Behandlung" 
              className="absolute inset-0 w-full h-full object-cover transition-luxury duration-700"
            />
            {/* Image 2 */}
            <img 
              ref={img2Ref}
              src="/Schöne_Zähne_gesunde_Zähne_Lächeln_202607061620.jpeg" 
              alt="Ästhetische Behandlung" 
              className="absolute inset-0 w-full h-full object-cover transition-luxury duration-700"
            />
            {/* Image 3 */}
            <img 
              ref={img3Ref}
              src="/zahnersatz_2K_202607061600.jpeg" 
              alt="Zahnerhalt & Implantologie" 
              className="absolute inset-0 w-full h-full object-cover transition-luxury duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-12 md:bottom-20 left-12 md:left-24 flex items-center gap-3 z-20 text-slate-500 text-xs font-semibold uppercase tracking-wider">
        <span className="w-8 h-px bg-slate-700 animate-pulse" />
        <span>Scrolle weiter nach unten</span>
      </div>
    </section>
  );
}
