import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] z-[100]"
      style={{ animation: 'fadeInUp 0.8s ease-out both' }}
    >
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-3xl p-6">
        <h3 className="text-white font-bold text-lg mb-2">Ihre Privatsphäre</h3>
        <p className="text-slate-300 text-sm font-light leading-relaxed mb-5">
          Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
          <a href="/impressum" className="text-brand-gold hover:text-white transition-colors ml-1 underline underline-offset-2">
            Datenschutz
          </a>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => handleAccept('all')}
            className="flex-1 bg-brand-primary text-white py-2.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110 shadow-[0_0_15px_rgba(139,29,48,0.3)] transition-luxury text-center border border-brand-primary/50"
          >
            Alle akzeptieren
          </button>
          <button 
            onClick={() => handleAccept('essential')}
            className="flex-1 bg-white/5 border border-white/20 text-white py-2.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-luxury text-center"
          >
            Nur essenzielle
          </button>
        </div>
      </div>
    </div>
  );
}
