import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from './build.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT ?? 4173);
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

createServer(async (request, response) => {
  try {
    await build();
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const requested = pathname === '/' ? 'index.html' : pathname.slice(1);
    const filePath = path.resolve(root, requested);

    if (!filePath.startsWith(`${root}${path.sep}`) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    response.writeHead(200, { 'Content-Type': types[path.extname(filePath)] ?? 'application/octet-stream' });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(error.stack);
  }
}).listen(port, () => {
  process.stdout.write(`http://localhost:${port}\n`);
});
