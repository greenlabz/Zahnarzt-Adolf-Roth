import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Seite nicht gefunden | Zahnarzt Adolf Roth" description="Die gewünschte Seite existiert nicht. Zurück zur Startseite von Zahnarzt Adolf Roth in Neuenstadt am Kocher." canonicalPath="/404" />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-brand-blue-dark tracking-tight mb-6">404</h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-md mb-10">
          Diese Seite wurde verschoben oder existiert nicht mehr. Kein Grund zur Sorge – wir bringen Sie zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-luxury">
            Zur Startseite
          </Link>
          <Link to="/#contact" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-8 py-4 rounded-full text-sm font-semibold hover:border-brand-primary hover:text-brand-primary transition-luxury">
            Zum Kontakt
          </Link>
        </div>
      </main>
    </>
  );
}
