// Curation for Gandikota (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/gandikota-pass.md.
// OSM has no closed fort outline for Gandikota. The auto-T1 builder picked the Rani Mahal ruin (way 1501113060, 29 x 35 m) as "the outline", which is wrong for the fort,
// so here it is demoted to an ordinary mapped ruin and the scene has no outline element. The 11 mapped wall ways (barrier=city_wall) do not close into a ring (16 dangling ends), so they are drawn as separate wall lines and no ring is invented.
// The terrain window is 1.8 km square at 8 m (build option in data/traces/build-options.json). Only one era: Wikipedia gives no dated extent of the fort.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Gandikota Fort, Kadapa district, Andhra Pradesh. Hand-curated trace, tier T1 (OSM-mapped wall fragments, temples, mosque and ruins; no closed outline, no plan; T2 is blocked).',
  'Base: data/traces/gandikota.trace.json (OSM ODbL; Terrarium z15 every 8 m over a 1.8 km square, ~30 m SRTM-derived: the Penna gorge walls are smoothed, so the 100 m-wide gorge Wikipedia describes is not resolved).',
  'The Penna river polygon and the ponds get a derived surface level (lowest DEM value on the outline) because the pipeline would otherwise dig them to sea level; this is labelled derived, not mapped.',
  'No gate is placed: OSM has "Entrance" ways at the temple and mosque compounds only, and none lies on a mapped fort wall.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  T.name = 'Gandikota Fort';   // the builder named the scene after the Rani Mahal ruin it took for the outline
  const o = h.byId('outline');
  h.remove('outline');
  h.add({ id: 'zone-rani-mahal', kind: 'zone', zone: 'ruins', poly: o.poly, src: o.src, ev: 'mapped', conf: 0.7, name: 'Rani Mahal · mapped ruin footprint (OSM way 1501113060)',
    note: 'The auto builder used this closed way as the fort outline; it is a 29 x 35 m ruin, not the fort, so it is drawn as a ruin zone like the King house and the Gun Foundry.' });
  const wallWays = { 'wall-3': '195784010', 'wall-4': '195784011', 'wall-5': '195784021', 'wall-19': '455999938', 'wall-21': '455999941', 'wall-22': '455999942', 'wall-23': '455999943', 'wall-47': '1501113046', 'wall-48': '1501113047', 'wall-66': '1501114785', 'wall-67': '1501114787' };
  for (const [id, way] of Object.entries(wallWays)) h.byId(id).name = `Wall line · mapped (OSM way ${way}), ring not closed, height unknown`;
  h.byId('marker-1').name = 'Gandikota Fort · mapped point (OSM node 4523313979)';
  const inner = h.byId('building-34');
  inner.name = 'Jama Masjid (inner building) · mapped footprint (OSM way 1499252381)';
  inner.unreachableOk = true;
  inner.unreachableNote = 'all four corners lie inside the larger mapped Jama Masjid footprint (OSM way 455985602, 149 x 118 m), which is drawn as one mass; no way into the inner building is mapped.';
  h.byId('water-24').name = 'Penna river · mapped surface (OSM way 644038970)';
  h.byId('water-49').name = 'Gandikota Fort Pond · mapped (OSM way 1501113048)';
  h.byId('zone-58').name = 'King house of fort · mapped ruin footprint (OSM way 1501113059)';
  h.byId('zone-59').name = 'Gun Foundry · mapped ruin footprint (OSM way 1501113061)';
  h.byId('zone-60').name = 'Ruined wall enclosure · mapped (OSM way 1501113062, ruins=wall), 199 x 187 m';
  h.byId('zone-61').name = 'Ancient Buddhist Stupa Tarang-1 · mapped ruin footprint (OSM way 1501113064)';
  const c = h.ground(0, 0);
  console.error(`gandikota: DEM ground at the window centre ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m`);

  T.eras = [
    { id: 'today', year: 'Today', label: 'Ruined fort above the Penna', short: 'Ruin', lens: 'none',
      summary: 'The ruined hill fort on the right bank of the Penna gorge, with eleven mapped wall fragments, the Madhavaraya and Ranganatha temples, the Jama Masjid, ponds and ruins.',
      basis: 'OSM: 11 wall ways, the Jama Masjid, Madhavaraya and Ranganayakulu temples with their compounds, the Old ibadat khana, King house, Gun Foundry, Rani Mahal and a stupa ruin, four ponds, the Penna and farmland.',
      conjecture: 'Wikipedia gives no wall length, height or gate, and no dated extent, so there is no earlier era here. The "101 towers" in the infobox is uncited. The wall fragments leave gaps; the fort\'s full circuit is not known from these sources.',
      sources: [],
      facts: ['Wikipedia: on the right bank of the Penna, about 15 km from Jammalamadugu; the gorge between the Erramala hills and the river is "a mere 100 m" wide at its narrowest (uncited).', 'Wikipedia: a sand fort was first built in 1123 by a Kakatiya Raja, a subordinate of Ahavamalla Someswara I (the infobox says a Kalyani Chalukya subordinate); the 101-tower rock fort is credited to Pemmasani Ramalinga Nayudu in the infobox only.', 'Wikipedia: the Madhavaraya and Ranganatha temples are in ruins; the Jama Masjid has two minarets; a vaulted granary is used as watchman\'s quarters.'] },
  ];
}
