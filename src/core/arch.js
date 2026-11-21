// Architectural kit: buildings, roofs, domes, chhatris, pavilions, temples, towers, minarets, mosques, ruins, houses.
import { World, regular, centroidOf, shrink, boxLocal, instMatrix, yawOf } from './world.js';
import { TAG } from './nav.js';
import { C, shade, mix, V } from './mesher.js';
import { clamp, lerp, rectPts, polyArea, DEG, TAU, bbox, rng, offsetPolyline, triangulate, pointInPoly, makeNoise } from './geom.js';

const W = World.prototype;

export const DOME = {
  half: (() => { const p = []; for (let i = 0; i <= 6; i++) { const a = (i / 6) * Math.PI / 2; p.push([Math.cos(a), Math.sin(a)]); } return p; })(),
  onion: [[0.86, 0], [1.0, 0.14], [1.07, 0.34], [1.0, 0.55], [0.78, 0.76], [0.48, 0.92], [0.18, 1.02], [0.0, 1.16]],
  bulb: [[0.9, 0], [1.05, 0.2], [1.06, 0.42], [0.9, 0.66], [0.6, 0.86], [0.25, 0.98], [0, 1.08]],
  low: [[1, 0], [0.92, 0.22], [0.66, 0.42], [0.3, 0.53], [0, 0.56]],
  bell: [[1, 0], [0.9, 0.3], [0.62, 0.62], [0.32, 0.86], [0, 0.98]],
};

function footprint(o) {
  if (o.poly) return o.poly;
  const [x, y, w, d, rot] = o.rect;
  return rectPts(x, y, w, d, rot || 0);
}
function minGround(world, poly) { let lo = Infinity; for (const p of poly) lo = Math.min(lo, world.ground(p[0], p[1])); const [cx, cy] = centroidOf(poly); return Math.min(lo, world.ground(cx, cy)); }

// ---------------------------------------------------------------- decals (windows, arches)
// draw rows of openings on each facade edge of poly
W.facadeOpenings = function (poly, base, storeyH, storeys, o = {}) {
  const ccw = polyArea(poly) > 0;
  const pts = ccw ? poly : poly.slice().reverse();
  const col = this.col(o.color || 'window');
  const spacing = o.spacing ?? 2.6, ww = o.w ?? 0.9, wh = o.h ?? Math.min(1.6, storeyH * 0.5);
  const style = o.style || 'arch';
  const M = this.decal;
  const skipEdges = new Set(o.skip || []);
  for (let e = 0; e < pts.length; e++) {
    if (skipEdges.has(e)) continue;
    const a = pts[e], b = pts[(e + 1) % pts.length];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < spacing * 0.8) continue;
    const tx = (b[0] - a[0]) / L, ty = (b[1] - a[1]) / L;
    const nx = ty, ny = -tx; // outward for CCW
    const k = Math.max(1, Math.floor(L / spacing));
    const off = o.offset ?? 0.05;
    for (let r = 0; r < storeys; r++) {
      if (o.rows && !o.rows.includes(r)) continue;
      const h0 = base + r * storeyH + (o.sill ?? storeyH * 0.25);
      const wHere = r === 0 && o.groundW ? o.groundW : ww;
      const hHere = r === 0 && o.groundH ? o.groundH : wh;
      for (let i = 0; i < k; i++) {
        const t = (i + 0.5) / k;
        const cx = a[0] + (b[0] - a[0]) * t + nx * off, cy = a[1] + (b[1] - a[1]) * t + ny * off;
        const P = (u, v) => V(cx + tx * u, cy + ty * u, h0 + v);
        const hw = wHere / 2;
        if (style === 'rect' || style === 'jali') {
          M.quad(P(-hw, 0), P(hw, 0), P(hw, hHere), P(-hw, hHere), col);
          if (style === 'jali') M.quad(P(-hw - 0.12, -0.12), P(hw + 0.12, -0.12), P(hw + 0.12, -0.02), P(-hw - 0.12, -0.02), shade(col, 2.2));
        } else {
          // pointed arch opening (fan)
          const sp = hHere * 0.62;
          const outline = [[-hw, 0], [hw, 0], [hw, sp], [hw * 0.75, sp + (hHere - sp) * 0.55], [hw * 0.35, sp + (hHere - sp) * 0.88], [0, hHere], [-hw * 0.35, sp + (hHere - sp) * 0.88], [-hw * 0.75, sp + (hHere - sp) * 0.55], [-hw, sp]];
          for (let q = 1; q < outline.length - 1; q++) M.tri(P(...outline[0]), P(...outline[q]), P(...outline[q + 1]), col);
        }
      }
    }
  }
};

// ---------------------------------------------------------------- building
W.building = function (o) {
  const poly = footprint(o);
  const base = o.base ?? minGround(this, poly) - (o.sink ?? 0.3);
  const storeys = o.storeys ?? 1;
  const sh = o.storeyH ?? (o.h ? o.h / storeys : 3.6);
  const h = o.h ?? storeys * sh;
  const top = base + h;
  const col = this.col(o.color, 'plaster');
  const M = o.mason ? this.mason : this.solid;
  if (o.ruin) return this.ruin(Object.assign({}, o, { poly, base }));
  // body (optionally stepped setbacks)
  if (o.setbacks) {
    let cur = poly, hb = base;
    for (const sb of o.setbacks) {
      const hTop = base + sb.h;
      M.prism(cur, hb - (hb === base ? 1.2 : 0), hTop, col, { colTop: shade(col, 1.04) });
      cur = shrink(cur, centroidOf(cur), sb.inset);
      hb = hTop;
    }
  } else {
    M.prism(poly, base - 1.2, top, col, { colTop: o.roofColor ? this.col(o.roofColor) : shade(col, 1.04) });
  }
  // cornice band
  if (o.cornice !== false && h > 2.5) {
    const out = shrink(poly, centroidOf(poly), -(o.chhajja ?? 0.35));
    M.prism(out, top - 0.35, top - 0.12, shade(this.col(o.trim || o.color, o.trim ? 'trim' : 'plaster'), 1.0), { colTop: shade(col, 1.05) });
    for (let r = 1; r < storeys; r++) {
      const hh = base + r * sh;
      M.prism(shrink(poly, centroidOf(poly), -0.18), hh - 0.12, hh + 0.08, shade(col, 0.96));
    }
  }
  if (o.windows !== false) this.facadeOpenings(poly, base, sh, storeys, Object.assign({ style: o.windowStyle || 'arch' }, o.windows || {}));
  this.roof(poly, top, o);
  // nav + plan
  const roofTop = top + (o.roofH ?? 0);
  this.nav.obstacle({ poly, bottom: base - 1, top: roofTop + 0.5 });
  if (o.walkRoof) this.nav.surface({ poly: shrink(poly, centroidOf(poly), (o.parapet?.t ?? 0.35) + 0.1), h: top, tag: o.roofTag ?? TAG.terrace });
  this.plan.polys.push({ pts: poly, cls: o.kind || 'building' });
  this.occupy(poly, o.pad ?? 0.4);
  this.registerShelter(poly, o.kind || 'building', storeys, base, false, o.name);
  return { poly, base, top };
};

// roof treatments on top of a footprint
W.roof = function (poly, top, o) {
  const M = this.solid;
  const col = this.col(o.color, 'plaster');
  const roofCol = this.col(o.roofColor || o.color, o.roofColor ? 'roof' : 'plaster');
  const kind = o.roof || 'flat';
  const cen = centroidOf(poly);
  const bb = bbox(poly);
  const ww = bb.x1 - bb.x0, dd = bb.y1 - bb.y0;
  const rot = o.rect ? (o.rect[4] || 0) : (o.rot || 0);
  const w = o.rect ? o.rect[2] : ww, d = o.rect ? o.rect[3] : dd;
  if (kind === 'flat' || kind === 'terrace') {
    if (o.parapet !== false) {
      const p = Object.assign({ h: 0.8, t: 0.35 }, o.parapet || {});
      const inner = shrink(poly, cen, p.t);
      ringWall(M, poly, inner, top - 0.05, top + p.h, shade(col, 1.02));
      if (o.merlon) {
        const B = this.merlonBatch(o.merlon);
        const ccw = polyArea(poly) > 0, pts = ccw ? poly : poly.slice().reverse();
        const inn = ccw ? inner : inner.slice().reverse();
        for (let e = 0; e < pts.length; e++) {
          const a = pts[e], b = pts[(e + 1) % pts.length], ia = inn[e], ib = inn[(e + 1) % pts.length];
          const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
          const n = Math.floor(L / 1.3);
          for (let i = 0; i < n; i++) {
            const t = (i + 0.5) / n;
            const x = (lerp(a[0], b[0], t) + lerp(ia[0], ib[0], t)) / 2, y = (lerp(a[1], b[1], t) + lerp(ia[1], ib[1], t)) / 2;
            B.add(instMatrix(x, y, top + p.h, yawOf(b[0] - a[0], b[1] - a[1]), 0.75, 0.7, p.t), col);
          }
        }
      }
    }
  } else if (kind === 'dome' || kind === 'domes') {
    const list = o.domes || [{ x: cen[0], y: cen[1], r: Math.min(w, d) * 0.36 }];
    for (const dm of list) this.dome(Object.assign({ base: top, shape: o.domeShape || 'onion', color: o.domeColor || o.color }, dm));
    if (o.parapet !== false) ringWall(M, poly, shrink(poly, cen, 0.3), top - 0.05, top + 0.6, shade(col, 1.02));
  } else if (kind === 'pyramid' || kind === 'hip') {
    const rh = o.roofH ?? Math.min(w, d) * 0.45;
    const ov = o.eave ?? 0.4;
    let w2 = w, d2 = d, r2 = rot;
    if (kind === 'hip' && d > w) { w2 = d; d2 = w; r2 = rot + 90; }
    M.hip(cen[0], cen[1], w2 + ov * 2, d2 + ov * 2, top, top + rh, r2, roofCol, kind === 'hip' ? Math.max(0, w2 - d2) : 0);
  } else if (kind === 'stepped') {
    // phamsana / stepped pyramid of slabs
    const n = o.steps ?? 5, rh = o.roofH ?? Math.min(w, d) * 0.6;
    for (let i = 0; i < n; i++) {
      const s = 1 - (i / n) * 0.8;
      M.box(cen[0], cen[1], w * s + 0.6, d * s + 0.6, top + (i / n) * rh, top + ((i + 0.6) / n) * rh, rot, i % 2 ? roofCol : shade(roofCol, 1.08));
    }
    this.finial(cen[0], cen[1], top + rh, 0.6, roofCol);
  } else if (kind === 'vault' || kind === 'bangaldar') {
    const along = w >= d;
    const L = along ? w : d, S = along ? d : w;
    const r0 = along ? rot : rot + 90;
    const rise = kind === 'bangaldar' ? S * 0.32 : S * 0.5;
    M.vault(cen[0], cen[1], L + 0.3, S + (kind === 'bangaldar' ? 0.8 : 0.1), top, r0, roofCol, 8, rise);
  } else if (kind === 'gable' || kind === 'tiled') {
    const along = w >= d;
    const r0 = along ? rot : rot + 90;
    const L = along ? w : d, S = along ? d : w;
    const rh = o.roofH ?? S * 0.42;
    M.hip(cen[0], cen[1], L + 0.7, S + 0.9, top, top + rh, r0, roofCol, Math.max(0.1, L - S * 0.2));
  }
  if (o.chhatris) {
    const spots = o.chhatris === 'corners' ? shrink(poly, cen, o.chhatriInset ?? 1.4) : o.chhatris;
    for (const sp of spots) this.chhatri({ x: sp[0], y: sp[1], base: top + (o.parapet === false ? 0 : 0.0), size: o.chhatriSize ?? 2.2, h: o.chhatriH ?? 2.2, dome: o.chhatriDome || 'half', color: o.chhatriColor || o.color });
  }
  if (o.jharokhas) this.jharokhas(poly, o);
};

function ringWall(M, outer, inner, h0, h1, col) {
  const ccw = polyArea(outer) > 0;
  const A = ccw ? outer : outer.slice().reverse(), B = ccw ? inner : inner.slice().reverse();
  const n = A.length;
  const cb = shade(col, 0.88);
  for (let k = 0; k < n; k++) {
    const k2 = (k + 1) % n;
    const a = A[k], b = A[k2], c = B[k2], d = B[k];
    M.quad(V(a[0], a[1], h0), V(b[0], b[1], h0), V(b[0], b[1], h1), V(a[0], a[1], h1), [cb, cb, col, col]);
    M.quad(V(c[0], c[1], h0), V(d[0], d[1], h0), V(d[0], d[1], h1), V(c[0], c[1], h1), [cb, cb, col, col]);
    M.quad(V(a[0], a[1], h1), V(b[0], b[1], h1), V(c[0], c[1], h1), V(d[0], d[1], h1), shade(col, 1.05));
  }
}
export { ringWall };

W.finial = function (x, y, h, s, col) {
  this.solid.frustum(x, y, s * 0.25, 0.02, h, h + s * 1.6, 6, this.col(col || 'accent'));
  this.solid.lathe(x, y, [[0.001, h + s * 0.1], [s * 0.32, h + s * 0.35], [s * 0.3, h + s * 0.62], [0.001, h + s * 0.85]], 8, this.col(col || 'accent'));
};

// dome: {x,y,r,base,shape,drum (height), color, finial}
W.dome = function (o) {
  const prof = DOME[o.shape || 'onion'] || DOME.onion;
  const r = o.r ?? 3, drum = o.drum ?? r * 0.35;
  const col = this.col(o.color, 'dome');
  const M = this.solid;
  const h0 = o.base;
  if (drum > 0.05) {
    M.frustum(o.x, o.y, r * 0.95, r * 0.95, h0 - 0.1, h0 + drum, o.seg ?? 16, shade(col, 0.95), { top: false });
    if (o.petals) M.frustum(o.x, o.y, r * 1.05, r * 0.92, h0 + drum - 0.4, h0 + drum + 0.1, o.seg ?? 16, shade(col, 1.05), { top: false });
  }
  const H = o.hgt ?? r * 1.0;
  const pts = prof.map(([pr, ph]) => [pr * r * 0.95, h0 + drum + ph * H]);
  M.lathe(o.x, o.y, pts, o.seg ?? 16, col);
  if (o.finial !== false) this.finial(o.x, o.y, pts[pts.length - 1][1] - 0.05, Math.max(0.35, r * 0.25), o.finialColor || 'accent');
};

// chhatri: {x,y,base,size,h,cols,dome,color, plinth}
W.chhatri = function (o) {
  const s = o.size ?? 2.4, hcol = o.h ?? 2.4;
  const col = this.col(o.color, 'plaster');
  const M = this.solid;
  const base = o.base ?? this.ground(o.x, o.y);
  const plinth = o.plinth ?? 0.25;
  const n = o.cols ?? 4;
  const rot = (o.rot ?? 0);
  if (n === 4) M.box(o.x, o.y, s, s, base - 0.2, base + plinth, rot, shade(col, 0.95));
  else M.frustum(o.x, o.y, s * 0.6, s * 0.6, base - 0.2, base + plinth, n, shade(col, 0.95), { rot: rot * DEG + Math.PI / n });
  const cr = s * 0.07;
  const pos = n === 4 ? [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => [u * (s / 2 - cr * 1.5), v * (s / 2 - cr * 1.5)]) : Array.from({ length: n }, (_, i) => { const a = rot * DEG + (i / n) * TAU; return [Math.cos(a) * s * 0.5, Math.sin(a) * s * 0.5]; });
  for (const [u, v] of pos) M.box(o.x + u, o.y + v, cr * 2, cr * 2, base + plinth, base + plinth + hcol, rot, col);
  const eaveH = base + plinth + hcol;
  if (n === 4) {
    M.box(o.x, o.y, s + 0.5, s + 0.5, eaveH, eaveH + 0.18, rot, shade(col, 1.06));
    M.box(o.x, o.y, s * 0.9, s * 0.9, eaveH + 0.18, eaveH + 0.45, rot, col);
  } else {
    M.frustum(o.x, o.y, s * 0.68, s * 0.7, eaveH, eaveH + 0.18, n, shade(col, 1.06), { rot: rot * DEG + Math.PI / n });
    M.frustum(o.x, o.y, s * 0.55, s * 0.55, eaveH + 0.18, eaveH + 0.45, n, col, { rot: rot * DEG + Math.PI / n });
  }
  if (o.dome === 'bangaldar') M.vault(o.x, o.y, s * 0.95, s * 0.95, eaveH + 0.45, rot, this.col(o.domeColor || o.color, 'dome'), 6, s * 0.3);
  else if (o.dome === 'pyramid') M.hip(o.x, o.y, s * 0.95, s * 0.95, eaveH + 0.45, eaveH + 0.45 + s * 0.55, rot, this.col(o.domeColor || o.color, 'dome'));
  else this.dome({ x: o.x, y: o.y, r: s * 0.42, base: eaveH + 0.45, drum: 0.1, shape: o.dome === 'onion' ? 'onion' : 'half', color: o.domeColor || o.color, seg: 12 });
};

// pavilion / baradari / mandapa: {x,y,w,d,rot,base?,plinth,colH,cols:[nx,ny],roof,color,walk,steps}
W.pavilion = function (o) {
  const rot = o.rot || 0;
  const poly = rectPts(o.x, o.y, o.w, o.d, rot);
  const g = o.base ?? minGround(this, poly);
  const plinth = o.plinth ?? 0.8;
  const top = g + plinth;
  const col = this.col(o.color, 'plaster');
  const M = this.solid;
  if (plinth > 0.01) M.prism(poly, g - 1.2, top, shade(col, 0.92), { colTop: this.col(o.floorColor || 'paved') });
  const [nx, ny] = o.cols || [4, 3];
  const colH = o.colH ?? 3;
  const r = (rot * DEG), c = Math.cos(r), s = Math.sin(r);
  const cw = o.colW ?? 0.45;
  const pos = [];
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
    const edge = i === 0 || j === 0 || i === nx - 1 || j === ny - 1;
    if (!edge && !o.inner) continue;
    const u = -o.w / 2 + 0.5 + (i / Math.max(1, nx - 1)) * (o.w - 1), v = -o.d / 2 + 0.5 + (j / Math.max(1, ny - 1)) * (o.d - 1);
    pos.push([o.x + u * c - v * s, o.y + u * s + v * c]);
  }
  for (const [px, py] of pos) {
    M.box(px, py, cw, cw, top, top + colH, rot, col);
    M.box(px, py, cw * 1.6, cw * 1.6, top + colH - 0.3, top + colH, rot, shade(col, 1.05));
    this.nav.obstacle({ circle: [px, py, cw * 0.9], bottom: top - 0.5, top: top + colH });
  }
  // roof slab with chhajja
  const slab = rectPts(o.x, o.y, o.w + 0.9, o.d + 0.9, rot);
  M.prism(slab, top + colH, top + colH + 0.35, shade(col, 1.04), { bottom: true });
  const inner = rectPts(o.x, o.y, o.w, o.d, rot);
  const rt = top + colH + 0.35;
  this.roof(inner, rt, { roof: o.roof || 'flat', color: o.color, roofColor: o.roofColor, domeShape: o.domeShape, rect: [o.x, o.y, o.w, o.d, rot], parapet: o.parapet ?? { h: 0.5, t: 0.25 }, chhatris: o.chhatris, roofH: o.roofH, domes: o.domes, merlon: o.merlon, steps: o.steps });
  if (o.walk !== false && plinth > 0.01) {
    this.nav.obstacle({ poly, bottom: g - 2, top: top - 0.05 });
    this.nav.surface({ poly, h: top, tag: o.tag ?? TAG.terrace });
  }
  this.nav.obstacle({ poly: slab, bottom: top + colH - 0.1, top: rt + 2 });
  if (o.stairs !== false && plinth > 0.45) {
    const side = o.stairSide ?? 0; // 0 = front (-v)
    const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]][side];
    const half = side % 2 === 0 ? o.d / 2 : o.w / 2;
    const run = Math.max(1.2, plinth / 0.3 * 0.42);
    const fx = o.x + (dir[0] * c - dir[1] * s) * (half + run), fy = o.y + (dir[0] * s + dir[1] * c) * (half + run);
    const tx = o.x + (dir[0] * c - dir[1] * s) * (half - 0.05), ty = o.y + (dir[0] * s + dir[1] * c) * (half - 0.05);
    this.stairs({ from: [fx, fy], to: [tx, ty, top], w: Math.min(3, (side % 2 === 0 ? o.w : o.d) * 0.4), color: o.color });
  }
  this.plan.polys.push({ pts: poly, cls: o.kind || 'pavilion' });
  this.occupy(poly, 0.3);
  return { top, roofTop: rt };
};

// jharokhas: projecting balconies on facades. o.jharokhas = {perEdge, h (above base), size}
W.jharokhas = function (poly, o) {
  const J = Object.assign({ every: 6, size: 1.8, h: null, rows: [1] }, o.jharokhas === true ? {} : o.jharokhas);
  const ccw = polyArea(poly) > 0, pts = ccw ? poly : poly.slice().reverse();
  const base = o.base ?? minGround(this, poly);
  const sh = o.storeyH ?? 3.6;
  const col = this.col(o.color, 'plaster');
  const skip = new Set(J.skip || []);
  for (let e = 0; e < pts.length; e++) {
    if (skip.has(e)) continue;
    const a = pts[e], b = pts[(e + 1) % pts.length];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.floor(L / J.every);
    if (n < 1) continue;
    const tx = (b[0] - a[0]) / L, ty = (b[1] - a[1]) / L, nx = ty, ny = -tx;
    for (const row of J.rows) {
      for (let i = 0; i < n; i++) {
        const t = (i + 0.5) / n;
        const x = a[0] + (b[0] - a[0]) * t + nx * J.size * 0.35, y = a[1] + (b[1] - a[1]) * t + ny * J.size * 0.35;
        const h0 = base + row * sh + 0.4;
        const rot = yawOf(tx, ty);
        this.solid.box(x, y, J.size, J.size * 0.7, h0 - 0.3, h0, rot, shade(col, 0.9));
        this.solid.box(x, y, J.size * 0.92, J.size * 0.62, h0, h0 + 1.3, rot, col);
        this.decal.quad(V(x - tx * J.size * 0.3 + nx * J.size * 0.32, y - ty * J.size * 0.3 + ny * J.size * 0.32, h0 + 0.25), V(x + tx * J.size * 0.3 + nx * J.size * 0.32, y + ty * J.size * 0.3 + ny * J.size * 0.32, h0 + 0.25), V(x + tx * J.size * 0.3 + nx * J.size * 0.32, y + ty * J.size * 0.3 + ny * J.size * 0.32, h0 + 1.05), V(x - tx * J.size * 0.3 + nx * J.size * 0.32, y - ty * J.size * 0.3 + ny * J.size * 0.32, h0 + 1.05), this.pal.window);
        this.solid.vault(x, y, J.size * 1.05, J.size * 0.8, h0 + 1.3, rot, this.col(o.domeColor || o.color, 'plaster'), 5, 0.45);
      }
    }
  }
};

// ---------------------------------------------------------------- ruins
W.ruin = function (o) {
  const poly = footprint(o);
  const base = o.base ?? minGround(this, poly) - 0.3;
  const h = o.h ?? 6, t = o.thick ?? 0.8;
  const col = this.col(o.color, 'stone');
  const r = rng((this.seed * 31 + Math.round(poly[0][0] * 7 + poly[0][1] * 13)) >>> 0);
  const ccw = polyArea(poly) > 0, pts = ccw ? poly : poly.slice().reverse();
  const doors = o.doors || [{ edge: 0, at: 0.5, w: 2.2 }];
  const M = o.mason ? this.mason : this.solid;
  const storeys = o.storeys ?? Math.max(1, Math.round(h / 3.6));
  const nz = makeNoise(((this.seed * 7 + Math.round(poly[0][0] * 3 + poly[0][1] * 5)) >>> 0) % 9973 + 1);
  // broken-top profile along the perimeter: long waves, small chips, and occasional collapses
  const prof = (u) => (o.jag === false ? h : h * clamp(0.62 + 0.3 * nz(u / 6.5, 1.7) + 0.1 * nz(u / 1.6, 4.2) - (nz(u / 11, 9.1) < -0.42 ? 0.38 : 0), 0.16, 1));
  let acc = r() * 40;
  for (let e = 0; e < pts.length; e++) {
    const a = pts[e], b = pts[(e + 1) % pts.length];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const tx = (b[0] - a[0]) / L, ty = (b[1] - a[1]) / L, nx = -ty, ny = tx; // inward normal for CCW
    const segN = Math.max(1, Math.round(L / 1.8));
    const gaps = doors.filter((d) => d.edge === e).map((d) => [d.at * L - d.w / 2, d.at * L + d.w / 2]);
    for (let k = 0; k < segN; k++) {
      const s0 = (k / segN) * L, s1 = ((k + 1) / segN) * L;
      const sm = (s0 + s1) / 2;
      if (gaps.some(([g0, g1]) => sm > g0 && sm < g1)) continue;
      const hA = prof(acc + s0), hB = prof(acc + s1);
      const hh = Math.min(hA, hB);
      const p0 = [a[0] + tx * s0, a[1] + ty * s0], p1 = [a[0] + tx * s1, a[1] + ty * s1];
      const q = [p0, p1, [p1[0] + nx * t, p1[1] + ny * t], [p0[0] + nx * t, p0[1] + ny * t]];
      const topF = (x, y) => base + lerp(hA, hB, clamp((((x - a[0]) * tx + (y - a[1]) * ty) - s0) / (s1 - s0 || 1), 0, 1));
      if (o.openWindows) {
        const mid = (s0 + s1) / 2, half = Math.min(0.45, (s1 - s0) * 0.3);
        const piece = (u0, u1, z0, z1) => {
          if (u1 - u0 < 1e-3 || z1 - z0 < 1e-3) return;
          const a0 = [a[0] + tx * u0, a[1] + ty * u0], a1 = [a[0] + tx * u1, a[1] + ty * u1];
          M.prism([a0, a1, [a1[0] + nx * t, a1[1] + ny * t], [a0[0] + nx * t, a0[1] + ny * t]], z0, z1, col);
        };
        const ceiling = base + hh;
        piece(s0, mid - half, base - 0.8, topF);
        piece(mid + half, s1, base - 0.8, topF);
        for (let strip2 = 0; strip2 < 8; strip2++) {
          const u0 = mid - half + 2 * half * strip2 / 8, u1 = mid - half + 2 * half * (strip2 + 1) / 8;
          const rel = Math.abs(((u0 + u1) / 2 - mid) / half);
          const arch = 0.9 + 0.5 * (1 - rel * rel);
          let bottom = base - 0.8;
          for (let st = 0; st < storeys; st++) {
            const sill = base + st * (h / storeys) + 1;
            if (sill + 1.4 > ceiling) break;
            piece(u0, u1, bottom, sill);
            bottom = sill + arch;
          }
          piece(u0, u1, bottom, topF);
        }
      } else M.prism(q, base - 0.8, topF, col, { shadeBase: 0.8 });
      this.nav.obstacle({ poly: q, bottom: base - 1, top: base + Math.max(hA, hB) });
      // openings decal on the outside face
      if (o.windows !== false && !o.openWindows) {
        for (let st = 0; st < storeys; st++) {
          const wy = base + st * (h / storeys) + 1.0;
          if (wy + 1.4 > base + hh) break;
          const c0 = [(p0[0] + p1[0]) / 2 - nx * 0.04, (p0[1] + p1[1]) / 2 - ny * 0.04];
          const P = (u, v) => V(c0[0] + tx * u, c0[1] + ty * u, wy + v);
          const outline = [[-0.45, 0], [0.45, 0], [0.45, 0.9], [0.25, 1.25], [0, 1.4], [-0.25, 1.25], [-0.45, 0.9]];
          for (let qq = 1; qq < outline.length - 1; qq++) this.decal.triAway(P(...outline[0]), P(...outline[qq]), P(...outline[qq + 1]), this.pal.window, V(c0[0] + nx * 3, c0[1] + ny * 3, wy));
        }
      }
    }
    if (gaps.length) for (const [g0, g1] of gaps) {
      // lintel over door
      const p0 = [a[0] + tx * g0, a[1] + ty * g0], p1 = [a[0] + tx * g1, a[1] + ty * g1];
      const q = [p0, p1, [p1[0] + nx * t, p1[1] + ny * t], [p0[0] + nx * t, p0[1] + ny * t]];
      if (h > 3.5) M.prism(q, base + 2.6, base + Math.min(h * 0.7, 3.6), col);
    }
    acc += L;
  }
  if (o.partitions) for (const pp of o.partitions) {
    M.prism(pp, base - 0.8, base + h * 0.6, col);
    this.nav.obstacle({ poly: pp, bottom: base - 1, top: base + h });
  }
  this.plan.polys.push({ pts: poly, cls: 'ruin' });
  this.registerShelter(poly, o.kind || 'ruin', o.storeys ?? 1, base, true, o.name);
  this.occupy(poly, 0.4);
  return { poly, base };
};

// ---------------------------------------------------------------- temples
// {x,y,rot,w,h,plinth,mandapa:{d,w,h,roof},style:'nagara'|'dravida'|'wagon'|'jain', color}
W.temple = function (o) {
  const rot = o.rot ?? 0;
  const w = o.w ?? 5;
  const col = this.col(o.color, 'stone');
  const M = this.solid;
  const r = rot * DEG, c = Math.cos(r), s = Math.sin(r);
  const T = (u, v) => [o.x + u * c - v * s, o.y + u * s + v * c];
  const md = o.mandapa === false ? null : Object.assign({ d: w * 1.1, w: w * 1.15, h: w * 0.55, roof: 'stepped' }, o.mandapa || {});
  const total = w + (md ? md.d : 0);
  // plinth spanning sanctum + mandapa (local v: sanctum at +v, mandapa towards -v = front)
  const pl = o.plinth ?? 1.0;
  const pc = T(0, md ? -md.d / 2 : 0);
  const plPoly = rectPts(pc[0], pc[1], Math.max(w, md ? md.w : 0) + 2.2, total + 2.2, rot);
  const g = o.base ?? minGround(this, plPoly);
  const top = g + pl;
  M.prism(plPoly, g - 1, top, shade(col, 0.9), { colTop: shade(col, 1.05) });
  if (pl > 0.2) {
    // moulding band
    M.prism(rectPts(pc[0], pc[1], Math.max(w, md ? md.w : 0) + 2.5, total + 2.5, rot), g - 0.5, g + pl * 0.35, shade(col, 0.82));
  }
  const style = o.style || 'nagara';
  const sanctumH = o.sanctumH ?? w * 0.85;
  const sc = T(0, w / 2 - 0.0);
  // sanctum
  M.box(sc[0], sc[1], w, w, top, top + sanctumH, rot, col);
  M.box(sc[0], sc[1], w + 0.5, w + 0.5, top + sanctumH - 0.3, top + sanctumH, rot, shade(col, 1.06));
  const H = o.h ?? w * 1.8;
  const h0 = top + sanctumH;
  if (style === 'nagara' || style === 'jain') {
    // curvilinear shikhara: stacked square slabs following a convex profile
    const n = 9;
    for (let i = 0; i < n; i++) {
      const t0 = i / n, t1 = (i + 1) / n;
      const f = (t) => (1 - Math.pow(t, 1.6) * 0.62) * (1 + 0.05 * Math.sin(t * Math.PI));
      const s0 = w * f(t0), s1 = w * f(t1);
      squareFrustum(M, sc[0], sc[1], s0, s1, h0 + t0 * H, h0 + t1 * H, rot, i % 2 ? col : shade(col, 1.05));
    }
    // urushringas (mini spires)
    if (o.mini !== false) for (const [u, v] of [[-1, 0], [1, 0], [0, 1]]) {
      const p = T(u * w * 0.42, w / 2 + v * w * 0.42);
      for (let i = 0; i < 4; i++) squareFrustum(M, p[0], p[1], w * 0.32 * (1 - i * 0.2), w * 0.32 * (1 - (i + 1) * 0.2), h0 + i * H * 0.1, h0 + (i + 1) * H * 0.1, rot, shade(col, 1.02));
    }
    const ap = h0 + H;
    const aw = w * 0.42;
    M.frustum(sc[0], sc[1], aw * 0.55, aw * 0.55, ap - 0.1, ap + 0.15, 16, col, { top: false });
    M.lathe(sc[0], sc[1], [[aw * 0.55, ap + 0.15], [aw * 0.75, ap + 0.35], [aw * 0.55, ap + 0.6], [0.001, ap + 0.62]], 16, shade(col, 1.08));
    this.finial(sc[0], sc[1], ap + 0.6, 0.6, o.finialColor || 'accent');
    if (o.flag) this.flag({ x: sc[0], y: sc[1], h: ap + 1.2, pole: 2.2, color: o.flagColor || '#c9361f' });
  } else if (style === 'dravida') {
    const tiers = o.tiers ?? 4;
    let sz = w;
    let hh = h0;
    const th = H * 0.7 / tiers;
    for (let i = 0; i < tiers; i++) {
      M.box(sc[0], sc[1], sz, sz, hh, hh + th, rot, i % 2 ? col : shade(col, 1.05));
      // kutas on corners
      for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
        const p = T(u * sz * 0.38, w / 2 + v * sz * 0.38);
        M.box(p[0], p[1], sz * 0.18, sz * 0.18, hh + th, hh + th + 0.5, rot, shade(col, 1.1));
      }
      hh += th; sz *= 0.78;
    }
    this.dome({ x: sc[0], y: sc[1], r: sz * 0.62, base: hh, drum: 0.6, shape: 'bell', color: o.color || 'stone', seg: 8 });
  } else if (style === 'wagon') {
    // tall rectangular body + barrel vault crown (valabhi), e.g. Teli ka Mandir
    const ww = w, dd = w * 0.62;
    M.box(sc[0], sc[1], ww, dd, h0, h0 + H * 0.72, rot + 90, col);
    for (let i = 1; i < 5; i++) M.box(sc[0], sc[1], ww + 0.3, dd + 0.3, h0 + H * 0.72 * (i / 5) - 0.15, h0 + H * 0.72 * (i / 5) + 0.1, rot + 90, shade(col, 1.06));
    M.vault(sc[0], sc[1], dd + 0.4, ww * 0.62, h0 + H * 0.72, rot, shade(col, 1.04), 8, H * 0.24);
  }
  // mandapa
  if (md) {
    const mc = T(0, -md.d / 2);
    const colH = md.h;
    const cols = [Math.max(2, Math.round(md.w / 2)), Math.max(2, Math.round(md.d / 2))];
    this.pavilion({ x: mc[0], y: mc[1], w: md.w, d: md.d, rot, base: top, plinth: 0.01, colH, cols, roof: md.roof, color: o.color || 'stone', roofColor: o.color || 'stone', walk: false, stairs: false, roofH: md.roofH ?? md.w * 0.45, kind: 'temple', domeShape: md.domeShape, parapet: md.roof === 'flat' ? { h: 0.4, t: 0.25 } : false });
  }
  // nav: plinth walkable, sanctum blocked
  this.nav.obstacle({ poly: plPoly, bottom: g - 2, top: top - 0.05 });
  this.nav.surface({ poly: plPoly, h: top, tag: TAG.temple });
  this.nav.obstacle({ poly: rectPts(sc[0], sc[1], w + 0.3, w + 0.3, rot), bottom: top - 0.5, top: h0 + H });
  // steps up to plinth at front
  if (pl > 0.45 && o.stairs !== false) {
    const run = pl / 0.3 * 0.45;
    const f0 = T(0, -(md ? md.d : 0) - 1.1 - run), f1 = T(0, -(md ? md.d : 0) - 1.1 + 0.05);
    this.stairs({ from: f0, to: [f1[0], f1[1], top], w: Math.min(3.2, w * 0.6), color: o.color || 'stone' });
  }
  this.plan.polys.push({ pts: plPoly, cls: 'temple-plinth' });
  this.plan.polys.push({ pts: rectPts(sc[0], sc[1], w, w, rot), cls: 'temple' });
  this.occupy(plPoly, 0.4);
  return { top };
};

function squareFrustum(M, x, y, s0, s1, h0, h1, rotDeg, col) {
  const r = rotDeg * DEG, c = Math.cos(r), s = Math.sin(r);
  const P = (u, v, h) => V(x + u * c - v * s, y + u * s + v * c, h);
  const a0 = s0 / 2, a1 = s1 / 2;
  const cb = shade(col, 0.9);
  const B = [[-a0, -a0], [a0, -a0], [a0, a0], [-a0, a0]], T = [[-a1, -a1], [a1, -a1], [a1, a1], [-a1, a1]];
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    M.quad(P(B[i][0], B[i][1], h0), P(B[j][0], B[j][1], h0), P(T[j][0], T[j][1], h1), P(T[i][0], T[i][1], h1), [cb, cb, col, col]);
  }
  M.quad(P(T[0][0], T[0][1], h1), P(T[1][0], T[1][1], h1), P(T[2][0], T[2][1], h1), P(T[3][0], T[3][1], h1), col);
}
export { squareFrustum };

// gopuram: {x,y,w,d,rot,tiers,h,color}
W.gopuram = function (o) {
  const rot = o.rot ?? 0, col = this.col(o.color, 'stone');
  const M = this.solid;
  const g = o.base ?? minGround(this, rectPts(o.x, o.y, o.w, o.d, rot));
  const baseH = o.baseH ?? 5;
  // base storey with passage (rendered as solid + dark opening decal)
  M.box(o.x, o.y, o.w, o.d, g - 1, g + baseH, rot, shade(col, 0.95));
  const tiers = o.tiers ?? 5, H = o.h ?? 14;
  let w = o.w * 0.92, d = o.d * 0.86, hh = g + baseH;
  const th = H / tiers;
  for (let i = 0; i < tiers; i++) {
    M.box(o.x, o.y, w, d, hh, hh + th * 0.82, rot, i % 2 ? col : shade(col, 1.06));
    M.box(o.x, o.y, w + 0.4, d + 0.4, hh + th * 0.82, hh + th, rot, shade(col, 1.12));
    hh += th; w *= 0.84; d *= 0.8;
  }
  M.vault(o.x, o.y, w + 0.6, d + 0.6, hh, rot, shade(col, 1.1), 8, d * 0.5);
  const r = rot * DEG;
  for (let k = -2; k <= 2; k++) this.finial(o.x + Math.cos(r) * k * w * 0.2, o.y + Math.sin(r) * k * w * 0.2, hh + d * 0.5, 0.45, 'accent');
  this.nav.obstacle({ poly: rectPts(o.x, o.y, o.w, o.d, rot), bottom: g + 3.2, top: hh + 3 });
  // passage through the middle along local y
  const side = rectPts(o.x, o.y, o.w, o.d, rot);
  const pw = o.passage ?? 2.6;
  const cc = Math.cos(r), ss = Math.sin(r);
  for (const sg of [-1, 1]) {
    const cx = o.x + cc * sg * (pw / 2 + (o.w / 2 - pw / 2) / 2), cy = o.y + ss * sg * (pw / 2 + (o.w / 2 - pw / 2) / 2);
    this.nav.obstacle({ poly: rectPts(cx, cy, o.w / 2 - pw / 2, o.d, rot), bottom: g - 1, top: g + baseH });
  }
  for (const sg of [-1, 1]) {
    const nx = -ss * sg * (o.d / 2 + 0.04), ny = cc * sg * (o.d / 2 + 0.04);
    const P = (u, v) => V(o.x + cc * u + nx, o.y + ss * u + ny, g + v);
    this.decal.quadAway(P(-pw / 2, 0), P(pw / 2, 0), P(pw / 2, 3.2), P(-pw / 2, 3.2), this.pal.window, V(o.x, o.y, g + 1));
  }
  this.plan.polys.push({ pts: side, cls: 'temple' });
  this.occupy(side, 0.3);
};

// ---------------------------------------------------------------- towers & minarets
// stambha / storeyed tower: {x,y,w,storeys,sh,taper,rot,color,top:'chhatri'|'dome'|'pyramid', balconies}
W.tower = function (o) {
  const col = this.col(o.color, 'stone');
  const M = this.solid;
  const rot = o.rot ?? 0;
  const g = o.base ?? minGround(this, rectPts(o.x, o.y, o.w, o.w, rot)) - 0.3;
  const n = o.storeys ?? 9, sh = o.sh ?? 3.4, taper = o.taper ?? 0.03;
  let w = o.w, h = g;
  const plinth = o.plinth ?? 1.2;
  M.box(o.x, o.y, o.w * 1.6, o.w * 1.6, g - 1, g + plinth, rot, shade(col, 0.9));
  this.nav.obstacle({ poly: rectPts(o.x, o.y, o.w * 1.6, o.w * 1.6, rot), bottom: g - 2, top: g + plinth - 0.05 });
  this.nav.surface({ poly: rectPts(o.x, o.y, o.w * 1.6, o.w * 1.6, rot), h: g + plinth, tag: TAG.terrace });
  h = g + plinth;
  for (let i = 0; i < n; i++) {
    M.box(o.x, o.y, w, w, h, h + sh, rot, i % 2 ? col : shade(col, 1.04));
    if (o.cross !== false) {
      // projecting central bays (cruciform section)
      M.box(o.x, o.y, w * 1.12, w * 0.45, h, h + sh * 0.85, rot, shade(col, 0.97));
      M.box(o.x, o.y, w * 0.45, w * 1.12, h, h + sh * 0.85, rot, shade(col, 0.97));
    }
    if (o.balconies !== false) M.box(o.x, o.y, w * 1.22, w * 1.22, h + sh - 0.28, h + sh, rot, shade(col, 1.1));
    // windows decals
    this.facadeOpenings(rectPts(o.x, o.y, w * 1.12 + 0.01, w * 0.45, rot), h, sh, 1, { spacing: 1, w: 0.55, h: sh * 0.42, style: 'arch' });
    this.facadeOpenings(rectPts(o.x, o.y, w * 0.45, w * 1.12 + 0.01, rot), h, sh, 1, { spacing: 1, w: 0.55, h: sh * 0.42, style: 'arch' });
    h += sh; w *= 1 - taper;
  }
  const top = o.top || 'chhatri';
  if (top === 'chhatri') this.chhatri({ x: o.x, y: o.y, base: h, size: w * 1.05, h: sh * 0.75, dome: o.topDome || 'half', color: o.color || 'stone' });
  else if (top === 'dome') this.dome({ x: o.x, y: o.y, r: w * 0.5, base: h, drum: 0.4, shape: 'half', color: o.color || 'stone' });
  else if (top !== 'none') M.hip(o.x, o.y, w, w, h, h + w * 0.7, rot, col);
  this.nav.obstacle({ poly: rectPts(o.x, o.y, o.w * 1.15, o.w * 1.15, rot), bottom: g + plinth - 0.5, top: h + 5 });
  this.plan.polys.push({ pts: rectPts(o.x, o.y, o.w * 1.12, o.w * 1.12, rot), cls: 'tower' });
  this.occupy(rectPts(o.x, o.y, o.w * 1.6, o.w * 1.6, rot), 0.4);
  return { top: h };
};

// minaret: {x,y,r,h,base?,rings:[0.3,0.55,0.8], color, top:'cupola'|'dome', seg}
W.minaret = function (o) {
  const col = this.col(o.color, 'stone');
  const M = this.solid;
  const g = o.base ?? this.ground(o.x, o.y) - 0.3;
  const r = o.r ?? 1.4, H = o.h ?? 20, seg = o.seg ?? 12;
  const rings = o.rings || [0.35, 0.65, 0.9];
  let last = g, lastR = r * 1.15;
  M.frustum(o.x, o.y, r * 1.4, r * 1.3, g - 0.5, g + 1.2, seg, shade(col, 0.9));
  last = g + 1.2; lastR = r;
  for (const f of rings) {
    const hh = g + H * f;
    const rr = r * (1 - 0.32 * f);
    M.frustum(o.x, o.y, lastR, rr, last, hh, seg, col, { top: false });
    // balcony
    M.frustum(o.x, o.y, rr * 1.08, rr * 1.6, hh - 0.5, hh, seg, shade(col, 1.08));
    M.frustum(o.x, o.y, rr * 1.6, rr * 1.6, hh, hh + 0.7, seg, shade(col, 0.96), { top: false });
    last = hh; lastR = rr * 0.92;
  }
  const hTop = g + H;
  M.frustum(o.x, o.y, lastR, lastR * 0.9, last, hTop, seg, col);
  if ((o.top || 'cupola') === 'cupola') this.chhatri({ x: o.x, y: o.y, base: hTop, size: lastR * 1.5, h: 1.4, cols: 6, dome: 'onion', color: o.color || 'stone', plinth: 0.15 });
  else this.dome({ x: o.x, y: o.y, r: lastR * 1.05, base: hTop, drum: 0.2, shape: 'onion', color: o.color || 'stone' });
  this.nav.obstacle({ circle: [o.x, o.y, r * 1.35], bottom: g - 1, top: hTop + 4 });
  this.plan.circles.push({ x: o.x, y: o.y, r: r * 1.3, cls: 'tower' });
  this.occupy(regular(o.x, o.y, r * 1.4, 8), 0.4);
  return { top: hTop };
};

// mosque: {x,y,w,d,rot,domes,minarets,color,domeColor, court:{d,wall}, h}
W.mosque = function (o) {
  const rot = o.rot ?? 0;
  const r = rot * DEG, c = Math.cos(r), s = Math.sin(r);
  const T = (u, v) => [o.x + u * c - v * s, o.y + u * s + v * c];
  const h = o.h ?? 6;
  // prayer hall at back (+v = qibla side)
  const hall = this.building({ rect: [o.x, o.y, o.w, o.d, rot], h, color: o.color, roof: 'flat', parapet: { h: 0.7, t: 0.3 }, merlon: o.merlon, windows: { style: 'arch', spacing: 2.4, w: 1.4, h: h * 0.6, sill: 0.4, rows: [0] }, kind: 'mosque', base: o.base });
  const nd = o.domes ?? 3;
  if (nd > 0) {
    for (let i = 0; i < nd; i++) {
      const u = nd === 1 ? 0 : -o.w / 2 + o.w * (i + 0.5) / nd;
      const p = T(u, 0);
      const rr = i === Math.floor(nd / 2) && nd % 2 ? Math.min(o.w / nd, o.d) * 0.42 : Math.min(o.w / nd, o.d) * 0.34;
      this.dome({ x: p[0], y: p[1], r: rr, base: hall.top, shape: o.domeShape || 'onion', color: o.domeColor || o.color, drum: rr * 0.3 });
    }
  }
  const nm = o.minarets ?? 2;
  if (nm) {
    const spots = nm === 4 ? [[-1, -1], [1, -1], [1, 1], [-1, 1]] : [[-1, -1], [1, -1]];
    for (const [u, v] of spots) {
      const p = T(u * (o.w / 2 + 0.2), v * (o.d / 2 + 0.2));
      this.minaret({ x: p[0], y: p[1], r: o.minR ?? 0.8, h: o.minH ?? h * 2.4, rings: [0.55, 0.85], color: o.color || 'plaster', top: 'cupola', base: hall.base });
    }
  }
  if (o.court) {
    const cd = o.court.d ?? o.d * 1.2;
    const cc = T(0, -o.d / 2 - cd / 2);
    const cp = rectPts(cc[0], cc[1], o.w + 1, cd, rot);
    const g = minGround(this, cp);
    this.solid.prism(cp, g - 1, g + 0.4, this.col('paved'));
    this.nav.obstacle({ poly: cp, bottom: g - 2, top: g + 0.35 });
    this.nav.surface({ poly: cp, h: g + 0.4, tag: TAG.court });
    if (o.court.tank) this.tank({ x: cc[0], y: cc[1], r: Math.min(o.w, cd) * 0.15, n: 8, rim: g + 0.4, waterDepth: 0.6, tiers: 1 });
    this.plan.polys.push({ pts: cp, cls: 'court' });
  }
  return hall;
};

// ---------------------------------------------------------------- houses (scatter)
// {poly, count, size:[min,max], h:[min,max], colors:[], roof:'flat'|'tiled'|'mix', rot, align, spacing, seed}
W.houses = function (o) {
  const r = rng(o.seed ?? (this.seed * 101 + 7));
  const bb = bbox(o.poly);
  const placed = [];
  const tries = (o.count ?? 20) * 30;
  const colors = (o.colors || ['plaster']).map((cc) => cc);
  for (let t = 0; t < tries && placed.length < (o.count ?? 20); t++) {
    const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
    if (!pointInPoly(x, y, o.poly)) continue;
    const w = lerp(o.size?.[0] ?? 4, o.size?.[1] ?? 8, r()), d = lerp(o.size?.[0] ?? 4, o.size?.[1] ?? 8, r());
    const rot = (o.rot ?? 0) + (o.align === false ? r() * 180 : (r() < 0.5 ? 0 : 90)) + (o.jitterRot ?? 4) * (r() - 0.5);
    const fp = rectPts(x, y, w, d, rot);
    if (!fp.every((p) => pointInPoly(p[0], p[1], o.poly))) continue;
    if (!fp.every((p) => this.isFree(p[0], p[1], o.spacing ?? 1.4)) || !this.isFree(x, y, o.spacing ?? 1.4)) continue;
    // slope check
    let lo = Infinity, hi = -Infinity; for (const p of fp) { const g = this.ground(p[0], p[1]); lo = Math.min(lo, g); hi = Math.max(hi, g); }
    if (hi - lo > (o.maxSlope ?? 2.5)) continue;
    if (this.seaLevel != null && lo < this.seaLevel + 0.8) continue;
    const storeys = Math.max(1, Math.round(lerp(o.h?.[0] ?? 1, o.h?.[1] ?? 2, r())));
    const sh = o.storeyH ?? 3.2;
    let roof = o.roof || 'flat';
    if (roof === 'mix') roof = r() < 0.5 ? 'flat' : 'tiled';
    const colr = colors[(r() * colors.length) | 0];
    const ruinIt = o.ruin && r() < (o.ruinShare ?? 1);
    this.building({ rect: [x, y, w, d, rot], storeys, storeyH: sh, color: colr, roof, roofColor: o.roofColor, ruin: ruinIt, h: ruinIt ? storeys * sh * (o.ruinH ?? 0.7) : undefined, thick: 0.6, doors: [{ edge: (r() * 4) | 0, at: 0.5, w: 1.6 }], parapet: roof === 'flat' ? { h: 0.6, t: 0.25 } : false, windows: { spacing: 2.4, w: 0.7, h: 1.1, style: o.windowStyle || 'rect' }, kind: 'house', cornice: storeys > 1, chhatris: o.chhatriChance && r() < o.chhatriChance ? 'corners' : null, chhatriSize: 1.4, chhatriH: 1.5, jharokhas: o.jharokhaChance && r() < o.jharokhaChance ? { every: 5, size: 1.4, rows: [Math.min(1, storeys - 1)] } : null, pad: 0.6 });
    placed.push(fp);
  }
  return placed;
};

// every roofed building (and, at half capacity, a ruin) can shelter a garrison: men per square metre of usable floor
// by use (barracks 4 m², house 8, palace 10, temple or mosque 6, granary and magazine a small guard only);
// each figure stands for five men
const SPACE = { barracks: 4, house: 8, palace: 10, temple: 6, mosque: 6, building: 7, pavilion: 9, ruin: 9 };
const LABEL = { barracks: 'Barracks', house: 'House', palace: 'Palace', temple: 'Temple', mosque: 'Mosque', building: 'Building', pavilion: 'Pavilion', granary: 'Granary', ruin: 'Ruin' };
W.registerShelter = function (poly, kind, storeys, base, ruin, name) {
  let area = 0; for (let i = 0; i < poly.length; i++) { const p = poly[i], q = poly[(i + 1) % poly.length]; area += p[0] * q[1] - q[0] * p[1]; } area = Math.abs(area) / 2;
  if (area < 12) return;
  const floor = area * 0.7 * Math.max(1, storeys) * (ruin ? 0.5 : 1);
  const men = kind === 'granary' ? 10 : Math.round(floor / (SPACE[kind] || 7));
  const cap = Math.max(1, Math.min(60, Math.round(men / 5)));
  // a door point a little outside the middle of the first edge
  const a = poly[0], b = poly[1], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  let cx = 0, cy = 0; for (const p of poly) { cx += p[0] / poly.length; cy += p[1] / poly.length; }
  const dx = mx - cx, dy = my - cy, dl = Math.hypot(dx, dy) || 1;
  const x = mx + dx / dl * 1.4, y = my + dy / dl * 1.4;
  this.garrisons.push({ name: name || LABEL[kind] || 'Building', x, y, h: this.ground(x, y), cap, men, kind: 'building', use: kind, poly, area, ruin });
};
