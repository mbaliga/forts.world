// Curation for Himeji Castle (Hyogo, Japan). Evidence and conflicts: docs/research/himeji-castle-q188754-pass.md.
// No plan or survey drawing was read. The documented layer is what OpenStreetMap maps (the keep outline with its tagged height, 13 named gates, ~20 named
// yagura/watariyagura, wall and stone-wall lines, the Sangoku-bori) placed in three dated eras by what the written sources date. The constructed layer is
// schematic: the Daitenshu on its stone base, and the mapped yagura and larger gates raised as masses. The tenshu, yagura and gates are Japanese forms the
// renderer has no roof for; they are drawn with the building/tower elements and say so in `basis`.
import fs from 'node:fs';
import path from 'node:path';
import { carryOver, levelInlandWaters } from './_common.mjs';
import { projector } from '../osm.mjs';
import { buildHeightsGrid } from '../terrarium.mjs';

export const TIER = 'T1';
export const STATUS = 'mapped-plus-schematic';
export const HEADER = [
  'Himeji Castle (Hakuro-jo), Himeji, Hyogo, Japan. Hand-curated trace: OSM-mapped features (ODbL) with three dated eras (1609 Ikeda, 1618 Honda, today), tier T1 (no plan or survey drawing read).',
  'Base: data/traces/himeji-castle-q188754.trace.json (OSM; Terrarium z15, ~30 m SRTM-derived, which reads about 54-60 m at the keep against the published hilltop of 45.6 m). The window is widened to the west (x -300) so the Nishi-no-maru (West Bailey) yagura fit; the grid is rebuilt from data/geometry/<id>/terrarium and the extra OSM ways are read from data/geometry/<id>/osm.json.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions with assumed heights and is shown only in the `<era>~built` eras. Documented heights: the keep outline carries OSM height=46.4 (cross-checked against two web sources); no other height is documented.',
];

const ID = 'himeji-castle-q188754';
const ROOT = path.resolve(new URL('../../..', import.meta.url).pathname);
const OSM = 'osm:way/';

const rectOf = (p) => { // minimum-area oriented rectangle of a polygon: {at, w, d, rot (deg ccw from +x), tx, ty}
  let best = null;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length], th = Math.atan2(b[1] - a[1], b[0] - a[0]), c = Math.cos(th), s = Math.sin(th);
    const us = p.map((q) => q[0] * c + q[1] * s), vs = p.map((q) => -q[0] * s + q[1] * c);
    const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs), A = (u1 - u0) * (v1 - v0);
    if (!best || A < best.A) best = { A, th, u0, u1, v0, v1, c, s };
  }
  const { th, u0, u1, v0, v1, c, s } = best, uc = (u0 + u1) / 2, vc = (v0 + v1) / 2;
  let w = u1 - u0, d = v1 - v0, rot = th * 180 / Math.PI;
  if (d > w) { [w, d] = [d, w]; rot += 90; }
  rot = ((rot % 180) + 180) % 180;
  return { at: [+(uc * c - vc * s).toFixed(1), +(uc * s + vc * c).toFixed(1)], w: +w.toFixed(1), d: +d.toFixed(1), rot: +rot.toFixed(1) };
};
const area = (p) => Math.abs(p.reduce((s, q, i) => { const r = p[(i + 1) % p.length]; return s + q[0] * r[1] - r[0] * q[1]; }, 0) / 2);
const cen = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);

// Names: romanised from the Japanese kana/kanji in the OSM name tag (the iroha-letter system the castle itself uses); glosses only where a source states one.
const GATES = {
  'building-65': ['Hishi-no-mon', '菱の門', 'the largest gate (nippon.com)'],
  'building-190': ['Ha-no-mon', 'はの門', ''], 'building-196': ['Ni-no-mon', 'にの門', ''], 'building-329': ['Ro-no-mon', 'ろノ門', ''],
  'building-75': ['Nu-no-mon', 'ぬの門', ''], 'building-267': ['Ri-no-mon', 'りの門', ''], 'building-266': ['To-no-ichi-mon', 'との一門', ''],
  'building-378': ['Bizen-mon', '備前門', ''], 'building-301': ['Mizu-no-ichi-mon', '水の一門', ''], 'building-269': ['Mizu-ni-mon', '水二門', ''],
  'building-339': ['Mizu-go-mon', '水五門', ''],
};
const YAGURA = {
  'building-84': ['Taiko-yagura', '太鼓櫓'], 'building-76': ['Chi-no-yagura', 'ちの櫓'], 'building-195': ['Kuchi-no-yagura (as spelled in OSM)', '口の櫓'],
  'building-35': ['Shio-yagura (Salt Turret)', '塩櫓'], 'building-272': ['I-kuruwa-yagura', '井郭櫓'], 'building-396': ['To-no-yagura', 'トの櫓'],
  'building-391': ['Former guardhouse (kyu-bansho)', '旧番所'], 'building-230': ['I-no-watariyagura', 'イの渡櫓'], 'building-228': ['Ro-no-watariyagura', 'ロノ渡櫓'],
  'building-32': ['Kesho-yagura (Princess Sen\'s turret)', '化粧櫓'],
};
// West Bailey (Nishi-no-maru) yagura outside the auto trace's window, read from the raw OSM dump: [way id, romanised, Japanese]
const WEST = [
  [23707897, 'Yo-no-watariyagura', 'ヨの渡櫓'], [282198596, 'Ta-no-watariyagura', 'タの渡櫓'], [282198597, 'Re-no-watariyagura', 'レの渡櫓'], [282198599, 'Ka-no-watariyagura', 'カの渡櫓'],
  [282198595, 'Wa-no-yagura', 'ワの櫓'], [363164106, 'Wo-no-yagura', 'ヲの櫓'], [363164105, 'Ru-no-yagura', 'ルの櫓'], [282198600, 'Nu-no-yagura', 'ヌの櫓'], [236941938, 'Ka-no-yagura', 'カの櫓'],
  [693991809, 'Entrance of the Hyakken-roka long gallery', '西の丸 百閒廊下入口'],
];

export default function curate(T, h) {
  const { lat, lon } = T.origin, proj = projector(lat, lon);
  const dump = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/geometry', ID, 'osm.json'), 'utf8'));
  const way = (id) => { const w = dump.elements.find((e) => e.type === 'way' && e.id === id); if (!w) throw new Error(`osm way ${id} not in the dump`); let p = w.geometry.map(proj); if (p.length > 3 && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p = p.slice(0, -1); return { poly: p, tags: w.tags || {} }; };

  // sources
  const S = (id, title, url) => h.source({ id, kind: 'web', title, url, licence: 'read for facts only; no text or images shipped', fetched: '2026-11-27' });
  S('HIM-01', 'Himeji Castle history and tenshu dimensions (himejicastle.jp)', 'https://himejicastle.jp/en/guide/history');
  S('HIM-02', 'Himeji Castle (Wikipedia, English)', 'https://en.wikipedia.org/wiki/Himeji-jo');
  S('HIM-03', 'Himeji Castle Chronology (Hyogo prefectural history museum)', 'https://www.hyogo-c.ed.jp/~rekihaku-bo/historystation/sp/rekihaku-db/castle/himeji-chronology/index_en.html');
  S('HIM-04', 'Himeji-jo, Agency for Cultural Affairs recommendation text (online.bunka.go.jp)', 'https://online.bunka.go.jp/suisensyo/himeji/MAINTEXT/main3.html');
  S('HIM-05', 'Himeji\'s Defenses (MLIT multilingual database)', 'https://www.mlit.go.jp/tagengo-db/en/R1-00693.html');
  S('HIM-06', 'Himeji Castle tenshu figures, 31.5 m keep on 14.85 m stone base (tabi-mag.jp)', 'https://tabi-mag.jp/hg0257/');
  S('HIM-07', 'Himeji Castle guide (nippon.com, Japanese)', 'https://www.nippon.com/ja/guide-to-japan/gu900254/');
  S('HIM-08', 'Ro no watariyagura record, Heritage Database (Agency for Cultural Affairs)', 'https://online.bunka.go.jp/db/heritages/detail/186416');

  // ---- window and terrain: widen to the west so the Nishi-no-maru fits -------------------------------------------------------------------
  T.bounds = [-300, -200, 200, 200];
  T.heights = buildHeightsGrid(path.join(ROOT, 'data/geometry', ID, 'terrarium'), lat, lon, T.bounds, 10);

  // ---- documented (mapped) layer -------------------------------------------------------------------------------------------------------
  const outline = h.byId('outline');
  outline.name = 'Himeji Castle · Daitenshu complex outline · mapped (OSM way 23707900)';
  outline.note = 'The mapped castle building: about 32 x 28 m, tagged building:levels=6, height=46.4 and start_date=1609. 46.4 m matches the published total height (Wikipedia: 46.4 m, 92 m above sea level on a 45.6 m hilltop). It is read here as the Daitenshu on its stone base; the three small keeps are not separately mapped.';
  h.height(outline, 46.4, 'osm:way/23707900', 'OSM height=46.4 tag on the castle building way; Wikipedia gives the same total height');
  for (const [id, [ro, ja, gloss]] of Object.entries(GATES)) { const e = h.byId(id); e.name = `${ro} (${ja}) · mapped gate footprint (${e.src.replace('osm:way/', 'OSM way ')})`; e.note = `Mapped footprint of a named gate; the name is the OSM name tag${gloss ? ` (${gloss})` : ''}. No height read, so it is kerb-high.`; }
  for (const [id, [ro, ja]] of Object.entries(YAGURA)) { const e = h.byId(id); e.name = `${ro} (${ja}) · mapped footprint (${e.src.replace('osm:way/', 'OSM way ')})`; e.note = 'Mapped footprint of a named turret/corridor tower; the name is the OSM name tag. No height read, so it is kerb-high.'; }
  h.byId('building-35').note = 'Himejicastle.jp and Wikipedia (via the trace notes) name the Salt Turret among the storehouses; the Wikipedia article says it held up to about 3,000 bags of salt. OSM maps it as one 33 x 11 m footprint.';

  // Sangoku-bori (Three-Country Moat, a reservoir; ~2,500 m2 on Wikipedia) was classed as a retaining wall by the pipeline; draw the mapped water outline instead
  const sb = way(694032140);
  h.remove('retaining-wall-362');
  h.add({ id: 'water-sangoku-bori', kind: 'water', poly: sb.poly, water: 'reservoir', src: 'osm:way/694032140', ev: 'mapped', conf: 0.7, name: `Sangoku-bori (三国堀, Three-Country Moat) · mapped water outline, ${Math.round(area(sb.poly))} m2`,
    note: `Mapped as natural=water reservoir with a retaining wall. The mapped outline is ${Math.round(area(sb.poly))} m2; Wikipedia gives about 2,500 m2 for the Sangoku-bori. The water level is derived (lowest DEM value on the outline), not mapped.` });

  // West Bailey features read from the raw OSM dump
  const westIds = [];
  for (const [id, ro, ja] of WEST) {
    const w = way(id);
    if (w.poly.some((p) => p[0] < -299 || p[0] > 199)) throw new Error(`west way ${id} outside the window`);
    const eid = `building-w${id}`;
    h.add({ id: eid, kind: 'building', poly: w.poly, use: 'yes', src: OSM + id, ev: 'mapped', conf: 0.7, name: `${ro} (${ja}) · mapped footprint (OSM way ${id})`, note: 'Mapped footprint in the Nishi-no-maru (West Bailey); the name is the OSM name tag. No height read, so it is kerb-high.' });
    westIds.push(eid);
  }
  const mw = h.byId('water-200'); mw.name = 'Moat remnant (unnamed OSM water polygon, way 281842916) · mapped'; mw.note = 'An unnamed mapped water polygon east of the keep, with a mapped node "Moat" inside it. Which of the castle\'s three moats it belongs to is not stated by OSM; the level is derived, not mapped.';
  for (const [id, why] of [['marker-8', 'the point lies inside the mapped moat water (way 281842916)'], ['marker-12', 'the point lies on the far bank of the mapped moat water'], ['marker-14', 'the point lies on the far bank of the mapped moat water']]) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = `${why}; the nav grid finds no dry route to it from the spawn. It is a mapped point, not a claim about access.`; }
  { const m = h.byId('marker-21'); m.name = 'Himeji Castle (Shinto wayside shrine node) · mapped point'; m.unreachableOk = true; m.unreachableNote = 'the mapped node sits at the keep centre, inside the footprint that the constructed layer raises as the Daitenshu mass'; }
  levelInlandWaters(T, h);

  // ---- eras ----------------------------------------------------------------------------------------------------------------------------
  const inWest = (e) => { const p = e.poly || e.path; if (!p) return false; const c = cen(p); return c[0] < -130 && c[1] > -150 && c[1] < 30; };
  const gateIds = Object.keys(GATES), yaIds = Object.keys(YAGURA).filter((i) => i !== 'building-32');
  const lines = T.elements.filter((e) => (e.kind === 'wall' || e.kind === 'retaining-wall') && !inWest(e)).map((e) => e.id);
  const core = ['outline', ...gateIds, ...yaIds, ...lines, 'water-199', 'water-200', 'water-sangoku-bori'];
  const honda = ['building-32', ...westIds, ...T.elements.filter((e) => (e.kind === 'wall' || e.kind === 'retaining-wall') && inWest(e)).map((e) => e.id)];
  carryOver(T, '1609', core, { note: 'mapped line assumed unchanged since 1609; the Agency for Cultural Affairs text says most surviving buildings and the layout date from Ikeda Terumasa\'s time (1601-09), but no 1609 plan was found' });
  carryOver(T, '1618', [...core, ...honda], { note: 'mapped line assumed unchanged since 1617-18; no plan of that date was found' });

  // ---- constructed (schematic) layer ---------------------------------------------------------------------------------------------------
  const C = [];
  const ALL = ['1609', '1618', 'today'], HON = ['1618', 'today'];
  const o = rectOf(outline.poly), tenshuAt = o.at;
  const ar = o.w / o.d;
  // Daitenshu: stone base (14.85 m) and five tiers sized from the published floor areas
  C.push({ id: 'c-tenshu-base', kind: 'building', at: tenshuAt, w: o.w, d: o.d, rot: o.rot, roof: 'flat', h: { v: 14.85, src: 'inferred', note: 'stone base height 14.85 m from tabi-mag.jp; 14.85 + 31.5 = 46.35, matching the OSM/Wikipedia total of 46.4 m' },
    replaces: [], src: 'osm:way/23707900', ev: 'schematic', conf: 0.3, eras: ALL, unreachableOk: true, unreachableNote: 'a solid schematic mass: the stone base of the Daitenshu is drawn without its stair and entrance passage, which no plan places.',
    name: 'Daitenshu stone base · schematic mass, 14.85 m', basis: 'Drawn on the mapped outline (OSM way 23707900, 32 x 28 m). The tenshu is a Japanese keep on a battered stone base; the renderer has only building and tower elements, so the base is a flat-topped building mass. The 14.85 m height is read from tabi-mag.jp; it adds to 31.5 m to give the published 46.4 m. The tenshu entrance and stair are not drawn.' });
  const AREAS = [[554, 'floors 1-2 (about 554 and 550 m2 on Wikipedia)'], [440, 'floor 3 (440 m2)'], [240, 'floor 4 (240 m2)'], [170, 'floor 5 (area not stated; interpolated)'], [115, 'floor 6 (115 m2)']];
  const TOPS = [6.0, 11.5, 16.5, 21.5, 26.5];
  AREAS.forEach(([A, what], i) => {
    const w = +Math.sqrt(A * ar).toFixed(1), d = +Math.sqrt(A / ar).toFixed(1), top = +(14.85 + TOPS[i]).toFixed(2);
    C.push({ id: `c-tenshu-tier-${i + 1}`, kind: 'building', at: tenshuAt, w, d, rot: o.rot, roof: i === 4 ? 'hip' : 'flat', h: { v: top, src: 'inferred', note: `assumed: first tier 6 m then about 5 m per tier above the 14.85 m base, so the top ridge reaches about 46 m` },
      src: 'inferred', ev: 'schematic', conf: 0.2, eras: ALL, unreachableOk: true, unreachableNote: 'a solid schematic mass: the tenshu interior is not modelled.',
      name: `Daitenshu tier ${i + 1} · schematic mass (${w} x ${d} m)`,
      basis: `${what}. Footprint area from the floor areas on the English Wikipedia article (1st about 554, 2nd 550, 3rd 440, 4th 240, 6th 115 m2); the plan aspect follows the mapped outline and the centre is the outline centre, both assumed. Eaves roofs, gables and the shachi are not drawn: the renderer has no irimoya or karahafu roof and its hip roof pitch is fixed, so the tiers are flat-topped masses and only the top tier has a hip roof. The nested tiers stand for the five roof layers seen from outside (six floors, one a basement).` });
  });

  // Gates and yagura: raised as masses from the mapped footprints. Passage direction at a gate follows the nearest mapped path.
  const roads = T.elements.filter((e) => e.kind === 'road').map((e) => e.path);
  const nearestRoad = (p) => { let best = [1e9, null, null]; for (const r of roads) for (let i = 0; i < r.length - 1; i++) { const a = r[i], b = r[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) { const l = Math.hypot(dx, dy) || 1; best = [d, [dx / l, dy / l], q]; } } return best; };
  const PW = 3.2;
  for (const id of ['building-65', 'building-75', 'building-196', 'building-266', 'building-378']) {
    const e = h.byId(id), [ro, ja] = GATES[id], R = rectOf(e.poly), c = cen(e.poly), [dr, tv, q] = nearestRoad(c);
    let t = tv && dr < 8 ? tv : [Math.cos((R.rot + 90) * Math.PI / 180), Math.sin((R.rot + 90) * Math.PI / 180)];   // passage direction: nearest mapped path within 8 m, else across the long axis
    const viaRoad = !!(tv && dr < 8), n = [-t[1], t[0]];
    const us = e.poly.map((p) => (p[0] - c[0]) * n[0] + (p[1] - c[1]) * n[1]), vs = e.poly.map((p) => (p[0] - c[0]) * t[0] + (p[1] - c[1]) * t[1]);
    const n0 = Math.min(...us), n1 = Math.max(...us), t0 = Math.min(...vs), t1 = Math.max(...vs);
    const nc = viaRoad ? Math.max(n0 + PW / 2 + 0.6, Math.min(n1 - PW / 2 - 0.6, (q[0] - c[0]) * n[0] + (q[1] - c[1]) * n[1])) : (n0 + n1) / 2;
    const rot = Math.atan2(t[1], t[0]) * 180 / Math.PI, L = t1 - t0, tm = (t0 + t1) / 2;
    [[n0, nc - PW / 2, 'a'], [nc + PW / 2, n1, 'b']].forEach(([a, b, k]) => {
      const wdt = b - a; if (wdt < 1.2) return;
      const nm = (a + b) / 2, at = [+(c[0] + n[0] * nm + t[0] * tm).toFixed(1), +(c[1] + n[1] * nm + t[1] * tm).toFixed(1)];
      C.push({ id: `c-${id}-${k}`, kind: 'building', at, w: +L.toFixed(1), d: +wdt.toFixed(1), rot: +rot.toFixed(1), roof: 'gable', h: { v: 6, src: 'inferred', note: 'assumed one tall storey of gate body (6 m); no gate height was read' },
        replaces: k === 'a' ? [id] : undefined, src: e.src, ev: 'schematic', conf: 0.2, eras: ALL, unreachableOk: true, unreachableNote: 'a solid schematic gate flank; the 3.2 m passage between the two flanks stays open.',
        name: `${ro} (${ja}) flank ${k.toUpperCase()} · schematic mass, 6 m assumed`,
        basis: `Two flanking masses on the mapped footprint (${e.src}) with a ${PW} m passage between them, standing for a Himeji yagura-mon (gate with a room over it). The upper room over the passage is not drawn so that the route stays walkable. Passage direction ${viaRoad ? `follows the nearest mapped path (${dr.toFixed(0)} m from the footprint centre)` : 'is assumed across the long axis of the footprint'}.` });
    });
  }
  // yagura and watariyagura
  const raise = (id, ro, ja, eras, why, hv = 8) => {
    const e = h.byId(id), R = rectOf(e.poly);
    C.push({ id: `c-${id}`, kind: 'building', at: R.at, w: R.w, d: R.d, rot: R.rot, roof: 'gable', h: { v: hv, src: 'inferred', note: `assumed two storeys at 4 m; the Heritage Database records the Ro no watariyagura as two-tier, two-storey with a basement (1609), and the same is assumed for the others` },
      replaces: [id], src: e.src, ev: 'schematic', conf: 0.2, eras, unreachableOk: true, unreachableNote: 'a solid schematic mass: the interior is not modelled and no door is placed.',
      name: `${ro} (${ja}) · schematic mass, ${hv} m assumed`, basis: `Raised on the mapped footprint (${e.src}) as an oriented rectangle with a tiled gable roof (the renderer has no irimoya roof; see report). ${why}` });
  };
  const yWhy = 'Named in the OSM name tag; the written sources (himejicastle.jp, Wikipedia) describe the yagura as plastered turrets with loopholes, but give no dimensions.';
  for (const id of ['building-84', 'building-76', 'building-195', 'building-35', 'building-272', 'building-396', 'building-230', 'building-228']) raise(id, YAGURA[id][0], YAGURA[id][1], ALL, yWhy);
  raise('building-32', YAGURA['building-32'][0], YAGURA['building-32'][1], HON, 'Built by Honda Tadamasa\'s family in 1617-18 for Princess Sen (Wikipedia, via the chronology); that is why it is absent from the 1609 era.');
  const WHY = 'Part of the West Bailey developed by Honda Tadamasa in the early 17th century: earthen walls, watchtowers with thick walls and a long gallery joining them (himejicastle.jp). Which tower is which is not stated by any source read.';
  for (const [id, ro, ja] of WEST) if (id !== 693991809) raise(`building-w${id}`, ro, ja, HON, WHY, /渡/.test(ja) ? 6 : 8);

  // Earthen plastered walls (tsuijibei): the mapped wall lines raised. Stone walls (retaining-wall lines) are left kerb-high: no per-wall height was read.
  const wallLines = T.elements.filter((e) => e.kind === 'wall' && e.path && e.path.length >= 2);
  let nw = 0;
  for (const e of wallLines) {
    let L = 0; for (let i = 1; i < e.path.length; i++) L += Math.hypot(e.path[i][0] - e.path[i - 1][0], e.path[i][1] - e.path[i - 1][1]);
    if (L < 6) continue;
    nw++;
    C.push({ id: `c-${e.id}`, kind: 'wall', path: e.path, closed: false, thick: 0.6, merlon: false, h: { v: 2.4, src: 'inferred', note: 'assumed 2.4 m for a plastered earthen wall with a tile cap; no wall height was read' },
      src: e.src, ev: 'schematic', conf: 0.2, eras: inWest(e) ? HON : ALL,   // the kerb-high mapped line is kept under it (not `replaces`): the spawn is placed from the documented rings
      unreachableOk: true, unreachableNote: 'a schematic wall line: nothing here is a claim that the point beside it is reachable on foot.',
      name: `Plastered earthen wall (${e.src.replace('osm:way/', 'OSM way ')}) · schematic, 2.4 m assumed`,
      basis: 'Drawn on the mapped wall line. Himeji\'s walls are plastered earthen walls with loopholes (sama, about 1,000 survive) on stone bases (himejicastle.jp, Wikipedia; 32 earthen walls are designated). The sama and the tile cap are not drawn; the height is an assumption.' });
  }
  T.constructed = C;

  const ev = (id, year, label, short, summary, basis, conjecture, sources, facts) => ({ id, year, label, short, lens: 'none', summary, basis, conjecture, sources, facts });
  T.eras = [
    ev('1609', '1609', 'Ikeda Terumasa\'s keep complex', '1609', 'Ikeda Terumasa has rebuilt Himeji since 1601; the Daitenshu is completed in 1609, with the gates, yagura and walls of the inner castle.',
      'The OSM-mapped keep outline, named gates and yagura, wall lines and the inner moat remains, carried back as inferred because the Agency for Cultural Affairs text says most surviving buildings and the layout date from Ikeda\'s time. Honda\'s West Bailey buildings and the Kesho-yagura are left out.',
      'No 1609 plan was found. Hideyoshi\'s three-storey keep of 1581 (about 55 m2 floor) was removed by Ikeda and its position is not documented. Any earlier Nishi-no-maru enclosure is unmapped. The middle and outer moats (the outer is now buried) and the castle town are not in the window or not mapped. Which walls and gates are 1609 and which later repair is not known.',
      ['HIM-01', 'HIM-02', 'HIM-03', 'HIM-04', 'HIM-08'],
      ['Ikeda began work in 1601 and the Dai-Tenshu was completed in 1609 (Hyogo chronology).', 'Ikeda removed Hideyoshi\'s 1581 three-storey keep (Wikipedia).', 'The keep is six floors over a basement: 31.5 m on a 14.85 m stone base, 46.4 m in all (tabi-mag.jp; Wikipedia).', 'The Ro no watariyagura is dated around 1609 (Heritage Database).']),
    ev('1618', '1617-18', 'Honda Tadamasa\'s West Bailey', '1618', 'Honda Tadamasa, lord from 1617, develops the Nishi-no-maru (West Bailey) with earthen walls, watchtowers and a long gallery, and adds the Kesho-yagura for Princess Sen.',
      'The 1609 set plus the OSM-mapped West Bailey yagura and watariyagura (read from the raw OSM dump), the Kesho-yagura and the wall lines inside the West Bailey, all carried back as inferred from the present map.',
      'No plan of 1618 was found. The long gallery (about 240 m on himejicastle.jp) is not drawn between the mapped towers: its route is not documented. The Meiji-era palace in the Nishi-no-maru, later military buildings and later repairs are not drawn.',
      ['HIM-01', 'HIM-02', 'HIM-03', 'HIM-04'],
      ['Honda Tadamasa became lord in 1617; Nishi no Maru was improved in 1616-17 as a residence for Princess Sen and Honda Tadatoki (Hyogo chronology).', 'The West Bailey has earthen walls, watchtowers and a long gallery with watchtowers at each end (himejicastle.jp).']),
    ev('today', 'Today', 'World Heritage site', 'Present', 'A World Heritage site since 1993 and a Special Historic Site within the middle moat; the Daitenshu was repaired 1956-64 and again 2010-15.',
      'Everything drawn is OpenStreetMap (ODbL) and the Terrarium tiles, with the keep height from the OSM tag. Modern visitor buildings, paths and the zoo to the east are mapped as they are.',
      'Walls and buildings have no sourced height and are kerb-high plan lines, except the keep outline\'s tagged 46.4 m. The DEM (about 30 m source) reads 54-60 m at the keep, above the published hilltop of 45.6 m, and cannot show the terraced stone walls (up to 26 m high). The three small keeps and the Nishi-no-maru palace footprint are not mapped.',
      ['HIM-02', 'HIM-05', 'HIM-06'],
      ['The castle survived the 1945 air raid and the 1995 earthquake (Wikipedia).', 'Wikipedia counts 83 structures, of which 74 Important Cultural Properties; 21 of the original 84 gates remain.', 'Three moats originally; the outer is now buried (Wikipedia).']),
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
