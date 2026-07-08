import { Phone, Wrench, Clock, CalendarOff } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="scroll-margin-top-24 py-32 md:py-48 bg-slate-50/30 relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Online Terminplaner</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark tracking-tight leading-tight mb-6">
            In wenigen Schritten zum Wunschtermin, <br />
            <span className="text-gradient font-serif italic pr-2">einfach und bequem.</span>
          </h2>
          <p className="text-slate-500 font-light max-w-md mx-auto">
            Wähle dein Anliegen, trage deinen Wunschtermin ein und wir reservieren deine Zeit.
          </p>
        </div>

        <div className="glass-panel border border-slate-100 rounded-[2.5rem] p-8 md:p-14 min-h-[400px] flex flex-col items-center justify-center shadow-2xl">
          {/* Maintenance Notice */}
          <div className="flex flex-col items-center text-center max-w-lg">
            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-3xl bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                <Wrench size={32} className="text-amber-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
                <CalendarOff size={12} className="text-white" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Unser Buchungssystem wird verbessert
            </h3>
            <p className="text-slate-500 font-light leading-relaxed mb-3">
              Wir arbeiten gerade daran, Ihnen ein noch besseres Online-Buchungserlebnis zu bieten. Die Online-Terminvergabe ist daher vorübergehend nicht verfügbar.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              Rufen Sie uns gerne kurz an — wir vereinbaren Ihren Wunschtermin persönlich und unkompliziert!
            </p>

            <a
              href="tel:07139452176"
              className="inline-flex items-center justify-center gap-3 bg-brand-blue text-white py-4 px-10 rounded-full text-sm font-semibold hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 cursor-pointer mb-6"
            >
              <Phone size={18} />
              <span>Jetzt anrufen: 07139 452176</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
              <Clock size={13} className="text-slate-300" />
              <span>Mo, Di + Do: 08:00 – 12:00, 14:00 – 18:00 · Mi + Fr: 08:00 – 12:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
