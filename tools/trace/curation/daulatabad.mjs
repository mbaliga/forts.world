// Curation for Daulatabad (batch 2). Evidence and conflicts: docs/research/daulatabad-pass.md.
// No open plan, survey drawing or dated image of the fort was found (Commons search: gazetteer and atlas pages only), and no source read gives a wall or tower height,
// so this is an honest T1 with no constructed layer. The mapped lines (hill outline, cliff lines, wall lines, three gate nodes, Bharat Mata temple area,
// Hathi Haud, Hemadpanti temple) are drawn as OSM maps them; the era split rests on dates in Wikipedia only.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Daulatabad (Devagiri) Fort, Maharashtra. Hand-curated trace, tier T1 (OSM-mapped; no plan, no heights; T2 and the constructed layer are blocked until a plan and a height source are found).',
  'Base: data/traces/daulatabad.trace.json (OSM ODbL; Terrarium z15 every 8 m over a 1.9 km square, ~30 m SRTM-derived: the ~200 m rock and its 50 m scarp are smoothed).',
  'The OSM "outline" is the hill (about 180 m across) only; the long wall lines to the east are kept and named only as mapped, not as Ambarkot or Kataka, which this pass could not tell apart.',
  'Eras: 1327 draws the hill alone; 1633 adds the mapped wall lines; both are carried back, marked inferred.',
];
const distSeg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); const q = [a[0] + dx * t, a[1] + dy * t]; return [Math.hypot(p[0] - q[0], p[1] - q[1]), q]; };

// The terrain grid is 1.9 km square; mapped lines beyond it would hang in the air, so wall lines are clipped to it and partly-outside footprints dropped.
const B = 940;
const segClip = (a, b) => { let t0 = 0, t1 = 1; const d = [b[0] - a[0], b[1] - a[1]];
  for (const [p, q] of [[-d[0], a[0] + B], [d[0], B - a[0]], [-d[1], a[1] + B], [d[1], B - a[1]]]) { if (p === 0) { if (q < 0) return null; } else { const r = q / p; if (p < 0) { if (r > t1) return null; t0 = Math.max(t0, r); } else { if (r < t0) return null; t1 = Math.min(t1, r); } } }
  return [[a[0] + d[0] * t0, a[1] + d[1] * t0].map((v) => +v.toFixed(1)), [a[0] + d[0] * t1, a[1] + d[1] * t1].map((v) => +v.toFixed(1))]; };
const runsInBox = (path) => { const out = []; let cur = []; for (let i = 1; i < path.length; i++) { const c = segClip(path[i - 1], path[i]); if (!c) { if (cur.length > 1) out.push(cur); cur = []; continue; } if (cur.length && cur.at(-1)[0] === c[0][0] && cur.at(-1)[1] === c[0][1]) cur.push(c[1]); else { if (cur.length > 1) out.push(cur); cur = [c[0], c[1]]; } } if (cur.length > 1) out.push(cur); return out; };

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  for (const b of h.all('building')) if (b.poly.some((q) => Math.max(Math.abs(q[0]), Math.abs(q[1])) > B)) h.remove(b.id);
  for (const w of h.all('wall')) {
    if (w.path.every((q) => Math.max(Math.abs(q[0]), Math.abs(q[1])) <= B)) continue;
    const runs = runsInBox(w.path); const base = { ...w };
    if (!runs.length) { h.remove(w.id); continue; }
    w.path = runs[0];
    runs.slice(1).forEach((r, i) => h.add({ ...base, id: `${w.id}-${String.fromCharCode(98 + i)}`, path: r }));
  }
  h.byId('outline').name = 'Hill outline · mapped (OSM way 1246827867), the rock only';
  const walls = h.all('wall');
  // a wall gets a marker only if the vertex nearest the centre lies inside the 950 m terrain window; the long outer lines run beyond it
  for (const w of walls) { const v = w.path.reduce((a, q) => (Math.hypot(q[0], q[1]) < Math.hypot(a[0], a[1]) ? q : a), w.path[0]); w.name = Math.max(Math.abs(v[0]), Math.abs(v[1])) < 900 ? 'Wall line · mapped (OSM), ring not identified' : null; }
  for (const c of h.all('cliff')) c.name = 'Scarp line · mapped (OSM)';
  const gateIds = [];
  for (const m of h.all('marker').filter((x) => x.osmTags?.historic === 'city_gate')) {
    let best = [1e9, null, null];
    for (const w of walls) for (let i = 0; i < w.path.length - 1; i++) { const [d, q] = distSeg(m.at, w.path[i], w.path[i + 1]); if (d < best[0]) best = [d, q, w]; }
    console.error(`daulatabad: gate node ${m.id} is ${best[0].toFixed(0)} m from a mapped wall`);
    if (best[0] > 30) continue;
    const id = `gate-${gateIds.length + 1}`;
    h.add({ id, kind: 'gate', wall: best[2].id, at: best[1].map((v) => +v.toFixed(1)), src: m.src, ev: 'mapped', conf: 0.6, name: 'Gate · mapped (OSM node), unnamed',
      note: `OpenStreetMap node tagged historic=city_gate, ${best[0].toFixed(0)} m from the mapped wall and snapped to it. Neither its name nor its form is mapped, so a plain 3 m opening is cut; it is not a claim about the real gate.` });
    h.remove(m.id); gateIds.push(id);
  }
  const hillOnly = ['outline', ...h.all('cliff').map((c) => c.id)];
  carryOver(T, '1327', hillOnly, { note: 'the hill and its scarp are assumed unchanged since the Yadava and Tughluq periods; no dated plan was found. The wall lines are not carried this far back because their dates are not established' });
  carryOver(T, '1633', [...hillOnly, ...walls.map((w) => w.id), ...gateIds], { note: 'the present mapped wall lines are assumed unchanged since the Mughal capture; no dated plan was found, and which rings existed then is not established' });

  for (const w of walls) if (!w.name) T.diffs['1633'].modify[w.id].name = null; // an unnamed outer line stays unmarked in the carried-back era too

  T.eras = [
    { id: '1327', year: '1327', label: 'Muhammad bin Tughluq\'s capital', short: '1327', lens: 'none',
      summary: 'Devagiri as Muhammad bin Tughluq renamed it Daulatabad and moved his capital there (1327 or 1328): the rock fortress alone.',
      basis: 'Wikipedia: founded c. 1187 by Bhillama V; capital moved in 1327 (one passage says 1328) and returned to Delhi in 1334. Only the OSM hill outline and scarp lines are drawn.',
      conjecture: 'No plan of any period was found. The rock is drawn as mapped today; the ring walls are left out because the page says their builder is uncertain (Malik Ambar or the Tughluqs for Ambarkot).',
      sources: [],
      facts: ['Wikipedia: Bhillama V founded Devagiri in about 1187; Alauddin Khalji raided it in 1296; Muhammad bin Tughluq moved the capital in 1327 (one passage says 1328) and back to Delhi in 1334.', 'The hill is about 200 m high and its lower slopes were scarped to leave about 50 m of vertical rock (Wikipedia).'] },
    { id: '1633', year: '1633', label: 'Mughal capture', short: '1633', lens: 'none',
      summary: 'The fort at the Mughal capture (1632 or 1633), shown as the hill plus the present mapped wall lines carried back.',
      basis: 'Wikipedia: Ahmadnagar Sultanate from 1499; Khadki (later Aurangabad) founded nearby in 1610; Mughal capture 1632 or 1633 (the page gives both).',
      conjecture: 'Which of the mapped wall lines existed in 1633, and which ring each is, is not established; none has a source height. All are carried back unchanged, marked inferred.',
      sources: [],
      facts: ['Mughal capture is dated 1632 in one passage and 1633 in another (Wikipedia); the Marathas took the fort in 1760.', 'The outer wall (Ambarkot) is described as elliptical, about 2 km north-south, with two defence walls; the Kataka is a double rampart with bastions and moats (Wikipedia).'] },
    { id: 'today', year: 'Today', label: 'Ticketed monument', short: 'Monument', lens: 'none',
      summary: 'A ticketed monument on a rock about 200 m high, with long wall lines, a temple area, a large tank and the Mendha Top and other cannons.',
      basis: 'The OSM hill outline, scarp lines, wall lines, three gate nodes, three cannon markers, Hathi Haud, Hemadpanti temple and the Bharat Mata temple area.',
      conjecture: 'Heights are unknown (kerb-high). The Chand Minar, Chini Mahal, the moat and the dark passage are not mapped and so not drawn.',
      sources: [],
      facts: ['The Chand Minar is attributed to Hasan Gangu Bahmani (1347-58) in one passage and dated 1446 in another (Wikipedia); no height is given there.', 'The fort is listed as owned by the Government of India and open to the public (Wikipedia).'] },
  ];
}
