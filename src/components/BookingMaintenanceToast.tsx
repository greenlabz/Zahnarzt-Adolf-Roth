import { useState, useEffect } from 'react';
import { Phone, X, AlertCircle } from 'lucide-react';

export default function BookingMaintenanceToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setIsVisible(true);
    };

    window.addEventListener('show-booking-maintenance', handleTrigger);
    return () => {
      window.removeEventListener('show-booking-maintenance', handleTrigger);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setIsVisible(false)}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in cursor-pointer" 
      />

      {/* Modal Container */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-left relative overflow-hidden w-full max-w-xl z-10 animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-luxury p-2 rounded-full hover:bg-slate-100/50 cursor-pointer"
          aria-label="Schließen"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col gap-6 items-start">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
            <AlertCircle size={32} className="stroke-[2]" />
          </div>
          
          <div>
            <h3 className="font-extrabold text-slate-900 text-2xl md:text-3xl tracking-tight mb-4 leading-tight">
              Buchungssystem wird aktualisiert
            </h3>
            <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-8">
              Unser Online-Buchungssystem wird momentan überarbeitet und steht in Kürze wieder bereit. 
              Rufen Sie uns gerne an, um Ihren Termin direkt zu vereinbaren!
            </p>
            
            <a 
              href="tel:+497139452174" 
              className="inline-flex items-center gap-3 bg-[#9c2c40]/90 backdrop-blur-md text-white px-6 py-4 rounded-full text-sm md:text-base font-bold transition-luxury border border-[#9c2c40]/20 hover:bg-[#9c2c40] cursor-pointer"
            >
              <Phone size={16} />
              <a href="tel:+497139452176" className="text-white hover:text-white/80 transition-luxury">Jetzt anrufen: 07139 452176</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
