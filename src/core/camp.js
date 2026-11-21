// Garrison and siege props: tents, grain stores, livestock pens, armoury stores, and fire/smoke/gunfire emitters.
import * as THREE from 'three';
import { World, instMatrix, yawOf, regular } from './world.js';
import { TAG } from './nav.js';
import { Mesher, C, shade, mix, V, smoothGeometry } from './mesher.js';
import { rng, DEG, TAU, rectPts, pointInPoly, bbox } from './geom.js';

const W = World.prototype;
const ROT = (x, y, cx, cy, r) => { const c = Math.cos(r * DEG), s = Math.sin(r * DEG); return [cx + x * c - y * s, cy + x * s + y * c]; };

// ---------------------------------------------------------------- tents
// {x, y, w, d, rot, h, wallH, color, band, style:'ridge'|'rawati'|'shamiana', door}
W.tent = function (o) {
  const w = o.w ?? 4, d = o.d ?? 3, rot = o.rot ?? 0, style = o.style || 'ridge';
  const g = o.h0 ?? this.ground(o.x, o.y);
  const canvas = this.col(o.color || '#e7e0cc'), band = o.band ? this.col(o.band) : null;
  const M = this.solid;
  const wallH = o.wallH ?? (style === 'ridge' ? 0.5 : 1.5), H = o.h ?? (style === 'ridge' ? 2.3 : 3.2);
  const poly = rectPts(o.x, o.y, w, d, rot);
  if (style === 'shamiana') {
    // open-sided canopy on poles
    for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, 1], [0, -1], [0, 1]]) {
      const [px, py] = ROT(u * w / 2 * 0.95, v * d / 2 * 0.95, o.x, o.y, rot);
      M.frustum(px, py, 0.06, 0.05, g, g + H - 0.6, 5, this.col('#5a4030'));
    }
    M.hip(o.x, o.y, w, d, g + H - 0.7, g + H + 0.4, rot, canvas, w * 0.4);
    if (band) M.box(o.x, o.y, w + 0.05, d + 0.05, g + H - 1.0, g + H - 0.7, rot, band, { top: false });
    this.occupy(poly, 0.3);
    this.plan.polys.push({ pts: poly, cls: 'building' });
    return;
  }
  // walls of canvas (slightly tapered), roof: ridge (long) or pyramid (rawati)
  M.prism(poly, g - 0.05, g + wallH, shade(canvas, 0.95));
  if (style === 'ridge') M.hip(o.x, o.y, w + 0.3, d + 0.3, g + wallH, g + H, rot, canvas, w * 0.82);
  else M.hip(o.x, o.y, w + 0.4, d + 0.4, g + wallH, g + H, rot, canvas, w * 0.15);
  if (band) M.box(o.x, o.y, w + 0.42, d + 0.42, g + wallH - 0.02, g + wallH + 0.22, rot, band, { top: false });
  // door: a dark opening on the front (local -y) face with a flap tied back
  const fw = Math.min(1.2, w * 0.35), fh = Math.min(wallH + (H - wallH) * 0.55, 1.9);
  const [dx, dy] = ROT(0, -d / 2 - 0.03, o.x, o.y, rot);
  const tx = Math.cos(rot * DEG), ty = Math.sin(rot * DEG);
  const P = (u, h) => V(dx + tx * u, dy + ty * u, g + h);
  this.decal.triAway(P(-fw / 2, 0), P(fw / 2, 0), P(0, fh), [0.07, 0.06, 0.05], V(o.x, o.y, g + 1));
  this.decal.triAway(P(fw / 2, 0), P(fw / 2 + 0.35, 0), P(0, fh), shade(canvas, 0.8), V(o.x, o.y, g + 1));
  // pole finial
  M.frustum(o.x, o.y, 0.05, 0.03, g + H, g + H + 0.45, 4, this.col('#5a4030'));
  this.nav.obstacle({ poly, bottom: g - 1, top: g + H });
  this.plan.polys.push({ pts: poly, cls: 'building' });
  this.occupy(poly, 0.5);
};

// rows of tents on a grid inside a polygon
W.tentLines = function (o) {
  const r = rng(o.seed ?? 5), placed = [];
  const bb = bbox(o.poly), sp = o.spacing ?? [6, 5.5];
  for (let y = bb.y0 + sp[1] / 2; y < bb.y1; y += sp[1]) for (let x = bb.x0 + sp[0] / 2; x < bb.x1; x += sp[0]) {
    const jx = x + (r() - 0.5) * 0.8, jy = y + (r() - 0.5) * 0.8;
    if (!pointInPoly(jx, jy, o.poly) || !this.isFree(jx, jy, 2.6)) continue;
    const sl = Math.abs(this.ground(jx + 2, jy) - this.ground(jx - 2, jy)) + Math.abs(this.ground(jx, jy + 2) - this.ground(jx, jy - 2));
    if (sl > 1.2) continue;
    if (o.avoid && o.avoid.some((p) => pointInPoly(jx, jy, p))) continue;
    if (r() < (o.skip ?? 0.12)) continue;
    const big = r() < (o.officer ?? 0.12);
    this.tent({ x: jx, y: jy, w: big ? 4.6 : 3.6 + r() * 0.6, d: big ? 4.2 : 2.6 + r() * 0.4, rot: (o.rot ?? 0) + (r() - 0.5) * 6, style: big ? 'rawati' : 'ridge', color: big ? '#efe8d6' : (r() < 0.5 ? '#e4dcc6' : '#d9cfb5'), band: big ? (o.band || '#9e2a22') : null });
    placed.push([jx, jy]);
    if (o.max && placed.length >= o.max) break;
  }
  return placed;
};

// ---------------------------------------------------------------- stores
function sackGeometry() {
  const g = new THREE.BoxGeometry(1, 1, 1, 2, 1, 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); const k = 1 - 0.18 * (Math.abs(x) * 2) * (Math.abs(z) * 2); p.setXYZ(i, x * (1 - 0.12 * Math.abs(y) * 2), y * k, z * (1 - 0.1 * Math.abs(y) * 2)); }
  g.translate(0, 0.5, 0);
  const M = new Mesher(0.06); M.geometry(g, null, (q) => (q[1] > 0.7 ? [1, 1, 1] : [0.86, 0.86, 0.84])); return M.toGeometry();
}
// stack of grain sacks: {x, y, rot, cols, rows, layers, color}
W.sacks = function (o) {
  const B = this.batch('sack', sackGeometry, { cast: true });
  const g = o.h0 ?? this.ground(o.x, o.y), rot = o.rot ?? 0;
  const sw = 0.95, sd = 0.6, sh = 0.36;
  const cols = o.cols ?? 4, rows = o.rows ?? 2, layers = o.layers ?? 3;
  const col = this.col(o.color || '#b59a6a');
  const r = this.rand;
  for (let l = 0; l < layers; l++) {
    const c = cols - l, rr = Math.max(1, rows - (l > 1 ? 1 : 0));
    for (let i = 0; i < c; i++) for (let j = 0; j < rr; j++) {
      const u = (i - (c - 1) / 2) * sw * 1.02, v = (j - (rr - 1) / 2) * sd * 1.05;
      const [x, y] = ROT(u, v, o.x, o.y, rot);
      const t = 0.9 + r() * 0.18;
      B.add(instMatrix(x, y, g + l * sh * 0.92, rot + (r() - 0.5) * 8, sw, sh, sd), [col[0] * t, col[1] * t, col[2] * t]);
    }
  }
  const poly = rectPts(o.x, o.y, cols * sw + 0.3, rows * sd + 0.3, rot);
  this.nav.obstacle({ poly, bottom: g - 1, top: g + layers * sh });
  this.occupy(poly, 0.3);
};
// kanagi: woven grain bin plastered with mud, under a conical thatch hood
W.grainBin = function (o) {
  const g = this.ground(o.x, o.y), r = o.r ?? 1.1, h = o.h ?? 2.2;
  const mud = this.col(o.color || '#9a7a52'), thatch = this.col('#b59a5a');
  this.solid.frustum(o.x, o.y, r * 0.92, r, g - 0.1, g + h, 12, mud, { top: false });
  this.solid.frustum(o.x, o.y, r * 0.98, r * 0.98, g + h * 0.33, g + h * 0.36, 12, shade(mud, 0.8), { top: false });
  this.solid.frustum(o.x, o.y, r * 0.98, r * 0.98, g + h * 0.66, g + h * 0.69, 12, shade(mud, 0.8), { top: false });
  this.solid.lathe(o.x, o.y, [[r * 1.3, g + h], [r * 0.9, g + h + 0.45], [0.05, g + h + 1.1], [0.01, g + h + 1.15]], 12, thatch);
  this.nav.obstacle({ circle: [o.x, o.y, r * 1.1], bottom: g - 1, top: g + h + 1 });
  this.occupy(regular(o.x, o.y, r * 1.3, 8), 0.3);
};
W.haystack = function (o) {
  const g = this.ground(o.x, o.y), r = o.r ?? 1.6;
  this.solid.lathe(o.x, o.y, [[r, g - 0.1], [r * 1.02, g + r * 0.6], [r * 0.7, g + r * 1.2], [0.01, g + r * 1.55]], 10, this.col('#c2a560'));
  this.nav.obstacle({ circle: [o.x, o.y, r], bottom: g - 1, top: g + r * 1.5 });
  this.occupy(regular(o.x, o.y, r + 0.3, 8), 0.3);
};
// earthenware water pots (matkas) in rows
W.pots = function (o) {
  const B = this.batch('pot', () => { const g = new THREE.SphereGeometry(0.5, 8, 6); g.scale(1, 0.85, 1); g.translate(0, 0.42, 0); const M = new Mesher(0.08); M.geometry(g, null, [1, 1, 1]); return M.toGeometry(); }, { cast: true });
  const g = this.ground(o.x, o.y), n = o.n ?? 6, rot = o.rot ?? 0, col = this.col(o.color || '#a8582f');
  for (let i = 0; i < n; i++) { const [x, y] = ROT((i % 4) * 0.6, Math.floor(i / 4) * 0.6, o.x, o.y, rot); B.add(instMatrix(x, y, g, 0, 0.55, 0.55, 0.55), shade(col, 0.9 + this.rand() * 0.2)); }
  this.nav.obstacle({ poly: rectPts(o.x + 0.9, o.y + 0.3, 2.6, 1.6, rot), bottom: g - 1, top: g + 0.6 });
};
// round shot in a square-based pyramid
W.shotPile = function (o) {
  const B = this.batch('ball', () => { const g = new THREE.SphereGeometry(0.5, 10, 7); g.translate(0, 0.5, 0); const M = new Mesher(0); M.geometry(g.toNonIndexed(), null, [1, 1, 1]); return smoothGeometry(M.toGeometry(), 80); }, { cast: true });
  const h = o.h ?? this.ground(o.x, o.y), n = o.n ?? 4, d = o.d ?? 0.3, col = this.col(o.color || 'iron');
  // a low timber frame keeps the bottom course from rolling
  const fw = n * d + 0.16; this.solid.box(o.x, o.y, fw, fw, h - 0.02, h + 0.1, 0, this.col('#5a3d26'), { top: false });
  for (let l = 0; l < n; l++) { const k = n - l; for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) { const t = 0.85 + ((i * 7 + j * 3 + l) % 5) * 0.06; B.add(instMatrix(o.x + (i - (k - 1) / 2) * d, o.y + (j - (k - 1) / 2) * d, h + 0.04 + l * d * 0.72, 0, d, d, d), [col[0] * t + 0.02, col[1] * t, col[2] * t * 0.95]); } }
  this.nav.obstacle({ circle: [o.x, o.y, n * d * 0.6], bottom: h - 0.5, top: h + n * d });
};
// powder kegs
W.kegs = function (o) {
  const B = this.batch('keg', () => { const g = new THREE.CylinderGeometry(0.42, 0.42, 1, 9); g.translate(0, 0.5, 0); const M = new Mesher(0.04); M.geometry(g, null, (p) => (Math.abs(p[1] - 0.2) < 0.08 || Math.abs(p[1] - 0.8) < 0.08 ? [0.5, 0.5, 0.5] : [1, 1, 1])); const b = new THREE.CylinderGeometry(0.46, 0.46, 0.07, 9); b.translate(0, 0.22, 0); M.geometry(b, null, [0.35, 0.33, 0.3]); const b2 = b.clone(); b2.translate(0, 0.56, 0); M.geometry(b2, null, [0.35, 0.33, 0.3]); return M.toGeometry(); }, { cast: true });
  const g = this.ground(o.x, o.y), n = o.n ?? 5, rot = o.rot ?? 0, col = this.col(o.color || '#7a5634');
  for (let i = 0; i < n; i++) { const [x, y] = ROT((i % 3) * 0.95, Math.floor(i / 3) * 0.95, o.x, o.y, rot); B.add(instMatrix(x, y, g, this.rand() * 360, 0.85, 0.95, 0.85), shade(col, 0.9 + this.rand() * 0.2)); }
  this.nav.obstacle({ poly: rectPts(o.x + 0.95, o.y + 0.5, 3.2, 2.2, rot), bottom: g - 1, top: g + 1 });
};
// arms rack: posts, cross-bar and a row of spears and matchlocks leaning on it
W.armsRack = function (o) {
  const g = this.ground(o.x, o.y), L = o.len ?? 3, rot = o.rot ?? 0, wood = this.col('#5a3d26'), M = this.solid;
  for (const u of [-L / 2, L / 2]) { const [x, y] = ROT(u, 0, o.x, o.y, rot); M.box(x, y, 0.14, 0.14, g, g + 1.6, rot, wood); }
  const [cx, cy] = ROT(0, 0, o.x, o.y, rot); M.box(cx, cy, L + 0.2, 0.1, g + 1.35, g + 1.48, rot, wood);
  const n = Math.round(L / 0.22);
  for (let i = 0; i < n; i++) {
    const u = -L / 2 + 0.15 + i * (L - 0.3) / (n - 1), musket = i % 3 === 1;
    const len = musket ? 1.7 : 2.6;
    const geo = new THREE.CylinderGeometry(0.025, 0.03, len, 4); geo.translate(0, len / 2, 0);
    const [x, y] = ROT(u, 0.42, o.x, o.y, rot);
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, g, -y), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rot * DEG, 0.0)), new THREE.Vector3(1, 1, 1)).multiply(new THREE.Matrix4().makeRotationX(0.3));
    M.geometry(geo, m, musket ? this.col('#3e2c20') : this.col('#6b4c32'));
    if (!musket) { const tip = new THREE.ConeGeometry(0.05, 0.25, 4); tip.translate(0, len + 0.12, 0); M.geometry(tip, m, this.col('#c9c3b5')); }
  }
  this.nav.obstacle({ poly: rectPts(o.x, o.y, L + 0.4, 1.2, rot), bottom: g - 1, top: g + 2 });
  this.occupy(rectPts(o.x, o.y, L + 0.4, 1.2, rot), 0.3);
};
// wattle livestock pen: posts and two rails round a polygon, with a gap for the gate
W.pen = function (o) {
  const poly = o.poly, n = poly.length, wood = this.col('#6b5038'), M = this.solid;
  this.pens.push({ poly, gate: o.gate ?? 0, kind: o.kind || 'any', name: o.name || (o.kind === 'chicken' ? 'Hen coop' : 'Pen'), cap: o.cap ?? 14 });
  for (const k of o.kind === 'chicken' ? ['chicken', 'rooster', 'chick'] : o.kind === 'rabbit' ? ['rabbit'] : ['sheep', 'goat', 'cow']) this.reserve[k] = (this.reserve[k] || 0) + 8;
  const gate = o.gate ?? 0;
  for (let i = 0; i < n; i++) {
    const a = poly[i], b = poly[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const k = Math.max(1, Math.round(L / 1.6));
    for (let j = 0; j < k; j++) {
      const t0 = j / k, t1 = (j + 1) / k;
      if (i === gate && Math.abs((t0 + t1) / 2 - 0.5) < 0.12) continue;
      const p = [a[0] + (b[0] - a[0]) * t0, a[1] + (b[1] - a[1]) * t0], q = [a[0] + (b[0] - a[0]) * t1, a[1] + (b[1] - a[1]) * t1];
      const g0 = this.ground(p[0], p[1]), g1 = this.ground(q[0], q[1]);
      M.frustum(p[0], p[1], 0.07, 0.06, g0 - 0.2, g0 + 1.15, 5, wood);
      const yaw = Math.atan2(q[1] - p[1], q[0] - p[0]) / DEG, mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, gm = (g0 + g1) / 2;
      for (const hh of [0.45, 0.95]) M.box(mx, my, L / k, 0.06, gm + hh, gm + hh + 0.08, yaw, shade(wood, 1.1));
      const nx = -(q[1] - p[1]) / (L / k) * 0.12, ny = (q[0] - p[0]) / (L / k) * 0.12;
      this.nav.obstacle({ poly: [[p[0] + nx, p[1] + ny], [q[0] + nx, q[1] + ny], [q[0] - nx, q[1] - ny], [p[0] - nx, p[1] - ny]], bottom: gm - 1, top: gm + 1.2 });
    }
  }
  this.plan.lines.push({ pts: poly.concat([poly[0]]), cls: 'fence' });
};
// feeding trough
W.trough = function (o) {
  const g = this.ground(o.x, o.y);
  this.solid.box(o.x, o.y, o.len ?? 2.4, 0.6, g - 0.1, g + 0.55, o.rot ?? 0, this.col('stone'));
  this.decal.cap(rectPts(o.x, o.y, (o.len ?? 2.4) - 0.2, 0.4, o.rot ?? 0), g + 0.56, this.col('#5d7a35'));
  this.nav.obstacle({ poly: rectPts(o.x, o.y, (o.len ?? 2.4), 0.7, o.rot ?? 0), bottom: g - 1, top: g + 0.6 });
};

// ---------------------------------------------------------------- fire, smoke, gunfire
W.smoke = function (o) {
  const h = o.h ?? this.ground(o.x, o.y);
  this.particles.push({ kind: 'smoke', x: o.x, y: o.y, h, n: o.n ?? 26, stream: true, period: o.life ?? 9, life: [(o.life ?? 9) * 0.8, o.life ?? 9], up: [o.rise ?? 1.1, (o.rise ?? 1.1) * 1.6], outV: [0, 0], side: 0.35, wind: o.wind ?? [0.55, 0.25], g: 0, size: o.size ?? [0.8, 5.5], color: o.color || '#8c8780', alpha: o.alpha ?? 0.42, jitter: 0.4, seed: o.x * 3 + o.y });
};
W.cookfire = function (o) {
  const g = this.ground(o.x, o.y);
  for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; this.solid.box(o.x + Math.cos(a) * 0.55, o.y + Math.sin(a) * 0.55, 0.3, 0.25, g - 0.05, g + 0.22, a / DEG, this.col('#4a4844')); }
  this.particles.push({ kind: 'fire', x: o.x, y: o.y, h: g + 0.15, n: 14, stream: true, period: 0.7, life: [0.45, 0.7], up: [0.8, 1.6], outV: [0, 0], side: 0.25, g: 0, size: [0.55, 0.15], color: '#ff9a3a', alpha: 0.95, flash: true, jitter: 0.5, seed: o.x + o.y * 3 });
  if (o.pot !== false) this.solid.lathe(o.x, o.y, [[0.01, g + 0.25], [0.42, g + 0.32], [0.48, g + 0.6], [0.36, g + 0.82], [0.3, g + 0.86]], 9, this.col('#3a3028'));
  this.smoke({ x: o.x, y: o.y, h: g + 0.9, n: 18, life: 7, size: [0.5, 3.6], alpha: 0.33, color: '#a29d95' });
  this.nav.obstacle({ circle: [o.x, o.y, 0.8], bottom: g - 1, top: g + 1 });
};
// a gun firing on a cycle: flash at the muzzle, a bank of white powder smoke drifting off; optional fall of shot
W.gunfire = function (o) {
  const per = o.period ?? 14, ph = o.phase ?? 0, dir = (o.dir ?? 0) * DEG, ox = Math.cos(dir), oy = Math.sin(dir);
  const mx = o.x + ox * (o.reach ?? 1.6), my = o.y + oy * (o.reach ?? 1.6), h = o.h;
  this.particles.push({ kind: 'flash', x: mx, y: my, h, n: 10, period: per, phase: ph, spread: 0.002, life: [0.1, 0.22], up: [0, 0.6], outV: [3, 9], out: [ox, oy], side: 1.2, g: 0, size: [1.6, 0.6], color: '#ffd27a', alpha: 1, flash: true, jitter: 0.2, seed: o.x * 7 + o.y });
  this.particles.push({ kind: 'gunsmoke', x: mx, y: my, h, n: 60, period: per, phase: ph, spread: 0.015, life: [3.5, 8], up: [0.2, 1.4], outV: [1.5, 11], out: [ox, oy], side: 2.8, drag: 1.3, wind: [0.6, 0.25], g: -0.08, size: [0.9, 5.2], color: '#ece9e2', alpha: 0.42, jitter: 0.3, seed: o.x * 5 + o.y * 3 });
  if (o.splash) {
    const [sx, sy] = o.splash, tof = o.flight ?? 2.2;
    this.particles.push({ kind: 'splash', x: sx, y: sy, h: (this.seaLevel ?? 0) + 0.1, n: 26, period: per, phase: ph + tof, spread: 0.01, life: [1.0, 1.8], up: [5, 11], outV: [0, 1.2], out: [1, 0], side: 1.4, g: 9.8, size: [0.6, 2.2], color: '#f2f5f4', alpha: 0.85, jitter: 0.6, seed: sx * 3 + sy });
  }
};

// ---------------------------------------------------------------- arms and armour lying about the camp
const IRON = '#3a3633', BRASS = '#b08a3a', LEATHER = '#6a4528', CLOTH = '#7a2a22';
function shieldGeo() { const M = new Mesher(0.02); const g = new THREE.SphereGeometry(0.5, 16, 6, 0, TAU, 0, 0.45); g.scale(1, 0.35, 1); M.geometry(g, null, C(LEATHER)); for (let i = 0; i < 4; i++) { const b = new THREE.SphereGeometry(0.06, 8, 4); const a = i * Math.PI / 2 + 0.78; b.translate(Math.cos(a) * 0.2, 0.15, Math.sin(a) * 0.2); M.geometry(b, null, C(BRASS)); } const c = new THREE.SphereGeometry(0.09, 8, 4); c.translate(0, 0.17, 0); M.geometry(c, null, C(BRASS)); return smoothGeometry(M.toGeometry(), 50); }
function helmGeo() { const M = new Mesher(0.02); const g = new THREE.SphereGeometry(0.15, 12, 6, 0, TAU, 0, Math.PI / 2); M.geometry(g, null, C(IRON)); const sp = new THREE.ConeGeometry(0.025, 0.12, 6); sp.translate(0, 0.2, 0); M.geometry(sp, null, C(IRON)); const av = new THREE.CylinderGeometry(0.16, 0.18, 0.12, 12, 1, true); av.translate(0, -0.05, 0); M.geometry(av, null, C('#55504a')); return smoothGeometry(M.toGeometry(), 50); }
function mailGeo() { const M = new Mesher(0.03); const g = new THREE.CylinderGeometry(0.22, 0.3, 0.6, 12); g.scale(1, 1, 0.55); M.geometry(g, null, C('#6c6862')); return smoothGeometry(M.toGeometry(), 50); }
W.armourHeap = function (o) {
  const g = this.ground(o.x, o.y), r = rng((o.x * 31 + o.y * 17) >>> 0 || 3);
  this.decal.cap(regular(o.x, o.y, 1.6, 10), g + 0.04, this.col(o.cloth || '#b8a77e'));
  const Bs = this.batch('shield', shieldGeo), Bh = this.batch('helm', helmGeo), Bm = this.batch('mail', mailGeo);
  for (let i = 0; i < (o.n ?? 6); i++) {
    const a = r() * TAU, d = r() * 1.2, x = o.x + Math.cos(a) * d, y = o.y + Math.sin(a) * d;
    const k = i % 3;
    if (k === 0) Bs.add(instMatrix(x, y, g + 0.05, r() * 360, 1, 1, 1, r() * 20 - 10, r() * 30), [1, 1, 1]);
    else if (k === 1) Bh.add(instMatrix(x, y, g + 0.02, r() * 360, 1, 1, 1, 0, r() < 0.4 ? 80 : 0), [1, 1, 1]);
    else Bm.add(instMatrix(x, y, g + 0.12, r() * 360, 1, 0.5, 1, 90, 0), [1, 1, 1]);
  }
  this.nav.obstacle({ circle: [o.x, o.y, 1.4], bottom: g - 1, top: g + 0.5 });
  this.occupy(regular(o.x, o.y, 1.8, 8), 0.2);
};
// a wooden stand with a mail coat, helmet and shield, as kept by an armoury door
W.armourStand = function (o) {
  const g = this.ground(o.x, o.y), rot = o.rot ?? 0, wood = this.col('#5a3d26'), M = this.solid;
  M.box(o.x, o.y, 0.1, 0.1, g, g + 1.75, rot, wood); M.box(o.x, o.y, 0.7, 0.08, g + 1.45, g + 1.53, rot, wood); M.box(o.x, o.y, 0.6, 0.6, g, g + 0.08, rot, wood);
  this.batch('mail', mailGeo).add(instMatrix(o.x, o.y, g + 0.85, rot, 1, 1, 1), [1, 1, 1]);
  this.batch('helm', helmGeo).add(instMatrix(o.x, o.y, g + 1.66, rot, 1, 1, 1), [1, 1, 1]);
  const [sx, sy] = ROT(0.35, -0.25, o.x, o.y, rot);
  this.batch('shield', shieldGeo).add(instMatrix(sx, sy, g + 0.5, rot, 1, 1, 1, 75, 0), [1, 1, 1]);
  this.nav.obstacle({ circle: [o.x, o.y, 0.5], bottom: g - 1, top: g + 1.8 });
};
// spears stacked in a cone, the way a guard keeps them by a tent
W.spearStack = function (o) {
  const g = this.ground(o.x, o.y), M = this.solid, n = o.n ?? 10, L = 2.8;
  for (let i = 0; i < n; i++) {
    const a = i / n * TAU, bx = o.x + Math.cos(a) * 0.55, by = o.y + Math.sin(a) * 0.55;
    const geo = new THREE.CylinderGeometry(0.022, 0.028, L, 5); geo.translate(0, L / 2, 0);
    const dir = new THREE.Vector3(o.x - bx, 2.3, -(o.y - by)).normalize();
    const m = new THREE.Matrix4().makeTranslation(bx, g, -by).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)));
    M.geometry(geo, m, this.col('#6b4c32'));
    const tip = new THREE.ConeGeometry(0.045, 0.24, 5); tip.translate(0, L + 0.1, 0); M.geometry(tip, m, this.col('#c9c3b5'));
  }
  this.nav.obstacle({ circle: [o.x, o.y, 0.7], bottom: g - 1, top: g + 2.6 });
};
W.shieldStack = function (o) {
  const g = this.ground(o.x, o.y), rot = o.rot ?? 0, B = this.batch('shield', shieldGeo);
  for (let i = 0; i < (o.n ?? 5); i++) { const [x, y] = ROT(i * 0.28 - (o.n ?? 5) * 0.14, 0, o.x, o.y, rot); B.add(instMatrix(x, y, g + 0.48, rot, 1, 1, 1, 70 - i * 2, 0), [1, 1, 1]); }
  this.nav.obstacle({ poly: rectPts(o.x, o.y, 1.8, 1, rot), bottom: g - 1, top: g + 1 });
};

// ---------------------------------------------------------------- training grounds
// akhada: a pit of soft red earth for wrestling, with a low kerb and a rack of clubs (gada)
W.akhara = function (o) {
  const g = this.ground(o.x, o.y), r = o.r ?? 4;
  this.solid.frustum(o.x, o.y, r + 0.35, r + 0.35, g - 0.4, g + 0.25, 24, this.col('stone'), { top: false });
  this.decal.cap(regular(o.x, o.y, r + 0.33, 24), g + 0.25, this.col('#8a7a62'));
  this.decal.cap(regular(o.x, o.y, r, 24), g + 0.27, this.col('#9a4a2e'));
  for (let i = 0; i < 4; i++) { const a = (o.rot ?? 0) * DEG + 1.6 + i * 0.12; const x = o.x + Math.cos(a) * (r + 1.2), y = o.y + Math.sin(a) * (r + 1.2), h = this.ground(x, y); this.solid.lathe(x, y, [[0.03, h], [0.05, h + 0.6], [0.16, h + 0.75], [0.2, h + 0.95], [0.01, h + 1.05]], 8, this.col('#5a3d26')); }
  this.zone(regular(o.x, o.y, r + 1, 12), 'Akhada (wrestling ground)');
  this.plan.circles.push({ x: o.x, y: o.y, r, cls: 'court' });
};
// straw butts and a firing line for archery and musketry practice
W.butts = function (o) {
  const rot = o.rot ?? 0, n = o.n ?? 3;
  for (let i = 0; i < n; i++) {
    const [x, y] = ROT((i - (n - 1) / 2) * 3, 0, o.x, o.y, rot), g = this.ground(x, y);
    this.solid.box(x, y, 0.3, 1.0, g, g + 1.3, rot, this.col('#c2a560'));
    const [fx, fy] = ROT(-0.18, 0, x, y, rot);
    for (const [rr, c] of [[0.45, '#efe6cf'], [0.32, '#b8452a'], [0.18, '#efe6cf'], [0.07, '#1f1b18']]) {
      const pts = regular(0, 0, rr, 16).map(([u, v]) => [fx - Math.sin(rot * DEG) * u, fy + Math.cos(rot * DEG) * u, g + 0.75 + v]);
      for (let k = 1; k < pts.length - 1; k++) this.decal.triAway([pts[0][0], pts[0][2], -pts[0][1]], [pts[k][0], pts[k][2], -pts[k][1]], [pts[k + 1][0], pts[k + 1][2], -pts[k + 1][1]], this.col(c), [x + Math.cos(rot * DEG) * 3, g + 0.75, -(y + Math.sin(rot * DEG) * 3)]);
    }
    this.nav.obstacle({ poly: rectPts(x, y, 0.4, 1.1, rot), bottom: g - 1, top: g + 1.4 });
  }
  const [lx, ly] = ROT(-(o.range ?? 22), 0, o.x, o.y, rot);
  this.decal.cap(rectPts(lx, ly, 0.25, n * 3 + 2, rot), this.ground(lx, ly) + 0.05, this.col('#efe6cf'));
  return [lx, ly];
};
// mallakhamb: the polished wooden pole of Maharashtrian gymnastics; and wooden pells for sword drill
W.mallakhamb = function (o) {
  const g = this.ground(o.x, o.y);
  this.solid.lathe(o.x, o.y, [[0.16, g - 0.2], [0.17, g + 1.6], [0.13, g + 2.3], [0.07, g + 2.45], [0.1, g + 2.55], [0.02, g + 2.62]], 12, this.col('#8a5a32'));
  this.nav.obstacle({ circle: [o.x, o.y, 0.3], bottom: g - 1, top: g + 2.6 });
};
W.pells = function (o) {
  const rot = o.rot ?? 0;
  for (let i = 0; i < (o.n ?? 4); i++) { const [x, y] = ROT(i * 2.2, 0, o.x, o.y, rot), g = this.ground(x, y); this.solid.frustum(x, y, 0.16, 0.13, g - 0.2, g + 1.8, 8, this.col('#6b5038')); this.nav.obstacle({ circle: [x, y, 0.25], bottom: g - 1, top: g + 1.8 }); }
};

// ---------------------------------------------------------------- gardens and husbandry
// a kitchen garden in raised rows, painted as worked ground, with a crop of the given kind
W.garden = function (o) {
  const poly = o.poly, bb = bbox(poly), rot = o.rot ?? 0, crop = o.crop || 'veg';
  const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG);
  const leafCol = crop === 'millet' ? '#a99a52' : crop === 'banana' ? '#5d8a3a' : '#4f7a2e';
  const B = this.batch('crop-' + crop, () => {
    const M = new Mesher(0.04);
    if (crop === 'banana') { const t = new THREE.CylinderGeometry(0.08, 0.12, 1.6, 7); t.translate(0, 0.8, 0); M.geometry(t, null, C('#7a8a4a')); for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; const l = new THREE.PlaneGeometry(0.35, 1.6); l.translate(0, 0.8, 0); l.rotateX(-0.9); l.rotateY(a); l.translate(0, 1.5, 0); M.geometry(l, null, C(leafCol)); } }
    else if (crop === 'millet') { for (let i = 0; i < 3; i++) { const st = new THREE.CylinderGeometry(0.012, 0.016, 1.3, 3, 1, true); st.translate(Math.cos(i * 2.1) * 0.08, 0.65, Math.sin(i * 2.1) * 0.08); M.geometry(st, null, C('#8a8a4a')); const hd = new THREE.OctahedronGeometry(0.06, 0); hd.scale(0.6, 2.2, 0.6); hd.translate(Math.cos(i * 2.1) * 0.08, 1.4, Math.sin(i * 2.1) * 0.08); M.geometry(hd, null, C('#b8a060')); } }
    else { for (let i = 0; i < 4; i++) { const g = new THREE.IcosahedronGeometry(0.18, 0); g.scale(1, 0.6, 1); g.translate(Math.cos(i * 1.3) * 0.13, 0.12, Math.sin(i * 1.3) * 0.13); M.geometry(g, null, C(i % 2 ? leafCol : '#6a9a3a')); } }
    return smoothGeometry(M.toGeometry(), 60);
  }, { cast: true });
  const i0 = B.m.length;
  // large fields: plant fewer, larger clumps (about 1,600 a field) so a hectare of grain stays affordable
  let area0 = 0; for (let i = 0; i < poly.length; i++) { const p = poly[i], q = poly[(i + 1) % poly.length]; area0 += p[0] * q[1] - q[0] * p[1]; } area0 = Math.abs(area0) / 2;
  const base0 = crop === 'banana' ? 2.6 : crop === 'millet' ? 0.45 : 0.55, base1 = o.row ?? 1.1;
  // and no more than about 4,000 clumps a fort in all
  this._cropLeft = this._cropLeft ?? 4000;
  const want = Math.min(1600, Math.max(120, this._cropLeft));
  const thin = Math.max(1, Math.sqrt(area0 / (base0 * base1) / want));
  const gap = base1 * thin, step = base0 * thin, grow = Math.min(2.4, Math.sqrt(thin));
  const span = Math.hypot(bb.x1 - bb.x0, bb.y1 - bb.y0);
  const cx = (bb.x0 + bb.x1) / 2, cy = (bb.y0 + bb.y1) / 2;
  for (let v = -span / 2; v < span / 2; v += gap) {
    // raised bed (decal strip) and plants along it
    for (let u = -span / 2; u < span / 2; u += step) {
      const x = cx + c * u - s * v, y = cy + s * u + c * v;
      if (!pointInPoly(x, y, poly) || !this.isFree(x, y, 0.2)) continue;
      if (o.cells && !o.cells.has(o.cellOf(x, y))) continue;
      const g = this.ground(x, y);
      const tint = o.cropKind === 'wheat' ? [1.08, 1.04, 0.78] : o.cropKind === 'rice' ? [0.8, 1.12, 0.72] : [1, 1, 1];
      if (this.rand() < 0.88) B.add(instMatrix(x, y, g, this.rand() * 360, (0.8 + this.rand() * 0.4) * grow, 0.8 + this.rand() * 0.5, (0.8 + this.rand() * 0.4) * grow), [(0.85 + this.rand() * 0.25) * tint[0], (0.9 + this.rand() * 0.2) * tint[1], 0.85 * tint[2]]);
    }
  }
  this._cropLeft = Math.max(0, (this._cropLeft ?? 4000) - (B.m.length - i0));
  this.plan.polys.push({ pts: poly, cls: 'garden' });
  this.zone(poly, o.name || 'Kitchen garden');
  let area = 0; for (let i = 0; i < poly.length; i++) { const p = poly[i], q = poly[(i + 1) % poly.length]; area += p[0] * q[1] - q[0] * p[1]; }
  this.reserve.porter = (this.reserve.porter || 0) + 2;
  this.fields.push({ poly, crop, batch: 'crop-' + crop, i0, i1: B.m.length, name: o.name || 'Kitchen garden', area: Math.abs(area) / 2, stage: o.stage, keeper: o.keeper });
};
// a step-well / draw well with a pulley frame and a stone trough beside it
W.drawWell = function (o) {
  this.well({ x: o.x, y: o.y, r: o.r ?? 1.3, frame: true });
  this.trough({ x: o.x + 2.6, y: o.y, len: 2.4, rot: 90 });
};

// ---------------------------------------------------------------- dock: timber landing stage, cargo, small craft
// {from:[x,y], to:[x,y], w, h (deck), pile spacing}: a plank deck on piles with bracing, posts and a ladder
W.pier = function (o) {
  const [x0, y0] = o.from, [x1, y1] = o.to, w = o.w ?? 3, h = o.h ?? 1.1, sp = o.spacing ?? 2.6;
  const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), tx = dx / L, ty = dy / L, nx = -ty, ny = tx, rot = Math.atan2(dy, dx) / DEG;
  const timber = this.col(o.timber || '#7a5a3c'), dark = this.col('#4a3626'), M = this.solid;
  // deck planks, slightly varied
  const np = Math.round(L / 0.32);
  for (let k = 0; k < np; k++) {
    const a = (k + 0.5) / np * L, cx = x0 + tx * a, cy = y0 + ty * a;
    M.box(cx, cy, 0.3, w, h - 0.08, h, rot, shade(timber, 0.88 + ((k * 7) % 5) * 0.05), { bottom: false });
  }
  // stringers, piles and bracing
  for (const sg of [-1, 1]) M.box(x0 + dx / 2 + nx * sg * (w / 2 - 0.15), y0 + dy / 2 + ny * sg * (w / 2 - 0.15), L, 0.22, h - 0.36, h - 0.08, rot, dark);
  for (let a = 0.3; a <= L; a += sp) for (const sg of [-1, 1]) {
    const px = x0 + tx * a + nx * sg * (w / 2 - 0.1), py = y0 + ty * a + ny * sg * (w / 2 - 0.1), bed = this.ground(px, py);
    M.frustum(px, py, 0.16, 0.14, bed - 0.5, h + (o.posts !== false && Math.abs(a - L) < sp ? 0.9 : 0.05), 8, shade(dark, 0.9));
    // weed and wet on the piles at the waterline
    M.frustum(px, py, 0.175, 0.175, (this.seaLevel ?? 0) - 0.6, (this.seaLevel ?? 0) + 0.35, 8, this.col('#2f3a2c'), { top: false });
  }
  for (let a = 0.3; a + sp <= L; a += sp) {
    const p0 = [x0 + tx * a, y0 + ty * a], p1 = [x0 + tx * (a + sp), y0 + ty * (a + sp)];
    for (const sg of [-1, 1]) {
      const geo = new THREE.CylinderGeometry(0.05, 0.05, Math.hypot(sp, 1.5), 5); geo.translate(0, Math.hypot(sp, 1.5) / 2, 0);
      const s0 = [p0[0] + nx * sg * (w / 2 - 0.05), p0[1] + ny * sg * (w / 2 - 0.05)], s1 = [p1[0] + nx * sg * (w / 2 - 0.05), p1[1] + ny * sg * (w / 2 - 0.05)];
      const dir = new THREE.Vector3(s1[0] - s0[0], 1.5, -(s1[1] - s0[1])).normalize();
      M.geometry(geo, new THREE.Matrix4().makeTranslation(s0[0], h - 1.9, -s0[1]).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir))), dark);
    }
  }
  // mooring posts along the deck and a ladder down to the water at the end
  for (let a = 1.5; a < L; a += 6) for (const sg of [-1, 1]) { const px = x0 + tx * a + nx * sg * (w / 2 - 0.2), py = y0 + ty * a + ny * sg * (w / 2 - 0.2); M.frustum(px, py, 0.13, 0.11, h, h + 0.6, 8, dark); M.frustum(px, py, 0.16, 0.16, h + 0.45, h + 0.52, 8, this.col('#2e2b28'), {}); }
  { const ex = x1 - tx * 0.3 + nx * (w / 2 + 0.05), ey = y1 - ty * 0.3 + ny * (w / 2 + 0.05); for (const u of [-0.25, 0.25]) M.box(ex + tx * u, ey + ty * u, 0.06, 0.06, (this.seaLevel ?? 0) - 1, h + 0.8, rot, dark); for (let r = (this.seaLevel ?? 0) - 0.8; r < h; r += 0.35) M.box(ex, ey, 0.56, 0.05, r, r + 0.05, rot, dark); }
  const deck = [[x0 + nx * w / 2, y0 + ny * w / 2], [x0 - nx * w / 2, y0 - ny * w / 2], [x1 - nx * w / 2, y1 - ny * w / 2], [x1 + nx * w / 2, y1 + ny * w / 2]];
  this.nav.surface({ poly: deck, h, tag: TAG.landing });
  this.plan.polys.push({ pts: deck, cls: 'ramp' });
  this.surfSolids = this.surfSolids || [];
  return { deck, h, tx, ty, nx, ny, L };
};
// cargo on a quay: bales, baskets, jars and crates in a loose heap
W.cargo = function (o) {
  const g = o.h ?? this.ground(o.x, o.y), r = rng(((o.x * 13 + o.y * 7) | 0) >>> 0 || 5), M = this.solid;
  for (let i = 0; i < (o.n ?? 8); i++) {
    const a = r() * TAU, d = r() * (o.r ?? 1.6), x = o.x + Math.cos(a) * d, y = o.y + Math.sin(a) * d, k = r();
    if (k < 0.3) M.box(x, y, 0.9, 0.6, g, g + 0.55, r() * 90, shade(this.col('#d8c9a2'), 0.85 + r() * 0.2), { colTop: this.col('#e4d7b4') });          // cotton bale
    else if (k < 0.55) M.lathe(x, y, [[0.01, g], [0.32, g + 0.02], [0.4, g + 0.45], [0.38, g + 0.5], [0.01, g + 0.5]], 10, shade(this.col('#a8864e'), 0.9 + r() * 0.2)); // basket
    else if (k < 0.75) M.lathe(x, y, [[0.01, g], [0.18, g + 0.03], [0.3, g + 0.35], [0.22, g + 0.6], [0.1, g + 0.68], [0.12, g + 0.74], [0.01, g + 0.74]], 10, shade(this.col('#a6582e'), 0.9 + r() * 0.2)); // jar
    else M.box(x, y, 0.7, 0.7, g, g + 0.6, r() * 90, shade(this.col('#7a5a3c'), 0.9 + r() * 0.2));                               // crate
  }
  // a coil of coir rope
  if (o.rope !== false) { const rx = o.x + (o.r ?? 1.6) + 0.4, ry = o.y; for (let k = 0; k < 3; k++) { const t = new THREE.TorusGeometry(0.32 - k * 0.07, 0.05, 5, 16); t.rotateX(Math.PI / 2); t.translate(rx, g + 0.05 + k * 0.09, -ry); M.geometry(t, null, this.col('#9a7a4a')); } }
  this.nav.obstacle({ circle: [o.x, o.y, (o.r ?? 1.6) + 0.3], bottom: g - 1, top: g + 0.8 });
};
// a torch stand (mashal) on the quay
W.torchStand = function (o) {
  const g = o.h ?? this.ground(o.x, o.y);
  this.solid.frustum(o.x, o.y, 0.06, 0.05, g, g + 2.4, 6, this.col('#3a2e24'));
  this.solid.lathe(o.x, o.y, [[0.05, g + 2.3], [0.2, g + 2.45], [0.22, g + 2.6], [0.01, g + 2.62]], 8, this.col('#2e2b28'));
  this.particles.push({ nightOnly: !o.lit, kind: 'fire', x: o.x, y: o.y, h: g + 2.62, n: 10, stream: true, period: 0.6, life: [0.35, 0.6], up: [0.6, 1.3], outV: [0, 0], side: 0.15, g: 0, size: [0.45, 0.12], color: '#ffa040', alpha: 0.95, flash: true, jitter: 0.15, seed: o.x * 3 + o.y });
};

// ---------------------------------------------------------------- grain storage
// open-sided shed on timber posts under a thatched roof, sheltering stacked sacks
W.grainShed = function (o) {
  const w = o.w ?? 8, d = o.d ?? 5, rot = o.rot ?? 0, g = this.ground(o.x, o.y), M = this.solid;
  for (let i = 0; i <= 3; i++) for (const sg of [-1, 1]) { const [x, y] = ROT(-w / 2 + i * w / 3, sg * d / 2, o.x, o.y, rot); M.frustum(x, y, 0.1, 0.09, g - 0.2, g + 2.7, 7, this.col('#5a4030')); }
  M.hip(o.x, o.y, w + 1.2, d + 1.2, g + 2.6, g + 4.2, rot, this.col('#b29a5e'), w * 0.6);
  M.box(o.x, o.y, w + 0.3, d + 0.3, g - 0.05, g + 0.25, rot, this.col('stone'), { colTop: this.col('#9b9282') });
  for (let k = -1; k <= 1; k += 2) { const [x, y] = ROT(k * w * 0.22, 0, o.x, o.y, rot); this.sacks({ x, y, rot, cols: 4, rows: 3, layers: 4, h0: g + 0.25 }); }
  this.nav.obstacle({ poly: rectPts(o.x, o.y, w + 0.3, d + 0.3, rot), bottom: g - 1, top: g + 4 });
  this.occupy(rectPts(o.x, o.y, w + 1.4, d + 1.4, rot), 0.3);
  this.plan.polys.push({ pts: rectPts(o.x, o.y, w, d, rot), cls: 'building' });
};
// grain spread to dry on a mat and raked into a cone
W.grainHeap = function (o) {
  const g = this.ground(o.x, o.y), r = o.r ?? 1.4, col = this.col(o.color || '#c9a654');
  this.decal.cap(rectPts(o.x, o.y, r * 2.6, r * 2.2, o.rot ?? 0), g + 0.04, this.col('#b8a374'));
  this.solid.lathe(o.x, o.y, [[r, g + 0.02], [r * 0.85, g + 0.18], [r * 0.45, g + 0.55], [0.01, g + 0.75]], 14, col);
  this.nav.obstacle({ circle: [o.x, o.y, r], bottom: g - 1, top: g + 0.8 });
};
// underground grain pit, sealed with a round stone lid
W.grainPit = function (o) {
  const g = this.ground(o.x, o.y);
  this.solid.frustum(o.x, o.y, 0.95, 1.0, g - 0.1, g + 0.12, 16, this.col('#8a857a'), { colTop: this.col('#9b968a') });
  this.solid.frustum(o.x, o.y, 0.7, 0.7, g + 0.12, g + 0.2, 16, this.col('#7d786e'));
  const t = new THREE.TorusGeometry(0.16, 0.03, 5, 12); t.rotateX(Math.PI / 2); t.translate(o.x, g + 0.22, -o.y); this.solid.geometry(t, null, this.col('#2e2b28'));
};
// a beam balance on a tripod, for weighing out the ration
W.tula = function (o) {
  const g = this.ground(o.x, o.y), M = this.solid, wood = this.col('#5a3d26'), rot = o.rot ?? 0;
  for (let i = 0; i < 3; i++) { const a = i / 3 * TAU, bx = o.x + Math.cos(a) * 0.9, by = o.y + Math.sin(a) * 0.9; const geo = new THREE.CylinderGeometry(0.04, 0.05, 2.6, 5); geo.translate(0, 1.3, 0); const dir = new THREE.Vector3(o.x - bx, 2.4, -(o.y - by)).normalize(); M.geometry(geo, new THREE.Matrix4().makeTranslation(bx, g, -by).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir))), wood); }
  M.box(o.x, o.y, 1.6, 0.06, g + 2.0, g + 2.07, rot, wood);
  for (const sg of [-1, 1]) { const [x, y] = ROT(sg * 0.75, 0, o.x, o.y, rot); M.frustum(x, y, 0.01, 0.01, g + 1.2, g + 2.0, 3, this.col('#9a8a6a')); M.lathe(x, y, [[0.01, g + 1.15], [0.3, g + 1.18], [0.32, g + 1.25]], 10, this.col('#8a6a3a')); }
  this.nav.obstacle({ circle: [o.x, o.y, 0.9], bottom: g - 1, top: g + 2.2 });
};

// ---------------------------------------------------------------- horses: a picket line with feed and water
W.picketLine = function (o) {
  const rot = o.rot ?? 0, L = o.len ?? 14, g = this.ground(o.x, o.y), M = this.solid, wood = this.col('#5a4030');
  for (const u of [-L / 2, L / 2]) { const [x, y] = ROT(u, 0, o.x, o.y, rot); M.frustum(x, y, 0.1, 0.08, g - 0.3, g + 1.4, 7, wood); this.nav.obstacle({ circle: [x, y, 0.2], bottom: g - 1, top: g + 1.4 }); }
  const [ax, ay] = ROT(-L / 2, 0, o.x, o.y, rot), [bx, by] = ROT(L / 2, 0, o.x, o.y, rot);
  const rope = new THREE.CylinderGeometry(0.025, 0.025, L, 4); rope.rotateZ(Math.PI / 2); rope.rotateY(rot * DEG); rope.translate(o.x, g + 1.25, -o.y); M.geometry(rope, null, this.col('#9a7a4a'));
  void ax; void ay; void bx; void by;
  const [tx, ty] = ROT(0, 2.6, o.x, o.y, rot); this.trough({ x: tx, y: ty, len: Math.min(6, L * 0.5), rot });
  const [hx, hy] = ROT(L / 2 + 3, 1.5, o.x, o.y, rot); this.haystack({ x: hx, y: hy, r: 1.6 });
  for (let k = 0; k < (o.n ?? 5); k++) {
    const u = -L / 2 + (k + 0.5) * L / (o.n ?? 5), [x, y] = ROT(u, -1.6, o.x, o.y, rot);
    const coats = o.coats || ['horse', 'horse-grey', 'horse-chestnut', 'horse-black', 'horse'];
    this.npc({ kind: o.tack ? 'horse-war' : coats[k % coats.length], at: [x, y], face: (rot + 0) , mode: 'idle' });
  }
  if (o.groom !== false) { const [x, y] = ROT(0, -3.2, o.x, o.y, rot); this.npc({ kind: 'villager', circle: [x, y, 3], count: 1, speed: 0.5 }); }
  this.zone(rectPts(o.x, o.y, L + 6, 9, rot), 'Horse lines');
};

// gun tools kept by an embrasure: rammer and sponge staves against the parapet, a water bucket, a linstock in its tub
function gunToolsGeo() {
  const M = new Mesher(0.03), wood = C('#6b4c32'), iron = C('#3a3633');
  for (const [dz, top] of [[-0.12, 'sponge'], [0.12, 'rammer']]) {
    const st = new THREE.CylinderGeometry(0.025, 0.025, 2.8, 5); st.translate(0, 1.4, 0); st.rotateZ(0.32); st.translate(0, 0, dz); M.geometry(st, null, wood);
    const hd = top === 'sponge' ? new THREE.CylinderGeometry(0.12, 0.12, 0.3, 8) : new THREE.CylinderGeometry(0.11, 0.11, 0.14, 8); hd.translate(0, 2.8, 0); hd.rotateZ(0.32); hd.translate(0, 0, dz); M.geometry(hd, null, top === 'sponge' ? C('#3e3a30') : wood);
  }
  const b = new THREE.CylinderGeometry(0.22, 0.18, 0.38, 10, 1, true); b.translate(0.55, 0.19, 0.45); M.geometry(b, null, C('#5a4030'));
  const wtr = new THREE.CircleGeometry(0.2, 10); wtr.rotateX(-Math.PI / 2); wtr.translate(0.55, 0.32, 0.45); M.geometry(wtr, null, C('#3d5a52'));
  const tub = new THREE.CylinderGeometry(0.17, 0.17, 0.3, 10); tub.translate(0.5, 0.15, -0.45); M.geometry(tub, null, C('#4a3626'));
  const ls = new THREE.CylinderGeometry(0.02, 0.02, 1.2, 5); ls.translate(0.5, 0.75, -0.45); M.geometry(ls, null, wood);
  const fk = new THREE.TorusGeometry(0.06, 0.012, 4, 8, Math.PI); fk.translate(0.5, 1.38, -0.45); M.geometry(fk, null, iron);
  return smoothGeometry(M.toGeometry(), 40);
}
W.gunTools = function (o) {
  this.batch('guntools', gunToolsGeo, { cast: true }).add(instMatrix(o.x, o.y, o.h, (o.dir ?? 0) + 90, 1, 1, 1), [1, 1, 1]);
};
