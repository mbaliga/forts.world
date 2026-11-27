// Curation for Fort Bourtange (Vesting Bourtange, Groningen, Netherlands). Evidence and conflicts: docs/research/bourtange-fortress-q5470838-pass.md.
// No plan image or survey was read (Commons plan search had not arrived; the Rijksmuseum, Atlas van Loon and Merian images were only listed by WebSearch, never opened),
// and the raw OSM geometry (data/geometry/bourtange-fortress-q5470838/) had not arrived either, so the auto trace holds only the outline (OSM way 222272320),
// grass areas, buildings, roads and markers. The five-bastion pentagon is fitted to the tips of the mapped grass area way/103148857 (three tips measured, two by symmetry).
// Everything else on the constructed layer (rampart, ravelins, moats, bridges, raised buildings) is schematic: drawn from the written descriptions with assumed heights.
import { carryOver, levelInlandWaters, rectAt } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Fort Bourtange (Vesting Bourtange), Westerwolde, Groningen, Netherlands. Hand-curated trace, tier T1 (OSM outline, buildings, markers, DEM) plus a schematic constructed layer.',
  'Base: data/traces/bourtange-fortress-q5470838.trace.json (OSM ODbL; Terrarium z15 every 10 m, ~30 m source: the fort stands 5-6 m above datum and its earthworks are not resolved).',
  'Documented layer: the mapped outline (way 222272320), the named mapped buildings and markers, and five bastion-tip markers fitted to the mapped grass area way/103148857. No wall, bastion, ravelin or moat is mapped in the base trace.',
  'Constructed (schematic) layer, shown only in the `<era>~built` eras: earth rampart with five angular bastions on the fitted pentagon, four ravelins from the outline spikes, wet moats, two gates with bridges, raised mapped buildings. Heights are assumptions with their rule; documented heights: none.',
];

// ---- the pentagon -----------------------------------------------------------------------------------------------------------
// Tips of the mapped grass area way/103148857 (zone-136): the three that stand out as bastion points. They are consecutive corners of a regular pentagon
// (circumcentre -19.5,-23.8; radius 167.7 m; angular steps 72.5 and 71.2 degrees), which gives the other two by symmetry.
const TIP_A = [-63.88, 137.99], TIP_B = [-187.11, -17.45], TIP_C = [-79.71, -180.34];
const O = [-19.48, -23.78], R = 167.75, A0 = Math.atan2(TIP_A[1] - O[1], TIP_A[0] - O[0]);
const V = [0, 1, 2, 3, 4].map((i) => { const a = A0 - i * 2 * Math.PI / 5; return [+(O[0] + R * Math.cos(a)).toFixed(1), +(O[1] + R * Math.sin(a)).toFixed(1)]; }); // clockwise: A (NW), E (NE), D (SE), C (SW), B (W)
const VNAME = ['NW bastion (miller\'s bastion, carries the mill)', 'NE bastion', 'SE bastion', 'SW bastion', 'W bastion'];
const FIT = ['way/103148857 tip, measured', 'symmetry, not measured', 'symmetry, not measured', 'way/103148857 tip, measured', 'way/103148857 tip, measured'];
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const add = (p, q, k = 1) => [p[0] + q[0] * k, p[1] + q[1] * k];
const unit = (p, q) => { const l = dist(p, q) || 1; return [(q[0] - p[0]) / l, (q[1] - p[1]) / l]; };
const r1 = (p) => [+p[0].toFixed(1), +p[1].toFixed(1)];
const S = dist(V[0], V[1]);                                  // pentagon side ~197 m
// inward normal of side p->q (towards the pentagon centre)
const inward = (p, q) => { const u = unit(p, q), n = [-u[1], u[0]], m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; return (n[0] * (O[0] - m[0]) + n[1] * (O[1] - m[1])) > 0 ? n : [-n[0], -n[1]]; };
// angular bastion: shoulder 0.24 S along each side and 10 m in, flank end 0.28 S along and 28 m in (so the curtain line stands 28 m inside the pentagon side)
const SH = { f: 0.24 * 197, d: 10 }, FL = { f: 0.28 * 197, d: 28 };
const pt = (v, nb, spec) => { const u = unit(v, nb), n = inward(v, nb); return r1(add(add(v, u, spec.f), n, spec.d)); };
const bastions = V.map((v, i) => { const prev = V[(i + 4) % 5], next = V[(i + 1) % 5];
  return { i, tip: v, fPrev: pt(v, prev, FL), sPrev: pt(v, prev, SH), sNext: pt(v, next, SH), fNext: pt(v, next, FL) }; });
// bastion front, clockwise: flank end on the previous curtain, shoulder, tip, shoulder, flank end on the next curtain
const bastionPath = (b) => [b.fPrev, b.sPrev, b.tip, b.sNext, b.fNext];
const curtainPath = (i) => [bastions[i].fNext, bastions[(i + 1) % 5].fPrev];      // curtain i runs from bastion i to bastion i+1
const cmid = (i) => { const [a, b] = curtainPath(i); return r1([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]); };
const CNAME = ['Friesche curtain (NW-NE, north)', 'NE-SE curtain (east)', 'Munsterse curtain (SE-SW, south)', 'SW-W curtain', 'W-NW curtain'];
// which curtains carry the two mapped gates: guardhouse nodes 26,96.8 (north) and 7.5,-142 (south) stand on them
const GATE = { 0: 'Friesche Poort (north)', 2: 'Munsterse Poort (south)' };
const GSRC = {};
const outward = (i) => { const [a, b] = curtainPath(i), n = inward(a, b); return [-n[0], -n[1]]; };

// ---- offsets with a mitre, for the moat bands --------------------------------------------------------------------------------
function offsetChain(path, d) {   // offset of an open chain d metres to its outward side (away from O)
  const nrm = (a, b) => { const u = unit(a, b); const n = [-u[1], u[0]], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; return (n[0] * (m[0] - O[0]) + n[1] * (m[1] - O[1])) > 0 ? n : [-n[0], -n[1]]; };
  return path.map((p, i) => {
    const n1 = i > 0 ? nrm(path[i - 1], p) : null, n2 = i < path.length - 1 ? nrm(p, path[i + 1]) : null;
    if (!n1) return r1(add(p, n2, d)); if (!n2) return r1(add(p, n1, d));
    const b = [n1[0] + n2[0], n1[1] + n2[1]], bl = Math.hypot(b[0], b[1]) || 1, bn = [b[0] / bl, b[1] / bl];
    const k = Math.min(2.2, 1 / Math.max(0.2, bn[0] * n1[0] + bn[1] * n1[1]));
    return r1(add(p, bn, d * k));
  });
}
const band = (chain, d0, d1) => [...offsetChain(chain, d0), ...offsetChain(chain, d1).reverse()];

// ---- ravelins -----------------------------------------------------------------------------------------------------------------
// Apex of each ravelin: the outline vertex furthest along the curtain's outward normal, within 50 m of the normal line, pulled back 28 m
// (24 m outer moat + half the 8 m earth bank). The outline is the 1742 restored outer line (counterscarp).
function ravelin(i, outline) {
  const [a, b] = curtainPath(i), m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], n = outward(i), lat = [-n[1], n[0]];
  let best = null;
  for (const p of outline) { const v = [p[0] - m[0], p[1] - m[1]], s = v[0] * n[0] + v[1] * n[1], l = v[0] * lat[0] + v[1] * lat[1]; if (Math.abs(l) < 50 && s > 60 && (!best || s > best.s)) best = { s, l, p }; }
  if (!best) return null;
  const sa = best.s - 28, sg = 5 + 30 + 4;                // gorge distance from the curtain line: curtain half-thickness 5 + moat 30 + bank half 4
  const at = (s, l) => r1([m[0] + n[0] * s + lat[0] * l, m[1] + n[1] * s + lat[1] * l]);
  const shoulderS = sa - 38, halfW = 38;
  const path = [at(sg, -halfW + 4), at(shoulderS, -halfW), at(sa, -6), at(sa, 6), at(shoulderS, halfW), at(sg, halfW - 4)].reverse(); // left-to-right as seen from the fort, reversed so the outer face is on the wall's left
  return { i, m, n, lat, sa, sg, tip: best.p, path, apexMid: at(sa, 0), gorgeMid: at(sg, 0) };
}

const NOTE_FIT = 'Bastion tips are fitted to the mapped grass area way/103148857 (OSM): the NW, W and SW tips are measured corners (they are consecutive corners of a regular pentagon of side about 197 m, circumradius 167.7 m); the NE and SE tips follow from the symmetry and agree with corners of the mapped area way/103149304 to within about 10 m.';

export default function curate(T, h) {
  T.name = 'Bourtange';
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  GSRC[0] = h.byId('marker-18').src; GSRC[2] = h.byId('marker-10').src;
  const outlineEl = h.byId('outline');
  outlineEl.name = 'Fort outline · mapped (OSM way 222272320), the restored 1742 outer line';
  outlineEl.note = 'OSM way 222272320, tagged historic=castle, castle_type=fortress, wikidata Q5470838; 62 vertices. It runs along the outer edge of the star-shaped earthworks. The sources say the fort was restored to its 1742 state in 1967-1992, so this line is taken as the 1742 outer line, not checked against a plan.';

  // keep the build inside the element budget: roads, buildings and grass areas more than 255 m from the pentagon centre have no part in the fort
  const far = (e) => { const p = e.poly || e.path || [e.at]; const c = p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]); return dist(c, O) > 255; };
  const drop = T.elements.filter((e) => ['road', 'building', 'zone'].includes(e.kind) && far(e) && !e.name).map((e) => e.id);
  h.remove(...drop);
  console.error(`bourtange: dropped ${drop.length} far roads/buildings/areas; ${T.elements.length} elements left`);

  // names for the mapped, named features (OSM names; the use of each is the name's own)
  const NAMES = { 'building-77': 'De Turfschuur (peat shed) · mapped (OSM way, name only)', 'building-78': 'Vesting Logementen (fortress lodgings, south) · mapped', 'building-163': 'Vesting Logementen (fortress lodgings, west) · mapped',
    'building-79': 'Het Oude Magazijn (the old magazine) · mapped', 'building-116': 'Munsterse Poort (Münster Gate) building · mapped', 'building-170': 'Friesche Poort (Frisian Gate) building · mapped',
    'building-207': 'De Sikkepit · mapped', 'building-208': 'Vestingmolen Bourtange (fortress mill) · mapped', 'building-435': 'Rosmolen (horse mill) · mapped' };
  for (const [id, n] of Object.entries(NAMES)) { const e = h.byId(id); e.note = `OSM name "${e.name}". The footprint is the mapped one (restored village, built to the 1742 state); no height is mapped. ${/Poort/.test(e.name) ? 'The gate building stands about 55 m inside the fitted curtain, so it is the OSM gate-house name for the street gate, not a statement about where the rampart gate was.' : ''}`; e.name = n; }

  // five bastion-tip markers: documented layer (derived from mapped geometry), no form, no height
  const tipIds = [];
  V.forEach((v, i) => {
    const measured = /measured/.test(FIT[i]);
    h.add({ id: `tip-${i + 1}`, kind: 'marker', at: v, title: `${VNAME[i]} · fitted tip (${measured ? 'mapped' : 'inferred'})`,
      text: `Bastion tip of the five-bastion pentagon (DBNL monument text: radial plan with five bastions, 1593, designed by Adriaen Antonisz. van Alkmaar). Position ${FIT[i]}. ${NOTE_FIT} Nothing about the bastion's form is placed on the documented layer.`,
      src: measured ? 'osm:way/103148857' : 'derived:pentagon-symmetry', ev: measured ? 'mapped' : 'inferred', conf: measured ? 0.55 : 0.4, unreachableOk: true, unreachableNote: 'the fitted tip stands inside the schematic bastion bank in the constructed eras.', name: `${VNAME[i]} tip · ${measured ? 'mapped tip' : 'inferred by symmetry'}` });
    tipIds.push(`tip-${i + 1}`);
  });

  // ---- eras of the documented layer
  const inside = T.elements.filter((e) => ['building', 'road', 'zone'].includes(e.kind) && dist(((e.poly || e.path).reduce((a, q) => [a[0] + q[0] / (e.poly || e.path).length, a[1] + q[1] / (e.poly || e.path).length], [0, 0])), O) < 260).map((e) => e.id);
  const keep1742 = ['outline', ...T.elements.filter((e) => e.kind === 'building' && inside.includes(e.id)).map((e) => e.id), ...T.elements.filter((e) => e.kind === 'water').map((e) => e.id), ...T.elements.filter((e) => e.kind === 'waterway').map((e) => e.id), ...T.elements.filter((e) => e.kind === 'road' && inside.includes(e.id)).map((e) => e.id), ...tipIds];
  // four small mapped buildings and three guardhouse nodes stand where the constructed layer puts the west ravelin or the north moat edge; that ravelin has no drawn gate, so they cannot be walked to there
  for (const id of ['marker-12', 'marker-13', 'marker-19']) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'it stands on or beside a ravelin or moat bank of the constructed layer that has no drawn gate or causeway.'; }
  const NOPOI = Object.fromEntries(['building-422', 'building-430', 'building-432', 'building-433'].map((id) => [id, { name: undefined }]));
  carryOver(T, '1742', keep1742, { modify: NOPOI, note: 'the fort was restored to its 1742 state (sources: 1967-1992, "reconstruction to 1742" in the DBNL monument text); the mapped outline, village footprints and streets inside the fort are taken as the 1742 layout, but no plan was read to check any one of them' });
  carryOver(T, '1593', tipIds, { note: 'the pentagon of five bastions is the original 1593 plan (DBNL); the tips are the same fitted points' });
  // the tips are measured/mapped today; in 1742 and 1593 they carry the fitted position and say so
  for (const era of ['1742', '1593']) for (const id of tipIds) { const m = T.diffs[era].modify[id]; m.name = m.name.replace(' · carried back, inferred', '') + ' · carried back, inferred'; }

  // ---- constructed layer -------------------------------------------------------------------------------------------------------
  const out = outlineEl.poly;
  const RAV = [0, 1, 2, 3, 4].map((i) => ravelin(i, out)).filter(Boolean);
  const gnd = (p) => h.ground(p[0], p[1]);
  const lvl = (poly) => { const g = poly.map(gnd).filter(Number.isFinite); return +(Math.min(...g) - 0.5).toFixed(1); };
  const C = [];
  const E3 = ['1742', 'today'], E1 = ['1593'];
  const B_RAMP = 'DBNL monument text: 1593, five bastions on a radial plan (Adriaen Antonisz. van Alkmaar); burgenwelt.org (via a page read): a low earth rampart with a ditch in front in 1593, the main rampart widened and raised in 1619. The bastion shape (tip angle about 84 degrees, 48 m faces, flanks to a curtain 28 m inside the pentagon side) is a typical angular Dutch bastion drawn on the fitted pentagon, not a surveyed one.';
  const eraSet = [
    { suf: '-1593', eras: E1, hh: 2.5, th: 7, hnote: 'assumed: a "low earthen rampart" (1593, burgenwelt page); no height read, 2.5 m is an illustration', tag: '1593' },
    { suf: '', eras: E3, hh: 4.5, th: 10, hnote: 'assumed: rampart widened and raised in 1619 (burgenwelt page); no height read, 4.5 m is an illustration', tag: '1742' },
  ];
  for (const es of eraSet) {
    bastions.forEach((b, i) => C.push({ id: `c-bastion-${i + 1}${es.suf}`, kind: 'wall', path: bastionPath(b), closed: false, thick: es.th, src: 'derived:pentagon-fit', ev: 'schematic', conf: 0.2, eras: es.eras,
      name: `${VNAME[i]} · schematic, ${es.hh} m assumed (${es.tag})`, basis: `${B_RAMP} ${NOTE_FIT}`, h: { v: es.hh, src: 'inferred', note: es.hnote }, unreachableOk: true, unreachableNote: 'an earth bank with no stair drawn; walk round it or use the gate causeways.' }));
    for (let i = 0; i < 5; i++) {
      const gate = GATE[i];
      C.push({ id: `c-curtain-${i + 1}${es.suf}`, kind: 'wall', path: curtainPath(i), closed: false, thick: es.th, src: 'derived:pentagon-fit', ev: 'schematic', conf: 0.2, eras: es.eras,
        name: `${CNAME[i]} · schematic, ${es.hh} m assumed (${es.tag})`, basis: `${B_RAMP} ${gate ? `A mapped guardhouse node stands on this curtain (${gate}, ${GSRC[i]}).` : ''}`, h: { v: es.hh, src: 'inferred', note: es.hnote }, unreachableOk: true, unreachableNote: 'an earth bank with no stair drawn; walk round it or use the gate causeways.' });
      if (gate) C.push({ id: `c-gate-${i}${es.suf}`, kind: 'gate', wall: `c-curtain-${i + 1}${es.suf}`, at: cmid(i), w: 5, src: 'derived:pentagon-fit', ev: 'schematic', conf: 0.2, eras: es.eras,
        name: `${gate} · schematic opening${es.tag === '1593' ? ' (assumed in 1593)' : ''}`, basis: `OSM names the Friesche Poort and the Munsterse Poort and maps a guardhouse node on this curtain (${GSRC[i]}). The 5 m opening is an assumption; ${es.tag === '1593' ? 'no 1593 source says where the first entrance stood, so it is placed at the later gate.' : 'no gate form was read.'}` });
    }
  }
  // moat bands: one per bastion unit (curtain middle to curtain middle). 1593 ditch 24 m (assumed), 1742 moat 30 m
  // at a gated curtain the moat band stops 5 m either side of the gate, leaving a 10 m earth causeway (the walkable stand-in for a bridge)
  const GAP = 5, along = (p, q, d) => r1(add(p, unit(p, q), d));
  const unit_ = (k) => { const a = cmid((k + 4) % 5), z = cmid(k), c = [bastions[k].fPrev, bastions[k].sPrev, bastions[k].tip, bastions[k].sNext, bastions[k].fNext];
    return [GATE[(k + 4) % 5] ? along(a, c[0], GAP) : a, ...c, GATE[k] ? along(z, c[4], GAP) : z]; };
  for (const [suf, eras, w, tag] of [['-1593', E1, 24, '1593'], ['', E3, 30, '1742']]) {
    for (let k = 0; k < 5; k++) {
      const poly = band(unit_(k), eraSet[tag === '1593' ? 0 : 1].th / 2, eraSet[tag === '1593' ? 0 : 1].th / 2 + w);
      C.push({ id: `c-moat-${k + 1}${suf}`, kind: 'water', poly, level: lvl(poly), src: 'derived:pentagon-fit', ev: 'schematic', conf: 0.15, eras, name: `Moat round the ${VNAME[k].split(' (')[0]} · schematic, ${w} m wide assumed (${tag})`,
        basis: `${tag === '1593' ? 'burgenwelt page: in 1593 a low earthen rampart with a ditch in front' : 'DBNL monument text: an outer moat (voorgracht); burgenwelt page: a continuous water barrier linked to the canals'}. Water was part of the defence at every date, but the width is not given in any source read: ${w} m is an illustration. Level derived from the DEM (lowest ground on the polygon minus 0.5 m).`,
        unreachableOk: true, unreachableNote: 'open water; cross at the gate causeways.' });
    }
  }
  // ravelins (1742 only): arrowheads on the outline spikes, with an outer moat band and two causeways on the gated axes
  RAV.forEach((r, k) => {
    const rid = `c-ravelin-${r.i + 1}`;
    const gated = GATE[r.i];
    // direction clockwise around the fort: the path was built left-to-right looking outward, which is clockwise around the fort
    C.push({ id: rid, kind: 'wall', path: r.path, closed: false, thick: 8, src: 'osm:way/222272320', ev: 'schematic', conf: 0.2, eras: E3,
      name: `Ravelin before the ${CNAME[r.i].split(' (')[0].toLowerCase()} · schematic, 3.5 m assumed`, basis: `DBNL monument text: two ravelins c. 1607 and two more in 1738-42 (which are which is not stated; all four are drawn in the 1742 era only). Apex placed on the spike of the mapped outline (OSM way 222272320) that lies on this curtain's axis, pulled back 28 m for the outer moat and bank; the arrowhead shape and 76 m width are assumed.`,
      h: { v: 3.5, src: 'inferred', note: 'assumed: one metre lower than the 4.5 m main rampart; no ravelin height read' }, unreachableOk: !gated, unreachableNote: 'an earth bank with no stair drawn; its interior is reached by the gate causeways on the north and south axes only.' });
    const halves = gated ? [r.path.slice(0, 3), r.path.slice(3)] : [r.path];
    halves.forEach((chain, hi) => {
      const poly = band(chain, 4, 28);
      C.push({ id: `c-ravelin-moat-${r.i + 1}${gated ? '-' + 'ab'[hi] : ''}`, kind: 'water', poly, level: lvl(poly), src: 'osm:way/222272320', ev: 'schematic', conf: 0.15, eras: E3, name: `Moat round ravelin ${r.i + 1}${gated ? ' (' + ['left', 'right'][hi] + ' half)' : ''} · schematic, 24 m wide assumed`,
        basis: 'DBNL monument text: outer moat (voorgracht) and a glacis running into the "natte horizon" on the east; burgenwelt page: continuous water barrier. Width not given; 24 m is an illustration.' + (gated ? ' The band stops at the apex opening, leaving an earth causeway to the glacis.' : ''), unreachableOk: true, unreachableNote: 'open water.' });
    });
    if (gated) C.push({ id: `c-ravelin-gate-${r.i + 1}`, kind: 'gate', wall: rid, at: r.apexMid, w: 5, src: 'inferred', ev: 'schematic', conf: 0.15, eras: E3, name: `Opening through ravelin ${r.i + 1} · schematic`, basis: 'No source describes how the ravelins were entered or how the moats were crossed (no bridge was read); a 5 m opening at the apex and an earth causeway across the moat are assumed so that the gate reaches the glacis.' });
  });
  // raised buildings: the mapped named footprints inside the fort, plus the large ones; heights are assumed
  const bl = T.elements.filter((e) => e.kind === 'building' && dist(e.poly.reduce((a, q) => [a[0] + q[0] / e.poly.length, a[1] + q[1] / e.poly.length], [0, 0]), O) < 130);
  const area = (p) => Math.abs(p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0) / 2);
  const raise = bl.filter((e) => (e.name && !/Poort/.test(e.name)) || area(e.poly) > 120);
  const HOUSE = { v: 5.5, note: 'assumed: two low storeys under a hipped roof, about 5.5 m to the eaves, typical of 18th-century Dutch garrison houses; no building height read' };
  for (const e of raise) {
    const mill = /mill|molen|Rosmolen/i.test(e.name || '');
    const hv = mill ? (/Rosmolen/.test(e.name) ? 5 : 11) : HOUSE.v;
    C.push({ id: `c-${e.id}`, kind: 'building', poly: e.poly, replaces: [e.id], roof: 'hip', src: e.src, ev: 'schematic', conf: 0.2, eras: E3,
      name: `${(e.name || 'Building').split(' · ')[0]} · schematic mass, ${hv} m assumed`, basis: `Raised on the mapped footprint (${e.src}). ${e.name ? `OSM names it ${e.name.split(' · ')[0]}.` : 'Large mapped footprint inside the fortress, use not tagged.'} The village was rebuilt to the 1742 state (1967-1992), but the original building is not individually dated. ${mill ? 'The present mill is a 1980 replica of the Ter Haar mill on the miller\'s bastion (trek.zone page); a mill stood here by 1619 (same page). 11 m to the cap is an assumption.' : ''}`,
      h: { v: hv, src: 'inferred', note: mill ? 'assumed: small Dutch smock/post mill; no height read' : HOUSE.note }, unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.' });
  }
  T.constructed = C;
  console.error(`bourtange: ${C.length} constructed elements, ${RAV.length} ravelins, ${raise.length} raised buildings`);

  T.eras = [
    { id: '1593', year: '1593', label: 'Founding star fort', short: '1593', lens: 'none',
      summary: 'The new earth fort of Willem Lodewijk of Nassau: a low rampart and ditch round a pentagon of five bastions in the Bourtanger Moor, on the road from Germany to Groningen.',
      basis: 'DBNL (Stenvert et al., Monumenten in Nederland, Groningen): redoubt begun 1580 on Diederik Sonoy\'s orders, completed 1593 on a radial plan with five bastions, designed by Adriaen Antonisz. van Alkmaar. The pentagon here is fitted to the tips of the mapped grass area way/103148857.',
      conjecture: 'No plan of 1593 was read. Bastion shapes, rampart height (2.5 m), ditch width (24 m) and the entrance position are assumptions on the constructed layer. The village, streets, church (1607) and every outwork are later and are not drawn. The documented layer holds only the five tip markers. The tan star painted on the ground is the 1742 mapped outline: the shared T1 builder paints the outline in every era, so it is not a 1593 feature.',
      sources: [],
      facts: ['DBNL: 1580 redoubt begun on Sonoy\'s orders; 1593 completed on a radial plan with five bastions (Adriaen Antonisz. van Alkmaar).', 'Burgenwelt page: in 1580 Sonoy marked out a pentagon but nothing was built for lack of money; in 1593 Willem Lodewijk had a low earth rampart with a ditch made; the garrison church followed in 1607.', 'Wikipedia: Spanish forces from Groningen attacked soon after completion and failed.'] },
    { id: '1742', year: 'c. 1742', label: 'Largest extent', short: '1742', lens: 'none',
      summary: 'The fort at its largest, after the 1738-42 enlargement by Pieter de la Rive: five bastions, four ravelins, the crownwork and hornworks, a new eastern counterscarp and a glacis running into the wet horizon.',
      basis: 'DBNL: c. 1607 two ravelins, a crownwork and a counterscarp; c. 1645 two hornworks facing east; 1665-66 and 1672 sieges withstood; 1738-42 expansion to the largest extent designed by Pieter de la Rive, two more ravelins, a new eastern counterscarp. The restoration of 1967-1992 rebuilt this state, so the OSM outline and the village footprints are carried back, marked inferred.',
      conjecture: 'No plan of 1742 was read (the Rijksmuseum, Atlas van Loon 1649 and Merian images were found by search, not opened). The east hornworks, the crownwork "Schuitendiep" (1606) and the eastern counterscarp lie inside or on the mapped outline but cannot be told apart in the base trace, so they are not drawn separately. The church (1607, replaced 1869), the Commandeurslogement and the other houses on the Marktplein cannot be matched to mapped footprints. Heights, moat width and bridges are assumptions.',
      sources: [],
      facts: ['DBNL: expansion to the largest extent in 1738-42 designed by Pieter de la Rive; two more ravelins and a new eastern counterscarp; the glacis runs into a "natte horizon".', 'DBNL: the pentagonal market square and radial street pattern probably date from about 1645.', 'Burgenwelt page: the main rampart was widened and raised in 1619; the crownwork Schuitendiep was added in 1606.', 'Grokipedia (AI-generated, low weight): a wet horizon of 24 ha, 31 cm below summer water level; about 300 soldiers and families in the 17th century.'] },
    { id: 'today', year: 'Today', label: 'Restored fortress village', short: 'Restored', lens: 'none',
      summary: 'The fortress village, restored to its 1742 state: ramparts, moats, a mill, barracks and houses, a museum and a restaurant, with the Natte Horizon wetland south of it.',
      basis: 'The OSM outline, named buildings, markers, paths, water and the Terrarium DEM, plus the five fitted bastion tips.',
      conjecture: 'The base trace holds no mapped rampart, bastion, ravelin or moat; this era draws what it does hold. Heights are unknown (kerb-high); see the constructed layer. The mapped footprints include modern additions (car park, restaurant) that are not separated.',
      sources: [],
      facts: ['DBNL: officially decommissioned 1851; by 1966 only a remnant of the outer moat and one bastion were visible; reconstructed to the 1742 state mainly in 1972-82 (1967-92 in other sources).', 'Wikipedia: in 1960 the local government decided to restore the fort to its 1740-50 appearance as a historical museum.', 'trek.zone: the present mill (1980) is a replica of the Ter Haar mill, standing on the miller\'s bastion beside a small horse mill.'] },
  ];
}
