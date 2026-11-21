// Curation for Pratapgad (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/pratapgad-pass.md.
// No plan or survey was read. The OSM way is tagged barrier=wall and historic=fort, with World Heritage tags (ref:whc 1739-007, inscribed 2025), so the outline is a mapped line of the fort wall, not a survey.
// The old scene (src/levels/maratha.js, kept) was a generic blockout; the Mahadarwaza, Rajpuri bastion, Hanuman and Ballekilla named in older notes are not in the page read here and are not drawn.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Pratapgad, Satara district, Maharashtra. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/pratapgad.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the Sahyadri scarps are smoothed).',
  'The outline and wall line are OSM way 1569578753 (230 vertices, about 415 x 612 m). Temple footprints and two water bodies are OSM; the Government Guest House (1960 per Wikipedia, citation needed) is modern and kept out of the historic era.',
  'No gate, bastion or height has a plan position or source, so none is drawn.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  h.byId('outline').name = 'Fort outline · mapped (OSM way 1569578753)';
  h.byId('outline-wall').name = 'Perimeter wall line · mapped (OSM way 1569578753), height unknown';
  h.byId('building-9').name = 'Shri Tulja Bhavani Mandir · mapped footprint (OSM way 1494563054)';
  h.byId('building-11').name = 'Shri Kedareshwar Mandir · mapped footprint (OSM way 1494563057)';
  h.byId('building-12').name = 'Shri Vetal Mandir · mapped footprint (OSM way 1494563059)';
  h.byId('building-16').name = 'Government Guest House · mapped footprint (OSM way 1494563063)';
  h.byId('water-10').name = 'Water body · mapped (OSM way 1494563055), use not tagged';
  h.byId('water-15').name = 'Water body · mapped (OSM way 1494563062), use not tagged';
  const c = h.ground(0, 0);
  console.error(`pratapgad: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m (Wikipedia gives 1,080 m)`);

  const keep = ['outline', 'outline-wall', 'building-9'];
  carryOver(T, '1659', keep, { note: 'the present mapped outline is assumed to match the fort built in 1656 and held at the 1659 battle; no plan of that date was found', modify: {
    'building-9': { name: 'Tulja Bhavani temple site · mapped footprint carried back, inferred', note: 'Wikipedia says the temple dates from Shivaji\'s time, but the citation behind that line is not a relevant source; the present footprint is shown only as the temple\'s likely site.' } } });

  T.eras = [
    { id: '1659', year: '1659', label: 'Battle of Pratapgad', short: '1659', lens: 'none',
      summary: 'Pratapgad at the time of Shivaji\'s meeting with Afzal Khan (10 November 1659), shown as the present mapped wall outline and the Bhavani temple site carried back.',
      basis: 'Wikipedia: Shivaji had the fort built by Moropant Trimbak Pingle and finished it in 1656; the battle was fought on 10 November 1659. The drawn fort is today\'s mapped line carried back 367 years, marked inferred.',
      conjecture: 'No plan or dated image was found. Wikipedia says the fort has an upper and a lower part and two main entrances, but gives no names or positions, so no gate or bastion is drawn. Older notes name a Mahadarwaza and a Rajpuri bastion; the page read here does not.',
      sources: [],
      facts: ['Wikipedia: elevation about 1,080 m (3,540 ft); the infobox says 3,543 ft. The terrain grid reads 1,060 m at the outline centroid, which fits a summit near 1,080 m.', 'The mapped outline is 645 x 328 m at its widest, 86,752 m2 (8.7 ha, 21 acres); no written area was found to compare.', 'Wikipedia: the British took the fort in 1818; the bronze Shivaji statue was unveiled on 30 November 1957 (cited).'] },
    { id: 'today', year: 'Today', label: 'World Heritage fort', short: 'Heritage', lens: 'none',
      summary: 'A hill fort in the Maratha Military Landscapes World Heritage property (inscribed 2025 per its OSM tags), with the mapped wall outline, three temples, two water bodies, a guest house and paths.',
      basis: 'The OSM wall outline, three temple footprints, guest house, two water bodies, steps and paths, and the Pratapgad road and State Highway 72.',
      conjecture: 'Heights are unknown (kerb-high); the terrain is smoothed SRTM. Seven mapped paths meet the wall line and could be openings, but no gate is mapped, so the enclosure stays sealed.',
      sources: [],
      facts: ['OSM tags the wall way with whc:inscription_date 2025 and ref:whc 1739-007.', 'Wikipedia: a Government guest house and park were built in 1960 (citation needed); the Tulja Bhavani temple holds an eight-armed image of the goddess.'] },
  ];
}
