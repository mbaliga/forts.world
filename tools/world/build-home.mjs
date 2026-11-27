// Builds the data the home page and time map (web/home) load, from the site universe in data/world/sites.csv.gz.
//   node tools/world/build-home.mjs [outDir=web/home/data]
// Writes:
//   sites.json    sites with a founding year: [lon, lat, year, approx(0|1), kind, name, cc, sitelinks]
//   undated.json  sites without one, column-wise: { lon:[], lat:[] (both x1000), kind:[], name:[], cc:[], links:[] }
//   land-110m.json, countries-110m.json  copied from world-atlas (Natural Earth, public domain)
// The relief grids (dem10.png, dem30.png) are committed in web/home; see web/home/README.md.
// Kinds: 0 castle, 1 fort, 2 fortification, 3 ruin. Rows from OpenStreetMap stay ODbL: keep the attribution on the page.
import { createReadStream, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { createInterface } from 'node:readline';
import { createRequire } from 'node:module';
import path from 'node:path';

const out = process.argv[2] || 'web/home/data';
mkdirSync(out, { recursive: true });
const KIND = { castle: 0, fort: 1, fortification: 2, ruin: 3 };

function parseCsvLine(line) {
  const f = []; let cur = '', q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ',') { f.push(cur); cur = ''; } else cur += ch; }
  f.push(cur); return f;
}
// Wikidata inception strings as the world build writes them: "1650", "-0700", "C13", "~1730", "1730s", "early C16", "before 1200"...
export function parseYear(raw) {
  let s = (raw || '').trim(); if (!s) return null; s = s.split(';')[0].trim();
  let approx = /^(~|c\.|ca\.|circa)/i.test(s) || /^(before|after|early|late|mid|end|begin)/i.test(s);
  const cen = /C(\d{1,2})\b/i.exec(s);
  const yr = /(^|[^\d])(-?\d{3,4})(s?)/.exec(s);
  if (yr && !(cen && cen.index < yr.index)) { const y = parseInt(yr[2], 10); if (yr[3]) approx = true; return { year: y, approx: approx || /\.\.|\//.test(s) }; }
  if (cen) { const c = parseInt(cen[1], 10), base = (c - 1) * 100; let off = 50;
    if (/early|begin/i.test(s)) off = 15; else if (/late|end/i.test(s)) off = 85; return { year: base + off, approx: true }; }
  return null;
}

const rl = createInterface({ input: createReadStream('data/world/sites.csv.gz').pipe(createGunzip()) });
let head = null; const dated = [], und = { lon: [], lat: [], kind: [], name: [], cc: [], links: [] };
for await (const line of rl) {
  const f = parseCsvLine(line); if (!head) { head = Object.fromEntries(f.map((k, i) => [k, i])); continue; }
  const lon = +f[head.lon], lat = +f[head.lat], kind = KIND[f[head.kind]] ?? 2; if (!isFinite(lon) || !isFinite(lat)) continue;
  const name = f[head.name] || f[head.native] || '', cc = f[head.cc] || '', links = +f[head.sitelinks] || 0;
  const y = parseYear(f[head.inception]);
  if (y && y.year >= -3000 && y.year <= 2026) dated.push([+lon.toFixed(4), +lat.toFixed(4), y.year, y.approx ? 1 : 0, kind, name, cc, links]);
  else { und.lon.push(Math.round(lon * 1000)); und.lat.push(Math.round(lat * 1000)); und.kind.push(kind); und.name.push(name); und.cc.push(cc); und.links.push(links); }
}
writeFileSync(path.join(out, 'sites.json'), JSON.stringify(dated));
writeFileSync(path.join(out, 'undated.json'), JSON.stringify(und));
const require = createRequire(import.meta.url), atlas = path.dirname(require.resolve('world-atlas/package.json'));
for (const f of ['land-110m.json', 'countries-110m.json']) copyFileSync(path.join(atlas, f), path.join(out, f));
console.log(`dated ${dated.length}, undated ${und.lon.length} -> ${out}`);
