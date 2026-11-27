// Curation for Malbork Castle (Marienburg), Poland (world batch, T1 + constructed layer). Evidence and conflicts: docs/research/malbork-castle-q71279-pass.md.
// No plan, survey drawing or dated image was read (the Commons plan search had not arrived and no plan image may be shipped anyway), and the raw OSM
// geometry folder had not arrived, so the base is the existing auto trace (OSM ODbL, Terrarium z15). The documented layer is therefore the mapped
// OSM features, named in English, and nothing else. The High Castle itself is NOT mapped as a building in OSM; its position is derived from the
// courtyard footway loop (OSM ways 415/416, a 35 x 29 m ring) and the well, and it is drawn only in the constructed layer.
import { carryOver, rectAt, pathLength } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Malbork Castle (Marienburg), Pomerania, Poland. Hand-curated trace, tier T1 (OSM-mapped lines named; no plan, no sourced heights) plus a schematic constructed layer from written dimensions.',
  'Base: data/traces/malbork-castle-q71279.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived). OSM maps the Middle Castle, the Grand Master\'s Palace, the Lower Castle towers, the Karwan, the main gate and about 40 wall lines; the High Castle is not mapped as a footprint.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written dimensions with assumed heights and is shown only in the `<era>~built` eras. Documented heights: none. Distant town roads, houses and walls outside the castle area were dropped to stay inside the trace size budget.',
];

const OSM = (id, T) => T.elements.find((e) => e.id === id);
const cen = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);
const bb = (p) => p.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [1e9, 1e9, -1e9, -1e9]);
const dSeg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
const dPath = (p, path) => { let m = 1e9; for (let i = 0; i < path.length - 1; i++) m = Math.min(m, dSeg(p, path[i], path[i + 1])); return m; };

// High Castle frame: centre of the courtyard footway loop (OSM ways 415/416), long axis 54 deg from east (the loop's long sides run at 54 deg;
// the same angle as the mapped south-east wall). u = castle "north" (towards the Middle Castle), v = castle "west" (towards the Nogat).
const C = [29.7, -67.6], ROT = 54, ca = Math.cos(ROT * Math.PI / 180), sa = Math.sin(ROT * Math.PI / 180);
const P = (a, b) => [+(C[0] + a * ca - b * sa).toFixed(1), +(C[1] + a * sa + b * ca).toFixed(1)];
const HC_BASIS = 'High Castle (Hochschloss): 51 x 61 m rectangular plan around a courtyard of 32 x 37 m (medievalheritage.eu summary of the literature); four wings, corner turrets 3.7 x 3.7 m. Placed on the OSM courtyard footway loop and well (ways 415, 416, 397), orientation from the loop; wing thicknesses follow from the two quoted dimensions.';

export default function curate(T, h) {
  // ---- 1. trim the auto trace to the castle area (trace budget: 400 elements, 250 KB) -------------------------------------
  const drop = [];
  for (const e of T.elements) {
    if (e.id === 'outline' || e.kind === 'waterway') continue;
    const pts = e.poly || e.path || [e.at]; const c = cen(pts), b = bb(pts);
    const outside = b[0] < -285 || b[2] > 285 || b[1] < -285 || b[3] > 285;
    const far = c[0] < -135 || c[0] > 285 || c[1] < -170 || c[1] > 150;
    if (e.kind === 'road' && (far || (e.highway !== 'primary' && e.highway !== 'tertiary' && e.highway !== 'pedestrian' && e.highway !== 'living_street' && e.highway !== 'footway' && e.highway !== 'service') )) drop.push(e.id);
    else if ((e.kind === 'wall' || e.kind === 'retaining-wall') && (outside || far)) drop.push(e.id);
    else if (e.kind === 'building' && (far || outside) && !e.name) drop.push(e.id);
    else if (e.kind === 'building' && !e.name && pathLength(e.poly, true) < 28) drop.push(e.id);
    else if (e.kind === 'zone' && far) drop.push(e.id);
    else if (e.kind === 'road' && !e.name && pathLength(e.path, false) < 25) drop.push(e.id);
  }
  // keep a handful of the longest remaining roads
  h.remove(...drop);
  const roads = T.elements.filter((e) => e.kind === 'road').sort((a, b) => pathLength(b.path, false) - pathLength(a.path, false));
  h.remove(...roads.slice(60).map((r) => r.id));
  // tiny named-less buildings in the far town are already gone; cap the rest of the nameless houses
  console.error(`${T.id}: ${T.elements.length} elements after trimming`);

  // ---- 2. name the mapped features (English, with the Polish OSM name and way) -------------------------------------------
  const NAMES = {
    'building-50': ['Middle Castle (Zamek Średni) · mapped footprint (OSM way 122122611), height unknown', 'Mapped as one 190-vertex ring with buttress notches; the written sources date the Middle Castle to 1320-1350 (Göttingen Handbuch of Teutonic Order sites). The ring cannot be split into the wings the sources name.'],
    'building-75': ['Grand Master\'s Palace (Pałac Wielkich Mistrzów) · mapped footprint (OSM way 261512837), height unknown', 'Built 1382-1399 at the end of the west wing of the Middle Castle (Göttingen Handbuch; Wikipedia-derived summaries).'],
    'building-54': ['Bridge Tower (Baszta Mostowa) · mapped footprint (OSM way 122122616), height unknown', 'One of two OSM-named Bridge Towers at the river side; a double-towered Nogat Gate is described by burgenwelt.org. The pairing is an interpretation.'],
    'building-59': ['Bridge Tower (Baszta Mostowa) · mapped footprint (OSM way 122122623), height unknown', 'The second OSM-named Bridge Tower at the river side.'],
    'building-60': ['Tower above the bakery (Baszta nad piekarnią) · mapped footprint (OSM way 122122626), height unknown', 'Lower Castle wall tower as OSM names it. It was not matched to the named towers in the written sources (Maslankowa, Thesaurarius, Vogt) and no date was read.'],
    'building-135': ['New Tower (Baszta Nowa) · mapped footprint (OSM way 432786364), height unknown', 'Lower Castle wall tower as OSM names it; no date was read.'],
    'building-221': ['Dietrich\'s Tower (Baszta Dietricha) · mapped footprint (OSM way 699998152), height unknown', 'Tower at the south tip of the wall circuit as OSM names it; no date was read.'],
    'building-18': ['Main Gate, Carver\'s Gate (Brama Główna / Snycerska) · mapped footprint (OSM way 62144157), height unknown', 'The visitor entrance to the Lower Castle; the written sources describe a New Gate complex of about 1418 beside the Mill Canal, which was not matched to this footprint.'],
    'building-20': ['Karwan (OSM way 62144160), height unknown', 'The armoury for cannons and war machines (zamek.malbork.pl); the literature gives a 20 x 45 m coach house of 1300-1320 in the Lower Castle, which agrees with the mapped footprint size (about 43 x 49 m bounding box).'],
    'building-26': ['Mill (Młyn) · mapped footprint (OSM way 62682254), height unknown', 'Present-day mill building as OSM names it; its age was not read.'],
    'building-32': ['Under-Starost\'s House (Dom Podstarościego) · mapped footprint (OSM way 101915918), height unknown', 'Name only; age not read.'],
    'building-31': ['Foundry (Ludwisarnia) · mapped footprint (OSM way 101915237), height unknown', 'The Lower Castle had a foundry (zamek.malbork.pl); whether this is its site was not checked.'],
    'building-87': ['Church of St Lawrence (Kościół św. Wawrzyńca) · mapped footprint (OSM way 261513898), height unknown', 'A servants\' chapel of St Lawrence was added to the Lower Castle in 1358 (Göttingen Handbuch); the present building may not stand on the same footprint.'],
    'building-99': ['Gardener\'s House (Dom Ogrodnika) · mapped footprint (OSM way 262053793), height unknown', 'Name only; age not read.'],
    'building-45': ['Remains of the forge (Pozostałości po kuźni) · mapped footprint (OSM way 122122604), height unknown', 'Ruin footprint as OSM names it.'],
    'zone-100': ['Sperlinek Tower ruin (Baszta Sperlinek) · mapped zone (OSM way 262057801)', 'Mapped as a ruins zone; no footprint, date or height read.'],
    'zone-439': ['Former Order cemetery (Dawny cmentarz zakonny) · mapped zone (OSM way 1421714239)', 'Mapped cemetery zone south-east of the High Castle courtyard.'],
    'waterway-115': ['Nogat river · mapped (OSM way 299032607)', 'The castle stands on the east bank, raised 10-15 m above the river (medievalheritage.eu).'],
    'waterway-219': ['Mill Canal (Młynówka Malborska) · mapped (OSM way 698970305)', 'Moat water came from Lake Dąbrówka about 8 km away through a dug canal (medievalheritage.eu); the mapped canal is not claimed to be the moat feed.'],
    'waterway-220': ['Mill Canal (Młynówka Malborska) · mapped (OSM way 698970309)', 'As above.'],
  };
  for (const [id, [name, note]] of Object.entries(NAMES)) { const e = T.elements.find((x) => x.id === id); if (!e) continue; e.name = name; e.note = note; }
  const outline = h.byId('outline');
  outline.name = 'Castle outline · mapped (OSM relation 6436433), plan line only';

  // ---- 3. classify the mapped walls ------------------------------------------------------------------------------------------
  const walls = T.elements.filter((e) => e.kind === 'wall');
  const outerRing = outline.poly.concat([outline.poly[0]]);
  const info = walls.map((w) => ({ w, L: pathLength(w.path, false), outer: w.path.every((p) => dPath(p, outerRing) < 4) }));
  const curtain = info.filter((x) => x.L >= 25);
  for (const x of walls) x.name = x.name || `Wall line · mapped (${x.src.replace('osm:', 'OSM ')}), elevation unknown`;

  // ---- 4. eras: documented layer -----------------------------------------------------------------------------------------------
  const all = T.elements.map((e) => e.id);
  const castleB = ['building-50', 'building-75', 'building-54', 'building-59', 'building-20', 'building-60', 'building-135', 'building-221', 'building-18', 'building-26', 'building-32', 'building-31', 'building-87', 'building-99', 'building-45', 'zone-100', 'zone-439'].filter((i) => all.includes(i));
  const water = T.elements.filter((e) => e.kind === 'waterway').map((e) => e.id);
  const wallIds = walls.map((w) => w.id);
  const c1400 = ['outline', 'building-50', 'building-75', 'building-54', 'building-59', 'building-20', 'building-87', ...water, ...wallIds];
  carryOver(T, '1400', c1400, { note: 'the present mapped line is assumed to be the line of about 1400; the four wall rings were renewed repeatedly between about 1300 and 1449 (the last under Konrad von Erlichshausen, 1441-49), so the 1400 wall circuit differs from the mapped one in ways no plan read here shows' });
  carryOver(T, '1945', ['outline', ...castleB, ...water, ...wallIds], { note: 'the mapped line is assumed to match the castle at the end of the war; the 1945 damage (see the era text) is not mapped and is not drawn on this layer' });

  // ---- 5. constructed (schematic) layer --------------------------------------------------------------------------------------------
  const ALL = ['1400', '1945', 'today'], POST = ['1945', 'today'], PRE = ['1400', 'today'];
  const K = [];
  // curtain walls on the mapped wall lines (outer ring 8 m, inner / Zwinger lines 5.5 m: assumptions)
  for (const { w, outer } of curtain) {
    const hv = outer ? 8 : 5.5;
    K.push({ id: `c-${w.id}`, kind: 'wall', path: w.path, closed: false, replaces: [w.id], thick: outer ? 2.2 : 1.6, merlon: true, src: w.src, ev: 'schematic', conf: 0.2, eras: ALL,
      name: `${outer ? 'Outer curtain wall' : 'Inner or Zwinger wall'} · schematic, ${hv} m assumed`,
      basis: `Raised on the mapped wall line (${w.src.replace('osm:', 'OSM ')}). The sources describe two to four rings of wall and Zwinger with a moat (burgenwelt.org) but give no wall height, so ${hv} m is an illustrative assumption; the line is the present mapped one, not a dated 1400 one.`,
      h: { v: hv, src: 'inferred', note: outer ? 'outer ring assumed 8 m; no wall height read in any source' : 'inner and Zwinger lines assumed 5.5 m; no wall height read' } });
  }
  // towers and gate towers on the OSM footprints
  const tower = (id, label, hv, rule, eras, basis) => {
    const e = OSM(id, T); if (!e) return;
    K.push({ id: `c-${id}`, kind: 'building', poly: e.poly, replaces: [id], merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic tower with no stair or door drawn; look at it from the wall line.', src: e.src, ev: 'schematic', conf: 0.2, eras,
      name: `${label} · schematic, ${hv} m assumed`, basis, h: { v: hv, src: 'inferred', note: rule } });
  };
  tower('building-54', 'Bridge Tower of the Nogat Gate (south)', 16, 'assumed 16 m for a river-gate tower; no height read', ALL, 'Raised on the OSM footprint of the Bridge Tower. burgenwelt.org calls the Nogat Gate a double-towered work and the main bulwark of the river side; this and the neighbouring tower are read as that pair, which is an interpretation. No height given.');
  tower('building-59', 'Bridge Tower of the Nogat Gate (north)', 16, 'assumed 16 m for a river-gate tower; no height read', ALL, 'Raised on the OSM footprint of the second Bridge Tower; see the paired tower. No height given.');
  tower('building-60', 'Wall tower above the bakery', 13, 'assumed 13 m, below the 29 m maximum quoted for the Maslankowa Tower; no height read for this tower', POST, 'Raised on the OSM footprint. The Lower Castle wall towers are described as numerous and some very large (burgenwelt.org); the Maslankowa Tower (8.7 m diameter, under 29 m, walls 2.6 m) is the only tower with figures and was not matched to this one.');
  tower('building-135', 'New Tower (wall tower)', 13, 'assumed 13 m; no height read', POST, 'Raised on the OSM footprint. Date not read, so it is drawn only in the later eras.');
  tower('building-221', 'Dietrich\'s Tower (wall tower)', 12, 'assumed 12 m; no height read', POST, 'Raised on the OSM footprint at the south tip of the wall circuit. Date not read, so it is drawn only in the later eras.');

  // buildings on the OSM footprints
  const bld = (id, label, hv, rule, eras, basis, extra = {}) => {
    const e = OSM(id, T); if (!e) return;
    K.push({ id: `c-${id}`, kind: 'building', poly: e.poly, replaces: [id], roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic mass with no door or stair drawn; look at it from outside.', src: e.src, ev: 'schematic', conf: 0.2, eras,
      name: `${label} · schematic, ${hv} m assumed`, basis, h: { v: hv, src: 'inferred', note: rule }, ...extra });
  };
  bld('building-50', 'Middle Castle', 15, 'assumed 15 m: three storeys of about 4 m plus a parapet; the Great Refectory is 9 m high inside (Göttingen Handbuch) but no outer height was read', ALL,
    'Raised on the mapped Middle Castle ring. Built 1320-1350 as a three-wing house for the Order\'s guests, with the Great Refectory (30 x 15 x 9 m, three pillars) in the west wing, the Bartholomew chapel in the east wing and the gatehouse and infirmary in the north wing (Göttingen Handbuch). The ring cannot be split into wings, so the wings and rooms are not drawn separately.', { merlon: true });
  bld('building-75', 'Grand Master\'s Palace', 20, 'assumed 20 m: a tower-like palace of about four storeys (medievalheritage.eu) at 4-5 m each; no height read', ALL,
    'Raised on the mapped palace footprint. Built 1382-1399 as a tower-like palace at the end of the west wing, with a Summer Refectory (14 x 9.7 m) and a Winter Refectory (12 x 12 m, 7.8 m high, one column), its own chapel of St Catherine, and warm-air heating from a cellar furnace. The famous corner oriels are not drawn: no position was read.', { merlon: true });
  bld('building-20', 'Karwan (arsenal)', 12, 'assumed 12 m: a large two-storey hall under a high roof; no height read', ALL,
    'Raised on the mapped Karwan footprint. The Karwan was the Lower Castle armoury for cannons and combat vehicles (zamek.malbork.pl); a 20 x 45 m coach house is dated 1300-1320 (medievalheritage.eu).');
  bld('building-87', 'Chapel of St Lawrence (servants\' chapel)', 11, 'assumed 11 m for a single-nave chapel; no height read', ALL,
    'Raised on the OSM footprint of the present Church of St Lawrence. A servants\' chapel was added to the Lower Castle in 1358 (Göttingen Handbuch); the present building may not stand on the same footprint, so this is a stand-in.');
  bld('building-18', 'Main Gate, Carver\'s Gate (gatehouse)', 9, 'assumed 9 m; no height read', POST,
    'Raised on the OSM footprint of the visitor gate. The sources describe a New Gate complex of about 1418 and 14 gates, 3 drawbridges and 3 portcullises on the way to the High Castle (burgenwelt.org); this footprint was not matched to either, so it is drawn only in the later eras.', { arches: true });
  bld('building-26', 'Mill', 10, 'assumed 10 m; no height read', POST, 'Raised on the OSM footprint of the mill beside the Mill Canal; the age of the present mill was not read, so it is drawn only in the later eras.');
  bld('building-32', 'Under-Starost\'s House', 9, 'assumed 9 m; no height read', POST, 'Raised on the OSM footprint; age not read, so it is drawn only in the later eras.');
  bld('building-31', 'Foundry (Ludwisarnia)', 8, 'assumed 8 m; no height read', POST, 'Raised on the OSM footprint. The Lower Castle had a foundry (zamek.malbork.pl); the present building\'s age was not read.');

  // ---- High Castle (not mapped as a footprint in OSM) ----
  const WING = 20;
  const wing = (id, name, a, b, w, d, eras, hv = WING, why = 'assumed 20 m: three storeys of about 5 m plus roof; the only sourced height is the church, 14.4 m') =>
    K.push({ id, kind: 'building', poly: rectAt(P(a, b), w, d, ROT), merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic wing with no door or stair drawn; the courtyard between the wings is open.', src: 'inferred', ev: 'schematic', conf: 0.2, eras,
      name: `${name} · schematic, ${hv} m assumed`, basis: HC_BASIS, h: { v: hv, src: 'inferred', note: why } });
  // the north wing is split by a 3.7 m passage (the gatehouse opening is 3.7 m high in the sources; its position was not read, so the gap is assumed on the east half, towards the Middle Castle)
  wing('c-hc-north-w', 'High Castle north wing, west part (church wing)', 24.5, 14.15, 12, 22.7, ALL);
  wing('c-hc-north-e', 'High Castle north wing, east part', 24.5, -12.15, 12, 26.7, ALL);
  wing('c-hc-south', 'High Castle south wing', -24.5, 0, 12, 51, ALL);
  wing('c-hc-west', 'High Castle west wing', 0, 20.75, 37, 9.5, ALL);
  wing('c-hc-east', 'High Castle east wing', 0, -20.75, 37, 9.5, PRE);
  wing('c-hc-east-1945', 'High Castle east wing, war ruin', 0, -20.75, 37, 9.5, ['1945'], 8, 'assumed 8 m stump: the eastern part of the upper ward was destroyed in 1945 (medievalheritage.eu) but no ruin height or extent was read');
  for (const [i, [a, b]] of [[30.5, 25.5], [30.5, -25.5], [-30.5, 25.5], [-30.5, -25.5]].entries())
    K.push({ id: `c-hc-turret-${i + 1}`, kind: 'building', poly: rectAt(P(a, b), 3.7, 3.7, ROT), merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic turret.', src: 'inferred', ev: 'schematic', conf: 0.2, eras: ALL,
      name: `High Castle corner turret ${i + 1} · schematic, ${WING + 4} m assumed`, basis: 'Corner turrets of 3.7 x 3.7 m on the High Castle (medievalheritage.eu); placed at the corners of the schematic High Castle rectangle, height assumed.', h: { v: WING + 4, src: 'inferred', note: 'assumed 4 m above the schematic wings' } });
  K.push({ id: 'c-hc-bell-tower', kind: 'building', poly: rectAt(P(19, -20.75), 11.7, 6, ROT), merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic tower with no stair drawn.', src: 'inferred', ev: 'schematic', conf: 0.25, eras: PRE,
    name: 'Bell tower, the main tower of the High Castle · schematic, 66 m from the written sources', basis: 'Main tower of the High Castle, 11.7 x 6 m and about 66 m high (medievalheritage.eu; burgenwelt.org also gives 66 m), standing in the east wing next to the north wing (Göttingen Handbuch). Position along the wing is assumed; the Steinbrecht saddle roof is not drawn. Destroyed in 1945 and rebuilt after the war, so it is absent from the 1945 era.',
    h: { v: 66, src: 'inferred', note: 'about 66 m as written in two summaries of the literature; a written figure, not a survey' } });
  K.push({ id: 'c-hc-dansker-arcade', kind: 'building', poly: rectAt(P(-24.5, 25.5 + 23), 3.5, 46, ROT + 90 - 90), merlon: false, unreachableOk: true, unreachableNote: 'a solid schematic arcade with no passage drawn.', src: 'inferred', ev: 'schematic', conf: 0.15, eras: ALL,
    name: 'Dansker arcade · schematic, 8 m assumed', basis: 'The Dansker (latrine tower) is joined to the High Castle by a passage projecting about 60 m on arches (medievalheritage.eu: "about 60 m on a brick porch"; burgenwelt.org: a passage about 60 m long). Drawn from the south-west corner of the High Castle straight towards the Nogat; direction and width are assumed.',
    h: { v: 8, src: 'inferred', note: 'assumed 8 m for an arcaded passage; no height read' } });
  K.push({ id: 'c-hc-dansker', kind: 'building', poly: rectAt(P(-24.5, 25.5 + 46 + 6.5), 13.3, 12.6, ROT), merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic tower with no stair drawn.', src: 'inferred', ev: 'schematic', conf: 0.15, eras: ALL,
    name: 'Dansker latrine tower · schematic, 16 m assumed', basis: 'Dansker tower 12.6 x 13.3 m at the south-west corner of the High Castle, reached by a long arched passage (medievalheritage.eu; Göttingen Handbuch). Its date was not read; it is drawn in all eras. Its position at the end of the passage is assumed.',
    h: { v: 16, src: 'inferred', note: 'assumed 16 m; no height read' } });

  T.constructed = K;

  // ---- 6. eras -----------------------------------------------------------------------------------------------------------------
  T.eras = [
    { id: '1400', year: 'c. 1400', label: 'Order at its height', short: 'c. 1400', lens: 'none',
      summary: 'The seat of the Grand Master of the Teutonic Order about a century after it moved here (1309): the High Castle, the Middle Castle with the new Grand Master\'s Palace (finished 1399), the Karwan and the Lower Castle, behind rings of wall and a moat.',
      basis: 'The mapped lines for the Middle Castle, the palace, the Bridge Towers, the Karwan and the walls, carried back and marked inferred; written dates from the Göttingen Handbuch of Teutonic Order sites, medievalheritage.eu, zamek.malbork.pl and zabytek.pl. The constructed layer adds the High Castle.',
      conjecture: 'No plan or survey of about 1400 was read. The wall circuit of 1400 differs from the mapped one (Plauen\'s walls and bastions date from 1410-1449 and later). Moats (Middle Castle about 20 m wide and 10 m deep, High Castle about 20 m wide and 15 m deep) and the drawbridges and gates are not drawn: no mapped moat or gate position exists. The Pfaffenturm, the Maslankowa, Thesaurarius and Vogt towers, the church of St Mary and the chapel of St Anne are named in the sources but not located, so they are not drawn.',
      sources: [],
      facts: ['1309: the Grand Master moved his seat to Marienburg on 14 September (zamek.malbork.pl); the convent house reached four wings by about 1340 (Göttingen Handbuch).', 'Middle Castle built 1320-1350; the Grand Master\'s Palace 1382-1399 under Konrad Zöllner von Rotenstein, Konrad von Wallenrode and Konrad von Jungingen (Göttingen Handbuch).', 'High Castle: 51 x 61 m plan, courtyard 32 x 37 m, main tower about 66 m, Dansker tower 12.6 x 13.3 m on a passage about 60 m long (medievalheritage.eu).', 'Reaching the High Castle once meant passing 14 gates, 3 drawbridges and 3 portcullises (burgenwelt.org).', '1410: besieged by Polish-Lithuanian forces for about six to eight weeks and not taken (medievalheritage.eu; warhistoryonline).'] },
    { id: '1945', year: '1945', label: 'War damage', short: '1945', lens: 'none',
      summary: 'The castle after the fighting of early 1945: the written sources say the main tower, the church chancel and the eastern parts of the High and Middle Castles were destroyed or badly damaged.',
      basis: 'Text only: medievalheritage.eu (fighting destroyed the eastern parts of the upper and middle wards, the main tower and the castle church), zabytek.pl (damage to the church chancel and its Mary figure, the main tower and one wing of the Middle Castle), warhistoryonline ("over half" destroyed). The mapped lines are carried back; the constructed layer drops the bell tower and cuts the High Castle east wing to a stump.',
      conjecture: 'No map, survey or photograph of the damage was read, so its extent is not mapped. The two summaries disagree on how much was lost (the warhistoryonline article says over half; the other two name parts). The stump height of the east wing and the loss of the bell tower are the only damage drawn. The Middle Castle east wing, the church chancel and the Pfaffenturm are not drawn: they cannot be separated from mapped footprints or located.',
      sources: [],
      facts: ['Damage in 1945: the church chancel and its Mary figure, the main tower and one wing of the Middle Castle (zabytek.pl).', 'The Steinbrecht saddle roof of the bell tower was destroyed in the war; the tower now has a crenellated crown (Göttingen Handbuch).', 'Post-war rebuilding: the east gable of the High Castle in simplified form, the tower\'s four floors, St Anne\'s chapel and the church, the Middle Castle east wing and St Bartholomew\'s; the Mary figure (2014-2016) used about 70% original fragments (medievalheritage.eu).', 'Steinbrecht\'s restoration ran 1882-1921, the upper ward reopening in 1902 (medievalheritage.eu).'] },
    { id: 'today', year: 'Today', label: 'UNESCO World Heritage museum', short: 'Museum', lens: 'none',
      summary: 'The Malbork Castle Museum (since 1961; UNESCO 1997), a restored Gothic brick complex of about 21 ha on the east bank of the Nogat.',
      basis: 'The OSM-mapped castle buildings, wall lines, memorials, roads and the Nogat; the constructed layer shows the High Castle that OSM does not map.',
      conjecture: 'All heights are unknown (kerb-high) on the evidence layer. The mapped wall lines mix medieval and later works (Plauen, Swedish earthworks of 1626-1659 were not found mapped). The DEM is about 30 m resolution and cannot show the moats or the castle hill.',
      sources: [],
      facts: ['The complex covers more than 20 ha (about 21 ha, roughly 600 x 250 m; medievalheritage.eu), the largest brick castle in Europe by area (warhistoryonline).', 'The OSM marker nodes include the Steinbrecht memorial (1882-1922 restorer) and the Grand Master memorials near the Palace; the Copernicus memorial and three cannons are mapped.'] },
  ];
}
