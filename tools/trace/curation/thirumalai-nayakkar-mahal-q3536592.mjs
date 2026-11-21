// Curation for Thirumalai Nayakkar Mahal, Madurai (batch alpha-T). Evidence and conflicts: docs/research/thirumalai-nayakkar-mahal-pass.md.
// No plan, survey drawing or dated image was found; the 2010 Tamil Nadu Department of Archaeology conservation report (Tamil Digital Library TVA_BOK_0010642)
// gives written dimensions only and reproduces no drawing. So this is T1: the mapped outline and footprints, plus a labelled schematic layer drawn from the report's dimensions.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Thirumalai Nayakkar Mahal (Tirumalai Nayak Palace), Madurai, Tamil Nadu. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey drawing was found, so T2 is blocked).',
  'Base: data/traces/thirumalai-nayakkar-mahal-q3536592.trace.json (OSM ODbL; Terrarium z15 every 5 m, ~30 m SRTM-derived: the site is flat, 130-140 m of terrain would add nothing).',
  'The OSM outline (way 49175978, about 243 x 136 m) is the surviving palace block. The report says the original enclosure was 900 x 660 ft (274 x 201 m) and "four times bigger than the present one"; the two do not reconcile by area, and this pass does not try to.',
  'The constructed (schematic) layer draws that 900 x 660 ft enclosure at the report\'s 40 ft wall height. Its position is not documented and is centred on the surviving core.',
];

// Original enclosure: 900 ft E-W x 660 ft N-S, walls 40 ft high and about 4-5 ft thick (Dept of Archaeology 2010, section on the palace).
const FT = 0.3048, EW = 900 * FT, NS = 660 * FT, WALL_H = +(40 * FT).toFixed(1), WALL_T = 1.4;

export default function curate(T, h) {
  const out = h.byId('outline');
  out.name = 'Palace outline · mapped (OSM way 49175978), the surviving block';
  // St Mary's Cathedral Church (OSM way 680725273) stands outside the 900 x 660 ft rectangle; the schematic enclosure is drawn sealed (no source places a gate), so the spawn inside cannot reach it in the constructed eras.
  const cathedral = h.all('building').find((b) => /St\.? Mary|Saint Mary/i.test(b.name || ''));
  if (cathedral) { cathedral.unreachableOk = true; cathedral.unreachableNote = 'outside the schematic enclosure of the constructed layer, which is drawn sealed because no source places a gate; reachable in the mapped eras'; }
  const zone = h.all('zone')[0];
  const keep = ['outline', ...(zone ? [zone.id] : [])];
  carryOver(T, '1636', keep, { note: 'the mapped outline is assumed to mark the same ground as the palace completed in 1636; the 2010 conservation report says the original was four times the surviving palace, so this is only the surviving core' });

  // centre of the mapped outline's bounding box
  const xs = out.poly.map((p) => p[0]), ys = out.poly.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  const a = [cx - EW / 2, cy - NS / 2], b = [cx + EW / 2, cy - NS / 2], c = [cx + EW / 2, cy + NS / 2], d = [cx - EW / 2, cy + NS / 2];
  const rect = [a, b, c, d, a].map((p) => p.map((v) => +v.toFixed(1)));
  T.constructed = [
    { id: 'c-enclosure', kind: 'wall', path: rect, closed: true, thick: WALL_T, src: 'inferred', ev: 'schematic', conf: 0.2,
      name: 'Original enclosure · schematic, 274 x 201 m and 12.2 m high, position approximate',
      basis: 'Drawn from the Tamil Nadu Department of Archaeology 2010 conservation report: enclosure walls 900 ft east-west by 660 ft north-south and 40 ft high, walls about 4-5 ft thick. Where the enclosure stood is not documented; it is centred on the mapped surviving block and kept axis-aligned. The wall is drawn solid with no gate, because no source places one.',
      h: { v: WALL_H, src: 'inferred', note: '40 ft wall height from the 2010 report, applied round a rectangle whose position is assumed' } },
  ];
  T.eras = [
    { id: '1636', year: '1636', label: 'Palace completed', short: '1636', lens: 'none',
      summary: 'Tirumala Nayaka\'s palace as completed in 1636 (Wikipedia and the 2010 state report agree on the date), shown as the mapped surviving block carried back.',
      basis: 'Wikipedia: begun in the 1620s and finished in 1636; Tirumala Nayaka ruled 1623-59 (the report gives 1627-59 in one place). The evidence layer shows only the OSM outline and the Paththu Thungal zone, carried back about 390 years and marked inferred.',
      conjecture: 'No plan, measured drawing or dated image of the palace before the 19th century was found. The original was about four times the surviving palace (Wikipedia; report), but where the rest stood is unknown, so it is not drawn here; see the constructed layer for a schematic enclosure at the report\'s dimensions.',
      sources: [],
      facts: ['Completed 1636 (Wikipedia; 2010 report). The "Italian architect" story is a local legend, not documented (Wikipedia).', 'Enclosure 900 x 660 ft, walls 40 ft high; Svargavilasam courtyard 50 x 32 m (2010 report). Wikipedia gives the courtyard as 75 x 50 m: the two do not agree.', 'Stone pillars about 12 m high in the report; Wikipedia says 25 m (82 ft). The report also lists pillar heights of 4.15, 8.30 and 12.50 m and counts 248 pillars.'] },
    { id: 'today', year: 'Today', label: 'Protected monument', short: 'Monument', lens: 'none',
      summary: 'The surviving palace block (Svargavilasam courtyard, dancing hall and adjoining buildings) in the middle of Madurai, with the Paththu Thungal zone, roads and houses round it.',
      basis: 'The OSM outline (about 243 x 136 m), the Paththu Thungal zone, 17 building footprints (one is St Mary\'s Cathedral Church) and 54 roads.',
      conjecture: 'Every height is unknown (kerb-high) in this evidence layer; the OSM footprints are not named, so which is the dancing hall and which the Svargavilasam is not stated here.',
      sources: [],
      facts: ['Used as the Madura-Ramnad district court until 1970; handed to the Archaeology Department in 1971 (2010 report; Wikipedia says court use until 1970).', 'Lord Napier restored it: Wikipedia gives 1866-72, the 2010 report gives 1858 (cracked walls noted in 1857). Napier governed Madras 1866-72, so the report\'s year looks wrong; not resolved here.', 'Conservation works ran 1994-98 and 2002-07 under Finance Commission grants (2010 report).'] },
  ];
}
