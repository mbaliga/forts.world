// Curation for Agra Fort, Uttar Pradesh (daily run 2026-11-16, queue #1). Evidence and gaps: docs/research/agra-fort-pass.md.
// Plan: "The Fort, Agra" (Stanford's Geographical Establishment, 1901 guide-book plan, Commons File:Plan du fort d'Agra (1901).jpg, public domain),
// data/plans/agra-fort/Plan_du_fort_d_Agra_1901_.jpg, registered to the OSM frame by data/plans/agra-fort/registration.json (one similarity fit).
import { carryOver, bastionRing, gateTowers, rectAt } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Agra Fort, Uttar Pradesh. Hand-curated trace, tier T2 (partial): four gates, the Moti Masjid, the Diwan-i-Am court, the Jahangiri Mahal block and five numbered palace sites placed from the 1901 plan registered to OSM (about +-25 m); everything else is mapped (T1).',
  'Base: data/traces/agra-fort.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain). The mapped wall and the plan wall coincide to about 10-20 m, which is what the single similarity fit rests on.',
  'Plan elements carry src plan:stanford-1901#agra-fort and conf 0.25-0.4. The wall height (21 m) appears only in the schematic constructed layer, from Britannica (secondary), not on the documented layer.',
];

// plan pixel (px right, py down) -> OSM metres: z = px - i*py ; o = a*z + b   (data/plans/agra-fort/registration.json)
const A = [1.50217, 0.08069], B = [-514.5, 531.25];
const toOsm = (p) => { const re = A[0] * p[0] + A[1] * p[1], im = A[1] * p[0] - A[0] * p[1]; return [+(re + B[0]).toFixed(1), +(im + B[1]).toFixed(1)]; };
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
const PLAN = 'plan:stanford-1901#agra-fort';

export default function curate(T, h) {
  const W = h.byId('outline-wall');
  // The OSM "Yamuna" way and a second waterway run on the south-west (ravine) side, 150 m or more from the river the 1901 plan puts on the east: dropped.
  h.remove('waterway-6', 'waterway-9');

  const gates = [['delhi', 'Delhi Gate (plan label, west)', [82, 327]], ['elephant', 'Elephant Gate (plan no. 20)', [118, 332]], ['amar-singh', "Amar Singh Gate (plan: Ummer Sing Gate, south)", [372, 622]], ['water', 'Water Gate (plan: outer gateway, no exit; east)', [450, 382]]];
  const planIds = [];
  for (const [id, name, px] of gates) {
    const o = toOsm(px), [dist, q] = nearestOn(o, W.path);
    h.add({ id: `plan-gate-${id}`, kind: 'gate', wall: 'outline-wall', at: [+q[0].toFixed(1), +q[1].toFixed(1)], src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · position +-30 m`,
      note: `Plan position registered to OSM (${dist.toFixed(0)} m from the mapped wall) and snapped to the wall line. Gate form, width and passage are not drawn to scale on the plan, so a plain 3 m opening is cut.` });
    planIds.push(`plan-gate-${id}`);
  }
  const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const blocks = [['moti-masjid', 'Moti Masjid (courtyard outline, plan)', rect(293, 307, 340, 347)], ['armoury-square', 'Diwan-i-Am court (plan label: Armoury Square)', rect(296, 383, 386, 480)], ['jahangiri', 'Palace of Jahangir / Akbar (plan no. 16)', rect(397, 494, 443, 533)]];
  for (const [k, name, poly] of blocks) {
    h.add({ id: `plan-${k}`, kind: 'building', poly: poly.map(toOsm), use: k === 'moti-masjid' ? 'mosque' : 'palace', src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · footprint from plan, +-30 m`,
      note: 'Block outline read off the 1901 plan and registered to OSM; the plan gives no height and does not separate halls from courts.' });
    planIds.push(`plan-${k}`);
  }
  const marks = [['saman-burj', 'Saman Burj / Jasmine Tower (plan no. 12)', [452, 447]], ['khas-mahal', 'Khas Mahal (plan no. 13)', [448, 466]], ['shish-mahal', 'Shish Mahal (plan no. 14)', [415, 443]], ['machchi-bhawan', 'Machchi Bhawan (plan no. 8)', [390, 423]], ['marble-baths', 'Marble baths of the Princesses (plan no. 10)', [388, 456]]];
  for (const [k, name, px] of marks) {
    h.add({ id: `plan-mark-${k}`, kind: 'marker', at: toOsm(px), src: PLAN, ev: 'documented', conf: 0.25, name: `${name} · label position, +-35 m`,
      note: 'Only the numbered legend label is placed; the plan shows no separable footprint at this scale.' });
    planIds.push(`plan-mark-${k}`);
  }
  for (const [id, what] of [['plan-mark-saman-burj', 'Musamman Burj'], ['plan-mark-khas-mahal', 'Khas Mahal']]) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = `the label position falls inside the solid schematic ${what} mass of the constructed view; in the plain views it can be walked to.`; }
  { const m = h.byId('plan-mark-machchi-bhawan'); m.unreachableOk = true; m.unreachableNote = 'the label position falls inside a mapped OSM building footprint with no mapped entrance, so it cannot be walked to; no door is invented.'; }

  const mapped = ['outline', 'outline-wall', 'marker-2'].filter((id) => T.elements.some((e) => e.id === id));
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  carryOver(T, '1901', keep, { note: 'present mapped line assumed unchanged since 1901; the 1901 plan shows the same wall circuit', modify: restore });

  // ---- constructed (schematic) layer: written descriptions only, drawn in the accent tint with assumed heights --------------------------
  const ALL = ['1573', '1653', '1901', 'today'], SJ = ['1653', '1901', 'today'], LATE = ['1901', 'today'];
  const WIKI = 'Wikipedia "Agra Fort" (secondary)';
  const wallH = { v: 21, src: 'inferred', note: '21 m (70 ft) from Britannica and Wikipedia (secondary); uniform height around the circuit is an assumption' };
  const gatePos = (id) => h.byId(`plan-gate-${id}`).at;
  const plan = (id) => h.byId(id);
  const mc = toOsm([299, 327]);
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: W.path, closed: true, stands_for: 'outline-wall', replaces: ['outline-wall'], thick: 6, merlon: true, src: W.src, ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'Perimeter rampart · schematic, 21 m assumed', basis: `Drawn on the mapped perimeter line. ${WIKI} and Britannica give double red-sandstone ramparts about 70 ft (21 m) high with battlements and embrasures; thickness and the outer second wall of the 1901 plan are not drawn.`, h: wallH },
    ...bastionRing({ path: W.path, spacing: 62, r: 7, h: 23, hNote: 'a little above the 21 m curtain; an assumption', basis: `${WIKI}: massive circular bastions at intervals along the ramparts. The 1901 plan shows about thirty round bastions; spacing here is regular, so individual bastion positions are not evidence.`, eras: ALL,
      avoid: ['delhi', 'elephant', 'amar-singh', 'water'].map((g) => [...gatePos(g), 28]) }),
    ...gateTowers({ wallPath: W.path, gateAt: gatePos('delhi'), id: 'c-delhi-tower', r: 5.5, h: 25, hNote: 'assumed taller than the 21 m curtain', top: 'chhatri', eras: ALL, basis: `${WIKI}: Delhi Gate, built about 1568 under Akbar in red sandstone with marble inlay, a bent entrance and a drawbridge. Flanking towers and their kiosks are drawn schematically; the form is not taken from a measured drawing.` }),
    ...gateTowers({ wallPath: W.path, gateAt: gatePos('amar-singh'), id: 'c-amar-tower', r: 5, h: 22, hNote: 'assumed near the curtain height', top: 'chhatri', eras: LATE, basis: `${WIKI}: Amar Singh Gate, outer gateway added in the 17th century (under Aurangzeb) in front of Akbar's inner Akbari Gate; red sandstone, bent entrance like the Delhi Gate. Flanking towers are schematic.` }),
    { id: 'c-musamman-burj', kind: 'tower', at: plan('plan-mark-saman-burj').at, r: 7.5, h: { v: 17, src: 'inferred', note: 'assumed: a riverside bastion taller than the curtain bastions' }, top: 'chhatri', merlon: true, src: PLAN, ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'Musamman Burj / Saman Burj · schematic, 17 m assumed', basis: `${WIKI}: Musamman Burj, the largest riverside bastion, red stone from Akbar's time, rebuilt in white marble by Shah Jahan (1632-1640). Position is the 1901 plan label no. 12 (+-35 m); the body and kiosk crown are schematic.` },
    { id: 'c-jahangiri', kind: 'building', poly: plan('plan-jahangiri').poly, src: PLAN, ev: 'schematic', conf: 0.2, eras: ALL, roof: 'flat', merlon: true, h: { v: 12, src: 'inferred', note: 'assumed two storeys plus parapet' },
      name: 'Jahangiri Mahal · schematic, 12 m assumed', basis: `${WIKI}: Jahangiri Mahal, built by Akbar for Jahangir in red sandstone, the largest residence still standing in the fort. Footprint is the 1901 plan block no. 16 (+-30 m); storeys, courts and kiosks are not drawn.` },
    { id: 'c-diwan-i-am', kind: 'building', poly: rectAt(toOsm([376, 431]), 62, 19, 93), src: PLAN, ev: 'schematic', conf: 0.15, eras: SJ, roof: 'flat', arches: true, h: { v: 9, src: 'inferred', note: 'assumed single tall hall' },
      name: 'Diwan-i-Am hall · schematic, 9 m assumed', basis: `${WIKI}: Diwan-i-Am built by Shah Jahan (1628), first in wood on forty pillars, later red sandstone with white stucco to resemble marble. The 1901 plan gives the court (Armoury Square) only; the hall on its east side, 62 x 19 m, is an assumption.` },
    { id: 'c-khas-mahal', kind: 'building', poly: rectAt(toOsm([448, 466]), 30, 17, 93), src: PLAN, ev: 'schematic', conf: 0.15, eras: SJ, roof: 'flat', merlon: true, h: { v: 8, src: 'inferred', note: 'assumed one storey on a high plinth' },
      name: 'Khas Mahal · schematic, 8 m assumed', basis: `${WIKI}: Khas Mahal, a white-marble palace of Shah Jahan facing the Anguri Bagh garden. Position is the 1901 plan label no. 13 (+-35 m); the 30 x 17 m block is an assumption.` },
    { id: 'c-shish-mahal', kind: 'building', poly: rectAt(toOsm([415, 443]), 20, 12, 93), src: PLAN, ev: 'schematic', conf: 0.15, eras: SJ, roof: 'flat', h: { v: 6, src: 'inferred', note: 'assumed one storey' },
      name: 'Shish Mahal (mirror palace) · schematic, 6 m assumed', basis: `${WIKI}: Shish Mahal, mirror-glass mosaic bathing chambers (1631-1640). Position is the 1901 plan label no. 14 (+-35 m); size is an assumption.` },
    { id: 'c-moti-masjid', unreachableOk: true, unreachableNote: 'a solid schematic prayer hall with no door or stair drawn; look at it from the courtyard.', kind: 'building', poly: rectAt(mc, 14, 52, 93), src: PLAN, ev: 'schematic', conf: 0.2, eras: SJ, roof: 'flat', arches: true, h: { v: 10, src: 'inferred', note: 'assumed prayer-hall height' },
      domes: [-15, 0, 15].map((o) => [+(mc[0] - o * 0.054).toFixed(1), +(mc[1] + o * 0.9985).toFixed(1), 4.6]), domeShape: 'onion',
      name: 'Moti Masjid prayer hall · schematic, 10 m assumed', basis: `${WIKI}: Moti Masjid (1646-1653), a white-marble mosque on a raised plinth. The 1901 plan shows the courtyard block; a west prayer hall of 14 x 52 m with three domes is a schematic reading, not a survey.` },
  ];

  { const k0 = ['outline', 'outline-wall', 'plan-gate-delhi', 'plan-gate-elephant', 'plan-jahangiri'];
    carryOver(T, '1573', k0, { note: 'the mapped wall and the 1901 plan positions are carried back to the 1565-73 rebuilding; no earlier plan was found' });
    carryOver(T, '1653', [...k0, 'plan-gate-water', 'plan-moti-masjid', 'plan-armoury-square', ...planIds.filter((i) => i.startsWith('plan-mark'))], { note: "the mapped wall and the 1901 plan positions are carried back to Shah Jahan's time; no earlier plan was found" }); }

  T.eras = [
    { id: '1573', year: '1573', label: "Akbar's red fort", short: 'Akbar 1573', lens: 'none',
      summary: "Akbar's fort as rebuilt in red sandstone, 1565-73: double ramparts with round bastions, the Delhi Gate, Jahangiri Mahal and the riverside Musamman Burj.",
      basis: 'Documented layer: the mapped wall circuit and 1901-plan positions carried back (inferred). Constructed layer: written descriptions only.', conjecture: 'No plan or survey of the 1570s was read. Heights, bastion spacing, gate towers and the Musamman Burj form are assumptions; the Shah Jahan marble palaces do not exist yet.',
      sources: [], facts: [`${WIKI}: about 4,000 workers a day for eight years; red sandstone from Barauli over a brick core.`] },
    { id: '1653', year: '1653', label: "Shah Jahan's marble palaces", short: 'Shah Jahan 1653', lens: 'none',
      summary: 'The fort after Shah Jahan\'s rebuilding: the Diwan-i-Am, Khas Mahal, Shish Mahal, Musamman Burj in marble and the Moti Masjid (completed 1653).',
      basis: 'Documented layer: the mapped wall circuit and 1901-plan positions carried back (inferred). Constructed layer: written descriptions only.', conjecture: 'Hall sizes and shapes are assumptions (the plan shows court outlines and numbered labels only). Diwan-i-Khas, Anguri Bagh and Naginah Masjid are not drawn: no registered position. The Amar Singh outer gateway (Aurangzeb) is not yet built.',
      sources: [], facts: [`${WIKI}: Shah Jahan demolished many Akbar-era buildings for his marble ones after 1628; Moti Masjid 1646-1653.`] },
    { id: '1901', year: '1901', label: 'Guide-book plan', short: 'Stanford 1901', lens: 'none',
      summary: 'The fort as drawn on the 1901 Stanford plan: the same wall circuit with the Delhi, Elephant, Amar Singh and Water gates, the Moti Masjid, Armoury Square and the river-front palaces.',
      basis: 'Gates, the Moti Masjid, the Diwan-i-Am court and the Jahangiri block are registered from the plan (public domain); the mapped wall circuit is carried back.',
      conjecture: 'The plan is a small hand-drawn guide-book map: registration is good to about 25 m, no heights or gate forms are shown, and the plan\'s river (east) is not drawn because no river geometry was traced.',
      sources: [], facts: ['Plan legend numbers 1-21 (Northern Tower to Court of Ummer Sing\'s Gate); old buildings converted into stores in the central yard.', 'Mr Colvin\'s grave is marked on the plan (OSM node kept).'] },
    { id: 'today', year: 'Today', label: 'Monument', short: 'Monument', lens: 'none',
      summary: 'A protected fort partly used by the army: mapped wall, buildings and roads from OpenStreetMap, plus the plan-registered gates and palace blocks.',
      basis: 'OSM perimeter wall, internal wall lines, buildings, markers and roads; the 1901 plan elements are shown on top and not checked against present ground.',
      conjecture: 'Heights are unknown (kerb-high) on the documented layer; the schematic layer shows a 21 m wall. Terrain is ~30 m DEM so the moat, ravines and river cliff are smoothed.',
      sources: [], facts: ['Britannica: walls 70 ft (21 m) high, circumference about 1.5 miles; Akbar commissioned the fort in 1565; Delhi Gate faces west, Amar Singh Gate south.'] },
  ];
}
