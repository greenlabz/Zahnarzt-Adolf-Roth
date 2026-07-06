import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 50 && isMenuOpen) {
        // Optional: close menu on scroll
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full pointer-events-none px-4">
      <div 
        className={`glass-pill-nav rounded-[2rem] flex flex-col transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto shadow-lg w-full
          ${isScrolled ? 'max-w-full sm:max-w-[380px] md:max-w-[340px]' : 'max-w-5xl'}
        `}
      >
        <div className={`flex items-center justify-between transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full px-4 py-2 gap-2 relative ${!isScrolled ? 'md:px-6 md:py-3 md:gap-3' : ''}`}>
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/A.R.Logo Clean.png"
              alt="Zahnarzt Adolf Roth"
              className={`w-auto origin-left group-hover:opacity-80 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] h-8 scale-150 ${!isScrolled ? 'md:h-12 md:scale-[1.6]' : ''}`}
            />
          </a>

          {/* Desktop Navigation Links (Hides on scroll) */}
          <nav 
            className={`hidden md:grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isScrolled ? 'grid-cols-[0fr] opacity-0 mx-0' : 'grid-cols-[1fr] opacity-100 mx-auto'}
            `}
          >
            <div className="overflow-hidden flex items-center gap-7 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <a href="#services" className="hover:text-brand-blue transition-luxury whitespace-nowrap">Leistungen</a>
              <a href="#process" className="hover:text-brand-blue transition-luxury whitespace-nowrap">Ablauf</a>
              <a href="#about" className="hover:text-brand-blue transition-luxury whitespace-nowrap">Über uns</a>
              <a href="#reviews" className="hover:text-brand-blue transition-luxury whitespace-nowrap">Feedback</a>
            </div>
          </nav>

          {/* Phone (Hides on scroll) */}
          <a 
            href="tel:+497139452174" 
            className={`hidden sm:grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isScrolled ? 'grid-cols-[0fr] opacity-0 ml-0' : 'grid-cols-[1fr] opacity-100 ml-auto'}
            `}
          >
            <div className="overflow-hidden flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-blue pr-3">
              <Phone size={14} className="text-brand-blue shrink-0" />
              <span className="whitespace-nowrap">07139 452176</span>
            </div>
          </a>

          {/* Primary CTA */}
          <div className={`inline-flex group shrink-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            !isScrolled 
              ? 'absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:ml-0 md:mr-0' 
              : 'absolute left-1/2 -translate-x-1/2'
          }`}>
            <div className="absolute -inset-[2px] rounded-full overflow-hidden blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
            </div>
            
            <a 
              href="#booking" 
              className={`relative flex items-center gap-1.5 bg-brand-primary/60 backdrop-blur-md text-white rounded-full font-bold hover:bg-brand-primary/80 shadow-[0_0_10px_rgba(139,29,48,0.5)] border border-brand-primary/50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] px-3 py-2 text-[10px] ${!isScrolled ? 'md:px-4 md:py-2.5 md:text-xs' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={12} className={!isScrolled ? 'md:w-3.5 md:h-3.5' : 'w-3 h-3'} />
              <span className="whitespace-nowrap">Termin buchen</span>
            </a>
          </div>

          {/* Burger Menu (Shows on scroll OR on mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-slate-800 hover:text-brand-primary transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] p-1 shrink-0
              ${!isScrolled ? 'md:hidden' : 'block'}
            `}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu Items */}
        <div 
          className={`grid transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100 border-t border-white/20' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col p-6 gap-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Leistungen</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Ablauf</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Über uns</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Feedback</a>
              
              <div className="w-full h-px bg-slate-200/50 my-2" />
              
              <a 
                href="tel:+497139452174" 
                className="flex items-center gap-2 text-brand-blue hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                <span>07139 452176</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
