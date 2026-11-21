// Check the unit kit data: every loadout part exists, and compute each loadout's evidence as its weakest part.
import fs from 'node:fs';
import path from 'node:path';
const dir = path.resolve(new URL('../../content/units-kit', import.meta.url).pathname);
const parts = JSON.parse(fs.readFileSync(path.join(dir, 'parts.json'), 'utf8'));
const loads = JSON.parse(fs.readFileSync(path.join(dir, 'loadouts.json'), 'utf8'));
const byId = new Map(parts.map((p) => [p.id, p]));
const ORDER = ['documented', 'inferred', 'placeholder', 'needs-source'];
let bad = 0;
if (byId.size !== parts.length) { console.error('duplicate part ids'); bad++; }
for (const p of parts) if (!ORDER.includes(p.evidence)) { console.error('bad evidence', p.id); bad++; }
for (const l of loads) {
  const refs = [l.garment, l.headgear, l.main_hand, l.off_hand, l.ranged, l.mount, l.tack, ...(l.armour || [])].filter(Boolean);
  let worst = 0;
  for (const r of refs) { const p = byId.get(r); if (!p) { console.error(`${l.id}: missing part ${r}`); bad++; continue; } worst = Math.max(worst, ORDER.indexOf(p.evidence)); }
  console.log(`${l.id.padEnd(24)} ${String(refs.length).padStart(2)} parts  evidence=${ORDER[worst]}`);
}
console.log(`${parts.length} parts, ${loads.length} loadouts, ${bad} problems`);
process.exit(bad ? 1 : 0);
