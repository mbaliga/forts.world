// After the model-all workflow: for every ledger row still `todo` that now has an auto-T1 trace, record it honestly.
//   node tools/model-ledger-update.mjs [--root <repo>] [--dry]
// Sets status=needs-plan, tier_reached by what the trace actually holds, and appends a note. Never touches rows that already have a status.
import fs from 'node:fs';
import path from 'node:path';
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const root = path.resolve(arg('root', new URL('..', import.meta.url).pathname));
const file = path.join(root, 'docs/fort-fidelity/ledger.csv');
const parse = (t) => { const rows = []; let row = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; } else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c; } if (f || row.length) { row.push(f); rows.push(row); } return rows; };
const esc = (v) => (/[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v);
const rows = parse(fs.readFileSync(file, 'utf8')); const head = rows[0]; const ix = Object.fromEntries(head.map((h, i) => [h, i]));
const today = new Date().toISOString().slice(0, 10); let changed = 0; const by = {};
for (const r of rows.slice(1)) {
  if (r.length !== head.length || r[ix.status] !== 'todo') continue;
  const tf = path.join(root, 'data/traces', r[ix.site_id] + '.trace.json'); if (!fs.existsSync(tf)) continue;
  let T; try { T = JSON.parse(fs.readFileSync(tf, 'utf8')); } catch { continue; }
  const st = T.status || 'unknown', n = (T.elements || []).length;
  r[ix.status] = 'needs-plan';
  r[ix.tier_reached] = st === 'location-only' ? 'T1 (location-only)' : 'T1 (auto, outline)';
  // a row that already has a game scene (hand-authored, blockout, generated schematic) keeps that description; the auto trace sits beside it
  const kind = r[ix.current_scene_kind] || '';
  r[ix.current_scene_kind] = !kind || /^no scene/.test(kind) ? `auto-T1 trace (${st}); no hand level` : `${kind}; auto-T1 trace (${st}) beside it`;
  r[ix.genericness] = r[ix.genericness] || '3';
  const note = `${today}: auto-T1 by model-all workflow (${st}, ${n} elements); data/traces/${r[ix.site_id]}.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.`;
  r[ix.notes_or_branch] = r[ix.notes_or_branch] ? r[ix.notes_or_branch] + ' | ' + note : note;
  by[st] = (by[st] || 0) + 1; changed++;
}
console.log(`ledger: ${changed} rows updated`, JSON.stringify(by));
if (!process.argv.includes('--dry') && changed) fs.writeFileSync(file, rows.map((r) => r.map(esc).join(',')).join('\n') + '\n');
