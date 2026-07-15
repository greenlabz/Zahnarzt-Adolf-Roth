import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = 'https://zahnaerzte-roth.de';
const nap = {
  name: 'Zahnarzt Adolf Roth',
  telephone: '+49 7139 452176',
  email: 'info@zahnaerzte-roth.de',
  streetAddress: 'Cleversulzbacher Str. 10',
  postalCode: '74196',
  addressLocality: 'Neuenstadt am Kocher',
  addressCountry: 'DE'
};

const servicePages = [
  {
    slug: 'prophylaxe', number: '01', accent: 'roth', icon: 'mdi:shield-check-outline', title: 'Prophylaxe & professionelle Zahnreinigung', seoTitle: 'Prophylaxe & PZR in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Professionelle Zahnreinigung und Prophylaxe bei Zahnarzt Adolf Roth in Neuenstadt am Kocher: gründliche Vorsorge für Zähne und Zahnfleisch.',
    lead: 'Regelmäßige Prophylaxe und professionelle Zahnreinigung helfen, Zähne und Zahnfleisch langfristig gesund zu halten.',
    heading: 'Vorsorge, die zu Ihrem Alltag passt',
    body: ['Bei der professionellen Zahnreinigung entfernen wir Beläge, Zahnstein und Verfärbungen auch an Stellen, die mit Zahnbürste und Zahnseide schwer erreichbar sind. Anschließend werden die Zähne sorgfältig poliert und fluoridiert.', 'Wir beurteilen Ihr individuelles Karies- und Parodontitisrisiko und empfehlen ein Intervall, das zu Ihrer Mundgesundheit passt. So bleibt Vorsorge verständlich, wirksam und planbar.'],
    benefits: ['Beläge, Zahnstein und Verfärbungen gründlich entfernen', 'Gesundes Zahnfleisch und frisches Mundgefühl unterstützen', 'Individuelles Vorsorgeintervall statt pauschaler Empfehlungen']
  },
  {
    slug: 'zahnersatz', number: '02', accent: 'mint', icon: 'mdi:tooth-outline', title: 'Zahnersatz', seoTitle: 'Zahnersatz in Neuenstadt | Zahnarztpraxis Adolf Roth',
    metaDescription: 'Zahnersatz in Neuenstadt am Kocher: Kronen, Brücken und Prothesen mit persönlicher Beratung bei Zahnarzt Adolf Roth.',
    lead: 'Kronen, Brücken und Prothesen sollen natürlich aussehen, sicher funktionieren und zu Ihrer Situation passen.',
    heading: 'Funktion und Ästhetik im Gleichgewicht',
    body: ['Ob einzelner Zahn oder größere Versorgung: Wir besprechen Befund, Materialien und Alternativen in Ruhe. Dabei achten wir auf eine gute Kaufunktion, eine natürliche Ästhetik und eine Lösung, die sich im Alltag bewährt.', 'Von der Planung bis zur Eingliederung bleiben die Abläufe transparent. Sie wissen, welche Schritte anstehen und mit welchen Kosten Sie rechnen können.'],
    benefits: ['Kronen, Brücken und herausnehmbarer Zahnersatz', 'Natürliche Ästhetik und sicherer Sitz', 'Verständliche Planung mit transparentem Kostenvoranschlag']
  },
  {
    slug: 'kinderzahnheilkunde', number: '03', accent: 'roth', icon: 'mdi:teddy-bear', title: 'Kinderzahnheilkunde', seoTitle: 'Kinderzahnheilkunde in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Kinderzahnheilkunde in Neuenstadt am Kocher: ruhige, kindgerechte Zahnarzttermine für gesunde Zähne von Anfang an.',
    lead: 'Mit Ruhe, einfachen Worten und einem kindgerechten Ablauf schaffen wir Vertrauen und gute Erfahrungen beim Zahnarzt.',
    heading: 'Ein entspannter Start in die Zahngesundheit',
    body: ['Kinder lernen bei uns, dass Zahnarztbesuche sicher und verständlich sein können. Wir erklären jeden Schritt altersgerecht und geben Kindern Zeit, die Praxis und das Behandlungsteam kennenzulernen.', 'Frühe Kontrollen helfen, Risiken rechtzeitig zu erkennen und gemeinsam mit Eltern passende Gewohnheiten für Putzen, Ernährung und Fluorid aufzubauen.'],
    benefits: ['Kindgerechte Erklärungen ohne unnötigen Druck', 'Früherkennung von Karies und Zahnfehlstellungen', 'Tipps für Eltern zu Zahnpflege und Ernährung']
  },
  {
    slug: 'angstpatienten', number: '04', accent: 'mint', icon: 'mdi:heart-outline', title: 'Zahnbehandlung für Angstpatienten', seoTitle: 'Angstpatienten in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Zahnarzt für Angstpatienten in Neuenstadt am Kocher: einfühlsame Behandlung, lokale Betäubung bei Eingriffen und klare Pausensignale.',
    lead: 'Bei Zahnarztangst bestimmen Sie das Tempo. Wir erklären jeden Schritt, bieten bei notwendigen Eingriffen lokale Betäubung an und arbeiten ohne Behandlungsdruck.',
    heading: 'Vertrauen entsteht Schritt für Schritt',
    body: ['Ein erster Termin kann zunächst nur dem Kennenlernen und der Beratung dienen. Gemeinsam vereinbaren wir klare Pausensignale und besprechen, was Ihnen bei der Behandlung Sicherheit gibt.', 'Bei medizinisch notwendigen Eingriffen besprechen wir eine lokale Betäubung. Eine Sedierung oder Vollnarkose gehört nicht zum regulären Angebot unserer Praxis. Wenn Sie eine solche Unterstützung benötigen, klären wir gemeinsam, welche passende Option oder Überweisung möglich ist.', 'Mit verständlicher Kommunikation, kurzen Etappen und schmerzarmen Verfahren begleiten wir Sie durch die Behandlung. Jede Frage ist willkommen, jede Entscheidung bleibt nachvollziehbar.'],
    benefits: ['Ruhiger Kennenlerntermin ohne Behandlungsdruck', 'Lokale Betäubung bei notwendigen Eingriffen', 'Klare Pausensignale und verständliche Erklärungen'],
    faq: [
      { question: 'Behandelt Zahnarzt Adolf Roth Angstpatientinnen und Angstpatienten?', answer: 'Ja. In der Praxis in Neuenstadt am Kocher beginnt die Behandlung auf Wunsch mit einem ruhigen Kennenlern- und Beratungstermin. Sie bestimmen das Tempo, und jeder Schritt wird verständlich erklärt.' },
      { question: 'Ist eine lokale Betäubung möglich?', answer: 'Bei medizinisch notwendigen Eingriffen besprechen wir eine lokale Betäubung. Die Vorgehensweise wird vorher erklärt und an Ihre Situation angepasst.' },
      { question: 'Bietet die Praxis Sedierung oder Vollnarkose an?', answer: 'Eine Sedierung oder Vollnarkose gehört nicht zum regulären Angebot der Praxis. Wenn Sie diese Unterstützung benötigen, besprechen wir mögliche Optionen und gegebenenfalls eine passende Überweisung.' },
      { question: 'Was soll ich beim Termin über meine Zahnarztangst sagen?', answer: 'Sprechen Sie Ihre Angst bereits bei der Terminvereinbarung offen an. So kann das Praxisteam mehr Zeit einplanen und den Ablauf besonders ruhig vorbereiten.' }
    ]
  },
  {
    slug: 'individuelle-beratung', number: '05', accent: 'roth', icon: 'mdi:message-text-outline', title: 'Individuelle Beratung', seoTitle: 'Individuelle Beratung beim Zahnarzt | Zahnarzt Roth',
    metaDescription: 'Individuelle zahnmedizinische Beratung in Neuenstadt am Kocher: Befunde, Alternativen und Kosten verständlich erklärt.',
    lead: 'Eine sorgfältige Untersuchung und ein offenes Gespräch bilden die Basis für Entscheidungen, die wirklich zu Ihnen passen.',
    heading: 'Verstehen, abwägen, sicher entscheiden',
    body: ['Wir erklären Befund, Behandlungsalternativen, Ablauf und voraussichtliche Kosten in klarer Sprache. Dabei nehmen wir uns Zeit für Ihre Fragen und berücksichtigen Ihre Wünsche, Sorgen und Ihren Alltag.', 'Unser Ziel ist eine Empfehlung, die medizinisch sinnvoll und für Sie nachvollziehbar ist. Sie entscheiden in Ruhe und ohne Verkaufsdruck.'],
    benefits: ['Sorgfältige Diagnostik als Entscheidungsgrundlage', 'Alternativen und Kosten transparent vergleichen', 'Zeit für Fragen, Bedenken und eine zweite Erklärung']
  },
  {
    slug: 'parodontalbehandlung', number: '06', accent: 'mint', icon: 'mdi:leaf-circle-outline', title: 'Parodontalbehandlung', seoTitle: 'Parodontitis behandeln in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Parodontalbehandlung in Neuenstadt am Kocher: Zahnfleischentzündung und Parodontitis früh erkennen und langfristig stabilisieren.',
    lead: 'Entzündetes Zahnfleisch und Parodontitis behandeln wir systematisch und mit einem klaren Plan für die langfristige Nachsorge.',
    heading: 'Zahnfleischgesundheit langfristig schützen',
    body: ['Bluten, Schwellungen oder zurückgehendes Zahnfleisch können Hinweise auf eine Erkrankung des Zahnhalteapparats sein. Wir untersuchen die Ursachen und besprechen die passenden Behandlungsschritte.', 'Nach der aktiven Behandlung unterstützen regelmäßige Kontrollen und individuell abgestimmte Prophylaxe dabei, Zahnfleisch und tragendes Gewebe stabil zu halten.'],
    benefits: ['Frühe Abklärung bei Zahnfleischbluten und Mundgeruch', 'Systematische Behandlung von Entzündungen', 'Individuelle Nachsorge und Prophylaxe']
  },
  {
    slug: 'knirscherschienen', number: '07', accent: 'roth', icon: 'mdi:weather-night', title: 'Knirscherschienen', seoTitle: 'Knirscherschienen in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Knirscherschienen in Neuenstadt am Kocher: individuell angepasster Schutz bei Zähneknirschen, Pressen und Kiefergelenkbeschwerden.',
    lead: 'Eine individuell angepasste Aufbissschiene kann Zähne und Kiefergelenke bei nächtlichem Pressen und Knirschen entlasten.',
    heading: 'Entlastung für Zähne, Muskeln und Kiefer',
    body: ['Morgendliche Kieferspannung, empfindliche Zähne oder abgenutzte Kauflächen können auf Bruxismus hinweisen. Wir prüfen Ihre Situation und planen eine Schiene, die zu Ihrem Biss und Ihrem Alltag passt.', 'Bei den Kontrollterminen überprüfen wir Sitz, Funktion und Veränderungen, damit die Schiene zuverlässig schützt und angenehm zu tragen bleibt.'],
    benefits: ['Schutz vor Abrieb und Überlastung', 'Individuelle Anpassung an Ihren Biss', 'Kontrollen für sicheren Sitz und angenehmes Tragen']
  },
  {
    slug: 'teleskopprothesen', number: '08', accent: 'mint', icon: 'mdi:link-variant', title: 'Teleskopprothesen', seoTitle: 'Teleskopprothese in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Teleskopprothesen in Neuenstadt am Kocher: herausnehmbarer Zahnersatz mit sicherem Halt und guter Reinigungsmöglichkeit.',
    lead: 'Teleskopprothesen verbinden herausnehmbaren Zahnersatz mit einem sicheren, verdeckten Halt an vorhandenen Zähnen.',
    heading: 'Sicherer Halt, gut planbare Pflege',
    body: ['Die Doppelkronen-Technik kann eine komfortable Lösung sein, wenn mehrere Zähne ersetzt werden müssen. Wir prüfen gemeinsam, ob vorhandene Zähne als Pfeiler geeignet sind und welche Versorgung sinnvoll ist.', 'Die Prothese lässt sich zur Reinigung herausnehmen und kann bei Veränderungen der Zahnsituation oft angepasst oder erweitert werden.'],
    benefits: ['Verdeckter Halt ohne sichtbare Klammern', 'Herausnehmbar für gründliche Reinigung', 'Erweiterbar bei veränderter Zahnsituation']
  },
  {
    slug: 'fuehrungstherapie', number: '09', accent: 'roth', icon: 'mdi:axis-arrow', title: 'Führungstherapie', seoTitle: 'Führungstherapie in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Führungstherapie in Neuenstadt am Kocher: Biss, Muskulatur und Kiefergelenke ganzheitlich untersuchen und Fehlbelastungen reduzieren.',
    lead: 'Bei Beschwerden rund um Biss, Kaumuskulatur oder Kiefergelenk betrachten wir das gesamte Zusammenspiel des Kausystems.',
    heading: 'Das Kausystem als Ganzes verstehen',
    body: ['Kieferknacken, Verspannungen, eingeschränkte Bewegungen oder unklare Schmerzen können verschiedene Ursachen haben. Wir untersuchen die Funktion und erklären, welche Faktoren Ihre Beschwerden beeinflussen können.', 'Auf dieser Grundlage planen wir individuelle Maßnahmen, die Fehlbelastungen reduzieren und die Funktion Ihres Kiefers unterstützen.'],
    benefits: ['Funktionsanalyse von Biss und Kiefergelenken', 'Zusammenhang von Muskulatur und Zahnkontakt verstehen', 'Individuelle Maßnahmen gegen Fehlbelastungen']
  },
  {
    slug: 'zahnersatz-reparatur', number: '10', accent: 'mint', icon: 'mdi:tools', title: 'Reparaturen von Zahnersatz', seoTitle: 'Zahnersatz-Reparatur in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Reparatur von Prothesen und Zahnersatz in Neuenstadt am Kocher: schnelle Prüfung, sicherer Sitz und zuverlässige Funktion.',
    lead: 'Ist eine Prothese oder Versorgung beschädigt, prüfen wir zeitnah, ob eine Reparatur möglich und sinnvoll ist.',
    heading: 'Schnelle Hilfe bei beschädigtem Zahnersatz',
    body: ['Bruch, lockerer Zahn oder ein Druckpunkt sollten zeitnah abgeklärt werden. Wir beurteilen Schaden, Sitz und Funktion und besprechen die schnellste sinnvolle Lösung.', 'Wenn eine Reparatur möglich ist, koordinieren wir die nächsten Schritte. Falls eine neue Versorgung nötig wird, erklären wir die Alternativen transparent.'],
    benefits: ['Zeitnahe Einschätzung bei Bruch oder Druckstellen', 'Fokus auf sicheren Sitz und Kaufunktion', 'Transparente Entscheidung zwischen Reparatur und Neuanfertigung']
  },
  {
    slug: 'schmerzbehandlung', number: '11', accent: 'roth', icon: 'mdi:medical-bag', title: 'Schmerzbehandlung', seoTitle: 'Zahnschmerzen behandeln in Neuenstadt | Adolf Roth',
    metaDescription: 'Zahnschmerzen in Neuenstadt am Kocher: schnelle Ursachenklärung und passende Akutbehandlung bei Zahnarzt Adolf Roth.',
    lead: 'Bei akuten Zahnschmerzen untersuchen wir die Ursache und leiten eine passende Sofortbehandlung ein.',
    heading: 'Schnelle Hilfe bei akuten Beschwerden',
    body: ['Zahnschmerzen können durch Karies, Entzündungen, einen Riss oder eine überlastete Versorgung entstehen. Eine sorgfältige Untersuchung zeigt, welche Behandlung jetzt nötig ist und was bis dahin hilft.', 'Bitte rufen Sie möglichst früh an. So kann unser Praxisteam den Besuch koordinieren und Ihnen schnellstmöglich eine klare Einschätzung geben.'],
    benefits: ['Ursachenklärung statt Behandlung auf Verdacht', 'Akuttermine nach telefonischer Abstimmung', 'Verständliche Erklärung der nächsten Schritte']
  },
  {
    slug: 'wurzelkanalbehandlung', number: '12', accent: 'mint', icon: 'mdi:source-branch', title: 'Wurzelkanalbehandlung', seoTitle: 'Wurzelkanalbehandlung in Neuenstadt | Zahnarzt Adolf Roth',
    metaDescription: 'Wurzelkanalbehandlung in Neuenstadt am Kocher: entzündete Zähne sorgfältig behandeln und möglichst langfristig erhalten.',
    lead: 'Mit einer sorgfältigen Wurzelkanalbehandlung kann ein entzündeter Zahn häufig erhalten und die Ursache der Beschwerden beseitigt werden.',
    heading: 'Erkrankte Zähne möglichst erhalten',
    body: ['Wenn sich das Gewebe im Zahninneren entzündet, entfernen wir die erkrankten Bereiche, reinigen das Kanalsystem und verschließen es anschließend dicht. Jeder Schritt wird verständlich erklärt und sorgfältig kontrolliert.', 'Nach der Behandlung besprechen wir, wie der Zahn stabil aufgebaut und langfristig geschützt werden kann.'],
    benefits: ['Sorgfältige Reinigung und Aufbereitung der Kanäle', 'Schmerzarme Behandlung mit klaren Pausen-Signalen', 'Langfristiger Aufbau und Schutz des Zahns']
  }
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const optimizeMetaDescription = (value) => {
  const text = String(value).trim();
  if (text.length >= 140 && text.length <= 160) return text;
  if (text.length < 140) return `${text} Jetzt informieren und persönlich beraten lassen.`.slice(0, 160);
  return `${text.slice(0, 157).trimEnd()}…`;
};

const serviceIconPaths = {
  'mdi:shield-check-outline': '<path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6l-7-3Z"></path><path d="m9 12 2 2 4-4"></path>',
  'mdi:tooth-outline': '<path d="M7.7 4.1C5.4 3.4 3.6 5 3.8 7.6c.2 2.8 1.4 4.1 2 6.6.5 2.7.8 5.4 2.5 5.4 1.1 0 1.2-3.1 1.9-4.7.3-.7 1.3-.7 1.6 0 .7 1.6.8 4.7 1.9 4.7 1.7 0 2-2.7 2.5-5.4.6-2.5 1.8-3.8 2-6.6.2-2.6-1.6-4.2-3.9-3.5-.9.3-1.6.7-2.5.7s-1.6-.4-2.5-.7Z"></path>',
  'mdi:teddy-bear': '<circle cx="12" cy="7" r="3"></circle><path d="M5 21c.6-3.5 3.1-5.5 7-5.5s6.4 2 7 5.5"></path><path d="M4 12h2M18 12h2"></path>',
  'mdi:heart-outline': '<path d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"></path>',
  'mdi:message-text-outline': '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-4.5a7.5 7.5 0 1 1 16-5Z"></path><path d="M8 11h8M8 14h5"></path>',
  'mdi:leaf-circle-outline': '<path d="M20 4C11 4 5 8 5 14a5 5 0 0 0 5 5c6 0 10-6 10-15Z"></path><path d="M4 21c3.2-4.2 6.5-7.2 11-10"></path>',
  'mdi:weather-night': '<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"></path><path d="M17 4v3M15.5 5.5h3"></path>',
  'mdi:link-variant': '<path d="m9 15-1.5 1.5a3.5 3.5 0 1 1-5-5L6 8a3.5 3.5 0 0 1 5 0"></path><path d="m15 9 1.5-1.5a3.5 3.5 0 1 1 5 5L18 16a3.5 3.5 0 0 1-5 0"></path><path d="m8 12 8 0"></path>',
  'mdi:axis-arrow': '<circle cx="12" cy="12" r="2"></circle><path d="M12 3v7M12 14v7M3 12h7M14 12h7"></path><path d="m7 5 2 2-2 2M17 19l-2-2 2-2M5 17l2-2 2 2M19 7l-2 2-2-2"></path>',
  'mdi:tools': '<path d="m14.7 6.3 3-3a4 4 0 0 0-5 5l-8.4 8.4a2.1 2.1 0 1 0 3 3l8.4-8.4a4 4 0 0 0 5-5l-3 3-3-3Z"></path>',
  'mdi:medical-bag': '<path d="M4 7h16v13H4z"></path><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 12h8M12 9v6"></path>',
  'mdi:source-branch': '<path d="M6 3v8a6 6 0 0 0 6 6h6"></path><path d="M18 13v8M18 13l-3 3M18 13l3 3"></path>'
};

const buildServiceIconSvg = (icon) => `<svg class="service-icon-svg" viewBox="0 0 24 24" aria-hidden="true">${serviceIconPaths[icon] || ''}</svg>`;

const buildServiceSchema = (service, canonical) => {
  const provider = {
    '@type': 'Dentist',
    '@id': `${siteUrl}/#dentist`,
    name: nap.name,
    url: `${siteUrl}/`,
    telephone: nap.telephone,
    email: nap.email,
    image: `${siteUrl}/assets/images/adolf-roth-profil.webp`,
    address: { '@type': 'PostalAddress', streetAddress: nap.streetAddress, postalCode: nap.postalCode, addressLocality: nap.addressLocality, addressCountry: nap.addressCountry },
    geo: { '@type': 'GeoCoordinates', latitude: '49.2349366', longitude: '9.3325801' },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Cleversulzbacher+Str.+10%2C+74196+Neuenstadt+am+Kocher',
    areaServed: ['Neuenstadt am Kocher', 'Heilbronn'],
    priceRange: '$$'
  };
  const graph = [
    {
      '@type': 'MedicalProcedure',
      name: service.title,
      description: service.lead,
      url: canonical,
      provider
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://zahnaerzte-roth.de/' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://zahnaerzte-roth.de/leistungen.html' },
        { '@type': 'ListItem', position: 3, name: service.title, item: canonical }
      ]
    }
  ];
  if (service.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: service.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
};

const buildSitemap = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/leistungen.html', priority: '0.9', changefreq: 'weekly' },
    { path: '/ratgeber.html', priority: '0.8', changefreq: 'monthly' },
    { path: '/impressum.html', priority: '0.3', changefreq: 'yearly' },
    { path: '/datenschutz.html', priority: '0.3', changefreq: 'yearly' },
    ...servicePages.map((service) => ({ path: `/${service.slug}.html`, priority: '0.8', changefreq: 'monthly' }))
  ];
  const urls = routes.map(({ path: route, priority, changefreq }) => `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(root, 'sitemap.xml'), xml, 'utf8');
};

export async function build() {
  const pages = [
    ['src-layout.html', 'index.html'],
    ['src-leistungen.html', 'leistungen.html'],
    ['src-ratgeber.html', 'ratgeber.html'],
    ['src-impressum.html', 'impressum.html'],
    ['src-datenschutz.html', 'datenschutz.html']
  ];

  for (const [layout, output] of pages) {
    let html = await readFile(path.join(root, layout), 'utf8');
    const includes = [...html.matchAll(/<template data-include="([^"]+)"><\/template>/g)];

    for (const include of includes) {
      const fragment = await readFile(path.join(root, include[1]), 'utf8');
      html = html.replace(include[0], fragment.trim());
    }

    await writeFile(path.join(root, output), html, 'utf8');
  }

  const detailTemplate = await readFile(path.join(root, 'src-leistung-detail.html'), 'utf8');
  for (const service of servicePages) {
    const canonical = `https://zahnaerzte-roth.de/${service.slug}.html`;
    const body = service.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n                    ');
    const benefits = service.benefits.map((benefit) => `<li><iconify-icon icon="mdi:check"></iconify-icon><span>${escapeHtml(benefit)}</span></li>`).join('\n                        ');
    const faq = service.faq?.length ? `<section class="service-detail-faq"><div class="subpage-container"><p class="service-detail-prose__eyebrow">Häufige Fragen</p><h2>Fragen zur Behandlung für Angstpatienten</h2><div class="service-detail-faq__list">${service.faq.map(({ question, answer }) => `<details><summary>${escapeHtml(question)}<iconify-icon icon="mdi:plus"></iconify-icon></summary><p>${escapeHtml(answer)}</p></details>`).join('')}</div></div></section>` : '';
    const replacements = {
      __TITLE__: escapeHtml(service.title),
      __SEO_TITLE__: escapeHtml(service.seoTitle || `${service.title} | Zahnarzt Adolf Roth in Neuenstadt am Kocher`),
      __META_DESCRIPTION__: escapeHtml(optimizeMetaDescription(service.metaDescription)),
      __CANONICAL__: canonical,
      __OG_TITLE__: escapeHtml(service.seoTitle || `${service.title} | Zahnarzt Adolf Roth in Neuenstadt am Kocher`),
      __OG_DESCRIPTION__: escapeHtml(optimizeMetaDescription(service.metaDescription)),
      __SCHEMA__: buildServiceSchema(service, canonical),
      __ACCENT__: service.accent,
      __ICON__: service.icon,
      __ICON_SVG__: buildServiceIconSvg(service.icon),
      __NUMBER__: service.number,
      __LEAD__: escapeHtml(service.lead),
      __HEADING__: escapeHtml(service.heading),
      __BODY__: body,
      __BENEFITS__: benefits,
      __FAQ__: faq
    };
    let html = detailTemplate;
    for (const [token, value] of Object.entries(replacements)) html = html.replaceAll(token, value);
    const detailIncludes = [...html.matchAll(/<template data-include="([^"]+)"><\/template>/g)];
    for (const include of detailIncludes) {
      const fragment = await readFile(path.join(root, include[1]), 'utf8');
      html = html.replace(include[0], fragment.trim());
    }
    await writeFile(path.join(root, `${service.slug}.html`), html, 'utf8');
  }
  await buildSitemap();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await build();
}
