// Bundle web/fort-search + its data into ONE self-contained HTML file (data gzip+base64 inside, decoded in the browser).
//   node bundle-standalone.mjs [--web web/fort-search] [--data web/fort-search/data] --out fort-search-standalone.html [--note "text"]
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const WEB = path.resolve(ROOT, arg('web', 'web/fort-search')), DATA = path.resolve(ROOT, arg('data', 'web/fort-search/data')), OUT = path.resolve(arg('out', 'fort-search-standalone.html'));
const note = arg('note', '');
const rd = (p) => fs.readFileSync(p, 'utf8');
const dict = {};
for (const f of ['search.json', 'search-osm.json', 'tiles.json']) dict['data/' + f] = rd(path.join(DATA, f));
for (const f of fs.readdirSync(path.join(DATA, 'tiles'))) dict['data/tiles/' + f] = rd(path.join(DATA, 'tiles', f));
const blob = zlib.gzipSync(Buffer.from(JSON.stringify(dict)), { level: 9 }).toString('base64');
const safe = (s) => s.replace(/<\/(script|style)/gi, '<\\/$1');
let html = rd(path.join(WEB, 'index.html'));
const css = rd(path.join(WEB, 'vendor/leaflet.css')) + '\n' + rd(path.join(WEB, 'style.css'));
html = html.replace(/<link rel="stylesheet"[^>]*leaflet\.css">/, '').replace(/<link rel="stylesheet" href="style.css">/, `<style>${safe(css)}</style>`);
html = html.replace('<script src="vendor/leaflet.js"></script>', `<script>${safe(rd(path.join(WEB, 'vendor/leaflet.js')))}</script>`);
const loader = `(async()=>{const b64=document.getElementById('blob').textContent.trim();const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
const txt=await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).text();const D=JSON.parse(txt);
const real=window.fetch.bind(window);window.fetch=(u,o)=>{const k=String(u).replace(/^\\.\\//,'');if(k in D)return Promise.resolve(new Response(D[k],{status:200,headers:{'content-type':'application/json'}}));return real(u,o);};
const s=document.createElement('script');s.textContent=document.getElementById('app-src').textContent;document.body.appendChild(s);})();`;
html = html.replace('<script src="app.js"></script>', `<script id="blob" type="application/octet-stream">${blob}</script><script id="app-src" type="text/plain">${safe(rd(path.join(WEB, 'app.js')))}</script><script>${loader}</script>`);
if (note) html = html.replace('<p class="sub">', `<p class="sub">${note.replace(/</g, '&lt;')}<br>`);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`${OUT}: ${(html.length / 1e6).toFixed(1)} MB, ${Object.keys(dict).length} data files`);
