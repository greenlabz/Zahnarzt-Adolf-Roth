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
      <SEO
        title="Zahnarzt Adolf Roth | Neuenstadt am Kocher"
        description="Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher: Prophylaxe, Zahnersatz, Kinderzahnheilkunde, Angstpatienten und Notfalltermine. Jetzt online buchen."
        canonicalPath="/"
        faqItems={[
          { question: 'Wo befindet sich die Praxis von Zahnarzt Adolf Roth?', answer: 'Die Praxis liegt in der Cleversulzbacher Str. 10 in 74196 Neuenstadt am Kocher, mit kostenlosen Parkplätzen vor und hinter dem Haus.' },
          { question: 'Welche zahnärztlichen Leistungen bietet die Praxis an?', answer: 'Unter anderem Prophylaxe, Zahnersatz, Kinderzahnheilkunde, Angstpatienten-Betreuung, Parodontalbehandlung und Wurzelkanalbehandlung.' },
          { question: 'Wie kann ich einen Termin vereinbaren?', answer: 'Sie können telefonisch, online oder persönlich in der Praxis Termine vereinbaren. Online steht Ihnen die Buchungsoption auf der Startseite zur Verfügung.' },
          { question: 'Welche Öffnungszeiten hat die Praxis?', answer: 'Montag und Donnerstag 08:00–12:00 und 14:00–18:00; Dienstag, Mittwoch und Freitag 08:00–12:00; Samstag und Sonntag geschlossen.' }
        ]}
        rating={4.8}
        breadcrumbs={[
          { label: 'Startseite', href: '/' }
        ]}
      />
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
