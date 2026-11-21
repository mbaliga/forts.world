// Curation for Arnala Fort (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/arnala-pass.md.
// No plan, survey drawing or dated image of the fort was read, and no source read gives a wall or bastion height, so this is an honest T1 with no constructed layer.
// Drawn: the OSM fort outline (relation 6538186), the mapped perimeter wall line, the island coast and sea, one unnamed building and the mapped reservoir.
// The 1737 era is the mapped line carried back; Wikipedia's bastions, gates and shrines have no plan position and are not drawn.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Arnala Fort (Arnala island, Palghar district, Maharashtra). Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/arnala-fort-q3778583.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the island is a few metres high and its relief is smoothed).',
  'The fort outline is OSM relation 6538186 and the wall line is way 122375460; the sea is derived from the OSM coastline (way 22825793) and checked against the DEM.',
  'Nothing is drawn that has no mapped position: the ten Maratha bastions, the north gate, the shrines and the Portuguese tower described in Wikipedia are not placed.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  h.byId('outline').name = 'Fort outline · mapped (OSM relation 6538186)';
  h.byId('wall-3').name = 'Perimeter wall line · mapped (OSM way 122375460), height unknown';
  h.byId('building-4').name = 'Building · mapped (OSM way 439559695), use not tagged';
  const res = h.byId('water-6');
  res.name = 'Reservoir · mapped (OSM way 439559713)';
  res.note = `${res.note ? res.note + ' ' : ''}Tagged natural=water, water=reservoir. Its outline has 8 vertices, which fits the "large octagonal freshwater reservoir" Wikipedia mentions (uncited); that match is not verified.`;
  const centre = h.ground(0, 0);
  console.error(`arnala: DEM ground at the outline centroid ${Number.isFinite(centre) ? centre.toFixed(1) : 'n/a'} m`);

  const keep = ['outline', 'wall-3', 'water-6', 'coastline-2', 'sea-0', 'sea-1'];
  carryOver(T, '1737', keep, { note: 'the present mapped outline, wall line, reservoir and coast are assumed unchanged since the Maratha rebuilding ordered in 1737 (Wikipedia); no plan of that date was found' });

  T.eras = [
    { id: '1737', year: '1737', label: 'Maratha rebuilding', short: '1737', lens: 'none',
      summary: 'Arnala after the Marathas took the island (28 March 1737) and Peshwa Bajirao I ordered a new fort, shown as the present mapped outline, wall line and reservoir carried back.',
      basis: 'Wikipedia: after an assault on 28 March 1737 Bajirao I ordered Shankaraji to build a new fort; a Portuguese nobleman had begun an earlier fort (planned 700 x 700 ft, about 210 x 210 m) that was never completed. The drawn fort is today\'s mapped line carried back 290 years, marked inferred.',
      conjecture: 'No plan or dated image was found. The Maratha fort is said to have had 10 bastions with one standing (uncited) and a north gate; none has a plan position, so none is drawn. The mapped outline is about 239 x 219 m (3.8 ha), a little larger than the unbuilt Portuguese plan.',
      sources: [],
      facts: ['Wikipedia: the Portuguese held the island from the 1530s for about two centuries; the Marathas took it in 1737; the British captured it on 18 January 1781 and it returned to the Marathas by the Treaty of Salbai.', 'Wikipedia gives the end of Maratha rule as 1817 in the text and 1818 in the infobox.'] },
    { id: 'today', year: 'Today', label: 'Ruined island fort', short: 'Ruin', lens: 'none',
      summary: 'A protected ruin on Arnala island at the mouth of the Vaitarna, with the mapped outline, wall line, reservoir, one building and village paths.',
      basis: 'The OSM outline, wall line, reservoir, building, six paths and the island coast with the sea derived from it.',
      conjecture: 'Heights are unknown (kerb-high). The mapped paths meet the wall line in two places that could be openings, but no gate is mapped, so the enclosure stays sealed.',
      sources: [],
      facts: ['Wikipedia: declared a National Protected Monument on 26 May 1909 (uncited); the fort is in disrepair.', 'Wikipedia: the main entrance faces roughly north with a stone doorway carved with sharabhas and elephants; a plaque near it records the building (uncited). Not placed.'] },
  ];
}
