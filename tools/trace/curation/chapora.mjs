// Curation for Chapora (batch 1). Evidence and conflicts: docs/research/chapora-pass.md.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline-only';
export const HEADER = [
  'Chapora Fort, Bardez, Goa. Hand-curated trace (tier T1, three dated eras; T2 blocked: no plan or photograph could be registered).',
  'Base: data/traces/chapora.trace.json (OpenStreetMap ODbL ways named in each src; Terrarium z15 tiles, ~30 m SRTM-derived).',
  'Curation: tools/trace/curation/chapora.mjs. The only fort geometry is the mapped perimeter, OSM relation 15959326 (about 296 x 198 m); it is not a measured wall centreline. Wall, gate, bastion and tunnel positions and all heights are unknown and not drawn.',
  'The mapped wall ways north and south of the fort belong to the village and jetty, not the fort. Historic eras carry the perimeter, coast and sea back unchanged and say so in each element note.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort perimeter · mapped (OSM relation 15959326), not a wall survey';
  h.byId('outline').note = 'Outer ring of the OSM relation edited 2024-10-18; compared by eye with Lopes fig. 25 (2014 Google Earth annotation). Its two round and three angular projections are not individually identified as bastions';

  const keep = ['outline', 'coastline-12', 'coastline-47', 'coastline-60', 'sea-0', 'sea-1'];
  carryOver(T, '1617', keep, { note: 'present mapped line assumed unchanged since 1617; no earlier plan was found' });
  carryOver(T, '1717', keep, { note: 'present mapped line assumed unchanged since 1717; no earlier plan was found' });

  T.eras = [
    { id: '1617', year: 1617, label: 'Fort of 1617', short: '1617', lens: 'none',
      summary: 'The Portuguese border watch-post above the Chapora river mouth, on the site of an earlier Muslim structure.',
      basis: 'The 1617 date and the earlier structure are from the Goa Government page; Wikipedia gives 1617 as completion and credits Adil Shah with the first fort. The drawn lines are the present mapped perimeter, coast and sea.',
      conjecture: 'The 1617 fort is not documented in plan, so the present perimeter is carried back (inferred) and may not be the 1617 extent. No wall, gate, bastion or building is placed.',
      sources: ['CHA-01', 'CHA-02', 'CHA-03', 'CHA-04', 'CHA-07'],
      facts: ['Builder is disputed: Portuguese in 1617 on an earlier Muslim structure (Goa Government) versus a fort of Adil Shah, completed 1617 (Wikipedia).', 'Walls follow the higher slopes and use the terrain instead of a ditch (Wikipedia, undated).'] },
    { id: '1717', year: 1717, label: 'Portuguese rebuild', short: '1717', lens: 'none',
      summary: 'The Portuguese retake the fort from the Marathas and rebuild it, adding bastions and a tunnel to the shore and river bank.',
      basis: 'The 1717 return and rebuild are from the Goa Government page and Wikipedia; the bastions and tunnel are from Wikipedia only. Drawn lines are the present mapped perimeter, coast and sea.',
      conjecture: 'Which projection of the perimeter is a 1717 bastion is not established, and no tunnel course is known, so neither is drawn. The perimeter is a present line carried back.',
      sources: ['CHA-01', 'CHA-02', 'CHA-03', 'CHA-04', 'CHA-07'],
      facts: ['Surrendered to Sambhaji in 1684 (Goa Government); captured by the Bhonsle Marathas in 1739 and regained by the Portuguese in 1741 when Pernem was handed over (both pages).', 'Cylindrical turrets on irregularly spaced bastions with large embrasures; a small, narrow main gate at the top of a steep track (Wikipedia, undated).'] },
    { id: 'today', year: 'Today', label: 'Ruin above the river', short: 'Present', lens: 'none',
      summary: 'A ruined laterite fort, abandoned by the Portuguese in 1892, now a visitor site above Chapora village and jetty.',
      basis: 'Everything is a present OpenStreetMap way or the Terrarium DEM, named in its note.',
      conjecture: 'Only the perimeter and footpaths exist inside the fort in OSM; wall faces, gates, tunnel mouths and heights are not mapped, so none are drawn. The DEM is ~30 m and cannot show cliffs or ramparts.',
      sources: ['CHA-02', 'CHA-04', 'CHA-05', 'CHA-06'],
      facts: ['Two tunnel heads survive and Muslim tombstones lie on the southern slope; positions not established (Goa Government).', 'The Portuguese abandoned the fort in 1892 (both pages). The former chapel (St Anthony per Wikipedia) has disappeared.'] },
  ];
}
