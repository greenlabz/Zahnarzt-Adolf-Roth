import { Phone, X, Wrench, Clock } from 'lucide-react';

type CallPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CallPopup({ isOpen, onClose }: CallPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-md animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.15)] border border-slate-100">

          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-primary to-brand-blue" />

          <div className="relative p-8 md:p-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-600 transition-colors duration-200 p-2 rounded-full hover:bg-slate-50"
              aria-label="Schließen"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mx-auto mb-6">
              <Wrench size={24} className="text-amber-600" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight text-center mb-3">
              Online-Buchung wird überarbeitet
            </h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed text-center mb-2">
              Unser Online-Terminplaner wird derzeit für Sie verbessert und ist vorübergehend nicht verfügbar.
            </p>
            <p className="text-slate-500 text-sm font-light leading-relaxed text-center mb-6">
              Vereinbaren Sie Ihren Termin gerne telefonisch — wir sind persönlich für Sie da.
            </p>

            {/* Öffnungszeiten */}
            <div className="bg-slate-50 rounded-2xl p-4 mb-8 border border-slate-100 text-center">
              <p className="text-slate-700 text-sm font-medium mb-2 flex justify-center items-center gap-2">
                <Clock size={16} className="text-brand-blue" /> Unsere Sprechzeiten
              </p>
              <div className="text-slate-500 text-sm font-light leading-relaxed">
                <p>Mo + Do: 08:00 – 12:00, 14:00 – 18:00</p>
                <p>Di + Mi + Fr: 08:00 – 12:00</p>
                <p className="text-slate-400">Sa + So: geschlossen</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:07139452176"
              className="flex items-center justify-center gap-3 w-full bg-brand-blue text-white py-4 rounded-full text-sm font-semibold hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-brand-blue/15 transition-all duration-300 cursor-pointer"
            >
              <Phone size={16} />
              <span>Jetzt anrufen: 07139 452176</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
