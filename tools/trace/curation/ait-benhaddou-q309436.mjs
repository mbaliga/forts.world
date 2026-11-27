// Curation for Aït Benhaddou, Ouarzazate Province, Morocco (world-fort curation batch, 2026-11-27). Evidence and conflicts: docs/research/ait-benhaddou-q309436-pass.md.
// No plan, survey or dated image was found open, so there is no plan registration. Positions are OSM (the old granary "Vieux Grenier (Agadir)", four city_wall ways, the city_gate footprint,
// about 70 building footprints of the ksar and the Kasbah Aït Ougram); meanings are from the UNESCO list entry 444, Archnet, Wikipedia, CRATerre (Boussalh 2008) and secondary pages.
// The shared base trace must be rebuilt for this window first (build-options.json: siteWay 209569672, minHalf=maxHalf 450, stride 10): the old base was centred on the Sidi Ali ou Amar tomb and missed the ksar.
import { carryOver, rectAt } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Aït Benhaddou, Morocco. Hand-curated trace: tier T1 for position (OSM-mapped granary, wall fragments, gate footprint and building footprints; no plan found) plus a schematic constructed layer.',
  'Base: data/traces/ait-benhaddou-q309436.trace.json (OSM ODbL; Terrarium z15 every 10 m, ~30 m SRTM-derived, so the hill, scarps and terraces are smoothed). Window 900 m, centred on the granary.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions (UNESCO, Wikipedia, CRATerre, secondary pages) with assumed heights and is shown only in the `<era>~built` eras. Documented heights: none.',
  'The ksar enclosure is drawn on the mapped wall fragments, joined by straight inferred runs; which footprints are kasbahs is not mapped (the six largest are drawn as such, flagged).',
];

const cen = (p) => [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length];
const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const j = (i + 1) % p.length; s += p[i][0] * p[j][1] - p[j][0] * p[i][1]; } return Math.abs(s) / 2; };
const r1 = (v) => +v.toFixed(1);
const inPoly = (x, y, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > y) !== (P[j][1] > y) && x < ((P[j][0] - P[i][0]) * (y - P[i][1])) / (P[j][1] - P[i][1]) + P[i][0]) c = !c; return c; };
const inKsar = (c) => c[0] >= -20 && c[0] <= 200 && c[1] >= -180 && c[1] <= 15;
const ALL = ['17c', '1987', 'today'];

// Four corner turrets on a kasbah footprint: pick up to four well-spread vertices with a near right angle, seat a 3.4 m square flush in the corner.
function turrets(poly, size = 3.4) {
  const n = poly.length, c = cen(poly), out = [], chosen = [];
  const cand = poly.map((v, i) => {
    const a = poly[(i + n - 1) % n], b = poly[(i + 1) % n];
    const u = [b[0] - v[0], b[1] - v[1]], w = [a[0] - v[0], a[1] - v[1]], lu = Math.hypot(...u) || 1, lw = Math.hypot(...w) || 1;
    const cos = (u[0] * w[0] + u[1] * w[1]) / (lu * lw), ang = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
    return { v, u: [u[0] / lu, u[1] / lu], w: [w[0] / lw, w[1] / lw], ang, lu, lw };
  }).filter((k) => k.ang > 70 && k.ang < 110 && k.lu > size + 1 && k.lw > size + 1);
  while (chosen.length < 4 && cand.length) {
    cand.sort((p, q) => (Math.min(...chosen.map((k) => Math.hypot(q.v[0] - k.v[0], q.v[1] - k.v[1])), 1e9) - Math.min(...chosen.map((k) => Math.hypot(p.v[0] - k.v[0], p.v[1] - k.v[1])), 1e9)) || (Math.hypot(q.v[0] - c[0], q.v[1] - c[1]) - Math.hypot(p.v[0] - c[0], p.v[1] - c[1])));
    const k = cand.shift();
    if (chosen.some((o) => Math.hypot(o.v[0] - k.v[0], o.v[1] - k.v[1]) < 2 * size)) continue;
    chosen.push(k);
  }
  for (const k of chosen) {
    const p = [k.v, [k.v[0] + k.u[0] * size, k.v[1] + k.u[1] * size], [k.v[0] + (k.u[0] + k.w[0]) * size, k.v[1] + (k.u[1] + k.w[1]) * size], [k.v[0] + k.w[0] * size, k.v[1] + k.w[1] * size]].map((q) => [r1(q[0]), r1(q[1])]);
    const m = cen(p); if (inPoly(m[0], m[1], poly)) out.push(p);
  }
  return out;
}

export default function curate(T, h) {
  const g0 = h.ground(0, 0);
  console.error(`${T.id}: DEM ground at the granary ${Number.isFinite(g0) ? g0.toFixed(1) : 'n/a'} m (CRATerre gives about 1,300 m for the hill)`);
  T.name = 'Aït Benhaddou';

  // ---- names and notes on the mapped features ------------------------------------------------------------------------------------------------------------
  const N = (id, name, note) => { const e = h.byId(id); e.name = name; if (note) e.note = note; return e; };
  N('outline', 'Old granary "Vieux Grenier (Agadir)" · mapped footprint (OSM way 209569672)', 'OSM tags this footprint building=granary, historic=granary and ruins=no; the footprint is about 9 x 12 m. UNESCO and Wikipedia describe "the remains of a large fortified granary" (agadir) at the top of the hill, and CRATerre calls it the first construction on the site, so the small mapped footprint is the surviving core, not the extent of the original.');
  N('wall-17', 'Hilltop (agadir) enclosure wall · mapped city_wall (OSM way 209569673), height unknown', 'A closed 25-vertex ring about 100 x 130 m round the granary on the summit. Reading it as the granary enclosure is a position match, not a source statement; CRATerre (2008) says the enclosure of the collective granary is poorly preserved.');
  N('wall-18', 'Hilltop wall running north-east · mapped city_wall (OSM way 209570857), height unknown', 'Leaves the north end of the summit ring and runs about 100 m north-east. Its purpose is not stated in any source read.');
  N('wall-22', 'Ksar wall, north-east arc · mapped city_wall (OSM way 230881107), height unknown', 'Leaves the south-east side of the summit ring and arcs east above the houses to about 167 m east of the granary. The south-east and the west sides of the ksar have no mapped wall.');
  N('wall-38', 'Wall east of the gate · mapped city_wall (OSM way 319901078), height unknown', 'A 50 m run that continues east from the mapped gate footprint.');
  N('building-350', 'Ksar gate · mapped footprint (OSM way 1358418123, historic=city_gate)', 'UNESCO says the entrance is "pierced with a baffle gate" (a bent entrance). The mapped footprint is a 22 x 6 m block with two bays; it does not show the bend, and no gate leaf, tower or passage height is mapped.');
  N('building-36', 'Kasbah Aït Ougram · mapped footprint (OSM way 284022562, rammed earth, museum)', 'OSM tags building:material=rammed earth and tourism=museum; Wikidata Q124454126. The only kasbah named on the map.');
  N('building-16', 'Marabout of Sidi Ali ou Amar · mapped footprint (OSM way 209569671, historic=tomb)', 'UNESCO lists a sanctuary of Saint Sidi Ali or Amer among the community structures. It stands about 330 m north of the granary; no date is given.');
  N('zone-39', 'Muslim cemetery · mapped (OSM way 319901104)');
  N('marker-1', 'Kasbah de Aït Ben Haddou · mapped point (OSM node 439366796, historic=castle)');
  N('marker-2', 'Ksar of Ait-Ben-Haddou · mapped point (OSM node 2490383234, WHC ref 444, inscribed 1987)');
  for (const id of ['marker-1', 'marker-2']) Object.assign(h.byId(id), { unreachableOk: true, unreachableNote: 'the mapped point lies inside a house footprint that the constructed layer raises to a solid mass' });
  N('waterway-59', 'Asif Ounila (Ounila river) · mapped (OSM way 407036431), intermittent', 'OSM tags the river intermittent=yes. Its course is the mapped one; the sources place the ksar on the Ounila (CRATerre calls the stream the Oued El-Maleh).');

  // ---- budget: the 900 m window holds a modern village (about 190 footprints) and 60 tracks across the river; far context is dropped so the trace stays inside 250 KB
  const far = (c) => c[0] < -300 || c[1] < -400;
  let dropped = 0;
  for (const e of T.elements.slice()) {
    const g = e.poly || e.path; if (!g || e.kind === 'waterway' || e.kind === 'cliff' || e.kind === 'wall' && !far(cen(g))) continue;
    if ((e.kind === 'building' || e.kind === 'road' || e.kind === 'wall') && far(cen(g))) { h.remove(e.id); dropped++; }
  }
  console.error(`${T.id}: dropped ${dropped} far context elements (modern village and tracks beyond 300 m west / 400 m south of the granary)`);

  // ---- the ksar's own footprints --------------------------------------------------------------------------------------------------------------------------
  const K = h.all('building').filter((b) => inKsar(cen(b.poly)) || ['building-240', 'building-241'].includes(b.id));
  K.forEach((b) => { if (b.id !== 'building-36') { b.name = `Ksar house footprint · mapped (${b.src.replace('osm:way/', 'OSM way ')}), elevation unknown`; } });
  const kasbahs = K.slice().sort((a, b) => area(b.poly) - area(a.poly)).slice(0, 6);
  const kasbahIds = new Set(kasbahs.map((b) => b.id));
  console.error(`${T.id}: ${K.length} ksar footprints; six largest (m2): ${kasbahs.map((b) => `${b.id}=${Math.round(area(b.poly))}`).join(', ')}`);

  // ---- eras (documented layer) ----------------------------------------------------------------------------------------------------------------------------
  const ksarIds = ['outline', 'wall-17', 'wall-18', 'wall-22', 'wall-38', 'building-350', 'cliff-32', 'cliff-33', 'cliff-40', 'cliff-43', 'waterway-59', ...K.map((b) => b.id)];
  carryOver(T, '17c', ksarIds, { note: 'present mapped line assumed unchanged since the 17th c. (era conjecture)' });
  carryOver(T, '1987', [...ksarIds, 'building-16', 'zone-39'], { note: 'present mapped line assumed unchanged since 1987 (era conjecture)' });

  // ---- constructed (schematic) layer ----------------------------------------------------------------------------------------------------------------------
  const C = [];
  const WALL_H = 5, TOWER_H = 9, KASBAH_H = 12.8, HOUSE_H = 6.4;
  const w22 = h.byId('wall-22').path, w38 = h.byId('wall-38').path, w17 = h.byId('wall-17').path, w18 = h.byId('wall-18').path;
  const wallBasis = 'UNESCO (whc.unesco.org/list/444): the houses are packed within defensive walls reinforced by angle towers, entrance through a baffle gate; Wikipedia: enclosed by a defensive wall with corner towers and a gate. Drawn on the mapped city_wall fragments, joined by straight runs along the outer edge of the mapped houses.';
  const wallH = { v: WALL_H, src: 'inferred', note: 'rammed-earth curtain assumed 5 m (about a storey and a half); no wall height is given in any source read' };

  // the ksar enclosure: mapped wall-22 and wall-38, joined by straight inferred runs; the gate sits in the south run
  const enclosure = [
    w17[8], w17[9], w17[10], w17[11],         // summit-ring edge running up the south-east side to (52.1,-8.2), so the wall starts on the ring
    ...w22,                                   // mapped north-east arc to (167.1,-42.8)
    [172, -125], w38[3],                      // inferred east run down to the end of wall-38
    w38[2], w38[1], w38[0], [122, -221.5], [111.7, -222.4],   // mapped wall-38 reversed, then the gate (mapped footprint spans x 111.7-133.2)
    [88, -221.5], [74, -219.8],               // inferred south run
    [-25.7, -125.6], [-12, -100], w17[7],     // inferred west run up the edge of the houses to the summit ring; the ring edge w17[7]-w17[8] closes it
  ].map((p) => [r1(p[0]), r1(p[1])]);
  const gateAt = [122, -221.5];
  C.push({ id: 'c-ksar-wall', kind: 'wall', path: enclosure, closed: true, thick: 1.4, replaces: ['wall-22', 'wall-38'], src: 'osm:way/230881107', ev: 'schematic', conf: 0.2, eras: ALL,
    name: `Ksar enclosure wall · schematic, ${WALL_H} m assumed`, basis: wallBasis, h: wallH });
  C.push({ id: 'c-gate', kind: 'gate', wall: 'c-ksar-wall', at: gateAt, w: 6, src: 'osm:way/1358418123', ev: 'schematic', conf: 0.2, eras: ALL,
    name: 'Ksar gate · schematic opening', basis: 'UNESCO: the entrance is pierced with a baffle gate; the mapped gate footprint (OSM way 1358418123, historic=city_gate) marks where. A plain 4 m opening is cut in the schematic wall; the bend (baffle) is not drawn because no plan shows it.' });
  const gateTower = (id, x, y, lab) => C.push({ id, kind: 'building', poly: rectAt([x, y], 5, 5, 0), roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic tower with no door or stair drawn; look at it from the lane.', src: 'inferred', ev: 'schematic', conf: 0.15, eras: ALL,
    name: `${lab} · schematic, ${TOWER_H} m assumed`, basis: 'UNESCO: the high walls are reinforced by angle towers; Studio Matrx (secondary) describes corner watch-towers commanding the approaches. Placed where the mapped wall turns, or beside the mapped gate.', h: { v: TOWER_H, src: 'inferred', note: 'wall 5 m plus one storey of 4 m; no tower height is given in any source read' } });
  gateTower('c-tower-gate-w', 106, -222.4, 'Gate tower, west');
  gateTower('c-tower-gate-e', 138, -221.5, 'Gate tower, east');
  const corners = [[w22[4], 'Angle tower, north-east summit'], [w22[8], 'Angle tower, east'], [w38[3], 'Angle tower, south-east'], [[74, -219.8], 'Angle tower, south'], [[-25.7, -125.6], 'Angle tower, west'], [w17[7], 'Angle tower, summit ring south']];
  corners.forEach(([p, lab], i) => gateTower(`c-tower-${i + 1}`, r1(p[0]), r1(p[1]), lab));

  // The mapped summit ring is left in place under the schematic ring (not `replaces`): the player spawn is chosen outside every documented closed ring, and a replaced ring would let it land inside the sealed schematic one.
  // hilltop: enclosure and granary stand in full in the 17th-century era and as remains in 1987 and today
  C.push({ id: 'c-agadir-wall', kind: 'wall', path: w17, closed: true, thick: 1.4, stands_for: 'wall-17', src: 'osm:way/209569673', ev: 'schematic', conf: 0.2, eras: ['17c'],
    name: `Agadir enclosure · schematic, ${WALL_H} m assumed`, basis: 'Wikipedia and UNESCO: a large fortified communal granary (agadir, "fortification and loft") crowns the hill; CRATerre: it is considered the first construction on the site. Drawn on the mapped summit ring.', h: { v: WALL_H, src: 'inferred', note: 'same assumed curtain as the ksar wall; no height is given' } });
  C.push({ id: 'c-agadir-wall-ruin', kind: 'wall', path: w17, closed: true, thick: 1.4, stands_for: 'wall-17', src: 'osm:way/209569673', ev: 'schematic', conf: 0.2, eras: ['1987', 'today'],
    name: 'Agadir enclosure, remains · schematic, 1.8 m assumed', basis: 'CRATerre (2008): the enclosure of the collective granary is poorly preserved; UNESCO and Wikipedia speak of the "remains" of the granary. Shown as a low stub on the mapped ring.', h: { v: 1.8, src: 'inferred', note: 'a remnant assumed about half a storey high; no survey height' } });
  C.push({ id: 'c-agadir', kind: 'building', poly: h.byId('outline').poly, roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic mass with no stair drawn; look at it from the hilltop.', replaces: ['outline'], src: 'osm:way/209569672', ev: 'schematic', conf: 0.15, eras: ['17c'],
    name: 'Agadir (communal granary) · schematic mass, 9.6 m assumed', basis: 'Wikipedia: "a large fortified granary" at the top of the hill; CRATerre: the ighrem n iqddarn is the first construction. Raised on the mapped 9 x 12 m footprint; the real structure is called large and its plan is not mapped.', h: { v: 9.6, src: 'inferred', note: 'three storeys at 3.2 m; no height is given' } });
  C.push({ id: 'c-agadir-ruin', kind: 'building', poly: h.byId('outline').poly, roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic mass with no stair drawn; look at it from the hilltop.', replaces: ['outline'], src: 'osm:way/209569672', ev: 'schematic', conf: 0.15, eras: ['1987', 'today'],
    name: 'Agadir remains · schematic mass, 3.2 m assumed', basis: 'UNESCO and Wikipedia: "remains of a large fortified granary" at the top of the hill. Raised on the mapped footprint as one storey of walling.', h: { v: 3.2, src: 'inferred', note: 'one storey at 3.2 m; no height is given' } });
  C.push({ id: 'c-hilltop-wall', kind: 'wall', path: w18, closed: false, thick: 1.4, stands_for: 'wall-18', replaces: ['wall-18'], src: 'osm:way/209570857', ev: 'schematic', conf: 0.2, eras: ALL,
    name: 'Hilltop wall north-east · schematic, 4 m assumed', basis: 'Mapped as barrier=city_wall (OSM way 209570857); its purpose is not stated. Drawn as a lower earthen wall than the ksar curtain.', h: { v: 4, src: 'inferred', note: 'assumed lower than the ksar curtain; no height' } });

  // houses and kasbahs on the mapped footprints
  let hn = 0, kn = 0;
  for (const b of K) {
    if (kasbahIds.has(b.id)) {
      const named = b.id === 'building-36';
      C.push({ id: `c-${b.id}`, kind: 'building', poly: b.poly, roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic block with no door or stair drawn; look at it from the lane.', replaces: [b.id], src: b.src, ev: 'schematic', conf: 0.2, eras: ALL,
        name: `${named ? 'Kasbah Aït Ougram' : `Kasbah ${++kn}`} · schematic tower-house, ${KASBAH_H} m assumed`,
        basis: `UNESCO: some houses "resemble small urban castles with tall corner towers" with clay-brick motifs on the upper sections; Studio Matrx (secondary): kasbahs are roughly square, three or four storeys, with corner turrets and a flat roof. ${named ? 'OSM maps this one as a rammed-earth museum.' : 'Which footprints are kasbahs is not mapped: the six largest (about 240 m2 or more) are drawn so, matching the six kasbahs one secondary page (History Hit) counts.'}`,
        h: { v: KASBAH_H, src: 'inferred', note: 'four storeys at 3.2 m; "three or four storeys" is a qualitative secondary description, not a survey' } });
      turrets(b.poly).forEach((p, i) => C.push({ id: `c-${b.id}-t${i + 1}`, kind: 'building', poly: p, roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic corner turret; look at it from the lane.', src: b.src, ev: 'schematic', conf: 0.15, eras: ALL,
        name: `${named ? 'Aït Ougram' : `Kasbah ${kn}`} corner tower ${i + 1} · schematic, ${KASBAH_H + 3.2} m assumed`, basis: 'UNESCO: tall corner towers with clay-brick decoration on the upper sections; Studio Matrx: incised relief and notched crenellations on tower crowns. A 3.4 m square seated in a footprint corner, one storey above the roof.',
        h: { v: KASBAH_H + 3.2, src: 'inferred', note: 'kasbah roof plus one storey of 3.2 m; no tower height is given' } }));
    } else {
      C.push({ id: `c-${b.id}`, kind: 'building', poly: b.poly, roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic house mass with no door drawn; look at it from the lane.', replaces: [b.id], src: b.src, ev: 'schematic', conf: 0.15, eras: ALL,
        name: `Ksar house ${++hn} · schematic, ${HOUSE_H} m assumed`, basis: 'UNESCO and Wikipedia: houses are packed within the defensive walls, some modest; rammed earth up to the first floor, lighter adobe above (Wikipedia). Raised on the mapped footprint as a plain flat-roofed block.',
        h: { v: HOUSE_H, src: 'inferred', note: 'two storeys at 3.2 m; "some are modest" gives no storey count' } });
    }
  }
  T.constructed = C;

  // ---- eras -------------------------------------------------------------------------------------------------------------------------------------------------
  T.eras = [
    { id: '17c', year: '17th c.', label: 'Oldest standing ksar', short: '17th c.', lens: 'none',
      summary: 'The walled earthen ksar on the Ounila at the date UNESCO gives for its oldest standing buildings, with the fortified granary (agadir) crowning the hill, shown as the present mapped layout carried back.',
      basis: 'UNESCO (list 444): the oldest constructions are "not earlier than the 17th century"; Wikipedia: fortified since the 11th century (Almoravid) but no standing building thought older than the 17th; CRATerre: the granary is the first construction, earliest written records 18th c.',
      conjecture: 'No plan or dated image was found. The mapped granary, wall fragments, gate footprint and house footprints are carried back as inferred; the ksar has since been repaired and heavily restored, so footprints are not proof of the original plan. Which footprints are kasbahs, the caravanserai, the mosque and the Jewish cemetery are not mapped.',
      sources: [],
      facts: ['UNESCO: houses crowd within defensive walls reinforced by angle towers, entered through a baffle gate; some are "small urban castles with tall corner towers".', 'Wikipedia and CRATerre: a large fortified communal granary (agadir, ighrem n iqddarn) crowns the hill at about 1,300 m and is considered the first construction.', 'The sources date no individual building; "17th c./12th c. AH" is Archnet\'s event entry.'] },
    { id: '1987', year: '1987', label: 'World Heritage inscription', short: '1987', lens: 'none',
      summary: 'The ksar as inscribed on the UNESCO World Heritage List (criteria iv and v) in 1987, mostly abandoned, with the Sidi Ali ou Amar sanctuary and the Muslim cemetery beyond the walls.',
      basis: 'Archnet and Wikipedia give the inscription year 1987. CRATerre: residents moved to a new village across the river in the 1960s; over 90 families lived in the ksar in the 1940s (Archeyes). The mapped ksar is carried back; the new village is not drawn.',
      conjecture: 'No plan of 1987 was found; the present mapped footprints are carried back. How much of the fabric stood or had been restored in 1987 is not documented, so the schematic layer draws the same houses as the other eras. The granary is shown as remains.',
      sources: [],
      facts: ['UNESCO criteria: (iv) an eminent example of a southern Moroccan ksar showing the main types of earthen construction; (v) a traditional earthen habitat made vulnerable by socio-economic change.', 'The filming history (from 1962) and the restoration it helped to pay for are in Wikipedia; no date for any single restoration was read.'] },
    { id: 'today', year: 'Today', label: 'Heritage ksar', short: 'Present', lens: 'none',
      summary: 'The ksar with "several families" still living in it, the new village across the river, the 2011 pedestrian bridge, hotels and cafes, and the ruined agadir on the hilltop.',
      basis: 'The OSM-mapped granary, wall fragments, gate footprint, about 70 ksar footprints, the Kasbah Aït Ougram, the sanctuary, cemetery and the new-village buildings in the 900 m window.',
      conjecture: 'Every height is unknown (kerb-high on the documented layer); see the constructed layer. The 2011 footbridge is not mapped in this window and is not drawn. The 2023 earthquake damage (Wikipedia: cracks and partial collapses) is not mapped.',
      sources: [],
      facts: ['Wikipedia: the ksar is only sparsely inhabited by "several families"; most residents live in the village across the river; a footbridge opened in 2011.', 'Wikipedia: the September 2023 earthquake caused cracks and partial collapses, with risk of further collapses.', 'CRATerre (2008): restoration covered the towers of five kasbahs and their decorations, the mosque, lanes and covered passages.'] },
  ];
}
