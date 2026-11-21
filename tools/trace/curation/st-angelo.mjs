// Curation for St Angelo's Fort, Kannur (batch alpha-T). Evidence and conflicts: docs/research/st-angelo-pass.md.
// No plan, survey drawing or dated image was found, and no source read gives a wall height, area or overall dimension, so this is an honest T1 with no constructed layer
// (like Daulatabad): the mapped outline and coast are drawn as OSM maps them and carried back to the Dutch capture of 1663, marked inferred.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'St Angelo\'s Fort, Kannur, Kerala. Hand-curated trace, tier T1 (OSM-mapped outline and coast; no plan, no heights; T2 and a constructed layer are blocked until a plan and a height source are found).',
  'Base: data/traces/st-angelo.trace.json (OSM ODbL; Terrarium z15 every 5 m, ~30 m SRTM-derived; sea derived from the OSM coastline and checked against the DEM; bathymetry clamped to -3 m).',
  'The OSM outline (way 542192379, 28 vertices, about 2.8 ha) is drawn as a plan line only: no wall, bastion or gate is mapped, so none is drawn.',
  'Eras: 1663 draws the outline and coast; today adds the mapped buildings, paths, the cantonment zone and the waterway; the 1663 outline is carried back, marked inferred.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  h.byId('outline').name = 'Fort outline · mapped (OSM way 542192379), plan line only';
  const sea = h.all('water').filter((w) => w.water === 'sea').map((s) => s.id);
  const coast = h.all('coastline').map((c) => c.id);
  carryOver(T, '1663', ['outline', ...sea, ...coast], { note: 'the mapped outline and coast are assumed to mark the fort the Dutch took from the Portuguese on 15 February 1663; the Dutch bastions (Hollandia, Zeelandia, Frieslandia) are not mapped and are not drawn, and no plan of that date was found' });
  T.eras = [
    { id: '1663', year: '1663', label: 'Dutch capture', short: '1663', lens: 'none',
      summary: 'The Portuguese laterite fort at the moment the Dutch East India Company took it (15 February 1663), shown as the present mapped outline and coast carried back.',
      basis: 'Wikipedia: wooden fort completed 30 October 1505 (foundation 24 October), a stone fort begun in 1507, taken by the Dutch on 15 February 1663, sold to Ali Raja of Arakkal in 1772, seized by the British in 1790.',
      conjecture: 'No plan or dated image of the fort was found open (a painting of the fort and a ferry is held by the Rijksmuseum, not read). The mapped outline is carried back about 360 years. The three bastions Wikipedia names (Hollandia, Zeelandia, Frieslandia) are credited to the Dutch and are not placed.',
      sources: [],
      facts: ['Wikipedia: Goncalo Gil Barbosa laid the foundation stone on 24 October 1505 and the wooden fort was completed on 30 October 1505; Francisco de Almeida began a stone fort in 1507. A Kerala Tourism page credits Almeida with building the fort in 1505: the two differ.', 'Built of laterite; a Kerala Tourism page calls it triangular, which this pass did not test against the 28-vertex mapped outline.', 'Wikipedia names three Dutch bastions (Hollandia, Zeelandia, Frieslandia) and a stair to the wall top; no wall height, length or area is given by either source.'] },
    { id: 'today', year: 'Today', label: 'Protected monument', short: 'Monument', lens: 'none',
      summary: 'An ASI-protected laterite fort on the Arabian Sea about 3 km from Kannur, beside the Kannur Cantonment, with a restored chapel and a sea wall.',
      basis: 'The OSM outline, the coast and derived sea, 11 building footprints, 7 paths, the Kannur Cantonment zone and a waterway.',
      conjecture: 'Every height is unknown (kerb-high). The OSM footprints are unnamed, so which is the chapel, barracks or stable is not stated. No gate is mapped.',
      sources: [],
      facts: ['Wikipedia: used as the chief British military station in Malabar until 1947; thousands of cannonballs were found in an ASI-led excavation in 2015.', 'Kerala Tourism lists a moat, ammunition dumps, underground jails and tunnels and a sea wall; none is mapped or dated in either source.'] },
  ];
}
