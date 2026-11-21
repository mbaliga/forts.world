// Builds each level/era in Node and checks every place is reachable from the spawn point.
import { World } from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';
import { LEVELS as ALL } from '../src/levels/index.js';
import { renderPlan } from '../src/plan/svg.js';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// usage: node tools/smoke.mjs [level-id | path/to/level.js] [--plan]
//        node tools/smoke.mjs --t1 [sample-size]   builds auto-T1 scenes from data/traces/*.trace.json (all, or a date-seeded sample)
let only = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : null;
let LEVELS = ALL;
if (only && only.endsWith('.js')) { LEVELS = [(await import(pathToFileURL(path.resolve(only)).href)).default]; only = null; }
const t1i = process.argv.indexOf('--t1');
if (t1i >= 0) {
  const { makeT1 } = await import('../src/levels/t1.js');
  const dir = path.resolve('data/traces'), files = fs.readdirSync(dir).filter((f) => f.endsWith('.trace.json')).sort();
  const n = +(process.argv[t1i + 1] || 0) || files.length;
  let seed = +new Date().toISOString().slice(0, 10).replace(/-/g, ''); const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
  const pick = files.slice().sort(() => rnd() - 0.5).slice(0, n);
  LEVELS = pick.map((f) => makeT1(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))));
  console.log(`T1 sample: ${pick.join(', ')}`);
}
const { BUDGET, TIME_SCALE } = await import('./trace/budget.mjs');
let fails = 0, checked = 0;
if (only && !LEVELS.some(l => l.id === only)) throw new Error(`Unknown level: ${only}`);
for (const def of LEVELS) {
  if (only && def.id !== only) continue;
  for (const e of def.eras) {
    checked++;
    const t0 = performance.now();
    const W = new World(def, { era: e.id });
    def.build(W);
    const t1 = performance.now();
    W.finish();
    const t2 = performance.now();
    const nav = W.nav;
    const s = W.spawnAt;
    const sn = nav.nearest(s.x, s.y, s.h ?? W.ground(s.x, s.y), 10, 4);
    const seen = sn >= 0 ? nav.reachable(sn) : null;
    const bad = [], sealedPois = [];
    for (const p of W.pois) {
      // a place counts as reachable if some reachable node lies within its trigger radius and height tolerance
      let ok = false;
      const r = p.r ?? 6, ht = p.hTol ?? 6;
      for (let dy = -Math.ceil(r); dy <= Math.ceil(r) && !ok; dy++) for (let dx = -Math.ceil(r); dx <= Math.ceil(r) && !ok; dx++) {
        if (dx * dx + dy * dy > r * r) continue;
        const c = nav.cellOf(p.x + dx, p.y + dy); if (c < 0) continue;
        for (let l = 0; l < nav.L; l++) { const n = c * nav.L + l; const h = nav.H[n]; if (h === h && seen && seen[n] && Math.abs(h - p.h) < ht) { ok = true; break; } }
      }
      if (!ok && p.unreachableOk) { sealedPois.push(`${p.n}:${p.id}`); continue; }
      if (!ok) bad.push(`${p.n}:${p.id}`);
    }
    let tris = W.solid.triCount + W.trim.triCount + W.decal.triCount;
    let inst = 0; for (const B of Object.values(W.inst)) inst += B.m.length;
    const reach = seen ? seen.reduce((a, v) => a + v, 0) : 0;
    console.log(`${def.id}/${e.id}: build ${(t1 - t0).toFixed(0)}ms, finish ${(t2 - t1).toFixed(0)}ms, solid ${(tris / 1000).toFixed(0)}k tris, ${inst} instances, ${W.npcs.length} npc specs, reachable nodes ${reach}, unreachable places: ${bad.length ? bad.join(', ') : 'none'}${sealedPois.length ? `, inside sealed enclosure (allowed): ${sealedPois.join(', ')}` : ''}`);
    if (bad.length) fails++;
    if (t1i >= 0 && ((t2 - t0) > BUDGET.buildMs * 4 * (TIME_SCALE[def.id] || 1) || tris / 1000 > BUDGET.solidTrisK || inst > BUDGET.instances)) { fails++; console.log(`  over budget: ${(t2 - t0).toFixed(0)}ms / ${(tris / 1000).toFixed(0)}k tris / ${inst} instances (limits ${BUDGET.buildMs * 4 * (TIME_SCALE[def.id] || 1)}ms node, ${BUDGET.solidTrisK}k, ${BUDGET.instances})`); }
    if (process.argv.includes('--plan')) {
      fs.mkdirSync('dist/plans', { recursive: true });
      fs.writeFileSync(`dist/plans/${def.id}-${e.id}.svg`, renderPlan(W, { mode: 'sheet', meta: { title: 'PLAN OF ' + def.name.toUpperCase(), subtitle: def.region, era: e.year + ' · ' + e.label, notes: ['Schematic reconstruction.'] } }));
    }
  }
}
console.log(`Checked ${checked} fort-period scenes; ${fails} failures.`);
process.exit(fails || !checked ? 1 : 0);
