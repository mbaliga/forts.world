// Source-backed route topology with separately graded modern geographic anchors.
// The route line is not digitized from the scroll; the router supplies illustrative geometry.
export const MUGHAL_DELHI_KANDAHAR = {
  id: 'mughal-delhi-kandahar-c1770',
  title: 'Shahjahanabad (Delhi) → Kandahar via Lahore and Kabul',
  period: 'probably c. 1770–80; manuscript dating remains uncertain',
  sequenceEvidence: 'documented',
  geometryEvidence: 'inferred procedural line; not georeferenced from the scroll',
  source: 'https://press.uchicago.edu/books/HOC/HOC_V2_B1/HOC_VOLUME2_Book1_chapter17.pdf',
  sourceLocator: 'South Asian Cartography, pp. 436–37; plate 32',
  anchors: [
    {name:'Shahjahanabad (Delhi)', lon:77.241, lat:28.656, kind:'fort reference', positionEvidence:'inferred project fort coordinate'},
    {name:'Lahore', lon:74.315, lat:31.588, kind:'fort reference', positionEvidence:'inferred project fort coordinate'},
    {name:'Kabul', lon:69.193, lat:34.502, kind:'fort reference', positionEvidence:'inferred project fort coordinate'},
    {name:'Kandahar', lon:65.71013, lat:31.61332, kind:'modern city anchor, not historic fort', positionEvidence:'modern GeoNames city coordinate', positionSource:'https://www.geonames.org/1138335/kandah-r.html'},
  ],
  notes: [
    'The scholarly description identifies the itinerary as Shahjahanabad to Kandahar via Lahore and Kabul.',
    'The scroll depicts towns, forts, sarays, branch roads, villages, rivers, hills, mountains, vegetation, gardens and kos minars along the route.',
    'The published description provides the route sequence and feature classes, but this implementation has not registered the scroll image to geographic control points.',
  ],
};

// Branches named in published Silk Roads / Uttarapatha accounts. The ordered
// node lists preserve source claims; rendered connectors are schematic modern
// anchor-to-anchor lines and must never be read as surveyed road alignments.
export const DOCUMENTED_CORRIDOR_STRANDS = [
  {
    id: 'srinagar-gilgit-karakoram-approach',
    name: 'Srinagar–Gilgit · proposed Karakoram approach',
    period: 'Broad proposed connection; not a dated, pass-by-pass itinerary',
    nodes: [
      ['historic', 'srinagar-kashmir'],
      ['historic', 'gilgit-city'],
    ],
    evidence: 'The ASI UNESCO Tentative List account names a proposed Silk Roads connection via Srinagar, Gilgit and the Karakoram Range. This pair of city anchors shows only the named approach; it does not locate a Karakoram crossing or imply a surveyed route.',
    source: 'https://whc.unesco.org/en/tentativelists/5492/',
    sourceLabel: 'ASI submission to UNESCO, Silk Road Sites in India (2010 Tentative List)',
  },
  {
    id: 'uttarapatha-bactria-western-branch',
    name: 'Uttarapatha to Bactria · western branch',
    period: 'Ancient network; the source describes a broad historical connection, not one dated itinerary',
    nodes: [
      ['historic', 'indraprastha-delhi'],
      ['heritage', 'taxila-dharmarajika'],
      ['heritage', 'pushkalavati-bala-hisar'],
      ['historic', 'purushapura-peshawar'],
      ['historic', 'kapisa-begram'],
      ['historic', 'balkh-bactria'],
    ],
    evidence: 'The Archaeological Survey of India submission to UNESCO describes an Uttarapatha city network and a proposed Indraprastha route through Taxila, Pushkalavati, Purushapura and Kapisa toward Bactria. Node positions mix archaeological component coordinates with broad modern city anchors; each connector is schematic.',
    source: 'https://whc.unesco.org/en/tentativelists/5492/',
    sourceLabel: 'ASI submission to UNESCO, Silk Road Sites in India (2010 Tentative List)',
  },
  {
    id: 'hadda-bamiyan-balkh-branch',
    name: 'Hadda–Kapisa–Bamiyan–Balkh branch',
    period: 'Broad proposed branch; no single campaign date or surveyed alignment asserted',
    nodes: [
      ['historic', 'hadda-buddhist-landscape'],
      ['historic', 'kapisa-begram'],
      ['heritage', 'bamiyan-valley'],
      ['historic', 'balkh-bactria'],
    ],
    evidence: 'The ASI UNESCO Tentative List account names Hadda, Kapisa, Bamiyan and Balkh in a proposed connection between India and Bactria. UNESCO independently describes Bamiyan as a Silk Roads stopping place via Bactria. The connectors express the proposed sequence only, not exact roads.',
    source: 'https://whc.unesco.org/en/tentativelists/5492/',
    supportingSource: 'https://whc.unesco.org/en/list/208/',
    sourceLabel: 'ASI submission to UNESCO (2010); UNESCO Bamiyan Valley property',
  },
  {
    id: 'merv-neyshabur-rey',
    name: 'Merv–Neyshabur–Rey · Iranian Silk Roads strand',
    period: 'UNESCO describes this as one route strand; dates and exact alignment vary by period',
    nodes: [
      ['historic', 'merv-oasis'],
      ['historic', 'neyshabur-city'],
      ['historic', 'rey-city'],
    ],
    evidence: 'A UNESCO overview describes an Iranian route line from Merv to Neyshabur and then Rey. Rey is anchored at the archaeological city area, not central Tehran. These straight connectors are schematic and are not a reconstructed road.',
    source: 'https://whc.unesco.org/en/documents/179475',
    sourceLabel: 'UNESCO, The Silk Roads',
  },
];
