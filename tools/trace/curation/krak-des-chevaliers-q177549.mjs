// Curation for Krak des Chevaliers (Qal'at al-Hosn), Syria. Evidence and conflicts: docs/research/krak-des-chevaliers-q177549-pass.md.
// No survey plan was opened (Deschamps' plans, Les Chateaux des Croises en Terre Sainte I, 1934, are the classic source and are not open); the written evidence is the
// French Ministry of Culture site "Crac des Chevaliers" (archeologie.culture.gouv.fr/crac-chevaliers), read page by page, an Aramco World article and World History Encyclopedia.
// The documented layer is therefore OSM only (outer outline way 226877188, inner wall line way 375152260). Everything else is the constructed (schematic) layer.
import { carryOver } from './_common.mjs';
import { bastionRing, rectAt, sampleAlong } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Krak des Chevaliers (Qal\'at al-Hosn), Homs, Syria. Hand-curated trace, tier T1: the documented layer is the OSM outer outline (way 226877188) and the OSM inner wall line (way 375152260), with Terrarium terrain. No plan was read.',
  'Base: data/traces/krak-des-chevaliers-q177549.trace.json (OSM ODbL; Terrarium z15 every 10 m, ~30 m SRTM-derived; the 30 m DEM cannot show the ditch, the glacis or terraces).',
  'The constructed (schematic) layer in `constructed[]` is drawn from the French Ministry of Culture site and other written descriptions, placed on the OSM lines (two OSM notches match the stated size of Qalawun\'s tower and sit where the sources put a northern barbican), with assumed heights and shown only in the `<era>~built` eras.',
  'Documented heights: none (the OSM inner wall carries a kerb-height 2 m tag). Not drawn, for lack of any plan: the great cistern (birkeh), the vaulted entrance ramp and its turns, the keep\'s internal rooms, the talus galleries, the machicolated crown form, the Mamluk palace and the town.',
];

const MIN = 'https://archeologie.culture.gouv.fr/crac-chevaliers/en/';
const nearestOn = (p, path, closed = true) => { const P = closed ? [...path, path[0]] : path; let best = [1e9, null, 0]; for (let i = 0; i < P.length - 1; i++) { const a = P[i], b = P[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q, i]; } return best; };
// strip along edge i of a closed ring (ring travels counter-clockwise: interior on the left), from fraction t0 to t1, depth metres inwards
const stripe = (ring, i, t0, t1, depth) => { const a = ring[i], b = ring[(i + 1) % ring.length], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy), nx = -dy / l, ny = dx / l; const p = (t, d) => [+(a[0] + dx * t + nx * d).toFixed(1), +(a[1] + dy * t + ny * d).toFixed(1)]; return [p(t0, 0), p(t1, 0), p(t1, depth), p(t0, depth)]; };

export default function curate(T, h) {
  const S = (id, title, url) => h.source({ id, kind: 'web', title, url, licence: 'read for facts only; no text or images shipped', fetched: '2026-11-27' });
  S('KRAK-MIN', 'Crac des Chevaliers, French Ministry of Culture (pages: first Hospitaller castle, strengthening, final construction phase, great Gothic hall, Baybars\' siege 1271, Mamluk refortification, Baybars\' alterations, Sultan Qalawun\'s tower, entrance system, hammam, latrine tower, residential and religious alterations)', MIN + 'plan-site');
  S('KRAK-ARAMCO', 'The Mountain of the Knights, Aramco World 21(3), May/June 1970', 'https://archive.aramcoworld.com/issue/197003/the.mountain.of.the.knights.htm');
  S('KRAK-WHE', 'Krak des Chevaliers, World History Encyclopedia', 'https://www.worldhistory.org/Krak_Des_Chevaliers/');

  const OUT = h.byId('outline-wall'), IN = h.byId('wall-8');
  OUT.name = 'Outer enceinte line · mapped (OSM way 226877188), elevation unknown';
  IN.name = 'Inner wall line · mapped (OSM way 375152260), 2 m kerb tag';
  const ow = OUT.path, iw = IN.path;

  const H = ['1250', '1271', 'today'];
  const MAM = ['today'];
  const HNOTE = 'Assumed height. No source read gives one. ';
  const out = [];
  const add = (e) => { out.push({ src: 'inferred', ev: 'schematic', conf: 0.15, ...e }); };

  // ---- walls ----
  add({ id: 'c-outer-wall', kind: 'wall', path: ow, closed: true, unreachableOk: true, unreachableNote: 'the 30 m DEM puts this part of the outer ring on a 35-40 degree slope (about 0.8 m per metre), steeper than the walkable step, so it cannot be reached on foot from the courtyard; the real castle has terraces and an entrance ramp that the DEM cannot show', stands_for: 'outline-wall', replaces: ['outline-wall'], thick: 2.4, merlon: true, eras: H, src: OUT.src,
    name: 'Outer enceinte curtain · schematic, 9 m assumed', basis: 'KRAK-MIN (final construction phase): "the low outer enceinte was the first line of defence, and the higher inner enceinte overlooked it"; drawn on the mapped outer line. Crenellated parapet as in World History Encyclopedia.',
    h: { v: 9, src: 'inferred', note: HNOTE + 'the outer enceinte is described as low and the inner as higher; 9 m against 14 m for the inner is an illustration of that ordering' } });
  add({ id: 'c-inner-wall', kind: 'wall', path: iw, closed: true, stands_for: 'wall-8', replaces: ['wall-8'], thick: 3, merlon: true, eras: H, src: IN.src,
    name: 'Inner enceinte curtain · schematic, 14 m assumed', basis: 'KRAK-MIN (strengthening, final phase): the higher inner enceinte with round flanking towers; drawn on the mapped inner wall line (OSM way 375152260), which is assumed to be that enceinte.',
    h: { v: 14, src: 'inferred', note: HNOTE + 'taller than the 9 m outer curtain by the "higher inner enceinte" rule; no measured height read' } });

  // ---- outer towers: round bastions at intervals ("round bastions, arrow slits with niches, brattices spaced at regular intervals", KRAK-MIN final phase) ----
  const QAL = [-8.4, -102.7];                // Qalawun's tower centre
  const EGATE = nearestOn([80, 20], ow)[1].map((v) => +v.toFixed(1));
  const NGATE = nearestOn([35.5, 109.5], ow)[1].map((v) => +v.toFixed(1));
  const SEGT = [75, -76];
  out.push(...bastionRing({ path: ow, spacing: 52, r: 5.5, h: 12, hNote: HNOTE + 'a round flanking tower stands about 3 m above the assumed 9 m curtain', eras: H, idPrefix: 'c-outer-tower',
    basis: 'KRAK-MIN (final construction phase): the outer enceinte "had round bastions, arrow slits with niches, and brattices spaced at regular intervals". The count and exact positions are not given; towers are spaced evenly along the mapped line, clear of the gates and of Qalawun\'s tower.',
    avoid: [[QAL[0], QAL[1], 22], [EGATE[0], EGATE[1], 18], [NGATE[0], NGATE[1], 20], [SEGT[0], SEGT[1], 14]] }).map((e) => ({ ...e, name: e.name.replace('Round bastion', 'Outer round tower') })));

  // ---- inner towers ----
  const KEEP = [iw[0], iw[1], iw[2]];       // SW, S and SE keep towers on the south run of the inner line
  const IGATE = nearestOn([66.2, -29], iw)[1].map((v) => +v.toFixed(1));
  out.push(...bastionRing({ path: iw, spacing: 44, r: 5, h: 18, hNote: HNOTE + 'inner flanking towers stand above the assumed 14 m curtain', eras: H, idPrefix: 'c-inner-tower',
    basis: 'KRAK-MIN (strengthening, Mamluk refortification): the inner enceinte has round flanking towers "following standards set under Philippe Auguste". Count and positions are not given; towers are spaced along the mapped inner line, clear of the keep and the east gate.',
    avoid: [[iw[0][0], iw[0][1], 18], [iw[1][0], iw[1][1], 18], [iw[2][0], iw[2][1], 18], [iw[3][0], iw[3][1], 14], [IGATE[0], IGATE[1], 18]] }).map((e) => ({ ...e, name: e.name.replace('Round bastion', 'Inner round tower') })));

  // ---- the keep (south of the earliest castle): three round towers linked by buildings, more than four levels ----
  const keepBasis = 'KRAK-MIN (strengthening, 13th c.): "the keep, south of the earliest castle, is made of three round towers linked by buildings", extending "over more than four levels". Placed on the south run of the mapped inner line (corners V0, V1, V2 of OSM way 375152260); which corner is which tower is assumed.';
  const KH = { v: 22, src: 'inferred', note: HNOTE + 'more than four levels at about 5 m each' };
  add({ id: 'c-keep-sw-hospitaller', kind: 'tower', at: iw[0], r: 7, h: KH, merlon: true, eras: ['1250', '1271'], name: 'Keep south-west tower (Hospitaller) · schematic, 22 m assumed',
    basis: keepBasis + ' KRAK-MIN (final phase): the castellan\'s quarters were probably on its top floor; (Baybars\' alterations) this tower was destroyed by Aleppine sappers in 1271 and rebuilt.' });
  add({ id: 'c-keep-sw-baybars', kind: 'tower', at: iw[0], r: 7.5, h: KH, merlon: true, eras: MAM, name: 'Keep south-west tower (rebuilt by Baybars, 1271) · schematic, 22 m assumed',
    basis: 'KRAK-MIN (Baybars\' alterations): round, about 15 m in diameter, solid base with a massive talus, octagonal interior around a central pillar, inscription of 1271; on the site of the Hospitaller tower. Height assumed to match the keep towers; the page says it is levelled to its machicolations today.' });
  add({ id: 'c-keep-south', kind: 'tower', at: iw[1], r: 8, h: KH, merlon: true, eras: H, name: 'Keep south tower · schematic, 22 m assumed', basis: keepBasis + ' The page names a south tower and a south-east tower of the keep.' });
  add({ id: 'c-keep-southeast', kind: 'tower', at: iw[2], r: 7.5, h: KH, merlon: true, eras: H, name: 'Keep south-east tower · schematic, 22 m assumed', basis: keepBasis });
  const keepRange = (i, id, nm) => add({ id, kind: 'building', poly: stripe(iw, i, 0, 1, 11), roof: 'flat', merlon: true, eras: H, unreachableOk: true, unreachableNote: 'a solid schematic range with no stair or door drawn; look at it from the courtyard.', name: nm, basis: keepBasis + ' Depth of 11 m is assumed.', h: { v: 15, src: 'inferred', note: HNOTE + 'below the 22 m towers; four levels would be higher, this is a massing' } });
  keepRange(0, 'c-keep-range-1', 'Keep range between south-west and south towers · schematic, 15 m assumed');
  keepRange(1, 'c-keep-range-2', 'Keep range between south and south-east towers · schematic, 15 m assumed');

  // ---- Qalawun's south tower (1285): 17 x 20 m, 15 m beyond the curtain; sits in the OSM notch of vertices 3-6 ----
  add({ id: 'c-qalawun-tower', kind: 'building', poly: rectAt(QAL, 17, 20, -4.7), roof: 'flat', merlon: true, eras: MAM, src: 'osm:way/226877188', unreachableOk: true, unreachableNote: 'a solid schematic mass; the real tower is solid at the base with casemates above, none drawn.',
    name: 'Sultan Qalawun\'s south tower (1285) · schematic, 22 m assumed', basis: 'KRAK-MIN (Sultan Qalawun\'s tower): quadrangular, 684 AH (1285) inscription, "projects 15 metres beyond the curtain", width nearly 17 m, depth about 20 m, solid base, casemates around a central pillar, double crown of corbelled machicolation and parapet walk. Position: the 15 x 16 m notch in the OSM outline (way 226877188, vertices 3-6) matches that size and is taken to be it, an inference.',
    h: { v: 22, src: 'inferred', note: HNOTE + 'matched to the keep towers; no height is given' } });

  // ---- Mamluk east gate tower and SE gate tower, barlong towers ----
  const ew = nearestOn(EGATE, ow); const et = (() => { const P = [...ow, ow[0]], a = P[ew[2]], b = P[ew[2] + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]); return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; })();
  const ang = (t) => Math.atan2(t[1], t[0]) * 180 / Math.PI;
  add({ id: 'c-east-gate-tower', kind: 'building', poly: rectAt([EGATE[0] - 3.5, EGATE[1] - 0.3], 14, 9, ang(et)), roof: 'flat', merlon: true, eras: MAM, unreachableOk: true, unreachableNote: 'a solid schematic block drawn beside the opening cut in the wall, no passage inside.',
    name: 'East gate tower (Mamluk, restored 1301-02) · schematic, 16 m assumed', basis: 'KRAK-MIN (redesign of the entrance system): a large slightly protruding quadrangular tower on the eastern face, three brattices, inscriptions of 1301-02 and 1345, opening onto a long access ramp later vaulted. Position on the east face is assumed (no plan); the vaulted ramp is not drawn. Offset 3.5 m inside the opening so the passage stays clear.',
    h: { v: 16, src: 'inferred', note: HNOTE + 'above the 14 m inner curtain is not implied; a gate tower of three levels at about 5 m' } });
  add({ id: 'c-se-gate-tower', kind: 'tower', at: SEGT, r: 6.5, h: { v: 14, src: 'inferred', note: HNOTE + 'solid base plus two floors of casemates (KRAK-MIN) at about 5 m, plus the crown' }, merlon: true, eras: MAM,
    name: 'South-east gate tower (Mamluk, 1271-78) · schematic, 14 m assumed', basis: 'KRAK-MIN (Baybars\' alterations): semicircular, about 13 m in diameter, solid base with two floors of casemates, built against a gate in the Crusader enceinte, inscriptions of 1271 and 1278. Drawn as a round tower on the OSM south-east notch (way 226877188, vertices 12-15), whose position it is assumed to take; the semicircular plan and the gate beside it are not drawn.' });
  const barlong = (id, p, nm) => { const [d, q, i] = nearestOn(p, ow); const P = [...ow, ow[0]], a = P[i], b = P[i + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]), t = [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; add({ id, kind: 'building', poly: rectAt([q[0] - 3, q[1]], 14, 9, ang(t)), roof: 'flat', merlon: true, eras: MAM, unreachableOk: true, unreachableNote: 'a solid schematic barlong tower with no door or stair drawn.', name: nm, basis: 'KRAK-MIN (Mamluk refortification; residential alterations): large quadrangular "barlong" towers on the eastern face with an enormous talus, housing the garrison. How many there were and where is not given: two are placed on the mapped east line at assumed positions, 14 x 9 m assumed.', h: { v: 16, src: 'inferred', note: HNOTE + 'three levels at about 5 m' } }); };
  barlong('c-barlong-east-1', [83, -38], 'Barlong tower, east face (Mamluk) · schematic, 16 m assumed');
  barlong('c-barlong-east-2', [74, 55], 'Barlong tower, east face, northern one (Mamluk) · schematic, 16 m assumed');

  // ---- northern barbican (Nicolas Lorgne's) on the mapped northern notch, portcullis ----
  const nw = nearestOn(NGATE, ow);
  const nt = (() => { const P = [...ow, ow[0]], a = P[nw[2]], b = P[nw[2] + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]); return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; })();
  [-1, 1].forEach((s, k) => add({ id: `c-north-barbican-${k ? 'b' : 'a'}`, kind: 'tower', at: [+(NGATE[0] + s * nt[0] * 7).toFixed(1), +(NGATE[1] + s * nt[1] * 7).toFixed(1)], r: 3.6, h: { v: 12, src: 'inferred', note: HNOTE + 'a gate flanker at the same height as the 12 m outer towers' }, merlon: true, eras: H,
    name: `Northern barbican tower ${k ? 'B' : 'A'} (Nicolas Lorgne's) · schematic, 12 m assumed`, basis: 'KRAK-MIN (Baybars\' siege, Baybars\' alterations): a northern postern, "Nicolas Lorgne\'s barbican", damaged in 1271 and rebuilt, with a portcullis. Its plan is not given; two small flanking towers are drawn at the northern notch of the OSM outline (vertices 25-30), an assumed position, the gate form (a portcullis) is not drawn.' }));

  // ---- gates (schematic openings; positions assumed, see basis) ----
  add({ id: 'c-gate-east', kind: 'gate', wall: 'outline-wall', unreachableOk: true, unreachableNote: 'the 30 m DEM puts this part of the outer ring on a 35-40 degree slope (about 0.8 m per metre), steeper than the walkable step, so it cannot be reached on foot from the courtyard; the real castle has terraces and an entrance ramp that the DEM cannot show', at: EGATE, w: 4, eras: H, name: 'East gate of the outer enceinte · schematic opening, position assumed',
    basis: 'KRAK-MIN (Baybars\' siege): "the east gate sector" was badly damaged in 1271 and rebuilt, so an east gate stood in the outer enceinte; its exact place is not given. 4 m opening assumed.' });
  add({ id: 'c-gate-north', kind: 'gate', wall: 'outline-wall', unreachableOk: true, unreachableNote: 'the 30 m DEM puts this part of the outer ring on a 35-40 degree slope (about 0.8 m per metre), steeper than the walkable step, so it cannot be reached on foot from the courtyard; the real castle has terraces and an entrance ramp that the DEM cannot show', at: NGATE, w: 3.5, eras: H, name: 'Northern postern (Nicolas Lorgne\'s barbican) · schematic opening, position assumed',
    basis: 'KRAK-MIN (Baybars\' siege): the northern postern, "Nicolas Lorgne\'s barbican", was badly damaged in 1271 and rebuilt; placed on the OSM northern notch (an assumption). 3.5 m opening assumed.' });
  const it = (() => { const P = [...iw, iw[0]], q = nearestOn(IGATE, iw), a = P[q[2]], b = P[q[2] + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]); return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; })();
  add({ id: 'c-gate-inner-east', kind: 'gate', wall: 'wall-8', at: IGATE, w: 3.5, eras: H, name: 'Inner enceinte east gate · schematic opening, position assumed',
    basis: 'KRAK-MIN (first Hospitaller castle): the main gate, "in the centre of the east wall, flanked by two quadrangular towers", with a murder hole and portcullis; placed at the middle of the mapped inner east run. The passage and its turns are not drawn. 3.5 m opening assumed.' });
  [-1, 1].forEach((s, k) => add({ id: `c-inner-gate-tower-${k ? 'b' : 'a'}`, kind: 'building', poly: rectAt([IGATE[0] + s * it[0] * 8.5 - it[1] * 0 - 0, IGATE[1] + s * it[1] * 8.5], 7, 8, ang(it)), roof: 'flat', merlon: true, eras: H, unreachableOk: true, unreachableNote: 'a solid schematic gate tower with no door or stair drawn.',
    name: `Inner east gate tower ${k ? 'B' : 'A'} (quadrangular) · schematic, 16 m assumed`, basis: 'KRAK-MIN (first Hospitaller castle): the main gate was flanked by two quadrangular towers. 7 x 8 m assumed; no dimension is given.', h: { v: 16, src: 'inferred', note: HNOTE + 'a little above the 14 m inner curtain' } }));

  // ---- interior (inner ward) ----
  const gal = (i, t0, t1, id, nm, d = 6) => add({ id, kind: 'building', poly: stripe(iw, i, t0, t1, d), roof: 'flat', eras: H, unreachableOk: true, unreachableNote: 'a solid schematic range with no door drawn.', name: nm, basis: 'KRAK-MIN (first Hospitaller castle): against the inner face of the enceinte ran vaulted rooms forming an almost continuous gallery, interrupted on the east face by the chapel and the main gate, opening onto a central courtyard. Which runs survive in 1250 and the 6 m depth are assumed.', h: { v: 6, src: 'inferred', note: HNOTE + 'one vaulted storey' } });
  gal(18, 0.03, 0.30, 'c-gallery-west-s', 'Vaulted gallery, west run south · schematic, 6 m assumed');
  gal(18, 0.71, 0.98, 'c-gallery-west-n', 'Vaulted gallery, west run north · schematic, 6 m assumed');
  for (const i of [17, 16, 15, 14, 13, 12, 11, 10]) gal(i, 0.02, 0.98, `c-gallery-${i}`, `Vaulted gallery, north run ${i} · schematic, 6 m assumed`);
  add({ id: 'c-great-hall', kind: 'building', poly: stripe(iw, 18, 0.34, 0.67, 7.5), roof: 'flat', merlon: false, eras: H, unreachableOk: true, unreachableNote: 'a solid schematic hall with no door drawn.',
    name: 'Great Gothic hall · schematic, 11 m assumed', basis: 'KRAK-MIN (great Gothic hall): about 27 x 7.5 m, three ribbed-vault bays, built about the mid-13th century, with a portico on its east side onto the courtyard. Placed on the west run of the inner wall (a guess: the page says only "inside the upper castle, close to the chapel").', h: { v: 11, src: 'inferred', note: HNOTE + 'a two-level hall, vault about 8 m under a roof' } });
  const pt = stripe(iw, 18, 0.34, 0.67, 11); const hall = stripe(iw, 18, 0.34, 0.67, 7.5);
  add({ id: 'c-hall-portico', kind: 'building', poly: [hall[3], hall[2], pt[2], pt[3]], roof: 'flat', eras: H, unreachableOk: true, unreachableNote: 'a solid schematic strip standing for the portico; its five twin bays are not drawn.',
    name: 'Portico of the great hall · schematic, 5 m assumed', basis: 'KRAK-MIN (great Gothic hall): a cloister-like portico precedes the hall to the east, five twin bays on slender columns. Depth of 3.5 m assumed.', h: { v: 5, src: 'inferred', note: HNOTE + 'a single bay height' } });
  add({ id: 'c-chapel', kind: 'building', poly: stripe(iw, 7, 0.05, 0.75, 9), roof: 'flat', eras: H.concat(), unreachableOk: true, unreachableNote: 'a solid schematic chapel with no door drawn.',
    name: 'Chapel (a mosque from the Mamluk period) · schematic, 10 m assumed', basis: 'KRAK-MIN (first Hospitaller castle; residential and religious alterations): the chapel stood on the east face of the gallery beside the main gate and was kept as a mosque by the Mamluks. No dimension is given; 23 x 9 m is assumed.', h: { v: 10, src: 'inferred', note: HNOTE + 'a vaulted nave about 10 m' } });

  // ---- latrine tower, stables, hammam ----
  const L = nearestOn([-15, 60], iw)[1];
  add({ id: 'c-latrine-tower', kind: 'building', poly: rectAt([L[0] - 5, L[1] + 5], 8, 9, 45), roof: 'flat', merlon: true, eras: H, unreachableOk: true, unreachableNote: 'a solid schematic tower with no door drawn.',
    name: 'Latrine tower (tower D, north-west) · schematic, 14 m assumed', basis: 'KRAK-MIN (first Hospitaller castle; latrine tower): the large latrine tower lay to the north-west of the earliest castle, with a vertical conduit into three machicolations, late 12th c. Its size is not given; 8 x 9 m is assumed, on the north-west corner of the mapped inner line.', h: { v: 14, src: 'inferred', note: HNOTE + 'an inner-curtain height' } });
  add({ id: 'c-stables', kind: 'building', poly: rectAt([32, -90.5], 60, 8, 0), roof: 'flat', eras: H, unreachableOk: true, unreachableNote: 'a solid schematic range with no door drawn.',
    name: 'Stables (60 m) · schematic, 6 m assumed', basis: 'KRAK-MIN (final construction phase): the stables abut the southern section and are 60 m long. Width of 8 m and the position (between the keep and the outer line, east of Qalawun\'s tower) are assumed.', h: { v: 6, src: 'inferred', note: HNOTE + 'one vaulted storey' } });
  add({ id: 'c-hammam', kind: 'building', poly: rectAt([56, -80], 12, 8, 0), roof: 'flat', eras: MAM, unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn; its domes are not drawn.',
    name: 'Hammam (Mamluk) · schematic, 6 m assumed', basis: 'KRAK-MIN (hammam): in the south-east corner of the castle, in the southern lists, below the large cistern; undated, probably one of the Mamluks\' first changes. No dimension is given; 12 x 8 m is assumed.', h: { v: 6, src: 'inferred', note: HNOTE + 'a single-storey bath block' } });

  T.constructed = out;

  // ---- eras (documented layer: the OSM lines carried back, marked inferred) ----
  const keep = ['outline', 'outline-wall', 'wall-8'];
  carryOver(T, '1250', keep, { note: 'the mapped outer outline and inner wall line are assumed unchanged since the mid-13th century; the outline includes Mamluk additions (Qalawun\'s tower, 1285), which no plan separates' });
  carryOver(T, '1271', keep, { note: 'the mapped outer outline and inner wall line are assumed unchanged since 1271; the outline includes later Mamluk additions' });
  T.eras = [
    { id: '1250', year: 'c. 1250', label: 'Hospitaller concentric castle', short: 'c. 1250', lens: 'none',
      summary: 'The Hospitaller castle after its final construction phase: a low outer enceinte with round towers around a higher inner enceinte, the three-tower keep at the south, the great Gothic hall, stables and chapel.',
      basis: 'KRAK-MIN: the castle built from after 1160, rebuilt after the earthquakes of 1202-03 with a double enceinte, the great hall and stables in the mid-13th century. The documented layer is only the two OSM lines carried back; every tower, hall and gate is on the constructed layer.',
      conjecture: 'No plan was read, so no tower, gate or building is placed from a survey: positions follow the OSM lines and are assumed (+-15 m at best). The OSM outline includes Mamluk fabric (Qalawun\'s tower of 1285) and cannot be separated from the 13th-century line. Not drawn: the great cistern in the south ditch, the entrance ramp and its three turns, the keep\'s interior, the glacis, the town and the lists\' extent.',
      sources: ['KRAK-MIN', 'KRAK-ARAMCO', 'KRAK-WHE'],
      facts: ['KRAK-MIN: oldest remains date from after 1160; the first castle had an irregular polygonal enceinte, a main east gate with two quadrangular towers, a vaulted gallery against its inner face, a chapel on the east face, a great tower (G) to the south and a latrine tower (D) to the north-west.', 'KRAK-MIN: new fortifications began in 1202-03 after earthquakes; the keep is three round towers linked by buildings; the final phase added the outer enceinte with round bastions, the great hall (27 x 7.5 m) and the 60 m stables, and made the old southern ditch a large cistern.', 'KRAK-MIN: about 60 knights were in garrison, each with a sergeant, and a theoretical 300 horses; KRAK-ARAMCO gives an 80 ft (about 24 m) thick south wall.'] },
    { id: '1271', year: '1271', label: 'Baybars\' siege', short: '1271', lens: 'none',
      summary: 'The castle as Sultan Baybars besieged it from February to 8 April 1271: the Hospitaller layout, before the south-west tower fell and the Mamluk refortification.',
      basis: 'KRAK-MIN (Baybars\' siege): Baybars\' army took the town, then the "blacksmith\'s" barbican; Aleppo miners undermined towers on the south, north and east; a tower collapsed on 30 March and the lower ward was entered; the garrison asked for aman on 8 April.',
      conjecture: 'The constructed geometry is the same as c. 1250: the page does not name the tower that collapsed or its face, so no breach is drawn. The blacksmith\'s barbican is not located and not drawn. The southern face "took the heaviest projectile damage" and was refaced, but how much stood before is unknown.',
      sources: ['KRAK-MIN', 'KRAK-WHE'],
      facts: ['KRAK-MIN: miners dug under towers on the south, north and east faces; one collapsed on 30 March; the southern face was completely refaced afterwards; the northern postern (Nicolas Lorgne\'s barbican) and the east gate sector were badly damaged and rebuilt.', 'KRAK-WHE: Baybars arrived on 21 February, attacked from 3 March, used catapults from 18 March; the Hospitallers surrendered on 8 April, possibly after a forged letter; they left for Cyprus by 1291.'] },
    { id: 'today', year: 'Today', label: 'Mamluk castle and monument', short: 'Monument', lens: 'none',
      summary: 'The castle as it stands after the Mamluk rebuilding: the south-west tower of 1271, the south-east gate tower, Qalawun\'s south tower of 1285, the east barlong towers, the hammam and the chapel turned into a mosque.',
      basis: 'KRAK-MIN (Mamluk refortification, Baybars\' alterations, Qalawun\'s tower, entrance system, hammam): the Mamluks kept the Hospitaller plan, refaced and raised it with machicolated crowns, and added the towers above. The documented layer is the OSM lines.',
      conjecture: 'No dated plan or photograph of the present state was read, and the damage of the Syrian civil war (2011-2014), reported only as limited by KRAK-WHE, is not shown. Heights are assumed. The positions of the east gate tower, barlong towers and south-east tower are assumptions on the OSM east line. The Mamluk palace over the hall\'s portico (only a portal survives) and the vaulted ramp are not drawn.',
      sources: ['KRAK-MIN', 'KRAK-ARAMCO', 'KRAK-WHE'],
      facts: ['KRAK-MIN: Qalawun\'s tower is dated 684 AH (1285); the east gate tower carries inscriptions of 1301-02 and 1345; the south-east gate tower carries inscriptions of 1271 and 1278; the south-west tower was rebuilt about 15 m in diameter.', 'KRAK-MIN: the Mamluks converted the chapel into a mosque (three mihrabs in the south wall, a minbar) and built a hammam in the south-east lists.', 'KRAK-WHE: UNESCO-listed; the Syrian civil war damage is described as limited.'] },
  ];
}
