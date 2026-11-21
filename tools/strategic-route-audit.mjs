// Repeatable connectivity audit for the regional gameplay route grid.
// This checks computational connectivity, not historical route accuracy.
import BASE from '../src/data/basemap.js';
import { FORTS } from '../src/data/forts.js';
import STUDY from '../src/data/smith-newton-2024.json' with { type: 'json' };
import { StrategicRouter } from '../src/game/strategic-routing.js';
import { HYDRO_RIVERS, HYDRORIVERS_META } from '../src/data/hydrorivers.js';
import { strategicTerrainAt } from '../src/game/strategic-terrain.js';

const router = new StrategicRouter(BASE.countries, BASE.rivers, HYDRO_RIVERS);
const terrainChecks = [
  ['Alamut / Alborz', 50.5861806, 36.4447083, 'alborz'],
  ['central Zagros', 47.8, 34, 'zagros'],
  ['central Iranian plateau', 53.5, 32, 'iran-plateau'],
  ['south Caspian lowland', 50, 37, 'caspian-lowland'],
  ['Khuzestan lowland', 48.5, 31, 'khuzestan'],
];
for (const [label, lon, lat, expected] of terrainChecks) {
  const actual = strategicTerrainAt(lon, lat);
  if (actual.id !== expected || !Number.isFinite(actual.elevationMeters)) {
    throw new Error(`${label} terrain check failed: expected ${expected}, received ${actual.id}.`);
  }
}
console.log(`Iran physiography checks: ${terrainChecks.length} broad regions resolve to their named procedural terrain classes.`);
const seen = new Uint8Array(router.cells.length);
const componentSizes = [];
const componentOf = new Int16Array(router.cells.length);
componentOf.fill(-1);
for (let i = 0; i < router.cells.length; i++) {
  if (router.cells[i].water || seen[i]) continue;
  const queue = [i], component = componentSizes.length;
  seen[i] = 1;
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const cell = router.cells[queue[cursor]];
    for (const [dx, dy] of [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]) {
      const x = cell.x + dx, y = cell.y + dy;
      if (x < 0 || x >= router.xn || y < 0 || y >= router.yn) continue;
      const next = y * router.xn + x;
      if (!seen[next] && !router.cells[next].water) {
        seen[next] = 1;
        queue.push(next);
      }
    }
  }
  for (const id of queue) componentOf[id] = component;
  componentSizes.push(queue.length);
}
function nearestLandCell(point) {
  let nearest = -1, best = Infinity;
  for (const cell of router.cells) {
    if (cell.water) continue;
    const distance = (cell.lon - point.lon) ** 2 + (cell.lat - point.lat) ** 2;
    if (distance < best) { best = distance; nearest = cell.id; }
  }
  return nearest < 0 ? -1 : componentOf[nearest];
}

const records = [...FORTS, ...STUDY.records].filter(point => Number.isFinite(point.lon) && Number.isFinite(point.lat));
function insideRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > point.lat) !== (yj > point.lat) && point.lon < (xj - xi) * (point.lat - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const iran = BASE.countries.find(country => country.iso === 'IRN');
const iranRecords = FORTS.filter(point => point.country === 'Iran');
if (!iran || !iranRecords.length || iranRecords.some(point => !iran.rings.some(ring => insideRing(point, ring)))) {
  throw new Error('Iran outline check failed: one or more Iran fort points fall outside the loaded outline.');
}
if (router.route({lon:43.9,lat:36}, {lon:50.5861806,lat:36.4447083}, 3, false) !== null) {
  throw new Error('Out-of-bounds route guard failed: endpoint west of the map was not rejected.');
}
console.log(`Iran outline check: ${iranRecords.length}/${iranRecords.length} Iran catalogue points lie within the loaded Iran polygon; west-of-bounds endpoint rejected.`);
let inBounds = 0, snappedToLand = 0;
const recordsByComponent = new Map();
for (const point of records) {
  if (point.lon < 44 || point.lon > 100.5 || point.lat < 4.5 || point.lat > 39.5) continue;
  inBounds++;
  const component = nearestLandCell(point);
  if (component >= 0) {
    snappedToLand++;
    recordsByComponent.set(component, (recordsByComponent.get(component) || 0) + 1);
  }
}

function fort(match) {
  const result = FORTS.find(match);
  if (!result) throw new Error(`Missing audit endpoint: ${match}`);
  return result;
}
const pairs = [
  ['Murud-Janjira → Fort William', fort(n => n.name === 'Murud-Janjira'), fort(n => n.name === 'Fort William, Kolkata'), false],
  ['Lahore → Kabul', fort(n => n.name.startsWith('Lahore Fort')), fort(n => n.name.includes('Kabul')), false],
  ['Nuwakot → Punakha', fort(n => n.name === 'Nuwakot Durbar'), fort(n => n.name === 'Punakha Dzong'), false],
  ['Jaffna → Galle', fort(n => n.name === 'Jaffna Fort'), fort(n => n.name === 'Galle Fort'), false],
  ['Dhaka → Garhgaon', fort(n => n.name.startsWith('Lalbagh Fort')), fort(n => n.name.includes('Garhgaon')), false],
  ['Galle → Fort William · mixed transport', fort(n => n.name === 'Galle Fort'), fort(n => n.name === 'Fort William, Kolkata'), true],
  ['Taxila → Bamiyan · northwest corridor', {lon:72.842667,lat:33.744669}, {lon:67.825247,lat:34.846942}, false],
  ['Alamut → Bost · Iran–Afghanistan', fort(n => n.id === 'alamut-castle'), fort(n => n.id === 'bost-fortress'), false],
  ['Bhopal → Indore · Malwa', {lon:77.397919,lat:23.250944}, {lon:75.85476,lat:22.71802}, false],
  ['Alamut → Taxila · western highlands to Gandhara', fort(n => n.id === 'alamut-castle'), {lon:72.842667,lat:33.744669}, false],
];
const failed = [];
for (const [label, start, end, allowSea] of pairs) {
  const route = router.route(start, end, 3, allowSea);
  if (!route) failed.push(label);
  else {
    if(route.hydroRiverCrossings.length&&route.riverCrossingDays<=0)failed.push(`${label} river friction`);
    console.log(`${label}: ${Math.round(route.distanceKm)} km schematic, ${Math.round(route.estimatedDays)} modeled days, ${Math.round(route.seaKm)} km sea, ${route.riverCrossings.length} named Natural Earth crossings, ${route.hydroRiverCrossings.length} HydroRIVERS main-river groups, ${route.riverCrossingDays.toFixed(1)} modeled river-friction days`);
  }
}
const seasonalStart = fort(n => n.name === 'Murud-Janjira');
const seasonalEnd = fort(n => n.name === 'Fort William, Kolkata');
const drySeason = router.route(seasonalStart, seasonalEnd, 3, false);
const lateMonsoon = router.route(seasonalStart, seasonalEnd, 9, false);
if (!drySeason || !lateMonsoon || lateMonsoon.estimatedDays <= drySeason.estimatedDays) {
  failed.push('September monsoon friction');
} else {
  console.log(`March → September monsoon modeled time: ${drySeason.estimatedDays.toFixed(1)} → ${lateMonsoon.estimatedDays.toFixed(1)} days.`);
}
console.log(`Land-grid components: ${componentSizes.length}; largest: ${Math.max(...componentSizes)} of ${router.cells.filter(cell => !cell.water).length} land cells.`);
console.log(`Located project and study records inside bounds: ${snappedToLand}/${inBounds} snap to land; components: ${[...recordsByComponent].map(([id, count]) => `#${id} (${componentSizes[id]} cells): ${count} records`).join('; ')}.`);
if (snappedToLand !== inBounds || failed.length) {
  throw new Error(`Connectivity audit failed: ${inBounds - snappedToLand} records failed land snapping; routes missing: ${failed.join(', ') || 'none'}`);
}
console.log(`HydroRIVERS input: ${HYDRORIVERS_META.retainedFeatures.toLocaleString()} order-${HYDRORIVERS_META.minimumStrahlerOrder}+ reaches; ${HYDRORIVERS_META.verticalOrHistoricalClaim}.`);
console.log('PASS · land connectivity only; crossing between separate land components requires mixed transport. Terrain, hydrology, travel rates and route geometry remain gameplay estimates.');
