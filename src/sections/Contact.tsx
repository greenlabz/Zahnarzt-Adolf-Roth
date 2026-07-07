import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import ContactMap from '../components/ContactMap';

export default function Contact() {
  return (
    <section id="contact" className="bg-white text-slate-800 py-32 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <span className="section-label reveal">Kontakt</span>
            <h2 className="section-heading reveal reveal-delay-1">Wir sind für Sie da</h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mt-4">
              Vereinbaren Sie Ihren Termin oder schreiben Sie uns — wir antworten kurzfristig.
            </p>

            <div className="mt-10 space-y-6 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-sky-700 shrink-0" />
                <div>
                  <p className="font-medium">Zahnarzt Adolf Roth</p>
                  <p>Cleversulzbacher Str. 10</p>
                  <p>74196 Neuenstadt am Kocher</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-sky-700 shrink-0" />
                <a href="tel:07139452176" className="hover:text-sky-700 transition-luxury">
                  Telefon: 07139 452176
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-sky-700 shrink-0" />
                <a href="mailto:info@zahnaerzte-roth.de" className="hover:text-sky-700 transition-luxury">
                  info@zahnaerzte-roth.de
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-sky-700 shrink-0" />
                <div>
                  <p className="font-medium mb-2">Öffnungszeiten:</p>
                  <p>Dienstag: 08:00–12:00, 14:00–18:00</p>
                  <p>Mittwoch: 08:00–12:00</p>
                  <p>Donnerstag: 08:00–12:00, 14:00–18:00</p>
                  <p>Freitag: 08:00–12:00</p>
                  <p>Samstag: Geschlossen</p>
                  <p>Sonntag: Geschlossen</p>
                  <p>Montag: 08:00–12:00, 14:00–18:00</p>
                  <p className="mt-2">Notfall außerhalb der Sprechzeiten über den zahnärztlichen Notdienst</p>
                </div>
              </div>

              <div className="relative inline-flex group mt-4">
                <div className="absolute -inset-[3px] rounded-full overflow-hidden blur-[6px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
                </div>

                <a
                  href="#booking"
                  className="relative inline-flex items-center gap-3 bg-brand-primary/60 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-primary/80 transition-luxury cursor-pointer shadow-[0_0_15px_rgba(139,29,48,0.5)] border border-brand-primary/50"
                >
                  <span>Termin vereinbaren</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-luxury">
                    <ArrowRight size={14} className="stroke-[3]" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <ContactMap address="Zahnarzt Adolf Roth, Cleversulzbacher Str. 10, 74196 Neuenstadt am Kocher" />
          </div>
        </div>
      </div>
    </section>
  );
}
