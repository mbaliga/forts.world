// Curation for Reis Magos (batch 1). Evidence and conflicts: docs/research/reis-magos-pass.md.
// The hand level (src/levels/reis-magos-hand.js) is kept; its provisional stair, pavilions, gate and church mass are NOT carried here
// because they are invented placements. Only mapped lines and documented dates are drawn.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Reis Magos Fort, Bardez, Goa. Hand-curated trace (tier T1, three dated eras; T2 blocked: no plan or photograph could be registered).',
  'Base: data/traces/reis-magos.trace.json (OpenStreetMap ODbL ways named in each src; Terrarium z15 tiles, ~30 m SRTM-derived).',
  'Curation: tools/trace/curation/reis-magos.mjs. The mapped perimeter (way 194550880) is a plan line, not a wall survey. No gate, stair, pavilion, church mass or height is drawn: none is tied to a plan or sourced height.',
  'Historic eras carry the perimeter, coast and sea back unchanged (and the church footprint from 1707) and say so in each element note.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort perimeter · mapped (OSM way 194550880), not a wall survey';
  h.byId('outline-wall').name = 'Perimeter wall line · mapped, elevation unknown';
  h.byId('building-8').name = 'Reis Magos Church · mapped footprint, mass not drawn';
  h.byId('retaining-wall-13').name = 'River-road retaining wall · mapped, not identified as fort rampart';

  const base = ['outline', 'outline-wall', 'coastline-3', 'coastline-4', 'sea-0'];
  carryOver(T, '1551', base, { note: 'present mapped line assumed unchanged since 1551; no earlier plan was found' });
  carryOver(T, '1707', [...base, 'building-8'], { note: 'present mapped line assumed unchanged since 1707; no earlier plan was found',
    modify: { 'building-8': { name: 'Reis Magos Church · footprint carried back, inferred (church dated 1550 by Wikipedia; the present building\'s date is not established)' } } });

  T.eras = [
    { id: '1551', year: 1551, label: 'Fort of 1551', short: '1551', lens: 'none',
      summary: 'The Portuguese fort has just been raised to guard the narrowest point of the Mandovi mouth.',
      basis: 'The 1551 date is from the Goa Government page and Wikipedia. Drawn lines are the present mapped perimeter, coast and sea.',
      conjecture: 'No plan of the 1551 fort was found, so the present perimeter is carried back (inferred) and may not be the 1551 extent. No wall face, gate, stair or building is placed.',
      sources: ['REIS-01', 'REIS-02', 'REIS-03', 'REIS-04', 'REIS-07', 'REIS-16'],
      facts: ['Bardez conquered 1541; the Franciscan church is dated 1550 (Wikipedia). The fort originated as an Adil Shah outpost in 1493 (Wikipedia only); unreconciled with the 1551 date.', 'Sturdy laterite walls with Portuguese turrets (Goa Government); positions not given.'] },
    { id: '1707', year: 1707, label: 'Rebuilt fort', short: '1707', lens: 'none',
      summary: 'The fort is re-erected during the wars with the Marathas, who never take it.',
      basis: 'The 1707 rebuild is from Wikipedia and the Goa Government account; the 33 guns are from the Goa Government account, undated.',
      conjecture: 'Nothing is known of what 1707 changed, so the perimeter is the same present line. The church footprint is the present mapped one carried back and is inferred. Gun positions are not known and none are drawn.',
      sources: ['REIS-01', 'REIS-02', 'REIS-03', 'REIS-04', 'REIS-06', 'REIS-16'],
      facts: ['Defended by 33 guns with accommodation for a small garrison (Goa Government, undated).', 'British army occupied it briefly 1798-1813 (Wikipedia).', 'A steep stair between the upper and waterside parts is described in a field study but its plan is not published (Kiperman pp. 183-184).'] },
    { id: 'today', year: 'Today', label: 'Restored fort and church', short: 'Present', lens: 'none',
      summary: 'A restored monument above the Mandovi: jail until 1993, restoration from 2008, with the church, cemetery and visitor entry mapped around it.',
      basis: 'Everything is a present OpenStreetMap way or the Terrarium DEM, named in its note.',
      conjecture: 'The hand-drawn gate, stair, pavilions and church mass of the earlier scene are not carried over: none has a plan or survey position. Heights are unknown (kerb-high). The DEM is ~30 m and cannot show terraces or the waterfront.',
      sources: ['REIS-04', 'REIS-06', 'REIS-07', 'REIS-09', 'REIS-11', 'REIS-12', 'REIS-13', 'REIS-14', 'REIS-15', 'REIS-16'],
      facts: ['Used as a jail from 1900 and abandoned in 1993; restoration began in 2008 with INTACH, the Helen Hamlyn Trust and the Government of Goa, architect Gerard da Cunha (Wikipedia).', 'An on-site visitor plan names Hall 2 and a craft centre inside the citadel; not placed (REIS-15 photograph, not viewed at scale).'] },
  ];
}
