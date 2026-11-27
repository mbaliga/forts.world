// Curation for Spiš Castle (Spišský hrad), Slovakia. Evidence and conflicts: docs/research/spis-castle-q205558-pass.md.
// No plan or survey drawing was read (the sandbox cannot reach Commons plan search); the geometry is the OSM mapping, which is unusually rich here
// (the castle perimeter ring, the named gates, palace, chapel, bergfried and towers). Dated phases come from written descriptions only.
import { carryOver, levelInlandWaters, gateTowers, rectAt } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'mapped-constructed';
export const HEADER = [
  'Spiš Castle (Spišský hrad), Spišské Podhradie, Slovakia. Hand-curated trace, tier T1 for the documented layer (OSM-mapped perimeter, gates, palace, chapel, bergfried; no plan read, no heights) plus a schematic constructed layer.',
  'Base: data/traces/spis-castle-q205558.trace.json (OSM ODbL; Terrarium z15 every 5 m, ~30 m SRTM-derived). OSM maps the whole castle perimeter ring (way 219698596, about 3.6 ha), the west curtain, the middle-ward wall, the lower-ward walls and the named gates and buildings.',
  'The constructed (schematic) layer in `constructed[]` follows those OSM lines and footprints with assumed heights, dated from written descriptions (medievalheritage.eu, UNESCO nomination text, Wikipedia). Documented heights: none.',
  'Eras: 1250 (upper castle after the Mongol invasion), 1500 (largest extent, Zapolya-era remodelling), today (ruin after the 1780 fire).',
];

const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const cen = (poly) => [+(poly.reduce((s, p) => s + p[0], 0) / poly.length).toFixed(1), +(poly.reduce((s, p) => s + p[1], 0) / poly.length).toFixed(1)];
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = dist(p, q); if (d < best[0]) best = [d, q]; } return best; };
const plen = (p) => p.slice(1).reduce((s, q, i) => s + dist(q, p[i]), 0);

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  const ring = h.byId('wall-35').path;                       // OSM way 219698596, the whole castle perimeter at the wall centre line
  const OSM = (id) => h.byId(id).src;
  // Terrain grid is -200..200 m: documented lines that leave it would hang in the air (STANDARD.md), so the perimeter ring is clipped to the in-grid chain
  // (its south-west lobe, the lower ward beyond about 195 m south, is lost) and the two thin lower-ward wall footprints that lie almost wholly outside are dropped.
  { const w = h.byId('wall-35'); w.path = ring.slice(15, 117); w.closed = false; w.note = 'Clipped to the 200 m terrain grid: the OSM ring continues about 130 m further south-west round the lower ward, outside the DEM, and is not drawn.'; h.remove('wall-88', 'wall-89'); }

  for (const id of ['marker-3', 'marker-4']) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'this mapped cannon stands on the steep slope at the south-west edge of the 200 m terrain grid, where the walkable surface ends.'; }
  // ---- documented layer: names and notes on what OSM labels --------------------------------------------------------
  const nm = (id, name, note) => { const e = h.byId(id); e.name = name; if (note) e.note = note; };
  nm('outline-wall', 'West curtain of the upper castle · mapped (OSM way 1559860585), elevation unknown', 'Tagged historic=citywalls with the description "13th-century rampart".');
  nm('wall-35', 'Castle perimeter ring · mapped (OSM way 219698596), about 3.6 ha, elevation unknown');
  nm('wall-14', 'Romanesque palace · mapped footprint (OSM way 112672671)');
  nm('wall-9', 'Castle chapel (hradna kaplnka) · mapped footprint (OSM way 112672638)', 'OSM tags it as the castle chapel; the present walls are the Gothic chapel of about 1470 that replaced a 13th-century one on the same site, and the footprint of the earlier chapel is not known.');
  nm('wall-38', 'Bergfried (round tower) · mapped footprint (OSM way 427851572), about 12 m across');
  nm('wall-91', 'Square residential tower · mapped footprint (OSM way 1559860581)');
  nm('wall-120', 'Semicircular tower ("bastion") · mapped footprint (OSM way 1559879120)');
  nm('wall-105', 'Renaissance arcades · mapped footprint (OSM way 1559860596)');
  nm('wall-107', 'Residential range along the west curtain ("Renaissance palace") · mapped footprint (OSM way 1559860598)');
  nm('wall-13', 'Lower gate · mapped footprint (OSM way 112672665)');
  nm('wall-16', 'Middle gate · mapped footprint (OSM way 112672676)');
  nm('building-95', 'Upper gate · mapped footprint (OSM way 1559860586)');
  nm('wall-8', 'Third castle gate (middle-ward south gatehouse) · mapped footprint (OSM way 112672636)');
  nm('building-82', 'Gate to the middle castle · mapped footprint (OSM way 1559841223)');
  nm('building-119', 'Barbican · mapped footprint (OSM way 1559870000)');
  nm('wall-86', 'Square tower on the lower-ward wall (OSM "residential tower") · mapped footprint (OSM way 1559841228)');
  nm('wall-17', 'Middle-ward west and south wall · mapped footprint ring (OSM way 112672677)');
  nm('wall-87', 'Lower-ward north-west wall · mapped footprint ring (OSM way 1559841230)');
  nm('zone-111', 'Castle cistern · mapped area (OSM way 1559860602)');

  // ---- eras on the documented layer -----------------------------------------------------------------------------------
  const keep1250 = ['outline', 'outline-wall', 'wall-38', 'wall-14', 'wall-9', 'wall-91', 'building-95'];
  const keep1500 = [...keep1250, 'wall-35', 'wall-17', 'wall-87', 'wall-86', 'wall-8', 'wall-13', 'wall-16', 'wall-120', 'wall-107', 'building-82', 'building-119', 'zone-111'];
  carryOver(T, '1250', keep1250, { note: 'the mapped upper-castle lines are assumed to follow the 13th-century fabric; the sources date the palace (1249), the bergfried (1270) and the rampart to the 13th century, but no plan of that date was read' });
  carryOver(T, '1500', keep1500, { note: 'present mapped lines assumed unchanged since the 15th century; the sources date the middle ward to 1370-80, the lower ward and Jiskra\'s tower to the first half of the 15th century and the Zapolya remodelling to the second half' });

  // ---- constructed (schematic) layer ------------------------------------------------------------------------------------
  const ALL = ['1250', '1500', 'today'], FROM1500 = ['1500', 'today'];
  const C = [];
  const mkWall = (id, path, name, hh, basis, eras, hnote, extra = {}) => C.push({ id, kind: 'wall', path, thick: 1.8, merlon: true, src: extra.src || 'inferred', ev: 'schematic', conf: 0.2, eras, name: `${name} · schematic, ${hh} m assumed`, basis, h: { v: hh, src: 'inferred', note: hnote }, ...extra.f });
  const WALL_RULE = 'illustrative: no wall height was read in any source; 7 m is a typical stone curtain of this scale, ending in a 1 m parapet and merlons';
  const LOW_RULE = 'illustrative: no wall height was read; 5.5 m for the lower ward, whose wall the source describes only as gun-looped';

  // upper castle
  const westCurtain = h.byId('outline-wall').path.slice(0, 22);
  mkWall('c-west-curtain', westCurtain, 'West curtain of the upper castle', 7, 'Drawn on the OSM way tagged "13th-century rampart" (way 1559860585), centre line of its west face. medievalheritage.eu: in the early 13th century a stone wall followed the rocky edges of the hilltop in a very irregular outline.', ALL, WALL_RULE, { src: OSM('outline-wall'), f: { replaces: ['outline-wall'], stands_for: 'outline-wall' } });
  const upperNE = ring.slice(47, 84);
  mkWall('c-upper-ring', upperNE, 'Upper-castle curtain on the north and east cliff edge', 7, 'Drawn on the OSM perimeter ring (way 219698596) from its south-east corner round the north end; the 13th-century wall followed the rocky edges of the hilltop (medievalheritage.eu). The wall line is the mapped one; whether the 13th-century wall stood exactly there is not shown.', ALL, WALL_RULE, { src: OSM('wall-35') });
  const closure = [[20.4, -44.6], [29, -48.5], [40.6, -53.4]];
  mkWall('c-upper-south', closure, 'South closing wall of the upper castle', 7, 'ASSUMED line between the south-east end of the mapped west curtain and the south end of the mapped east wall: no OSM wall is mapped across the gap, where the upper gate, the lower gate and the middle gate stand. medievalheritage.eu puts the upper-ward gatehouse in its southern corner.', ALL, WALL_RULE, { f: { conf: 0.1 } });
  // small outer bailey (after the Mongol invasion)
  const baileyW = ring.slice(94, 100);
  mkWall('c-bailey-west', baileyW, 'Small outer bailey west wall', 6, 'Drawn on the OSM perimeter ring (way 219698596) between the north-west corner of the lower wards and the upper castle. medievalheritage.eu: after 1241 a small outer bailey was added to the south-west of the upper ward, with a square residential tower on its north wall and a gate tower on its southern entrance.', ALL, 'illustrative: 6 m, one metre under the upper curtain', { src: OSM('wall-35') });
  mkWall('c-bailey-south', [[-50.5, -40.2], [-37, -42.5], [-26.1, -44.6]], 'Small outer bailey south wall', 6, 'The OSM middle-ward ring (way 112672677) carries a short cross wall at this place; here its centre line closes the small bailey on the south. Which phase built it is not stated in any source read.', ALL, 'illustrative: 6 m', { src: OSM('wall-17') });
  // middle ward (1370-80)
  const midSW = h.byId('wall-17').path.slice(0, 20);
  mkWall('c-middle-sw', midSW, 'Middle-ward south and west wall', 7, 'Drawn on the centre line of the OSM thin footprint (way 112672677). medievalheritage.eu: about 1370-80 under Louis the Great a larger outer bailey of about 150 x 60 m was added to the west and south, its walls crenellated and protected by a ditch and rampart.', FROM1500, WALL_RULE, { src: OSM('wall-17'), f: { replaces: ['wall-17'] } });
  const midE = ring.slice(22, 47);
  mkWall('c-middle-east', midE, 'Middle-ward east wall and foregate line', 7, 'Drawn on the OSM perimeter ring (way 219698596) from the third castle gate round the foregate bulge up to the upper gates. The foregate with a pit and drawbridge is named in medievalheritage.eu; the drawbridge itself is not drawn.', FROM1500, WALL_RULE, { src: OSM('wall-35') });
  // lower ward (first half of the 15th century)
  // The terrain grid covers only -200..200 m (data/traces), so the lower ward, which runs to about -320 m south, is clipped to the grid: walls beyond it would hang in the air.
  const inGrid = (p) => p[0] > -195 && p[0] < 195 && p[1] > -195 && p[1] < 195;
  const lowerW = ring.slice(99, 117);                                   // north-west wall of the lower ward, down to the grid edge
  const lowerE = ring.slice(15, 20);                                    // south-east wall of the lower ward, from the grid edge to the middle-ward corner
  if (![...lowerW, ...lowerE].every(inGrid)) throw new Error('lower ward piece leaves the terrain grid');
  const lowerLen = plen([...ring.slice(99, 135), ...ring.slice(0, 20)]);
  mkWall('c-lower-wall-nw', lowerW, 'Lower-ward north-west and west wall (inside the terrain grid)', 5.5, `Drawn on the OSM perimeter ring (way 219698596), cut where the terrain grid ends at 195 m south of the datum. The full mapped lower-ward ring is ${lowerLen.toFixed(0)} m long; medievalheritage.eu: a lower ward about 285 m long and up to 115 m wide, enclosed by a wall over 500 m long with gun loops and three square towers.`, FROM1500, LOW_RULE, { src: OSM('wall-35') });
  mkWall('c-lower-wall-se', lowerE, 'Lower-ward south-east wall (inside the terrain grid)', 5.5, 'Drawn on the OSM perimeter ring (way 219698596) from the grid edge to the middle-ward south corner; the rest of this wall lies beyond the 200 m terrain grid and is not drawn.', FROM1500, LOW_RULE, { src: OSM('wall-35') });

  // gates cut in constructed walls
  const gate = (id, wallId, wallPath, at, label, basis, eras, w = 3.6) => { const [d, q] = nearestOn(at, wallPath); C.push({ id, kind: 'gate', wall: wallId, at: [+q[0].toFixed(1), +q[1].toFixed(1)], w, src: 'inferred', ev: 'schematic', conf: 0.2, eras, name: `${label} · schematic opening, ${w} m`, basis: `${basis} Opening ${d.toFixed(0)} m from the mapped gate position, snapped to the wall; no gate form is drawn on any source read.` }); return q; };
  const gMid3 = gate('c-gate-third', 'c-middle-sw', midSW, cen(h.byId('wall-8').path), 'Third castle gate', 'OSM maps a square gatehouse footprint named "3rd Castle Gate" (way 112672636) at the middle-ward south end; medievalheritage.eu gives the middle ward a southern gatehouse with a large foregate.', FROM1500);
  C.push(...gateTowers({ wallPath: midSW, gateAt: gMid3, id: 'c-tower-third', r: 4, h: 11, hNote: 'illustrative: gate towers about 4 m above the 7 m wall', basis: 'Flanking towers of the south gatehouse of the middle ward (medievalheritage.eu: southern gatehouse with a large foregate); tower form, size and spacing are assumed, only the gate site is mapped.', eras: FROM1500, gap: 7 }));
  const gMidC = gate('c-gate-middle-castle', 'c-middle-sw', midSW, cen(h.byId('building-82').poly), 'Gate to the middle castle', 'OSM maps a small gate footprint named "gate to the middle castle" (way 1559841223) on the middle-ward west wall.', FROM1500, 3.2);
  C.push(...gateTowers({ wallPath: midSW, gateAt: gMidC, id: 'c-tower-midcastle', r: 3.2, h: 10, hNote: 'illustrative: 3 m above the 7 m wall', basis: 'Small flanking towers on the mapped gate to the middle castle; assumed, not described.', eras: FROM1500, gap: 6 }));
  const gUpper = gate('c-gate-upper-south', 'c-upper-south', closure, cen(h.byId('building-95').poly), 'Upper-castle south gate', 'The southern-corner gatehouse of the upper ward (medievalheritage.eu); OSM maps the "upper gate" (way 1559860586) just south of the assumed closing wall. The upper gate was rebuilt at the end of the 16th century.', ALL);
  const gLow = gate('c-gate-lower-ward', 'c-lower-wall-nw', lowerW, [-149, -172.5], 'Lower-ward west gate', 'medievalheritage.eu: the western of three square towers of the lower ward was a gatehouse with a portcullis. OSM maps a square tower at about (-149, -177) m (way 1559841228, tagged "residential tower"); whether it is this gatehouse is not stated, so the opening is placed at that tower.', FROM1500);
  C.push(...gateTowers({ wallPath: lowerW, gateAt: gLow, id: 'c-tower-lowergate', r: 4.5, h: 10, hNote: 'illustrative: 4.5 m above the 5.5 m lower wall', basis: 'Two towers either side of the lower-ward west gate, standing for the square gatehouse tower; its footprint is mapped at the same place, its form is not drawn.', eras: FROM1500, gap: 7, top: undefined }));

  // buildings on OSM footprints
  const bld = (id, src, name, hh, basis, eras, hnote, extra = {}) => C.push({ id, kind: 'building', poly: h.byId(src).poly || h.byId(src).path, roof: extra.roof || 'flat', merlon: extra.merlon, src: OSM(src), ev: 'schematic', conf: 0.2, eras, name: `${name} · schematic mass, ${hh} m assumed`, basis, h: { v: hh, src: 'inferred', note: hnote }, replaces: [src], unreachableOk: true, unreachableNote: extra.why || 'a solid schematic mass with no door or stair drawn; look at it from the courtyard.' });
  bld('c-palace', 'wall-14', 'Romanesque palace', 11, 'Raised on the mapped footprint (OSM way 112672671, 26 x 26 m, about 350 m2). medievalheritage.eu: a three-storey Romanesque palace on a rectangular plan on the highest northern point (store below, hall above, a wooden defensive porch on top, entrance in the west facade); Zapolya-era remodelling vaulted the lower storey. The timber porch and the burnt roof are not drawn.', ALL, 'assumed 3 storeys at about 3.7 m; no height read', { merlon: true });
  C.push({ id: 'c-bergfried-13c', kind: 'tower', at: cen(h.byId('wall-38').path), r: 6, merlon: true, src: OSM('wall-38'), ev: 'schematic', conf: 0.25, eras: ['1250'], name: 'Bergfried, 13th-century form · schematic, 20 m assumed', basis: 'Raised on the mapped round footprint (OSM way 427851572, about 12 m across). medievalheritage.eu: a round bergfried (refuge tower) with an upper-floor entrance and no residential use stood southwest of the collapsed old keep; UNESCO text dates the keep to 1270.', h: { v: 20, src: 'inferred', note: 'assumed; no height read' }, replaces: ['wall-38'] });
  C.push({ id: 'c-bergfried-15c', kind: 'tower', at: cen(h.byId('wall-38').path), r: 6.5, merlon: true, src: OSM('wall-38'), ev: 'schematic', conf: 0.25, eras: FROM1500, name: 'Bergfried, heightened and thickened · schematic, 24 m assumed', basis: 'Same footprint, slightly thicker. medievalheritage.eu: the bergfried was heightened and thickened in the second half of the 15th century and now serves as a viewing platform.', h: { v: 24, src: 'inferred', note: 'assumed 4 m above the 13th-century drawing; no height read' }, replaces: ['wall-38'] });
  bld('c-chapel-13c', 'wall-9', 'Free-standing chapel (13th century)', 7, 'Drawn on the mapped chapel footprint because the 13th-century chapel stood on the same site between the bergfried and the palace (medievalheritage.eu); its own footprint is not known.', ['1250'], 'assumed single-storey nave and roof ridge, about 7 m');
  bld('c-chapel-gothic', 'wall-9', 'Gothic chapel with west gallery (c. 1470)', 9, 'Raised on the mapped chapel footprint (OSM way 112672638, 15 x 10 m). medievalheritage.eu: a new Gothic chapel with a west gallery (matroneum) was built in the second half of the 15th century; its walls survive and its vault has collapsed.', FROM1500, 'assumed vaulted nave about 9 m; no height read');
  bld('c-west-range', 'wall-107', 'Residential range on the west curtain', 10, 'Raised on the mapped footprint (OSM way 1559860598, tagged "Renaissance palace", about 1000 m2). medievalheritage.eu: a long residential building was added along the west curtain wall in the second half of the 15th century, joined by a timber porch; the 16th century rebuilt and levelled the upper ward.', FROM1500, 'assumed 3 storeys at about 3.3 m');
  C.push({ id: 'c-semicircular-tower', kind: 'tower', at: cen(h.byId('wall-120').path), r: 4.2, merlon: true, src: OSM('wall-120'), ev: 'schematic', conf: 0.25, eras: FROM1500, name: 'Semicircular tower · schematic, 11 m assumed', basis: 'Raised on the OSM feature tagged "bastion" (way 1559879120, about 8 m across). medievalheritage.eu: a semicircular tower was built in the western upper ward in the second half of the 15th century.', h: { v: 11, src: 'inferred', note: 'assumed, about 4 m over the 7 m curtain' }, replaces: ['wall-120'] });
  C.push({ id: 'c-residential-tower', kind: 'tower', at: cen(h.byId('wall-91').path), r: 4.8, merlon: true, src: OSM('wall-91'), ev: 'schematic', conf: 0.15, eras: ALL, name: 'Square residential tower · schematic, 12 m assumed', basis: 'OSM maps a "residential tower" footprint (way 1559860581, about 10 x 10 m). medievalheritage.eu places a square residential tower on the north wall of the small outer bailey added after 1241; it is not established that this is that tower. Drawn as a round mass because square towers are not supported by the tower element.', h: { v: 12, src: 'inferred', note: 'assumed 3 storeys at 4 m' }, replaces: ['wall-91'] });
  bld('c-arcades', 'wall-105', 'Arcaded passage (16th century)', 6, 'OSM maps "Renaissance arcades" (way 1559860596, 7 x 19 m). medievalheritage.eu: in the 16th century the upper ward was reorganised, buildings joined, facades levelled and an arcaded passage added; so it appears only in the present-day view.', ['today'], 'assumed two storeys, about 6 m', { why: 'a solid schematic mass; the arcade openings are not drawn.' });
  T.constructed = C;
  // keep only the documented ids that exist (replaces is per element and era)
  const ids = new Set(T.elements.map((e) => e.id));
  for (const c of T.constructed) if (c.replaces) c.replaces = c.replaces.filter((r) => ids.has(r));

  T.eras = [
    { id: '1250', year: 'c. 1250', label: 'After the Mongol invasion', short: 'c. 1250', lens: 'none',
      summary: 'The upper castle as rebuilt in the first half of the 13th century after the Mongol invasion of 1241: the rampart on the rock edge, a three-storey Romanesque palace on the northern summit, a round bergfried, a free-standing chapel and a small outer bailey to the south-west.',
      basis: 'The present OSM lines of the upper castle carried back (west curtain, palace, bergfried, chapel, upper gate) and the schematic layer drawn on them. Dates come from written descriptions: UNESCO text (palace completed 1249, keep 1270) and medievalheritage.eu (phases).',
      conjecture: 'No plan of the 13th century was read. The mapped lines are the present ones; the 13th-century positions of the chapel and the gate are not known. The collapsed late-12th-century cylindrical keep (about 22.5 m across, walls 3.8-4 m thick) is not mapped and is not drawn. Heights are assumed.',
      sources: [],
      facts: ['medievalheritage.eu: late 12th century, a large cylindrical keep about 22.5 m across with walls 3.8-4 m thick; its collapse led to the rebuilding of the northern summit.', 'Early 13th century: stone wall on the rock edge; a three-storey Romanesque palace on the highest northern point; a round bergfried; the upper ward about 145 x 60 m with a gatehouse in the southern corner.', 'After 1241: a small outer bailey to the south-west with a square residential tower and a gate tower; a free-standing chapel between the bergfried and the palace.', 'UNESCO nomination text: palace completed 1249, keep 1270; the castle was rebuilt as a defence against Tatar raids.'] },
    { id: '1500', year: 'c. 1500', label: 'Largest extent', short: 'c. 1500', lens: 'none',
      summary: 'The castle at its greatest size, about 4.15 ha: upper castle remodelled under the Zapolya family, the middle ward of 1370-80, and the lower ward with Jiskra\'s Tower from the first half of the 15th century.',
      basis: 'OSM perimeter ring, ward walls and gates carried back to the 15th century plus the schematic layer. Phases from medievalheritage.eu and Wikipedia (Zapolya owners to 1528; late Gothic chapel c. 1470).',
      conjecture: 'The mapped walls are the present ones; no plan of c. 1500 was read. Jiskra\'s Tower is not mapped and lies in the middle of the lower ward beyond the 200 m terrain grid, so it is not drawn. Only one of the three lower-ward square towers is mapped. The eastern upper-castle residential buildings (two, second half of the 15th century) cannot be placed on a mapped footprint and are not drawn. Heights are assumed.',
      sources: [],
      facts: ['medievalheritage.eu: 1370-80, a middle ward of about 150 x 60 m to the west and south with a ditch and rampart, a southern gatehouse with a foregate and a drawbridge pit, and a west postern tower.', 'First half of the 15th century: a lower ward about 285 m long and up to 115 m wide, a wall over 500 m long with gun loops and three square towers (the western one a gatehouse with a portcullis); about 1443 Jiskra\'s Tower (named, not drawn: no mapped position and the lower-ward middle is outside the terrain grid).', 'Second half of the 15th century (Zapolya): palace rebuilt with a vaulted lower storey, Gothic chapel with a gallery, a long residential building on the west curtain, a semicircular tower, the bergfried heightened, a larger rock-cut cistern.', 'In its final form the castle covered about 4.15 ha (medievalheritage.eu); Wikipedia gives 3.9 ha in the text and 41,426 m2 in the infobox.'] },
    { id: 'today', year: 'Today', label: 'Ruin after the 1780 fire', short: 'Ruin', lens: 'none',
      summary: 'A UNESCO World Heritage ruin above Spiske Podhradie, burnt in 1780 and partly reconstructed since the 1970s; the Romanesque palace and the 13th-century bergfried survive and walls run along most of each ward.',
      basis: 'The OSM-mapped lines and footprints (perimeter ring, ward walls, named gates, palace, chapel, bergfried, arcades, cistern, paths, cannons) and the schematic layer standing for the pre-1780 fabric that survives.',
      conjecture: 'The OSM lines carry no heights, so the documented view is kerb-high; the constructed view draws the pre-1780 volumes at assumed heights and shows no roofs, timber porches or interiors, which the fire destroyed. The castle is closed for reconstruction in 2026 and the extent of rebuilt masonry is not mapped.',
      sources: [],
      facts: ['Wikipedia: a fire in 1780 destroyed the castle, cause unknown; the Csaky family had left in the early 18th century; owned by the state since 1945; extensive archaeological research and partial reconstruction in the second half of the 20th century; UNESCO listing in 1993.', 'medievalheritage.eu: the Romanesque palace and the 13th-century bergfried survive, the Gothic chapel\'s walls survive but its vault has collapsed, and defensive walls survive along most of each ward including the gatehouses and lower-ward towers; the eastern part of the upper castle has long been closed.'] },
  ];
}
