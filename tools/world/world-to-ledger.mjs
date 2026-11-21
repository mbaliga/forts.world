// Appends world (non-South-Asia) sites from data/world/sites.csv.gz to docs/fort-fidelity/ledger.csv as `todo` fort rows,
// so model-queue / fetch-geometry / build-t1 work on them unchanged. Usage: node world-to-ledger.mjs <topN=1500> [extra.json]
// extra.json: [{id,name,cc,lat,lon,type,src}] hand-picked sites (e.g. Tunisian troglodyte villages and ksour found in OSM).
import fs from 'node:fs'; import zlib from 'node:zlib'; import path from 'node:path';
const root = path.resolve(new URL('../..', import.meta.url).pathname);
const N = +(process.argv[2] || 1500); const extra = process.argv[3] ? JSON.parse(fs.readFileSync(process.argv[3], 'utf8')) : [];
const SKIP = new Set(['IN', 'PK', 'NP', 'BD', 'LK', 'AF', 'BT', 'MV']);
const cn = new Intl.DisplayNames(['en'], { type: 'region' });
const parse = (t) => { const rows = []; let r = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { r.push(f); f = ''; } else if (c === '\n') { r.push(f); rows.push(r); r = []; f = ''; } else if (c !== '\r') f += c; } const h = rows.shift(); return rows.filter((x) => x.length === h.length).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i]]))); };
const W = parse(zlib.gunzipSync(fs.readFileSync(path.join(root, 'data/world/sites.csv.gz'))).toString('utf8'));
const led = path.join(root, 'docs/fort-fidelity/ledger.csv'); const lt = fs.readFileSync(led, 'utf8');
const have = new Set(lt.split('\n').map((l) => l.split(',')[0])); const haveQ = new Set([...lt.matchAll(/Q\d+/g)].map((m) => m[0]));
const slug = (s) => s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'site';
const q = (s) => /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
const out = []; let b = Math.max(5000, ...lt.split('\n').slice(1).map((l) => +(l.match(/(?:"(?:[^"]|"")*"|[^,]*),/g) || [])[8]?.replace(/,$/, '') || 0).filter(Number.isFinite)) + 1; // continue the batch numbering
const add = (id, name, cc, lat, lon, note) => { if (have.has(id)) return; have.add(id); out.push([id, q(name), '', q(cn.of(cc) || cc), lat, lon, 'no scene yet (fort)', 3, b++, 'todo', '', q(note)].join(',')); };
for (const e of extra) add(e.id, e.name, e.cc, e.lat, e.lon, `world; type=${e.type}; ${e.src}`);
const ok = W.filter((r) => r.notable === '1' && !SKIP.has(r.cc) && r.lat && !haveQ.has(r.qid) && !/^(bab|beb|porte|gate|puerta)\b/i.test(r.name))
  .sort((a, c) => (+c.whc_id ? 1 : 0) - (+a.whc_id ? 1 : 0) || +c.sitelinks - +a.sitelinks);
for (const r of ok.filter((r) => r.cc === 'TN').concat(ok.filter((r) => r.cc !== 'TN').slice(0, N))) add(`${slug(r.name)}-${r.qid.toLowerCase()}`, r.name, r.cc, r.lat, r.lon, `world; type=${r.kind}; ${r.classes}; sitelinks=${r.sitelinks}; wikidata:${r.qid}`);
fs.appendFileSync(led, out.join('\n') + '\n'); console.log('appended', out.length);
