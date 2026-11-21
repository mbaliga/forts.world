// Curation for Jaisalmer (batch 2). Evidence and conflicts: docs/research/jaisalmer-pass.md.
// No open plan, survey drawing or dated image of the fort was found (Commons search: only gazetteer pages and 2012-13 photographs), so nothing here is traced from a plan.
// The mapped lines (outline and perimeter wall way 31614017, four gate houses, the Raj Mahal and Rani Mahal footprints, markers) are carried back as inferred.
// The constructed layer draws the mapped perimeter as a wall of the one height a source gives; every height is an assumption with its rule.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Jaisalmer Fort, Rajasthan. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/jaisalmer.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the 76 m Trikuta hill is smoothed).',
  'Named Pols that OSM maps as nodes within 30 m of the perimeter wall become gates (mapped). The Pols mapped as small buildings are left as footprints.',
  'The constructed (schematic) layer in `constructed[]` is drawn from a written dimension (Wikipedia: outer base wall 15 ft) with an assumed height, and is shown only in the `<era>~built` eras.',
];
const distSeg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); const q = [a[0] + dx * t, a[1] + dy * t]; return [Math.hypot(p[0] - q[0], p[1] - q[1]), q]; };

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 31614017)';
  const wall = h.byId('outline-wall');
  const gateIds = [];
  for (const m of h.all('marker').filter((x) => /pol/i.test(x.name || ''))) {
    let best = [1e9, null];
    for (let i = 0; i < wall.path.length - 1; i++) { const [d, q] = distSeg(m.at, wall.path[i], wall.path[i + 1]); if (d < best[0]) best = [d, q]; }
    console.error(`jaisalmer: ${m.name} node is ${best[0].toFixed(0)} m from the perimeter wall`);
    if (best[0] > 30) continue;
    const id = `gate-${gateIds.length + 1}`;
    h.add({ id, kind: 'gate', wall: wall.id, at: best[1].map((v) => +v.toFixed(1)), src: m.src, ev: 'mapped', conf: 0.6, name: `${m.name} · mapped gate`,
      note: `OpenStreetMap node ${best[0].toFixed(0)} m from the mapped wall, snapped to it. The gate's form is not mapped, so a plain 3 m opening is cut; it is not a claim about the real gate.` });
    h.remove(m.id); gateIds.push(id);
  }
  const pol = h.all('building').filter((b) => /pol/i.test(b.name || ''));
  for (const b of pol) b.name = `${b.name} · mapped gate-house footprint`;
  for (const [id, n] of [['building-182', 'Rani Mahal'], ['building-183', 'Raja ka Mahal']]) { try { h.byId(id).name = `${n} · mapped footprint`; } catch { /* id moved */ } }

  const keep = ['outline', 'outline-wall', ...gateIds, ...pol.map((b) => b.id), ...h.all('wall').filter((w) => w.id !== 'outline-wall').map((w) => w.id)];
  carryOver(T, '1647', keep, { note: 'the present mapped line assumed to show the fort after the 1633-47 rebuilding of its bastions (Wikipedia); no plan of that date was found' });

  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: wall.path, closed: true, stands_for: wall.id, replaces: [wall.id], thick: 2.5, src: wall.src, ev: 'schematic', conf: 0.2,
      name: 'Perimeter wall · schematic, 4.6 m high and 2.5 m thick assumed', basis: 'Drawn on the mapped perimeter. Wikipedia gives an outer base wall 15 ft (4.6 m) high and about 2.5 miles (4 km) of upper wall; this is the only height a source gives, and the upper rampart and its 99 bastions are not separated. No survey was read. The thickness is assumed.',
      h: { v: 4.6, src: 'inferred', note: '15 ft outer base wall from Wikipedia, uncited; applied round the whole perimeter' } },
  ];
  T.eras = [
    { id: '1647', year: '1647', label: 'Bastions rebuilt', short: '1647', lens: 'none',
      summary: 'The Bhati fort on Trikuta hill after 92 of its 99 bastions were built or rebuilt in 1633-47, shown as the present mapped wall and gates carried back.',
      basis: 'Wikipedia: 99 bastions, 92 built or substantially rebuilt in 1633-47; foundation in 1156 by Rawal Jaisal ("legend has it"). The drawn fort is today\'s mapped line carried back 380 years, marked inferred.',
      conjecture: 'No plan or dated image of the fort before the 19th century was found. Only the perimeter, the four Pol houses and the mapped gates are carried back; palaces, shrines and houses are left out because their dates are not established.',
      sources: [],
      facts: ['Wikipedia: built in 1156 by Rawal Jaisal, a Bhati Rajput; the date is "legend has it".', 'About 1299 Alauddin Khalji besieged the fort (jauhar by the women); Mughal control lasted until 1762 and Maharawal Mulraj took the fort in 1762 (Wikipedia, with the page\'s own conflicts noted).'] },
    { id: 'today', year: 'Today', label: 'Living fort', short: 'Living fort', lens: 'none',
      summary: 'A World Heritage hill fort (2013) about 460 x 230 m on a 76 m hill, with roughly 4,000 residents, the Raj Mahal and seven Jain temples.',
      basis: 'The OSM outline, perimeter wall, four Pol gate houses, the Raj Mahal and Rani Mahal footprints, roads and 44 buildings.',
      conjecture: 'Heights are unknown (kerb-high) in this evidence layer; see the constructed layer. The OSM Pols may not be the four fortified gates the written source counts (it names only Suraj Pol).',
      sources: [],
      facts: ['Dimensions 1,500 ft x 750 ft (460 x 230 m) on a hill above 250 ft (76 m); upper wall perimeter about 2.5 miles (Wikipedia).', 'The Queen\'s Palace (Rani ka Mahal) has collapsed along with parts of the outer wall (Wikipedia, undated).'] },
  ];
}
