// Curation for Vattakottai Fort, Kanniyakumari (batch alpha-T). Evidence and conflicts: docs/research/vattakottai-pass.md.
// No plan, survey drawing or dated image was found. Wikipedia gives dates and builders but no dimensions; a Kanyakumari tourism page gives a rectangle of about 3.5 acres,
// walls 25-26 ft high and 29/18/6 ft thick. The mapped outline (OSM way 157804925) measures 3.4 acres, which agrees, so the tourism figures are used for a schematic wall only.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Vattakottai Fort, Kanniyakumari district, Tamil Nadu. Hand-curated trace, tier T1 (OSM-mapped outline and wall line; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/vattakottai-fort-q7917189.trace.json (OSM ODbL; Terrarium z15 every 5 m, ~30 m SRTM-derived; sea derived from the OSM coastline and checked against the DEM).',
  'The OSM outline and the barrier=wall line are the same way (157804925, 23 vertices, 13,842 m2 = 3.4 acres). No gate, bastion or height is mapped.',
  'The constructed (schematic) layer draws the perimeter as a wall of the height a tourism page gives (25-26 ft incl. parapet); the thickness and the use of one height round the whole line are assumed.',
];
const FT = 0.3048;

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  const out = h.byId('outline'); out.name = 'Fort outline · mapped (OSM way 157804925), 3.4 acres';
  const wall = h.byId('outline-wall');
  const sea = h.all('water').filter((w) => w.water === 'sea');
  const coast = h.all('coastline');
  for (const s of sea) { s.unreachableOk = true; s.unreachableNote = 'the sea lies outside the sealed schematic wall of the constructed layer (no gate is mapped or sourced); reachable from the shore in the mapped eras'; }
  const keep = ['outline', 'outline-wall', ...sea.map((s) => s.id), ...coast.map((c) => c.id)];
  carryOver(T, '1750', keep, { note: 'the mapped outline, wall line and coast are assumed unchanged since the 18th-century fort of Marthandavarma\'s reign (1729-58); no plan of that date was found' });

  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: wall.path, closed: true, stands_for: wall.id, replaces: [wall.id], thick: +(18 * FT).toFixed(1), src: wall.src, ev: 'schematic', conf: 0.2,
      name: 'Perimeter wall · schematic, 7.9 m high and 5.5 m thick assumed',
      basis: 'Drawn on the mapped perimeter. A Kanyakumari tourism page gives walls 25 to 26 feet high including the parapet and 29 ft thick at the front, 18 ft at the corners and 6 ft at the rear; Wikipedia gives none. Which side is the front is not stated, so one 18 ft (5.5 m) thickness is used all round. No survey was read.',
      h: { v: +(26 * FT).toFixed(1), src: 'inferred', note: '26 ft (upper figure of 25-26 ft incl. parapet) from a tourism page, applied round the whole mapped line' } },
  ];
  T.eras = [
    { id: '1750', year: '1750', label: 'Travancore coastal fort', short: 'c. 1750', lens: 'none',
      summary: 'The granite coastal fort and barracks of Marthandavarma\'s Travancore (reign 1729-58), shown as the present mapped outline, wall line and coast carried back.',
      basis: 'Wikipedia: built in the 18th century for the kings of Travancore, later reconstructed under Eustachius De Lannoy (no year given); a tourism page dates it to the reign of Marthandavarma, 1729-58, with De Lannoy directing the work. The year 1750 is a mid-reign marker, not a documented date.',
      conjecture: 'No plan or dated image was found. Which parts are the original and which De Lannoy\'s is not stated. The mapped line is carried back unchanged, marked inferred.',
      sources: [],
      facts: ['Built of granite blocks; part of the fort extends into the sea (Wikipedia; tourism page).', 'Rectangular, about 3.5 acres; the mapped outline measures 3.4 acres (tourism page; this pass, from OSM).', 'Wall 25-26 ft high including the parapet; 29 ft thick at the front, 18 ft at the corners, 6 ft at the rear (tourism page only, not checked against a survey).'] },
    { id: 'today', year: 'Today', label: 'Protected monument', short: 'Monument', lens: 'none',
      summary: 'A protected granite fort on the shore about 7 km from Kanyakumari town, recently renovated by the Archaeological Department.',
      basis: 'The OSM outline and wall line, the zone, two ponds, the shoreline and 15 mapped paths.',
      conjecture: 'Every height is unknown (kerb-high) in this evidence layer; no gate is mapped, so the wall line stays sealed. Two mapped paths meet the wall and are candidates for openings, but are not drawn.',
      sources: [],
      facts: ['About 7 km from Kanyakumari town (Wikipedia).', 'A major renovation by the Archaeological Department is mentioned without a date (Wikipedia; tourism page).'] },
  ];
}
