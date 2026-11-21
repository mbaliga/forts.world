// Export every fact the game holds, with its evidence grade, as a CSV checklist for verification.
//   node tools/export-evidence.mjs > checklist.csv
import { NODES } from '../src/data/konkan.js';
import { NODES_C, NODES_D } from '../src/data/south.js';
import { FORTS } from '../src/data/forts.js';
import VERIFIED from '../src/data/verified.js';
const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const rows = [['region', 'id', 'name', 'field', 'value', 'ev', 'source', 'verified_lat', 'verified_lon', 'notes']];
const done = new Set(VERIFIED.map((r) => r.id + '|' + r.field));
for (const [reg, list] of [['A-B', NODES], ['C', NODES_C], ['D', NODES_D]]) for (const n of list) {
  rows.push([reg, n.id, n.name, 'position', `${n.lat}, ${n.lon}`, n.pos, n.source || '', '', '', done.has(n.id + '|position') ? 'already verified' : '']);
  n.phases.forEach((p, i) => rows.push([reg, n.id, n.name, `phase:${i}`, `${p.from}–${p.to ?? ''} ${p.owner || ''}: ${p.note || ''}`, p.ev, p.source || '', '', '', done.has(n.id + '|phase:' + i) ? 'already verified' : '']));
}
const inCampaign = new Set([...NODES, ...NODES_C, ...NODES_D].map((n) => n.id));
for (const f of FORTS) if (!inCampaign.has(f.id)) rows.push(['catalogue', f.id, f.name, 'position', `${f.lat}, ${f.lon}`, f.ev?.position || 'inferred', '', '', '', '']);
console.log(rows.map((r) => r.map(q).join(',')).join('\n'));
