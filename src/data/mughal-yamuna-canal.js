// Locations explicitly identified in descriptions of the Mughal Nahr-i Bahisht map.
// Historic feature identity comes from the map scholarship; coordinates are separate
// modern city anchors and must not be mistaken for registered eighteenth-century points.
const mapSource = 'https://press.uchicago.edu/books/HOC/HOC_V2_B1/HOC_VOLUME2_Book1_chapter17.pdf';
export const MUGHAL_CANAL_SETTLEMENTS = [
  {
    id: 'mughal-canal-benawas-vicinity-c1760', name: 'Benawas · Khizrabad vicinity (broad anchor)', kind: 'town', region: 'Yamuna corridor',
    lat: 30.2995, lon: 77.4957,
    pos: 'The map says Benawas is near Khizrabad; marker uses the modern Khizrabad village coordinate as a broad regional anchor, not Benawas itself',
    positionSource: 'https://www.mapsofindia.com/villages/haryana/yamuna-nagar/chhachhrauli/khizrabad.html', source: mapSource,
    phases: [{ from: 1760, to: 1761, note: 'The canal map begins at Benawas, described as near Khizrabad and near where the Yamuna enters the North Indian Plain. This marker represents only the nearby modern anchor.', ev: 'documented', source: mapSource }],
  },
  {
    id: 'mughal-canal-karnal-c1760', name: 'Karnal · Mughal canal-map town', kind: 'town', region: 'Yamuna corridor',
    lat: 29.69197, lon: 76.98448,
    pos: 'The map names Karnal; point is a modern GeoNames city anchor, not a period footprint',
    positionSource: 'https://www.geonames.org/1267708/karnal.html', source: mapSource,
    phases: [{ from: 1760, to: 1761, note: 'Karnal is named in the Mughal canal-map description and identified in figure 17.32.', ev: 'documented', source: mapSource }],
  },
  {
    id: 'mughal-canal-panipat-c1760', name: 'Bhu Ali Qalandar · Panipat urban anchor', kind: 'town', region: 'Yamuna corridor',
    lat: 29.387471, lon: 76.968246,
    pos: 'The canal map identifies the mausoleum; point is the modern Panipat city anchor, not the tomb coordinate',
    positionSource: 'https://mapcarta.com/Panipat', source: mapSource,
    phases: [{ from: 1760, to: 1761, note: 'The map excerpt identifies Bhu Ali Qalandar mausoleum; Haryana Tourism places the tomb in Panipat. City-centre anchor only.', ev: 'documented', source: mapSource }],
  },
];

// Source-backed relationships suitable for a strategic event/register layer.
// These records intentionally have no longitude/latitude: the narrative sources
// identify features and relative position, but do not georeference these labels.
export const MUGHAL_CANAL_RELATIONS = [
  { id: 'benawas-start', label: 'Benawas near Khizrabad', relation: 'Canal-map origin', position: 'Regional anchor only; Benawas coordinate unknown', evidence: 'documented', source: 'Ataullah, canal-map discussion; History of Cartography, ch. 17' },
  { id: 'approach-to-shahjahanabad', label: 'Canal approaches Shahjahanabad', relation: 'Canal route toward Delhi Gate', position: 'Order documented; exact canal alignment not registered', evidence: 'documented', source: 'History of Cartography, ch. 17, fig. 17.32; Ataullah, canal-map discussion' },
  { id: 'sarai-cluster', label: 'Sarai Sita Ram · Sarai Ruhilla Khan', relation: 'Marked just beyond the point where the canal entered the city ramparts', position: 'Relative to ramparts only; exact coordinates unknown', evidence: 'documented', source: 'Ataullah, canal-map discussion' },
  { id: 'delhi-gate-terminus', label: 'Delhi Gate of Shahjahanabad', relation: 'Canal-map terminus', position: 'Named endpoint; map not georeferenced', evidence: 'documented', source: 'Ataullah, canal-map discussion' },
  { id: 'canal-side-infrastructure', label: 'Bridges · distributaries · weirs', relation: 'Along or across the canal', position: 'Feature class only; individual locations unknown', evidence: 'documented', source: 'History of Cartography, ch. 17, fig. 17.32; Ataullah, canal-map discussion' },
  { id: 'canal-side-landscape', label: 'Gardens · orchards · plantations', relation: 'Along canal banks outside Kabuli Darwaza', position: 'Relative relationship only; extents unknown', evidence: 'documented', source: 'Ataullah, canal-map discussion' },
];
