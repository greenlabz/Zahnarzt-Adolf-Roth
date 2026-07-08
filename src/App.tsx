import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import FloatingContact from './components/FloatingContact';
import CallPopup from './components/CallPopup';
import EmailContactModal from './components/EmailContactModal';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import LandingPage from './pages/LandingPage';
import LeistungenPage from './pages/LeistungenPage';
import NotFoundPage from './pages/NotFoundPage';
import RatgeberPage from './pages/RatgeberPage';
import ImpressumPage from './pages/ImpressumPage';

// ScrollToAnchor component to handle # hash links properly across routes
function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow DOM to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default function App() {
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      const button = target.closest('button');
      if (!anchor && !button) return;

      const bookingFromAttr = anchor?.getAttribute('href') === '#booking';
      const bookingFromText =
        !anchor &&
        button &&
        /Termin\s*(buchen|vereinbaren)/i.test((button.textContent || ''));

      if (bookingFromAttr || bookingFromText) {
        e.preventDefault();
        setIsCallPopupOpen(true);
      }
    };

    const handleCustomOpen = () => setIsCallPopupOpen(true);

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('show-call-popup', handleCustomOpen);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('show-call-popup', handleCustomOpen);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen bg-white text-slate-700 antialiased selection:bg-brand-primary-light selection:text-brand-primary relative">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
          <Route path="/ratgeber" element={<RatgeberPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <FloatingContact />
        <CallPopup isOpen={isCallPopupOpen} onClose={() => setIsCallPopupOpen(false)} />
        <EmailContactModal />
        <LegalModal />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
