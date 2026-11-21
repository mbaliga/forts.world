import { TAG } from '../core/nav.js';
// Shared helpers for level authoring.
import { DEG, rectPts, ellipsePts, regularPoly, makeNoise } from '../core/geom.js';
export { rectPts, ellipsePts, regularPoly };

export const onEllipse = (rx, ry, deg, cx = 0, cy = 0) => [cx + rx * Math.cos(deg * DEG), cy + ry * Math.sin(deg * DEG)];

// stairs running along the inner face of a wall, ending level with the wall-walk.
// at: plan point near the wall; dir: +1 runs with the wall's direction, -1 against; run: horizontal length
// A flight up the inner face of a wall: built against the wall (so only its open side has a parapet), with a
// flagged apron at its foot and a landing at the top that joins the wall-walk.
export function wallStairs(W, wall, { at, dir = 1, run = 18, w = 2.6, top = null, base = null, gap = 0.02 }) {
  const s = W.wallS(wall, at[0], at[1]);
  const f = W.wallFrame(wall, s);
  const thick = wall.o.thick ?? 3;
  const off = thick / 2 + w / 2 + gap;
  const cx = f.x - f.ox * off, cy = f.y - f.oy * off;
  const tx = f.tx * dir, ty = f.ty * dir;
  const x1 = cx, y1 = cy, x0 = cx - tx * run, y0 = cy - ty * run;
  const h1 = top ?? W.wallTopAt(wall, f.x, f.y);
  const h0 = base ?? W.ground(x0, y0);
  // which side of the flight the wall is on: that side gets no parapet
  const nx = -ty, ny = tx, wallSide = (nx * f.ox + ny * f.oy) > 0 ? 1 : -1;
  const color = wall.o.stairColor || wall.o.color || 'stone';
  const st = W.stairs({ from: [x0, y0, h0], to: [x1, y1, h1], w, color, side: -wallSide });
  // the landing: level with the walk, as long as the stair is wide, reaching across to the wall's inner face
  const L = w + 0.4, inW = w / 2 + gap + 0.35, outW = w / 2 + 0.35;
  const P = (a, b) => [x1 + tx * a + nx * b * wallSide, y1 + ty * a + ny * b * wallSide];
  const land = [P(-0.05, -outW), P(L, -outW), P(L, inW), P(-0.05, inW)];
  W.platform({ poly: land, h: h1, color, tag: TAG.rampart, planCls: 'stairs' });
  // a low parapet along the landing's open side and its far end
  const pp = [P(0, -outW), P(L, -outW), P(L, -outW + 0.35), P(0, -outW + 0.35)];
  W.mason.prism(pp, h1 - 0.02, h1 + 0.8, W.col(color), {});
  W.nav.obstacle({ poly: pp, bottom: h1 - 0.5, top: h1 + 0.8 });
  return st;
}

// evenly spaced bastions along a closed wall by ellipse angle list
export function bastionsAt(W, wall, angles, ellipse, opts = {}) {
  const [rx, ry, cx = 0, cy = 0] = ellipse;
  const out = [];
  for (const a of angles) {
    const p = onEllipse(rx, ry, typeof a === 'number' ? a : a.a, cx, cy);
    const extra = typeof a === 'number' ? {} : a;
    out.push(W.bastion(Object.assign({ at: p, wall }, opts, extra)));
  }
  return out;
}

// scatter helper: deterministic list of points inside a polygon
export function scatterIn(poly, n, seed = 3) {
  const nz = makeNoise(seed);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const out = [];
  let k = 0;
  while (out.length < n && k < n * 50) {
    k++;
    const x = x0 + (nz(k * 1.7, 3.1) * 0.5 + 0.5) * (x1 - x0), y = y0 + (nz(5.3, k * 1.3) * 0.5 + 0.5) * (y1 - y0);
    out.push([x, y]);
  }
  return out;
}
