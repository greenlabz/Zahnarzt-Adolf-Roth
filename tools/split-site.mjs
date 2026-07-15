import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourcePath = process.argv[2];
const root = path.resolve(process.argv[3] ?? process.cwd());

if (!sourcePath) {
  throw new Error('Usage: node tools/split-site.mjs <source-html> [target-directory]');
}

const source = await readFile(sourcePath, 'utf8');
const headMatch = source.match(/<head>([\s\S]*?)<\/head>/i);
const bodyMatch = source.match(/<body>([\s\S]*?)<\/body>/i);

if (!headMatch || !bodyMatch) {
  throw new Error('Source must contain head and body elements.');
}

let head = headMatch[1].trim();
let body = bodyMatch[1].trim();

const inlineHeadScript = head.match(/<script>\s*([\s\S]*?tailwind\.config[\s\S]*?)<\/script>/i);
const style = head.match(/<style>\s*([\s\S]*?)<\/style>/i);
const bodyScript = body.match(/<script>\s*([\s\S]*?)<\/script>\s*$/i);

if (!inlineHeadScript || !style || !bodyScript) {
  throw new Error('Expected Tailwind config, global style, and body script.');
}

const sectionNames = [
  ['NAVIGATION', 'navigation'],
  ['HERO', 'hero'],
  ['MARQUEE BAR', 'marquee'],
  ['STATISTIKEN', 'statistics'],
  ['LEISTUNGEN', 'services'],
  ['ÜBER UNS', 'about'],
  ['ERGEBNISSE', 'results'],
  ['TEAM', 'team'],
  ['BEWERTUNGEN', 'reviews'],
  ['TECHNOLOGIE', 'technology'],
  ['TERMIN BUCHEN', 'appointment'],
  ['KONTAKT / KARTE', 'contact'],
  ['CTA BANNER', 'cta'],
  ['FOOTER', 'footer'],
  ['TOAST', 'toast']
];

body = body.slice(0, bodyScript.index).trim();

const markers = sectionNames.map(([label, name]) => {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const expression = new RegExp(`<!--\\s*(?:=+\\s*)?${escaped}(?:\\s*=+)?\\s*-->`, 'i');
  const match = expression.exec(body);
  if (!match) throw new Error(`Missing section marker: ${label}`);
  return { label, name, index: match.index, length: match[0].length };
}).sort((a, b) => a.index - b.index);

await Promise.all([
  mkdir(path.join(root, 'assets', 'css'), { recursive: true }),
  mkdir(path.join(root, 'assets', 'js'), { recursive: true }),
  mkdir(path.join(root, 'sections'), { recursive: true }),
  mkdir(path.join(root, 'tools'), { recursive: true })
]);

for (let index = 0; index < markers.length; index += 1) {
  const marker = markers[index];
  const next = markers[index + 1];
  const content = body
    .slice(marker.index + marker.length, next?.index ?? body.length)
    .replace(/<!--([\s\S]*?)-->/g, '')
    .trim();
  await writeFile(path.join(root, 'sections', `${marker.name}.html`), `${content}\n`, 'utf8');
}

head = head
  .replace(inlineHeadScript[0], '<script src="assets/js/tailwind-config.js"></script>')
  .replace(style[0], '<link rel="stylesheet" href="assets/css/styles.css">')
  .replace('</title>', '</title>\n    <link rel="icon" href="data:,">');

const includes = markers
  .map(({ name }) => `    <template data-include="sections/${name}.html"></template>`)
  .join('\n');

const layout = `<!DOCTYPE html>\n<html lang="de">\n<head>\n${head}\n</head>\n<body>\n${includes}\n    <script src="assets/js/main.js"></script>\n</body>\n</html>\n`;

await Promise.all([
  writeFile(path.join(root, 'src-layout.html'), layout, 'utf8'),
  writeFile(path.join(root, 'assets', 'css', 'styles.css'), `${style[1].trim()}\n`, 'utf8'),
  writeFile(path.join(root, 'assets', 'js', 'tailwind-config.js'), `${inlineHeadScript[1].trim()}\n`, 'utf8'),
  writeFile(path.join(root, 'assets', 'js', 'main.js'), `${bodyScript[1].trim()}\n`, 'utf8')
]);
