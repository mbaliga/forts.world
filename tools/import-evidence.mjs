// Write the verified rows of a completed checklist into src/data/verified.js (kept in the source, applied on every start).
//   node tools/import-evidence.mjs checklist.csv
// A row counts only if it has an ev of measured or documented and a source. Positions need verified_lat and verified_lon.
import fs from 'fs';
const text = fs.readFileSync(process.argv[2], 'utf8');
const parse = (l) => { const out = []; let cur = '', qq = false; for (let i = 0; i < l.length; i++) { const c = l[i]; if (qq) { if (c === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') qq = false; else cur += c; } else if (c === '"') qq = true; else if (c === ',') { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; };
const lines = text.split(/\r?\n/).filter(Boolean), head = parse(lines.shift());
const rows = lines.map((l) => Object.fromEntries(parse(l).map((v, i) => [head[i], v.trim()])))
  .filter((r) => /^(measured|documented)$/.test(r.ev) && r.source && (r.field !== 'position' || (r.verified_lat && r.verified_lon)))
  .map(({ id, field, verified_lat, verified_lon, ev, source }) => ({ id, field, verified_lat, verified_lon, ev, source }));
const prev = (await import('../src/data/verified.js')).default;
const key = (r) => r.id + '|' + r.field, merged = new Map(prev.map((r) => [key(r), r])); for (const r of rows) merged.set(key(r), r);
fs.writeFileSync('src/data/verified.js', `// Verified facts, written by tools/import-evidence.mjs. Applied on every start.\nexport default ${JSON.stringify([...merged.values()], null, 1)};\n`);
console.log(`${rows.length} verified rows imported; ${merged.size} in total.`);
