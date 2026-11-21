// Evidence gate (STANDARD.md rule 1, PIPELINE-DESIGN.md §4). Exit 1 on any error.
//   node tools/check_sources.mjs [id ...]
// Checks every data/traces/*.trace.json (and the two legacy hand traces through their adapters):
//   schema valid; every element has a src tag in the grammar and an evidence class; every osm:* src
//   resolves to an element in the raw dump the trace was built from; inferred elements/heights say so;
//   era source ids exist in src/data/source-catalogue.js; size and cell budgets hold.
import fs from 'node:fs';
import path from 'node:path';
import { validateTrace, wrapKumbhalgarh, wrapJanjira, evidenceSummary, SCHEMA } from './trace/schema.mjs';
import { applyDiff } from '../src/levels/t1.js';
import { BUDGET } from './trace/budget.mjs';

const root = path.resolve(new URL('..', import.meta.url).pathname), here = path.resolve(new URL('..', import.meta.url).pathname);
const TR = path.join(root, 'data/traces'), GEO = path.join(root, 'data/geometry');
const only = process.argv.slice(2);
const catalogue = new Set((await import(path.join(here, 'src/data/source-catalogue.js'))).default.map((s) => s.id));
let errors = 0, warnings = 0, checked = 0;
const fail = (id, m) => { errors++; console.error(`  ERROR ${id}: ${m}`); };
const warn = (id, m) => { warnings++; console.warn(`  warn  ${id}: ${m}`); };

function checkTrace(T, { file, legacy = false, hand = false } = {}) {
  checked++;
  const v = validateTrace(T);
  v.errors.forEach((m) => fail(T.id, m)); v.warnings.forEach((m) => warn(T.id, m));
  // every era is checked as its own element list, so elements an era adds or modifies carry the same src/ev/conf rules
  if (T.diffs && Object.keys(T.diffs).length) {
    const seen = new Set([...v.errors, ...v.warnings]);
    for (const era of T.eras) {
      const ev = validateTrace({ ...T, elements: applyDiff(T, era.id), diffs: {} });
      for (const m of [...ev.errors, ...ev.warnings]) if (!seen.has(m)) { seen.add(m); (ev.errors.includes(m) ? fail : warn)(T.id, `[era ${era.id}] ${m}`); }
    }
  }
  // osm ids must exist in the raw dump the trace was built from
  const raw = path.join(GEO, T.id, 'osm.json');
  if (!legacy && fs.existsSync(raw)) {
    const ids = new Set(JSON.parse(fs.readFileSync(raw, 'utf8')).elements.map((e) => `${e.type}/${e.id}`));
    for (const e of T.elements) {
      const refs = [e.src, e.h?.src, ...(e.from || [])].filter((s) => s && s.startsWith('osm:'));
      for (const r of refs) if (!ids.has(r.slice(4))) fail(T.id, `${e.kind}:${e.id} cites ${r}, not in data/geometry/${T.id}/osm.json`);
    }
  } else if (!legacy) warn(T.id, 'no raw osm.json to resolve ids against');
  for (const era of T.eras) for (const s of era.sources || []) if (!catalogue.has(s)) fail(T.id, `era ${era.id} cites unknown source id ${s}`);
  if (file) { const kb = fs.statSync(file).size / 1024; if (kb > BUDGET.traceKB) fail(T.id, `trace is ${kb.toFixed(0)} KB > ${BUDGET.traceKB} KB budget`); }
  if (T.heights && T.heights.nx * T.heights.ny > BUDGET.gridCells) fail(T.id, `heights grid ${T.heights.nx}x${T.heights.ny} exceeds ${BUDGET.gridCells} cells`);
  if (T.elements.length > BUDGET.elements) fail(T.id, `${T.elements.length} elements > ${BUDGET.elements}`);
  const s = evidenceSummary(T);
  console.log(`${T.id}${legacy ? ' (legacy adapter)' : ''}${hand ? ' (hand trace.js)' : ''}: ${T.tier || '?'} ${T.status || ''} · ${T.elements.length} elements · documented ${s.documented}, mapped ${s.mapped}, inferred ${s.inferred}, derived ${s.derived}, assumed heights ${s.inferredHeights}`);
}

if (fs.existsSync(TR)) for (const f of fs.readdirSync(TR).filter((f) => f.endsWith('.trace.json')).sort()) {
  const T = JSON.parse(fs.readFileSync(path.join(TR, f), 'utf8'));
  if (only.length && !only.includes(T.id)) continue;
  checkTrace(T, { file: path.join(TR, f) });
}
// hand-curated traces: src/levels/<id>.trace.js exporting a schema-conformant TRACE (tools/trace/make-trace-js.mjs)
for (const f of fs.readdirSync(path.join(here, 'src/levels')).filter((f) => f.endsWith('.trace.js')).sort()) {
  const M = await import(path.join(here, 'src/levels', f));
  if (M.TRACE?.schema !== SCHEMA) continue;
  if (only.length && !only.includes(M.TRACE.id)) continue;
  checkTrace(M.TRACE, { file: path.join(here, 'src/levels', f), hand: true });
}
if (!only.length || only.includes('kumbhalgarh')) checkTrace(wrapKumbhalgarh(await import(path.join(here, 'src/levels/kumbhalgarh.trace.js'))), { legacy: true });
if (!only.length || only.includes('murud-janjira')) checkTrace(wrapJanjira((await import(path.join(here, 'src/levels/janjira.trace.js'))).TRACE), { legacy: true });
console.log(`check_sources: ${checked} traces, ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
