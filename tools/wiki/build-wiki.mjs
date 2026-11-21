// Builds the fort wiki (docs/wiki) from the ledger, data/sites.csv, the merged world table, the traces and docs/research.
// Usage: node tools/wiki/build-wiki.mjs   -> writes docs/wiki/{README,SOURCES,SCHEMA}.md, countries/*.md, forts/*.md, data/forts.csv
// Every fact on a page is copied from one of those files; nothing is added from memory. Missing fields are left out, not guessed.
import fs from 'node:fs'; import path from 'node:path'; import zlib from 'node:zlib';
const root = path.resolve(new URL('../..', import.meta.url).pathname);
const W = process.env.WIKI_OUT ? path.resolve(process.env.WIKI_OUT) : path.join(root, 'docs/wiki'); // WIKI_OUT: write elsewhere (a dry run)
// fort and country pages are regenerated whole, so a page whose site left the ledger (or moved country) does not linger
fs.rmSync(path.join(W, 'forts'), { recursive: true, force: true }); fs.rmSync(path.join(W, 'countries'), { recursive: true, force: true });
for (const d of ['forts', 'countries', 'data']) fs.mkdirSync(path.join(W, d), { recursive: true });
const parse = (t) => { const rows = []; let r = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { r.push(f); f = ''; } else if (c === '\n') { r.push(f); rows.push(r); r = []; f = ''; } else if (c !== '\r') f += c; } if (f || r.length) { r.push(f); rows.push(r); } const h = rows.shift(); return rows.filter((x) => x.length === h.length).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i]]))); };
const ledger = parse(fs.readFileSync(path.join(root, 'docs/fort-fidelity/ledger.csv'), 'utf8'));
const sites = new Map(parse(fs.readFileSync(path.join(root, 'data/sites.csv'), 'utf8')).map((r) => [r.id, r]));
const world = new Map(parse(zlib.gunzipSync(fs.readFileSync(path.join(root, 'data/world/sites.csv.gz'))).toString('utf8')).filter((r) => r.qid).map((r) => [r.qid, r]));
const research = new Set(fs.readdirSync(path.join(root, 'docs/research')));
const tdir = path.join(root, 'data/traces');
const traces = new Map(fs.readdirSync(tdir).filter((f) => f.endsWith('.trace.json')).map((f) => [f.replace('.trace.json', ''), f]));
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const slug = (s) => String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'unknown';
const qOf = (r) => (r.notes_or_branch.match(/wikidata:(Q\d+)/) || r.notes_or_branch.match(/\b(Q\d+)\b/) || [])[1] || (r.site_id.match(/-q(\d+)$/) || [])[1] && 'Q' + r.site_id.match(/-q(\d+)$/)[1];
const osmOf = (r) => (r.notes_or_branch.match(/osm (node|way|relation)\/(\d+)/) || []).slice(1, 3).join('/');
const byCountry = new Map(); const flat = [['id', 'name', 'country', 'region', 'lat', 'lon', 'status', 'tier', 'qid', 'osm', 'elements', 'wiki']];
let nTraced = 0;
for (const r of ledger) {
  if (r.status === 'excluded') continue; // not a fortification; the reason is in the ledger note
  const cc = r.country || 'Unknown'; if (!byCountry.has(cc)) byCountry.set(cc, []);
  const fn = traces.get(r.site_id); const T = fn ? JSON.parse(fs.readFileSync(path.join(tdir, fn), 'utf8')) : null;
  const qid = qOf(r) || T?.wikidata || ''; const Wd = qid && world.get(qid); const S = sites.get(r.site_id);
  const counts = T?.generated?.report?.counts || (T ? Object.entries(T.elements.reduce((a, e) => (a[e.kind] = (a[e.kind] || 0) + 1, a), {})).reduce((a, [k, v]) => (a[k] = v, a), {}) : null);
  const nEl = T ? T.elements.length : 0; const tier = r.tier_reached || (T ? T.tier : '');
  byCountry.get(cc).push({ id: r.site_id, name: r.name, region: r.region, status: r.status, tier, nEl, hasT: !!T });
  flat.push([r.site_id, r.name, cc, r.region, r.lat, r.lon, r.status, tier, qid, osmOf(r), nEl, T ? `forts/${slug(cc)}/${r.site_id}.md` : ''].map((x) => /[",\n]/.test(String(x ?? '')) ? '"' + String(x ?? '').replace(/"/g, '""') + '"' : x ?? ''));
  if (!T) continue; nTraced++;
  const L = [`# ${r.name}`, '', `> ${cc}${r.region ? ' · ' + r.region : ''} · evidence: **${tier || T.tier}** · status: \`${r.status}\``, ''];
  L.push('## Identity', '', '| Field | Value |', '|---|---|', `| Site id | \`${r.site_id}\` |`, `| Coordinates | ${r.lat}, ${r.lon} ([OpenStreetMap](https://www.openstreetmap.org/#map=17/${r.lat}/${r.lon})) |`);
  if (qid) L.push(`| Wikidata | [${qid}](https://www.wikidata.org/wiki/${qid}) (CC0) |`);
  if (osmOf(r)) L.push(`| OSM object | [${osmOf(r)}](https://www.openstreetmap.org/${osmOf(r)}) (ODbL) |`);
  if (Wd) { for (const [k, lab] of [['kind', 'Wikidata class'], ['classes', 'Types'], ['admin', 'Administrative area'], ['inception', 'Inception'], ['designations', 'Designations'], ['whc_id', 'UNESCO WHC id'], ['sitelinks', 'Wikipedia language editions']]) if (Wd[k]) L.push(`| ${lab} | ${esc(Wd[k])} |`); }
  if (S) L.push(`| Programme catalogue | confidence ${esc(S.confidence)}, significance rank ${esc(S.significance_rank)}; sources ${esc(S.sources)} |`);
  const st = T.site || {}; for (const k of ['historic', 'castle_type', 'fortification_type', 'heritage', 'description', 'ruins', 'barrier', 'website']) if (st[k]) L.push(`| OSM \`${k}\` | ${esc(st[k])} |`);
  L.push('', '## What the model contains', '', `Tier **${T.tier}**, status \`${T.status}\`, ${nEl} elements${counts ? ' (' + Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', ') + ')' : ''}.`);
  if (T.evidence) L.push('', `Evidence: documented ${T.evidence.documented}, mapped ${T.evidence.mapped}, inferred ${T.evidence.inferred}, derived ${T.evidence.derived}; heights documented ${T.evidence.documentedHeights ?? 0}, inferred ${T.evidence.inferredHeights ?? 0}, unknown ${T.evidence.unknownHeights ?? 0}.`);
  if (/auto/i.test(JSON.stringify(T.eras?.[0]?.label || ''))) L.push('', 'This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.');
  const notes = T.generated?.report?.notes; if (notes?.length) L.push('', 'Build notes:', ...notes.map((n) => `- ${esc(n)}`));
  const era = T.eras?.[0]; if (era && era.label !== 'Mapped site · auto T1') { if (era.summary) L.push('', esc(era.summary)); if (era.conjecture) L.push('', `What is assumed: ${esc(era.conjecture)}`); } // hand-written era text (overlays, curated traces)
  L.push('', '## Sources used', '', '| Source | Licence | Link | Fetched |', '|---|---|---|---|');
  for (const s of T.sources || []) L.push(`| ${esc(s.title)} | ${esc(s.licence)} | ${s.url ? `[link](${s.url})` : ''} | ${esc((s.fetched || '').slice(0, 10))} |`);
  const rp = [...research].filter((f) => f.startsWith(r.site_id.replace(/-q\d+$|-sn\d+$/, '')) && f.endsWith('.md')); if (rp.length) L.push('', '## Research notes', '', ...rp.map((f) => `- [docs/research/${f}](../../../research/${f})`));
  if (r.notes_or_branch) L.push('', '## Ledger note', '', esc(r.notes_or_branch));
  L.push('', '## 3D model', '', 'Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.', '', '[Country page](../../countries/' + slug(cc) + '.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)');
  fs.mkdirSync(path.join(W, 'forts', slug(cc)), { recursive: true }); fs.writeFileSync(path.join(W, 'forts', slug(cc), r.site_id + '.md'), L.join('\n') + '\n'); // one folder per country keeps directory listings browsable
}
fs.writeFileSync(path.join(W, 'data/forts.csv'), flat.map((x) => x.join(',')).join('\n') + '\n');
const cs = [...byCountry.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [cc, rows] of cs) {
  rows.sort((a, b) => (b.hasT - a.hasT) || (a.name || '').localeCompare(b.name || ''));
  const done = rows.filter((x) => x.hasT).length;
  fs.writeFileSync(path.join(W, 'countries', slug(cc) + '.md'), [`# ${cc}`, '', `${rows.length} sites in the ledger; ${done} have a model.`, '', '| Site | Region | Evidence | Elements | Status |', '|---|---|---|---|---|', ...rows.map((x) => `| ${x.hasT ? `[${esc(x.name)}](../forts/${slug(cc)}/${x.id}.md)` : esc(x.name)} | ${esc(x.region)} | ${esc(x.tier)} | ${x.nEl || ''} | ${esc(x.status)} |`), '', '[Wiki home](../README.md)'].join('\n') + '\n');
}
const tiers = {}; for (const [, rows] of cs) for (const x of rows) if (x.hasT) tiers[x.tier || 'unlabelled'] = (tiers[x.tier || 'unlabelled'] || 0) + 1;
fs.writeFileSync(path.join(W, 'README.md'), [`# Fort wiki`, '', `Generated ${new Date().toISOString().slice(0, 10)} from the ledger, the merged world table and the model traces. ${ledger.length} sites in the ledger across ${cs.length} countries; ${nTraced} have a model page.`, '', '- [Sources and licences](SOURCES.md): every dataset, tool and reference we draw on.', '- [Metadata schema](SCHEMA.md): what each field means and where it comes from.', '- [Evidence levels](#evidence-levels)', '- Flat catalogue: [data/forts.csv](data/forts.csv)', '- The Forts of the World page (a map of every site in the world table, with search and an in-browser 3D view of every model) is built from the same data by `tools/world/build-atlas.mjs`; see [Sources](SOURCES.md) section 5a.', '', '## Evidence levels', '', '| Level | Models |', '|---|---|', ...Object.entries(tiers).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| ${esc(k)} | ${v} |`), '', 'T2 means a survey plan was used. T1 (plan-validated) means a mapped outline was checked against a plan. T1 (auto, outline) and T1 (location-only) are automatic builds from open map data and terrain, unchecked against plans. Generic schematic means a stand-in layout with unverified fidelity.', '', '## Countries', '', '| Country | Sites | With a model |', '|---|---|---|', ...cs.map(([cc, rows]) => `| [${esc(cc)}](countries/${slug(cc)}.md) | ${rows.length} | ${rows.filter((x) => x.hasT).length} |`)].join('\n') + '\n');
console.log('wiki:', ledger.length, 'sites,', nTraced, 'pages,', cs.length, 'countries');
