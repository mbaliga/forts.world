// Every fort OpenStreetMap knows in South Asia, for the map of forts.
//   node tools/osm2forts.mjs --query        prints an Overpass query (run it at https://overpass-turbo.eu, Export → GeoJSON)
//   node tools/osm2forts.mjs export.geojson writes src/data/forts-osm.js (name, lat, lon, tags), skipping forts already
//                                          in src/data/forts.js (within about 1.5 km). Credit © OpenStreetMap contributors.
import fs from 'fs';
const BB = '4.5,44,39.5,100.5'; // south, west, north, east
if (process.argv[2] === '--query') {
  console.log(`[out:json][timeout:300];
(
  nwr["historic"="fort"](${BB});
  nwr["historic"="castle"]["castle_type"~"fortress|defensive|kremlin|citadel"](${BB});
  nwr["historic"="castle"]["name"~"[Ff]ort|[Qq]ila|[Gg]arh|[Dd]urg|[Kk]ot|[Dd]zong|[Gg]adhi"](${BB});
);
out center tags;`);
  process.exit(0);
}
const gj = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const { FORTS } = await import('../src/data/forts.js');
const near = (lat, lon) => FORTS.some((f) => Math.hypot(f.lat - lat, (f.lon - lon) * Math.cos(lat * Math.PI / 180)) < 0.014);
const out = [];
for (const f of gj.features || []) {
  const p = f.properties || {}, g = f.geometry; if (!g || !p.name) continue;
  let lon, lat;
  if (g.type === 'Point') [lon, lat] = g.coordinates;
  else { const ring = g.type === 'Polygon' ? g.coordinates[0] : g.type === 'LineString' ? g.coordinates : g.coordinates[0][0]; lon = ring.reduce((s, c) => s + c[0], 0) / ring.length; lat = ring.reduce((s, c) => s + c[1], 0) / ring.length; }
  if (near(lat, lon)) continue;
  out.push({ name: p['name:en'] || p.name, local: p.name, lat: +lat.toFixed(4), lon: +lon.toFixed(4), type: p.castle_type || p.historic, wikidata: p.wikidata || null });
}
fs.writeFileSync('src/data/forts-osm.js', `// Imported from OpenStreetMap by tools/osm2forts.mjs (© OpenStreetMap contributors, ODbL)\nexport default ${JSON.stringify(out)};\n`);
console.log(out.length, 'forts written to src/data/forts-osm.js');
