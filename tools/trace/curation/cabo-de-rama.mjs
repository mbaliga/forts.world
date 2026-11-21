// Curation for Cabo de Rama (batch 1). Evidence and conflicts: docs/research/cabo-de-rama-pass.md.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline-only';
export const HEADER = [
  'Cabo de Rama, Canacona, Goa. Hand-curated trace (tier T1, three dated eras; T2 blocked: no plan or photograph could be registered).',
  'Base: data/traces/cabo-de-rama.trace.json (OpenStreetMap ODbL ways named in each src; Terrarium z15 tiles, ~30 m SRTM-derived).',
  'Curation: tools/trace/curation/cabo-de-rama.mjs. No wall line, gate, bastion or height is sourced to a mapped element, so none is drawn. The mapped boundary (way 265848074) is a property outline; its OSM 60 m concrete retaining-wall tag is not accepted as evidence.',
  'Historic eras carry the boundary, coast, sea and (from 1805) the church footprint back unchanged and say so in each element note.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort site boundary · mapped property outline, not a wall line';
  h.byId('outline').note = 'OSM way 265848074 (about 179,000 m²). OSM tags it a 60 m concrete retaining wall; that tag is not accepted as evidence of any wall';
  h.byId('building-9').name = 'St Anthony Church · mapped footprint, date unknown';
  h.byId('road-8').name = 'Entrance passage · mapped footway, tunnel=yes';

  const base = ['outline', 'coastline-3', 'coastline-4', 'sea-0', 'sea-1', 'sea-2', 'marker-1'];
  carryOver(T, '1763', base, { note: 'present mapped line assumed unchanged since the Portuguese rebuild; no earlier plan was found' });
  carryOver(T, '1805', [...base, 'building-9'], { note: 'present mapped line assumed unchanged since 1805; no earlier plan was found',
    modify: { 'building-9': { name: 'St Anthony Church · footprint carried back, inferred (the chapel is documented, its position and this footprint\'s date are not)' } } });

  T.eras = [
    { id: '1763', year: 1763, label: 'Portuguese take and rebuild', short: '1763', lens: 'none',
      summary: 'The Portuguese have taken the headland fort from the Raja of Sonda and begin rebuilding it.',
      basis: 'The 1763 date is from the Goa Government page and Wikipedia; the drawn lines are the present OpenStreetMap boundary and coast.',
      conjecture: 'No plan from 1763 or earlier was found. The boundary, coast and sea are present lines carried back (inferred). The Sonda fort before 1763 is undated and its fabric unknown. No wall, gate, bastion or building is placed.',
      sources: ['CAB-01', 'CAB-02', 'CAB-06', 'CAB-09', 'CAB-10'],
      facts: ['Portuguese works reported: citadel, 21 guns, barracks, commander\'s quarter, chapel (Goa Government, Wikipedia); none dated or placed.', 'Thesis figures reported earlier, not re-read here: front walls about 5 m high, 1.60-1.75 m thick; 15 m square tank (Phaldesai 2001).'] },
    { id: '1805', year: 1805, label: 'British occupation', short: '~1805', lens: 'none',
      summary: 'Britain holds the fort during the Napoleonic wars; the Portuguese chapel is part of the works.',
      basis: 'Occupation is from the Goa Government page and Outlook Traveller, which give conflicting dates (1797-1802, 1803-1813, 1792-1813); 1805 is a mid-point label only.',
      conjecture: 'The occupation dates conflict, so this era is a label, not a dated plan. The church footprint is the present one carried back and is inferred. Nothing else is shown to have changed.',
      sources: ['CAB-01', 'CAB-02', 'CAB-03', 'CAB-06', 'CAB-10'],
      facts: ['A bastion served as a prison until 1955 (Goa Government, Wikipedia, Outlook); start date not found.'] },
    { id: 'today', year: 'Today', label: 'Ruined fort and village edge', short: 'Present', lens: 'none',
      summary: 'A protected ruin on the headland: partly restored entrance, a wall section down since the 2021 monsoon, a stalled 2022 restoration.',
      basis: 'Everything is a present OpenStreetMap way or the Terrarium DEM, named in its note.',
      conjecture: 'Wall, bastion, gate, tank and heights are not drawn: no mapped wall line or sourced height exists. The DEM is ~30 m and cannot show the ditch or cliff face.',
      sources: ['CAB-02', 'CAB-03', 'CAB-06', 'CAB-07', 'CAB-08', 'CAB-11', 'CAB-12', 'CAB-13'],
      facts: ['Main entrance reconstructed (date not given); part of a wall collapsed in the 2021 monsoon (Herald Goa).', 'A 2022 restoration plan stalled over a permission dispute (Herald Goa, Knocksense).'] },
  ];
}
