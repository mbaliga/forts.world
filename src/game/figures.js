// Figures for people and small animals, built as jointed parts and animated on the graphics card: a continuous walk
// cycle, and at rest the small life of a body: breathing, weight shifting from foot to foot, looking about, and now
// and then scratching the head, settling the turban, stretching, or leaning on a spear.
// Each vertex carries its part (0 body, 1 head, 2/3 arms, 4/5 legs; animals 4–7 legs, 8 tail) and the joint it turns on.
import * as THREE from 'three';
import { C, shade, smoothGeometry } from '../core/mesher.js';

// ---------------------------------------------------------------- building blocks
class Parts {
  constructor() { this.pos = []; this.nor = []; this.col = []; this.part = []; this.piv = []; }
  add(geo, col, part, pivot, m = null) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (m) g.applyMatrix4(m);
    g.computeVertexNormals();
    const p = g.attributes.position, n = g.attributes.normal, c = Array.isArray(col) ? col : C(col);
    for (let i = 0; i < p.count; i++) {
      this.pos.push(p.getX(i), p.getY(i), p.getZ(i)); this.nor.push(n.getX(i), n.getY(i), n.getZ(i));
      const k = typeof c === 'function' ? c([p.getX(i), p.getY(i), p.getZ(i)]) : c;
      this.col.push(k[0], k[1], k[2]); this.part.push(part); this.piv.push(pivot[0], pivot[1], pivot[2]);
    }
    g.dispose();
  }
  build(smooth = 48) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('aPart', new THREE.Float32BufferAttribute(this.part, 1));
    g.setAttribute('aPivot', new THREE.Float32BufferAttribute(this.piv, 3));
    if (smooth) smoothGeometry(g, smooth);
    g.computeBoundingSphere();
    return g;
  }
}
const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const lathe = (pts, seg = 10) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
// a limb segment from a to b (y-up points), radii r0 → r1
function seg(a, b, r0, r1, n = 7) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  const g = new THREE.CylinderGeometry(r1, r0, L, n, 1); g.translate(0, L / 2, 0);
  const dir = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
  g.applyMatrix4(new THREE.Matrix4().makeTranslation(a[0], a[1], a[2]).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir))));
  return g;
}

// ---------------------------------------------------------------- people (built at true size: a man 1.65 m to the crown)
export function figureGeometry(spec) {
  const P = new Parts(), woman = !!spec.skirt, k = woman ? 0.93 : 1;
  const top = C(spec.top), bot = C(spec.bottom), sash = C(spec.sash), skin = C(spec.skin), hat = spec.hat ? C(spec.hat) : top;
  const dark = C('#2a1d16'), shoe = C('#4a3426');
  const Y = (v) => v * k;
  const hip = Y(0.86), knee = Y(0.47), shoulder = Y(1.38), neck = Y(1.46), headC = Y(1.555);
  // legs (part 4 left, 5 right), turning at the hip
  for (const [sx, part] of [[-1, 4], [1, 5]]) {
    const pv = [sx * 0.09, hip, 0];
    P.add(seg([sx * 0.09, hip, 0], [sx * 0.085, knee, 0.01], 0.072, 0.056), spec.skirt || spec.long ? bot : bot, part, pv);
    P.add(seg([sx * 0.085, knee, 0.01], [sx * 0.08, Y(0.08), -0.01], 0.054, 0.036), skin, part, pv);
    const foot = new THREE.CapsuleGeometry(0.042, 0.13, 3, 8); foot.rotateX(Math.PI / 2); foot.scale(1, 0.75, 1); foot.translate(sx * 0.08, 0.04, 0.05);
    P.add(foot, spec.prop === 'camera' || spec.head === 'hat' ? shoe : C('#6a4a32'), part, pv);
  }
  // pelvis, waist, chest and shoulders as one turned body, a little deeper than wide is wrong: wider than deep
  const torso = lathe([[0.0, hip - 0.04], [0.16, hip - 0.02], [0.17, Y(0.95)], [0.145, Y(1.05)], [0.165, Y(1.2)], [0.19, Y(1.31)], [0.2, shoulder], [0.12, Y(1.43)], [0.0, Y(1.45)]], 10);
  torso.scale(1, 1, 0.7); P.add(torso, top, 0, [0, hip, 0]);
  P.add(lathe([[0.152, Y(0.98)], [0.16, Y(1.0)], [0.16, Y(1.06)], [0.15, Y(1.08)]], 10).scale(1, 1, 0.72), sash, 0, [0, hip, 0]);
  // dress below the waist: dhoti to the calf, a jama flaring to below the knee, or a sari to the ankle
  if (woman) P.add(lathe([[0.15, Y(1.0)], [0.2, Y(0.8)], [0.28, Y(0.35)], [0.32, Y(0.06)], [0.0, Y(0.05)]], 10).scale(1, 1, 0.82), bot, 0, [0, hip, 0]);
  else if (spec.long) P.add(lathe([[0.155, Y(1.0)], [0.2, Y(0.85)], [0.3, Y(0.55)], [0.34, Y(0.38)]], 10).scale(1, 1, 0.8), top, 0, [0, hip, 0]);
  else P.add(lathe([[0.165, Y(0.98)], [0.19, Y(0.8)], [0.17, Y(0.55)], [0.15, Y(0.38)]], 10).scale(1, 1, 0.82), bot, 0, [0, hip, 0]);
  if (woman) { const pallu = new THREE.BoxGeometry(0.34, 0.5, 0.05); pallu.rotateZ(0.5); pallu.translate(-0.05, Y(1.18), 0.11); P.add(pallu, hat, 0, [0, hip, 0]); }
  // arms (2 left, 3 right), turning at the shoulder
  for (const [sx, part] of [[-1, 2], [1, 3]]) {
    const pv = [sx * 0.2, shoulder - 0.02, 0];
    P.add(seg([sx * 0.2, shoulder - 0.02, 0], [sx * 0.23, Y(1.12), 0.0], 0.052, 0.043), top, part, pv);
    P.add(seg([sx * 0.23, Y(1.12), 0.0], [sx * 0.24, Y(0.9), 0.04], 0.041, 0.033), spec.long || woman ? top : skin, part, pv);
    const hand = new THREE.SphereGeometry(0.042, 6, 4); hand.scale(0.8, 1.2, 0.7); hand.translate(sx * 0.24, Y(0.85), 0.045); P.add(hand, skin, part, pv);
  }
  // head (1), turning at the neck: neck, skull, nose, ears, and for men a moustache
  const nk = [0, neck - 0.04, 0];
  P.add(seg([0, neck - 0.05, 0], [0, headC - 0.06, 0.01], 0.05, 0.045), skin, 1, nk);
  const skull = new THREE.SphereGeometry(0.1, 10, 7); skull.scale(0.92, 1.15, 1.02); skull.translate(0, headC, 0.01); P.add(skull, skin, 1, nk);
  const nose = new THREE.ConeGeometry(0.018, 0.045, 5); nose.rotateX(Math.PI / 2); nose.translate(0, headC - 0.005, 0.11); P.add(nose, shade(skin, 0.94), 1, nk);
  for (const sx of [-1, 1]) { const ear = new THREE.SphereGeometry(0.022, 6, 4); ear.scale(0.5, 1, 0.8); ear.translate(sx * 0.093, headC, 0); P.add(ear, shade(skin, 0.92), 1, nk); }
  if (!woman && spec.head !== 'hat') { const mo = new THREE.CapsuleGeometry(0.009, 0.07, 2, 5); mo.rotateZ(Math.PI / 2); mo.translate(0, headC - 0.045, 0.098); P.add(mo, dark, 1, nk); }
  // headwear
  const h = spec.head, hc = headC + 0.07;
  if (h === 'pagdi') { // Maratha pagdi: a stiff, flat-topped crown with a forward-swept brim
    P.add(lathe([[0.112, hc - 0.03], [0.125, hc + 0.02], [0.118, hc + 0.07], [0.09, hc + 0.1], [0.0, hc + 0.1]], 10), hat, 1, nk);
    const lip = new THREE.TorusGeometry(0.115, 0.022, 5, 10); lip.rotateX(Math.PI / 2); lip.translate(0, hc - 0.02, 0.01); P.add(lip, shade(hat, 0.88), 1, nk);
  } else if (h === 'safa') { // Rajput safa: wound in layers, the tail falling behind
    for (let i = 0; i < 4; i++) { const t = new THREE.TorusGeometry(0.105 - i * 0.008, 0.03, 5, 10); t.rotateX(Math.PI / 2 + (i % 2 ? 0.22 : -0.18)); t.translate(0, hc - 0.03 + i * 0.035, 0); P.add(t, i % 2 ? hat : shade(hat, 0.9), 1, nk); }
    const tail = new THREE.BoxGeometry(0.08, 0.36, 0.03); tail.translate(0.02, hc - 0.2, -0.12); P.add(tail, hat, 1, nk);
  } else if (h === 'turban') { // a full wound turban, rounded
    P.add(lathe([[0.11, hc - 0.04], [0.13, hc], [0.13, hc + 0.05], [0.1, hc + 0.1], [0.0, hc + 0.12]], 10), hat, 1, nk);
    for (let i = 0; i < 3; i++) { const t = new THREE.TorusGeometry(0.122 - i * 0.012, 0.012, 5, 10); t.rotateX(Math.PI / 2 + 0.25 * (i - 1)); t.translate(0, hc - 0.01 + i * 0.04, 0); P.add(t, shade(hat, 0.86), 1, nk); }
  } else if (h === 'cap') P.add(lathe([[0.104, hc - 0.03], [0.108, hc + 0.02], [0.0, hc + 0.04]], 10), hat, 1, nk);
  else if (h === 'hat') { P.add(lathe([[0.1, hc - 0.03], [0.1, hc + 0.06], [0.0, hc + 0.07]], 10), hat, 1, nk); P.add(lathe([[0.2, hc - 0.03], [0.2, hc - 0.015], [0.0, hc - 0.01]], 10), hat, 1, nk); }
  else if (h === 'veil' || h === 'scarf') { const v = new THREE.SphereGeometry(0.125, 9, 6, 0, Math.PI * 2, 0, Math.PI * 0.62); v.scale(1, 1.1, 1.05); v.translate(0, headC + 0.005, -0.005); P.add(v, hat, 1, nk); const back = new THREE.BoxGeometry(0.24, 0.42, 0.04); back.translate(0, headC - 0.24, -0.11); P.add(back, hat, 1, nk); }
  else P.add(lathe([[0.096, headC + 0.01], [0.1, headC + 0.05], [0.07, headC + 0.1], [0.0, headC + 0.115]], 10), dark, 1, nk);
  // what they carry, in or at the right hand (part 3)
  const rh = [0.24, Y(0.85), 0.05], pr = spec.prop, pv = [0.2, shoulder - 0.02, 0];
  if (pr === 'spear') { P.add(seg([0.26, 0.02, 0.06], [0.26, 2.15, 0.06], 0.017, 0.015, 5), C('#5a4030'), 3, pv); const tip = new THREE.ConeGeometry(0.035, 0.2, 5); tip.translate(0.26, 2.25, 0.06); P.add(tip, C('#c9c3b5'), 3, pv); }
  else if (pr === 'musket') { P.add(seg([0.24, 0.5, 0.12], [0.2, 1.75, -0.02], 0.028, 0.018, 6), C('#3e2c20'), 3, pv); P.add(seg([0.235, 0.62, 0.1], [0.22, 1.1, 0.06], 0.04, 0.03, 6), C('#5a3d26'), 3, pv); }
  else if (pr === 'staff') P.add(seg([0.26, 0.02, 0.07], [0.26, 1.5, 0.07], 0.018, 0.016, 5), C('#6b4c32'), 3, pv);
  else if (pr === 'umbrella') { P.add(seg([rh[0], rh[1], rh[2]], [0.26, 2.1, 0.08], 0.01, 0.01, 4), C('#333'), 3, pv); const c = new THREE.ConeGeometry(0.55, 0.26, 10); c.translate(0.26, 2.2, 0.08); P.add(c, top, 3, pv); }
  else if (pr === 'pack') { const b = new THREE.BoxGeometry(0.28, 0.34, 0.14); b.translate(0, Y(1.2), -0.18); P.add(b, sash, 0, [0, hip, 0]); }
  else if (pr === 'pot') { const s = new THREE.SphereGeometry(0.14, 9, 7); s.translate(0, headC + 0.2, 0); P.add(s, C('#b5653a'), 1, nk); }
  else if (pr === 'basket') { P.add(lathe([[0.2, headC + 0.12], [0.22, headC + 0.24], [0.0, headC + 0.24]], 10), C('#a9874f'), 1, nk); }
  else if (pr === 'sack') { const b = new THREE.BoxGeometry(0.4, 0.22, 0.3); b.translate(0, headC + 0.2, 0); P.add(b, C('#b8a070'), 1, nk); }
  else if (pr === 'oar' || pr === 'rammer' || pr === 'hoe') {
    P.add(seg([0.24, 0.1, 0.08], [0.3, 1.9, 0.0], 0.02, 0.018, 5), C('#6b4c32'), 3, pv);
    if (pr === 'rammer') { const sp = new THREE.CylinderGeometry(0.07, 0.07, 0.2, 10); sp.translate(0.3, 1.98, 0); P.add(sp, C('#3a3028'), 3, pv); }
    if (pr === 'hoe') { const b = new THREE.BoxGeometry(0.2, 0.03, 0.13); b.translate(0.24, 0.1, 0.14); P.add(b, C('#4a4440'), 3, pv); }
  } else if (pr === 'bow') { const b = new THREE.TorusGeometry(0.55, 0.016, 4, 18, Math.PI * 0.85); b.rotateZ(-Math.PI * 0.42); b.translate(0.27, Y(1.15), 0.07); P.add(b, C('#5a3a22'), 2, [-0.2, shoulder - 0.02, 0]); }
  else if (pr === 'camera') { const s = new THREE.BoxGeometry(0.13, 0.08, 0.07); s.translate(0, Y(1.3), 0.18); P.add(s, C('#202020'), 0, [0, hip, 0]); }
  return P.build(48);
}

// ---------------------------------------------------------------- small animals, jointed the same way
export function smallAnimalGeometry(kind) {
  const P = new Parts();
  const ell = (rx, ry, rz, x, y, z, col, part, pv, seg2 = 12) => { const g = new THREE.SphereGeometry(1, seg2, Math.max(6, (seg2 * 0.7) | 0)); g.scale(rx, ry, rz); g.translate(x, y, z); P.add(g, col, part, pv); };
  const legs = (col, lx, lzF, lzB, ly, w, hoof) => {
    [[-1, lzF, 4], [1, lzF, 5], [-1, lzB, 6], [1, lzB, 7]].forEach(([sx, z, part]) => {
      const pv = [sx * lx, ly, z];
      P.add(seg([sx * lx, ly, z], [sx * lx, 0.02, z + 0.01], w, w * 0.75, 7), col, part, pv);
      if (hoof) { const h = new THREE.CylinderGeometry(w * 0.7, w * 0.8, w * 0.8, 7); h.translate(sx * lx, w * 0.4, z + 0.01); P.add(h, hoof, part, pv); }
    });
  };
  const tail = (x, y, z, len, col, droop) => { const g = new THREE.CylinderGeometry(0.012, 0.03, len, 5); g.translate(0, len / 2, 0); g.rotateX(Math.PI - droop); g.translate(x, y, z); P.add(g, col, 8, [x, y, z]); };
  const nk = (z, y) => [0, y, z];
  if (kind === 'dog' || kind === 'cat') {
    const dog = kind === 'dog', c = dog ? C('#b08550') : C('#8a7a68'), s = dog ? 1 : 0.55;
    legs(c, 0.07 * s, 0.17 * s, -0.17 * s, 0.33 * s, 0.035 * s);
    ell(0.1 * s, 0.11 * s, 0.27 * s, 0, 0.42 * s, 0, c, 0, [0, 0.4 * s, 0]);
    ell(0.075 * s, 0.075 * s, 0.09 * s, 0, 0.56 * s, 0.26 * s, c, 1, nk(0.2 * s, 0.5 * s));
    ell(0.035 * s, 0.035 * s, 0.07 * s, 0, 0.53 * s, 0.35 * s, shade(c, 0.85), 1, nk(0.2 * s, 0.5 * s));
    for (const sx of [-1, 1]) { const e = new THREE.ConeGeometry(0.026 * s, 0.08 * s, 5); e.translate(sx * 0.045 * s, 0.65 * s, 0.24 * s); P.add(e, shade(c, 0.85), 1, nk(0.2 * s, 0.5 * s)); }
    tail(0, 0.46 * s, -0.26 * s, (dog ? 0.22 : 0.26) * s, c, dog ? 2.2 : 2.5);
  } else if (kind === 'goat' || kind === 'sheep') {
    const sheep = kind === 'sheep', b = sheep ? C('#ddd5c4') : C('#3b3430'), face = sheep ? C('#3a302a') : b;
    legs(sheep ? face : b, 0.1, 0.22, -0.22, 0.42, 0.04, C('#2a2420'));
    ell(sheep ? 0.22 : 0.17, sheep ? 0.2 : 0.17, 0.34, 0, 0.6, 0, b, 0, [0, 0.55, 0]);
    ell(0.085, 0.095, 0.15, 0, 0.75, 0.38, face, 1, nk(0.3, 0.68), 10);
    if (!sheep) for (const sx of [-1, 1]) { const hn = new THREE.ConeGeometry(0.022, 0.18, 6); hn.rotateX(-0.7); hn.translate(sx * 0.045, 0.88, 0.33); P.add(hn, C('#6b5a48'), 1, nk(0.3, 0.68)); }
    tail(0, 0.66, -0.32, 0.12, b, sheep ? 0.3 : 1.6);
  } else if (kind === 'buffalo') {
    const c = C('#2e2a28');
    legs(c, 0.2, 0.45, -0.45, 0.75, 0.075, C('#1e1a18'));
    ell(0.34, 0.34, 0.72, 0, 1.05, 0, c, 0, [0, 1.0, 0], 14);
    ell(0.16, 0.18, 0.28, 0, 1.0, 0.82, c, 1, nk(0.6, 1.05));
    for (const sx of [-1, 1]) { const h = new THREE.TorusGeometry(0.2, 0.035, 5, 10, Math.PI * 0.8); h.rotateY(Math.PI / 2); h.rotateZ(sx * 0.5); h.translate(sx * 0.18, 1.18, 0.72); P.add(h, C('#4a4038'), 1, nk(0.6, 1.05)); }
    tail(0, 1.2, -0.7, 0.6, c, 0.15);
  } else if (kind === 'chicken' || kind === 'rooster' || kind === 'chick' || kind === 'peafowl') {
    const pea = kind === 'peafowl', roo = kind === 'rooster', ch = kind === 'chick', s = pea ? 2.2 : ch ? 0.45 : 1;
    const body = pea ? C('#1f4e8a') : ch ? C('#e3c35a') : roo ? C('#9a4a22') : C('#b88a55');
    for (const [sx, part] of [[-1, 4], [1, 5]]) P.add(seg([sx * 0.035 * s, 0.13 * s, 0], [sx * 0.035 * s, 0.0, 0.01], 0.008 * s, 0.007 * s, 4), C(pea ? '#8a8478' : '#d9a33a'), part, [sx * 0.035 * s, 0.13 * s, 0]);
    ell(0.085 * s, 0.08 * s, 0.12 * s, 0, 0.19 * s, 0, body, 0, [0, 0.15 * s, 0]);
    ell(0.045 * s, 0.05 * s, 0.045 * s, 0, 0.3 * s, 0.09 * s, roo ? C('#c4682a') : body, 1, nk(0.05 * s, 0.24 * s));
    const bk = new THREE.ConeGeometry(0.013 * s, 0.035 * s, 5); bk.rotateX(Math.PI / 2); bk.translate(0, 0.3 * s, 0.14 * s); P.add(bk, C(pea ? '#8a8478' : '#d9a33a'), 1, nk(0.05 * s, 0.24 * s));
    if (!ch && !pea) { const cm = new THREE.BoxGeometry(0.012, roo ? 0.06 : 0.03, roo ? 0.07 : 0.04); cm.translate(0, 0.36, 0.09); P.add(cm, C('#c8261e'), 1, nk(0.05, 0.24)); }
    if (pea) { const train = new THREE.ConeGeometry(0.26, 1.2, 12, 1, true); train.rotateX(-Math.PI / 2 - 0.1); train.translate(0, 0.36, -0.7); P.add(train, C('#2f5a3a'), 8, [0, 0.4, -0.15]); for (let i = 0; i < 5; i++) { const c = new THREE.CylinderGeometry(0.004, 0.004, 0.09, 3); c.translate((i - 2) * 0.012, 0.86, 0.13); P.add(c, body, 1, nk(0.1, 0.55)); } }
    else if (roo) for (let i = 0; i < 4; i++) { const f = new THREE.ConeGeometry(0.02, 0.2, 5); f.rotateX(-0.6 - i * 0.25); f.translate(0, 0.28, -0.12); P.add(f, i % 2 ? C('#1f3a2a') : C('#2b2420'), 8, [0, 0.24, -0.08]); }
  } else if (kind === 'rabbit') {
    const r = C('#9a8268');
    for (const [sx, part] of [[-1, 6], [1, 7]]) { const g = new THREE.SphereGeometry(0.05, 8, 6); g.scale(0.6, 0.7, 1.4); g.translate(sx * 0.06, 0.06, -0.06); P.add(g, r, part, [sx * 0.06, 0.08, -0.04]); }
    ell(0.09, 0.1, 0.14, 0, 0.14, 0, r, 0, [0, 0.1, 0]);
    ell(0.06, 0.06, 0.07, 0, 0.24, 0.11, r, 1, nk(0.08, 0.2));
    for (const sx of [-1, 1]) ell(0.017, 0.08, 0.028, sx * 0.03, 0.36, 0.08, r, 1, nk(0.08, 0.2), 6);
  } else if (kind === 'langur' || kind === 'macaque') {
    const lang = kind === 'langur', fur = lang ? C('#b8b2a6') : C('#8a6a48'), face = lang ? C('#1c1a18') : C('#c98a7a'), lh = lang ? 0.36 : 0.26;
    legs(fur, 0.08, 0.13, -0.13, lh + 0.04, 0.032);
    ell(0.1, 0.12, 0.2, 0, lh + 0.1, 0, fur, 0, [0, lh, 0], 10);
    ell(0.075, 0.08, 0.075, 0, lh + 0.22, 0.2, fur, 1, nk(0.14, lh + 0.18), 10);
    ell(0.045, 0.05, 0.03, 0, lh + 0.21, 0.26, face, 1, nk(0.14, lh + 0.18), 8);
    tail(0, lh + 0.12, -0.18, lang ? 0.75 : 0.18, fur, lang ? 2.3 : 2.0);
  }
  return P.build(55);
}
export const SMALL_ANIMALS = new Set(['dog', 'cat', 'goat', 'sheep', 'buffalo', 'chicken', 'rooster', 'chick', 'peafowl', 'rabbit', 'langur', 'macaque']);

// ---------------------------------------------------------------- the animated material
// instance attribute aAnim: x walk phase (radians), y walking (0..1), z seed, w idle action (id + progress)
export function animMaterial(base, uTime) {
  const prev = base.onBeforeCompile;
  base.onBeforeCompile = (sh, r) => {
    if (prev) prev.call(base, sh, r);
    sh.uniforms.uFigT = uTime;
    sh.vertexShader = `uniform float uFigT; attribute float aPart; attribute vec3 aPivot; attribute vec4 aAnim;
mat3 rX(float a){ float c=cos(a), s=sin(a); return mat3(1.,0.,0., 0.,c,s, 0.,-s,c); }
mat3 rY(float a){ float c=cos(a), s=sin(a); return mat3(c,0.,-s, 0.,1.,0., s,0.,c); }
mat3 rZ(float a){ float c=cos(a), s=sin(a); return mat3(c,s,0., -s,c,0., 0.,0.,1.); }
float bell(float f){ return sin(clamp(f,0.,1.)*3.14159); }
mat3 figRot(float part, float animal, out vec3 lift){
  float ph = aAnim.x, wk = aAnim.y, sd = aAnim.z, act = floor(aAnim.w), f = fract(aAnim.w), t = uFigT + sd * 37.0, idle = 1.0 - wk;
  lift = vec3(0.0);
  if (animal > 0.5) {
    if (part > 3.5 && part < 7.5) { float pair = (part == 4.0 || part == 7.0) ? 1.0 : -1.0; return rX(sin(ph) * 0.5 * wk * pair); }
    if (part == 8.0) return rY(sin(t * (2.0 + 6.0 * wk)) * (0.25 + 0.2 * idle));
    if (part == 1.0) return rX(sin(ph * 2.0) * 0.06 * wk + idle * (sin(t * 0.6) * 0.15 + (act == 1.0 ? 0.5 * bell(f) : 0.0))) * rY(idle * sin(t * 0.31) * 0.35);
    lift.y = abs(sin(ph)) * 0.02 * wk;
    return mat3(1.0);
  }
  // people
  if (part == 4.0 || part == 5.0) { float s = part == 4.0 ? 1.0 : -1.0; float a = sin(ph) * 0.55 * wk * s + idle * (act == 4.0 ? 0.12 * bell(f) * s : 0.0); return rX(a); }
  if (part == 2.0 || part == 3.0) {
    float s = part == 2.0 ? -1.0 : 1.0;
    float a = -sin(ph) * 0.42 * wk * s + idle * sin(t * 0.8 + s) * 0.03;
    float z = idle * 0.04 * s;
    if (part == 3.0 && act == 1.0) { a -= 2.5 * bell(f); z += 0.35 * bell(f); }            // a hand to the head or the turban
    if (act == 2.0) { a -= 2.9 * bell(f); z += 0.25 * s * bell(f); }                          // a stretch, both arms up
    if (part == 2.0 && act == 5.0) { a -= 0.6 * bell(f); }                                    // a hand on the hip
    return rX(a) * rZ(z);
  }
  if (part == 1.0) {
    float yaw = idle * (sin(t * 0.21) * 0.22 + (act == 3.0 ? sin(f * 6.28) * 0.75 : 0.0));   // looking about
    float nod = idle * sin(t * 0.43) * 0.05 + (act == 1.0 ? 0.18 * bell(f) : 0.0);
    return rY(yaw) * rX(nod);
  }
  // the body: breathing, weight shifting from foot to foot, the bob of walking
  lift = vec3(idle * sin(t * 0.37) * 0.018 + (act == 4.0 ? 0.04 * bell(f) : 0.0), abs(sin(ph)) * 0.035 * wk, 0.0);
  return rZ(idle * sin(t * 0.37) * 0.025);
}
` + sh.vertexShader
      .replace('#include <beginnormal_vertex>', `vec3 objectNormal = vec3(normal);
  vec3 figLift; mat3 figR = figRot(aPart, step(100.0, aAnim.z), figLift);
  objectNormal = figR * objectNormal;
  #ifdef USE_TANGENT
    vec3 objectTangent = vec3(tangent.xyz);
  #endif`)
      .replace('#include <begin_vertex>', `vec3 transformed = aPivot + figR * (position - aPivot) + figLift;
  if (aPart == 0.0 && position.y > aPivot.y + 0.3 && aAnim.z < 100.0) { float br = sin((uFigT + aAnim.z * 37.0) * 1.6) * 0.012 * (1.0 - aAnim.y); transformed.xz *= 1.0 + br; }`);
  };
  base.customProgramCacheKey = () => 'figures:' + (prev ? 'atmo' : '');
  return base;
}
