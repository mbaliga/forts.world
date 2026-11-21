// Phase 0 merge: world-catalogue + Smith-Newton + whatever fetch-sites.mjs has put in data/sites-raw/
// -> data/sites.csv, data/sites-report.json, docs/fort-fidelity/PHASE0-REPORT.md, regenerated ledger.csv, MASTER-PLAN.md status block.
// Runs offline and deterministically. Missing raw sources are simply absent (and the report says so).
// Usage: node tools/build-sites.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const P = (...a) => path.join(root, ...a);
const RAW = P('data/sites-raw');
const CC = { IN: 'India', PK: 'Pakistan', BD: 'Bangladesh', NP: 'Nepal', LK: 'Sri Lanka', AF: 'Afghanistan', BT: 'Bhutan' };
const ISO3 = { in: 'India', pk: 'Pakistan', bd: 'Bangladesh', np: 'Nepal', lk: 'Sri Lanka', af: 'Afghanistan', bt: 'Bhutan' };
const SRC_PRIORITY = { catalogue: 0, wikidata: 1, unesco: 2, osm: 3, 'asi-wiki': 4, 'smith-newton': 5 };
const BATCH1 = ['aguada', 'cabo-de-rama', 'chapora', 'reis-magos', 'gwalior'];

// ------------------------------------------------------------------ csv helpers
const csvEsc = v => { v = v == null ? '' : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
function parseCsv(text) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const readGz = p => JSON.parse(zlib.gunzipSync(fs.readFileSync(p)).toString('utf8'));
const listGz = dir => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json.gz')).sort().map(f => path.join(dir, f)) : [];

// ------------------------------------------------------------------ typing
const OUT_OF_SCOPE = new Set(['other', 'other-religious', 'unknown']);
const GENERIC_TYPE = new Set(['archaeological-site', 'other-heritage', 'unknown']);
const TYPE_PRIORITY = ['fort', 'palace', 'stepwell', 'tomb', 'monastery-university', 'temple', 'ancient-city', 'port', 'archaeological-site', 'other-heritage'];
const RULES = [
  ['fort', /fort(ress|ification|ified)?\b|castle|citadel|bastion|rampart|city wall|city gate|walled (city|town)|garh\b|qila\b/i],
  ['palace', /palace|mahal\b|haveli|rajwada|manor/i],
  ['stepwell', /step ?well|\bvav\b|baoli|bawdi|baori|pushkarani/i],
  ['tomb', /tomb|mausoleum|maqbara|cenotaph|dargah|sepulch|burial/i],
  ['monastery-university', /monaster|vihara|mahavihara|gompa|university|buddhist (complex|site)|\bmath\b/i],
  ['temple', /temple|shrine|stupa|chaitya|\bmandir\b|rock-cut|cave complex|pagoda|gurdwara|gurudwara/i],
  ['port', /(?<!air)port\b|harbou?r|dockyard|anchorage|jetty/i],
  ['ancient-city', /ancient city|ancient town|lost city|capital city/i],
  ['archaeological-site', /archaeolog|ruins?\b|excavat|mound|tumulus/i],
];
function classify(text) {
  if (!text) return 'unknown';
  const hits = new Set(RULES.filter(([, re]) => re.test(text)).map(([t]) => t));
  for (const t of TYPE_PRIORITY) if (hits.has(t)) return t;
  if (/mosque|masjid|church|cathedral|synagogue|bridge|museum|dam\b|lighthouse|tower|minaret/i.test(text)) return 'other-religious';
  return 'other';
}
function osmType(t) {
  const h = t.historic, b = t.building, a = t.amenity;
  if (t.name && /(vav|baoli|bawdi|baori|stepwell|step well|pushkarani)/i.test(t.name)) return 'stepwell';
  if (h === 'castle') return /palace|stately|manor/i.test(t.castle_type || '') ? 'palace' : 'fort';
  if (['fort', 'city_gate', 'city_walls', 'citywalls'].includes(h)) return 'fort';
  if (h === 'palace' || h === 'manor') return 'palace';
  if (h === 'tomb' || b === 'mausoleum') return 'tomb';
  if (h === 'monastery' || b === 'monastery' || a === 'monastery') return 'monastery-university';
  if (h === 'temple' || h === 'stupa' || b === 'temple' || b === 'shrine') return 'temple';
  if (b === 'palace') return 'palace';
  if (b === 'castle' || b === 'fort') return 'fort';
  if (h === 'archaeological_site') {
    const s = (t.site_type || '').toLowerCase();
    if (/fort/.test(s)) return 'fort'; if (/tomb|grave|tumulus/.test(s)) return 'tomb';
    if (/settlement|city|town|village/.test(s)) return 'ancient-city'; if (/monaster|temple/.test(s)) return 'monastery-university';
    return classify(t.name) !== 'other' && classify(t.name) !== 'unknown' && classify(t.name) !== 'other-religious' ? classify(t.name) : 'archaeological-site';
  }
  if (h === 'ruins') { const c = classify(t.name); return OUT_OF_SCOPE.has(c) ? 'archaeological-site' : c; }
  if (t.harbour || t.landuse === 'harbour' || /port|harbour/.test(h || '')) return 'port';
  if (a === 'place_of_worship') return /hindu|buddhist|jain|sikh|shinto|taoist/i.test(t.religion || '') ? 'temple' : 'other-religious';
  const c = classify(t.name); return c;
}

// ------------------------------------------------------------------ name matching
const strip = s => String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase();
const GENERIC_WORDS = new Set(('fort fortress fortification fortified castle citadel qila kila killa quila durg durga garh gad gadh kot kotla kote kottai palace mahal mandir temple devalaya devasthanam devalayam shrine tomb mausoleum maqbara dargah stepwell vav baoli bawdi baori ruins ruin archaeological archaeology site sites monastery vihara mahavihara stupa the of at and in on near old ancient city town complex group monuments monument remains walls wall gate gates bastion port harbour harbor').split(' '));
const SUFFIXES = ['garh', 'gadh', 'gad', 'durg', 'kot', 'fort'];
function nameKey(n) {
  const toks = strip(n).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
    .map(w => { for (const s of SUFFIXES) if (w.length > s.length + 2 && w.endsWith(s)) return w.slice(0, -s.length); return w; })
    .filter(w => !GENERIC_WORDS.has(w))
    .map(w => w.replace(/(.)\1+/g, '$1').replace(/w/g, 'v'));
  return toks;
}
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function nameSim(ka, kb) {
  if (!ka.length || !kb.length) return 0;
  const a = ka.join(''), b = kb.join('');
  if (a.length < 3 || b.length < 3) return a === b ? 1 : 0;
  if (a === b) return 1;
  const sa = new Set(ka), sb = new Set(kb);
  const [small, big] = sa.size <= sb.size ? [sa, sb] : [sb, sa];
  const dig = k => k.filter(t => /\d/.test(t)).sort().join(',');
  if (dig(ka) !== dig(kb)) return 0; // "Narsinghgarh 1" and "Narsinghgarh 2" are different sites
  if ([...small].every(t => big.has(t)) && [...small].join('').length >= 4) return 0.85; // subset names ("X" / "Lower X"): only trusted at close range
  return 1 - lev(a, b) / Math.max(a.length, b.length);
}
const compat = (a, b) => a === b || GENERIC_TYPE.has(a) || GENERIC_TYPE.has(b)
  || (['fort', 'palace'].includes(a) && ['fort', 'palace'].includes(b))
  || (['ancient-city', 'monastery-university'].includes(a) && ['ancient-city', 'monastery-university'].includes(b));
const hav = (a, b) => {
  const R = 6371000, r = Math.PI / 180, dl = (b.lat - a.lat) * r, dn = (b.lon - a.lon) * r;
  const x = Math.sin(dl / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dn / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const slug = s => strip(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'site';

// ------------------------------------------------------------------ load sources
const recs = []; const rawCounts = {}; const dropped = {};
const add = r => { rawCounts[r.src] = (rawCounts[r.src] || 0) + 1; if (OUT_OF_SCOPE.has(r.type) && !r.keep) { dropped[r.src] = (dropped[r.src] || 0) + 1; return; } if (OUT_OF_SCOPE.has(r.type)) r.type = 'other-heritage'; recs.push(r); };

// existing ledger (also frozen coordinates for sites whose geometry is already fetched)
const ledgerPath = P('docs/fort-fidelity/ledger.csv');
const ledgerRows = parseCsv(fs.readFileSync(ledgerPath, 'utf8')).filter(r => r.length > 1);
const ledgerHeader = ledgerRows.shift();
const ledgerById = new Map(ledgerRows.map(r => [r[0], r]));
const hasGeometry = id => fs.existsSync(P('data/geometry', id, 'meta.json'));

// catalogue
const KIND = { fort: 'fort', temple: 'temple', 'temple-group': 'temple', stepwell: 'stepwell', 'settlement-port': 'port', palace: 'palace' };
const cat = JSON.parse(fs.readFileSync(P('content/historical-world/world-catalogue.json'), 'utf8'));
for (const s of cat.sites) {
  let lat = s.location?.value?.lat ?? null, lon = s.location?.value?.lon ?? null, q = 1, frozen = false;
  const lr = ledgerById.get(s.id);
  if (lat == null && lr && lr[4] !== '') { lat = +lr[4]; lon = +lr[5]; }
  if (lr && hasGeometry(s.id)) { lat = +lr[4]; lon = +lr[5]; q = 3; frozen = true; }
  add({ src: 'catalogue', key: s.id, id: s.id, name: s.name, type: KIND[s.kind] || classify(s.kind), lat, lon, q: lat == null ? 0 : q, frozen, country: s.country, region: s.region || '', flags: { curated: true } });
}
// Smith-Newton 2024 (fortifications only)
const sn = JSON.parse(fs.readFileSync(P('src/data/smith-newton-2024.json'), 'utf8'));
for (const r of sn.records) {
  const ok = typeof r.lat === 'number' && typeof r.lon === 'number' && Math.abs(r.lat) <= 90 && Math.abs(r.lon) <= 180;
  add({ src: 'smith-newton', key: 'r' + r.row, name: r.name, type: 'fort', lat: ok ? r.lat : null, lon: ok ? r.lon : null, q: ok ? 2 : 0, country: r.country, region: r.region || '', flags: {} });
}
// Wikidata
for (const f of listGz(path.join(RAW, 'wikidata'))) {
  const cc = path.basename(f).slice(0, 2);
  for (const r of readGz(f)) {
    const text = [...r.classes, r.name].join(' | ');
    let type = classify(r.classes.join(' | ')), weak = false; if (OUT_OF_SCOPE.has(type)) { type = classify(r.name); weak = true; }
    const national = r.designations.some(d => /national importance|archaeological survey|national monument|national heritage|protected monument/i.test(d));
    add({ src: 'wikidata', key: r.qid, qid: r.qid, name: r.name, type, weak, lat: r.lat, lon: r.lon, q: 3, country: CC[cc], region: r.admin || '', sl: r.sl, keep: !!r.whs, flags: { whs: !!r.whs, asi: national, designated: r.designations.length > 0 } });
  }
}
// OSM
for (const f of listGz(path.join(RAW, 'osm'))) {
  const cc = path.basename(f).slice(0, 2);
  for (const e of readGz(f)) {
    const t = e.tags || {}, name = t['name:en'] || t.name; if (!name) continue;
    const asi = /ASI|Archaeological Survey/i.test(t['heritage:operator'] || '');
    const ot = osmType(t);
    add({ src: 'osm', key: e.t + e.id, qid: t.wikidata && /^Q\d+$/.test(t.wikidata) ? t.wikidata : null, name, type: ot, weak: !(t.historic || t.building || t.amenity === 'place_of_worship' || t.harbour || t.landuse), lat: e.lat, lon: e.lon, q: 3, country: CC[cc], region: t['addr:state'] || t['is_in:state'] || '', flags: { asi, designated: !!t.heritage, wiki: !!(t.wikipedia || t.wikidata), whs: !!t['ref:whc'] } });
  }
}
// UNESCO
for (const f of listGz(path.join(RAW, 'unesco'))) {
  for (const u of readGz(f)) {
    if (!isFinite(u.lat) || !isFinite(u.lon)) continue;
    if (/^natural$/i.test(u.category || '')) { dropped.unesco = (dropped.unesco || 0) + 1; rawCounts.unesco = (rawCounts.unesco || 0) + 1; continue; }
    let type = classify(u.name); if (OUT_OF_SCOPE.has(type)) type = 'other-heritage';
    add({ src: 'unesco', key: u.id, name: u.name, type, weak: true, lat: u.lat, lon: u.lon, q: 3, country: ISO3[u.iso?.[0]] || '', region: u.region || '', keep: true, flags: { whs: true } });
  }
}
// ASI (Wikipedia lists)
for (const f of listGz(path.join(RAW, 'asi'))) {
  for (const a of readGz(f)) {
    const type = classify(a.name);
    add({ src: 'asi-wiki', key: slug(a.list) + ':' + slug(a.name), name: a.name, type, weak: true, lat: a.lat, lon: a.lon, q: 2, country: 'India', region: (/ in (.+)$/.exec(a.list) || [])[1] || '', flags: { asi: true } });
  }
}
const manifest = fs.existsSync(path.join(RAW, 'manifest.json')) ? JSON.parse(fs.readFileSync(path.join(RAW, 'manifest.json'), 'utf8')) : null;

// ------------------------------------------------------------------ cluster
recs.forEach((r, i) => { r.i = i; r.nk = nameKey(r.name); });
const parent = recs.map((_, i) => i);
const find = x => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
const union = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[Math.max(a, b)] = Math.min(a, b); };
const CELL = 0.2, cellKey = (la, lo) => Math.floor(la / CELL) + ',' + Math.floor(lo / CELL);
const grid = new Map();
for (const r of recs) if (r.lat != null) { const k = cellKey(r.lat, r.lon); (grid.get(k) || grid.set(k, []).get(k)).push(r); }
for (const r of recs) {
  if (r.lat == null) continue;
  const ci = Math.floor(r.lat / CELL), cj = Math.floor(r.lon / CELL);
  for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) for (const o of grid.get((ci + di) + ',' + (cj + dj)) || []) {
    if (o.i <= r.i) continue;
    const d = hav(r, o);
    if (r.qid && o.qid && r.qid === o.qid && d < 80000) { union(r.i, o.i); continue; }
    if (!(r.weak || o.weak || compat(r.type, o.type))) continue;
    const lim = Math.min(r.q, o.q) <= 1 ? 15000 : Math.min(r.q, o.q) === 2 ? 5000 : 3000;
    const sim = nameSim(r.nk, o.nk);
    if (sim >= 0.84 && d <= (sim < 0.9 ? Math.min(lim, 1500) : lim)) union(r.i, o.i);
    else if (d <= 50 && r.type === o.type && (!r.nk.length || !o.nk.length)) union(r.i, o.i);
  }
}
// coordinate-less records: join a cluster only on an exact name key within the same country, and only if that is unambiguous
const byKey = new Map();
for (const r of recs) if (r.lat != null && r.nk.join('').length >= 5) { const k = r.country + '|' + r.nk.join(' '); (byKey.get(k) || byKey.set(k, new Set()).get(k)).add(find(r.i)); }
for (const r of recs) if (r.lat == null && r.nk.join('').length >= 5) { const s = byKey.get(r.country + '|' + r.nk.join(' ')); if (s && s.size === 1) union(r.i, [...s][0]); }

const clusters = new Map();
for (const r of recs) { const k = find(r.i); (clusters.get(k) || clusters.set(k, []).get(k)).push(r); }

// ------------------------------------------------------------------ canonical rows
const usedIds = new Set();
const hash = s => { let h = 5381; for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0; return h.toString(36); };
const suffix = r => r.qid ? r.qid.toLowerCase() : r.src === 'osm' ? r.key : r.src === 'smith-newton' ? 'sn' + r.key.slice(1) : r.src === 'unesco' ? 'u' + r.key : 'a' + hash(r.key);
const uid = (r, forceSuffix = true) => { let id = r.src === 'catalogue' ? r.id : slug(r.name) + (forceSuffix ? '-' + suffix(r) : ''); let n = 2, base = id; while (usedIds.has(id)) id = base + '-' + n++; usedIds.add(id); return id; };
const srcTag = r => `${r.src}:${r.key}`;
const sites = []; // canonical
const dupRows = [];
for (const members of clusters.values()) {
  members.sort((a, b) => SRC_PRIORITY[a.src] - SRC_PRIORITY[b.src] || b.q - a.q);
  const lead = members[0];
  const typed = members.find(m => !GENERIC_TYPE.has(m.type) && !m.weak) || members.find(m => !GENERIC_TYPE.has(m.type)) || lead;
  const withCoord = members.filter(m => m.lat != null).sort((a, b) => (b.frozen ? 1 : 0) - (a.frozen ? 1 : 0) || b.q - a.q || SRC_PRIORITY[a.src] - SRC_PRIORITY[b.src]);
  const best = withCoord[0] || null;
  const srcs = new Set(members.map(m => m.src));
  const strong = new Set(members.filter(m => m.q >= 2).map(m => m.src));
  const confidence = !best ? 'none' : best.q <= 1 ? 'low' : strong.size >= 2 ? 'high' : 'medium';
  const flags = members.reduce((f, m) => Object.assign(f, ...Object.entries(m.flags || {}).filter(([, v]) => v).map(([k]) => ({ [k]: true }))), {});
  const sl = Math.max(0, ...members.map(m => m.sl || 0));
  let score = 0;
  if (flags.whs) score += 100; if (flags.asi) score += 40; else if (flags.designated) score += 15;
  if (flags.curated) score += 30; score += Math.min(60, sl); if (flags.wiki) score += 5; score += 4 * Math.min(5, srcs.size - 1);
  const name = (members.find(m => m.src === 'catalogue') || members.find(m => m.src === 'wikidata') || members.find(m => m.src === 'unesco') || lead).name;
  const id = uid(lead);
  const row = { id, name, type: typed.type, lat: best ? +best.lat.toFixed(6) : '', lon: best ? +best.lon.toFixed(6) : '', country: members.find(m => m.country)?.country || '', region: members.find(m => m.region)?.region || '', sources: [...new Set(members.map(srcTag))].join(';'), confidence, duplicate_of: '', score, nameKey: name, members, frozen: !!best?.frozen, coordSrc: best?.src || '', n: members.length };
  sites.push(row);
  for (const m of members.slice(1)) dupRows.push({ id: uid(m), name: m.name, type: m.type, lat: m.lat != null ? +m.lat.toFixed(6) : '', lon: m.lon != null ? +m.lon.toFixed(6) : '', country: m.country || row.country, region: m.region || '', sources: srcTag(m), confidence: m.lat == null ? 'none' : m.q <= 1 ? 'low' : 'medium', duplicate_of: id, significance_rank: '', _of: id });
}
sites.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
sites.forEach((s, i) => { s.significance_rank = i + 1; });
const dupsOf = new Map(); for (const d of dupRows) (dupsOf.get(d._of) || dupsOf.set(d._of, []).get(d._of)).push(d);

// ------------------------------------------------------------------ write sites.csv
const COLS = ['id', 'name', 'type', 'lat', 'lon', 'country', 'region', 'sources', 'confidence', 'duplicate_of', 'significance_rank'];
const lines = [COLS.join(',')];
for (const s of sites) { lines.push(COLS.map(c => csvEsc(s[c])).join(',')); for (const d of dupsOf.get(s.id) || []) lines.push(COLS.map(c => csvEsc(d[c])).join(',')); }
fs.writeFileSync(P('data/sites.csv'), lines.join('\n') + '\n');

// ------------------------------------------------------------------ report
const tally = (arr, f) => arr.reduce((m, x) => { const k = f(x) || '(blank)'; m[k] = (m[k] || 0) + 1; return m; }, {});
const sortObj = o => Object.fromEntries(Object.entries(o).sort((a, b) => b[1] - a[1]));
const withCoords = sites.filter(s => s.lat !== '');
const report = {
  built: new Date().toISOString().slice(0, 10),
  rawEntriesBySource: rawCounts, droppedOutOfScopeBySource: dropped,
  rawInScope: recs.length, uniqueSites: sites.length, duplicateRows: dupRows.length,
  withCoordinates: withCoords.length, withoutCoordinates: sites.length - withCoords.length,
  byType: sortObj(tally(sites, s => s.type)), byCountry: sortObj(tally(sites, s => s.country)),
  byConfidence: sortObj(tally(sites, s => s.confidence)),
  typeByCountry: Object.fromEntries(Object.keys(tally(sites, s => s.type)).map(t => [t, sortObj(tally(sites.filter(s => s.type === t), s => s.country))])),
  bySourceCount: sortObj(tally(sites, s => String(new Set(s.members.map(m => m.src)).size) + ' source(s)')),
  sourcesAvailable: { catalogue: true, 'smith-newton': true, ...Object.fromEntries(['wikidata', 'osm', 'unesco', 'asi'].map(k => [k, listGz(path.join(RAW, k)).length > 0])) },
  fetchWarnings: manifest?.warnings || [],
  significance: { whs: sites.filter(s => s.score >= 100).length, nationalOrCurated: sites.filter(s => s.score >= 30 && s.score < 100).length, top500Floor: sites[Math.min(499, sites.length - 1)]?.score ?? 0 },
};
fs.writeFileSync(P('data/sites-report.json'), JSON.stringify(report, null, 1) + '\n');
const tbl = (o, h) => `| ${h} | sites |\n|---|---:|\n` + Object.entries(o).map(([k, v]) => `| ${k} | ${v.toLocaleString('en-US')} |`).join('\n');
const md = `# Phase 0 report (built ${report.built})

Generated by \`tools/build-sites.mjs\` from \`data/sites.csv\`. Counts are **unique sites** (duplicates collapsed); \`data/sites.csv\` keeps every raw row with \`duplicate_of\` set.

**Sources present in this build:** ${Object.entries(report.sourcesAvailable).map(([k, v]) => `${k} ${v ? 'yes' : '**no**'}`).join(', ')}.${manifest?.warnings?.length ? `\n**Fetch warnings:** ${manifest.warnings.length} (see \`data/sites-raw/manifest.json\`).` : ''}

- Raw in-scope entries: ${report.rawInScope.toLocaleString('en-US')} → unique sites: **${report.uniqueSites.toLocaleString('en-US')}** (${report.duplicateRows.toLocaleString('en-US')} duplicate rows folded in)
- With coordinates: ${report.withCoordinates.toLocaleString('en-US')}; without: ${report.withoutCoordinates.toLocaleString('en-US')}
- Out-of-scope entries dropped before merging (mosques, churches, bridges, unclassifiable): ${Object.entries(dropped).map(([k, v]) => `${k} ${v.toLocaleString('en-US')}`).join(', ') || '0'}

## By type
${tbl(report.byType, 'type')}

## By country
${tbl(report.byCountry, 'country')}

## By confidence
${tbl(report.byConfidence, 'confidence')}

## Type by country
| type | ${Object.values(CC).join(' | ')} | other/blank |
|---|${Object.values(CC).map(() => '---:').join('|')}|---:|
${Object.entries(report.typeByCountry).map(([t, m]) => `| ${t} | ${Object.values(CC).map(c => m[c] || 0).join(' | ')} | ${Object.entries(m).filter(([c]) => !Object.values(CC).includes(c)).reduce((s, [, v]) => s + v, 0)} |`).join('\n')}

## Notes
- Confidence: **high** = at least two independent sources with real coordinates agree; **medium** = one such source; **low** = only legacy/approximate coordinates (catalogue general-knowledge values); **none** = no coordinates yet.
- \`significance_rank\` is a transparent score (World Heritage +100, ASI/national designation +40, other designation +15, curated catalogue +30, Wikipedia language count up to +60, wiki tag +5, +4 per extra corroborating source); ties break on name. It is a working-set heuristic, not a scholarly judgement.
- Dedupe is conservative: matching needs a similar name key and proximity (3-15 km depending on coordinate quality), or an identical Wikidata id. Review near-duplicates before relying on a count to the unit.
`;
fs.writeFileSync(P('docs/fort-fidelity/PHASE0-REPORT.md'), md);

// ------------------------------------------------------------------ regenerate ledger
// Idempotent: rows that carry human/scene state (the original catalogue rows, anything started or done) are preserved in place;
// rows this script generated earlier ("no scene yet", still todo/needs-coords) are dropped and rebuilt from sites.csv every run.
const isGenerated = r => (r[6] || '').startsWith('no scene yet') && !r[10] && ['todo', 'needs-coords'].includes(r[9]);
const kept = ledgerRows.filter(r => !isGenerated(r));
const keepIds = new Set(kept.map(r => r[0]));
const canonById = new Map(sites.map(s => [s.id, s]));
const distM = (a, b) => hav({ lat: +a[0], lon: +a[1] }, { lat: +b[0], lon: +b[1] });
const batch1 = BATCH1.map(id => kept.find(r => r[0] === id)).filter(Boolean);
const rest = kept.filter(r => !BATCH1.includes(r[0]));
const out = [];
for (const r of [...batch1, ...rest]) {
  const row = r.slice(); let note = row[11] || '';
  const m = /;? ?coords from (\S+) \(was ([^)]*)\)/.exec(note);
  if (m) { if (m[2] !== 'none') { const [la, lo] = m[2].split(','); row[4] = la; row[5] = lo; } note = note.replace(m[0], '').replace(/^; /, ''); }
  const s = canonById.get(row[0]);
  if (s && s.lat !== '' && !BATCH1.includes(row[0]) && !hasGeometry(row[0]) && !row[10] && s.coordSrc !== 'catalogue' && (row[4] === '' || distM([row[4], row[5]], [s.lat, s.lon]) > 200)) {
    const was = row[4] === '' ? 'none' : `${row[4]},${row[5]}`;
    note = (note ? note + '; ' : '') + `coords from ${s.coordSrc} (was ${was})`; row[4] = String(s.lat); row[5] = String(s.lon);
  }
  row[11] = note; out.push(row);
}
let batch = Math.max(0, ...kept.map(r => +r[8] || 0));
const fresh = sites.filter(s => !keepIds.has(s.id));
const todoNew = fresh.filter(s => s.lat !== '');
todoNew.forEach((s, i) => { s._batch = batch + 1 + Math.floor(i / 5); });
for (const s of fresh) out.push([s.id, s.name, s.region, s.country, s.lat, s.lon, `no scene yet (${s.type})`, '3', s.lat === '' ? '' : String(s._batch), s.lat === '' ? 'needs-coords' : 'todo', '', `type=${s.type}; confidence=${s.confidence}; rank=${s.significance_rank}; sources=${s.n}`]);
fs.writeFileSync(ledgerPath, [ledgerHeader, ...out].map(r => r.map(csvEsc).join(',')).join('\n') + '\n');
const ledgerStats = { rows: out.length, existingKept: kept.length, firstNewBatch: batch + 1, newRows: fresh.length, newTodo: todoNew.length, needsCoords: fresh.length - todoNew.length, lastBatch: todoNew.length ? todoNew[todoNew.length - 1]._batch : batch };
report.ledger = ledgerStats; fs.writeFileSync(P('data/sites-report.json'), JSON.stringify(report, null, 1) + '\n');

// ------------------------------------------------------------------ MASTER-PLAN status block
const mp = P('docs/fort-fidelity/MASTER-PLAN.md');
let text = fs.readFileSync(mp, 'utf8');
const fmt = n => n.toLocaleString('en-US');
const typeLine = Object.entries(report.byType).map(([k, v]) => `${k} ${fmt(v)}`).join(', ');
const ccLine = Object.entries(report.byCountry).map(([k, v]) => `${k} ${fmt(v)}`).join(', ');
const missing = Object.entries(report.sourcesAvailable).filter(([, v]) => !v).map(([k]) => k);
const block = `<!-- PHASE0:START (generated by build-sites.mjs; edit the script, not this block) -->
- **Phase 0 universe built (${report.built}):** \`data/sites.csv\` holds **${fmt(report.uniqueSites)} unique sites** (${fmt(report.rawInScope)} raw in-scope entries, ${fmt(report.duplicateRows)} folded as duplicates). ${fmt(report.withCoordinates)} have coordinates; ${fmt(report.withoutCoordinates)} do not yet.
- **By type:** ${typeLine}.
- **By country:** ${ccLine}.
- **Confidence:** ${Object.entries(report.byConfidence).map(([k, v]) => `${k} ${fmt(v)}`).join(', ')}. Full tables in \`PHASE0-REPORT.md\`; counts are unique sites after de-duplication, and near-duplicates should be reviewed before relying on a count to the unit.
- **Sources in this build:** ${Object.entries(report.sourcesAvailable).filter(([, v]) => v).map(([k]) => k).join(', ')}.${missing.length ? ` **Not yet fetched:** ${missing.join(', ')} (counts will rise when they land; trigger \`fetch-sites\` via \`data/sites-raw/REQUEST.txt\`).` : ''}
- **Ledger:** regenerated from \`sites.csv\` — ${fmt(ledgerStats.rows)} rows (${fmt(ledgerStats.existingKept)} existing rows preserved with their batches; ${fmt(ledgerStats.newTodo)} new \`todo\` rows in batches ${ledgerStats.firstNewBatch}-${ledgerStats.lastBatch} by significance; ${fmt(ledgerStats.needsCoords)} \`needs-coords\`). Batch 1 unchanged: Aguada, Cabo de Rama, Chapora, Reis Magos, Gwalior.
- **Scope (confirmed 2026-11-03):** forts, palaces, ancient cities, universities/monasteries, temples, stepwells, tombs and ports across India, Pakistan, Bangladesh, Nepal, Sri Lanka, Afghanistan and Bhutan.
- **Pyramid sizing now:** T1 candidates = ${fmt(report.withCoordinates)} sites with coordinates (${fmt((report.byConfidence.high || 0) + (report.byConfidence.medium || 0))} at medium or high confidence); T2 and T3/T4 targets below are still planning numbers (~300 and ~60-100).
<!-- PHASE0:END -->
`;
// Only touch our own block; other sessions' status bullets stay. First run also retires the two bullets this build supersedes.
if (/<!-- PHASE0:START/.test(text)) text = text.replace(/<!-- PHASE0:START[\s\S]*?<!-- PHASE0:END -->\n/, block);
else {
  text = text.replace(/^- \*\*Scope is wider than forts\*\*.*\n/m, '').replace(/^- \*\*What the repo holds today:\*\*.*\n/m, '');
  text = text.replace(/(## Status[^\n]*\n(?:- .*\n)+)/, (m) => m + block);
}
text = text.replace(/^# Master plan:.*$/m, '# Master plan: forts and places of significance across the subcontinent');
text = text.replace('| Est. count* |', '| Planning count* |').replace('*Estimates, to be replaced by Phase 0 counts.', '*Planning numbers; Phase 0 counts above give the real size of the T1 base.');
text = text.replace(/- Confirm the scope:.*\n/, '- ~~Confirm the scope~~ Confirmed 2026-11-03 (see Status).\n');
fs.writeFileSync(mp, text);
console.log(JSON.stringify({ unique: report.uniqueSites, dup: report.duplicateRows, coords: report.withCoordinates, byType: report.byType, ledger: ledgerStats }));
