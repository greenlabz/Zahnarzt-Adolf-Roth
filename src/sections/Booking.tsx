import { useState } from 'react';
import { Calendar, User, Phone, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';

type Step = 'reason' | 'datetime' | 'contact' | 'success';

export default function Booking() {
  const [step, setStep] = useState<Step>('reason');
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    isAnxious: false,
  });

  const reasons = [
    { id: 'checkup', title: 'Kontrolluntersuchung & Vorsorge', duration: '30 Min', desc: 'Regelmäßiger Check für Ihre Zahngesundheit.' },
    { id: 'cleaning', title: 'Professionelle Zahnreinigung (PZR)', duration: '60 Min', desc: 'Tiefenreinigung und Zahnsteinentfernung.' },
    { id: 'pain', title: 'Akute Zahnschmerzen / Notfall', duration: '30 Min', desc: 'Schnelle Hilfe bei akuten Beschwerden.' }
  ];

  const dates = [
    { day: 'Mo', date: '22. Jun', full: 'Montag, 22. Juni 2026' },
    { day: 'Di', date: '23. Jun', full: 'Dienstag, 23. Juni 2026' },
    { day: 'Mi', date: '24. Jun', full: 'Mittwoch, 24. Juni 2026' },
    { day: 'Do', date: '25. Jun', full: 'Donnerstag, 25. Juni 2026' },
    { day: 'Fr', date: '26. Jun', full: 'Freitag, 26. Juni 2026' },
  ];

  const timeSlots = [
    '08:30 Uhr', '09:15 Uhr', '10:00 Uhr', 
    '11:15 Uhr', '14:30 Uhr', '15:15 Uhr', 
    '16:00 Uhr', '17:30 Uhr'
  ];

  const handleReasonSelect = () => {
    window.dispatchEvent(new Event('show-booking-maintenance'));
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep('contact');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.name && contactData.email && contactData.phone) {
      setStep('success');
    }
  };

  return (
    <section id="booking" className="scroll-margin-top-24 py-32 md:py-48 bg-slate-50/30 relative overflow-hidden w-full">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
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

        {/* Booking Card Container */}
        <div className="glass-panel border border-slate-100 rounded-[2.5rem] p-8 md:p-14 min-h-[500px] flex flex-col justify-between shadow-2xl">
          
          {/* Step Indicator (only shown before success) */}
          {step !== 'success' && (
            <div className="flex items-center justify-between border-b border-slate-100/80 pb-8 mb-10 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 'reason' ? 'bg-brand-blue text-white' : 'bg-brand-blue-light text-brand-blue'}`}>1</div>
                <span className={`${step === 'reason' ? 'text-slate-900' : 'text-slate-400'}`}>Grund</span>
              </div>
              <ChevronRight size={14} className="text-slate-300" />
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 'datetime' ? 'bg-brand-blue text-white' : step === 'contact' ? 'bg-brand-blue-light text-brand-blue' : 'bg-slate-100 text-slate-400'}`}>2</div>
                <span className={`${step === 'datetime' ? 'text-slate-900' : 'text-slate-400'}`}>Terminwahl</span>
              </div>
              <ChevronRight size={14} className="text-slate-300" />
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 'contact' ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'}`}>3</div>
                <span className={`${step === 'contact' ? 'text-slate-900' : 'text-slate-400'}`}>Kontakt</span>
              </div>
              <ChevronRight size={14} className="text-slate-300" />
            </div>
          )}

          {/* STEP 1: Reason for Visit */}
          {step === 'reason' && (
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6">Wähle den Grund deines Besuchs:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleReasonSelect()}
                    className="p-6 border border-slate-100 rounded-2xl text-left bg-slate-50/50 hover:bg-brand-blue-light/40 hover:border-brand-blue/20 group transition-luxury cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-bold text-slate-950 group-hover:text-brand-blue transition-luxury">{r.title}</span>
                      <span className="text-[9px] font-mono font-bold text-brand-blue bg-white border border-brand-blue/10 px-2.5 py-1 rounded-full">{r.duration}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{r.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Date and Time Select */}
          {step === 'datetime' && (
            <div className="space-y-8 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Wähle Datum und Uhrzeit:</h3>
                <button 
                  onClick={() => setStep('reason')} 
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-brand-blue transition-luxury"
                >
                  <ChevronLeft size={12} />
                  <span>Zurück</span>
                </button>
              </div>

              {/* Date slots */}
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-3">Datum:</p>
                <div className="grid grid-cols-5 gap-3">
                  {dates.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelectedDate(d.full)}
                      className={`py-3 rounded-2xl flex flex-col items-center border transition-luxury cursor-pointer ${selectedDate === d.full ? 'bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/20' : 'bg-slate-50 border-slate-100 text-slate-800 hover:bg-slate-100'}`}
                    >
                      <span className="text-[9px] font-mono uppercase opacity-75">{d.day}</span>
                      <span className="text-sm font-bold mt-0.5">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-3">Verfügbare Uhrzeiten am {selectedDate.split(',')[1]}:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => handleDateTimeSelect(selectedDate, t)}
                        className="py-3 px-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-brand-blue-light/50 hover:border-brand-blue/30 text-center text-xs font-bold text-slate-800 transition-luxury cursor-pointer"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Contact Details */}
          {step === 'contact' && (
            <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Deine Kontaktdaten eingeben:</h3>
                <button 
                  type="button" 
                  onClick={() => setStep('datetime')} 
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-brand-blue transition-luxury"
                >
                  <ChevronLeft size={12} />
                  <span>Zurück</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Vollständiger Name</label>
                  <div className="relative">
                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="z. B. Max Mustermann"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-luxury text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Telefonnummer</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="z. B. 0176 12345678"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-luxury text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[9px] font-mono uppercase tracking-widest text-slate-400">E-Mail-Adresse</label>
                <div className="relative">
                  <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="z. B. max.mustermann@gmail.de"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-slate-800 focus:outline-none focus:border-brand-blue focus:bg-white transition-luxury text-sm"
                  />
                </div>
              </div>

              {/* Anxious patient focus checkbox (gold accent) */}
              <div className="p-5 border border-brand-gold/15 bg-brand-gold-light/20 rounded-2xl flex items-start gap-3.5">
                <input
                  type="checkbox"
                  id="anxious"
                  checked={contactData.isAnxious}
                  onChange={(e) => setContactData({ ...contactData, isAnxious: e.target.checked })}
                  className="mt-1 accent-brand-gold rounded cursor-pointer"
                />
                <label htmlFor="anxious" className="text-xs text-brand-gold font-semibold leading-relaxed select-none cursor-pointer">
                  Ich leide unter Zahnarztangst und wünsche mir eine besonders behutsame Betreuung und transparente Aufklärung vor jedem Schritt.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white py-4 rounded-full text-sm font-semibold hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/20 transition-luxury cursor-pointer"
                >
                  Termin verbindlich reservieren
                </button>
              </div>
            </form>
          )}

          {/* SUCCESS SCREEN */}
          {step === 'success' && (
            <div className="text-center py-8 space-y-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-md shadow-emerald-100/50">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Erfolgreich gebucht!</h3>
                <p className="text-slate-500 text-sm font-light max-w-sm mx-auto leading-relaxed">
                  Vielen Dank für deine Buchung. Wir freuen uns darauf, dich bald in unserer Praxis begrüßen zu dürfen!
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="border border-slate-100 bg-slate-50/50 rounded-[2rem] p-8 w-full max-w-md text-left space-y-4">
                <div className="flex justify-between border-b border-slate-100/70 pb-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Behandlung</span>
                  <span className="text-xs font-bold text-slate-900">{selectedReason}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100/70 pb-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Datum</span>
                  <span className="text-xs font-bold text-slate-900">{selectedDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100/70 pb-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Uhrzeit</span>
                  <span className="text-xs font-bold text-slate-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Patient</span>
                  <span className="text-xs font-bold text-slate-900">{contactData.name}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                <ShieldCheck size={14} className="text-brand-blue" />
                <span>Eine Bestätigungs-E-Mail wurde gesendet.</span>
              </div>

              <button
                onClick={() => {
                  setStep('reason');
                  setSelectedReason('');
                  setSelectedDate('');
                  setSelectedTime('');
                  setContactData({ name: '', email: '', phone: '', isAnxious: false });
                }}
                className="text-xs font-semibold text-slate-400 hover:text-brand-blue hover:underline transition-luxury pt-4 cursor-pointer"
              >
                Weiteren Termin buchen
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
