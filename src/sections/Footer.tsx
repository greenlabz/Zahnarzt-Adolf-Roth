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

  return (
    <footer className="bg-[#9c2c40] text-white pt-20 pb-8 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-16">

          {/* Brand Column */}
          <nav className="flex flex-col" aria-label="Marke">
            <div className="mb-6">
              <img
                src="/A.R.Logo Clean.png"
                alt="Zahnarzt Adolf Roth – Logo"
                className="h-20 w-auto scale-[1.5] origin-left brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-[220px]">
              Moderne Zahnheilkunde in Neuenstadt am Kocher. Seit über 30&nbsp;Jahren.
            </p>
          </nav>

          {/* Navigation */}
          <nav className="flex flex-col" aria-label="Seitennavigation">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Leistungen</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Praxis</a></li>
              <li><a href="#ablauf" className="hover:text-white transition-colors duration-200">Ablauf</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors duration-200">Stimmen</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Kontakt</a></li>
              <li><Link to="/ratgeber" className="font-semibold text-white hover:text-white/80 transition-colors duration-200">Ratgeber</Link></li>
            </ul>
          </nav>

          {/* Kontakt */}
          <nav className="flex flex-col" aria-label="Kontaktinformationen">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span>Cleversulzbacher Str. 10<br />74196 Neuenstadt am Kocher</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40 shrink-0" />
                <a href="tel:07139452176" className="hover:text-white transition-colors duration-200">07139 452176</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40 shrink-0" />
                <a href="mailto:info@zahnaerzte-roth.de" className="hover:text-white transition-colors duration-200">info@zahnaerzte-roth.de</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="block">Mo + Do: 08:00 – 12:00, 14:00 – 18:00</span>
                  <span className="block">Di + Mi + Fr: 08:00 – 12:00</span>
                  <span className="block text-white/40">Sa + So: geschlossen</span>
                </div>
              </li>
            </ul>
          </nav>

          {/* Rechtliches */}
          <nav className="flex flex-col" aria-label="Rechtliche Hinweise">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li>
                <button onClick={openImpressum} className="hover:text-white transition-colors duration-200 cursor-pointer text-left">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={openDatenschutz} className="hover:text-white transition-colors duration-200 cursor-pointer text-left">
                  Datenschutzerklärung
                </button>
              </li>
            </ul>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30">
          <p>
            © Zahnarzt Adolf Roth 2026 — Made in the Lab:&nbsp;
            <a href="https://www.greenlabz-studio.de/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-200">
              Green Labz Studio
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone size={11} className="text-white/30" />
            <span>
              Notdienst außerhalb der Sprechzeiten:&nbsp;
              <a href="tel:076112012000" className="font-semibold text-white/40 hover:text-white transition-colors duration-200">0761 120120 00</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

