'use client';

import { useState, useEffect, useCallback } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

const SECTIONS = [
  { id: 'services', label: 'Leistungen' },
  { id: 'process', label: 'Ablauf' },
  { id: 'about', label: 'Über uns' },
  { id: 'reviews', label: 'Feedback' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  const updateScrollState = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const handleHash = () => setActiveId(window.location.hash.replace('#', ''));
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full pointer-events-none px-4">
      <div
        className={`glass-pill-nav rounded-[2rem] flex flex-col transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden pointer-events-auto shadow-lg w-full ${
          isScrolled ? 'max-w-full sm:max-w-[380px] md:max-w-[340px]' : 'max-w-[900px]'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full px-4 py-2 relative ${!isScrolled ? 'md:px-6 md:py-3 md:gap-3' : ''}`}
        >
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/A.R.Logo Clean.png"
              alt="Zahnarzt Adolf Roth"
              className={`w-auto origin-left group-hover:opacity-80 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] h-8 scale-150 ${!isScrolled ? 'md:h-12 md:scale-[1.6]' : ''}`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? 'grid-cols-[0fr] opacity-0 mx-0' : 'grid-cols-[1fr] opacity-100 mx-auto'
            }`}
          >
            <div className="overflow-hidden flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {SECTIONS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative whitespace-nowrap transition-colors duration-300 ${
                      isActive ? 'text-brand-primary' : 'hover:text-brand-primary'
                    }`}
                  >
                    <span className="relative inline-flex items-center">
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand-primary transition-all duration-300 ${
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-80 group-hover:translate-y-0'
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
              <button
                onClick={() => window.dispatchEvent(new Event('show-email-modal'))}
                className="relative whitespace-nowrap transition-colors duration-300 hover:text-brand-primary group cursor-pointer uppercase font-semibold tracking-wider"
              >
                <span className="relative inline-flex items-center">
                  Kontakt
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand-primary transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-80 group-hover:translate-y-0" />
                </span>
              </button>
            </div>
          </nav>

          {/* Phone */}
          <a
            href="tel:07139452176"
            className={`hidden sm:grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? 'grid-cols-[0fr] opacity-0 ml-0' : 'grid-cols-[1fr] opacity-100 ml-auto'
            }`}
          >
            <div className="overflow-hidden flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary pr-3 transition-colors duration-300">
              <Phone size={14} className="text-brand-primary shrink-0" />
              <span className="whitespace-nowrap">07139 452176</span>
            </div>
          </a>

          {/* Primary CTA */}
          <div
            className={`inline-flex group shrink-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              !isScrolled
                ? 'absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:ml-0 md:mr-0'
                : 'absolute left-1/2 -translate-x-1/2'
            }`}
          >
            <div className="absolute -inset-[2px] rounded-full overflow-hidden blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#8B1D30_360deg)]" />
            </div>

            <a
              href="#booking"
              className={`relative flex items-center gap-1.5 bg-brand-primary text-white rounded-full font-bold shadow-[0_0_12px_rgba(139,29,48,0.45)] border border-white/10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 px-3 py-2 text-[10px] ${!isScrolled ? 'md:px-4 md:py-2.5 md:text-xs' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={12} className={!isScrolled ? 'md:w-3.5 md:h-3.5' : 'w-3 h-3'} />
              <span className="whitespace-nowrap">Termin buchen</span>
            </a>
          </div>

          {/* Burger Menu */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`text-brand-primary transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] p-1 shrink-0 ${
              !isScrolled ? 'md:hidden' : 'block'
            }`}
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
            <nav className="flex flex-col p-6 gap-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
              {SECTIONS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative inline-flex items-center transition-colors duration-300 ${
                      isActive ? 'text-brand-primary' : 'hover:text-brand-primary'
                    }`}
                  >
                    <span className="relative inline-flex items-center">
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand-primary transition-all duration-300 ${
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-80 group-hover:translate-y-0'
                        }`}
                      />
                    </span>
                  </a>
                );
              })}

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.dispatchEvent(new Event('show-email-modal'));
                }}
                className="relative inline-flex items-center text-left transition-colors duration-300 hover:text-brand-primary group cursor-pointer w-fit uppercase font-semibold tracking-wider"
              >
                <span className="relative inline-flex items-center">
                  Kontakt
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand-primary transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-80 group-hover:translate-y-0" />
                </span>
              </button>

              <div className="w-full h-px bg-slate-200/50 my-2" />

              <a
                href="tel:07139452176"
                className="flex items-center gap-2 text-brand-primary hover:text-brand-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                <span>07139 452176</span>
              </a>

              <a
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary text-white font-bold px-4 py-2 shadow-[0_0_12px_rgba(139,29,48,0.45)] border border-white/10 hover:brightness-110 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] mt-2"
              >
                <Calendar size={14} />
                <span>Termin buchen</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
