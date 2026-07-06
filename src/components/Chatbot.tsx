import { useState } from 'react';

export default function Chatbot() {
  const [isHovered, setIsHovered] = useState(false);

  const openChat = () => {
    const url = 'https://ais-dev-cep4qgnp3ac6hj2c7buuvg-89188435572.europe-west2.run.app/';
    const popup = window.open(
      url,
      'DrRothChatbot',
      'width=420,height=650,resizable=yes,scrollbars=yes,left=' +
        (window.screen.width - 440) +
        ',top=' +
        (window.screen.height - 680)
    );
    if (popup) popup.focus();
  };

  return (
    <div className="fixed bottom-10 left-6 z-50 flex flex-col items-start gap-2">
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap border border-slate-800">
          Fragen? Ich helfe gerne! 🦷
        </div>
      </div>

      {/* Robot Button */}
      <button
        onClick={openChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#38bdf8] to-[#076eff] flex items-center justify-center shadow-[0_8px_30px_rgba(7,110,255,0.40)] hover:shadow-[0_12px_40px_rgba(7,110,255,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
        aria-label="Chatbot öffnen"
      >
        {/* Robot SVG Icon */}
        <svg
          viewBox="0 0 100 100"
          className="w-[38px] h-[38px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] select-none pointer-events-none"
        >
          {/* White robot head / speech bubble */}
          <path
            d="M20,28 C20,19.7 26.7,13 35,13 L65,13 C73.3,13 80,19.7 80,28 C80,29 80,30 80,31 C84.4,32.5 87.5,36.7 87.5,41.5 C87.5,46.3 84.4,50.5 80,52 C80,53 80,54 80,55 C80,63.3 73.3,70 65,70 L56,70 L50,78 L44,70 L35,70 C26.7,70 20,63.3 20,55 C20,54 20,53 20,52 C15.6,50.5 12.5,46.3 12.5,41.5 C12.5,36.7 15.6,32.5 20,31 C20,30 20,29 20,28 Z"
            fill="#ffffff"
          />
          {/* Dark inner screen */}
          <rect x="29" y="24" width="42" height="32" rx="13" fill="#0b1329" />
          {/* Glowing cyan eyes */}
          <ellipse cx="40" cy="40" rx="3.5" ry="6" fill="#00e5ff" />
          <ellipse cx="40" cy="40" rx="2" ry="3.5" fill="#ffffff" opacity="0.6" />
          <ellipse cx="60" cy="40" rx="3.5" ry="6" fill="#00e5ff" />
          <ellipse cx="60" cy="40" rx="2" ry="3.5" fill="#ffffff" opacity="0.6" />
        </svg>
      </button>

      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-2xl animate-ping bg-brand-blue/20 pointer-events-none" />
    </div>
  );
}
