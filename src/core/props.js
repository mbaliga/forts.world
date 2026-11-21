// Props: cannons, flags, trees, boulders, boats, wells, backdrop scenery.
import * as THREE from 'three';
import { World, instMatrix, yawOf, regular } from './world.js';
import { TAG } from './nav.js';
import { Mesher, C, shade, mix, V, smoothGeometry } from './mesher.js';
import { rng, bbox, pointInPoly, DEG, TAU, lerp, clamp, rectPts, makeNoise } from './geom.js';

const W = World.prototype;
const _mat = new THREE.Matrix4();

// ---------------------------------------------------------------- cannon
// the parts of a gun on its carriage, at the origin, barrel along +X (for operable, instanced guns)
// a cast gun of the Deccan type: chase with reinforcing rings, a swelling muzzle with a moulded lip,
// trunnions, a reinforce at the breech and a cascabel knob; neutral grey so instances can be tinted iron or bronze
export function barrelGeometry(len, r) {
  const prof = [
    [0.0, -0.5], [r * 0.55, -0.5], [r * 0.62, -0.47], [r * 0.4, -0.44], [r * 0.38, -0.42], [r * 1.0, -0.41], [r * 1.02, -0.36], [r * 0.98, -0.34],
    [r * 1.0, -0.2], [r * 1.08, -0.19], [r * 1.08, -0.16], [r * 0.94, -0.15], [r * 0.88, 0.1], [r * 0.95, 0.11], [r * 0.95, 0.14], [r * 0.84, 0.15],
    [r * 0.78, 0.38], [r * 0.82, 0.41], [r * 0.95, 0.47], [r * 0.98, 0.5], [r * 0.55, 0.5], [r * 0.5, 0.44],
  ].map(([rr, t]) => new THREE.Vector2(rr, t * len));
  const g = new THREE.LatheGeometry(prof, 16); g.rotateZ(-Math.PI / 2);
  const ng = g.toNonIndexed(); g.dispose();
  const M = new Mesher(0);
  M.geometry(ng, null, (p) => { const t = p[0] / len; return Math.abs(t + 0.18) < 0.03 || Math.abs(t - 0.125) < 0.03 || t > 0.4 ? [1.15, 1.15, 1.15] : [1, 1, 1]; });
  for (const sz of [-1, 1]) { const tr = new THREE.CylinderGeometry(r * 0.32, r * 0.32, r * 0.55, 10); tr.rotateX(Math.PI / 2); tr.translate(-len * 0.05, 0, sz * r * 1.15); M.geometry(tr, null, [0.95, 0.95, 0.95]); }
  const k = new THREE.SphereGeometry(r * 0.32, 10, 7); k.translate(-len * 0.5 - r * 0.3, 0, 0); M.geometry(k, null, [1, 1, 1]);
  return smoothGeometry(M.toGeometry(), 38);
}
export function gunParts(len, r, iron, wood) {
  const B = new Mesher(0), Cg = new Mesher(0.02);
  const lift = r + 0.55;
  const bg = barrelGeometry(len, r); bg.translate(len * 0.12, lift, 0);
  B.geometry(bg, null, [0.62, 0.62, 0.62]);
  const strap = C('#2e2b28'), cl = len * 0.62, cw = r * 2.6;
  for (const sz of [-1, 1]) {
    const cheek = new THREE.BoxGeometry(cl, 0.42, 0.16); cheek.translate(-len * 0.1, 0.5, sz * (cw / 2)); Cg.geometry(cheek, null, wood);
    const step = new THREE.BoxGeometry(cl * 0.45, 0.22, 0.16); step.translate(-len * 0.1 - cl * 0.27, 0.8, sz * (cw / 2)); Cg.geometry(step, null, shade(wood, 0.95));
    for (const u of [-0.32, 0.05, 0.2]) { const band = new THREE.BoxGeometry(0.07, 0.46, 0.19); band.translate(-len * 0.1 + u * cl, 0.5, sz * (cw / 2)); Cg.geometry(band, null, strap); }
    const cap = new THREE.BoxGeometry(0.34, 0.06, 0.2); cap.translate(len * 0.07, lift - r * 0.05 + 0.1, sz * (cw / 2)); Cg.geometry(cap, null, strap);
  }
  const bed = new THREE.BoxGeometry(cl * 0.9, 0.12, cw); bed.translate(-len * 0.12, 0.3, 0); Cg.geometry(bed, null, shade(wood, 0.85));
  const axle = new THREE.CylinderGeometry(0.07, 0.07, cw + 0.5, 8); axle.rotateX(Math.PI / 2);
  for (const sx of [-1, 1]) { const ax = axle.clone(); ax.translate(sx * len * 0.2 - len * 0.1, 0.3, 0); Cg.geometry(ax, null, strap); }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const wh = new THREE.CylinderGeometry(0.3, 0.3, 0.14, 16); wh.rotateX(Math.PI / 2); wh.translate(sx * len * 0.2 - len * 0.1, 0.3, sz * (cw / 2 + 0.12)); Cg.geometry(wh, null, shade(wood, 0.72));
    const tyre = new THREE.TorusGeometry(0.3, 0.025, 4, 16); tyre.translate(sx * len * 0.2 - len * 0.1, 0.3, sz * (cw / 2 + 0.12)); Cg.geometry(tyre, null, strap);
  }
  return { barrel: B.toGeometry(), carriage: Cg.toGeometry(), lift };
}

W.cannon = function (o) {
  const len = o.len ?? 3, r = o.r ?? 0.3;
  const h = o.h ?? this.ground(o.x, o.y);
  if (o.dynamic) {
    // an operable gun: drawn and moved by the game, aimed within `arc` degrees of its embrasure
    this.guns.push({ id: this.guns.length, x: o.x, y: o.y, h, dir: o.dir ?? 0, home: o.dir ?? 0, arc: o.arc ?? 40, len, r, bastion: o.bastion || null, crew: [], mode: 'idle', reload: 0, recoil: 0, name: o.name || null });
    this.plan.marks.push({ x: o.x, y: o.y, dir: o.dir ?? 0, kind: 'cannon', big: false });
    return;
  }
  const iron = this.col(o.color, 'iron');
  const wood = this.col(o.wood, 'wood');
  const M = this.solid;
  const mtx = new THREE.Matrix4().compose(new THREE.Vector3(o.x, h, -o.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, (o.dir ?? 0) * DEG, 0)), new THREE.Vector3(1, 1, 1));
  if (o.lying) {
    // dismounted barrel lying on the stones, rolled a little off its line
    const m2 = new THREE.Matrix4().compose(new THREE.Vector3(o.x, h, -o.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, (o.dir ?? 0) * DEG + 0.35, 0)), new THREE.Vector3(1, 1, 1));
    const bl = new THREE.CylinderGeometry(r * 0.78, r, len, 10, 1); bl.rotateZ(-Math.PI / 2); bl.translate(len * 0.15, r * 0.95, 0);
    M.geometry(bl, m2, mix(iron, C('#7a4a2a'), 0.35));
    const cs = new THREE.SphereGeometry(r * 0.55, 8, 5); cs.translate(-len * 0.38, r * 0.95, 0); M.geometry(cs, m2, iron);
    this.nav.obstacle({ circle: [o.x, o.y, len * 0.45], bottom: h - 0.5, top: h + r * 2 });
    this.plan.marks.push({ x: o.x, y: o.y, dir: o.dir ?? 0, kind: 'cannon', big: false });
    return;
  }
  const lift = o.carriage === false ? r * 1.1 : r + 0.55;
  // barrel along +X
  const barrel = barrelGeometry(len, r); barrel.translate(len * 0.12, lift, 0);
  M.geometry(barrel, mtx, (p) => mix(iron, C('#6e4a2c'), 0.12 + 0.1 * Math.sin(p[0] * 3.1 + p[2] * 5)));
  if (o.carriage !== false) {
    // garrison carriage: two stepped cheeks, an axle-tree bed and four solid trucks
    const cl = len * 0.62, cw = r * 2.6;
    for (const sz of [-1, 1]) {
      const cheek = new THREE.BoxGeometry(cl, 0.42, 0.16); cheek.translate(-len * 0.1, 0.5, sz * (cw / 2));
      M.geometry(cheek, mtx, wood);
      const step = new THREE.BoxGeometry(cl * 0.45, 0.22, 0.16); step.translate(-len * 0.1 - cl * 0.27, 0.8, sz * (cw / 2));
      M.geometry(step, mtx, shade(wood, 0.95));
    }
    const bed = new THREE.BoxGeometry(cl * 0.9, 0.12, cw); bed.translate(-len * 0.12, 0.3, 0); M.geometry(bed, mtx, shade(wood, 0.85));
    const quoin = new THREE.BoxGeometry(0.36, 0.16, r * 1.4); quoin.translate(-len * 0.3, lift - r * 0.95, 0); M.geometry(quoin, mtx, shade(wood, 1.1));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const wh = new THREE.CylinderGeometry(0.3, 0.3, 0.14, 10); wh.rotateX(Math.PI / 2); wh.translate(sx * len * 0.2 - len * 0.1, 0.3, sz * (cw / 2 + 0.12));
      M.geometry(wh, mtx, shade(wood, 0.7));
    }
  } else {
    const plinth = new THREE.BoxGeometry(len * 0.7, lift - r * 0.5, r * 2.6); plinth.translate(-len * 0.05, (lift - r * 0.5) / 2, 0);
    M.geometry(plinth, mtx, this.col(o.plinthColor, 'stone'));
  }
  const fp = rectPts(o.x + Math.cos((o.dir ?? 0) * DEG) * len * 0.05, o.y + Math.sin((o.dir ?? 0) * DEG) * len * 0.05, len * 0.95, r * 2.6 + 0.4, o.dir ?? 0);
  this.nav.obstacle({ poly: fp, bottom: h - 0.5, top: h + lift + r });
  this.plan.marks.push({ x: o.x, y: o.y, dir: o.dir ?? 0, kind: 'cannon', big: len > 4 });
};

// ---------------------------------------------------------------- flag
W.flag = function (o) {
  const h = o.h ?? this.ground(o.x, o.y);
  const pole = o.pole ?? 6;
  this.solid.frustum(o.x, o.y, 0.09, 0.06, h - 0.2, h + pole, 6, this.col(o.poleColor || '#3b3530'));
  if (o.base !== false) this.solid.frustum(o.x, o.y, 0.45, 0.35, h - 0.3, h + 0.35, 8, this.col('stone'));
  // finial and halyard
  this.solid.lathe(o.x, o.y, [[0.01, h + pole], [0.12, h + pole + 0.08], [0.1, h + pole + 0.2], [0.01, h + pole + 0.45]], 8, this.col(o.finial || '#b08a3a'));
  if (!o.noFlag) this.flags.push({ x: o.x, y: o.y, top: h + pole, color: o.color || this.palHex.flag, size: o.size ?? 1.6, shape: o.shape || 'rect', border: o.border, stripe: o.stripe });
  this.nav.obstacle({ circle: [o.x, o.y, 0.45], bottom: h - 1, top: h + pole });
};

// ---------------------------------------------------------------- trees
function treeGeometry(type, pal) {
  // Organic shapes are built from noise-displaced, crease-smoothed parts so they shade softly, not in facets.
  const M = new Mesher(0);
  const trunk = pal.trunk, leaf = pal.leaf, leafDry = pal.leafDry;
  const nz = makeNoise(type.length * 17 + 3);
  const lit = (c, k) => [c[0] * k, c[1] * k, c[2] * k];
  // a foliage clump: lighter on top, darker underneath and inside, with small random tint
  const blob = (x, y, h, r, sy, col, det = 1, rough = 0.2) => {
    const g = new THREE.IcosahedronGeometry(r, det);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
      const k = 1 + rough * nz(vx * 1.7 + x * 3, vz * 1.7 + vy * 2.3) + rough * 0.4 * nz(vx * 4.1, vy * 4.3 - vz);
      pos.setXYZ(i, vx * k, vy * k * sy, vz * k);
    }
    g.translate(x, h, -y);
    M.geometry(g, null, (p) => { const t = Math.max(0, Math.min(1, (p[1] - (h - r * sy)) / (2 * r * sy))); return lit(col, 0.62 + 0.5 * t); });
  };
  const limb = (x0, h0, z0, x1, h1, z1, r0, r1, col, seg = 7) => {
    const L = Math.hypot(x1 - x0, h1 - h0, z1 - z0);
    const g = new THREE.CylinderGeometry(r1, r0, L, seg, 2); g.translate(0, L / 2, 0);
    const dir = new THREE.Vector3(x1 - x0, h1 - h0, z1 - z0).normalize();
    const m = new THREE.Matrix4().makeTranslation(x0, h0, z0).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)));
    M.geometry(g, m, (p) => lit(col, 0.8 + 0.2 * Math.sin(p[1] * 3.1)));
  };
  // a drooping frond: a rachis with two ribbons of leaflets falling away from it
  const frond = (ox, oh, oz, ang, L, lift, droop, col, w = 0.6, steps = 7) => {
    const ca = Math.cos(ang), sa = Math.sin(ang);
    const pts = [];
    for (let k = 0; k <= steps; k++) { const t = k / steps; pts.push([ox + ca * L * t, oh + lift * t - droop * t * t, oz - sa * L * t]); }
    for (let k = 0; k < steps; k++) {
      const t0 = k / steps, t1 = (k + 1) / steps;
      const w0 = w * Math.sin(Math.PI * Math.max(0.12, t0)) , w1 = w * Math.sin(Math.PI * Math.max(0.12, t1));
      const p0 = pts[k], p1 = pts[k + 1], nx = -sa, nz2 = -ca;
      for (const sd of [-1, 1]) {
        const e0 = [p0[0] + nx * w0 * sd, p0[1] - w0 * 0.55, p0[2] + nz2 * w0 * sd], e1 = [p1[0] + nx * w1 * sd, p1[1] - w1 * 0.55, p1[2] + nz2 * w1 * sd];
        const c = lit(col, 0.85 + 0.25 * (1 - t0));
        M.tri(p0, e0, e1, c); M.tri(p0, e1, p1, c); M.tri(e1, e0, p0, lit(c, 0.7)); M.tri(p1, e1, p0, lit(c, 0.7));
      }
    }
  };
  const blades = (x, y, n, hh, w, col, spread = 0.3) => {
    for (let i = 0; i < n; i++) {
      const a = i * 2.39996, r = spread * Math.sqrt((i + 0.5) / n), bx = x + Math.cos(a) * r, bz = -(y + Math.sin(a) * r);
      const h = hh * (0.6 + 0.4 * ((i * 7) % 5) / 4), lean = 0.25 + 0.2 * ((i * 3) % 4) / 3;
      const tx = bx + Math.cos(a) * h * lean, tz = bz - Math.sin(a) * h * lean;
      const px = -Math.sin(a) * w, pz = -Math.cos(a) * w;
      const c0 = lit(col, 0.6), c1 = lit(col, 1.15);
      M.tri([bx - px, 0, bz - pz], [bx + px, 0, bz + pz], [tx, h, tz], [c0, c0, c1]);
      M.tri([bx + px, 0, bz + pz], [bx - px, 0, bz - pz], [tx, h, tz], [c0, c0, c1]);
    }
  };
  const deepLeaf = mix(leaf, [0.05, 0.12, 0.04], 0.35), freshLeaf = mix(leaf, [0.35, 0.5, 0.12], 0.25);
  if (type === 'palm' || type === 'coconut') {
    // coconut: a tall, slender, ringed trunk curving out of the wind, a crown of long drooping fronds, a cluster of nuts
    const segs = 9, H = 9.5, lean = 1.6;
    let prev = [0, 0, 0];
    for (let i = 1; i <= segs; i++) {
      const t = i / segs, cur = [lean * t * t, t * H, 0];
      limb(prev[0], prev[1], prev[2], cur[0], cur[1], cur[2], 0.2 - (t - 1 / segs) * 0.06, 0.2 - t * 0.06, i % 2 ? trunk : lit(trunk, 1.15), 8);
      prev = cur;
    }
    const [cx, ch] = prev;
    const nf = 12;
    for (let i = 0; i < nf; i++) {
      const a = (i / nf) * TAU + (i % 2) * 0.2, up = i % 3 === 0;
      frond(cx, ch + 0.1, 0, a, up ? 3.6 : 4.4, up ? 1.6 : 0.9, up ? 2.0 : 3.4, i % 2 ? leaf : freshLeaf, 0.55, 5);
    }
    blob(cx, 0, ch - 0.15, 0.42, 0.9, lit(trunk, 0.75), 1, 0.1);
    for (let i = 0; i < 6; i++) { const a = i * 1.05; blob(cx + Math.cos(a) * 0.32, Math.sin(a) * 0.32, ch - 0.45, 0.17, 1, [0.32, 0.36, 0.12], 0, 0.05); }
  } else if (type === 'banyan') {
    // a spreading crown on several trunks, with aerial roots dropping to the ground
    for (const [x, y, r] of [[0, 0, 0.75], [1.6, 0.8, 0.35], [-1.4, -0.9, 0.32], [0.7, -1.7, 0.3], [-0.6, 1.5, 0.28]]) limb(x, 0, -y, x * 1.15, 4.2, -y * 1.15, r, r * 0.7, lit(trunk, 1.1), 9);
    for (const [x, y, h, r] of [[0, 0, 5.4, 3.6], [3.0, 1.4, 5.0, 2.7], [-2.9, -1.2, 5.1, 2.8], [0.8, -3.0, 4.9, 2.6], [-1.2, 2.9, 5.0, 2.6], [1.6, 1.0, 6.4, 2.2], [-1.4, -0.6, 6.5, 2.2]]) blob(x, y, h, r, 0.55, x > 0 ? leaf : deepLeaf, 2, 0.24);
    for (let i = 0; i < 16; i++) { const a = i * 2.39996, r = 1.8 + (i % 4) * 0.8, x = Math.cos(a) * r, y = Math.sin(a) * r; limb(x, 0, -y, x * 1.02, 4.4, -y * 1.02, 0.07, 0.05, lit(trunk, 0.95), 5); }
  } else if (type === 'peepal') {
    limb(0, 0, 0, 0.2, 3.2, 0, 0.55, 0.4, lit(trunk, 1.25), 9);
    limb(0.2, 3.0, 0, 1.4, 5.0, -0.4, 0.3, 0.18, lit(trunk, 1.25), 7); limb(0.2, 3.0, 0, -1.2, 5.2, 0.5, 0.3, 0.18, lit(trunk, 1.25), 7);
    for (const [x, y, h, r] of [[0, 0, 6.2, 3.0], [1.9, -0.5, 5.6, 2.2], [-1.8, 0.6, 5.8, 2.3], [0.3, 1.6, 7.2, 2.0], [-0.2, -1.6, 7.0, 2.0]]) blob(x, y, h, r, 0.8, freshLeaf, 2, 0.22);
  } else if (type === 'tamarind' || type === 'mango' || type === 'round' || type === 'neem') {
    const dense = type === 'tamarind' || type === 'mango';
    limb(0, 0, 0, 0.1, 2.6, 0, 0.32, 0.24, trunk, 8);
    limb(0.1, 2.3, 0, 1.0, 3.6, -0.3, 0.16, 0.1, trunk, 6); limb(0.1, 2.3, 0, -0.9, 3.7, 0.3, 0.16, 0.1, trunk, 6);
    const c = type === 'mango' ? deepLeaf : type === 'tamarind' ? mix(deepLeaf, leaf, 0.4) : type === 'neem' ? freshLeaf : leaf;
    const parts = dense ? [[0, 0, 4.3, 2.4], [1.3, 0.6, 3.8, 1.7], [-1.2, -0.5, 3.9, 1.8], [0.2, -1.2, 4.0, 1.6], [-0.3, 1.1, 4.1, 1.6], [0.3, 0.2, 5.3, 1.5]]
      : [[0, 0, 4.0, 2.0], [1.0, 0.5, 3.5, 1.4], [-0.9, -0.4, 3.6, 1.5], [0.1, 0.2, 4.9, 1.2]];
    for (const [x, y, h, r] of parts) blob(x, y, h, r, 0.82, c, 2, 0.22);
  } else if (type === 'acacia' || type === 'khejri') {
    limb(0, 0, 0, 0.3, 2.4, 0, 0.22, 0.14, trunk, 6);
    limb(0.3, 2.2, 0, 1.4, 3.2, -0.2, 0.1, 0.06, trunk, 5); limb(0.3, 2.2, 0, -0.8, 3.3, 0.4, 0.1, 0.06, trunk, 5);
    blob(0.3, 0, 3.4, 2.4, 0.3, type === 'khejri' ? leafDry : mix(leaf, leafDry, 0.4), 2, 0.25);
    blob(-0.9, 0.3, 3.2, 1.5, 0.35, mix(leaf, leafDry, 0.5), 1, 0.25);
  } else if (type === 'screwpine') {
    // kevda: a coastal shrub-tree on stilt roots, with rosettes of long sword leaves at the branch tips
    for (let i = 0; i < 5; i++) { const a = i * 1.26; limb(Math.cos(a) * 0.7, 0, -Math.sin(a) * 0.7, Math.cos(a) * 0.1, 1.0, -Math.sin(a) * 0.1, 0.05, 0.06, lit(trunk, 1.15), 5); }
    limb(0, 0.9, 0, 0.2, 2.2, 0, 0.14, 0.12, trunk, 6);
    for (const [x, z, hh] of [[0.2, 0, 2.2], [1.0, -0.4, 2.8], [-0.7, 0.5, 2.7]]) {
      if (x !== 0.2) limb(0.2, 2.0, 0, x, hh, z, 0.09, 0.07, trunk, 5);
      for (let k = 0; k < 12; k++) frond(x, hh, z, k / 12 * TAU, 1.5, 0.6 + (k % 3) * 0.3, 1.1, k % 2 ? mix(leaf, leafDry, 0.25) : freshLeaf, 0.1, 4);
    }
  } else if (type === 'shrub' || type === 'bush') {
    blob(0, 0, 0.55, 0.9, 0.72, mix(leaf, leafDry, 0.25), 1, 0.3);
    blob(0.65, 0.3, 0.45, 0.62, 0.8, freshLeaf, 0, 0.25);
    blob(-0.5, -0.35, 0.4, 0.55, 0.8, deepLeaf, 0, 0.25);
  } else if (type === 'ashoka') {
    limb(0, 0, 0, 0, 1.4, 0, 0.12, 0.1, trunk, 6);
    blob(0, 0, 3.4, 1.0, 2.6, deepLeaf, 2, 0.15);
  } else if (type === 'grass') {
    blades(0, 0, 9, 0.95, 0.065, mix(leaf, leafDry, 0.3), 0.42);
  } else if (type === 'reed') {
    blades(0, 0, 11, 1.5, 0.04, mix(leaf, leafDry, 0.35), 0.4);
  } else if (type === 'flowers') {
    blades(0, 0, 6, 0.45, 0.04, freshLeaf, 0.3);
    for (let i = 0; i < 3; i++) { const g = new THREE.OctahedronGeometry(0.08, 0); g.translate(Math.cos(i * 2.1) * 0.22, 0.48, -Math.sin(i * 2.1) * 0.22); M.geometry(g, null, i % 2 ? [0.85, 0.65, 0.12] : [0.75, 0.25, 0.3]); }
  }
  const g = M.toGeometry();
  smoothGeometry(g, type === 'grass' || type === 'reed' || type === 'flowers' ? 20 : 72);
  return LEAFY.has(type) ? leafify(g, type) : g;
}
// Broadleaf crowns: the clumps above are drawn back a little and darkened as the shaded mass inside the crown, and
// hundreds of small leaves are scattered over and just outside their surface, tinted lighter towards the sky and
// lit with normals that point out from the crown, so the silhouette is ragged and the crown reads as foliage.
const LEAFY = new Set(['round', 'neem', 'banyan', 'peepal', 'tamarind', 'mango', 'ashoka', 'acacia', 'khejri', 'shrub', 'bush']);
function leafify(g, type) {
  const pos = g.attributes.position, col = g.attributes.color, nor = g.attributes.normal, n = pos.count;
  const isLeaf = (i) => { const r = col.getX(i), gg = col.getY(i), b = col.getZ(i); return gg > r * 1.04 && gg > b; };
  // the crown's centre, from its leafy vertices
  let cx = 0, cy = 0, cz = 0, k = 0, top = -Infinity, bot = Infinity;
  for (let i = 0; i < n; i++) if (isLeaf(i)) { cx += pos.getX(i); cy += pos.getY(i); cz += pos.getZ(i); k++; top = Math.max(top, pos.getY(i)); bot = Math.min(bot, pos.getY(i)); }
  if (k < 30) return g;
  cx /= k; cy /= k; cz /= k;
  const P = [], N = [], Cc = [];
  // keep everything; pull the clumps in a touch and shade them
  for (let i = 0; i < n; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i), r = col.getX(i), gg = col.getY(i), b = col.getZ(i);
    if (isLeaf(i)) { x = cx + (x - cx) * 0.88; y = cy + (y - cy) * 0.9; z = cz + (z - cz) * 0.88; r *= 0.72; gg *= 0.74; b *= 0.72; }
    P.push(x, y, z); N.push(nor.getX(i), nor.getY(i), nor.getZ(i)); Cc.push(r, gg, b);
  }
  // leaves on the leafy triangles, by area
  const tris = []; let total = 0;
  for (let i = 0; i < n; i += 3) {
    if (!isLeaf(i)) continue;
    const ax = pos.getX(i), ay = pos.getY(i), az = pos.getZ(i), bx = pos.getX(i + 1) - ax, by = pos.getY(i + 1) - ay, bz = pos.getZ(i + 1) - az, ex = pos.getX(i + 2) - ax, ey = pos.getY(i + 2) - ay, ez = pos.getZ(i + 2) - az;
    const area = 0.5 * Math.hypot(by * ez - bz * ey, bz * ex - bx * ez, bx * ey - by * ex); total += area; tris.push([i, area]);
  }
  const want = type === 'shrub' || type === 'bush' ? 60 : type === 'banyan' ? 220 : 150;
  let seed = type.length * 97 + 13; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const crownH = Math.max(0.5, top - bot), size = Math.min(0.42, 0.12 + crownH * 0.05);
  for (let q = 0; q < want; q++) {
    let pick = rnd() * total, t = tris[0];
    for (const tt of tris) { pick -= tt[1]; if (pick <= 0) { t = tt; break; } }
    const i = t[0]; let u = rnd(), v = rnd(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
    const px = pos.getX(i) + (pos.getX(i + 1) - pos.getX(i)) * u + (pos.getX(i + 2) - pos.getX(i)) * v;
    const py = pos.getY(i) + (pos.getY(i + 1) - pos.getY(i)) * u + (pos.getY(i + 2) - pos.getY(i)) * v;
    const pz = pos.getZ(i) + (pos.getZ(i + 1) - pos.getZ(i)) * u + (pos.getZ(i + 2) - pos.getZ(i)) * v;
    let ox = px - cx, oy = (py - cy) * 1.2, oz = pz - cz; const ol = Math.hypot(ox, oy, oz) || 1; ox /= ol; oy /= ol; oz /= ol;
    const out = (rnd() - 0.55) * size * 0.5, x = px + ox * out, y = py + oy * out, z = pz + oz * out;
    // a leaf: a small diamond, tilted at random about its outward direction
    const a1 = rnd() * Math.PI * 2, s1 = size * (0.6 + rnd() * 0.7);
    const tx = Math.cos(a1), tz = Math.sin(a1), ux = -oz * 0.6 + tz * 0.4, uy = 0.6 + rnd() * 0.4, uz = ox * 0.6 - tx * 0.4;
    const ul = Math.hypot(ux, uy, uz), wx = tx * s1 * 0.5, wy = (rnd() - 0.5) * s1 * 0.3, wz = tz * s1 * 0.5, hx = ux / ul * s1, hy = uy / ul * s1, hz = uz / ul * s1;
    const base = col.getX(i), lt = 0.98 + 0.32 * ((y - bot) / crownH) + (rnd() - 0.5) * 0.14;
    const cr = col.getX(i) * lt * (0.92 + rnd() * 0.12), cg = col.getY(i) * lt, cb = col.getZ(i) * lt * (0.85 + rnd() * 0.2);
    void base;
    const v0 = [x - hx * 0.5, y - hy * 0.5, z - hz * 0.5], v1 = [x + wx, y + wy, z + wz], v2 = [x + hx * 0.5, y + hy * 0.5, z + hz * 0.5], v3 = [x - wx, y - wy, z - wz];
    for (const vv of [v0, v1, v2, v0, v2, v3]) { P.push(...vv); N.push(ox, Math.max(0.2, oy), oz); Cc.push(cr, cg, cb); }
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); out.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); out.setAttribute('color', new THREE.Float32BufferAttribute(Cc, 3));
  out.computeBoundingSphere();
  return out;
}

W.tree = function (o) {
  const type = o.type || 'round';
  const B = this.batch('tree-' + type, () => treeGeometry(type, this.pal), { cast: true });
  const h = o.h ?? this.ground(o.x, o.y);
  const s = o.s ?? 1;
  const r = this.rand;
  B.add(instMatrix(o.x, o.y, h - 0.15, o.yaw ?? r() * 360, s, s * (0.9 + r() * 0.2), s), o.tint || [0.9 + r() * 0.2, 0.9 + r() * 0.2, 0.9 + r() * 0.15]);
  if (!['grass', 'shrub', 'bush', 'reed', 'flowers'].includes(type)) this.nav.obstacle({ circle: [o.x, o.y, (type === 'banyan' ? 1.0 : 0.45) * s], bottom: h - 1, top: h + 3 });
  this.plan.trees.push({ x: o.x, y: o.y, r: (type === 'palm' || type === 'coconut' ? 1.6 : type === 'banyan' ? 4.5 : ['shrub', 'grass', 'bush', 'reed', 'flowers'].includes(type) ? 0.6 : type === 'screwpine' ? 1.2 : 2.2) * s, type });
};

// scatter: {poly, count, types:{palm:1, round:2}, s:[a,b], minDist, maxSlope, minH, maxH, seed, avoid:[polys]}
W.trees = function (o) {
  const r = rng(o.seed ?? (this.seed * 53 + 11));
  const bb = o.poly ? bbox(o.poly) : { x0: this.bounds[0], y0: this.bounds[1], x1: this.bounds[2], y1: this.bounds[3] };
  const types = Object.entries(o.types || { round: 1 });
  const tot = types.reduce((a, [, w]) => a + w, 0);
  const pick = () => { let v = r() * tot; for (const [t, w] of types) { v -= w; if (v <= 0) return t; } return types[0][0]; };
  const placed = [];
  const md = o.minDist ?? 3;
  let n = 0;
  for (let t = 0; t < (o.count ?? 20) * 25 && n < (o.count ?? 20); t++) {
    const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
    if (o.poly && !pointInPoly(x, y, o.poly)) continue;
    if (o.avoid && o.avoid.some((p) => pointInPoly(x, y, p))) continue;
    const h = this.ground(x, y);
    if (this.waterLevelAt(x, y) > h - 0.3) continue;
    if (o.minH != null && h < o.minH) continue;
    if (o.maxH != null && h > o.maxH) continue;
    const sl = Math.abs(this.ground(x + 1, y) - this.ground(x - 1, y)) + Math.abs(this.ground(x, y + 1) - this.ground(x, y - 1));
    if (sl > (o.maxSlope ?? 1.6)) continue;
    if (!this.isFree(x, y, o.pad ?? 1.2)) continue;
    if (placed.some(([px, py]) => (px - x) ** 2 + (py - y) ** 2 < md * md)) continue;
    const s = lerp(o.s?.[0] ?? 0.8, o.s?.[1] ?? 1.2, r());
    this.tree({ x, y, h, type: pick(), s });
    placed.push([x, y]); n++;
  }
  return placed;
};

// ---------------------------------------------------------------- boulders
function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const pos = g.attributes.position;
  const nz = makeNoise(seed);
  const map = new Map();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const key = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    let k = map.get(key);
    if (k == null) { k = 0.78 + 0.32 * (nz(x * 1.7 + seed, z * 1.7 - y) * 0.5 + 0.5); map.set(key, k); }
    pos.setXYZ(i, x * k * 1.15, Math.max(-0.35, y * k * 0.78), z * k);
  }
  const M = new Mesher(0.04);
  M.geometry(g, null, (p) => (p[1] > 0.2 ? [1, 1, 1] : [0.82, 0.82, 0.8]));
  return smoothGeometry(M.toGeometry(), 50);
}
W.boulder = function (o) {
  const v = o.variant ?? ((this.rand() * 3) | 0);
  const B = this.batch('rock-' + v, () => rockGeometry(v * 13 + 5), { cast: true });
  const h = o.h ?? this.ground(o.x, o.y);
  const s = o.s ?? 2;
  const col = this.col(o.color, 'rock');
  const t = 0.92 + this.rand() * 0.16;
  B.add(instMatrix(o.x, o.y, h + s * 0.15, o.yaw ?? this.rand() * 360, s * (o.sx ?? 1), s * (o.sy ?? 1), s * (o.sz ?? (0.8 + this.rand() * 0.4))), [col[0] * t, col[1] * t, col[2] * t]);
  if (o.block !== false && s > 0.8) this.nav.obstacle({ circle: [o.x, o.y, s * 0.85], bottom: h - 1, top: h + s * 0.9 });
  this.plan.circles.push({ x: o.x, y: o.y, r: s * 0.9, cls: 'rock' });
};
W.boulders = function (o) {
  const r = rng(o.seed ?? (this.seed * 71 + 3));
  const bb = o.poly ? bbox(o.poly) : { x0: o.x - o.r, y0: o.y - o.r, x1: o.x + o.r, y1: o.y + o.r };
  let n = 0;
  for (let t = 0; t < (o.count ?? 20) * 20 && n < (o.count ?? 20); t++) {
    const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
    if (o.poly ? !pointInPoly(x, y, o.poly) : (x - o.x) ** 2 + (y - o.y) ** 2 > o.r * o.r) continue;
    if (o.avoid && o.avoid.some((p) => pointInPoly(x, y, p))) continue;
    if (!this.isFree(x, y, o.pad ?? 1.5)) continue;
    const h = this.ground(x, y);
    if (o.minH != null && h < o.minH) continue;
    const s = lerp(o.s?.[0] ?? 1, o.s?.[1] ?? 3, Math.pow(r(), 1.6));
    this.boulder({ x, y, h, s, color: o.color, block: o.block });
    n++;
  }
};

// ---------------------------------------------------------------- boats, wells, backdrop
W.boat = function (o) { this.boats.push(Object.assign({ size: 1, sail: true, color: '#7a5634', sailColor: '#efe6cf' }, o)); };

W.well = function (o) {
  const h = o.h ?? this.ground(o.x, o.y);
  const r = o.r ?? 1.4;
  const col = this.col(o.color, 'stone');
  this.solid.frustum(o.x, o.y, r + 0.45, r + 0.4, h - 0.5, h + 0.9, 14, col, { top: false });
  this.solid.frustum(o.x, o.y, r, r, h - 0.5, h + 0.9, 14, shade(col, 0.7), { top: false });
  // rim top (ring)
  const outer = regular(o.x, o.y, r + 0.42, 14), inner = regular(o.x, o.y, r, 14);
  for (let i = 0; i < 14; i++) { const j = (i + 1) % 14; this.solid.quad(V(outer[i][0], outer[i][1], h + 0.9), V(outer[j][0], outer[j][1], h + 0.9), V(inner[j][0], inner[j][1], h + 0.9), V(inner[i][0], inner[i][1], h + 0.9), shade(col, 1.06)); }
  this.waterM.cap(regular(o.x, o.y, r, 14), h - 0.3, this.pal.tank);
  if (o.frame) {
    for (const s of [-1, 1]) this.solid.box(o.x + s * (r + 0.2), o.y, 0.3, 0.3, h + 0.9, h + 2.8, 0, this.pal.wood);
    this.solid.box(o.x, o.y, r * 2 + 0.8, 0.25, h + 2.6, h + 2.85, 0, this.pal.wood);
  }
  this.nav.obstacle({ circle: [o.x, o.y, r + 0.45], bottom: h - 1, top: h + 0.9 });
  this.plan.circles.push({ x: o.x, y: o.y, r: r + 0.4, cls: 'well' });
  this.occupy(regular(o.x, o.y, r + 0.5, 8), 0.4);
};

// render-only scenery outside the playable area: {poly, h0, h1 | hill:{x,y,r,h}, color}
W.scenery = function (o) {
  if (!this.back) this.back = new Mesher(0.06);
  const col = this.col(o.color, 'grass');
  if (o.poly) this.back.prism(o.poly, o.h0 ?? -4, o.h1 ?? 2, col, { colTop: o.colorTop ? this.col(o.colorTop) : col, shadeBase: 0.8 });
  if (o.hill) {
    const { x, y, r, h } = o.hill;
    const prof = [];
    for (let i = 0; i <= 6; i++) { const t = i / 6; prof.push([r * (1 - t * t * 0.98) + 0.01, (o.h0 ?? 0) + h * Math.sin(t * Math.PI / 2)]); }
    this.back.lathe(x, y, prof, o.seg ?? 9, col, { rot: o.rot ?? 0 });
  }
  if (o.box) { const [x, y, w, d, rot, h0, h1] = o.box; this.back.box(x, y, w, d, h0, h1, rot, col); }
};

// ---------------------------------------------------------------- ground cover
// Dense, cheap scatter of grass tufts, reeds and wild flowers (no collision), skipping built and paved ground.
W.groundCover = function (o) {
  const r = rng(o.seed ?? (this.seed * 91 + 17));
  const bb = o.poly ? bbox(o.poly) : { x0: this.bounds[0], y0: this.bounds[1], x1: this.bounds[2], y1: this.bounds[3] };
  const sp = o.spacing ?? 2.2;
  const types = Object.entries(o.types || { grass: 1 });
  const tot = types.reduce((a, [, w]) => a + w, 0);
  const pick = () => { let v = r() * tot; for (const [t, w] of types) { v -= w; if (v <= 0) return t; } return types[0][0]; };
  const nz = makeNoise((o.seed ?? 5) * 13 + 1);
  const cand = [];
  for (let y = bb.y0; y < bb.y1; y += sp) for (let x = bb.x0; x < bb.x1; x += sp) cand.push([x + (r() - 0.5) * sp, y + (r() - 0.5) * sp]);
  // visit in random order so a capped count spreads over the whole area
  for (let k = cand.length - 1; k > 0; k--) { const q = Math.floor(r() * (k + 1)); const t = cand[k]; cand[k] = cand[q]; cand[q] = t; }
  let n = 0;
  for (const [px, py] of cand) {
    if (o.poly && !pointInPoly(px, py, o.poly)) continue;
    if (nz(px / (o.patch ?? 14), py / (o.patch ?? 14)) < (o.threshold ?? -0.15)) continue;
    const h = this.ground(px, py);
    if (this.waterLevelAt(px, py) > h - 0.2) continue;
    const paint = this.terrain.paintAt(px, py);
    if (paint && paint !== 3 && paint !== 6 && paint !== 5) continue;
    const sl = Math.abs(this.ground(px + 1, py) - this.ground(px - 1, py)) + Math.abs(this.ground(px, py + 1) - this.ground(px, py - 1));
    if (sl > (o.maxSlope ?? 2.4)) continue;
    if (!this.isFree(px, py, 0.25)) continue;
    const type = pick(), s = lerp(o.s?.[0] ?? 0.9, o.s?.[1] ?? 1.7, r());
    const B = this.batch('tree-' + type, () => treeGeometry(type, this.pal), { cast: false });
    B.add(instMatrix(px, py, h - 0.05, r() * 360, s, s * (0.8 + r() * 0.4), s), [0.85 + r() * 0.25, 0.85 + r() * 0.25, 0.8 + r() * 0.2]);
    if (++n >= (o.max ?? 6000)) return n;
  }
  return n;
};

// ---------------------------------------------------------------- birds (ambient, not interactive)
// {x, y, h, r, n, kind:'gull'|'crow'|'kite', speed}: a loose flock circling over a spot
W.birds = function (o) { (this.birdFlocks ||= []).push(Object.assign({ n: 6, r: 30, h: 18, kind: 'gull', speed: 0.12 }, o)); };

// ---------------------------------------------------------------- desert: a field of barchan dunes beyond the playable area
// Each barchan: a gentle windward back, a slip face at the angle of repose (about 32°), and horns trailing downwind.
W.duneField = function (o) {
  const r = rng(o.seed ?? 77), nz = makeNoise((o.seed ?? 77) + 5);
  const [wx0, wy0] = o.wind ?? [0.7, 0.7]; const wl = Math.hypot(wx0, wy0), wx = wx0 / wl, wy = wy0 / wl;
  const dunes = [];
  for (let t = 0; t < (o.n ?? 40) * 8 && dunes.length < (o.n ?? 40); t++) {
    const x = o.x0 + r() * (o.x1 - o.x0), y = o.y0 + r() * (o.y1 - o.y0);
    if (o.avoid && o.avoid(x, y)) continue;
    const H = (o.h?.[0] ?? 4) + r() * ((o.h?.[1] ?? 14) - (o.h?.[0] ?? 4));
    if (dunes.some((d) => Math.hypot(d.x - x, d.y - y) < (d.H + H) * 3.2)) continue;
    dunes.push({ x, y, H });
  }
  const tanR = Math.tan(32 * Math.PI / 180);
  const height = (x, y) => {
    let h = 0.6 * (nz(x / 90, y / 90) * 0.5 + 0.5) + 0.35 * nz(x / 23, y / 23);
    for (const d of dunes) {
      const dx = x - d.x, dy = y - d.y, u = dx * wx + dy * wy, v = -dx * wy + dy * wx, W2 = 2.6 * d.H;
      if (Math.abs(v) > W2 * 2.2 || u < -d.H * 9 || u > d.H * 6) continue;
      const u2 = u - (v * v) / (W2 * 2.4);                       // crescent: the flanks run on downwind as horns
      const Ls = d.H / tanR, Lw = d.H * 5.5;
      const along = u2 < 0 ? Math.exp(-(u2 / Lw) * (u2 / Lw) * 2.2) : Math.max(0, 1 - u2 / Ls);
      const across = Math.exp(-(v / W2) * (v / W2));
      h = Math.max(h, d.H * along * across);
    }
    return h;
  };
  const step = o.step ?? 5, nx = Math.ceil((o.x1 - o.x0) / step), ny = Math.ceil((o.y1 - o.y0) / step);
  const pos = [], idx = [], col = [], keep = [], sand = C(o.color || this.palHex.sand || '#d9bf8c');
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
    const x = o.x0 + i * step, y = o.y0 + j * step, mk = o.mask ? o.mask(x, y) : 1, h = (o.base ?? 0) + height(x, y) * mk - (1 - mk) * 4;
    keep.push(mk > 0);
    pos.push(x, h, -y);
    const t = 0.93 + 0.1 * nz(x / 41, y / 37);
    col.push(sand[0] * t, sand[1] * t, sand[2] * t);
  }
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 2, d = a + nx + 1; if (!(keep[a] || keep[b] || keep[c] || keep[d])) continue; idx.push(a, b, c, a, c, d); }
  (this.duneFields ||= []).push({ pos, idx, col, wind: [wx, wy] });
};

// ---------------------------------------------------------------- backdrop settlements beyond the playable area
// Houses (instanced, not walkable) on a flat backdrop surface: {poly, h, count, roofs:{thatch, tile, flat}, palms, seed}
function bdHouseGeo(roof) {
  const M = new Mesher(0.03);
  const wall = [0.93, 0.9, 0.84], r = roof === 'thatch' ? [0.62, 0.52, 0.32] : roof === 'tile' ? [0.62, 0.3, 0.2] : [0.85, 0.83, 0.78];
  M.box(0, 0, 1, 0.75, -0.3, 0.55, 0, wall);
  if (roof === 'flat') { M.box(0, 0, 1.04, 0.79, 0.55, 0.62, 0, r); }
  else { M.hip(0, 0, 1.25, 1.0, 0.55, roof === 'thatch' ? 1.2 : 1.0, 0, r, 0.45); M.box(0, 0.38, 1.2, 0.3, -0.02, 0.06, 0, [0.7, 0.66, 0.58]); }
  M.quad(V(-0.12, -0.376, 0), V(0.12, -0.376, 0), V(0.12, -0.376, 0.38), V(-0.12, -0.376, 0.38), [0.2, 0.15, 0.1]);
  return M.toGeometry();
}
W.backdropSettlement = function (o) {
  const r = rng(o.seed ?? 9), bb = bbox(o.poly), roofs = Object.entries(o.roofs || { tile: 1 }), tot = roofs.reduce((a, [, w]) => a + w, 0);
  const pick = () => { let v = r() * tot; for (const [k, w] of roofs) { v -= w; if (v <= 0) return k; } return roofs[0][0]; };
  const placed = [];
  for (let t = 0; t < (o.count ?? 60) * 12 && placed.length < (o.count ?? 60); t++) {
    const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
    if (!pointInPoly(x, y, o.poly)) continue;
    // houses cluster along lanes: favour spots near earlier houses
    if (placed.length > 4 && r() < 0.7 && !placed.some((p) => Math.hypot(p[0] - x, p[1] - y) < 22)) continue;
    if (placed.some((p) => Math.hypot(p[0] - x, p[1] - y) < 9)) continue;
    const roof = pick(), w = 6 + r() * 5, d = 5 + r() * 3, h = 3 + r() * 1.2;
    this.batch('bd-house-' + roof, () => bdHouseGeo(roof), { cast: true }).add(instMatrix(x, y, o.h, (o.rot ?? 0) + (r() < 0.5 ? 0 : 90) + (r() - 0.5) * 12, w, h, d), [0.9 + r() * 0.15, 0.88 + r() * 0.14, 0.85 + r() * 0.12]);
    placed.push([x, y]);
  }
  // coconut groves round the houses
  const P = this.batch('tree-palm', () => treeGeometry('palm', this.pal), { cast: true });
  for (let k = 0; k < (o.palms ?? 120); k++) {
    const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
    if (!pointInPoly(x, y, o.poly) || placed.some((p) => Math.hypot(p[0] - x, p[1] - y) < 6)) continue;
    const s = 0.85 + r() * 0.4; P.add(instMatrix(x, y, o.h, r() * 360, s, s * (0.9 + r() * 0.25), s), [0.9 + r() * 0.2, 0.9 + r() * 0.2, 0.9]);
  }
};

// ---------------------------------------------------------------- siege ladders
// {foot:[x,y,h], top:[x,y,h], rope?, w?}: a wooden scaling ladder or a rope ladder, drawn as its own object;
// climbers go up it one behind another, and defenders above can throw it down.
W.ladder = function (o) { this.ladders.push({ foot: o.foot, top: o.top, rope: !!o.rope, w: o.w ?? (o.rope ? 0.7 : 0.9), up: !o.hidden, hidden: !!o.hidden, id: this.ladders.length }); return this.ladders.length - 1; };
