import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = resolve(process.cwd());
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const path = resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!path.startsWith(root + sep) || pathname.split('/').some(part => part.startsWith('.')) || !['/assets/', '/index.html', '/styles.css', '/app.js', '/404.html', '/robots.txt', '/sitemap.xml'].some(prefix => pathname === '/' || pathname.startsWith(prefix))) {
      response.writeHead(404); response.end('Not found'); return;
    }
    await stat(path);
    const content = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    response.end(content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(resolve(root, '404.html'), 'utf8').catch(() => 'Not found'));
  }
}).listen(52471, '127.0.0.1', () => console.log('Portfolio preview: http://127.0.0.1:52471'));
