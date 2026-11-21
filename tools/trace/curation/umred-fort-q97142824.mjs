// Curation for Umred Fort (alpha-U batch, 2026-11-15). Evidence and conflicts: docs/research/umred-pass.md.
// No plan or survey was read. The OSM outline (way 968095157, "Gond Kalin Killa") is a strip 199 x 58 m, 8,238 m2. The Durgbharari page says only one side of the ramparts and five bastions survive and the original size cannot be estimated, so the strip is the surviving rampart line, not a closed circuit.
// The builder date (16th century, Gond king Karanshah of Chanda) is "believed", uncited, so the era is marked inferred.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Umred Fort (Gond Kalin Killa), Nagpur district, Maharashtra. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/umred-fort-q97142824.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived).',
  'The outline is OSM way 968095157, a 199 x 58 m strip; the Gaon Talaw (way 184067367, 38 ha) gets a derived surface level. The five bastions, the tomb, the school and garden positions named by Durgbharari are not mapped as bastions and are not drawn.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  h.byId('outline').name = 'Surviving rampart strip · mapped (OSM way 968095157), "Gond Kalin Killa"';
  h.byId('water-7').name = 'Gaon Talaw · mapped (OSM way 184067367)';
  h.byId('zone-13').name = 'Farmland · mapped (OSM way 968095155)';
  h.byId('building-14').name = 'Prachin Shiv Mandir · mapped footprint (OSM way 968096684)';
  const c = h.ground(0, 0);
  console.error(`umred: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m`);

  carryOver(T, '16c', ['outline'], { note: 'the surviving mapped strip is assumed to lie on the 16th-century fort; the builder and date are uncited belief and no plan was found' });

  T.eras = [
    { id: '16c', year: '16th c.', label: 'Gond fort (believed)', short: '16th c.', lens: 'none',
      summary: 'Umred Fort in the 16th century, believed to be built by the Gond king Karanshah of Chanda, shown as the surviving mapped rampart strip carried back.',
      basis: 'Durgbharari (Suresh Nimbalkar): believed built in the 16th century by Karanshah of Chanda; later held by the Bhosles of Nagpur; British rule from 1850. No external source is cited for the origin.',
      conjecture: 'No plan or dated image was found. The page describes brick ramparts with five cannon bastions, but the ramparts and gates are largely destroyed, so the original size is unknown; only the mapped strip is drawn.',
      sources: [],
      facts: ['Durgbharari: bastion 1 holds the tomb of Hazrat Baba Chandshah Wali, bastion 3 is on school grounds, bastion 4 in a municipal garden, bastion 5 has an old Shiv temple and a well; none is mapped as a bastion.', 'The mapped strip is 199 x 58 m, 8,238 m2; no written size exists to compare.'] },
    { id: 'today', year: 'Today', label: 'Rampart remains in the town', short: 'Remains', lens: 'none',
      summary: 'The surviving rampart strip in Umred town beside the Gaon Talaw, with the old Shiv temple, farmland and the town roads.',
      basis: 'The OSM outline, the lake, a temple footprint, a farmland patch and fifteen roads.',
      conjecture: 'Heights are unknown (kerb-high); the terrain is smoothed SRTM. Only one side of the ramparts survives per Durgbharari.',
      sources: [],
      facts: ['Durgbharari: the lake inside the fort serves nearby settlements; the second bastion\'s ramparts are heavily demolished.'] },
  ];
}
