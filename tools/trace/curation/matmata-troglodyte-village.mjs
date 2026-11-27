// Curation for the Matmata troglodyte village (pit dwellings), Tunisia. Evidence and conflicts: docs/research/matmata-troglodyte-village-pass.md.
// This is not a walled fort: each house is a sunken courtyard (a pit) with rooms cut into its walls and a sloping entrance tunnel.
// The 26 pit rims are mapped in OSM; no plan or survey of any pit was found, and no source read gives a depth for a named pit.
import fs from 'node:fs';
import path from 'node:path';
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Matmata troglodyte village (Matmata el Qadima), Gabes, Tunisia. Hand-curated trace, tier T1 (26 OSM pit rims, one published coordinate for Hotel Sidi Driss pit 2; no plan or survey) plus a schematic constructed layer.',
  'Base: data/traces/matmata-troglodyte-village.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived). Local origin 33.54368 N, 9.96592 E; x east, y north, metres.',
  'Documented layer: the 22 pit rims in the raw window are drawn as sunken courtyards 8 m deep. The footprint is the OSM rim; the 8 m depth is NOT measured: it is the middle of the 7-9 m range in published descriptions, and is flagged inferred on every pit.',
  'Constructed layer (eras `<era>~built`): per pit a schematic lining wall at the courtyard edge and an open-cut entrance ramp standing in for the vaulted tunnel, plus the lateral tunnels of Hotel Sidi Driss (1976, today). Rooms in the pit walls are not drawn: the renderer cannot carve them.',
];

const DEPTH = 8, DEPTH_NOTE = 'inferred: middle of the published 7-9 m range (MAT-06, MAT-01), not measured';
const centroid = (p) => p.reduce((a, q) => [a[0] + q[0] / p.length, a[1] + q[1] / p.length], [0, 0]);
const area = (p) => Math.abs(p.reduce((s, q, i) => s + q[0] * p[(i + 1) % p.length][1] - p[(i + 1) % p.length][0] * q[1], 0)) / 2;
const inPoly = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
const scaleAbout = (p, c, k) => p.map(([x, y]) => [+(c[0] + (x - c[0]) * k).toFixed(1), +(c[1] + (y - c[1]) * k).toFixed(1)]);

// Hotel Sidi Driss, pit 2: published coordinate 33.542564, 9.967038 (MAT-04) -> local metres
const SD = [103.7, -123.8];

export default function curate(T, h) {
  h.source({ id: 'MAT-03', kind: 'reference', title: 'Wikipedia, Matmata, Tunisia (history, 1969 floods, pit construction, Hotel Sidi Idriss and Star Wars 1976)', url: 'https://en.wikipedia.org/wiki/Matmata,_Tunisia', licence: 'CC BY-SA, cited for facts only (nothing copied)', fetched: '2026-11-27' });
  h.source({ id: 'MAT-04', kind: 'reference', title: 'Galaxy Tours, Hotel Sidi Idriss (pit 2 coordinate, five pits and four lateral tunnels, 1968 opening, 1976 and 2000 filming dates)', url: 'https://galaxytours.com/?p=274', licence: 'cited for facts and one coordinate only (nothing copied)', fetched: '2026-11-27' });
  h.source({ id: 'MAT-05', kind: 'reference', title: 'Atlas Obscura, Matmata Underground Houses', url: 'https://www.atlasobscura.com/places/matmata-underground-houses', licence: 'cited for facts only (nothing copied)', fetched: '2026-11-27' });
  h.source({ id: 'MAT-06', kind: 'reference', title: 'Bulletin de la Societe royale belge d\'anthropologie et de prehistoire 59 (1948), pp. 188-196, on Matmata (pit 7-9 m deep, sloping access passage, rooms on two levels)', url: 'https://biblio.naturalsciences.be/associated_publications/anthropologica-prehistorica/bulletin-de-la-societe-royale-belge-d-anthropologie-et-de-prehistoire/ap-059-1948/ap-59_p188-p196.pdf', licence: 'cited for facts only (nothing copied); OCR text, read through a summarising fetch', fetched: '2026-11-27' });
  h.source({ id: 'MAT-07', kind: 'reference', title: 'Al Jazeera, The last residents of Tunisia\'s underground houses (photo essay, 2018)', url: 'https://www.aljazeera.com/gallery/2018/2/27/the-last-residents-of-tunisias-underground-houses/', licence: 'cited for facts only (nothing copied)', fetched: '2026-11-27' });
  h.source({ id: 'MAT-08', kind: 'reference', title: 'Lonely Planet, Hotel Sidi Driss (several pit courtyards linked by tunnels)', url: 'https://www.lonelyplanet.com/tunisia/matmata/attractions/hotel-sidi-driss/a/poi-sig/1595750/355680', licence: 'cited for facts only (nothing copied)', fetched: '2026-11-27' });
  h.source({ id: 'MAT-09', kind: 'reference', title: 'Journal of Architecture and Urbanism (VGTU), thermal study of Tunisian troglodyte dwellings (Old Matmata, Oued El Khil)', url: 'https://bme.vgtu.lt/index.php/JAU/article/download/17923/11773', licence: 'cited for facts only (nothing copied)', fetched: '2026-11-27' });

  // ---- clip to the raw OSM window: the auto trace covered ~1.7 km but data/geometry/<id>/osm.json holds only the 700 m fetch ----------
  // Elements citing an OSM id that is not in the raw dump cannot be checked against it (tools/check_sources.mjs), so they are dropped.
  // All lie 700-2600 m from the origin: roads and wadis crossing the window edge, the outer houses, and four pit rims at 709-749 m. Pits and the hotel in the window are kept.
  {
    const root = path.resolve(new URL('../../..', import.meta.url).pathname);
    const raw = new Set(JSON.parse(fs.readFileSync(path.join(root, 'data/geometry', T.id, 'osm.json'), 'utf8')).elements.map((e) => `${e.type}/${e.id}`));
    const outside = T.elements.filter((e) => [e.src, e.h?.src, ...(e.from || [])].some((s) => s && s.startsWith('osm:') && !raw.has(s.slice(4)))).map((e) => e.id);
    h.remove(...outside);
  }

  // Budget (250 KB, 400 elements): roads and wadis are simplified to 3 m and building outlines to 0.7 m (Douglas-Peucker), which moves no vertex by more than that.
  const dp = (pts, t) => { if (pts.length < 3) return pts; const a = pts[0], b = pts[pts.length - 1], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; let m = 0, k = 0; for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs((pts[i][0] - a[0]) * dy - (pts[i][1] - a[1]) * dx) / l; if (d > m) { m = d; k = i; } } return m > t ? [...dp(pts.slice(0, k + 1), t).slice(0, -1), ...dp(pts.slice(k), t)] : [a, b]; };
  for (const e of [...h.all('road'), ...h.all('waterway')]) e.path = dp(e.path.map(([x, y]) => [Math.round(x * 10) / 10, Math.round(y * 10) / 10]), 3);

  for (const e of h.all('building')) if (e.poly.length > 6) { const q = dp([...e.poly, e.poly[0]], 0.7); q.pop(); if (q.length >= 4) e.poly = q; }
  const r1 = (a) => (typeof a === 'number' ? Math.round(a * 10) / 10 : a.map(r1));
  for (const e of T.elements) { if (e.poly) e.poly = r1(e.poly); if (e.path && e.kind !== 'pit') e.path = r1(e.path); }
  // ---- documented layer: the 22 mapped pit rims in the raw window -> sunken courtyards -------------------------------------------------
  const pits = h.all('pit');
  const hotelIds = new Set(); // candidates for the five Sidi Driss pits: mapped rims within 100 m of the published pit 2 coordinate (assumed)
  for (const p of pits) if (Math.hypot(centroid(p.poly)[0] - SD[0], centroid(p.poly)[1] - SD[1]) < 100) hotelIds.add(p.id);
  const geo = new Map(); // id -> { c, R, floor, poly }
    for (const p of pits) {
    const c = centroid(p.poly), R = Math.sqrt(area(p.poly) / Math.PI), g = h.ground(c[0], c[1]), floor = +(g - DEPTH).toFixed(1), way = p.src.replace('osm:', '');
    geo.set(p.id, { c, R, floor, poly: p.poly, g });
    const isHotel = hotelIds.has(p.id);
    p.kind = 'ditch'; const rimPoly = p.poly; delete p.poly; p.path = p.__ring = scaleAbout(rimPoly, c, 0.5).filter((_, i) => i % 2 === 0).map(([x, y]) => [x, y, floor]); p.closed = true; p.w = +R.toFixed(1);
    p.rim = rimPoly.map(([x, y]) => [Math.round(x), Math.round(y)]).filter((_, i) => i % 2 === 0 || rimPoly.length < 8); p.from = [p.src]; p.src = 'inferred'; p.ev = 'inferred'; p.conf = 0.3; delete p.__ring;
    p.name = `Pit ${way.replace('way/', '')} · rim mapped, ${DEPTH} m depth inferred${isHotel ? ' · assumed Hotel Sidi Driss pit' : ''}`;
    p.note = `Rim from OSM ${way}; depth inferred (${DEPTH_NOTE}); flat floor at DEM ground minus ${DEPTH} m.${isHotel ? ' Hotel Sidi Driss has five pits (MAT-04); pit 2 coordinate is ' + Math.hypot(c[0] - SD[0], c[1] - SD[1]).toFixed(0) + ' m from this rim; which rim is which pit is not established.' : ''}`;
    p.h = { v: DEPTH, src: 'inferred', note: DEPTH_NOTE };
    delete p.use;
  }

  // Hotel Sidi Driss pit 2: the only individually located pit. One published coordinate; accuracy not stated.
  const nearest = [...hotelIds].map((id) => [id, Math.hypot(geo.get(id).c[0] - SD[0], geo.get(id).c[1] - SD[1])]).sort((a, b) => a[1] - b[1])[0];
  h.add({ id: 'marker-sidi-driss', kind: 'marker', at: SD, src: 'plan:galaxytours-hotel-sidi-idriss#coordinate-pit-2', ev: 'documented', conf: 0.4, name: 'Hotel Sidi Driss, pit 2 · published coordinate, +-25 m',
    title: 'Hotel Sidi Driss (pit 2) · published coordinate',
    text: `Galaxy Tours (MAT-04) gives 33.542564 N, 9.967038 E for pit 2 of Hotel Sidi Idriss: the dining-room set of the Lars homestead, filmed on 1 April 1976. The hotel has five pits joined by four lateral tunnels (built about 1967-68) and its main entrance is a surface-level passage to the middle pit. The coordinate lies ${nearest[1].toFixed(0)} m from the nearest mapped rim (${nearest[0]}); accuracy of the published point is not stated.` });

  // ---- constructed layer: lining wall + entrance ramp per pit, lateral tunnels at the hotel -------------------------------
  const blockers = [...geo.values()].map((g) => g.poly).concat(h.all('building').map((b) => b.poly));
  const cons = [];
  const dirs = Array.from({ length: 16 }, (_, k) => k * Math.PI / 8);
  let n = 0;
  for (const p of pits) {
    const G = geo.get(p.id); n++;
    // tunnel heading (assumed): the heading whose mouth is lowest on the DEM and whose line crosses no other pit or mapped building
    let best = null;
    for (const a of dirs) {
      const dx = Math.cos(a), dy = Math.sin(a), L0 = 26; let ok = true;
      for (let s = G.R + 2; s <= G.R + L0 && ok; s += 2) { const x = G.c[0] + dx * s, y = G.c[1] + dy * s; if (blockers.some((b) => b !== G.poly && inPoly(x, y, b))) ok = false; }
      const mx = G.c[0] + dx * (G.R + L0), my = G.c[1] + dy * (G.R + L0), mg = h.ground(mx, my);
      if (ok && Number.isFinite(mg) && (!best || mg < best.mg)) best = { a, dx, dy, mx, my, mg };
    }
    if (!best) best = { a: 0, dx: 1, dy: 0, mx: G.c[0] + G.R + 26, my: G.c[1], mg: h.ground(G.c[0] + G.R + 26, G.c[1]) };
    const rise = Math.max(2, best.mg - G.floor), L = Math.max(22, Math.min(46, rise * 4));
    const start = [G.c[0] + best.dx * G.R * 0.93, G.c[1] + best.dy * G.R * 0.93], mouthXY = [G.c[0] + best.dx * (G.R + L), G.c[1] + best.dy * (G.R + L)];
    const mouthZ = +(h.ground(mouthXY[0], mouthXY[1]) - 0.2).toFixed(1);
    const path = Array.from({ length: 7 }, (_, i) => { const t = i / 6; return [+(start[0] + (mouthXY[0] - start[0]) * t).toFixed(1), +(start[1] + (mouthXY[1] - start[1]) * t).toFixed(1), +(G.floor + (mouthZ - G.floor) * t).toFixed(1)]; });
    const way = p.from[0].replace('osm:', '');
    cons.push({ id: `c-lining-${n}`, kind: 'wall', path: scaleAbout(G.poly, G.c, 0.93), closed: true, thick: 0.5, src: 'inferred', ev: 'schematic', conf: 0.15,
      name: `Courtyard wall ${n} · schematic, ${DEPTH} m assumed`,
      basis: `Stands for the cut earth wall of the courtyard of OSM ${way} (MAT-06, MAT-01); real wall is clay-gypsum, drawn as a lining.`,
      h: { v: DEPTH, src: 'inferred', note: 'assumed equal to the inferred pit depth' } });
    cons.push({ id: `c-tunnel-${n}`, kind: 'ditch', path, closed: false, w: 3, src: 'inferred', ev: 'schematic', conf: 0.15,
      name: `Entrance ramp ${n} · schematic cut, ${L.toFixed(0)} m`,
      basis: 'MAT-01/02/06: a sloping, vaulted tunnel into each courtyard; heading, width and length assumed, open cut for the vault.',
      h: { v: +(mouthZ - G.floor).toFixed(1), src: 'inferred', note: 'assumed rise floor to mouth; no tunnel length or slope in any source' } });
    cons.push({ id: `c-door-${n}`, kind: 'gate', wall: `c-lining-${n}`, at: [+start[0].toFixed(1), +start[1].toFixed(1)], w: 3.2, src: 'inferred', ev: 'schematic', conf: 0.15,
      name: `Entrance opening ${n} · schematic`, basis: 'Opening where the assumed entrance ramp meets the schematic courtyard wall, so the floor can be walked to.' });
  }
  // Hotel Sidi Driss: four lateral tunnels join its five pits (MAT-04). Only four mapped rims are identified, so the chain below has three links.
  const chain = [...hotelIds].map((id) => ({ id, ...geo.get(id) })).sort((a, b) => a.c[0] - b.c[0]);
  chain.slice(1).forEach((q, i) => { const a = chain[i], d = Math.hypot(q.c[0] - a.c[0], q.c[1] - a.c[1]), u = [(q.c[0] - a.c[0]) / d, (q.c[1] - a.c[1]) / d];
    const s = [a.c[0] + u[0] * a.R * 0.5, a.c[1] + u[1] * a.R * 0.5], e = [q.c[0] - u[0] * q.R * 0.5, q.c[1] - u[1] * q.R * 0.5], z = Math.min(a.floor, q.floor);
    cons.push({ id: `c-lateral-${i + 1}`, kind: 'ditch', path: [[...s.map((v) => +v.toFixed(1)), z], [...e.map((v) => +v.toFixed(1)), z]], closed: false, w: 2.6, eras: ['1976', 'today'], src: 'inferred', ev: 'schematic', conf: 0.12,
      name: `Hotel lateral tunnel ${i + 1} · schematic cut, ${d.toFixed(0)} m`,
      basis: 'MAT-04 says Hotel Sidi Idriss has five pits joined by four lateral tunnels built in 1967-68, and Lonely Planet (MAT-08) says its courtyards are linked by tunnels. Which pits each tunnel joins, and their dimensions, are not published: this joins neighbouring candidate pits west to east, drawn as an open cut at the floor level of the deeper pit.',
      h: { v: 3, src: 'inferred', note: 'assumed tunnel height of 3 m, not drawn (the cut is open); no tunnel dimension was found' } }); });
  T.constructed = cons;

  // ---- eras ----------------------------------------------------------------------------------------------------------
  const pitIds = pits.map((p) => p.id), rimIds = [];
  const shrines = ['building-362', 'building-367', 'building-371'].filter((id) => T.elements.some((e) => e.id === id));
  const zones = h.all('zone').filter((z) => z.zone === 'cemetery').map((z) => z.id), ways = h.all('waterway').map((w) => w.id);
  const keep = [...pitIds, ...rimIds, ...shrines, ...zones, ...ways];
  carryOver(T, '1948', keep, { note: 'carried back from the present map; no dated plan found (see era)' });
  carryOver(T, '1976', [...keep, 'marker-sidi-driss'], { note: 'carried back from the present map; no dated plan found (see era)', modify: { 'marker-sidi-driss': { ev: 'documented', conf: 0.4, name: 'Hotel Sidi Driss, pit 2 · published coordinate, +-25 m', note: 'the pit-2 dining room was filmed here on 1 April 1976 (MAT-04); the hotel opened in 1968' } } });

  for (const d of Object.values(T.diffs)) for (const [id, m] of Object.entries(d.modify)) if (m.ev === 'inferred' && /carried back/.test(m.name || '')) {
    delete m.name; m.note = 'carried back from the present map, inferred (see era)';
    const base = T.elements.find((e) => e.id === id);
    // the validator reads a name before a note, so an element that keeps its own mapped name must say "inferred" in it
    if (base?.name && !/inferred|approx|assumed/i.test(base.name)) m.name = `${base.name} · carried back, inferred`;
  }
  T.eras = [
    { id: '1948', year: 1948, label: 'Before the 1969 floods', short: '1948', lens: 'none',
      summary: 'Matmata as a Berber pit-dwelling village before the floods of 1969 and the move to the new surface town: courtyard houses dug into the hillsides, rooms on two levels around each pit.',
      basis: 'The 1948 Bulletin (MAT-06) describes the pits (7-9 m deep, a sloping passage, rooms on two levels) and counts the dwellings and people. The 26 drawn pit rims are the present OpenStreetMap rims carried back, and the wadis, cemetery and the three zaouias likewise.',
      conjecture: 'No plan, aerial photograph or survey of any date was found for any pit. Which of the 26 mapped pits existed in 1948, and where, is not known: many were rebuilt or collapsed after 1969, so the carried-back rims are the weakest claim in the scene. Modern roads, the hotel, shops and about 200 mapped buildings are removed because their age is unknown. Depth is inferred (8 m); no room is drawn.',
      sources: ['MAT-01', 'MAT-02', 'MAT-03', 'MAT-06', 'MAT-09'],
      facts: ['Bulletin 1948 (MAT-06): a central excavation 7 to 9 m deep, a sloping access passage dug from the hillside, sometimes very long and vaulted, and cavities on two levels; the visited house had three main rooms and alcoves beside the tunnel to be enlarged when children marry. The OCR reads about 700 dwellings and 4,000-5,000 people; the figure is uncertain.', 'Fabrizi (MAT-01): courtyards 5-10 m across and no deeper than 9 m; two floors (sleeping rooms, kitchen and stables below, storage above); access by a cut stair, a ladder or a graded tunnel.', 'Wikipedia (MAT-03): rain for 22 days in 1969 flooded and collapsed many pit homes; most people rebuilt underground and only a few families moved to the new surface town.'] },
    { id: '1976', year: 1976, label: 'The Star Wars shoot', short: '1976', lens: 'none',
      summary: 'Hotel Sidi Driss, five pits joined by lateral tunnels since 1967-68, is the Lars homestead interior: George Lucas films the dining-room set in pit 2 on 1 April 1976.',
      basis: 'MAT-04 gives the hotel (1968), its five pits and four tunnels, the pit-2 coordinate used for the marker, and the 1976 dates; MAT-03 and MAT-05 confirm the Star Wars use. The pit rims are the present OSM rims carried back.',
      conjecture: 'Only pit 2 has a published coordinate and only to an unstated accuracy; the other four hotel pits are four nearby mapped rims chosen by distance (a fifth is not identified), so the five-pit cluster is assumed. The 1976 sets are not drawn: set construction started in mid-February 1976 but the sources give no change to the pits, and the Lars exterior was a separate set on the Chott el-Djerid, 265 km west. Everything else is carried back as in 1948.',
      sources: ['MAT-03', 'MAT-04', 'MAT-05', 'MAT-08'],
      facts: ['Hotel Sidi Idriss was founded in 1968; its five pits and four lateral tunnels were built in the late 1960s (MAT-04).', 'The dining room (pit 2, cave 9) was filmed on 1 April 1976 (scenes A28 and A28A, the latter later deleted); the kitchen was built at EMI-Elstree on the pit 1-2 tunnel and steps as template (MAT-04).', 'Atlas Obscura (MAT-05): residents began leaving in the 1960s and 1970s under the modernisation drive; Hedi Ali Kayel dug the last new house in the 1970s (Al Jazeera, MAT-07).'] },
    { id: 'today', year: 'Today', label: 'Tourist village and hotel', short: 'Present', lens: 'none',
      summary: 'Matmata el Qadima today: some pit houses still lived in, some abandoned, some converted to hotels, cafes and shops; the surface town and road lie around the old pits.',
      basis: 'Pit rims, roads, buildings, walls, zones and wadis are OpenStreetMap (ODbL); the ground is Terrarium; the Sidi Driss marker is the MAT-04 coordinate.',
      conjecture: 'Every pit depth is inferred (8 m), every building and wall without a height is kerb-high, and no room, stair or door of any pit is drawn. Whether each mapped pit is still open, collapsed or built over was not checked. The ruined Kalaa above the village is a separate row (matmata-kalaa-n11034987883) and lies outside this window.',
      sources: ['MAT-01', 'MAT-02', 'MAT-03', 'MAT-04', 'MAT-05', 'MAT-07', 'MAT-08'],
      facts: ['Population 2,116 in 2004 (MAT-03); tourism fell after 2011 and 2015 (MAT-05, MAT-07).', 'Old Matmata uses a mixed vertical and horizontal excavation, and the interior stays under 27 C in summer (MAT-09); about 90% of rustic troglodyte works are abandoned, 10% ruined (MAT-09).', 'Some families built modern houses beside the old ones and use the pits as stables, workshops or warehouses (MAT-07).'] },
  ];
}
