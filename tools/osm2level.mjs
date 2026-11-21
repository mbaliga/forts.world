// Import a real street plan from OpenStreetMap into a fort's level.
//   1. In https://overpass-turbo.eu run the query printed by `node tools/osm2level.mjs --query <lat> <lon> <radius-m>`
//      (roads, lanes and paths; building footprints; water; markets), then Export → GeoJSON.
//   2. node tools/osm2level.mjs <export.geojson> <level-id> <lat> <lon> [rotationDeg]
//      writes src/levels/<level-id>.osm.js (roads with widths by type, building footprints, water, markets) in the
//      level's metres (x east, y north, origin at lat/lon).
//   3. In the level: import OSM from './<level-id>.osm.js' and call W.applyOSM(OSM, { era }) in build().
// OpenStreetMap data © OpenStreetMap contributors, ODbL: credit it in SOURCES.md when you use it.
import fs from 'fs';
const args = process.argv.slice(2);
if (args[0] === '--query') {
  const [lat, lon, r] = args.slice(1).map(Number);
  console.log(`[out:json][timeout:60];
(
  way["highway"](around:${r},${lat},${lon});
  way["building"](around:${r},${lat},${lon});
  way["natural"="water"](around:${r},${lat},${lon});
  way["landuse"~"farmland|orchard|grass"](around:${r},${lat},${lon});
  node["amenity"="marketplace"](around:${r},${lat},${lon});
  way["amenity"="marketplace"](around:${r},${lat},${lon});
);
out body; >; out skel qt;`);
  process.exit(0);
}
const [file, id, lat0, lon0, rot = 0] = args;
const gj = JSON.parse(fs.readFileSync(file, 'utf8'));
const R = 6371008.8, k = Math.PI / 180, cr = Math.cos(+rot * k), sr = Math.sin(+rot * k);
const P = ([lon, lat]) => { const x = (lon - lon0) * k * R * Math.cos(lat0 * k), y = (lat - lat0) * k * R; return [+(x * cr - y * sr).toFixed(1), +(x * sr + y * cr).toFixed(1)]; };
const WIDTH = { primary: 9, secondary: 7, tertiary: 6, residential: 5, unclassified: 4.5, service: 3.5, living_street: 3.5, pedestrian: 4, footway: 2, path: 1.6, steps: 2, track: 3 };
const out = { roads: [], buildings: [], water: [], fields: [], markets: [] };
for (const f of gj.features) {
  const p = f.properties || {}, g = f.geometry; if (!g) continue;
  const line = g.type === 'LineString' ? g.coordinates : g.type === 'Polygon' ? g.coordinates[0] : null;
  if (p.highway && line) out.roads.push({ type: p.highway, w: WIDTH[p.highway] ?? 3, pts: line.map(P), name: p.name || null });
  else if (p.building && g.type === 'Polygon') out.buildings.push({ pts: line.map(P).slice(0, -1), storeys: +(p['building:levels'] || 0) || null, use: p.building });
  else if (p.natural === 'water' && g.type === 'Polygon') out.water.push(line.map(P));
  else if (p.landuse && g.type === 'Polygon') out.fields.push({ use: p.landuse, pts: line.map(P).slice(0, -1) });
  else if (p.amenity === 'marketplace') out.markets.push(g.type === 'Point' ? P(g.coordinates) : P(line[0]));
}
fs.writeFileSync(`src/levels/${id}.osm.js`, `// Imported from OpenStreetMap (© OpenStreetMap contributors, ODbL) by tools/osm2level.mjs\nexport default ${JSON.stringify(out)};\n`);
console.log(`${id}: ${out.roads.length} roads, ${out.buildings.length} buildings, ${out.water.length} water, ${out.fields.length} fields, ${out.markets.length} markets`);
