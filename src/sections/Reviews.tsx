import { Star, ArrowRight } from 'lucide-react';

interface ReviewItem {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export default function Reviews() {
  const review1: ReviewItem = {
    name: 'Co-Fu-Bal',
    rating: 5,
    text: 'Hatte einen Notfall - es ging um meine 90-jährige Mutter -Nichtpatientin in dieser Praxis- im Gegensatz zu Andere, hat mich die Sprechstundenhilfe nicht abgewimmelt sondern zugehört, und super beraten, nachdem das Problem angeschaut wurde und mir eine kompetente Lösung angeboten!!! Seeehr empathisch- freundlich- zuverlässig- vertrauenswürdig 5 STERNE NOCH ZU WENIG!!! Ich werde meine bisherige Zahnärztin wechseln deren Sprechstunde mich auch gleich abgewimmelt hat und hierher wechseln.',
    avatar: 'https://ui-avatars.com/api/?name=Co+Fu+Bal&background=fecaca&color=b91c1c'
  };

  const review2: ReviewItem = {
    name: 'DyaVoL999',
    rating: 5,
    text: '1. Man bekommt schnell einen Termin 2. Das Personal ist ein toll eingespieltes Team 3. Es wird einem viel Verständnis gegenüber gebracht',
    avatar: 'https://ui-avatars.com/api/?name=D&background=ef4444&color=fff'
  };

  const review3: ReviewItem = {
    name: 'Melinda Györfi',
    rating: 5,
    text: 'Sehr gute Beratung. Sehr nette und kompetente Assistentin und sehr guter Arzt. Danke.',
    avatar: 'https://ui-avatars.com/api/?name=Melinda+Györfi&background=e2e8f0&color=475569'
  };

  const ReviewCard = ({ review, isFeatured = false }: { review: ReviewItem, isFeatured?: boolean }) => (
    <div className={`bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-luxury group flex flex-col justify-between text-left relative ${
      isFeatured 
        ? 'border-2 border-[#9c2c40]/20 p-8 md:p-12 rounded-[1rem]' 
        : 'border border-slate-200 p-8 md:p-10 rounded-[1rem]'
    }`}>
      {/* Quote decoration */}
      <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L16.41 14.5C16.41 14.5 15.65 14.5 14.65 14.5C13.545 14.5 12.65 13.605 12.65 12.5C12.65 11.395 13.545 10.5 14.65 10.5C15.755 10.5 16.65 11.395 16.65 12.5V12.75L14.017 21ZM5.367 21L7.76 14.5C7.76 14.5 7 14.5 6 14.5C4.895 14.5 4 13.605 4 12.5C4 11.395 4.895 10.5 6 10.5C7.105 10.5 8 11.395 8 12.5V12.75L5.367 21Z" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={isFeatured ? 16 : 14} fill="#f59e0b" stroke="#f59e0b" />
            ))}
          </div>
        </div>

        <p className={`text-slate-600 font-light leading-relaxed mb-8 ${isFeatured ? 'text-base md:text-md' : 'text-sm'}`}>
          {review.text}
        </p>
      </div>

      <div className={`flex items-center pt-6 border-t border-slate-100/80 text-xs gap-3 relative z-10 ${isFeatured ? 'mt-4' : ''}`}>
        <div className="relative shrink-0">
          <img src={review.avatar} alt={review.name} className={`${isFeatured ? 'w-12 h-12' : 'w-10 h-10'} rounded-full object-cover`} />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3.5 h-3.5" />
          </div>
        </div>
        <div>
          <span className="block font-bold text-slate-900">{review.name}</span>
          <span className="block text-slate-400 font-light mt-0.5">Google Bewertung</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-32 md:py-48 bg-slate-50 relative overflow-hidden w-full text-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="mb-20">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#9c2c40] mb-4">Patientenstimmen</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark tracking-tight leading-tight mb-6">
            <span className="text-gradient font-serif italic pr-2">Was unsere Patienten sagen</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#9c2c40]/30 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {/* Left Column (Review 1) */}
          <div className="flex flex-col h-full">
            <ReviewCard review={review1} isFeatured={true} />
          </div>

          {/* Right Column (Review 2 & 3) */}
          <div className="flex flex-col gap-8">
            <ReviewCard review={review2} />
            <ReviewCard review={review3} />
          </div>
        </div>
        
        {/* Button below reviews */}
        <div className="mt-16 flex justify-center">
          <div className="relative inline-flex group">
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
    </section>
  );
}
