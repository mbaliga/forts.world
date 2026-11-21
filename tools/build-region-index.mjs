// Region index for lazy loading (PIPELINE-DESIGN.md §5): data/traces/index.json lists every trace with
// what the app needs before it fetches one: id, name, type, tier, status, lat/lon, bounds, size, region shard.
//   node tools/build-region-index.mjs
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(new URL('..', import.meta.url).pathname), TR = path.join(root, 'data/traces');
const shard = (lat, lon) => `${Math.floor(lat / 5) * 5}_${Math.floor(lon / 5) * 5}`; // 5-degree cells
const sites = [];
for (const f of fs.readdirSync(TR).filter((f) => f.endsWith('.trace.json')).sort()) {
  const T = JSON.parse(fs.readFileSync(path.join(TR, f), 'utf8'));
  sites.push({ id: T.id, name: T.name, type: T.type, tier: T.tier, status: T.status, lat: T.coords[0], lon: T.coords[1], region: T.region, country: T.country, bounds: T.bounds, file: f, bytes: fs.statSync(path.join(TR, f)).size, shard: shard(T.coords[0], T.coords[1]), evidence: T.evidence, built: T.generated?.date });
}
const shards = {};
for (const s of sites) (shards[s.shard] ||= []).push(s.id);
fs.writeFileSync(path.join(TR, 'index.json'), JSON.stringify({ schema: 'in-rts.trace-index/1', generated: new Date().toISOString().slice(0, 10), count: sites.length, shards, sites }, null, 1));
console.log(`index: ${sites.length} traces, ${Object.keys(shards).length} shards, ${(sites.reduce((a, s) => a + s.bytes, 0) / 1024).toFixed(0)} KB total`);
