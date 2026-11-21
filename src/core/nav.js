// Multi-layer navigation grid (2.5D): each 1-unit cell can hold several walkable heights
// (e.g. moat bed, courtyard, rampart walk, bastion top). A* + string pulling on top.
import { pointInPoly, bbox, clamp } from './geom.js';

export const TAG = {
  ground: 0, rampart: 1, bastion: 2, gate: 3, stairs: 4, court: 5, citadel: 6, summit: 7,
  tunnel: 8, bridge: 9, terrace: 10, landing: 11, roof: 12, boat: 13, shore: 14, road: 15, temple: 16, palace: 17,
};
export const TAG_NAMES = Object.fromEntries(Object.entries(TAG).map(([k, v]) => [v, k]));

const BLOCKED = 1, TUNNEL = 2, STRUCT = 4;

class Heap {
  constructor(cap = 4096) { this.n = new Int32Array(cap); this.k = new Float32Array(cap); this.size = 0; }
  push(node, key) {
    if (this.size >= this.n.length) {
      const n2 = new Int32Array(this.n.length * 2); n2.set(this.n); this.n = n2;
      const k2 = new Float32Array(this.k.length * 2); k2.set(this.k); this.k = k2;
    }
    let i = this.size++;
    const N = this.n, K = this.k;
    while (i > 0) { const p = (i - 1) >> 1; if (K[p] <= key) break; N[i] = N[p]; K[i] = K[p]; i = p; }
    N[i] = node; K[i] = key;
  }
  pop() {
    const N = this.n, K = this.k;
    const top = N[0];
    const last = --this.size;
    if (last > 0) {
      const ln = N[last], lk = K[last];
      let i = 0;
      for (;;) {
        let l = 2 * i + 1; if (l >= last) break;
        const r = l + 1; if (r < last && K[r] < K[l]) l = r;
        if (K[l] >= lk) break;
        N[i] = N[l]; K[i] = K[l]; i = l;
      }
      N[i] = ln; K[i] = lk;
    }
    return top;
  }
}

export class Nav {
  constructor(bounds, { cell = 1, L = 4, cap = 6, step = 0.62, headroom = 1.9 } = {}) {
    const [x0, y0, x1, y1] = bounds;
    this.x0 = x0; this.y0 = y0; this.cell = cell;
    this.W = Math.ceil((x1 - x0) / cell); this.D = Math.ceil((y1 - y0) / cell);
    this.L = L; this.cap = cap; this.step = step; this.headroom = headroom;
    const C = this.W * this.D;
    this.H = new Float32Array(C * L).fill(NaN);
    this.T = new Uint8Array(C * L);
    this.E = new Uint8Array(C * L); // edge flag (near a drop/obstacle)
    this.surfaces = []; this.obstacles = [];
    this.stamp = new Uint32Array(C * L); this.sid = 0;
    this.g = new Float32Array(C * L); this.par = new Int32Array(C * L); this.cl = new Uint32Array(C * L);
    this.waterFn = null;
  }
  cx(ix) { return this.x0 + (ix + 0.5) * this.cell; }
  cy(iy) { return this.y0 + (iy + 0.5) * this.cell; }
  cellOf(x, y) {
    const ix = Math.floor((x - this.x0) / this.cell), iy = Math.floor((y - this.y0) / this.cell);
    if (ix < 0 || iy < 0 || ix >= this.W || iy >= this.D) return -1;
    return iy * this.W + ix;
  }

  // ---- authoring (buffered, resolved in bake) ----
  surface(s) { this.surfaces.push(s); }   // {poly|circle, h:number|fn, tag, tunnel?}
  obstacle(o) { this.obstacles.push(o); } // {poly|circle, bottom:number|fn, top:number|fn}

  _cells(shape, fn) {
    const c = this.cell;
    let b;
    if (shape.circle) { const [x, y, r] = shape.circle; b = { x0: x - r, y0: y - r, x1: x + r, y1: y + r }; }
    else b = shape._bb || (shape._bb = bbox(shape.poly));
    const i0 = clamp(Math.floor((b.x0 - this.x0) / c), 0, this.W - 1), i1 = clamp(Math.ceil((b.x1 - this.x0) / c), 0, this.W - 1);
    const j0 = clamp(Math.floor((b.y0 - this.y0) / c), 0, this.D - 1), j1 = clamp(Math.ceil((b.y1 - this.y0) / c), 0, this.D - 1);
    for (let j = j0; j <= j1; j++) {
      const y = this.cy(j);
      for (let i = i0; i <= i1; i++) {
        const x = this.cx(i);
        let inside;
        if (shape.circle) { const [ox, oy, r] = shape.circle; const dx = x - ox, dy = y - oy; inside = dx * dx + dy * dy <= r * r; if (inside && shape.ring) inside = dx * dx + dy * dy >= shape.ring * shape.ring; }
        else inside = pointInPoly(x, y, shape.poly);
        if (inside) fn(j * this.W + i, x, y);
      }
    }
  }

  bake(terrain, waterLevelAt) {
    const C = this.W * this.D, cap = this.cap;
    const cH = new Float32Array(C * cap), cT = new Uint8Array(C * cap), cF = new Uint8Array(C * cap), cN = new Uint8Array(C);
    const terr = new Float32Array(C);
    const top = new Float32Array(C);
    const add = (c, h, tag, flags) => { if (h > top[c]) top[c] = h; const n = cN[c]; if (n >= cap) return; const k = c * cap + n; cH[k] = h; cT[k] = tag; cF[k] = flags; cN[c] = n + 1; };
    // terrain
    for (let j = 0; j < this.D; j++) for (let i = 0; i < this.W; i++) {
      const x = this.cx(i), y = this.cy(j), c = j * this.W + i;
      const h = terrain.heightAt(x, y); terr[c] = h;
      const wl = waterLevelAt ? waterLevelAt(x, y) : -Infinity;
      top[c] = Math.max(h, wl);
      if (h >= wl - 0.12) add(c, h, TAG.ground, 0);
    }
    // structure surfaces
    for (const s of this.surfaces) {
      const hf = typeof s.h === 'function' ? s.h : (() => s.h);
      const fl = STRUCT | (s.tunnel ? TUNNEL : 0);
      this._cells(s, (c, x, y) => add(c, hf(x, y), s.tag ?? TAG.terrace, fl));
    }
    // obstacles block intersecting candidates
    const hr = this.headroom;
    for (const o of this.obstacles) {
      const bf = typeof o.bottom === 'function' ? o.bottom : (() => o.bottom);
      const tf = typeof o.top === 'function' ? o.top : (() => o.top);
      this._cells(o, (c, x, y) => {
        const b = bf(x, y), t = tf(x, y);
        if (t > top[c] && t < 1e4) top[c] = t;
        for (let n = 0; n < cN[c]; n++) {
          const k = c * cap + n, h = cH[k];
          if (b < h + hr && t > h + 0.06) cF[k] |= BLOCKED;
        }
      });
    }
    // resolve
    const L = this.L, H = this.H, T = this.T;
    const tmp = [];
    for (let c = 0; c < C; c++) {
      tmp.length = 0;
      for (let n = 0; n < cN[c]; n++) {
        const k = c * cap + n;
        if (cF[k] & BLOCKED) continue;
        if (cH[k] < terr[c] - 0.45 && !(cF[k] & TUNNEL)) continue; // buried in rock
        tmp.push([cH[k], cT[k], cF[k]]);
      }
      if (!tmp.length) continue;
      tmp.sort((a, b) => a[0] - b[0]);
      const merged = [];
      for (const e of tmp) {
        const last = merged[merged.length - 1];
        if (last && e[0] - last[0] < 0.32) {
          // prefer structure tags over terrain
          if ((e[2] & STRUCT) || !(last[2] & STRUCT)) { last[1] = e[1]; last[2] |= e[2]; }
          last[0] = Math.max(last[0], e[0]);
        } else merged.push(e.slice());
      }
      // ceilings
      const keep = [];
      for (let q = 0; q < merged.length; q++) {
        const nx = merged[q + 1];
        if (nx && nx[0] - merged[q][0] < hr) continue;
        keep.push(merged[q]);
      }
      const start = Math.max(0, keep.length - L);
      for (let q = start, l = 0; q < keep.length; q++, l++) { H[c * L + l] = keep[q][0]; T[c * L + l] = keep[q][1]; }
    }
    // edge flags: node lacks a same-level neighbour in any 4-direction
    const W = this.W, D = this.D;
    for (let j = 0; j < D; j++) for (let i = 0; i < W; i++) {
      const c = j * W + i;
      for (let l = 0; l < L; l++) {
        const h = H[c * L + l]; if (h !== h) continue;
        let edge = 0;
        if (i === 0 || i === W - 1 || j === 0 || j === D - 1) edge = 1;
        else {
          if (this.layerNear(c - 1, h, this.step) < 0) edge = 1;
          else if (this.layerNear(c + 1, h, this.step) < 0) edge = 1;
          else if (this.layerNear(c - W, h, this.step) < 0) edge = 1;
          else if (this.layerNear(c + W, h, this.step) < 0) edge = 1;
        }
        this.E[c * L + l] = edge;
      }
    }
    this.terr = terr;
    this.top = top;
    let mx = -Infinity, mn = Infinity; for (let c = 0; c < C; c++) { if (top[c] > mx) mx = top[c]; if (terr[c] < mn) mn = terr[c]; }
    this.maxTop = mx; this.minH = mn;
    this.surfaces = null; this.obstacles = null; // free
  }

  layerNear(c, h, tol) {
    if (c < 0) return -1;
    const L = this.L, H = this.H;
    let best = -1, bd = tol;
    for (let l = 0; l < L; l++) {
      const v = H[c * L + l]; if (v !== v) continue;
      const d = Math.abs(v - h);
      if (d <= bd) { bd = d; best = l; }
    }
    return best;
  }

  nodeH(node) { return this.H[node]; }
  nodeXY(node) { const c = (node / this.L) | 0; return [this.cx(c % this.W), this.cy((c / this.W) | 0)]; }
  tagOf(node) { return this.T[node]; }

  nearest(x, y, h, maxR = 10, htol = 3) {
    const ix0 = Math.floor((x - this.x0) / this.cell), iy0 = Math.floor((y - this.y0) / this.cell);
    let best = -1, bs = Infinity;
    for (let r = 0; r <= maxR; r++) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const ix = ix0 + dx, iy = iy0 + dy;
        if (ix < 0 || iy < 0 || ix >= this.W || iy >= this.D) continue;
        const c = iy * this.W + ix;
        for (let l = 0; l < this.L; l++) {
          const v = this.H[c * this.L + l]; if (v !== v) continue;
          const dh = Math.abs(v - h);
          if (dh > htol) continue;
          const sc = Math.hypot(this.cx(ix) - x, this.cy(iy) - y) + dh * 1.5 + this.E[c * this.L + l] * 0.3;
          if (sc < bs) { bs = sc; best = c * this.L + l; }
        }
      }
      if (best >= 0 && r > bs + 1) break;
    }
    return best;
  }

  // A* from node to node; returns array of nodes or null
  astar(sn, gn, maxIter = 600000) {
    if (sn < 0 || gn < 0) return null;
    const L = this.L, W = this.W, D = this.D, H = this.H;
    const sid = ++this.sid;
    const stamp = this.stamp, g = this.g, par = this.par;
    const heap = new Heap();
    const [gx, gy] = this.nodeXY(gn);
    const gh = H[gn];
    stamp[sn] = sid; g[sn] = 0; par[sn] = -1;
    heap.push(sn, 0);
    const cl = this.cl;
    const step = this.step, dstep = step * 1.45;
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    let it = 0;
    while (heap.size && it++ < maxIter) {
      const cur = heap.pop();
      if (cur === gn) {
        const out = []; let n = cur;
        while (n >= 0) { out.push(n); n = par[n]; }
        return out.reverse();
      }
      if (cl[cur] === sid) continue;
      cl[cur] = sid;
      const c = (cur / L) | 0, ix = c % W, iy = (c / W) | 0, h = H[cur];
      for (let d = 0; d < 8; d++) {
        const dx = DIRS[d][0], dy = DIRS[d][1];
        const jx = ix + dx, jy = iy + dy;
        if (jx < 0 || jy < 0 || jx >= W || jy >= D) continue;
        const nc = jy * W + jx;
        const diag = dx !== 0 && dy !== 0;
        const l2 = this.layerNear(nc, h, diag ? dstep : step);
        if (l2 < 0) continue;
        const nn = nc * L + l2, nh = H[nn];
        if (diag) {
          if (this.layerNear(c + dx, h, step) < 0 || this.layerNear(c + dy * W, h, step) < 0) continue;
          if (this.layerNear(c + dx, nh, step) < 0 || this.layerNear(c + dy * W, nh, step) < 0) continue;
        }
        const cost = (diag ? 1.4142 : 1) + Math.abs(nh - h) * 0.6 + this.E[nn] * 0.45;
        const ng = g[cur] + cost;
        if (stamp[nn] === sid && ng >= g[nn]) continue;
        stamp[nn] = sid; g[nn] = ng; par[nn] = cur;
        const [nx, ny] = [this.cx(jx), this.cy(jy)];
        const hh = Math.hypot(nx - gx, ny - gy) + Math.abs(nh - gh) * 0.3;
        heap.push(nn, ng + hh);
      }
    }
    return null;
  }

  // surface height near (x,y) on the layer closest to hRef (bilinear over cell centres)
  heightAt(x, y, hRef, tol = 1.1) {
    const c = this.cell;
    const u = (x - this.x0) / c - 0.5, v = (y - this.y0) / c - 0.5;
    const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
    let sw = 0, sh = 0;
    const acc = (ii, jj, w) => {
      if (w <= 0 || ii < 0 || jj < 0 || ii >= this.W || jj >= this.D) return;
      const cc = jj * this.W + ii;
      const l = this.layerNear(cc, hRef, tol);
      if (l < 0) return;
      sw += w; sh += w * this.H[cc * this.L + l];
    };
    acc(i, j, (1 - fu) * (1 - fv)); acc(i + 1, j, fu * (1 - fv)); acc(i, j + 1, (1 - fu) * fv); acc(i + 1, j + 1, fu * fv);
    if (sw <= 0) return null;
    return sh / sw;
  }

  // can we stand at (x,y) coming from height h? returns new height or null
  probe(x, y, h, rad = 0.32) {
    const cc = this.cellOf(x, y);
    if (cc < 0) return null;
    const l = this.layerNear(cc, h, this.step * 1.15);
    if (l < 0) return null;
    const nh = this.H[cc * this.L + l];
    if (rad > 0) {
      for (const [ox, oy] of [[rad, 0], [-rad, 0], [0, rad], [0, -rad]]) {
        const c2 = this.cellOf(x + ox, y + oy);
        if (c2 < 0 || this.layerNear(c2, nh, this.step * 1.2) < 0) return null;
      }
    }
    const sm = this.heightAt(x, y, nh);
    return sm == null ? nh : sm;
  }

  walkLine(a, b, rad = 0.32) {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy);
    const n = Math.max(1, Math.ceil(len / 0.3));
    let h = a[2];
    for (let k = 1; k <= n; k++) {
      const t = k / n;
      const nh = this.probe(a[0] + dx * t, a[1] + dy * t, h, rad);
      if (nh == null) return false;
      h = nh;
    }
    return Math.abs(h - b[2]) < 0.9;
  }

  // full path between world points; returns dense [[x,y,h],...] or null
  findPath(from, to) {
    const sn = this.nearest(from[0], from[1], from[2], 4, 1.5);
    const gn = this.nearest(to[0], to[1], to[2], 10, 4);
    if (sn < 0 || gn < 0) return null;
    const nodes = this.astar(sn, gn);
    if (!nodes) return null;
    const pts = nodes.map((n) => { const [x, y] = this.nodeXY(n); return [x, y, this.H[n]]; });
    pts[0] = [from[0], from[1], from[2]];
    // string pulling
    const out = [pts[0]];
    let i = 0;
    while (i < pts.length - 1) {
      let j = Math.min(pts.length - 1, i + 48);
      while (j > i + 1 && !this.walkLine(pts[i], pts[j])) j--;
      out.push(pts[j]); i = j;
    }
    // densify with surface-following heights
    const dense = [out[0]];
    let h = out[0][2];
    for (let q = 1; q < out.length; q++) {
      const a = out[q - 1], b = out[q];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const n = Math.max(1, Math.ceil(len / 0.4));
      for (let k = 1; k <= n; k++) {
        const t = k / n, x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
        const target = a[2] + (b[2] - a[2]) * t;
        let nh = this.heightAt(x, y, h, 0.9);
        if (nh == null) nh = this.heightAt(x, y, target, 1.4);
        if (nh == null) nh = target;
        h = nh;
        dense.push([x, y, h]);
      }
    }
    return dense;
  }

  // ray (render coords) vs. the max-height field: returns [x, y, h] in plan coords or null
  pickRay(o, d) {
    const hor = Math.hypot(d[0], d[2]);
    if (d[1] >= -1e-4) return null;
    const t0 = (o[1] - (this.maxTop + 1)) / -d[1], t1 = (o[1] - (this.minH - 1)) / -d[1];
    const dt = Math.max(0.05, 0.4 / Math.max(hor, 0.05));
    const at = (t) => [o[0] + d[0] * t, o[1] + d[1] * t, o[2] + d[2] * t];
    const topAt = (x, z) => { const c = this.cellOf(x, -z); return c < 0 ? -Infinity : this.top[c]; };
    let prev = t0;
    for (let t = t0; t <= t1; t += dt) {
      const p = at(t);
      if (p[1] <= topAt(p[0], p[2])) {
        let a = prev, b = t;
        for (let k = 0; k < 10; k++) { const m = (a + b) / 2; const q = at(m); if (q[1] <= topAt(q[0], q[2])) b = m; else a = m; }
        const q = at(b);
        return [q[0], -q[2], q[1]];
      }
      prev = t;
    }
    return null;
  }

  tagAt(x, y, h) {
    const c = this.cellOf(x, y); if (c < 0) return 0;
    const l = this.layerNear(c, h, 1.2); if (l < 0) return 0;
    return this.T[c * this.L + l];
  }

  // flood fill reachability from a node (for tests)
  reachable(sn) {
    const L = this.L, W = this.W, D = this.D, H = this.H;
    const seen = new Uint8Array(W * D * L);
    const q = [sn]; seen[sn] = 1;
    const step = this.step, dstep = step * 1.45;
    while (q.length) {
      const cur = q.pop();
      const c = (cur / L) | 0, ix = c % W, iy = (c / W) | 0, h = H[cur];
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        const jx = ix + dx, jy = iy + dy;
        if (jx < 0 || jy < 0 || jx >= W || jy >= D) continue;
        const nc = jy * W + jx, diag = dx && dy;
        const l2 = this.layerNear(nc, h, diag ? dstep : step);
        if (l2 < 0) continue;
        const nn = nc * L + l2;
        if (seen[nn]) continue;
        if (diag) {
          if (this.layerNear(c + dx, h, step) < 0 || this.layerNear(c + dy * W, h, step) < 0) continue;
        }
        seen[nn] = 1; q.push(nn);
      }
    }
    return seen;
  }
}
