// Heightfield terrain built from composable operations.
import { clamp, lerp, smoothstep, makeNoise, fbm, signedDistPoly, distToPolyline, bbox, DEG } from './geom.js';

export const PAINT = { natural: 0, road: 1, court: 2, field: 3, sand: 4, rock: 5, garden: 6, mud: 7, paved: 8, worn: 9 };

function profileFn(name) {
  switch (name) {
    case 'linear': return (t) => 1 - t;
    case 'cliff': return (t) => 1 - Math.pow(t, 0.35);
    case 'scarp': return (t) => (t < 0.08 ? 1 : 1 - Math.pow((t - 0.08) / 0.92, 0.25));
    case 'concave': return (t) => (1 - t) * (1 - t);
    case 'convex': return (t) => 1 - t * t;
    default: return (t) => 1 - smoothstep(0, 1, t);
  }
}

export class Terrain {
  constructor({ bounds, stride = 2, seed = 1 }) {
    const [x0, y0, x1, y1] = bounds;
    this.x0 = x0; this.y0 = y0; this.stride = stride;
    this.nx = Math.ceil((x1 - x0) / stride);
    this.ny = Math.ceil((y1 - y0) / stride);
    this.x1 = x0 + this.nx * stride; this.y1 = y0 + this.ny * stride;
    const N = (this.nx + 1) * (this.ny + 1);
    this.h = new Float32Array(N);
    this.paint = new Uint8Array(N);
    this.noise = makeNoise(seed);
    this.noise2 = makeNoise(seed * 7 + 3);
  }
  idx(i, j) { return j * (this.nx + 1) + i; }
  vx(i) { return this.x0 + i * this.stride; }
  vy(j) { return this.y0 + j * this.stride; }

  // iterate vertices inside a bbox (plan coords)
  each(bb, fn) {
    const s = this.stride;
    const i0 = clamp(Math.floor((bb.x0 - this.x0) / s), 0, this.nx), i1 = clamp(Math.ceil((bb.x1 - this.x0) / s), 0, this.nx);
    const j0 = clamp(Math.floor((bb.y0 - this.y0) / s), 0, this.ny), j1 = clamp(Math.ceil((bb.y1 - this.y0) / s), 0, this.ny);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) fn(i, j, this.vx(i), this.vy(j), this.idx(i, j));
  }
  all(fn) { this.each({ x0: this.x0, y0: this.y0, x1: this.x1, y1: this.y1 }, fn); }

  apply(op) {
    const H = this.h, P = this.paint;
    const mode = op.mode || 'max';
    const prof = profileFn(op.profile);
    const paint = op.paint != null ? (typeof op.paint === 'string' ? PAINT[op.paint] : op.paint) : null;
    const combine = (k, T, f) => {
      if (f <= 0) return;
      const old = H[k];
      const v = lerp(old, T, f);
      if (mode === 'max') H[k] = Math.max(old, v);
      else if (mode === 'min') H[k] = Math.min(old, v);
      else if (mode === 'add') H[k] = old + (T * f);
      else H[k] = v;
      if (paint != null && f > (op.paintThreshold ?? 0.5)) P[k] = paint;
    };
    switch (op.op) {
      case 'base': this.all((i, j, x, y, k) => { H[k] = typeof op.h === 'function' ? op.h(x, y) : op.h; }); break;
      case 'fn': this.all((i, j, x, y, k) => { H[k] = op.fn(x, y, H[k]); }); break;
      case 'noise': {
        const sc = op.scale || 40, amp = op.amp || 1;
        const run = (i, j, x, y, k) => {
          let w = 1;
          if (op.poly) { const d = signedDistPoly(x, y, op.poly); w = 1 - smoothstep(-(op.edge ?? 6), 0, d); if (w <= 0) return; }
          if (op.above != null) w *= smoothstep(op.above, op.above + 2, H[k]);
          H[k] += amp * w * fbm(this.noise2, x / sc + 11.3, y / sc - 7.1, op.oct || 4);
        };
        if (op.poly) { const b = bbox(op.poly); const e = (op.edge ?? 6); this.each({ x0: b.x0 - e, y0: b.y0 - e, x1: b.x1 + e, y1: b.y1 + e }, run); }
        else this.all(run);
        break;
      }
      case 'raise': case 'flatten': case 'dig': case 'plateau': {
        const poly = op.poly; const edge = op.edge ?? 6;
        const b = bbox(poly);
        const m = op.op === 'flatten' ? 'set' : op.op === 'dig' ? 'min' : mode;
        const save = op.mode; op.mode = m;
        const modeL = m;
        this.each({ x0: b.x0 - edge, y0: b.y0 - edge, x1: b.x1 + edge, y1: b.y1 + edge }, (i, j, x, y, k) => {
          const d = signedDistPoly(x, y, poly);
          if (d > edge) return;
          let T = typeof op.h === 'function' ? op.h(x, y) : op.h;
          if (op.dome && d < 0) T += op.dome * smoothstep(0, op.domeR || 30, -d);
          if (op.rough && d < 0) T += op.rough * fbm(this.noise, x / (op.roughScale || 18), y / (op.roughScale || 18), 3) * smoothstep(0, 6, -d);
          const f = d <= 0 ? 1 : prof(d / edge);
          const old = H[k];
          const v = lerp(old, T, f);
          if (modeL === 'max') H[k] = Math.max(old, v);
          else if (modeL === 'min') H[k] = Math.min(old, v);
          else H[k] = v;
          if (paint != null && f > (op.paintThreshold ?? 0.5)) P[k] = paint;
        });
        op.mode = save;
        break;
      }
      case 'hill': {
        const rx = op.rx || op.r, ry = op.ry || op.r, rot = (op.rot || 0) * DEG;
        const c = Math.cos(rot), s = Math.sin(rot);
        const top = op.top ?? 0.15;
        const R = Math.max(rx, ry);
        this.each({ x0: op.x - R, y0: op.y - R, x1: op.x + R, y1: op.y + R }, (i, j, x, y, k) => {
          const dx = x - op.x, dy = y - op.y;
          const lx = dx * c + dy * s, ly = -dx * s + dy * c;
          let q = Math.hypot(lx / rx, ly / ry);
          if (op.wobble) q *= 1 + op.wobble * fbm(this.noise, x / 30 + 5, y / 30 - 2, 2);
          if (q >= 1) return;
          const f = q <= top ? 1 : prof((q - top) / (1 - top));
          const base = op.base ?? 0;
          let T = base + op.h;
          if (op.rough) T += op.rough * fbm(this.noise, x / (op.roughScale || 14), y / (op.roughScale || 14), 3) * f;
          combine(k, T, f);
        });
        break;
      }
      case 'ridge': case 'ramp': case 'moat': {
        const pts = op.path, w = op.w ?? 6, edge = op.edge ?? 4;
        const b = bbox(pts);
        const m = op.op === 'ramp' ? 'set' : op.op === 'moat' ? 'min' : (op.mode || 'max');
        const pad = w / 2 + edge;
        // precompute cumulative lengths for height interpolation
        const cum = [0];
        for (let q = 1; q < pts.length; q++) cum.push(cum[q - 1] + Math.hypot(pts[q][0] - pts[q - 1][0], pts[q][1] - pts[q - 1][1]));
        this.each({ x0: b.x0 - pad, y0: b.y0 - pad, x1: b.x1 + pad, y1: b.y1 + pad }, (i, j, x, y, k) => {
          const r = distToPolyline(x, y, pts, !!op.closed);
          if (r.d > pad) return;
          const a = pts[r.seg], bb = pts[(r.seg + 1) % pts.length];
          let T;
          if (op.h != null) T = op.h; else T = lerp(a[2], bb[2], r.t);
          const f = r.d <= w / 2 ? 1 : prof((r.d - w / 2) / edge);
          const old = H[k];
          const v = lerp(old, T, f);
          if (m === 'max') H[k] = Math.max(old, v);
          else if (m === 'min') H[k] = Math.min(old, v);
          else H[k] = v;
          if (paint != null && r.d <= w / 2 + (op.paintPad ?? -0.5)) P[k] = paint;
        });
        break;
      }
      case 'grid': {
        // sampled heights: {x0,y0,stride,nx,ny,data(base64 int16 x20, -32768 = none), rock?(base64 bits), rockPaint}
        // Replaces terrain heights where every neighbouring cell has data; nearer to the edge it blends by coverage.
        const G = op.grid || op;
        if (!G._h) {
          const bin = atob(G.data), u8 = new Uint8Array(bin.length);
          for (let q = 0; q < bin.length; q++) u8[q] = bin.charCodeAt(q);
          const dv = new DataView(u8.buffer);
          const h = new Float32Array(G.nx * G.ny);
          for (let q = 0; q < h.length; q++) { const v = dv.getInt16(q * 2, true); h[q] = v === -32768 ? NaN : v / 20; }
          G._h = h;
          if (G.rock) {
            const rb = atob(G.rock), r8 = new Uint8Array(G.nx * G.ny);
            for (let q = 0; q < r8.length; q++) r8[q] = (rb.charCodeAt(q >> 3) >> (7 - (q & 7))) & 1;
            G._r = r8;
          }
        }
        if (op.fill && !G._filled) {
          // extend the sampled ground outward into cells that lack data but lie inside (or just outside) a polygon
          G._filled = true;
          const h0 = G._h, fl = op.fill, pad = op.fillPad ?? 0;
          for (let it = 0; it < (op.grow ?? 8); it++) {
            const nxt = h0.slice();
            for (let j = 0; j < G.ny; j++) for (let i = 0; i < G.nx; i++) {
              const q = j * G.nx + i; if (h0[q] === h0[q]) continue;
              if (signedDistPoly(G.x0 + (i + 0.5) * G.stride, G.y0 + (j + 0.5) * G.stride, fl) > pad) continue;
              let sum = 0, n = 0;
              for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const ci = i + di, cj = j + dj; if (ci < 0 || cj < 0 || ci >= G.nx || cj >= G.ny) continue; const v = h0[cj * G.nx + ci]; if (v === v) { sum += v; n++; } }
              if (n) nxt[q] = sum / n;
            }
            h0.set(nxt);
          }
        }
        const gh = G._h, gr = G._r, gs = G.stride, gnx = G.nx, gny = G.ny;
        const rockCode = PAINT[G.rockPaint || 'rock'];
        const grow = op.grow ?? 0; // optional: extend the sampled area outward by this many metres (nearest cell)
        this.all((i, j, x, y, k) => {
          const u = (x - G.x0) / gs - 0.5, v = (y - G.y0) / gs - 0.5;
          const i0 = Math.floor(u), j0 = Math.floor(v), fu = u - i0, fv = v - j0;
          let sw = 0, sh = 0;
          for (let b = 0; b < 2; b++) for (let a = 0; a < 2; a++) {
            const ci = i0 + a, cj = j0 + b;
            if (ci < 0 || cj < 0 || ci >= gnx || cj >= gny) continue;
            const hv = gh[cj * gnx + ci]; if (hv !== hv) continue;
            const wgt = (a ? fu : 1 - fu) * (b ? fv : 1 - fv);
            sw += wgt; sh += hv * wgt;
          }
          if (sw < 0.5) return;
          const hv = sh / sw;
          H[k] = sw > 0.999 ? hv : lerp(H[k], hv, smoothstep(0.5, 1, sw));
          if (gr) {
            const ci = Math.round(u), cj = Math.round(v);
            if (ci >= 0 && cj >= 0 && ci < gnx && cj < gny && gr[cj * gnx + ci]) P[k] = rockCode;
          }
        });
        break;
      }
      case 'tint': {
        // photo colours on a lattice: {tint:{x0,y0,stride,nx,ny,data(base64 sRGB bytes)}, amount, poly?, pad?}
        const G = op.tint;
        if (!G._rgb) {
          const bin = atob(G.data), f = new Float32Array(G.nx * G.ny * 3);
          const lin = (b) => { const v = b / 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
          for (let q = 0; q < f.length; q++) f[q] = lin(bin.charCodeAt(q));
          G._rgb = f;
        }
        const T = this;
        T.tintFn = (x, y) => {
          if (op.poly && signedDistPoly(x, y, op.poly) > (op.pad ?? 0)) return null;
          const u = (x - G.x0) / G.stride - 0.5, v = (y - G.y0) / G.stride - 0.5;
          const i0 = clamp(Math.floor(u), 0, G.nx - 2), j0 = clamp(Math.floor(v), 0, G.ny - 2), fu = clamp(u - i0, 0, 1), fv = clamp(v - j0, 0, 1);
          const out = [0, 0, 0];
          for (let b = 0; b < 2; b++) for (let a = 0; a < 2; a++) {
            const w = (a ? fu : 1 - fu) * (b ? fv : 1 - fv), q = ((j0 + b) * G.nx + i0 + a) * 3;
            out[0] += G._rgb[q] * w; out[1] += G._rgb[q + 1] * w; out[2] += G._rgb[q + 2] * w;
          }
          return out;
        };
        T.tintAmount = op.amount ?? 0.7;
        break;
      }
      case 'edge': {
        // blend towards a constant height near the outer bounds so the terrain meets the apron cleanly
        const wdt = op.w ?? 30;
        this.all((i, j, x, y, k) => {
          const d = Math.min(x - this.x0, this.x1 - x, y - this.y0, this.y1 - y);
          if (d >= wdt) return;
          H[k] = lerp(op.h, H[k], smoothstep(0, wdt, d));
        });
        break;
      }
      case 'paint': {
        if (op.poly) {
          const b = bbox(op.poly);
          this.each(b, (i, j, x, y, k) => { if (signedDistPoly(x, y, op.poly) <= (op.pad || 0)) P[k] = paint; });
        } else if (op.path) {
          const b = bbox(op.path), pad = (op.w || 4) / 2;
          this.each({ x0: b.x0 - pad, y0: b.y0 - pad, x1: b.x1 + pad, y1: b.y1 + pad }, (i, j, x, y, k) => {
            if (distToPolyline(x, y, op.path, !!op.closed).d <= pad) P[k] = paint;
          });
        }
        break;
      }
      default: console.warn('unknown terrain op', op.op);
    }
  }

  build(ops) { for (const op of ops) this.apply(op); return this; }

  heightAt(x, y) {
    const s = this.stride;
    let u = (x - this.x0) / s, v = (y - this.y0) / s;
    u = clamp(u, 0, this.nx - 1e-4); v = clamp(v, 0, this.ny - 1e-4);
    const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
    const H = this.h, w = this.nx + 1;
    const h00 = H[j * w + i], h10 = H[j * w + i + 1], h01 = H[(j + 1) * w + i], h11 = H[(j + 1) * w + i + 1];
    if (fu > fv) return h00 + (h10 - h00) * fu + (h11 - h10) * fv;
    return h00 + (h11 - h01) * fu + (h01 - h00) * fv;
  }
  paintAt(x, y) {
    const s = this.stride;
    const i = clamp(Math.round((x - this.x0) / s), 0, this.nx), j = clamp(Math.round((y - this.y0) / s), 0, this.ny);
    return this.paint[this.idx(i, j)];
  }
  // max / min of terrain within radius (coarse)
  rangeAround(x, y, r) {
    let lo = Infinity, hi = -Infinity;
    const st = Math.max(0.75, r / 3);
    for (let dy = -r; dy <= r + 1e-6; dy += st) for (let dx = -r; dx <= r + 1e-6; dx += st) {
      const h = this.heightAt(x + dx, y + dy); if (h < lo) lo = h; if (h > hi) hi = h;
    }
    return { lo, hi };
  }
}
