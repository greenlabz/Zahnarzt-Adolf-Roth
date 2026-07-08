import { Phone, X, Wrench } from 'lucide-react';

type CallPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CallPopup({ isOpen, onClose }: CallPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" />
      <div className="relative z-10 w-full max-w-sm animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1628]/90 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-blue/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-brand-primary/20 blur-[80px] pointer-events-none" />

          <div className="relative p-8 md:p-10 text-center">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white/90 transition-luxury p-2 rounded-full hover:bg-white/10"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-5">
              <Wrench size={24} className="text-amber-400" />
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
              Online-Buchung wird überarbeitet
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-3">
              Unser Online-Buchungssystem wird gerade für Sie verbessert und ist vorübergehend nicht verfügbar.
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
              Bitte rufen Sie uns kurz an — wir vereinbaren gerne persönlich einen Termin mit Ihnen!
            </p>

            <a
              href="tel:07139452176"
              className="inline-flex items-center justify-center gap-3 w-full bg-brand-blue text-white py-4 rounded-full text-sm font-semibold hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/20 transition-luxury cursor-pointer"
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
