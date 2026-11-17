import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import vm from 'node:vm';
const html = await readFile('index.html', 'utf8');
const js = await readFile('app.js', 'utf8');
const errors = [];
try { new vm.Script(js); } catch (error) { errors.push(error.message); }
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) errors.push('Duplicate HTML IDs');
for (const match of html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) {
  const target = match[1];
  if (/^(https?:|mailto:)/.test(target)) continue;
  try { await access(resolve(target)); } catch { errors.push('Missing asset: ' + target); }
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(match[1])) errors.push('Missing anchor: ' + match[1]);
}
for (const match of html.matchAll(/target="_blank"[^>]*>/g)) {
  if (!match[0].includes('noopener')) errors.push('External link missing noopener');
}
const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
if (data.name !== 'Carmine Laudato') errors.push('Person metadata mismatch');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Checks passed: JavaScript syntax, local assets, anchors, unique IDs, external link protection, person metadata.');
