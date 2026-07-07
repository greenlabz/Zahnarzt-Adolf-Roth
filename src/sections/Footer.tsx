import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const openImpressum = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-legal', { detail: { tab: 'impressum' } }));
  };

  const openDatenschutz = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-legal', { detail: { tab: 'datenschutz' } }));
  };

  const openingHours = 'Mo/Do 08:00–12:00, 14:00–18:00 · Di+Mi+Fr 08:00–12:00 · Sa+So geschlossen';

  return (
    <footer className="bg-[#9c2c40] text-white pt-24 pb-8 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:items-stretch mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 h-full flex flex-col text-left">
            <div className="flex items-center mb-6">
              <img
                src="/A.R.Logo Clean.png"
                alt="Adolf Roth"
                className="h-20 w-auto scale-[1.5] origin-left brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-slate-300 text-sm font-light leading-relaxed pr-4 mt-auto">
              Moderne Zahnheilkunde in Neuenstadt am Kocher. Seit über 30 Jahren.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-left h-full flex flex-col">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light mt-auto">
              <li><a href="#services" className="hover:text-white transition-luxury">Leistungen</a></li>
              <li><a href="#about" className="hover:text-white transition-luxury">Praxis</a></li>
              <li><a href="#ablauf" className="hover:text-white transition-luxury">Ablauf</a></li>
              <li><a href="#reviews" className="hover:text-white transition-luxury">Stimmen</a></li>
              <li><a href="#faq" className="hover:text-white transition-luxury">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-luxury">Kontakt</a></li>
              <li><Link to="/ratgeber" className="font-bold text-white hover:text-brand-gold transition-luxury">Ratgeber</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="text-left h-full flex flex-col">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-6">Kontakt</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300 font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Cleversulzbacher Str. 10, 74196 Neuenstadt am Kocher</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:07139452176" className="hover:text-white transition-luxury">07139 452176</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@zahnaerzte-roth.de" className="hover:text-white transition-luxury">info@zahnaerzte-roth.de</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-300">{openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="text-left h-full flex flex-col">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light mt-auto">
              <li>
                <button onClick={openImpressum} className="hover:text-white transition-luxury cursor-pointer text-left">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={openDatenschutz} className="hover:text-white transition-luxury cursor-pointer text-left">
                  Datenschutzerklärung
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500">
          <div className="text-center md:text-left">
            <p>Zahnarzt Adolf Roth 2026 — Made in the Lab: <a href="https://www.greenlabz-studio.de/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Green Labz Studio</a></p>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-slate-400" />
            <span>Notfall außerhalb der Sprechzeiten: zahnärztlicher Notdienst über <a href="tel:+497****2000" className="font-bold text-slate-400 hover:text-white transition-luxury">0761 120120 00</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
