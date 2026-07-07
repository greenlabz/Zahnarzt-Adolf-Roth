import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import FloatingContact from './components/FloatingContact';
import BookingMaintenanceToast from './components/BookingMaintenanceToast';
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
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');

      if (href === '#booking') {
        e.preventDefault();
        window.dispatchEvent(new Event('show-booking-maintenance'));
        return;
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
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
        <BookingMaintenanceToast />
        <EmailContactModal />
        <LegalModal />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
