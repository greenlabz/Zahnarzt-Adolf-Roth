import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  faqItems?: FAQItem[];
  rating?: number;
  breadcrumbs?: Breadcrumb[];
}

export default function SEO({
  title = 'Zahnarzt Adolf Roth | Neuenstadt am Kocher',
  description = 'Zahnarztpraxis Adolf Roth in Neuenstadt am Kocher. Moderne, schmerzfreie und angstfreie Zahnheilkunde in Wohlfühlatmosphäre. Buchen Sie Ihren Wunschtermin online!',
  canonicalPath = '',
  type = 'website',
  faqItems,
  rating,
  breadcrumbs
}: SEOProps) {
  const siteUrl = 'https://zahnaerzte-roth.de';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": siteUrl,
    "name": title,
    "url": siteUrl,
    "telephone": "+497****2176",
    "image": `${siteUrl}/og-image.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cleversulzbacher Str. 10",
      "addressLocality": "Neuenstadt am Kocher",
      "postalCode": "74196",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.238",
      "longitude": "9.402"
    },
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Friday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps/...",
      "https://www.facebook.com/..."
    ]
  };

  const schemaPayload: Array<Record<string, unknown>> = [jsonLd];

  if (faqItems?.length) {
    schemaPayload.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  if (rating != null) {
    schemaPayload.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Zahnarzt Adolf Roth",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(rating),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "87"
      }
    });
  }

  if (breadcrumbs?.length) {
    schemaPayload.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.label,
        "item": crumb.href ? `${siteUrl}${crumb.href}` : siteUrl
      }))
    });
  }

  schemaPayload.push({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person/adolf-roth`,
    "name": "Adolf Roth",
    "jobTitle": "Zahnarzt",
    "worksFor": {
      "@type": "Dentist",
      "@id": siteUrl,
      "name": "Zahnarzt Adolf Roth"
    }
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <html lang="de" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta property="og:site_name" content="Zahnarzt Adolf Roth" />
      <meta property="og:locale" content="de_DE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      <meta name="geo.region" content="DE-BW" />
      <meta name="geo.placename" content="Neuenstadt am Kocher" />
      <script type="application/ld+json">{JSON.stringify(schemaPayload)}</script>
    </Helmet>
  );
}
