// Writes src/levels/<id>.trace.js (hand-curated `in-rts.trace/1` document) from
//   data/traces/<id>.trace.json   the auto-T1 base (OSM + Terrarium, never edited by hand)
//   tools/trace/curation/<id>.mjs the hand-authored part: kept/renamed/removed elements, sourced heights, eras, diffs
//   node tools/trace/make-trace-js.mjs <id>[,<id>...]
// The output follows the kumbhalgarh.trace.js pattern (header comment + exports) but carries the full schema, so
// tools/check_sources.mjs validates it like any other trace. Every element keeps its src/ev/conf; the curation file
// is the only place a claim can be added, so review that file, not the generated one.
import fs from 'node:fs';
import path from 'node:path';
import { validateTrace, evidenceSummary } from './schema.mjs';
import { BUDGET } from './budget.mjs';

const here = path.resolve(new URL('../..', import.meta.url).pathname);
const root = here;   // the game package is the repository root

// Helpers handed to a curation function.
function helpers(T) {
  // ground height (m) from the trace's own Terrarium grid, bilinear; NaN outside it
  const G = T.heights, buf = G ? Buffer.from(G.data, 'base64') : null;
  const cell = (i, j) => { const v = buf.readInt16LE((j * G.nx + i) * 2); return v === -32768 ? NaN : v / 20; };
  const ground = (x, y) => {
    if (!G) return NaN;
    const fi = (x - G.x0) / G.stride, fj = (y - G.y0) / G.stride, i = Math.floor(fi), j = Math.floor(fj);
    if (i < 0 || j < 0 || i >= G.nx - 1 || j >= G.ny - 1) return NaN;
    const a = fi - i, b = fj - j;
    return (cell(i, j) * (1 - a) + cell(i + 1, j) * a) * (1 - b) + (cell(i, j + 1) * (1 - a) + cell(i + 1, j + 1) * a) * b;
  };
  // offset an open path d metres to its right (negative: left); vertex normals are averaged
  const offsetPath = (path, d) => path.map((p, i) => {
    const a = path[Math.max(0, i - 1)], b = path[Math.min(path.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    return [+(p[0] + d * dy / l).toFixed(1), +(p[1] - d * dx / l).toFixed(1)];
  });
  const byId = (id) => { const e = T.elements.find((x) => x.id === id); if (!e) throw new Error(`no element ${id}`); return e; };
  const byOsm = (ref) => { const e = T.elements.find((x) => x.src === `osm:${ref}`); if (!e) throw new Error(`no element for osm:${ref}`); return e; };
  return {
    byId, byOsm, ground, offsetPath,
    all: (kind) => T.elements.filter((e) => e.kind === kind),
    remove(...ids) { for (const id of ids) { const i = T.elements.findIndex((e) => e.id === id); if (i < 0) throw new Error(`cannot remove ${id}`); T.elements.splice(i, 1); } },
    add(el) { if (T.elements.some((e) => e.id === el.id)) throw new Error(`duplicate ${el.id}`); T.elements.push(el); return el; },
    // sourced height: v metres, src per the grammar, note says what the source states
    height(el, v, src, note) { (typeof el === 'string' ? byId(el) : el).h = { v, src, note }; },
    rename(el, id, name) { const e = typeof el === 'string' ? byId(el) : el; const old = e.id; e.id = id; if (name != null) e.name = name; for (const d of Object.values(T.diffs || {})) { d.remove = (d.remove || []).map((r) => (r === old ? id : r)); if (d.modify?.[old]) { d.modify[id] = d.modify[old]; delete d.modify[old]; } } return e; },
    source(s) { if (!T.sources.some((x) => x.id === s.id)) T.sources.push(s); },
  };
}

export async function makeTraceJs(id) {
  const base = JSON.parse(fs.readFileSync(path.join(root, 'data/traces', `${id}.trace.json`), 'utf8'));
  const T = structuredClone(base);
  const mod = await import(path.join(here, 'tools/trace/curation', `${id}.mjs`));
  T.diffs = {}; T.eras = [];
  await mod.default(T, helpers(T));
  T.tier = mod.TIER || T.tier; T.status = mod.STATUS || T.status;
  T.evidence = evidenceSummary(T);
  T.generated = { ...T.generated, curated: { tool: 'tools/trace/make-trace-js.mjs', date: new Date().toISOString().slice(0, 10), base: `data/traces/${id}.trace.json`, curation: `tools/trace/curation/${id}.mjs` } };
  const v = validateTrace(T);
  if (!v.ok) { console.error(`${id}: INVALID\n  ${v.errors.join('\n  ')}`); process.exit(1); }
  const head = (mod.HEADER || []).map((l) => `// ${l}`).join('\n');
  const q = (o) => JSON.stringify(o);
  const { elements, heights, diffs, eras, ...rest } = T;
  const lines = [];
  lines.push(head, `export const TRACE = {`);
  for (const [k, val] of Object.entries(rest)) lines.push(` ${q(k)}: ${q(val)},`);
  lines.push(` "heights": ${heights ? q({ ...heights, data: undefined }).replace(/}$/, `,"data":${q(heights.data)}}`) : 'null'},`);
  lines.push(' "elements": [', elements.map((e) => `  ${q(e)}`).join(',\n'), ' ],');
  lines.push(' "eras": [', eras.map((e) => `  ${q(e)}`).join(',\n'), ' ],');
  lines.push(' "diffs": {', Object.entries(diffs).map(([k, d]) => `  ${q(k)}: ${q(d)}`).join(',\n'), ' }', '};', 'export default TRACE;', '');
  const out = path.join(here, 'src/levels', `${id}.trace.js`);
  fs.writeFileSync(out, lines.join('\n'));
  const kb = fs.statSync(out).size / 1024;
  const s = T.evidence;
  console.log(`${id}: wrote ${path.relative(root, out)} (${kb.toFixed(0)} KB${kb > BUDGET.traceKB ? ' OVER BUDGET' : ''}); ${T.elements.length} elements: documented ${s.documented}, mapped ${s.mapped}, inferred ${s.inferred}; heights sourced ${s.documentedHeights}, assumed ${s.inferredHeights}, unknown ${s.unknownHeights}; eras ${T.eras.map((e) => e.id).join('/')}`);
  for (const w of v.warnings) console.warn(`  warn ${w}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  for (const id of (process.argv[2] || '').split(',').filter(Boolean)) await makeTraceJs(id);
}
