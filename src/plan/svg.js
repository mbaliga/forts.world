// Schematic plan renderer: draws a World's plan record as SVG (minimap or full sheet).
// No three.js dependency, so it also runs in Node for exports.
import { PAINT } from '../core/terrain.js';

const fmt = (v) => (Math.round(v * 10) / 10).toString();

// ---------- marching squares on a vertex grid -> chained polylines
export function contours(values, nx, ny, level, X, Y) {
  // values: Float32Array (nx+1)*(ny+1), vertex (i,j) at index j*(nx+1)+i
  const w = nx + 1;
  const Hn = (ny + 1) * nx; // horizontal edge count
  const segA = [], segB = [];
  const pt = new Map();
  const edgePoint = (id) => {
    if (pt.has(id)) return pt.get(id);
    let p;
    if (id < Hn) { const j = Math.floor(id / nx), i = id % nx; const a = values[j * w + i], b = values[j * w + i + 1]; const t = (level - a) / (b - a || 1e-9); p = [X(i + t), Y(j)]; }
    else { const k = id - Hn; const j = Math.floor(k / w), i = k % w; const a = values[j * w + i], b = values[(j + 1) * w + i]; const t = (level - a) / (b - a || 1e-9); p = [X(i), Y(j + t)]; }
    pt.set(id, p); return p;
  };
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const v0 = values[j * w + i], v1 = values[j * w + i + 1], v2 = values[(j + 1) * w + i + 1], v3 = values[(j + 1) * w + i];
    const c = (v0 > level ? 1 : 0) | (v1 > level ? 2 : 0) | (v2 > level ? 4 : 0) | (v3 > level ? 8 : 0);
    if (c === 0 || c === 15) continue;
    const B = j * nx + i, T = (j + 1) * nx + i, Lf = Hn + j * w + i, R = Hn + j * w + i + 1;
    const add = (a, b) => { segA.push(a); segB.push(b); };
    switch (c) {
      case 1: case 14: add(Lf, B); break;
      case 2: case 13: add(B, R); break;
      case 3: case 12: add(Lf, R); break;
      case 4: case 11: add(R, T); break;
      case 6: case 9: add(B, T); break;
      case 7: case 8: add(Lf, T); break;
      case 5: { const ctr = (v0 + v1 + v2 + v3) / 4 > level; if (ctr) { add(B, R); add(T, Lf); } else { add(Lf, B); add(R, T); } break; }
      case 10: { const ctr = (v0 + v1 + v2 + v3) / 4 > level; if (ctr) { add(Lf, B); add(R, T); } else { add(B, R); add(T, Lf); } break; }
    }
  }
  // chain
  const adj = new Map();
  const link = (e, s) => { const l = adj.get(e); if (l) l.push(s); else adj.set(e, [s]); };
  for (let s = 0; s < segA.length; s++) { link(segA[s], s); link(segB[s], s); }
  const used = new Uint8Array(segA.length);
  const lines = [];
  for (let s0 = 0; s0 < segA.length; s0++) {
    if (used[s0]) continue;
    used[s0] = 1;
    const chain = [segA[s0], segB[s0]];
    // extend forward
    for (let dir = 0; dir < 2; dir++) {
      for (;;) {
        const end = dir === 0 ? chain[chain.length - 1] : chain[0];
        const l = adj.get(end); let nxt = -1;
        if (l) for (const s of l) if (!used[s]) { nxt = s; break; }
        if (nxt < 0) break;
        used[nxt] = 1;
        const other = segA[nxt] === end ? segB[nxt] : segA[nxt];
        if (dir === 0) chain.push(other); else chain.unshift(other);
      }
    }
    lines.push({ pts: chain.map(edgePoint), closed: chain[0] === chain[chain.length - 1] });
  }
  return lines;
}

export function simplify(pts, tol) {
  const n = pts.length;
  if (n < 4) return pts;
  if (Math.abs(pts[0][0] - pts[n - 1][0]) < 1e-9 && Math.abs(pts[0][1] - pts[n - 1][1]) < 1e-9) {
    // closed ring: split at the point farthest from the start, so neither half has a zero-length baseline
    let mi = 1, md = -1;
    for (let i = 1; i < n - 1; i++) { const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]); if (d > md) { md = d; mi = i; } }
    const a = simplifyOpen(pts.slice(0, mi + 1), tol), b = simplifyOpen(pts.slice(mi), tol);
    return a.concat(b.slice(1));
  }
  return simplifyOpen(pts, tol);
}

function simplifyOpen(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let md = 0, mi = -1;
    const ax = pts[a][0], ay = pts[a][1], bx = pts[b][0], by = pts[b][1];
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-9;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / L;
      if (d > md) { md = d; mi = i; }
    }
    if (md > tol && mi > 0) { keep[mi] = 1; stack.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

const PRINT = {
  paper: '#fbfaf6', ink: '#1f2224', inkSoft: '#4a4d4f', water: '#c9dfe6', waterLine: '#3d6f8e', hatch: '#7aa3b8',
  contour: '#a07850', contourIdx: '#7d5a38', hachure: '#8a6644', road: '#eadfc6', roadEdge: '#bba57e', court: '#e9e6de',
  building: '#d8d2c4', buildingEdge: '#3a3a38', temple: '#c6b9a0', ruin: '#3a3a38', tank: '#b9d4dc', tree: '#6f8a52', rock: '#bdb8ae',
  poiFill: '#ffffff', poiInk: '#1f2224', accent: '#0f7c7a', wallOver: '#1f2224',
};

// cls -> [fill, stroke, strokeWidth, extra]
function styleFor(cls, C) {
  switch (cls) {
    case 'wall': return { fill: C.ink };
    case 'wall-over': return { fill: 'none', stroke: C.ink, sw: 0.35, dash: '1.2 0.8' };
    case 'bastion': return { fill: C.ink };
    case 'tower': return { fill: C.ink };
    case 'building': case 'house': case 'palace': case 'granary': case 'barracks': case 'pavilion': return { fill: C.building, stroke: C.buildingEdge, sw: 0.3 };
    case 'mosque': case 'temple': return { fill: C.temple, stroke: C.buildingEdge, sw: 0.35 };
    case 'temple-plinth': case 'platform': case 'court': return { fill: C.court, stroke: C.inkSoft, sw: 0.18 };
    case 'ruin': return { fill: 'none', stroke: C.ruin, sw: 0.45, dash: '1.6 0.9' };
    case 'tank': return { fill: C.tank, stroke: C.ink, sw: 0.35 };
    case 'tank-water': return { fill: C.water, stroke: C.waterLine, sw: 0.2 };
    case 'bridge': return { fill: C.court, stroke: C.ink, sw: 0.3 };
    case 'rock': return { fill: C.rock, stroke: 'none' };
    case 'well': return { fill: C.water, stroke: C.ink, sw: 0.3 };
    default: return { fill: C.building, stroke: C.buildingEdge, sw: 0.3 };
  }
}

/**
 * renderPlan(world, opts)
 *  opts.mode: 'mini' | 'sheet'
 *  opts.meta: {title, subtitle, place, coords, notes[], sources[], era}
 */
export function renderPlan(world, opts = {}) {
  const mode = opts.mode || 'sheet';
  const C = Object.assign({}, PRINT, opts.colors || {});
  const css = mode === 'mini';
  const T = world.terrain;
  const [bx0, by0, bx1, by1] = opts.crop || world.bounds;
  const W = bx1 - bx0, H = by1 - by0;
  const X = (x) => x - bx0, Y = (y) => by1 - y;
  const P = (p) => `${fmt(X(p[0]))} ${fmt(Y(p[1]))}`;
  const path = (pts, closed) => pts.length ? 'M' + pts.map(P).join('L') + (closed ? 'Z' : '') : '';
  const out = [];
  const st = (s) => (css ? '' : ` fill="${s.fill}"${s.stroke ? ` stroke="${s.stroke}" stroke-width="${s.sw}"` : ''}${s.dash ? ` stroke-dasharray="${s.dash}"` : ''}`);
  const cl = (c) => (css ? ` class="pl-${c}"` : '');

  // margins for sheet
  const margin = mode === 'sheet' ? Math.max(W, H) * 0.06 : 0;
  const titleH = mode === 'sheet' ? Math.max(W, H) * 0.16 : 0;
  const keyW = mode === 'sheet' ? Math.max(W, H) * 0.42 : 0;
  const footH = mode === 'sheet' ? Math.max(W, H) * 0.045 : 0; // room for the scale bar
  const vbW = W + margin * 2 + keyW; let vbH = H + margin * 2 + titleH + footH;
  const ox = margin, oy = margin + titleH;

  // grid helpers (terrain vertex grid -> plan coords)
  const gx = (i) => T.x0 + i * T.stride, gy = (j) => T.y0 + j * T.stride;
  const sea = world.seaLevel;

  out.push(`<g transform="translate(${fmt(ox)} ${fmt(oy)})">`);
  out.push(`<defs><clipPath id="pl-clip"><rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}"/></clipPath>`);
  out.push(`<pattern id="pl-hatch" width="3" height="3" patternUnits="userSpaceOnUse"><path d="M0 1.5H3"${css ? ' class="pl-hatchline"' : ` stroke="${C.hatch}" stroke-width="0.35"`}/></pattern></defs>`);
  out.push(`<g clip-path="url(#pl-clip)">`);
  // background
  if (sea != null) {
    out.push(`<rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}"${css ? ' class="pl-water"' : ` fill="${C.water}"`}/>`);
    out.push(`<rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}" fill="url(#pl-hatch)"/>`);
    // land polygons from sea-level contour, padded so they close
    const nx = T.nx + 2, ny = T.ny + 2, w2 = nx + 1;
    const vals = new Float32Array((nx + 1) * (ny + 1)).fill(sea - 100);
    for (let j = 0; j <= T.ny; j++) for (let i = 0; i <= T.nx; i++) vals[(j + 1) * w2 + (i + 1)] = T.h[j * (T.nx + 1) + i];
    const lines = contours(vals, nx, ny, sea + 0.05, (i) => gx(i - 1), (j) => gy(j - 1));
    const d = lines.map((l) => path(simplify(l.pts, T.stride * 0.3), true)).join('');
    out.push(`<path d="${d}" fill-rule="evenodd"${css ? ' class="pl-land"' : ` fill="${C.paper}" stroke="${C.waterLine}" stroke-width="0.5"`}/>`);
  } else {
    out.push(`<rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}"${css ? ' class="pl-land"' : ` fill="${C.paper}"`}/>`);
  }
  // painted ground: roads / courts
  const paintPoly = (codes, clsName, styleObj) => {
    const nx = T.nx + 2, ny = T.ny + 2, w2 = nx + 1;
    const vals = new Float32Array((nx + 1) * (ny + 1));
    for (let j = 0; j <= T.ny; j++) for (let i = 0; i <= T.nx; i++) vals[(j + 1) * w2 + (i + 1)] = codes.includes(T.paint[j * (T.nx + 1) + i]) ? 1 : 0;
    const lines = contours(vals, nx, ny, 0.5, (i) => gx(i - 1), (j) => gy(j - 1));
    if (!lines.length) return;
    const d = lines.map((l) => path(simplify(l.pts, T.stride * 0.35), true)).join('');
    out.push(`<path d="${d}" fill-rule="evenodd"${css ? ` class="pl-${clsName}"` : st(styleObj)}/>`);
  };
  paintPoly([PAINT.road], 'road', { fill: C.road, stroke: C.roadEdge, sw: 0.25 });
  paintPoly([PAINT.court, PAINT.paved], 'court', { fill: C.court, stroke: 'none' });
  // contours
  if (opts.contours !== false) {
    let lo = Infinity, hi = -Infinity;
    for (let k = 0; k < T.h.length; k++) { const v = T.h[k]; if (v < lo) lo = v; if (v > hi) hi = v; }
    if (sea != null) lo = Math.max(lo, sea);
    const ci = opts.interval || (hi - lo > 80 ? 5 : hi - lo > 30 ? 2.5 : 1.25);
    const parts = [], partsIdx = [];
    let n = 0;
    for (let lev = Math.ceil((lo + 0.01) / ci) * ci; lev < hi; lev += ci, n++) {
      const lines = contours(T.h, T.nx, T.ny, lev, gx, gy);
      const idx = Math.round(lev / ci) % 4 === 0;
      for (const l of lines) {
        const s = simplify(l.pts, T.stride * 0.25);
        if (s.length < 3) continue;
        (idx ? partsIdx : parts).push(path(s, l.closed));
      }
    }
    if (parts.length) out.push(`<path d="${parts.join('')}" fill="none"${css ? ' class="pl-contour"' : ` stroke="${C.contour}" stroke-width="0.22"`}/>`);
    if (partsIdx.length) out.push(`<path d="${partsIdx.join('')}" fill="none"${css ? ' class="pl-contour-idx"' : ` stroke="${C.contourIdx}" stroke-width="0.4"`}/>`);
  }
  // hachures on steep ground
  if (opts.hachures !== false) {
    const hs = [];
    const step = mode === 'mini' ? 3 : 2;
    const w = T.nx + 1;
    for (let j = 1; j < T.ny; j += step) for (let i = 1; i < T.nx; i += step) {
      const h = T.h[j * w + i];
      if (sea != null && h < sea + 0.3) continue;
      const dx = (T.h[j * w + i + 1] - T.h[j * w + i - 1]) / (2 * T.stride);
      const dy = (T.h[(j + 1) * w + i] - T.h[(j - 1) * w + i]) / (2 * T.stride);
      const g = Math.hypot(dx, dy);
      if (g < 0.85) continue;
      const L = T.stride * Math.min(2.2, 0.8 + g * 0.35);
      const x = gx(i), y = gy(j);
      hs.push(`M${fmt(X(x))} ${fmt(Y(y))}L${fmt(X(x - dx / g * L))} ${fmt(Y(y - dy / g * L))}`);
    }
    if (hs.length) out.push(`<path d="${hs.join('')}" fill="none"${css ? ' class="pl-hachure"' : ` stroke="${C.hachure}" stroke-width="0.3" stroke-linecap="round"`}/>`);
  }
  const pl = world.plan;
  // water polygons (tanks drawn via polys), trees, rocks
  if (pl.trees.length && opts.trees !== false) {
    const tr = pl.trees.filter((t) => t.type !== 'grass').map((t) => `M${fmt(X(t.x) - t.r * 0.55)} ${fmt(Y(t.y))}a${fmt(t.r * 0.55)} ${fmt(t.r * 0.55)} 0 1 0 ${fmt(t.r * 1.1)} 0a${fmt(t.r * 0.55)} ${fmt(t.r * 0.55)} 0 1 0 ${fmt(-t.r * 1.1)} 0`).join('');
    out.push(`<path d="${tr}"${css ? ' class="pl-tree"' : ` fill="none" stroke="${C.tree}" stroke-width="0.3"`}/>`);
  }
  // polygons by class (draw order)
  const order = ['court', 'platform', 'temple-plinth', 'bridge', 'tank', 'tank-water', 'building', 'house', 'palace', 'granary', 'barracks', 'pavilion', 'mosque', 'temple', 'ruin', 'tower', 'wall', 'wall-over'];
  const byCls = new Map();
  for (const p of pl.polys) { if (!byCls.has(p.cls)) byCls.set(p.cls, []); byCls.get(p.cls).push(p); }
  const clsList = [...new Set([...order.filter((c) => byCls.has(c)), ...byCls.keys()])];
  for (const c of clsList) {
    const list = byCls.get(c); if (!list) continue;
    const d = list.map((p) => path(p.pts, true)).join('');
    out.push(`<path d="${d}"${cl(c)}${st(styleFor(c, C))}/>`);
  }
  // circles (bastions, rocks, wells, towers)
  const circ = new Map();
  for (const c of pl.circles) { if (!circ.has(c.cls)) circ.set(c.cls, []); circ.get(c.cls).push(c); }
  for (const [c, list] of circ) {
    const d = list.map((q) => {
      if (q.seg && q.seg <= 8) {
        const pts = []; for (let i = 0; i < q.seg; i++) { const a = (q.rot || 0) + (i / q.seg) * Math.PI * 2; pts.push([q.x + Math.cos(a) * q.r, q.y + Math.sin(a) * q.r]); }
        return path(pts, true);
      }
      return `M${fmt(X(q.x) - q.r)} ${fmt(Y(q.y))}a${fmt(q.r)} ${fmt(q.r)} 0 1 0 ${fmt(q.r * 2)} 0a${fmt(q.r)} ${fmt(q.r)} 0 1 0 ${fmt(-q.r * 2)} 0`;
    }).join('');
    out.push(`<path d="${d}"${cl(c)}${st(styleFor(c, C))}/>`);
  }
  // stairs
  if (pl.stairs.length) {
    const d = [];
    for (const s of pl.stairs) {
      const dx = s.x1 - s.x0, dy = s.y1 - s.y0, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
      const n = Math.max(2, Math.min(s.n, Math.round(L / 0.7)));
      for (let k = 0; k <= n; k++) {
        const t = k / n, cx = s.x0 + dx * t, cy = s.y0 + dy * t;
        d.push(`M${fmt(X(cx + nx * s.w / 2))} ${fmt(Y(cy + ny * s.w / 2))}L${fmt(X(cx - nx * s.w / 2))} ${fmt(Y(cy - ny * s.w / 2))}`);
      }
    }
    out.push(`<path d="${d.join('')}" fill="none"${css ? ' class="pl-stairs"' : ` stroke="${C.ink}" stroke-width="0.18"`}/>`);
  }
  // lines (tunnels, paths drawn by levels)
  if (pl.lines.length) {
    const d = pl.lines.map((l) => path(l.pts, false)).join('');
    out.push(`<path d="${d}" fill="none"${css ? ' class="pl-tunnel"' : ` stroke="${C.ink}" stroke-width="0.9" stroke-dasharray="1.6 1.1"`}/>`);
  }
  // cannons
  const marks = pl.marks.filter((m) => m.kind === 'cannon');
  if (marks.length) {
    const d = marks.map((m) => { const a = m.dir * Math.PI / 180, L = m.big ? 3.2 : 2; const ex = m.x + Math.cos(a) * L, ey = m.y + Math.sin(a) * L; return `M${fmt(X(m.x))} ${fmt(Y(m.y))}L${fmt(X(ex))} ${fmt(Y(ey))}`; }).join('');
    out.push(`<path d="${d}" fill="none"${css ? ' class="pl-cannon"' : ` stroke="${C.ink}" stroke-width="${0.9}" stroke-linecap="round"`}/>`);
  }
  out.push('</g>'); // clip
  // frame
  out.push(`<rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}" fill="none"${css ? ' class="pl-frame"' : ` stroke="${C.ink}" stroke-width="0.6"`}/>`);
  // POI numbers
  if (opts.pois !== false) {
    const r = Math.max(W, H) * (mode === 'mini' ? 0.016 : 0.011);
    for (const p of world.pois) {
      out.push(`<g${css ? ` class="pl-poi" data-poi="${p.n}"` : ''} transform="translate(${fmt(X(p.x))} ${fmt(Y(p.y))})"><circle r="${fmt(r)}"${css ? '' : ` fill="${C.poiFill}" stroke="${C.poiInk}" stroke-width="${fmt(r * 0.12)}"`}/>${mode === 'sheet' ? `<text y="${fmt(r * 0.36)}" text-anchor="middle" font-size="${fmt(r * 1.05)}" font-family="Georgia, serif" fill="${C.poiInk}">${p.n}</text>` : ''}</g>`);
    }
  }
  out.push('</g>');

  if (mode === 'sheet') {
    const L2 = { W, H, ox, oy, margin, titleH, keyW, vbW, vbH, C, end: 0 };
    out.push(sheetFurniture(world, opts, L2));
    // long notes: grow the sheet so the right-hand column is never cut off
    vbH = Math.max(vbH, L2.end + margin * 0.6);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fmt(vbW)} ${fmt(vbH)}"${mode === 'sheet' ? ` width="${Math.round(vbW * (opts.pxPerUnit || 2.2))}" height="${Math.round(vbH * (opts.pxPerUnit || 2.2))}"` : ''}>${mode === 'sheet' ? `<rect width="100%" height="100%" fill="${C.paper}"/>` : ''}${out.join('')}</svg>`;
  return svg;
}

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function niceScale(maxMeters) {
  const cands = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000];
  let best = cands[0];
  for (const c of cands) if (c <= maxMeters) best = c;
  return best;
}

function sheetFurniture(world, opts, L) {
  const { W, H, ox, oy, margin, titleH, keyW, vbW, vbH, C } = L;
  const meta = opts.meta || {};
  const u = Math.max(W, H) / 100; // type unit
  const out = [];
  const serif = "'IM Fell English SC', 'IM Fell English', Georgia, 'Times New Roman', serif";
  const sans = "'Instrument Sans', 'Helvetica Neue', Arial, sans-serif";
  // title block
  out.push(`<text x="${fmt(margin)}" y="${fmt(margin + u * 5.2)}" font-family="${serif}" font-size="${fmt(u * 5.2)}" fill="${C.ink}" letter-spacing="${fmt(u * 0.25)}">${esc(meta.title || 'PLAN')}</text>`);
  if (meta.subtitle) out.push(`<text x="${fmt(margin)}" y="${fmt(margin + u * 9.4)}" font-family="${sans}" font-size="${fmt(u * 2.1)}" fill="${C.inkSoft}">${esc(meta.subtitle)}</text>`);
  if (meta.era) out.push(`<text x="${fmt(margin)}" y="${fmt(margin + u * 12.6)}" font-family="${sans}" font-size="${fmt(u * 2.1)}" fill="${C.accent}" letter-spacing="${fmt(u * 0.12)}">${esc(meta.era)}</text>`);
  // north arrow (top right of drawing)
  const nax = ox + W - u * 6, nay = oy + u * 8;
  out.push(`<g transform="translate(${fmt(nax)} ${fmt(nay)})"><path d="M0 ${fmt(-u * 5)}L${fmt(u * 1.6)} ${fmt(u * 2)}L0 ${fmt(u * 0.8)}L${fmt(-u * 1.6)} ${fmt(u * 2)}Z" fill="${C.ink}"/><text y="${fmt(-u * 6)}" text-anchor="middle" font-family="${serif}" font-size="${fmt(u * 2.6)}" fill="${C.ink}">N</text></g>`);
  // scale bar
  const ps = world.def.units?.planScale ?? 1;
  const meters = niceScale(W * ps * 0.3);
  const len = meters / ps;
  const sx = ox, sy = oy + H + margin * 0.55;
  const segs = 4;
  for (let i = 0; i < segs; i++) out.push(`<rect x="${fmt(sx + (len / segs) * i)}" y="${fmt(sy)}" width="${fmt(len / segs)}" height="${fmt(u * 0.9)}" fill="${i % 2 ? C.paper : C.ink}" stroke="${C.ink}" stroke-width="${fmt(u * 0.12)}"/>`);
  out.push(`<text x="${fmt(sx)}" y="${fmt(sy + u * 3)}" font-family="${sans}" font-size="${fmt(u * 1.6)}" fill="${C.inkSoft}">0</text>`);
  out.push(`<text x="${fmt(sx + len)}" y="${fmt(sy + u * 3)}" text-anchor="middle" font-family="${sans}" font-size="${fmt(u * 1.6)}" fill="${C.inkSoft}">${meters} m (approx.)</text>`);
  // key + legend + notes in right column
  const kx = ox + W + margin * 0.8, ky = oy;
  let yy = ky + u * 2;
  out.push(`<text x="${fmt(kx)}" y="${fmt(yy)}" font-family="${serif}" font-size="${fmt(u * 2.6)}" fill="${C.ink}" letter-spacing="${fmt(u * 0.1)}">REFERENCES</text>`);
  yy += u * 3.6;
  for (const p of world.pois) {
    out.push(`<text x="${fmt(kx)}" y="${fmt(yy)}" font-family="${sans}" font-size="${fmt(u * 1.75)}" fill="${C.ink}"><tspan font-weight="600">${p.n}</tspan>  ${esc(p.title)}</text>`);
    yy += u * 2.5;
  }
  yy += u * 2;
  out.push(`<text x="${fmt(kx)}" y="${fmt(yy)}" font-family="${serif}" font-size="${fmt(u * 2.6)}" fill="${C.ink}" letter-spacing="${fmt(u * 0.1)}">LEGEND</text>`);
  yy += u * 3;
  const leg = [
    ['wall', 'Walls and bastions'], ['building', 'Buildings'], ['ruin', 'Ruined walls'], ['temple', 'Temples, mosques'], ['tank', 'Tanks and wells'], ['road', 'Roads and ramps'],
  ];
  for (const [c, label] of leg) {
    const s = c === 'road' ? { fill: C.road, stroke: C.roadEdge, sw: 0.25 } : styleFor(c, C);
    out.push(`<rect x="${fmt(kx)}" y="${fmt(yy - u * 1.4)}" width="${fmt(u * 3)}" height="${fmt(u * 1.6)}" fill="${s.fill === 'none' ? C.paper : s.fill}" stroke="${s.stroke || C.ink}" stroke-width="${fmt(Math.max(0.15, (s.sw || 0.2)))}"${s.dash ? ` stroke-dasharray="${s.dash}"` : ''}/>`);
    out.push(`<text x="${fmt(kx + u * 4)}" y="${fmt(yy)}" font-family="${sans}" font-size="${fmt(u * 1.7)}" fill="${C.ink}">${label}</text>`);
    yy += u * 2.6;
  }
  out.push(`<path d="M${fmt(kx)} ${fmt(yy - u * 0.6)}h${fmt(u * 3)}" stroke="${C.contour}" stroke-width="0.4"/><text x="${fmt(kx + u * 4)}" y="${fmt(yy)}" font-family="${sans}" font-size="${fmt(u * 1.7)}" fill="${C.ink}">Contours (schematic)</text>`);
  yy += u * 4;
  const notes = meta.notes || [];
  for (const n of notes) {
    const words = String(n).split(' ');
    let line = '';
    const maxC = Math.floor(keyW / (u * 0.95));
    for (const w of words) {
      if ((line + ' ' + w).length > maxC) { out.push(`<text x="${fmt(kx)}" y="${fmt(yy)}" font-family="${sans}" font-size="${fmt(u * 1.55)}" fill="${C.inkSoft}">${esc(line.trim())}</text>`); yy += u * 2.2; line = ''; }
      line += ' ' + w;
    }
    if (line.trim()) { out.push(`<text x="${fmt(kx)}" y="${fmt(yy)}" font-family="${sans}" font-size="${fmt(u * 1.55)}" fill="${C.inkSoft}">${esc(line.trim())}</text>`); yy += u * 2.2; }
    yy += u * 1.2;
  }
  L.end = yy;
  return out.join('');
}
