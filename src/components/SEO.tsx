import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title = 'Zahnarzt Adolf Roth | Neuenstadt am Kocher', 
  description = 'Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher. Moderne, schmerzfreie und angstfreie Zahnheilkunde in Wohlfühlatmosphäre. Buchen Sie Ihren Wunschtermin online!', 
  canonicalPath = '',
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://zahnaerzte-roth.de';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Zahnarzt Adolf Roth",
    "image": `${siteUrl}/og-image.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+497139452176",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Öhringer Str. 16",
      "addressLocality": "Neuenstadt am Kocher",
      "postalCode": "74196",
      "addressCountry": "DE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "08:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.png`} />

      {/* JSON-LD Schema (Structured Data for AI and Google) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
