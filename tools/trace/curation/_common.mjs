// Shared curation helpers (see tools/trace/make-trace-js.mjs).
// A historic era is the "today" element list minus what is modern or undated, with the elements it keeps marked as
// carried over: the mapped line is assumed unchanged since that date because no earlier plan was found. The marking is
// ev:'inferred' with a note, so check_sources and the in-game card both say so.
export function carryOver(T, eraId, keep, { note, add = [], modify = {}, drop = [] } = {}) {
  const keepSet = new Set(keep);
  const remove = T.elements.filter((e) => !keepSet.has(e.id)).map((e) => e.id).concat(drop);
  const mod = {};
  for (const id of keep) {
    const e = T.elements.find((x) => x.id === id); if (!e) throw new Error(`carryOver: no element ${id}`);
    const label = e.name || `${e.kind} ${e.src.replace(/^osm:/, 'OSM ')}`;
    mod[id] = { ev: 'inferred', conf: Math.min(e.conf ?? 0.5, 0.4), name: `${label.replace(/ · carried back.*$/, '')} · carried back, inferred`, note: `${e.note ? e.note + '; ' : ''}${note}` };
  }
  for (const [id, m] of Object.entries(modify)) mod[id] = { ...(mod[id] || {}), ...m };
  T.diffs[eraId] = { remove: [...new Set(remove)], add, modify: mod };
}
export const cat = (T, ...ids) => ids.flatMap((i) => (Array.isArray(i) ? i : [i]));

// Inland water has no mapped surface height, and t1.js digs and floods an element without a `level` at sea level (0 m): on a plateau that is a shaft hundreds of metres deep.
// So an inland water body gets a derived level: the lowest DEM height at its outline vertices, a flat surface at the lowest rim. It is labelled derived, not sourced.
export function levelInlandWaters(T, h) {
  let n = 0;
  for (const w of h.all('water')) {
    if (w.level != null || w.water === 'sea' || w.water === 'tidal' || !w.poly) continue;
    const g = w.poly.map((p) => h.ground(p[0], p[1])).filter((v) => Number.isFinite(v));
    if (!g.length) continue;
    w.level = +Math.min(...g).toFixed(1);
    w.note = `${w.note ? w.note + ' ' : ''}Level ${w.level} m derived (lowest DEM value on the outline), not mapped.`;
    n++;
  }
  return n;
}

// ---- constructed (schematic) layer helpers --------------------------------------------------------------------------
// These build `T.constructed[]` elements for the tinted `<era>~built` view. Everything they return is labelled schematic
// with a basis and an assumed height rule: they draw what the written descriptions say (round bastions at intervals, towers
// flanking a gate, a hall on a courtyard) at positions that follow the documented layer, never new evidence.
const plen = (p, closed) => { let L = 0; for (let i = 1; i < p.length; i++) L += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); if (closed) L += Math.hypot(p[0][0] - p[p.length - 1][0], p[0][1] - p[p.length - 1][1]); return L; };
export const pathLength = plen;
// points every `spacing` m along a path (closed rings wrap), with the unit tangent
export function sampleAlong(path, spacing, { closed = true, start = 0.5 } = {}) {
  const P = closed ? [...path, path[0]] : path, out = [];
  let next = spacing * start, run = 0;
  for (let i = 1; i < P.length; i++) {
    const a = P[i - 1], b = P[i], l = Math.hypot(b[0] - a[0], b[1] - a[1]);
    while (l > 0 && run + l >= next) { const t = (next - run) / l; out.push({ at: [+(a[0] + (b[0] - a[0]) * t).toFixed(1), +(a[1] + (b[1] - a[1]) * t).toFixed(1)], tan: [(b[0] - a[0]) / l, (b[1] - a[1]) / l] }); next += spacing; }
    run += l;
  }
  return out;
}
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
// Round bastions at intervals on a wall ring. `avoid` = [[x,y,radius]]: no bastion within radius of those points (gates, water frontage).
export function bastionRing({ path, closed = true, spacing = 60, r = 6.5, h, hNote, basis, src = 'inferred', eras, idPrefix = 'c-bastion', avoid = [], skipIf, angular = false }) {
  const out = []; let k = 0;
  for (const s of sampleAlong(path, spacing, { closed })) {
    if (avoid.some((a) => dist(s.at, a) < (a[2] ?? 25)) || (skipIf && skipIf(s.at))) continue;
    if (angular) { // arrow-head projection: a square turned 45 degrees to the wall (written descriptions of European-style angular bastions)
      const ang = Math.atan2(s.tan[1], s.tan[0]) * 180 / Math.PI + 45;
      out.push({ id: `${idPrefix}-${++k}`, kind: 'building', poly: rectAt(s.at, r * 2, r * 2, ang), roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic bastion block with no stair or door drawn; look at it from the rampart line.', src, ev: 'schematic', conf: 0.15, eras, name: `Angular bastion ${k} · schematic, ${h} m assumed`, basis, h: { v: h, src: 'inferred', note: hNote } });
      continue;
    }
    out.push({ id: `${idPrefix}-${++k}`, kind: 'bastion', at: s.at, r, merlon: true, src, ev: 'schematic', conf: 0.15, eras, name: `Round bastion ${k} · schematic, ${h} m assumed`, basis, h: { v: h, src: 'inferred', note: hNote } });
  }
  return out;
}
// A pair of towers either side of a gate position on a wall (offset along the wall tangent).
export function gateTowers({ wallPath, gateAt, id, r = 5, h, hNote, basis, eras, gap = 9, top }) {
  let best = [1e9, 0];
  for (let i = 0; i < wallPath.length - 1; i++) { const a = wallPath[i], b = wallPath[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1; const t = Math.max(0, Math.min(1, ((gateAt[0] - a[0]) * dx + (gateAt[1] - a[1]) * dy) / l2)); const d = dist(gateAt, [a[0] + dx * t, a[1] + dy * t]); if (d < best[0]) best = [d, i, t]; }
  const a = wallPath[best[1]], b = wallPath[Math.min(wallPath.length - 1, best[1] + 1)], l = dist(a, b) || 1, tx = (b[0] - a[0]) / l, ty = (b[1] - a[1]) / l;
  return [-1, 1].map((s, i) => ({ id: `${id}-${i ? 'b' : 'a'}`, kind: 'tower', at: [+(gateAt[0] + s * tx * gap).toFixed(1), +(gateAt[1] + s * ty * gap).toFixed(1)], r, h: { v: h, src: 'inferred', note: hNote }, top, merlon: true, src: 'inferred', ev: 'schematic', conf: 0.15, eras, name: `Gate tower ${i ? 'B' : 'A'} · schematic, ${h} m assumed`, basis }));
}
// rectangle polygon centred at c, w x d metres, rotated rot degrees (counter-clockwise from +x)
export function rectAt(c, w, d, rot = 0) { const a = rot * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a); return [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]].map(([x, y]) => [+(c[0] + x * ca - y * sa).toFixed(1), +(c[1] + x * sa + y * ca).toFixed(1)]); }
