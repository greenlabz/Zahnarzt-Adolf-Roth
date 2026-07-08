import { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, Mail } from 'lucide-react';

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = requestAnimationFrame(() => {
        const shouldBeVisible = window.scrollY > 500;

        setVisible((prev) => {
          if (prev !== shouldBeVisible) {
            return shouldBeVisible;
          }
          return prev;
        });

        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 right-6 -translate-y-1/2 z-40 flex flex-col gap-4 transition-all duration-[350ms] ease-out ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5 pointer-events-none'
      }`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      
      {/* Call CTA Button */}
      <div className="relative inline-flex group">
        <div className="absolute -inset-[2px] rounded-full overflow-hidden blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
        </div>
        <a 
          href="tel:07139452176" 
          className="relative flex items-center justify-center w-14 h-14 bg-[#9c2c40]/80 backdrop-blur-md text-white rounded-full hover:bg-[#9c2c40] transition-luxury shadow-lg border border-white/10"
          title="Anrufen"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* Book CTA Button */}
      <div className="relative inline-flex group">
        <div className="absolute -inset-[2px] rounded-full overflow-hidden blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
        </div>
        <a 
          href="#booking" 
          className="relative flex items-center justify-center w-14 h-14 bg-[#9c2c40]/80 backdrop-blur-md text-white rounded-full hover:bg-[#9c2c40] transition-luxury shadow-lg border border-white/10"
          title="Online Termin buchen"
        >
          <Calendar size={22} />
        </a>
      </div>

      {/* Email CTA Button */}
      <div className="relative inline-flex group">
        <div className="absolute -inset-[2px] rounded-full overflow-hidden blur-[4px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_360deg)]" />
        </div>
        <button 
          onClick={() => window.dispatchEvent(new Event('show-email-modal'))}
          className="relative flex items-center justify-center w-14 h-14 bg-[#9c2c40]/80 backdrop-blur-md text-white rounded-full hover:bg-[#9c2c40] transition-luxury shadow-lg border border-white/10 cursor-pointer"
          title="Nachricht schreiben"
        >
          <Mail size={22} />
        </button>
      </div>

    </div>
  );
}
