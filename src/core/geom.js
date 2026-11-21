// 2D plan geometry + small math helpers. Plan coordinates: x = east, y = north (units).

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
export const TAU = Math.PI * 2;
export const DEG = Math.PI / 180;

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash2(x, y) {
  let h = (Math.imul((x * 73856093) | 0, 1) ^ Math.imul((y * 19349663) | 0, 1)) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// Value noise, smooth, in [-1, 1]
export function makeNoise(seed = 1) {
  const r = rng(seed);
  const N = 256;
  const perm = new Uint16Array(N * 2);
  const vals = new Float32Array(N);
  for (let i = 0; i < N; i++) { perm[i] = i; vals[i] = r() * 2 - 1; }
  for (let i = N - 1; i > 0; i--) { const j = (r() * (i + 1)) | 0; const t = perm[i]; perm[i] = perm[j]; perm[j] = t; }
  for (let i = 0; i < N; i++) perm[N + i] = perm[i];
  const v = (ix, iy) => vals[perm[(perm[ix & 255] + iy) & 255]];
  return (x, y) => {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = v(ix, iy), b = v(ix + 1, iy), c = v(ix, iy + 1), d = v(ix + 1, iy + 1);
    return lerp(lerp(a, b, sx), lerp(c, d, sx), sy);
  };
}

export function fbm(noise, x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) { s += a * noise(x * f, y * f); n += a; a *= 0.5; f *= 2.03; }
  return s / n;
}

// ---------- polygons / polylines ----------

export function polyArea(p) {
  let a = 0;
  for (let i = 0, n = p.length; i < n; i++) {
    const [x0, y0] = p[i], [x1, y1] = p[(i + 1) % n];
    a += x0 * y1 - x1 * y0;
  }
  return a / 2;
}

export function pointInPoly(x, y, p) {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const xi = p[i][0], yi = p[i][1], xj = p[j][0], yj = p[j][1];
    if (((yi > y) !== (yj > y)) && x < ((xj - xi) * (y - yi)) / (yj - yi + 1e-12) + xi) inside = !inside;
  }
  return inside;
}

export function distToSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const l2 = dx * dx + dy * dy;
  let t = l2 > 0 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
  t = clamp(t, 0, 1);
  const qx = ax + dx * t, qy = ay + dy * t;
  return { d: Math.hypot(px - qx, py - qy), t };
}

// distance to polyline, returning arc-length s of nearest point
export function distToPolyline(px, py, pts, closed = false) {
  let best = Infinity, bs = 0, bseg = 0, bt = 0, acc = 0;
  const n = pts.length, m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const r = distToSeg(px, py, a[0], a[1], b[0], b[1]);
    if (r.d < best) { best = r.d; bs = acc + r.t * len; bseg = i; bt = r.t; }
    acc += len;
  }
  return { d: best, s: bs, seg: bseg, t: bt };
}

export function signedDistPoly(x, y, poly) {
  let d = Infinity;
  for (let i = 0, n = poly.length; i < n; i++) {
    const a = poly[i], b = poly[(i + 1) % n];
    const r = distToSeg(x, y, a[0], a[1], b[0], b[1]);
    if (r.d < d) d = r.d;
  }
  return pointInPoly(x, y, poly) ? -d : d;
}

export function polylineLength(pts, closed = false) {
  let L = 0;
  const n = pts.length, m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) { const a = pts[i], b = pts[(i + 1) % n]; L += Math.hypot(b[0] - a[0], b[1] - a[1]); }
  return L;
}

// point + tangent at arc-length s
export function pointAt(pts, s, closed = false) {
  const n = pts.length, m = closed ? n : n - 1;
  const L = polylineLength(pts, closed);
  if (closed) { s = ((s % L) + L) % L; } else s = clamp(s, 0, L);
  let acc = 0;
  for (let i = 0; i < m; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (acc + len >= s || i === m - 1) {
      const t = len > 0 ? clamp((s - acc) / len, 0, 1) : 0;
      const tx = len > 0 ? (b[0] - a[0]) / len : 1, ty = len > 0 ? (b[1] - a[1]) / len : 0;
      return { x: a[0] + (b[0] - a[0]) * t, y: a[1] + (b[1] - a[1]) * t, tx, ty, seg: i };
    }
    acc += len;
  }
  const p = pts[n - 1];
  return { x: p[0], y: p[1], tx: 1, ty: 0, seg: m - 1 };
}

// subdivide so no segment is longer than maxSeg (keeps original vertices)
export function resample(pts, closed, maxSeg) {
  const out = [];
  const n = pts.length, m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const k = Math.max(1, Math.ceil(len / maxSeg));
    for (let j = 0; j < k; j++) {
      const t = j / k;
      const q = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
      for (let e = 2; e < a.length; e++) q[e] = a[e] + ((b[e] ?? a[e]) - a[e]) * t; // carry extra dims
      out.push(q);
    }
  }
  if (!closed) out.push(pts[n - 1].slice());
  return out;
}

// offset polyline by dist (positive = left of travel direction), miter joins clamped
export function offsetPolyline(pts, closed, dist, miterLimit = 3) {
  const n = pts.length;
  const out = [];
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    let prev = closed ? pts[(i - 1 + n) % n] : pts[i - 1];
    let next = closed ? pts[(i + 1) % n] : pts[i + 1];
    let n0 = null, n1 = null;
    if (prev) { const dx = p[0] - prev[0], dy = p[1] - prev[1], l = Math.hypot(dx, dy) || 1; n0 = [-dy / l, dx / l]; }
    if (next) { const dx = next[0] - p[0], dy = next[1] - p[1], l = Math.hypot(dx, dy) || 1; n1 = [-dy / l, dx / l]; }
    if (!n0) n0 = n1; if (!n1) n1 = n0;
    let mx = n0[0] + n1[0], my = n0[1] + n1[1];
    const ml = Math.hypot(mx, my);
    if (ml < 1e-6) { mx = n1[0]; my = n1[1]; } else { mx /= ml; my /= ml; }
    const cos = mx * n1[0] + my * n1[1];
    let k = dist / Math.max(cos, 1 / miterLimit);
    out.push([p[0] + mx * k, p[1] + my * k]);
  }
  return out;
}

export function bbox(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const p of pts) { if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0]; if (p[1] < y0) y0 = p[1]; if (p[1] > y1) y1 = p[1]; }
  return { x0, y0, x1, y1 };
}

// shapes (CCW)
export function rectPts(cx, cy, w, d, rotDeg = 0) {
  const r = rotDeg * DEG, c = Math.cos(r), s = Math.sin(r);
  const hw = w / 2, hd = d / 2;
  return [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([x, y]) => [cx + x * c - y * s, cy + x * s + y * c]);
}

export function regularPoly(cx, cy, r, n, rotDeg = 0) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = rotDeg * DEG + (i / n) * TAU;
    out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return out;
}

export function ellipsePts(cx, cy, rx, ry, n = 48, rotDeg = 0, wobble = 0, seed = 7) {
  const r = rotDeg * DEG, c = Math.cos(r), s = Math.sin(r);
  const nz = makeNoise(seed);
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU;
    const k = 1 + wobble * nz(Math.cos(a) * 1.7 + 3, Math.sin(a) * 1.7 + 3);
    const x = Math.cos(a) * rx * k, y = Math.sin(a) * ry * k;
    out.push([cx + x * c - y * s, cy + x * s + y * c]);
  }
  return out;
}

// Catmull-Rom smoothing of a closed/open polyline
export function smoothPath(pts, closed, segPer = 4) {
  const n = pts.length, out = [];
  const get = (i) => closed ? pts[(i + n) % n] : pts[clamp(i, 0, n - 1)];
  const m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    for (let j = 0; j < segPer; j++) {
      const t = j / segPer, t2 = t * t, t3 = t2 * t;
      const q = [];
      for (let e = 0; e < p1.length; e++) {
        q[e] = 0.5 * ((2 * p1[e]) + (-p0[e] + p2[e]) * t + (2 * p0[e] - 5 * p1[e] + 4 * p2[e] - p3[e]) * t2 + (-p0[e] + 3 * p1[e] - 3 * p2[e] + p3[e]) * t3);
      }
      out.push(q);
    }
  }
  if (!closed) out.push(pts[n - 1].slice());
  return out;
}

export function centroid(p) {
  let x = 0, y = 0;
  for (const q of p) { x += q[0]; y += q[1]; }
  return [x / p.length, y / p.length];
}

// rotate point around origin
export function rot2(x, y, deg) {
  const r = deg * DEG, c = Math.cos(r), s = Math.sin(r);
  return [x * c - y * s, x * s + y * c];
}

// simple polygon triangulation (ear clipping) for convex/concave simple polygons
export function triangulate(poly) {
  const n = poly.length;
  if (n < 3) return [];
  const idx = [];
  const ccw = polyArea(poly) > 0;
  for (let i = 0; i < n; i++) idx.push(ccw ? i : n - 1 - i);
  const tris = [];
  const isEar = (i0, i1, i2) => {
    const a = poly[i0], b = poly[i1], c = poly[i2];
    const cross = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    if (cross <= 1e-9) return false;
    for (const k of idx) {
      if (k === i0 || k === i1 || k === i2) continue;
      const p = poly[k];
      if (ptInTri(p, a, b, c)) return false;
    }
    return true;
  };
  let guard = 0;
  while (idx.length > 3 && guard++ < 10000) {
    let found = false;
    for (let i = 0; i < idx.length; i++) {
      const i0 = idx[(i - 1 + idx.length) % idx.length], i1 = idx[i], i2 = idx[(i + 1) % idx.length];
      if (isEar(i0, i1, i2)) { tris.push([i0, i1, i2]); idx.splice(i, 1); found = true; break; }
    }
    if (!found) break;
  }
  if (idx.length === 3) tris.push([idx[0], idx[1], idx[2]]);
  return tris;
}

function ptInTri(p, a, b, c) {
  const d1 = (p[0] - b[0]) * (a[1] - b[1]) - (a[0] - b[0]) * (p[1] - b[1]);
  const d2 = (p[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (p[1] - c[1]);
  const d3 = (p[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (p[1] - a[1]);
  const neg = d1 < 0 || d2 < 0 || d3 < 0, pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(neg && pos);
}
