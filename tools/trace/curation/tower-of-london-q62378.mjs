// Curation for the Tower of London (world-fort batch, T1 mapped + constructed schematic layer). Evidence and conflicts: docs/research/tower-of-london-q62378-pass.md.
// No plan or survey drawing was read (the sandbox cannot fetch the Commons plan search results and none was read). Positions come from the OSM footprints of the named towers
// (OSM ODbL), which already map every Inner Ward and Outer Ward tower except the Lion Tower; dates and storeys come from the Historic England list text (read through
// britishlistedbuildings.co.uk and historicengland.org.uk) and the White Tower dimensions from World History Encyclopedia / Loftie 1904. Heights are all assumptions with their rule.
import { carryOver, levelInlandWaters, rectAt, gateTowers } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Tower of London, London, UK. Hand-curated trace, tier T1 for the documented layer (OSM-mapped outline, wall line, tower footprints, terrain) plus a constructed (schematic) layer for c. 1100 and c. 1300.',
  'Base: data/traces/tower-of-london-q62378.trace.json (OSM ODbL; Terrarium z15, 5 m grid). OSM maps the White Tower and 26 named tower footprints; no plan or survey was read, so nothing is T2.',
  'Documented layer: mapped footprints only, all kerb-high (no height read from a survey). Historic eras carry the mapped footprints back, marked inferred, for the towers the sources date before that era.',
  'Constructed layer (`<era>~built`): curtain walls, towers, White Tower, wet moat and Lion Tower drawn on the OSM positions with dates and storeys from the Historic England list entries; every height is an assumption with its rule.',
];

const OSM = (h, id) => h.byId(id);
const cen = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);
const HE = 'Historic England list text (Tower of London inner curtain wall and mural towers, via britishlistedbuildings.co.uk/101242062; outer curtain wall, historicengland.org.uk/listing/the-list/list-entry/1242026; Middle Tower, list entry 1065766)';
const HRule = (st) => `assumed ${st} storey${st > 1 ? 's' : ''} x 3.5 m + 3 m for plinth and parapet = ${3.5 * st + 3} m; storeys from the Historic England text where stated, otherwise assumed 2`;
const th = (st) => 3.5 * st + 3;
// [id, short name, storeys by era, eras, dated text, wall it stands on (inner|outer|keep)]
const TOWERS = [
  ['building-317', 'Bell Tower', { 1300: 2, today: 2 }, 'c.1190-1200; octagonal at ground floor then cylindrical, two storeys above a solid base (HE inner wall list text)', 'inner'],
  ['building-315', 'Bloody Tower', { 1300: 1, today: 2 }, 'watergate c.1220-40; vault and upper stages 1360-62, so one stage is drawn for c. 1300 and two for today (HE inner wall list text)', 'inner'],
  ['building-318', 'Wakefield Tower', { 1300: 2, today: 2 }, 'built 1220-40, cylindrical, two storeys on an ashlar plinth (HE inner wall list text)', 'inner'],
  ['building-314', 'Lanthorn Tower', { 1300: 2, today: 2 }, 'curtain wall and Lanthorn c.1220-40 (HE); the tower was rebuilt in 1883, so today\'s footprint is a Victorian rebuild on the medieval site; storeys not stated', 'inner'],
  ['building-335', 'Salt Tower', { 1300: 3, today: 3 }, 'wall from Devereux to Salt Tower 1238-75 (HE); the HE text describes a three-quarter cylindrical tower beside the postern adjoining the Salt Tower as basement and two storeys, which this pass reads as the Salt Tower itself but could not confirm', 'inner'],
  ['building-333', 'Broad Arrow Tower', { 1300: 2, today: 2 }, '1238-75, D-shaped with rectangular turrets, two storeys; restored 1855-7 (HE inner wall list text)', 'inner'],
  ['building-334', 'Constable Tower', { 1300: 2, today: 2 }, '1238-75, D-shaped, rebuilt mid C19; storeys not stated (HE inner wall list text)', 'inner'],
  ['building-340', 'Martin Tower', { 1300: 2, today: 2 }, '1238-75 D-shaped angle tower with turrets, two storeys, heightened in the late C17 (HE inner wall list text)', 'inner'],
  ['building-339', 'Brick Tower', { 1300: 2, today: 2 }, 'D-shaped, rebuilt mid C19 (HE inner wall list text); original date not stated, drawn in the 1238-75 run of towers', 'inner'],
  ['building-343', 'Bowyer Tower', { 1300: 2, today: 2 }, '1238-75, D-shaped with south turret, two storeys, refaced mid C19 (HE inner wall list text)', 'inner'],
  ['building-346', 'Flint Tower', { 1300: 2, today: 2 }, 'D-shaped, rebuilt mid C19 (HE inner wall list text); original date not stated, drawn in the 1238-75 run of towers', 'inner'],
  ['building-348', 'Devereux Tower', { 1300: 2, today: 2 }, 'north-west corner, 1238-75, irregular D-shaped, much rebuilt in brick from the mid C18; storeys not stated (HE inner wall list text)', 'inner'],
  ['building-316', 'Beauchamp Tower', { 1300: 3, today: 3 }, 'c.1281, D-shaped with rectangular turrets, three storeys; restored 1851-3 (HE inner wall list text)', 'inner'],
  ['building-116', 'Byward Tower', { 1300: 2, today: 2 }, '1275-85, two storeys (HE outer wall list text); the mid C16 timber-framed upper storeys are not drawn for c. 1300', 'outer'],
  ['building-362', 'St Thomas\'s Tower', { 1300: 2, today: 2 }, '1275-85 watergate over Traitors\' Gate, two storeys (HE outer wall list text); the 1532-3 timber framing is not drawn for c. 1300', 'outer'],
  ['building-208', 'Legge\'s Mount', { 1300: 2, today: 2 }, '1275-85 semicircular bastion at the north-west corner; heightened 1682-3 (HE outer wall list text); storeys not stated', 'outer'],
  ['building-556', 'Brass Mount', { 1300: 2, today: 2 }, 'late C13 or early C14 semicircular bastion at the north-east corner (HE outer wall list text): the date straddles 1300; storeys not stated', 'outer'],
  ['building-354', 'Develin Tower', { 1300: 2, today: 2 }, '1275-85 at the south-east corner, projecting east into the moat, partly rebuilt 1679 (HE outer wall list text); storeys not stated', 'outer'],
  ['building-356', 'Well Tower', { 1300: 2, today: 2 }, 'two storeys; the HE text dates it 1275-85 in one line and 1348-55 (with Cradle Tower) in another, so c. 1300 is uncertain', 'outer'],
  ['building-355', 'Cradle Tower', { today: 2 }, '1348-55 watergate for Edward III, with 1867 work by Salvin (HE outer wall list text); not drawn for c. 1300', 'outer'],
  ['building-183', 'Middle Tower', { 1300: 2, today: 2 }, '1275-81 gatehouse with cylindrical flanking towers two storeys high; upper floors rebuilt and refaced in Portland stone 1717-19 (HE list entry 1065766); the footprint is unnamed in OSM and is identified by position and shape', 'outer'],
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);

  // ---- prune context outside the fort: far roads, far buildings and the ordnance markers, to keep the element budget -------------------------
  const keepAlways = new Set(['outline', 'wall-431', 'waterway-451', 'waterway-682', 'waterway-695', ...TOWERS.map((t) => t[0]), 'building-324', 'building-328', 'building-320', 'building-329', 'building-433']);
  const drop = [];
  for (const e of T.elements) {
    if (keepAlways.has(e.id)) continue;
    const p = e.poly || e.path || (e.at ? [e.at] : null); if (!p) continue;
    const c = cen(p), d = Math.hypot(c[0] - 20, c[1] - 20);
    if (e.kind === 'marker' && /cannon|mortar|naval-gun|12-pounder|18-inch|^L'|^Le |anchor/.test(e.name || '')) drop.push(e.id);
    else if ((e.kind === 'road' || e.kind === 'zone' || e.kind === 'retaining-wall' || e.kind === 'wall') && d > 240) drop.push(e.id);
    else if (e.kind === 'building' && d > 215 && !e.name) drop.push(e.id);
    else if (e.kind === 'building' && d > 230) drop.push(e.id);
    else if (e.kind === 'road' && d > 170 && e.highway !== 'pedestrian') drop.push(e.id);
  }
  h.remove(...drop);
  console.error(`${T.id}: pruned ${drop.length} context elements, ${T.elements.length} left`);

  // ---- documented layer: names and notes ---------------------------------------------------------------------------------------------------
  const W = h.byId('wall-431');
  W.name = 'Outer curtain wall line · mapped (OSM way 509001534), elevation unknown';
  W.note = 'OSM maps one closed line that follows the Outer Ward wall and the north, east and south faces of the Outer Ward; it is a footprint-level line, not a surveyed wall top.';
  h.byId('outline').name = 'Tower of London · mapped outline (OSM way 370870741)';
  h.byId('building-324').name = 'White Tower · mapped footprint (OSM way 369135772), 36 x 32.5 m per the sources, elevation unknown';
  h.byId('building-324').note = 'OSM footprint including the north-east circular turret and the south-east apse of the chapel. The sources give 36 x 32.5 m and about 27.5 m high; the OSM footprint measures about 37.6 x 39.4 m including the apse and turrets.';
  const mid = h.byId('building-183');
  mid.name = 'Middle Tower · mapped footprint, identified by position';
  mid.note = 'OSM way for this footprint carries no name. It is two circular towers about 10 m apart at the west end of the service road that crosses the moat to the Byward Tower, which matches the Middle Tower (two cylindrical towers flanking the passage, HE list entry 1065766). Identification is this pass\'s, not OSM\'s.';
  for (const [id, nm] of [['building-328', 'Wardrobe Tower']]) { const e = h.byId(id); e.note = `${e.note ? e.note + ' ' : ''}No date was read for this tower; it is drawn only in the present-day era.`; }

  // ---- eras carried back from the mapped layer ---------------------------------------------------------------------------------------------
  const thames = ['waterway-451', 'waterway-682', 'waterway-695'];
  const towers1300 = TOWERS.filter((t) => t[2][1300]).map((t) => t[0]);
  carryOver(T, '1300', ['outline', 'wall-431', 'building-324', ...towers1300, ...thames], { note: 'the present mapped footprint is assumed to mark the same medieval tower or wall; many were rebuilt or refaced (see each tower\'s constructed note) and no plan of 1300 was read' });
  carryOver(T, '1100', ['building-324', ...thames], { note: 'the White Tower footprint is the one 11th-century structure that stands today, and the footprint is mapped; its turrets and top were altered later' });
  // the 1100 and 1300 eras describe the footprint only; mark the White Tower as mapped, not merely carried (it is the same standing building)
  for (const era of ['1100', '1300']) { const m = T.diffs[era].modify['building-324']; if (m) { m.ev = 'mapped'; m.conf = 0.6; m.name = 'White Tower · mapped footprint (OSM way 369135772), standing since c.1078-1100'; } }

  // ---- constructed (schematic) layer --------------------------------------------------------------------------------------------------------
  const C = [];
  const ptsOf = (id) => cen(h.byId(id).poly).map((v) => +v.toFixed(1));

  // White Tower
  const wt = h.byId('building-324');
  const wtBasis = 'Raised on the mapped footprint. Height 27.5 m (90 ft) and 36 x 32.5 m plan from World History Encyclopedia and Loftie\'s Authorised Guide (1904); Historic England: 3 storeys and a basement, angle turrets five storeys, crenellated parapet. The domed turret roofs (Henry VIII, c.1533) and the third floor (early C17) are later and not drawn.';
  C.push({ id: 'c-white-tower', kind: 'building', poly: wt.poly, replaces: ['building-324'], eras: ['1100', '1300', 'today'], src: wt.src, ev: 'schematic', conf: 0.35, merlon: true, roof: 'flat',
    name: 'White Tower (keep) · schematic mass, 27.5 m', basis: wtBasis,
    h: { v: 27.5, src: 'inferred', note: 'height taken from the cited sources (90 ft / 27.5 m, floor to battlement per Loftie); it is a published figure, not a measurement taken in this pass, so it stays on the constructed layer' },
    unreachableOk: true, unreachableNote: 'a solid schematic mass with no stair or door drawn.' });
  // turrets: NE circular (Flamsteed) and three square, drawn as slightly taller blocks on the footprint corners
  C.push({ id: 'c-wt-turret-ne', kind: 'tower', at: [41.5, 34.3], r: 3.9, eras: ['1100', '1300', 'today'], h: { v: 31, src: 'inferred', note: 'assumed 3.5 m above the 27.5 m parapet; Historic England says the angle turrets are five storeys against three storeys for the body' }, merlon: true, src: wt.src, ev: 'schematic', conf: 0.3,
    name: 'White Tower north-east turret (circular) · schematic, 31 m assumed', basis: 'Position from the north-east circular part of the mapped footprint (centre read from the OSM vertices, +-1 m); circular north-east turret and square others from Loftie 1904 and the HE list text (stair turret cylindrical).' });
  for (const [k, c, rot] of [['nw', [14.4, 36.3], 0], ['sw', [11.6, 5], 0], ['se', [39.2, 3.2], 0]]) {
    C.push({ id: `c-wt-turret-${k}`, kind: 'building', poly: rectAt(c, 7, 7, rot), eras: ['1100', '1300', 'today'], roof: 'flat', merlon: true, src: wt.src, ev: 'schematic', conf: 0.25, unreachableOk: true, unreachableNote: 'a solid schematic block with no stair drawn.',
      name: `White Tower ${k.toUpperCase()} turret (square) · schematic, 31 m assumed`, basis: 'Square angle turret from the HE list text and Loftie 1904 (three square, one circular); position read from the OSM footprint corner, about +-2 m; 7 m square is assumed.', h: { v: 31, src: 'inferred', note: 'assumed 3.5 m above the 27.5 m parapet; HE: angle turrets five storeys' } });
  }

  // c. 1100 bailey: only what the sources state about the first enclosure
  C.push({ id: 'c-bailey-1100', kind: 'wall', closed: true, path: [[54, -46], [54, 70], [-18, 70], [-18, -30]], eras: ['1100'], thick: 2, merlon: false, src: 'inferred', ev: 'schematic', conf: 0.1,
    name: 'First bailey enclosure c. 1100 · schematic, position assumed, 3 m high',
    basis: 'World History Encyclopedia: the south and east sides of the original bailey were the Roman town wall, the north and west sides a bank and ditch; HRP: ditch on the north and west only; Rufus put stone on the wall in 1097 (one source). The Roman wall line near x = +54 m is read from OSM zone 608 beside the Wardrobe Tower; the west and north edges are assumed, +-20 m, and the enclosure is drawn as one low closed wall.',
    h: { v: 3, src: 'inferred', note: 'illustrative: bank and palisade / early wall, no height read' } });

  // Inner curtain: through the mapped inner towers
  const innerOrder = ['building-317', 'building-315', 'building-318', 'building-314', 'building-335', 'building-333', 'building-334', 'building-340', 'building-339', 'building-343', 'building-346', 'building-348', 'building-316'];
  const innerPath = innerOrder.map(ptsOf);
  const outerPath = [[-98, -1.8], [-94.6, 7.1], [-89.4, 21.1], [-76.8, 54.4], [-57.2, 106.2], [-57, 114.7], [-51, 120.9], [-41, 120.9], [46.4, 133.1], [60, 131.3], [113.3, 108.3], [120.9, 107.8], [130.9, 104.2], [135, 95.2], [133.2, 86.6], [126.9, 82.1], [124.9, 52.1], [124.7, 48.4], [117.2, -67.5], [116.6, -76.8], [103, -80.8], [98.3, -80.5], [77.9, -79.3], [63.1, -78.3], [57.8, -78], [51.7, -77.6], [-18.1, -50.8], [-22.3, -59.4], [-26, -60.7], [-35.8, -56.9], [-46, -53], [-42.9, -40], [-79.6, -25.4], [-93.3, -20.1], [-99, -12]];
  C.push({ id: 'c-inner-wall', kind: 'wall', closed: true, path: innerPath, eras: ['1300', 'today'], thick: 3, merlon: true, replaces: [], src: 'inferred', ev: 'schematic', conf: 0.15,
    name: 'Inner curtain wall · schematic, 8 m assumed',
    basis: `Straight runs between the mapped footprints of the 13 Inner Ward towers (Bell, Bloody, Wakefield, Lanthorn, Salt, Broad Arrow, Constable, Martin, Brick, Bowyer, Flint, Devereux, Beauchamp). Dates: Bell and wall to Bloody c.1170-1200, Wakefield/Lanthorn wall 1220-40, Devereux to Salt 1238-75, west wall with Beauchamp 1275-85; south wall heightened and crenellated 1339 (${HE}). The real wall bends between towers; this line is a chord, within a few metres of it.`,
    h: { v: 8, src: 'inferred', note: 'assumed: the HE text gives no wall height; 8 m puts the inner wall above the 6 m assumed Outer Ward wall, the concentric principle, and below the 2-storey towers' } });
  C.push({ id: 'c-outer-wall', kind: 'wall', closed: true, path: outerPath, eras: ['1300', 'today'], thick: 2.4, merlon: true, replaces: ['wall-431'], stands_for: 'wall-431', src: W.src, ev: 'schematic', conf: 0.2,
    name: 'Outer curtain wall · schematic, 6 m assumed',
    basis: `Drawn on the mapped Outer Ward line (OSM way 509001534). HE: outer curtain wall and towers c.1275-85 for Edward I (about 21,000 pounds with the new moat); the south section with Cradle and Well Towers 1348-55 for Edward III (${HE}). Squared and coursed ragstone, scored quoining suggesting it was once whitewashed.`,
    h: { v: 6, src: 'inferred', note: 'assumed: no height read; lower than the inner wall so the inner ring overlooks it (concentric layout)' } });
  C.push({ id: 'c-gate-byward', kind: 'gate', wall: 'wall-431', at: [-99, -12], w: 4, eras: ['1300', 'today'], src: 'inferred', ev: 'schematic', conf: 0.2, name: 'Byward Tower gate passage · schematic opening',
    basis: 'The Byward Tower is the gatehouse of the Outer Ward (HE, 1275-85) reached by a causeway from the Middle Tower (HE 1065766); a 4 m opening is cut where the line meets its footprint. Form of the passage is not drawn.' });
  C.push({ id: 'c-gate-traitors', kind: 'gate', wall: 'wall-431', at: [-40, -54.5], w: 5, eras: ['1300', 'today'], src: 'inferred', ev: 'schematic', conf: 0.2, name: 'Traitors\' Gate (St Thomas\'s Tower watergate) · schematic opening',
    basis: 'St Thomas\'s Tower of 1275-85 is the watergate over what is now called Traitors\' Gate (HE; World History Encyclopedia); the OSM waterway starts at (-35.8, -56.9) m. A 5 m opening is cut in the outer line there; the water channel and the river stair are not drawn.' });
  C.push({ id: 'c-gate-bloody', kind: 'gate', wall: 'c-inner-wall', at: ptsOf('building-315'), w: 4, eras: ['1300', 'today'], src: 'inferred', ev: 'schematic', conf: 0.2, name: 'Bloody Tower gate passage · schematic opening',
    basis: 'The Bloody Tower is the Inner Ward\'s watergate gatehouse (c.1220-40, HE inner wall list text); a 4 m opening is cut on the line at its footprint centre. Form of the passage is not drawn.' });

  // towers. The three gatehouses (Byward, Bloody, St Thomas's) are drawn as a pair of flanking towers either side of the opening: the mapped footprints are solid masses that would wall the passage shut.
  const GATE = { 'building-116': ['c-outer-wall', [-99, -12], 8, 5.5], 'building-315': ['c-inner-wall', ptsOf('building-315'), 7, 4.5], 'building-362': ['c-outer-wall', [-40, -54.5], 8, 5] };
  const wallPaths = { 'c-outer-wall': outerPath, 'c-inner-wall': innerPath };
  for (const [id, nm, st, text, ring] of TOWERS) {
    const e = h.byId(id), eras = Object.keys(st);
    if (GATE[id]) {
      const [wid, at, gap, r] = GATE[id];
      for (const era of eras) {
        const n = st[era];
        gateTowers({ wallPath: wallPaths[wid], gateAt: at, id: `c-gt-${id}-${era}`, r, h: th(n), hNote: HRule(n), top: undefined, eras: [era], gap,
          basis: `${nm}: ${text}. Drawn as two flanking towers either side of the gate opening, centred on the mapped footprint (${e.src.replace('osm:', 'OSM ')}); the real gatehouse is one block over the passage, which is not drawn.` })
          .forEach((g, i) => { g.name = `${nm} flanking tower ${i ? 'B' : 'A'} · schematic, ${th(n)} m assumed`; g.src = e.src; if (!i) g.replaces = [id]; C.push(g); });
      }
      continue;
    }
    if (id === 'building-183') { // two cylindrical towers either side of the passage (HE 1065766); the mapped footprint is read as two circles about 12 m apart, a solid mass would close the causeway
      for (const era of eras) { const n = st[era]; [[-142.6, 3.3], [-137.9, 14.7]].forEach((at, i) => C.push({ id: `c-mid-${era}-${i ? 'b' : 'a'}`, kind: 'tower', at, r: 3.6, merlon: true, eras: [era], ...(i ? {} : { replaces: [id] }), src: e.src, ev: 'schematic', conf: 0.2,
        name: `Middle Tower cylindrical tower ${i ? 'B' : 'A'} · schematic, ${th(n)} m assumed`, basis: `Circle centre read from the mapped footprint (${e.src.replace('osm:', 'OSM ')}), +-1.5 m. ${text}. The passage between the two towers is left open.`, h: { v: th(n), src: 'inferred', note: HRule(n) } })); }
      continue;
    }
    for (const era of eras) {
      const n = st[era], bastion = /Legge|Brass/.test(nm);
      C.push({ id: `c-${id}-${era}`, kind: 'building', poly: e.poly, replaces: [id], eras: [era], roof: 'flat', merlon: true, src: e.src, ev: 'schematic', conf: 0.2, unreachableOk: true, unreachableNote: 'a solid schematic tower mass with no stair or door drawn; look at it from the wall line.',
        name: `${nm} · schematic, ${th(n)} m assumed`, basis: `Mapped footprint (${e.src.replace('osm:', 'OSM ')}) raised. ${text}. ${bastion ? 'Drawn as the mapped semicircular footprint.' : ''}`.trim(), h: { v: th(n), src: 'inferred', note: HRule(n) } });
    }
  }

  // Lion Tower
  C.push({ id: 'c-lion-tower', kind: 'bastion', at: [-137, 34], r: 9, eras: ['1300'], merlon: true, src: 'inferred', ev: 'schematic', conf: 0.1, unreachableOk: true, unreachableNote: 'a solid schematic barbican with no stair drawn.',
    name: 'Lion Tower barbican · schematic, position and size assumed, 10 m',
    basis: 'Edward I\'s western entrance ran through the Lion, Middle and Byward Towers, 1275-80; the Lion Tower was excavated north of the Middle Tower in 1936-8 and only foundations survive (LAMAS vol 48 article and HE list entry 1065766). OSM zone 200 (unnamed) sits there; the barbican\'s outline was not read, so a round block of 9 m radius is placed about 20 m north of the Middle Tower, +-15 m. It later held the royal menagerie, which is not drawn.',
    h: { v: 10, src: 'inferred', note: 'assumed two storeys at 3.5 m + 3 m, as the other gate towers' } });

  // wet moat (the HRP page: Edward I\'s water-filled moat, c. 1270s; drained 1843-5). North, east and west strips between the outer wall and the mapped revetments.
  const wallNorth = [[-57.2, 106.2], [-57, 114.7], [-51, 120.9], [-41, 120.9], [46.4, 133.1], [60, 131.3], [113.3, 108.3], [120.9, 107.8], [130.9, 104.2], [135, 95.2]];
  const moatBasis = 'HRP (moat page): Edward I dug a deep water-filled moat in the 1270s (pike stocked 1292), at least 50 m wide and very deep at high tide, wet until drained 1843-5. The strips run from the outer wall to the OSM revetment walls (ways 256517482 area, 731587578, 237302811 and 256517481 vicinity), which are today\'s ditch edges; the real moat edges and its sluices are not mapped.';
  const moatTank = (id, nm, poly) => ({ id, kind: 'tank', poly, eras: ['1300'], src: 'inferred', ev: 'schematic', conf: 0.1, name: `${nm} · schematic water, 2 m deep assumed`, basis: moatBasis, h: { v: 2, src: 'inferred', note: 'assumed depth for the player; HRP says very deep at high tide' }, unreachableOk: true, unreachableNote: 'schematic water surface; not walkable.' });
  C.push(moatTank('c-moat-north', 'North moat', [...wallNorth.map((p) => [p[0] + 0, p[1] + 1.5]), [165, 110.1], [162, 123.8], [59.6, 166.8], [-74.7, 147.8], [-83, 141], [-90.4, 121]]));
  C.push(moatTank('c-moat-east', 'East moat', [[135.2, 93], [133.2, 86.6], [126.9, 82.1], [124.9, 52.1], [124.7, 48.4], [117.2, -67.5], [116.6, -76.8], [139.7, -88], [144, -48.3], [148.7, -10.1], [154, 29.2], [161.1, 75.1], [165, 110.1]].map((p, i, a) => i < 7 ? [p[0] + 1.5, p[1]] : p)));
  C.push(moatTank('c-moat-west', 'West moat', [[-98, -1.8], [-94.6, 7.1], [-89.4, 21.1], [-76.8, 54.4], [-57.2, 106.2], [-90.4, 121], [-144.3, 56.2], [-148.9, 43.2], [-153, 31.5], [-144.8, 28], [-145.9, 25], [-148.7, 16.7], [-141.4, 13.7], [-122, 12]].map((p, i) => i < 5 ? [p[0] - 1.5, p[1]] : p)));

  T.constructed = C;

  T.eras = [
    { id: '1100', year: 'c. 1100', label: 'White Tower', short: 'c. 1100', lens: 'none',
      summary: 'The newly finished keep of William I and William II stands alone in a bailey bounded by the Roman wall to the south and east and a bank and ditch to the north and west.',
      basis: 'The mapped White Tower footprint; Historic England dates the keep c.1078-1100 and gives 3 storeys and a basement; World History Encyclopedia gives 36 x 32.5 m and 27.5 m high and puts the original bailey against the Roman wall; HRP says the 1080s ditch ran on the north and west sides only.',
      conjecture: 'No plan of the first bailey exists in the sources read: its west and north edges are assumed (+-20 m), the Roman wall line is read from one OSM zone, the timber and earth defences, the forebuilding at the south entrance, the Roman wall\'s true course and the 1097 stone wall (one source) are not drawn. The White Tower\'s top storey and domed turrets are later.',
      sources: ['TOW-01', 'TOW-05', 'TOW-07'],
      facts: ['Historic England: keep c.1078-1100 for William I and William II, probably to designs by Gundulf, Bishop of Rochester; angle turrets five storeys, entrance at first-floor level on the south side.', 'World History Encyclopedia: 36 x 32.5 m, 27.5 m tall, Caen stone dressings, whitewashed from 1240 (hence the name).', 'World History Encyclopedia: William Rufus converted the palisade wall to stone in 1097 (one source, not drawn).'] },
    { id: '1300', year: 'c. 1300', label: 'Edward I\'s concentric castle', short: 'c. 1300', lens: 'none',
      summary: 'The finished concentric castle: Henry III\'s and Edward I\'s Inner Ward ringed by the Outer Ward, a wet moat on the land sides and the Lion, Middle and Byward Towers on the west.',
      basis: 'Mapped footprints of the towers carried back; Historic England dates (Inner Ward 1170-1285, Outer Ward 1275-85); HRP for the water-filled moat; LAMAS for the Lion Tower and western entrance.',
      conjecture: 'The mapped footprints are today\'s (many towers were rebuilt or refaced); the Lion Tower and moat edges are placed, not read from a plan; Cradle Tower (1348-55), the wharf, the Great Hall, the Royal Menagerie buildings, the Mint and the postern and Iron Gate at the south-east are not drawn; Brass Mount and Well Tower dates straddle 1300.',
      sources: ['TOW-02', 'TOW-03', 'TOW-04', 'TOW-05', 'TOW-07', 'TOW-08'],
      facts: ['Historic England: outer curtain wall and towers c.1275-85, cost about 21,000 pounds with the new moat; Byward Tower, Legge\'s Mount, Develin Tower, Well Tower and St Thomas\'s Tower in that campaign; south section with Cradle and Well Towers 1348-55 (the Well Tower date appears twice with different values).', 'Historic England: Inner Ward Bell Tower c.1190-1200, Wakefield c.1220-40, Devereux to Salt 1238-75, west wall with Beauchamp 1275-85 (c.1281), south wall heightened and crenellated 1339.', 'HRP: Edward I\'s moat was wet from the 1270s and at least 50 m wide; the Duke of Wellington had it drained in 1843-5.', 'Historic England list entry 1065766: Middle Tower built 1275-81 with cylindrical flanking towers, rebuilt above 1717-19; Lion Tower foundations survive (LAMAS).'] },
    { id: 'today', year: 'Today', label: 'World Heritage site', short: 'Present', lens: 'none',
      summary: 'A World Heritage Site run by Historic Royal Palaces: the White Tower, the Inner and Outer Ward towers, the dry moat, the Waterloo Block and the Victorian restorations.',
      basis: 'The OSM outline, wall line, 27 named tower and building footprints, ditch, walls and surroundings, with the Historic England dates for the standing fabric and the Salvin restorations (1840s-1860s) in each tower\'s note.',
      conjecture: 'No height was read from a survey: the documented layer is kerb-high and the constructed layer assumes every height. The 19th and 20th-century interiors, the Waterloo Block, the Chapel of St Peter ad Vincula and the Crown Jewels buildings are mapped footprints only; the moat is dry (1843-5).',
      sources: ['TOW-01', 'TOW-02', 'TOW-03', 'TOW-04', 'TOW-07'],
      facts: ['HRP: the Duke of Wellington, Constable from 1826, had the moat drained 1843-5; the North Bastion of 1848 was destroyed in the Blitz on 5 October 1940.', 'HRP: gun salutes are fired from the wharf; Royal Mint at the Tower from c.1279 to 1810-12; the Royal Menagerie ran from the 1200s to 1835.', 'Historic England: Salvin restorations of the 1840s-1860s touched the Beauchamp, Broad Arrow, Constable, Brick, Flint, Bowyer and Lanthorn (1883) towers and the Wakefield Tower (1866-9).'] },
  ];
  keepReplacesValid(T);
}

// check_sources validates every constructed element against every era's element list, including eras the element is not drawn in, so a `replaces` or
// `stands_for` id that is absent from any era (removed or not yet built) fails there. Keep only the ids present in every era; for the ones dropped the
// documented footprint stays under the schematic mass in that built view (kerb-high, so it is hidden inside the mass), and the basis says so.
function keepReplacesValid(T) {
  const present = (era, id) => { const d = T.diffs[era] || {}; return (T.elements.some((e) => e.id === id) && !(d.remove || []).includes(id)) || (d.add || []).some((e) => e.id === id); };
  for (const c of T.constructed) {
    const bad = new Set();
    for (const era of T.eras) for (const id of [...(c.replaces || []), ...(c.stands_for ? [c.stands_for] : [])]) if (!present(era.id, id)) bad.add(id);
    if (!bad.size) continue;
    if (c.replaces) c.replaces = c.replaces.filter((id) => !bad.has(id));
    if (c.stands_for && bad.has(c.stands_for)) delete c.stands_for;
    c.basis += ` Footprint ${[...bad].join(", ")} is left out of replaces (absent from some era), so it stays kerb-high under this mass.`;
  }
}
