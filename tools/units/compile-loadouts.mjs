// Compile unit-kit loadouts into the flat specs that src/game/people.js (KINDS) and figures.js already render.
// Parts the current renderer cannot draw are not faked: they are listed under `unrendered` for each loadout.
//   node tools/units/compile-loadouts.mjs   -> content/units-kit/compiled-kinds.json
import fs from 'node:fs';
import path from 'node:path';
const dir = path.resolve(new URL('../../content/units-kit', import.meta.url).pathname);
const parts = new Map(JSON.parse(fs.readFileSync(path.join(dir, 'parts.json'), 'utf8')).map((p) => [p.id, p]));
const loads = JSON.parse(fs.readFileSync(path.join(dir, 'loadouts.json'), 'utf8'));
const HEADS = new Set(['pagdi', 'safa', 'turban', 'cap', 'hat', 'veil', 'scarf', 'none']);
const PROPS = new Set(['spear', 'musket', 'staff', 'umbrella', 'pack', 'pot', 'basket', 'sack', 'oar', 'rammer', 'hoe', 'bow', 'camera']);
const out = {};
for (const l of loads) {
  if (!l.body) continue; // mounts and animals are compiled by the mount pass, not here
  const unrendered = [], spec = { top: l.palette.top, bottom: l.palette.bottom, sash: l.palette.sash, skin: l.body.skin, hat: l.palette.hat, head: 'none', prop: null };
  if (l.body.cut === 'body_jama') spec.long = true;
  const proc = (id) => (id && parts.get(id)?.proc) || '';
  const hg = l.headgear && parts.get(l.headgear);
  if (hg) { const h = proc(hg.id).replace('head:', ''); if (HEADS.has(h)) spec.head = h; else { spec.head = 'cap'; unrendered.push(`${hg.id} (shown as plain cap)`); } }
  // one carried object: the first of ranged / main hand that figures.js can draw
  for (const id of [l.ranged, l.main_hand]) { const p = proc(id).replace('prop:', ''); if (id && PROPS.has(p)) { spec.prop = p; break; } }
  for (const id of [l.main_hand, l.off_hand, l.ranged, ...(l.armour || [])]) if (id && !(proc(id).startsWith('prop:') && proc(id).replace('prop:', '') === spec.prop)) unrendered.push(`${id} (no mesh yet)`);
  const ORDER = ['documented', 'inferred', 'placeholder', 'needs-source'];
  const refs = [l.garment, l.headgear, l.main_hand, l.off_hand, l.ranged, ...(l.armour || [])].filter(Boolean);
  out[l.id] = { spec, unrendered, evidence: ORDER[Math.max(0, ...refs.map((r) => ORDER.indexOf(parts.get(r)?.evidence)))] };
}
fs.writeFileSync(path.join(dir, 'compiled-kinds.json'), JSON.stringify(out, null, 1) + '\n');
for (const [k, v] of Object.entries(out)) console.log(k.padEnd(24), `head=${v.spec.head} prop=${v.spec.prop}`.padEnd(30), v.unrendered.length ? 'unrendered: ' + v.unrendered.join('; ') : '');
