// Queue for the model-all workflow: which ledger sites still need an auto-T1 model?
//   node tools/model-queue.mjs [--kinds fort] [--limit N] [--shard i/n]   -> prints site ids, comma separated
//   node tools/model-queue.mjs --count                                     -> prints how many are queued
// A site is queued when: ledger status is `todo` (not needs-coords/needs-plan/…, so nobody has touched it), its scene kind
// matches --kinds, it has coordinates, and no data/traces/<id>.trace.json or hand level exists. Most significant first
// (significance_rank from data/sites.csv, then ledger batch), so partial runs still do the best sites.
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('..', import.meta.url).pathname);
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const kinds = (arg('kinds', 'fort')).split(',').map((s) => s.trim()).filter(Boolean);
const limit = +arg('limit', 0) || Infinity;
const countries = (arg('countries', '')).split(',').map((s) => s.trim()).filter(Boolean);
const notCountries = (arg('notcountries', '')).split(',').map((s) => s.trim()).filter(Boolean);
const [si, sn] = (arg('shard', '0/1')).split('/').map(Number);
function csv(file) {
  const t = fs.readFileSync(file, 'utf8'); const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; } else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c; }
  if (f || row.length) { row.push(f); rows.push(row); }
  const h = rows.shift(); return rows.filter((r) => r.length === h.length).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]])));
}
const L = csv(path.join(root, 'docs/fort-fidelity/ledger.csv'));
const rank = new Map(csv(path.join(root, 'data/sites.csv')).map((r) => [r.id, r.significance_rank ? +r.significance_rank : 1e9]));
const have = (id) => fs.existsSync(path.join(root, 'data/traces', id + '.trace.json')) || fs.existsSync(path.join(root, 'src/levels', id + '.trace.js')) || fs.existsSync(path.join(root, 'src/levels', id + '.js'));
const q = L.filter((r) => r.status === 'todo' && (!countries.length || countries.includes(r.country)) && !notCountries.includes(r.country) && r.lat && r.lon && !isNaN(+r.lat) && !isNaN(+r.lon) && kinds.some((k) => (r.current_scene_kind || '').includes(`(${k})`)) && !have(r.site_id))
  .sort((a, b) => (rank.get(a.site_id) ?? 1e9) - (rank.get(b.site_id) ?? 1e9) || (+a.batch || 0) - (+b.batch || 0) || (a.site_id < b.site_id ? -1 : 1))
  .slice(0, limit);
if (process.argv.includes('--count')) console.log(q.length);
else console.log(q.filter((_, i) => i % sn === si).map((r) => r.site_id).join(','));
