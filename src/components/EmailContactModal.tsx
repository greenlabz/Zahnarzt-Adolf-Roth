import { useState, useEffect } from 'react';
import { Mail, X, Send } from 'lucide-react';

export default function EmailContactModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', consent: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setIsVisible(true);
      setIsSubmitted(false);
      setError('');
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    };
    window.addEventListener('show-email-modal', handleTrigger);
    return () => window.removeEventListener('show-email-modal', handleTrigger);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.consent) {
      setIsSubmitting(true);
      setError('');
      try {
        const response = await fetch('/api/send-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Netzwerkfehler');
        }

        setIsSubmitted(true);
        setTimeout(() => setIsVisible(false), 3000);
      } catch (err) {
        console.error('Fehler beim Senden:', err);
        setError('Leider gab es ein Problem beim Senden. Bitte versuchen Sie es später noch einmal.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsVisible(false)}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        {/* Glassmorphism card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1628]/80 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {/* Ambient light top-left */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-primary/20 blur-[80px] pointer-events-none" />
          {/* Ambient light bottom-right */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-brand-blue/20 blur-[80px] pointer-events-none" />

          <div className="relative p-8 md:p-10">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white/90 transition-luxury p-2 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            {/* Icon + Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/30 border border-brand-primary/40 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Kontakt</p>
                <h3 className="font-extrabold text-white text-xl tracking-tight leading-tight">
                  Schreiben Sie uns
                </h3>
              </div>
            </div>

            <p className="text-white/55 text-sm font-light leading-relaxed mb-7">
              Haben Sie Fragen? Hinterlassen Sie uns eine Nachricht – wir melden uns zeitnah zurück.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 p-6 rounded-2xl text-center space-y-1">
                <p className="font-bold">Nachricht erfolgreich gesendet!</p>
                <p className="text-sm text-emerald-400/80">Wir melden uns bald bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-name" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Name</label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-primary/60 focus:bg-white/8 transition-luxury text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-email" className="text-[10px] font-mono uppercase tracking-widest text-white/40">E-Mail</label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-primary/60 focus:bg-white/8 transition-luxury text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-phone" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Telefon</label>
                  <input
                    type="tel"
                    id="modal-phone"
                    placeholder="Ihre Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-primary/60 focus:bg-white/8 transition-luxury text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-message" className="text-[10px] font-mono uppercase tracking-widest text-white/40">Ihre Nachricht</label>
                  <textarea
                    id="modal-message"
                    required
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-primary/60 focus:bg-white/8 transition-luxury text-sm resize-none"
                  />
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 accent-brand-primary cursor-pointer mt-0.5"
                    />
                  </div>
                  <label htmlFor="modal-consent" className="text-xs text-white/50 leading-relaxed cursor-pointer select-none">
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden. Weitere Informationen finden Sie in der{' '}
                    <button
                      type="button"
                      className="text-white/70 hover:text-white underline decoration-white/30 hover:decoration-white/70 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVisible(false);
                        setTimeout(() => {
                          window.dispatchEvent(new CustomEvent('open-legal', { detail: { tab: 'datenschutz' } }));
                        }, 300);
                      }}
                    >
                      Datenschutzerklärung
                    </button>
                    .
                  </label>
                </div>

                {error && (
                  <div className="bg-red-500/15 border border-red-500/30 text-red-300 p-3 rounded-xl text-center text-sm">
                    {error}
                  </div>
                )}

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-3 bg-brand-primary/60 backdrop-blur-md text-white px-6 py-4 rounded-full text-sm font-semibold hover:bg-brand-primary/80 transition-luxury cursor-pointer shadow-[0_0_20px_rgba(139,29,48,0.4)] border border-brand-primary/50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
