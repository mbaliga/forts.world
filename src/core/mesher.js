// Accumulates flat-shaded, vertex-coloured triangles. Render coords: X east, Y up, Z south (= -north).
import * as THREE from 'three';
import { triangulate, polyArea, TAU, hash2 } from './geom.js';

const _c = new THREE.Color();
export function C(hex) { _c.set(hex); return [_c.r, _c.g, _c.b]; } // linear working space
export function shade(c, k) { return [c[0] * k, c[1] * k, c[2] * k]; }
export function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
export const V = (x, y, h) => [x, h, -y]; // plan -> render

export class Mesher {
  constructor(jitter = 0.07) {
    this.p = new Float32Array(1 << 15); this.c = new Float32Array(1 << 15); this.n = 0; this.jitter = jitter;
  }
  _ensure(k) {
    if (this.n + k <= this.p.length) return;
    let L = this.p.length; while (this.n + k > L) L *= 2;
    const p = new Float32Array(L); p.set(this.p.subarray(0, this.n)); this.p = p;
    const c = new Float32Array(L); c.set(this.c.subarray(0, this.n)); this.c = c;
  }
  get triCount() { return this.n / 9; }

  // a,b,c: [X,Y,Z]; col: [r,g,b] or array of 3 colours (per vertex)
  tri(a, b, c, col) {
    this._ensure(9);
    const P = this.p, Cc = this.c, n = this.n;
    P[n] = a[0]; P[n + 1] = a[1]; P[n + 2] = a[2];
    P[n + 3] = b[0]; P[n + 4] = b[1]; P[n + 5] = b[2];
    P[n + 6] = c[0]; P[n + 7] = c[1]; P[n + 8] = c[2];
    let j = 1;
    if (this.jitter) j = 1 + this.jitter * (hash2(Math.round((a[0] + b[0] + c[0]) * 3.1), Math.round((a[2] + b[2] + c[2]) * 2.7 + (a[1] + b[1] + c[1]) * 5.3)) - 0.5) * 2;
    const per = Array.isArray(col[0]);
    for (let v = 0; v < 3; v++) {
      const cc = per ? col[v] : col;
      Cc[n + v * 3] = cc[0] * j; Cc[n + v * 3 + 1] = cc[1] * j; Cc[n + v * 3 + 2] = cc[2] * j;
    }
    this.n += 9;
  }
  // quad a-b-c-d (CCW seen from the front). col may be [c] or 4 per-vertex colours.
  quad(a, b, c, d, col) {
    if (Array.isArray(col[0])) { this.tri(a, b, c, [col[0], col[1], col[2]]); this.tri(a, c, d, [col[0], col[2], col[3]]); }
    else { this.tri(a, b, c, col); this.tri(a, c, d, col); }
  }
  // quad, but orient so the normal points away from `inside` (render coords)
  quadAway(a, b, c, d, col, inside) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const dx = a[0] - inside[0], dy = a[1] - inside[1], dz = a[2] - inside[2];
    if (nx * dx + ny * dy + nz * dz < 0) {
      if (Array.isArray(col[0])) this.quad(d, c, b, a, [col[3], col[2], col[1], col[0]]); else this.quad(d, c, b, a, col);
    } else this.quad(a, b, c, d, col);
  }
  // convex/concave plan polygon cap at height h (plan coords), facing up (or down)
  cap(poly, h, col, down = false) {
    const ccw = polyArea(poly) > 0;
    const pts = ccw ? poly : poly.slice().reverse();
    const tris = triangulate(pts);
    for (const [i, j, k] of tris) {
      const a = V(pts[i][0], pts[i][1], h), b = V(pts[j][0], pts[j][1], h), c = V(pts[k][0], pts[k][1], h);
      if (down) this.tri(a, c, b, col); else this.tri(a, b, c, col);
    }
  }
  // cap with per-vertex heights fn(x,y)
  capFn(poly, hf, col) {
    const ccw = polyArea(poly) > 0;
    const pts = ccw ? poly : poly.slice().reverse();
    for (const [i, j, k] of triangulate(pts)) {
      this.tri(V(pts[i][0], pts[i][1], hf(pts[i][0], pts[i][1])), V(pts[j][0], pts[j][1], hf(pts[j][0], pts[j][1])), V(pts[k][0], pts[k][1], hf(pts[k][0], pts[k][1])), col);
    }
  }
  // vertical extrusion of a plan polygon from h0 to h1 (numbers or fn(x,y))
  prism(poly, h0, h1, col, { top = true, bottom = false, colTop = null, sides = true, shadeBase = 0.82 } = {}) {
    const ccw = polyArea(poly) > 0;
    const pts = ccw ? poly : poly.slice().reverse();
    const f0 = typeof h0 === 'function' ? h0 : () => h0;
    const f1 = typeof h1 === 'function' ? h1 : () => h1;
    const cb = shade(col, shadeBase);
    if (sides) for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[(i + 1) % pts.length];
      this.quad(V(p[0], p[1], f0(p[0], p[1])), V(q[0], q[1], f0(q[0], q[1])), V(q[0], q[1], f1(q[0], q[1])), V(p[0], p[1], f1(p[0], p[1])), [cb, cb, col, col]);
    }
    if (top) { if (typeof h1 === 'function') this.capFn(pts, f1, colTop || col); else this.cap(pts, h1, colTop || col); }
    if (bottom) this.cap(pts, typeof h0 === 'function' ? f0(pts[0][0], pts[0][1]) : h0, col, true);
  }
  // axis-aligned-in-plan box (rotated about vertical by rotDeg)
  box(x, y, w, d, h0, h1, rotDeg, col, opts) {
    const r = (rotDeg || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
    const pts = [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]].map(([u, v]) => [x + u * c - v * s, y + u * s + v * c]);
    this.prism(pts, h0, h1, col, opts);
  }
  // frustum (n-gon) centred at plan (x,y)
  frustum(x, y, r0, r1, h0, h1, seg, col, { top = true, bottom = false, rot = 0, colTop = null, shadeBase = 0.85 } = {}) {
    const cb = shade(col, shadeBase);
    const P0 = [], P1 = [];
    for (let i = 0; i < seg; i++) {
      const a = rot + (i / seg) * TAU;
      P0.push([x + Math.cos(a) * r0, y + Math.sin(a) * r0]);
      P1.push([x + Math.cos(a) * r1, y + Math.sin(a) * r1]);
    }
    for (let i = 0; i < seg; i++) {
      const j = (i + 1) % seg;
      this.quad(V(P0[i][0], P0[i][1], h0), V(P0[j][0], P0[j][1], h0), V(P1[j][0], P1[j][1], h1), V(P1[i][0], P1[i][1], h1), [cb, cb, col, col]);
    }
    if (top && r1 > 0.001) this.cap(P1, h1, colTop || col);
    if (bottom) this.cap(P0, h0, col, true);
  }
  // surface of revolution: profile [[r,h],...] bottom->top
  lathe(x, y, profile, seg, col, { rot = 0, colTop = null } = {}) {
    for (let k = 0; k < profile.length - 1; k++) {
      const [ra, ha] = profile[k], [rb, hb] = profile[k + 1];
      const cc = colTop && k >= profile.length - 3 ? colTop : col;
      for (let i = 0; i < seg; i++) {
        const a0 = rot + (i / seg) * TAU, a1 = rot + ((i + 1) / seg) * TAU;
        const p00 = V(x + Math.cos(a0) * ra, y + Math.sin(a0) * ra, ha), p10 = V(x + Math.cos(a1) * ra, y + Math.sin(a1) * ra, ha);
        const p01 = V(x + Math.cos(a0) * rb, y + Math.sin(a0) * rb, hb), p11 = V(x + Math.cos(a1) * rb, y + Math.sin(a1) * rb, hb);
        if (rb < 1e-4) this.tri(p00, p10, p01, cc);
        else if (ra < 1e-4) this.tri(p00, p11, p01, cc);
        else this.quad(p00, p10, p11, p01, cc);
      }
    }
  }
  // rectangular pyramid / hipped roof: base rect (rotated) at h0, apex ridge at h1 (ridge length = rl along local x)
  hip(x, y, w, d, h0, h1, rotDeg, col, rl = 0) {
    const r = (rotDeg || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
    const T = (u, v, h) => V(x + u * c - v * s, y + u * s + v * c, h);
    const a = T(-w / 2, -d / 2, h0), b = T(w / 2, -d / 2, h0), cc = T(w / 2, d / 2, h0), dd = T(-w / 2, d / 2, h0);
    const r0 = T(-rl / 2, 0, h1), r1 = T(rl / 2, 0, h1);
    const ctr = V(x, y, h0 - 1);
    if (rl > 0.01) {
      this.quadAway(a, b, r1, r0, col, ctr);
      this.quadAway(cc, dd, r0, r1, col, ctr);
      this.triAway(b, cc, r1, col, ctr);
      this.triAway(dd, a, r0, col, ctr);
    } else {
      this.triAway(a, b, r0, col, ctr); this.triAway(b, cc, r0, col, ctr); this.triAway(cc, dd, r0, col, ctr); this.triAway(dd, a, r0, col, ctr);
    }
  }
  triAway(a, b, c, col, inside) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const dx = a[0] - inside[0], dy = a[1] - inside[1], dz = a[2] - inside[2];
    if (nx * dx + ny * dy + nz * dz < 0) this.tri(a, c, b, col); else this.tri(a, b, c, col);
  }
  // barrel vault along local x: half-cylinder of radius d/2 over a w x d rect, springing at h0
  vault(x, y, w, d, h0, rotDeg, col, seg = 8, rise = null) {
    const r = (rotDeg || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
    const T = (u, v, h) => V(x + u * c - v * s, y + u * s + v * c, h);
    const R = d / 2, ry = rise ?? R;
    const ctr = V(x, y, h0 - 0.5);
    let prev = null;
    for (let i = 0; i <= seg; i++) {
      const a = Math.PI * (i / seg);
      const v = -Math.cos(a) * R, h = h0 + Math.sin(a) * ry;
      const cur = [T(-w / 2, v, h), T(w / 2, v, h)];
      if (prev) this.quadAway(prev[0], prev[1], cur[1], cur[0], col, ctr);
      prev = cur;
    }
    // gable ends
    for (const u of [-w / 2, w / 2]) {
      for (let i = 0; i < seg; i++) {
        const a0 = Math.PI * (i / seg), a1 = Math.PI * ((i + 1) / seg);
        const p0 = T(u, -Math.cos(a0) * R, h0 + Math.sin(a0) * ry), p1 = T(u, -Math.cos(a1) * R, h0 + Math.sin(a1) * ry);
        this.triAway(T(u, 0, h0), p0, p1, col, V(x - (u > 0 ? 1 : -1) * c * 2, y - (u > 0 ? 1 : -1) * s * 2, h0 + 0.2));
      }
    }
  }
  // merge a THREE geometry (indexed or not) with a matrix and a colour
  geometry(geo, matrix, col) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const pos = g.attributes.position;
    const v = new THREE.Vector3();
    const pts = [];
    for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i); if (matrix) v.applyMatrix4(matrix); pts.push([v.x, v.y, v.z]); }
    for (let i = 0; i < pts.length; i += 3) this.tri(pts[i], pts[i + 1], pts[i + 2], typeof col === 'function' ? col(pts[i]) : col);
    if (g !== geo) g.dispose();
  }

  toGeometry() {
    const n = this.n;
    const pos = this.p.slice(0, n), col = this.c.slice(0, n);
    const nor = new Float32Array(n);
    for (let i = 0; i < n; i += 9) {
      const ax = pos[i], ay = pos[i + 1], az = pos[i + 2];
      const ux = pos[i + 3] - ax, uy = pos[i + 4] - ay, uz = pos[i + 5] - az;
      const vx = pos[i + 6] - ax, vy = pos[i + 7] - ay, vz = pos[i + 8] - az;
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
      for (let k = 0; k < 9; k += 3) { nor[i + k] = nx; nor[i + k + 1] = ny; nor[i + k + 2] = nz; }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

// Crease-angle smoothing for a non-indexed geometry: vertices that share a position average the normals of the
// faces around them that lie within `creaseDeg` of their own face, so organic shapes shade softly while hard edges stay hard.
export function smoothGeometry(g, creaseDeg = 60) {
  const pos = g.attributes.position, n = pos.count;
  let nor = g.attributes.normal;
  if (!nor) { g.computeVertexNormals(); nor = g.attributes.normal; }
  const face = new Float32Array(n * 3);
  for (let i = 0; i < n; i += 3) {
    const ax = pos.getX(i), ay = pos.getY(i), az = pos.getZ(i);
    const ux = pos.getX(i + 1) - ax, uy = pos.getY(i + 1) - ay, uz = pos.getZ(i + 1) - az;
    const vx = pos.getX(i + 2) - ax, vy = pos.getY(i + 2) - ay, vz = pos.getZ(i + 2) - az;
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const a = Math.hypot(nx, ny, nz) || 1;
    // area-weighted: keep the raw cross product for weighting, store unit for the crease test
    for (let k = 0; k < 3; k++) { face[(i + k) * 3] = nx; face[(i + k) * 3 + 1] = ny; face[(i + k) * 3 + 2] = nz; }
    void a;
  }
  const key = (i) => `${Math.round(pos.getX(i) * 1000)},${Math.round(pos.getY(i) * 1000)},${Math.round(pos.getZ(i) * 1000)}`;
  const buckets = new Map();
  for (let i = 0; i < n; i++) { const k = key(i); let b = buckets.get(k); if (!b) { b = []; buckets.set(k, b); } b.push(i); }
  const cosT = Math.cos(creaseDeg * Math.PI / 180);
  const out = new Float32Array(n * 3);
  for (const b of buckets.values()) {
    for (const i of b) {
      const fx = face[i * 3], fy = face[i * 3 + 1], fz = face[i * 3 + 2], fl = Math.hypot(fx, fy, fz) || 1;
      let sx = 0, sy = 0, sz = 0;
      for (const j of b) {
        const gx = face[j * 3], gy = face[j * 3 + 1], gz = face[j * 3 + 2], gl = Math.hypot(gx, gy, gz) || 1;
        if ((fx * gx + fy * gy + fz * gz) / (fl * gl) >= cosT) { sx += gx; sy += gy; sz += gz; }
      }
      const l = Math.hypot(sx, sy, sz) || 1;
      out[i * 3] = sx / l; out[i * 3 + 1] = sy / l; out[i * 3 + 2] = sz / l;
    }
  }
  g.setAttribute('normal', new THREE.BufferAttribute(out, 3));
  return g;
}
