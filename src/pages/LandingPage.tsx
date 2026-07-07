import Hero from '../sections/Hero';
import Services from '../sections/Services';
import TeethCleaning from '../sections/TeethCleaning';
import HorizontalCards from '../sections/HorizontalCards';
import About from '../sections/About';
import Reviews from '../sections/Reviews';
import FAQ from '../sections/FAQ';
import Booking from '../sections/Booking';
import Contact from '../sections/Contact';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function LandingPage() {
  return (
    <main>
      <SEO />
      <Hero />
      <FadeIn><Services /></FadeIn>
      <FadeIn><TeethCleaning /></FadeIn>
      <HorizontalCards />
      <FadeIn><About /></FadeIn>
      <FadeIn><Reviews /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><Booking /></FadeIn>
      <FadeIn><Contact /></FadeIn>
    </main>
  );
}
