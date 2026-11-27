// Builds the data for the public wiki page (web/wiki/index.html) into web/wiki/data/.
// Usage: node tools/wiki/build-site.mjs [outDir]      (default web/wiki/data; WIKI_TRACE_CACHE=/path/cache.json reuses the trace digest)
// Sources (the same as tools/wiki/build-wiki.mjs): the ledger, data/world/sites.csv.gz, the model traces, the UNESCO extract,
// docs/research/*.md and the hand-built level files (era lists). Every fact is copied from one of them; nothing is added from memory.
// Output (kept far below the Pages limits of 20,000 files and 25 MiB per file; one file per country, never one per site):
//   meta.json          countries, dictionaries, shard list, featured sites, counts
//   idx-<n>.json       search entries, most notable first, each shard under 4 MB
//   c/<country>.json   the page records for every site of that country
import fs from 'node:fs'; import path from 'node:path'; import zlib from 'node:zlib'; import vm from 'node:vm';
import { pathToFileURL } from 'node:url';
const root = path.resolve(new URL('../..', import.meta.url).pathname);
const OUT = path.resolve(process.argv[2] || path.join(root, 'web/wiki/data'));
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(path.join(OUT, 'c'), { recursive: true });
const parse = (t) => { const rows = []; let r = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { r.push(f); f = ''; } else if (c === '\n') { r.push(f); rows.push(r); r = []; f = ''; } else if (c !== '\r') f += c; } if (f || r.length) { r.push(f); rows.push(r); } const h = rows.shift(); return rows.filter((x) => x.length === h.length).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i]]))); };
const slug = (s) => String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'unknown';
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const ledger = parse(read('docs/fort-fidelity/ledger.csv')).filter((r) => r.status !== 'excluded');
const worldRows = parse(zlib.gunzipSync(fs.readFileSync(path.join(root, 'data/world/sites.csv.gz'))).toString('utf8'));
const worldByQ = new Map(), worldByProg = new Map();
for (const w of worldRows) { if (w.qid && (!worldByQ.has(w.qid) || w.notable === '1')) worldByQ.set(w.qid, w); if (w.programme_id) worldByProg.set(w.programme_id, w); }
const unesco = new Map(JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(root, 'data/sites-raw/unesco/in-region.json.gz'))).toString('utf8')).map((u) => [String(u.id), u.year]));
const tdir = path.join(root, 'data/traces');
const traceFiles = new Map(fs.readdirSync(tdir).filter((f) => f.endsWith('.trace.json')).map((f) => [f.replace('.trace.json', ''), f]));
const qOf = (r) => (r.notes_or_branch.match(/wikidata:(Q\d+)/) || r.notes_or_branch.match(/\b(Q\d+)\b/) || [])[1] || ((r.site_id.match(/-q(\d+)$/) || [])[1] && 'Q' + r.site_id.match(/-q(\d+)$/)[1]) || '';
const osmOf = (r) => (r.notes_or_branch.match(/osm (node|way|relation)\/(\d+)/) || []).slice(1, 3).join('/');

// ---------- trace digests (the slow part: ~80,000 files; cache with WIKI_TRACE_CACHE) ----------
const KINDS = ['outline', 'wall', 'building', 'road', 'waterway', 'water', 'zone', 'cliff', 'marker'];
const srcTable = [], srcIdx = new Map();
const srcOf = (s) => { let url = s.url || ''; if (/#map=|\d+\.\d{3,}|node\/|way\/|relation\//.test(url)) url = ''; const k = `${s.title}|${s.licence}|${url}`; if (!srcIdx.has(k)) { srcIdx.set(k, srcTable.length); srcTable.push([s.title || '', s.licence || '', url]); } return srcIdx.get(k); };
const TAGS = ['historic', 'castle_type', 'fortification_type', 'heritage', 'description', 'ruins', 'barrier', 'website'];
function digest(T) {
  const c = {}; for (const e of T.elements) c[e.kind] = (c[e.kind] || 0) + 1;
  const ev = T.evidence ? [T.evidence.documented, T.evidence.mapped, T.evidence.inferred, T.evidence.derived, T.evidence.documentedHeights ?? 0, T.evidence.inferredHeights ?? 0, T.evidence.unknownHeights ?? 0] : null;
  const ot = {}; for (const k of TAGS) if (T.site?.[k]) ot[k] = String(T.site[k]).slice(0, 300);
  const eras = (T.eras || []).filter((e) => !/^Mapped site/.test(e.label || '')).map((e) => ({ y: e.year, l: e.label, s: e.summary, b: e.basis, c: e.conjecture }));
  return { tier: T.tier, status: T.status, el: KINDS.map((k) => c[k] || 0), ev, src: (T.sources || []).map(srcOf), ot, eras, notes: (T.generated?.report?.notes || []).slice(0, 8) };
}
let cache = null; const cachePath = process.env.WIKI_TRACE_CACHE;
if (cachePath && fs.existsSync(cachePath)) { cache = JSON.parse(fs.readFileSync(cachePath, 'utf8')); srcTable.push(...cache.srcTable); cache.srcTable.forEach((s, i) => srcIdx.set(`${s[0]}|${s[1]}|${s[2]}`, i)); }
const digests = cache ? new Map(Object.entries(cache.d)) : new Map();
if (!cache) {
  let n = 0; const t0 = Date.now();
  for (const [id, f] of traceFiles) { try { digests.set(id, digest(JSON.parse(fs.readFileSync(path.join(tdir, f), 'utf8')))); } catch (e) { console.warn('bad trace', f, e.message); } if (++n % 10000 === 0) console.log(' traces', n, ((Date.now() - t0) / 1000 | 0) + 's'); }
  if (cachePath) fs.writeFileSync(cachePath, JSON.stringify({ srcTable, d: Object.fromEntries(digests) }));
}

// ---------- research passes: documented, inferred, conflicts and gaps, with the pass's own citations ----------
const RES = path.join(root, 'docs/research'); const resFiles = fs.readdirSync(RES).filter((f) => f.endsWith('.md'));
const SECTION = [[/^documented/i, 'doc'], [/^inferred|^drawn as inferred/i, 'inf'], [/^conflict|^registration accuracy|^doubts/i, 'conf'], [/^(missing|needed|what t2|evidence still|not established|not found|not traced|not drawn|not done)/i, 'gap']];
function clip(s, n) { s = s.trim(); if (s.length <= n) return s; const cut = s.slice(0, n); return cut.slice(0, Math.max(cut.lastIndexOf('\n'), cut.lastIndexOf('. ') + 1, n * 0.6)).trim() + ' …'; }
const passCache = new Map();
function pass(f) {
  if (passCache.has(f)) return passCache.get(f);
  const txt = fs.readFileSync(path.join(RES, f), 'utf8'); const title = (txt.match(/^# (.+)$/m) || [])[1] || f;
  const parts = txt.split(/^## /m).slice(1); const secs = [];
  for (const p of parts) { const nl = p.indexOf('\n'); const h = p.slice(0, nl).trim(), body = p.slice(nl + 1); const k = SECTION.find(([re]) => re.test(h))?.[1]; if (!k || !body.trim()) continue; secs.push({ k, h, b: clip(body, k === 'gap' ? 700 : 2200) }); }
  const r = { f, t: title.replace(/:? ?research pass.*$/i, '').trim() || title, secs }; passCache.set(f, r); return r;
}
const researchFor = (r) => {
  const fs_ = new Set(resFiles.filter((f) => f.startsWith(r.site_id + '-') && /pass|review|mapped|reconcil|registration|geometry/.test(f)));
  for (const m of r.notes_or_branch.matchAll(/docs\/research\/([\w.-]+\.md)/g)) if (resFiles.includes(m[1])) fs_.add(m[1]);
  return [...fs_].sort().map(pass).filter((p) => p.secs.length);
};

// ---------- featured sites: the twelve rebuilt forts and the world top 20 ----------
// level = the id ten-forts.html opens (build-reconstructions.mjs); file = the level source whose eras we list
const REBUILT = [['murud-janjira', 'janjira-hand', 'janjira-hand'], ['sindhudurg', 'sindhudurg-hand', 'sindhudurg-hand'], ['daulatabad', 'daulatabad-hand', 'daulatabad-hand'], ['golconda', 'golconda', 'golconda'], ['gingee', 'gingee', 'gingee'], ['gwalior', 'gwalior-hand', 'gwalior-hand'], ['chittorgarh', 'chittorgarh-hand', 'chittorgarh-hand'], ['kumbhalgarh', 'kumbhalgarh', 'kumbhalgarh'], ['mehrangarh', 'mehrangarh', 'mehrangarh'], ['jaisalmer', 'jaisalmer-hand', 'jaisalmer-hand'], ['agra-fort', null, 'agra-fort'], ['allahabad-fort', null, null]];
const AGRA_ERAS = { 'agra-fort': [['1573', 'Akbar\'s fort'], ['1653', 'Shah Jahan\'s marble court'], ['1901', 'Colonial garrison'], ['Today', 'Protected monument']], 'allahabad-fort': [['1583', 'Akbar\'s fort'], ['Today', 'Present day']] }; // scene years as listed on the time map (web/home)
const top20 = [...read('docs/fort-fidelity/world-top20.md').matchAll(/^\| (\d+) \| `([^`]+)` \|/gm)].map((m) => [m[2], +m[1]]);
const featured = new Map(); REBUILT.forEach(([id, lvl, file], i) => featured.set(id, { group: 'rebuilt', order: i, level: lvl, file })); for (const [id, n] of top20) { if (featured.has(id)) featured.get(id).top20 = n; else featured.set(id, { group: 'top20', order: 100 + n, top20: n }); }
const catalogue = (await import(pathToFileURL(path.join(root, 'src/data/source-catalogue.js')).href)).default; const catById = new Map(catalogue.map((c) => [c.id, c]));
function levelEras(file) {
  const p = path.join(root, 'src/levels', file + '.js'); if (!file || !fs.existsSync(p)) return null; const t = fs.readFileSync(p, 'utf8'); const m = /\beras:\s*\[/.exec(t); if (!m) return null;
  let i = m.index + m[0].length - 1, d = 0, q = '', s = i; for (; i < t.length; i++) { const c = t[i]; if (q) { if (c === '\\') i++; else if (c === q) q = ''; } else if (c === '\'' || c === '"' || c === '`') q = c; else if (c === '[') d++; else if (c === ']' && --d === 0) { i++; break; } }
  try { const arr = vm.runInNewContext('(' + t.slice(s, i) + ')', {}, { timeout: 500 });
    return arr.map((e) => ({ y: e.year, l: e.label, s: e.summary, b: e.basis, c: e.conjecture, r: (e.sources || []).map((id) => catById.get(id)).filter(Boolean).map((c) => [c.title, c.creator, c.date, c.license, c.page_url]) })); } catch { return null; }
}

// ---------- assemble the records ----------
const dict = (a) => { const m = new Map(); return { i: (v) => { v = v || ''; if (!m.has(v)) m.set(v, m.size); return m.get(v); }, list: () => [...m.keys()] }; };
const kinds = dict(), tiers = dict(); tiers.i('');
const KIND_MAP = { ruins: 'ruin', citywalls: 'fortification', archaeological_site: 'fortification' };
const countries = new Map(); // name -> {slug, recs[], idx[]}
let n3d = 0, nHand = 0;
for (const r of ledger) {
  const cc = r.country || 'Unknown'; if (!countries.has(cc)) countries.set(cc, { name: cc, slug: slug(cc), recs: [] });
  const qid = qOf(r); const W = (qid && worldByQ.get(qid)) || worldByProg.get(r.site_id) || null; const D = digests.get(r.site_id) || null;
  const F = featured.get(r.site_id);
  const kind = W?.kind || KIND_MAP[D?.ot?.historic] || D?.ot?.historic || '';
  const tier = r.tier_reached || D?.tier || '';
  const rec = { i: r.site_id, n: r.name, la: +(+r.lat).toFixed(5), lo: +(+r.lon).toFixed(5), ad: (W?.admin || r.region || '').trim(), k: kinds.i(kind), t: tiers.i(tier), s: r.status };
  if (W?.native && W.native !== r.name) rec.nat = W.native;
  if (qid) rec.q = qid; if (W?.id) rec.w = W.id; const osm = osmOf(r) || (W?.osm ? { w: 'way/', n: 'node/', r: 'relation/' }[W.osm[0]] + W.osm.slice(1) : ''); if (osm) rec.o = osm;
  const sl = +(W?.sitelinks || 0); if (sl) rec.sl = sl;
  if (W) { if (W.inception) rec.inc = W.inception; if (W.classes) rec.cls = W.classes.split('|').slice(0, 8); if (W.designations) rec.des = W.designations.split('|'); if (W.whc_id) { rec.whc = W.whc_id; if (unesco.has(W.whc_id)) rec.wy = unesco.get(W.whc_id); } }
  const note = r.notes_or_branch; if (note && !/^(world;|type=)/.test(note)) rec.nt = clip(note, 1400);
  if (D) { rec.m = 1; rec.el = D.el; if (D.ev) rec.ev = D.ev; rec.sr = D.src; if (Object.keys(D.ot).length) rec.ot = D.ot; rec.ms = D.status; n3d++; }
  const ra = researchFor(r); if (ra.length) rec.ra = ra;
  if (F) { rec.ft = F.group; if (F.top20) rec.top = F.top20; if (D?.notes?.length) rec.bn = D.notes; if (F.level) { rec.h3 = F.level; nHand++; }
    const eras = (F.file && levelEras(F.file)) || (AGRA_ERAS[r.site_id] ? AGRA_ERAS[r.site_id].map(([y, l]) => ({ y, l })) : null) || (D?.eras?.length ? D.eras : null); if (eras) rec.er = eras; }
  countries.get(cc).recs.push(rec);
}
// ---------- write ----------
const cl = [...countries.values()].sort((a, b) => b.recs.length - a.recs.length || a.name.localeCompare(b.name)); const cIdx = new Map(cl.map((c, i) => [c.name, i]));
const entries = [];
for (const c of cl) {
  c.recs.sort((a, b) => (b.sl || 0) - (a.sl || 0) || (b.m || 0) - (a.m || 0) || a.n.localeCompare(b.n));
  for (const x of c.recs) entries.push([x.i, x.n, x.nat || '', cIdx.get(c.name), x.ad, x.k, x.la, x.lo, x.t, x.h3 ? 2 : x.m ? 1 : 0, x.sl || 0]);
  const json = JSON.stringify({ slug: c.slug, name: c.name, sites: c.recs }); fs.writeFileSync(path.join(OUT, 'c', c.slug + '.json'), json);
}
entries.sort((a, b) => b[10] - a[10] || b[9] - a[9] || a[1].localeCompare(b[1]));
const shards = []; let cur = [], bytes = 0; const LIM = 3.5e6;
const flush = () => { if (!cur.length) return; const f = `idx-${shards.length}.json`; fs.writeFileSync(path.join(OUT, f), JSON.stringify(cur)); shards.push({ f, n: cur.length }); cur = []; bytes = 0; };
for (const e of entries) { const s = JSON.stringify(e).length + 1; if (bytes + s > LIM) flush(); cur.push(e); bytes += s; } flush();
const feat = [...featured.entries()].filter(([id]) => ledger.some((r) => r.site_id === id)).sort((a, b) => a[1].order - b[1].order).map(([id, F]) => { const c = cl.find((x) => x.recs.some((y) => y.i === id)); const x = c.recs.find((y) => y.i === id); return { id, n: x.n, c: c.slug, g: F.group, top: F.top20 || 0, h3: F.level || '' }; });
const meta = { built: new Date().toISOString().slice(0, 10), total: ledger.length, withModel: n3d, handBuilt: nHand, countries: cl.map((c) => ({ slug: c.slug, name: c.name, n: c.recs.length, m: c.recs.filter((x) => x.m).length })), kinds: kinds.list(), tiers: tiers.list(), shards, featured: feat, srcs: srcTable, whc: ledger.filter((r) => 0).length };
meta.whc = new Set(cl.flatMap((c) => c.recs.filter((x) => x.whc).map((x) => x.whc))).size;
fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify(meta));
let files = 0, big = 0, bigName = '', total = 0; const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else { const s = fs.statSync(p).size; files++; total += s; if (s > big) { big = s; bigName = path.relative(OUT, p); } } } }; walk(OUT);
console.log(`wiki site data: ${ledger.length} sites, ${cl.length} countries, ${n3d} with a model, ${feat.length} featured; ${files} files, ${(total / 1e6).toFixed(1)} MB, biggest ${bigName} ${(big / 1e6).toFixed(2)} MB`);
const bigIdx = Math.max(...shards.map((s) => fs.statSync(path.join(OUT, s.f)).size));
if (files > 500 || big > 20 * 1024 * 1024 || bigIdx > 5 * 1024 * 1024) { console.error('over the size plan'); process.exit(1); }
