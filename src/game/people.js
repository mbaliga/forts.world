// People and animals that live in a fort: instanced low-poly figures that wander, patrol or stand.
import * as THREE from 'three';
import { Mesher, C, shade, mix, smoothGeometry } from '../core/mesher.js';
import { RIGGED, MODELS, makeRig } from './fauna3d.js';
import { makeCharacter } from './characters.js';
import { figureGeometry as figureGeo2, smallAnimalGeometry, SMALL_ANIMALS, animMaterial } from './figures.js';
import { rng, pointInPoly, bbox, TAU } from '../core/geom.js';

// figure looks (colours are hex)
export const KINDS = {
  // garrison and court
  'guard-siddi': { top: '#e9e4d6', bottom: '#e9e4d6', sash: '#2f6b45', head: 'turban', hat: '#f1ede2', prop: 'spear', skin: '#5e3f2c' },
  'musketeer-maratha': { top: '#efe9da', bottom: '#efe9da', sash: '#d07020', head: 'pagdi', hat: '#d9751d', prop: 'musket', skin: '#8a5a3c' },
  'guard-maratha': { top: '#efe9da', bottom: '#efe9da', sash: '#d07020', head: 'pagdi', hat: '#d9751d', prop: 'spear', skin: '#8a5a3c' },
  // Placeholder appearance for the Vasai prototype; dress and equipment require research.
  'guard-portuguese': { top: '#ded6c4', bottom: '#5d554c', sash: '#8c4540', head: 'cap', hat: '#5d554c', prop: 'musket', skin: '#94633f' },
  'guard-mughal': { top: '#f2eee3', bottom: '#b8452a', sash: '#b8452a', head: 'turban', hat: '#f2eee3', prop: 'musket', skin: '#94633f', long: true },
  'guard-rajput': { top: '#f1ece0', bottom: '#f1ece0', sash: '#c9361f', head: 'safa', hat: '#e3a11c', prop: 'spear', skin: '#93603f', long: true },
  'guard-deccan': { top: '#ece6d6', bottom: '#2d4a6b', sash: '#2d4a6b', head: 'turban', hat: '#ece6d6', prop: 'spear', skin: '#7a4f34', long: true },
  'courtier': { top: '#f4f0e6', bottom: '#f4f0e6', sash: '#7a2d5a', head: 'turban', hat: '#d6b23a', prop: null, skin: '#9a6a48', long: true },
  'sailor': { top: '#d9d2bf', bottom: '#3d5a80', sash: '#a33d2b', head: 'cap', hat: '#c03a2b', prop: null, skin: '#6a4630' },
  'sepoy': { top: '#c8b48a', bottom: '#c8b48a', sash: '#9e2a22', head: 'pagdi', hat: '#9e2a22', prop: 'musket', skin: '#7d5236' },
  'officer': { top: '#ece8dc', bottom: '#ece8dc', sash: '#6b5a3a', head: 'hat', hat: '#efe9da', prop: 'staff', skin: '#d9b08c' },
  'lady': { top: '#9fb3c8', bottom: '#9fb3c8', sash: '#f2efe6', head: 'hat', hat: '#f2efe6', prop: 'umbrella', skin: '#e0b896', skirt: true },
  // townsfolk
  'villager': { top: '#e6dfcf', bottom: '#e6dfcf', sash: '#8a6a4a', head: 'cap', hat: '#f0ebe0', prop: 'staff', skin: '#7f5438' },
  'merchant': { top: '#f2ede1', bottom: '#f2ede1', sash: '#4b6b3a', head: 'pagdi', hat: '#8e2a2a', prop: 'pack', skin: '#94633f' },
  'priest': { top: '#e78b2a', bottom: '#f1e6cc', sash: '#e78b2a', head: 'none', hat: null, prop: 'staff', skin: '#8d5c3c' },
  'pilgrim': { top: '#e08a1e', bottom: '#e08a1e', sash: '#f2e8d0', head: 'scarf', hat: '#e08a1e', prop: 'staff', skin: '#86583a' },
  'woman-red': { top: '#b53a2a', bottom: '#b53a2a', sash: '#e1b13c', head: 'veil', hat: '#c94a34', prop: null, skin: '#8f5e40', skirt: true },
  'woman-green': { top: '#2f7a52', bottom: '#2f7a52', sash: '#e3c35a', head: 'veil', hat: '#3a8a60', prop: 'pot', skin: '#8a5a3c', skirt: true },
  'woman-indigo': { top: '#2f3f7a', bottom: '#2f3f7a', sash: '#d68b2a', head: 'veil', hat: '#3b4c8c', prop: null, skin: '#93613f', skirt: true },
  'boatman': { top: '#efe9dc', bottom: '#2f5d8a', sash: '#2f5d8a', head: 'cap', hat: '#d9d0bd', prop: 'oar', skin: '#5e3e2a' },
  'fisherwoman': { top: '#7a3a6a', bottom: '#2f6f6a', sash: '#e0a030', head: 'none', hat: null, prop: 'basket', skin: '#6a4430', skirt: true },
  // today
  'tourist-a': { top: '#e0573d', bottom: '#3b4f6b', sash: '#3b4f6b', head: 'cap', hat: '#222a30', prop: 'pack', skin: '#90613f' },
  'tourist-b': { top: '#f2c64a', bottom: '#5b6a74', sash: '#5b6a74', head: 'none', hat: null, prop: 'umbrella', skin: '#a8754f' },
  'tourist-c': { top: '#3e8ebf', bottom: '#e9e4d8', sash: '#e9e4d8', head: 'hat', hat: '#e9dcc0', prop: 'camera', skin: '#c99a76' },
  'tourist-d': { top: '#c2417a', bottom: '#c2417a', sash: '#f0d070', head: 'veil', hat: '#d65a8a', prop: 'pack', skin: '#8e5d3e', skirt: true },
  'asi-guard': { top: '#b9a77a', bottom: '#b9a77a', sash: '#5a4a2a', head: 'cap', hat: '#6b5a33', prop: 'staff', skin: '#7d5236' },
  'musketeer-siddi': { top: '#e4ddcb', bottom: '#e4ddcb', sash: '#2f6b45', head: 'turban', hat: '#2f6b45', prop: 'musket', skin: '#4f3424' },
  'gunner-siddi': { top: '#d8cfba', bottom: '#5a4a3a', sash: '#8a2a22', head: 'cap', hat: '#d8cfba', prop: 'rammer', skin: '#4f3424' },
  'porter': { top: '#cdbf9f', bottom: '#cdbf9f', sash: '#7a5a3a', head: 'cap', hat: '#e6dccb', prop: 'sack', skin: '#6a4630' },
  'water-carrier': { top: '#8a3a2a', bottom: '#8a3a2a', sash: '#d9a93a', head: 'veil', hat: '#a04632', prop: 'pot', skin: '#7a4f34', skirt: true },
  'wrestler': { top: '#6a4430', bottom: '#b8452a', sash: '#b8452a', head: 'none', hat: null, prop: null, skin: '#6a4430' },
  'farmer': { top: '#e6dccb', bottom: '#e6dccb', sash: '#7a5a3a', head: 'pagdi', hat: '#e9e2d0', prop: 'hoe', skin: '#6f4a32' },
  'archer-siddi': { top: '#e4ddcb', bottom: '#5a4a3a', sash: '#2f6b45', head: 'turban', hat: '#e4ddcb', prop: 'bow', skin: '#4f3424' },
  'settler': { top: '#d9cdb2', bottom: '#d9cdb2', sash: '#8a5a3a', head: 'pagdi', hat: '#c9a14a', prop: 'sack', skin: '#7a5236' },
  'student': { top: '#ffffff', bottom: '#2d3d6a', sash: '#2d3d6a', head: 'none', hat: null, prop: 'pack', skin: '#94633f' },
};
export const ANIMALS = { langur: 1, macaque: 1, peafowl: 1, boar: 1, wolf: 1, elephant: 1, 'elephant-royal': 1, camel: 1, horse: 1, 'horse-grey': 1, 'horse-chestnut': 1, 'horse-black': 1, 'horse-war': 1, cow: 1, buffalo: 1, goat: 1, sheep: 1, dog: 1, cat: 1, rabbit: 1, chicken: 1, rooster: 1, chick: 1 };
// how each animal can be dealt with: tame (ride), befriend (follows), herd (leads), catch (carry, pen, breed)
export const ANIMAL_TRAITS = {
  horse: { tame: true, ride: true, speed: 0.9, flee: 4 }, 'horse-grey': { tame: true, ride: true, speed: 0.9, flee: 4 }, 'horse-chestnut': { tame: true, ride: true, speed: 0.9, flee: 4 },
  'horse-black': { tame: true, ride: true, speed: 0.9, flee: 4 }, 'horse-war': { tame: true, ride: true, speed: 0.9 }, dog: { befriend: true, speed: 1.1 }, cat: { flee: 3, speed: 1.0 },
  sheep: { herd: true, breed: 'sheep', products: ['wool', 'milk'], speed: 0.6 }, goat: { herd: true, breed: 'goat', products: ['milk'], speed: 0.65 },
  cow: { herd: true, breed: 'cow', products: ['milk'], speed: 0.5 }, buffalo: { herd: true, breed: 'buffalo', products: ['milk'], speed: 0.45 },
  chicken: { catch: true, breed: 'chicken', products: ['eggs'], flee: 3.5, speed: 0.8 }, rooster: { catch: true, breed: 'chicken', flee: 3.5, speed: 0.8 },
  chick: { catch: true, breed: 'chicken', flee: 2.5, speed: 0.6 }, rabbit: { catch: true, breed: 'rabbit', flee: 6, speed: 2.4 },
  // wild animals: they keep their distance and cannot be caught or led
  boar: { flee: 9, wild: true, speed: 1.0 }, langur: { flee: 4, wild: true, speed: 1.4 }, macaque: { flee: 3, wild: true, speed: 1.4 }, wolf: { flee: 14, wild: true, speed: 1.2 }, peafowl: { flee: 5, wild: true, speed: 0.6 },
};

function figureGeometry(spec, frame) {
  const M = new Mesher(0.03);
  const g = new THREE.Group();
  const top = C(spec.top), bot = C(spec.bottom), sash = C(spec.sash), skin = C(spec.skin), hat = spec.hat ? C(spec.hat) : null;
  const add = (geo, col, m) => { M.geometry(geo, m || null, col); };
  const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
  const R = (ax, ang) => new THREE.Matrix4().makeRotationAxis(ax, ang);
  const X = new THREE.Vector3(1, 0, 0);
  const swing = frame === 1 ? 0.5 : frame === 2 ? -0.5 : 0;
  // legs
  for (const [sx, s] of [[-1, swing], [1, -swing]]) {
    const leg = new THREE.CylinderGeometry(0.085, 0.065, 0.88, 9); leg.translate(0, -0.44, 0);
    const m = T(sx * 0.1, 0.9, 0).multiply(R(X, s));
    add(leg, spec.skirt ? skin : bot, m);
    const foot = new THREE.CapsuleGeometry(0.06, 0.14, 3, 8); foot.rotateX(Math.PI / 2); foot.translate(0, -0.87, 0.05);
    add(foot, C('#4a3426'), m);
  }
  if (spec.skirt) {
    const sk = new THREE.CylinderGeometry(0.2, 0.42, 0.95, 8); sk.translate(0, 0.62, 0); add(sk, bot);
  } else if (spec.long) {
    const sk = new THREE.CylinderGeometry(0.22, 0.36, 0.7, 12); sk.translate(0, 0.86, 0); add(sk, top);
  }
  const torso = new THREE.CylinderGeometry(0.23, 0.2, 0.62, 12); torso.translate(0, 1.42, 0); add(torso, top);
  const belt = new THREE.CylinderGeometry(0.215, 0.215, 0.08, 12); belt.translate(0, 1.16, 0); add(belt, sash);
  // arms (opposite swing)
  for (const [sx, s] of [[-1, -swing * 0.7], [1, swing * 0.7]]) {
    const arm = new THREE.CylinderGeometry(0.06, 0.05, 0.6, 8); arm.translate(0, -0.29, 0);
    const m = T(sx * 0.29, 1.68, 0).multiply(R(X, s));
    add(arm, top, m);
    const hand = new THREE.SphereGeometry(0.055, 8, 6); hand.translate(0, -0.62, 0); add(hand, skin, m);
  }
  const head = new THREE.SphereGeometry(0.115, 12, 10); head.scale(0.95, 1.1, 1); head.translate(0, 1.88, 0); add(head, skin);
  const h = spec.head;
  if (h === 'turban' || h === 'pagdi' || h === 'safa') {
    const t1 = new THREE.CylinderGeometry(h === 'safa' ? 0.16 : 0.14, 0.13, h === 'pagdi' ? 0.11 : 0.15, 12); t1.translate(0, 2.04, 0); add(t1, hat);
    if (h === 'safa') { const tail = new THREE.BoxGeometry(0.07, 0.34, 0.04); tail.translate(0, 1.86, -0.13); add(tail, hat); }
    if (h === 'pagdi') { const t2 = new THREE.CylinderGeometry(0.09, 0.14, 0.08, 12); t2.translate(0, 2.13, 0.02); add(t2, hat); }
  } else if (h === 'cap') { const c = new THREE.CylinderGeometry(0.115, 0.12, 0.08, 12); c.translate(0, 2.03, 0); add(c, hat); }
  else if (h === 'hat') { const c = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 8); c.translate(0, 2.06, 0); add(c, hat); const b = new THREE.CylinderGeometry(0.2, 0.2, 0.02, 10); b.translate(0, 2.0, 0); add(b, hat); }
  else if (h === 'veil' || h === 'scarf') { const v = new THREE.BoxGeometry(0.26, 0.28, 0.27); v.translate(0, 1.9, -0.03); add(v, hat); const back = new THREE.BoxGeometry(0.3, 0.55, 0.06); back.translate(0, 1.62, -0.16); add(back, hat); }
  else { const hair = new THREE.BoxGeometry(0.21, 0.07, 0.22); hair.translate(0, 2.02, -0.01); add(hair, C('#221a14')); }
  const p = spec.prop;
  if (p === 'spear') { const s = new THREE.CylinderGeometry(0.025, 0.025, 2.5, 4); s.translate(0.36, 1.2, 0.05); add(s, C('#5a4030')); const tip = new THREE.ConeGeometry(0.05, 0.22, 4); tip.translate(0.36, 2.55, 0.05); add(tip, C('#c9c3b5')); }
  else if (p === 'musket') { const s = new THREE.BoxGeometry(0.05, 1.5, 0.05); s.rotateZ(0.3); s.translate(0.12, 1.45, -0.2); add(s, C('#3e2c20')); }
  else if (p === 'staff') { const s = new THREE.CylinderGeometry(0.025, 0.03, 1.7, 4); s.translate(0.36, 0.85, 0.08); add(s, C('#6b4c32')); }
  else if (p === 'umbrella') { const s = new THREE.CylinderGeometry(0.015, 0.015, 1.1, 4); s.translate(0.3, 1.9, 0.1); add(s, C('#333')); const c = new THREE.ConeGeometry(0.62, 0.3, 8); c.translate(0.3, 2.5, 0.1); add(c, C(spec.top)); }
  else if (p === 'pack') { const b = new THREE.BoxGeometry(0.3, 0.38, 0.16); b.translate(0, 1.42, -0.22); add(b, C(spec.sash)); }
  else if (p === 'pot') { const s = new THREE.SphereGeometry(0.16, 7, 5); s.translate(0, 2.18, 0); add(s, C('#b5653a')); }
  else if (p === 'basket') { const s = new THREE.CylinderGeometry(0.24, 0.18, 0.14, 8); s.translate(0, 2.1, 0); add(s, C('#a9874f')); }
  else if (p === 'oar') { const s = new THREE.CylinderGeometry(0.02, 0.02, 2.2, 4); s.rotateZ(0.5); s.translate(0.3, 1.3, 0.1); add(s, C('#7a5a3a')); }
  else if (p === 'rammer') { const s = new THREE.CylinderGeometry(0.025, 0.025, 2.6, 4); s.rotateZ(0.12); s.translate(0.34, 1.25, 0.05); add(s, C('#6b4c32')); const sp = new THREE.CylinderGeometry(0.08, 0.08, 0.22, 12); sp.translate(0.5, 2.55, 0.05); add(sp, C('#3a3028')); }
  else if (p === 'sack') { const b = new THREE.BoxGeometry(0.46, 0.26, 0.34); b.rotateZ(0.12); b.translate(0.02, 2.14, 0); add(b, C('#b8a070')); }
  else if (p === 'hoe') { const s = new THREE.CylinderGeometry(0.022, 0.022, 1.3, 6); s.rotateZ(0.5); s.translate(0.3, 1.1, 0.18); add(s, C('#6b4c32')); const b = new THREE.BoxGeometry(0.22, 0.03, 0.14); b.translate(0.62, 0.55, 0.18); add(b, C('#4a4440')); }
  else if (p === 'bow') { const b = new THREE.TorusGeometry(0.62, 0.02, 4, 16, Math.PI * 0.9); b.rotateZ(-Math.PI * 0.45); b.translate(0.32, 1.35, 0.1); add(b, C('#5a3a22')); const q = new THREE.CylinderGeometry(0.06, 0.05, 0.6, 8); q.rotateZ(0.3); q.translate(-0.12, 1.5, -0.2); add(q, C('#7a5a3a')); }
  else if (p === 'camera') { const s = new THREE.BoxGeometry(0.14, 0.09, 0.08); s.translate(0, 1.55, 0.22); add(s, C('#202020')); }
  void g;
  const geo = smoothGeometry(M.toGeometry(), 50);
  // true height: the model is drawn about 2.0 m tall; men average 1.65 m, women 1.52 m
  const k = spec.skirt ? 0.755 : 0.82; geo.scale(k, k, k);
  return geo;
}

function animalGeometry(kind, frame) {
  // rounded bodies (capsules and ellipsoids) on jointed legs; faces +Z. frame 1/2 swing the legs.
  const M = new Mesher(0.02);
  const add = (geo, col, m) => M.geometry(geo, m || null, col);
  const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
  const X = new THREE.Vector3(1, 0, 0);
  const R = (a) => new THREE.Matrix4().makeRotationAxis(X, a);
  const sw = frame === 1 ? 0.38 : frame === 2 ? -0.38 : 0;
  const ell = (rx, ry, rz, x, y, z, col, seg = 12, rot = 0) => { const g = new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)); g.scale(rx, ry, rz); if (rot) g.rotateX(rot); g.translate(x, y, z); add(g, col); };
  const cap = (r, len, x, y, z, col, rotX = 0, rotZ = 0) => { const g = new THREE.CapsuleGeometry(r, len, 4, 10); if (rotX) g.rotateX(rotX); if (rotZ) g.rotateZ(rotZ); g.translate(x, y, z); add(g, col); };
  const legs = (col, lx, lz, ly, w, hoof = null) => {
    let k = 0;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const g = new THREE.CapsuleGeometry(w / 2, ly - w, 3, 8); g.translate(0, -ly / 2, 0);
      const s2 = (k === 0 || k === 3) ? sw : -sw; k++;
      add(g, col, T(sx * lx, ly, sz * lz).multiply(R(s2)));
      if (hoof) { const h = new THREE.CylinderGeometry(w * 0.55, w * 0.6, w * 0.6, 8); h.translate(0, -ly + w * 0.3, 0); add(h, hoof, T(sx * lx, ly, sz * lz).multiply(R(s2))); }
    }
  };
  const tail = (x, y, z, len, col, droop = 0.9) => { const g = new THREE.CylinderGeometry(0.02, 0.05, len, 6); g.translate(0, -len / 2, 0); add(g, col, T(x, y, z).multiply(R(-Math.PI + droop))); };
  if (kind === 'elephant' || kind === 'elephant-royal') {
    const grey = C('#7d7a76');
    legs(grey, 0.6, 1.0, 1.75, 0.55);
    ell(1.0, 1.0, 1.6, 0, 2.35, 0, grey, 16);
    ell(0.65, 0.68, 0.62, 0, 2.75, 1.55, grey, 14);
    const tr = new THREE.CylinderGeometry(0.1, 0.22, 1.75, 10, 4); tr.translate(0, -0.85, 0); add(tr, grey, T(0, 2.55, 1.95).multiply(R(0.18)));
    for (const sx of [-1, 1]) { ell(0.08, 0.5, 0.42, sx * 0.62, 2.8, 1.3, shade(grey, 0.92), 10); const tk = new THREE.ConeGeometry(0.06, 0.65, 8); tk.rotateX(-1.1); tk.translate(sx * 0.26, 2.25, 2.0); add(tk, C('#efe8d6')); }
    tail(0, 2.6, -1.55, 0.9, grey);
    if (kind === 'elephant-royal') {
      const cloth = new THREE.BoxGeometry(1.95, 1.0, 2.2); cloth.translate(0, 2.7, -0.1); add(cloth, C('#a8262a'));
      const howdah = new THREE.BoxGeometry(1.2, 0.7, 1.3); howdah.translate(0, 3.55, -0.2); add(howdah, C('#d9a93a'));
      const canopy = new THREE.ConeGeometry(0.85, 0.6, 4); canopy.rotateY(Math.PI / 4); canopy.translate(0, 4.6, -0.2); add(canopy, C('#a8262a'));
    }
  } else if (kind === 'camel') {
    const tan = C('#b98d5a');
    legs(tan, 0.28, 0.65, 1.6, 0.2);
    ell(0.48, 0.45, 0.95, 0, 1.9, 0, tan);
    ell(0.4, 0.42, 0.4, 0, 2.38, -0.05, shade(tan, 1.05));
    cap(0.13, 0.9, 0, 2.3, 1.0, tan, 0.75);
    ell(0.15, 0.15, 0.32, 0, 2.75, 1.45, tan);
    tail(0, 1.95, -0.92, 0.6, tan);
  } else if (kind.startsWith('horse')) {
    // a light Indian horse (Marwari/Kathiawari type): deep chest, sloping croup, long fine legs, arched neck,
    // inward-curving ear tips, long mane and tail; coats vary; war horses wear a saddle cloth and bridle
    const coat = { horse: '#6b4530', 'horse-grey': '#c9c3b6', 'horse-chestnut': '#8a4a26', 'horse-black': '#2a2420', 'horse-war': '#f0ece2' }[kind] || '#6b4530';
    const br = C(coat), mane = kind === 'horse-grey' || kind === 'horse-war' ? C('#e9e4d8') : kind === 'horse-chestnut' ? C('#6a3418') : C('#1f1712');
    const sock = kind === 'horse-chestnut' || kind === 'horse' ? C('#e8e2d6') : shade(br, 0.85);
    // legs: forearm/cannon with a knee, hoof
    let k2 = 0;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const fore = sz > 0, s2 = (k2 === 0 || k2 === 3) ? sw : -sw; k2++;
      const m = T(sx * 0.17, 1.1, sz * 0.52).multiply(R(s2));
      const up = new THREE.CylinderGeometry(fore ? 0.085 : 0.1, 0.07, 0.55, 9); up.translate(0, -0.27, fore ? 0.02 : -0.03); add(up, br, m);
      const lo = new THREE.CylinderGeometry(0.05, 0.045, 0.48, 8); lo.translate(0, -0.78, fore ? 0.03 : -0.06); add(lo, k2 % 3 === 0 ? sock : br, m);
      const hoof = new THREE.CylinderGeometry(0.055, 0.065, 0.09, 9); hoof.translate(0, -1.06, fore ? 0.04 : -0.05); add(hoof, C('#2a2420'), m);
    }
    ell(0.27, 0.3, 0.62, 0, 1.42, 0.02, br, 16);                 // barrel
    ell(0.28, 0.31, 0.3, 0, 1.47, 0.42, br, 14);                 // chest and shoulder
    ell(0.29, 0.31, 0.32, 0, 1.47, -0.42, shade(br, 0.98), 14);  // quarters
    cap(0.13, 0.48, 0, 1.86, 0.72, br, 0.62);                    // neck, arched forward
    ell(0.1, 0.12, 0.3, 0, 2.06, 1.04, br, 12, 0.85);            // head
    ell(0.075, 0.07, 0.1, 0, 1.9, 1.22, shade(br, 0.9), 10);     // muzzle
    for (const sx of [-1, 1]) { const e = new THREE.ConeGeometry(0.035, 0.15, 6); e.rotateZ(-sx * 0.35); e.translate(sx * 0.06, 2.28, 0.9); add(e, br); }
    const mn = new THREE.BoxGeometry(0.05, 0.12, 0.55); mn.rotateX(-0.95); mn.translate(0, 2.0, 0.66); add(mn, mane);
    const tl = new THREE.CylinderGeometry(0.03, 0.09, 0.85, 8); tl.translate(0, -0.42, 0); add(tl, mane, T(0, 1.58, -0.72).multiply(R(0.35)));
    if (kind === 'horse-war') {
      const cloth = new THREE.CylinderGeometry(0.32, 0.36, 0.7, 14, 1, true, -Math.PI * 0.6, Math.PI * 1.2); cloth.rotateX(Math.PI / 2); cloth.rotateY(Math.PI / 2); cloth.scale(1, 1, 1); cloth.translate(0, 1.5, 0.02); add(cloth, C('#8a2a22'));
      const fringe = new THREE.TorusGeometry(0.36, 0.02, 4, 18, Math.PI); fringe.rotateY(Math.PI / 2); fringe.translate(0, 1.5, 0.02); add(fringe, C('#d9a93a'));
      ell(0.2, 0.08, 0.26, 0, 1.75, 0.05, C('#5a3420'), 10);   // saddle
      const rein = new THREE.TorusGeometry(0.2, 0.012, 4, 14, Math.PI); rein.rotateX(-0.6); rein.translate(0, 1.9, 0.85); add(rein, C('#3a2418'));
    }
  } else if (kind === 'cow' || kind === 'buffalo') {
    const w = kind === 'buffalo' ? C('#2e2a28') : C('#e6e1d6');
    legs(w, 0.22, 0.52, 0.85, 0.15, C('#3a3028'));
    ell(0.36, 0.36, 0.78, 0, 1.15, 0, w);
    if (kind === 'cow') ell(0.2, 0.17, 0.2, 0, 1.5, 0.45, w); // zebu hump
    ell(0.17, 0.19, 0.3, 0, 1.15, 0.9, w, 10, 0.3);
    const dew = new THREE.BoxGeometry(0.05, 0.3, 0.35); dew.translate(0, 0.85, 0.6); add(dew, w);
    for (const sx of [-1, 1]) { const h = new THREE.ConeGeometry(0.035, kind === 'buffalo' ? 0.45 : 0.28, 6); h.rotateZ(-sx * (kind === 'buffalo' ? 1.2 : 0.4)); h.translate(sx * 0.14, 1.4, 0.85); add(h, C('#5a4a3a')); }
    tail(0, 1.3, -0.75, 0.7, w, 0.2);
  } else if (kind === 'goat' || kind === 'sheep') {
    const sheep = kind === 'sheep';
    const b = sheep ? C('#ddd5c4') : C('#3b3430'), face = sheep ? C('#3a302a') : b;
    legs(sheep ? face : b, 0.12, 0.28, 0.5, 0.08, C('#2a2420'));
    ell(sheep ? 0.26 : 0.19, sheep ? 0.24 : 0.19, 0.4, 0, 0.7, 0, b, 12);
    if (sheep) for (let i = 0; i < 7; i++) ell(0.13, 0.12, 0.13, Math.cos(i * 0.9) * 0.18, 0.82 + (i % 2) * 0.06, -0.25 + i * 0.08, shade(b, 1.04), 8);
    ell(0.1, 0.11, 0.17, 0, 0.88, 0.45, face, 10, 0.4);
    for (const sx of [-1, 1]) { const e = new THREE.SphereGeometry(0.05, 6, 4); e.scale(0.4, 1, 1.4); e.translate(sx * 0.09, 0.92, 0.42); add(e, face); }
    if (!sheep) { for (const sx of [-1, 1]) { const h = new THREE.ConeGeometry(0.025, 0.2, 6); h.rotateX(-0.6); h.translate(sx * 0.05, 1.02, 0.38); add(h, C('#6b5a48')); } }
    tail(0, 0.78, -0.38, 0.14, b, sheep ? 0.2 : 1.6);
  } else if (kind === 'langur' || kind === 'macaque') {
    // Hanuman langur: long-limbed, silver-grey, black face and hands, tail arched over the back;
    // rhesus macaque: stockier, brown, pink face, short tail
    const lang = kind === 'langur', fur = lang ? C('#b8b2a6') : C('#8a6a48'), face = lang ? C('#1c1a18') : C('#c98a7a');
    const lh = lang ? 0.36 : 0.26;
    let k2 = 0;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const s2 = (k2 === 0 || k2 === 3) ? sw : -sw; k2++; const g = new THREE.CapsuleGeometry(0.035, lh, 3, 6); g.translate(0, -lh / 2, 0); add(g, sz > 0 && lang ? shade(fur, 0.7) : fur, T(sx * 0.08, lh + 0.04, sz * 0.13).multiply(R(s2))); }
    ell(0.1, 0.12, 0.2, 0, lh + 0.1, 0, fur, 10);
    ell(0.075, 0.08, 0.075, 0, lh + 0.22, 0.2, fur, 10);
    ell(0.045, 0.05, 0.03, 0, lh + 0.21, 0.26, face, 8);
    const tl = lang ? 0.75 : 0.18; const t = new THREE.CylinderGeometry(0.012, 0.025, tl, 5); t.translate(0, tl / 2, 0); add(t, fur, T(0, lh + 0.12, -0.18).multiply(R(lang ? -2.3 : -2.0)));
  } else if (kind === 'peafowl') {
    // Indian peafowl: blue neck and breast, crest of fan-tipped feathers, long bronze-green train held low
    const blue = C('#1f4e8a'), green = C('#2f5a3a'), bronze = C('#6a6a2a');
    for (const sx of [-1, 1]) { const l = new THREE.CylinderGeometry(0.018, 0.018, 0.42, 5); l.translate(0, -0.21, 0); add(l, C('#8a8478'), T(sx * 0.06, 0.42, 0).multiply(R(sx * sw))); }
    ell(0.13, 0.13, 0.22, 0, 0.55, 0, blue, 12);
    cap(0.04, 0.32, 0, 0.82, 0.14, blue, -0.35);
    ell(0.05, 0.055, 0.07, 0, 1.03, 0.2, blue, 8);
    const bk = new THREE.ConeGeometry(0.014, 0.05, 5); bk.rotateX(Math.PI / 2); bk.translate(0, 1.02, 0.28); add(bk, C('#8a8478'));
    for (let i = 0; i < 5; i++) { const c = new THREE.CylinderGeometry(0.004, 0.004, 0.1, 3); c.translate(0, 0.05, 0); add(c, blue, T((i - 2) * 0.012, 1.07, 0.19).multiply(R(-0.2 + (i - 2) * 0.04))); const tip = new THREE.SphereGeometry(0.014, 5, 4); tip.translate(0, 0.11, 0); add(tip, blue, T((i - 2) * 0.012, 1.07, 0.19).multiply(R(-0.2 + (i - 2) * 0.04))); }
    const train = new THREE.ConeGeometry(0.28, 1.25, 10, 1, true); train.rotateX(-Math.PI / 2 - 0.12); train.translate(0, 0.42, -0.72); add(train, green);
    for (let i = 0; i < 9; i++) { const e = new THREE.SphereGeometry(0.03, 5, 4); e.scale(1, 0.4, 1); const a = (i / 8 - 0.5) * 1.6; e.translate(Math.sin(a) * 0.22, 0.32 + Math.cos(a) * 0.05, -1.18 + Math.abs(a) * 0.1); add(e, bronze); }
  } else if (kind === 'dog') {
    const d = C('#b08550');
    legs(d, 0.09, 0.22, 0.42, 0.07);
    ell(0.13, 0.14, 0.34, 0, 0.55, 0, d, 12);
    ell(0.1, 0.1, 0.12, 0, 0.72, 0.33, d, 10);
    ell(0.05, 0.05, 0.09, 0, 0.69, 0.45, shade(d, 0.9), 8);
    for (const sx of [-1, 1]) { const e = new THREE.ConeGeometry(0.035, 0.1, 5); e.translate(sx * 0.055, 0.84, 0.31); add(e, shade(d, 0.85)); }
    tail(0, 0.6, -0.32, 0.26, d, 2.4);
  } else if (kind === 'cat') {
    const c = C('#8a7a68');
    legs(c, 0.05, 0.13, 0.22, 0.045);
    ell(0.07, 0.075, 0.18, 0, 0.3, 0, c, 10);
    ell(0.06, 0.06, 0.06, 0, 0.4, 0.18, c, 8);
    for (const sx of [-1, 1]) { const e = new THREE.ConeGeometry(0.02, 0.05, 4); e.translate(sx * 0.03, 0.47, 0.18); add(e, c); }
    tail(0, 0.33, -0.17, 0.22, c, 2.6);
  } else if (kind === 'rabbit') {
    const r = C('#9a8268');
    ell(0.1, 0.1, 0.14, 0, 0.13 + Math.abs(sw) * 0.15, 0, r, 10);
    ell(0.065, 0.065, 0.07, 0, 0.23 + Math.abs(sw) * 0.15, 0.11, r, 8);
    for (const sx of [-1, 1]) ell(0.018, 0.08, 0.03, sx * 0.03, 0.35 + Math.abs(sw) * 0.15, 0.08, r, 6);
    ell(0.03, 0.03, 0.03, 0, 0.15 + Math.abs(sw) * 0.15, -0.14, C('#efe8dc'), 6);
  } else if (kind === 'chicken' || kind === 'rooster' || kind === 'chick') {
    const roo = kind === 'rooster', chick = kind === 'chick', k = chick ? 0.45 : 1;
    const body = chick ? C('#e3c35a') : roo ? C('#9a4a22') : C('#b88a55');
    for (const sx of [-1, 1]) { const l = new THREE.CylinderGeometry(0.01 * k, 0.01 * k, 0.14 * k, 4); l.translate(0, -0.07 * k, 0); add(l, C('#d9a33a'), T(sx * 0.04 * k, 0.14 * k, 0).multiply(R(sx * sw))); }
    ell(0.09 * k, 0.085 * k, 0.12 * k, 0, 0.21 * k, 0, body, 10);
    ell(0.05 * k, 0.055 * k, 0.05 * k, 0, 0.33 * k, 0.09 * k, roo ? C('#c4682a') : body, 8);
    const bk = new THREE.ConeGeometry(0.014 * k, 0.04 * k, 5); bk.rotateX(Math.PI / 2); bk.translate(0, 0.33 * k, 0.15 * k); add(bk, C('#d9a33a'));
    if (!chick) { const cm = new THREE.BoxGeometry(0.012, roo ? 0.06 : 0.03, roo ? 0.07 : 0.04); cm.translate(0, 0.39, 0.09); add(cm, C('#c8261e')); }
    if (roo) { for (let i = 0; i < 4; i++) { const f = new THREE.ConeGeometry(0.02, 0.2, 5); f.rotateX(-0.6 - i * 0.25); f.translate(0, 0.3, -0.12); add(f, i % 2 ? C('#1f3a2a') : C('#2b2420')); } }
    else if (!chick) ell(0.04, 0.05, 0.03, 0, 0.27, -0.12, shade(body, 0.85), 6);
  }
  const geo = smoothGeometry(M.toGeometry(), 55);
  const k = kind === 'dog' ? 0.74 : kind === 'goat' ? 0.88 : 1; if (k !== 1) geo.scale(k, k, k);
  return geo;
}

export class People {
  constructor(world, group, view = null) {
    this.world = world; this.nav = world.nav;
    this.ferries = view?.ferries || [];
    this.vis = 1; // display enlargement when zoomed out (1 = true scale)
    this.group = new THREE.Group(); group.add(this.group);
    this.agents = []; this.kinds = new Map();
    this.r = rng(world.seed * 13 + world.eraIndex * 101 + 5);
    this.comp = null;
    this.mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const specs = world.npcs || [];
    const counts = new Map();
    for (const s of specs) counts.set(s.kind, (counts.get(s.kind) || 0) + (s.count || 1));
    // spare capacity for animals born in pens and settlers arriving during play
    for (const [k, n] of Object.entries(world.reserve || {})) counts.set(k, (counts.get(k) || 0) + n);
    this.free = new Map();
    // soldiers first, so the skinned-character budget goes to the troops
    for (const [kind, n] of [...counts].sort((p, q) => (/guard|musket|gunner|archer|sepoy|officer/.test(q[0]) ? 1 : 0) - (/guard|musket|gunner|archer|sepoy|officer/.test(p[0]) ? 1 : 0))) {
      const isAnimal = !!ANIMALS[kind];
      const spec = KINDS[kind];
      if (!isAnimal && !spec) continue;
      // animals with an animated 0 A.D. model: frames are recorders, and a rig per animal follows the recorded pose
      if (isAnimal && RIGGED[kind] && MODELS[RIGGED[kind].model]) {
        const K = { n, used: 0, animal: true, rigged: true, mats: Array.from({ length: n }, () => new THREE.Matrix4()), fr: new Int8Array(n), seen: new Uint8Array(n), rigs: [], last: [] };
        K.frames = [0, 1, 2].map((f) => ({ instanceMatrix: {}, setMatrixAt: (i, m) => { const e = m.elements; if (e[0] === 0 && e[5] === 0 && e[10] === 0) return; K.mats[i].copy(m); K.fr[i] = f; K.seen[i] = 1; } }));
        this.kinds.set(kind, K);
        continue;
      }
      // people: the canonical skinned character, up to a budget (soldiers first); the rest jointed figures
      if (!isAnimal && MODELS.body_jama && (this._charBudget ?? (this._charBudget = 240)) >= n) {
        this._charBudget -= n;
        const K = { n, used: 0, animal: false, rigged: true, human: true, spec, mats: Array.from({ length: n }, () => new THREE.Matrix4()), fr: new Int8Array(n), seen: new Uint8Array(n), rigs: [], last: [] };
        K.frames = [0, 1, 2].map((f) => ({ instanceMatrix: {}, setMatrixAt: (i, m) => { const e = m.elements; if (e[0] === 0 && e[5] === 0 && e[10] === 0) return; K.mats[i].copy(m); K.fr[i] = f; K.seen[i] = 1; } }));
        this.kinds.set(kind, K);
        continue;
      }
      // people beyond it and small animals: one jointed mesh per kind, animated on the graphics card
      if (!isAnimal || SMALL_ANIMALS.has(kind)) {
        if (!this.animMat) { this.figT = { value: 0 }; this.animMat = animMaterial(this.mat.clone(), this.figT); }
        const geo = isAnimal ? smallAnimalGeometry(kind) : figureGeo2(spec);
        const mesh = new THREE.InstancedMesh(geo, this.animMat, n);
        const aAnim = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4); aAnim.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('aAnim', aAnim);
        mesh.castShadow = true; mesh.receiveShadow = false; mesh.frustumCulled = false;
        for (let i = 0; i < n; i++) { mesh.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0)); aAnim.setXYZW(i, 0, 0, (isAnimal ? 100 : 0) + Math.random(), 0); }
        this.group.add(mesh);
        const K = { n, used: 0, animal: isAnimal, jointed: true, mesh, aAnim, mats: Array.from({ length: n }, () => new THREE.Matrix4()), fr: new Int8Array(n), seen: new Uint8Array(n), last: [], ph: new Float32Array(n), act: new Float32Array(n), actT: Float32Array.from({ length: n }, () => 4 + Math.random() * 14) };
        K.frames = [0, 1, 2].map((f) => ({ instanceMatrix: {}, setMatrixAt: (i, m) => { const e = m.elements; if (e[0] === 0 && e[5] === 0 && e[10] === 0) return; K.mats[i].copy(m); K.fr[i] = f; K.seen[i] = 1; } }));
        this.kinds.set(kind, K);
        continue;
      }
      const frames = [0, 1, 2].map((f) => {
        const geo = isAnimal ? animalGeometry(kind, f) : figureGeometry(spec, f);
        const im = new THREE.InstancedMesh(geo, this.mat, n);
        im.castShadow = true; im.receiveShadow = false; im.frustumCulled = false;
        im.count = n;
        this.group.add(im);
        return im;
      });
      this.kinds.set(kind, { frames, n, used: 0, animal: isAnimal });
      for (const f of frames) for (let i = 0; i < n; i++) f.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0));
    }
    for (const s of specs) {
      const K = this.kinds.get(s.kind); if (!K) continue;
      for (let i = 0; i < (s.count || 1); i++) this._spawn(s, K, i);
    }
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(1, 1, 1); this._zero = new THREE.Matrix4().makeScale(0, 0, 0);
  }
  _component() {
    if (this.comp) return this.comp;
    const nav = this.nav, L = nav.L, N = nav.W * nav.D * L;
    const comp = new Int32Array(N).fill(-1);
    let id = 0;
    for (let s = 0; s < N; s++) {
      if (comp[s] >= 0 || nav.H[s] !== nav.H[s]) continue;
      const seen = nav.reachableFrom ? null : null; void seen;
      const st = [s]; comp[s] = id;
      while (st.length) {
        const cur = st.pop();
        const c = (cur / L) | 0, ix = c % nav.W, iy = (c / nav.W) | 0, h = nav.H[cur];
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const jx = ix + dx, jy = iy + dy;
          if (jx < 0 || jy < 0 || jx >= nav.W || jy >= nav.D) continue;
          const l2 = nav.layerNear(jy * nav.W + jx, h, nav.step);
          if (l2 < 0) continue;
          const nn = (jy * nav.W + jx) * L + l2;
          if (comp[nn] < 0) { comp[nn] = id; st.push(nn); }
        }
      }
      id++;
    }
    this.comp = comp;
    return comp;
  }
  _point(s) {
    // random point for this spec
    const r = this.r;
    if (s.circle) { const [x, y, rad] = s.circle; const a = r() * TAU, d = Math.sqrt(r()) * rad; return [x + Math.cos(a) * d, y + Math.sin(a) * d]; }
    if (s.zone) { const b = s._bb || (s._bb = bbox(s.zone)); for (let k = 0; k < 40; k++) { const x = b.x0 + r() * (b.x1 - b.x0), y = b.y0 + r() * (b.y1 - b.y0); if (pointInPoly(x, y, s.zone)) return [x, y]; } }
    return s.at ? [s.at[0] + (r() - 0.5) * 2, s.at[1] + (r() - 0.5) * 2] : [0, 0];
  }
  _node(x, y, hHint) {
    const h = hHint ?? this.world.ground(x, y);
    return this.nav.nearest(x, y, h, 6, hHint != null ? 2.5 : 40);
  }
  _spawn(s, K, i) {
    const idx = K.used++;
    let start;
    if (s.mode === 'patrol') {
      const k = Math.floor((i / (s.count || 1)) * s.patrol.length) % s.patrol.length;
      start = s.patrol[k];
    } else start = s.at && s.mode === 'idle' ? s.at : this._point(s);
    if (s.ferry != null && this.ferries[s.ferry]) {
      const a = { s, K, idx, x: 0, y: 0, h: 0, node: -1, path: null, pi: 0, wait: 0, phase: this.r() * 6, yaw: 0, speed: (s.speed ?? 1.45) * (0.9 + this.r() * 0.2), wp: 0, dir: 1, seat: i, fs: null, fn: -1, hidden: false };
      // the group not on the first boat starts inside the fort
      const p0 = this._point(s), n0 = this._node(p0[0], p0[1], null);
      if (n0 >= 0) { const [x, y] = this.nav.nodeXY(n0); a.x = x; a.y = y; a.h = this.nav.H[n0]; a.node = n0; }
      this.agents.push(a);
      return;
    }
    const node = this._node(start[0], start[1], s.h ?? start[2]);
    if (node < 0) { K.frames.forEach((f) => f.setMatrixAt(idx, new THREE.Matrix4().makeScale(0, 0, 0))); return; }
    const [x, y] = this.nav.nodeXY(node);
    const a = { s, K, idx, x: s.mode === 'idle' && s.at ? s.at[0] : x, y: s.mode === 'idle' && s.at ? s.at[1] : y, h: this.nav.H[node], node, path: null, pi: 0, wait: this.r() * 3, phase: this.r() * 6, yaw: (s.face ?? this.r() * 360) * Math.PI / 180, speed: (s.speed ?? (K.animal ? 0.9 : 1.25)) * (0.85 + this.r() * 0.3), wp: 0, dir: 1 };
    if (s.mode === 'patrol') a.wp = Math.floor((i / (s.count || 1)) * s.patrol.length) % s.patrol.length;
    this.agents.push(a);
  }
  // add a figure at run time (a birth in a pen, a settler arriving); returns the agent or null when the kind is full
  spawnAgent(kind, x, y, h, extra = {}) {
    const K = this.kinds.get(kind); if (!K) return null;
    const pool = this.free.get(kind) || [];
    const idx = pool.length ? pool.pop() : (K.used < K.n ? K.used++ : -1);
    if (idx < 0) return null;
    const s = Object.assign({ kind, mode: 'wander', count: 1 }, extra.spec || {});
    const node = this._node(x, y, h);
    const a = { s, K, idx, x, y, h: h ?? this.world.ground(x, y), node, path: null, pi: 0, wait: 1 + this.r() * 2, phase: this.r() * 6, yaw: this.r() * 6.28, speed: (s.speed ?? (K.animal ? 0.9 : 1.25)) * (0.85 + this.r() * 0.3), wp: 0, dir: 1 };
    Object.assign(a, extra.agent || {});
    this.agents.push(a);
    return a;
  }
  despawn(a) {
    const i = this.agents.indexOf(a); if (i < 0) return;
    this.agents.splice(i, 1);
    for (const f of a.K.frames) { f.setMatrixAt(a.idx, this._zero); f.instanceMatrix.needsUpdate = true; }
    if (a.K.rigged && a.K.rigs[a.idx]) a.K.rigs[a.idx].obj.visible = false;
    if (a.K.jointed) { a.K.mesh.setMatrixAt(a.idx, this._zero); a.K.mesh.instanceMatrix.needsUpdate = true; }
    const pool = this.free.get(a.s.kind) || []; pool.push(a.idx); this.free.set(a.s.kind, pool);
  }
  _retarget(a) {
    const s = a.s;
    let target;
    if (s.mode === 'patrol') {
      a.wp = (a.wp + 1) % s.patrol.length;
      target = s.patrol[a.wp];
    } else if (s.mode === 'route') {
      const pts = s.route; a.wp += a.dir; if (a.wp >= pts.length || a.wp < 0) { a.dir *= -1; a.wp += a.dir * 2; }
      target = pts[Math.max(0, Math.min(pts.length - 1, a.wp))];
    } else if (s.mode === 'wander') {
      const comp = this._component();
      for (let k = 0; k < 8; k++) {
        const p = this._point(s);
        const n = this._node(p[0], p[1], s.h ?? null);
        if (n >= 0 && comp[n] === comp[a.node]) { target = [...this.nav.nodeXY(n), this.nav.H[n]]; break; }
      }
    } else return;
    if (!target) { a.wait = 2; return; }
    const th = target[2] ?? (s.h ?? null);
    const tn = this._node(target[0], target[1], th);
    if (tn < 0) { a.wait = 3; return; }
    const [tx, ty] = this.nav.nodeXY(tn);
    const path = this.nav.findPath([a.x, a.y, a.h], [tx, ty, this.nav.H[tn]]);
    if (!path || path.length < 2) { a.wait = 2 + this.r() * 3; return; }
    a.path = path; a.pi = 1;
  }
  // seat on the boat deck for passenger k (plan coords + height)
  _seat(F, st, k) {
    const m = F.m, L = m.userData.L, B = m.userData.B, D = m.userData.D;
    const rows = 4, u = (-0.28 + 0.56 * ((k % rows) + 0.5) / rows) * L, v = ((Math.floor(k / rows) % 2) ? 1 : -1) * B * 0.2;
    const c = Math.cos(st.yaw), sn = Math.sin(st.yaw);
    return [st.x + c * u - sn * v, st.y + sn * u + c * v, (this.world.seaLevel ?? 0) + D * 0.12 + 0.12 + Math.sin(this._t * 1.3) * 0.06];
  }
  // passenger state machine, driven by the ferry timetable
  _ferry(a, t, dt) {
    const s = a.s, F = this.ferries[s.ferry], st = F.state(t);
    const arriving = ((st.n % 2) + 2) % 2 === (s.group ?? 0);
    const k = a.seat, nIn = s.count || 1;
    const step = F.b.ferry.step, queue = s.queue || step;
    const ride = () => { const p = this._seat(F, st, k); a.x = p[0]; a.y = p[1]; a.h = p[2]; a.yaw = st.yaw + Math.PI / 2 + (k % 2 ? 0.5 : -0.5); a.path = null; a.fs = 'ride'; return false; };
    const hop = (from, to, f) => { a.x = from[0] + (to[0] - from[0]) * f; a.y = from[1] + (to[1] - from[1]) * f; a.h = from[2] + (to[2] - from[2]) * f + Math.sin(f * Math.PI) * 0.35; a.yaw = Math.atan2(to[0] - from[0], -(to[1] - from[1])); return true; };
    if (a.fn !== st.n) { a.fn = st.n; a.fs = arriving ? 'ride' : (a.fs === 'ride' ? 'ride' : 'inside'); a.target = null; }
    if (arriving) {
      if (st.phase === 'in' || st.phase === 'away') return ride();
      if (st.phase === 'dock') {
        const t0 = 3 + k * 1.3;
        if (st.since < t0 && a.fs === 'ride') return ride();
        if (st.since < t0 + 1.2 && a.fs !== 'walk' && a.fs !== 'inside') { a.fs = 'hop'; return hop(this._seat(F, st, k), step, (st.since - t0) / 1.2); }
      }
      if (a.fs === 'hop' || a.fs === 'ride') {
        // walk in through the gate to a spot inside
        a.x = step[0]; a.y = step[1]; a.h = step[2];
        const p = this._point(s), tn = this._node(p[0], p[1], null);
        a.fs = 'walk';
        if (tn >= 0) { const [tx, ty] = this.nav.nodeXY(tn); const path = this.nav.findPath([a.x, a.y, a.h], [tx, ty, this.nav.H[tn]]); if (path) { a.path = path; a.pi = 1; } }
      }
      if (a.fs === 'walk' && !a.path) a.fs = 'inside';
      return null;
    }
    // departing cycle
    if (a.fs === 'ride' && st.phase !== 'dock') return ride();
    if (a.fs === 'inside' || a.fs === 'walk') {
      // head for the landing as the boat comes in
      if (st.phase === 'in' || st.phase === 'dock') {
        const qx = queue[0] + ((k % 3) - 1) * 0.9, qy = queue[1] + (Math.floor(k / 3) - 0.5) * 0.9;
        a.fs = 'toQueue'; a.target = [qx, qy, queue[2]];
        const tn = this._node(qx, qy, queue[2]);
        if (tn >= 0) { const [tx, ty] = this.nav.nodeXY(tn); a.target = [tx, ty, this.nav.H[tn]]; const path = this.nav.findPath([a.x, a.y, a.h], a.target); a.path = path; a.pi = 1; }
        return null;
      }
      return null;
    }
    if (a.fs === 'toQueue') {
      if (a.path) return null;
      a.fs = 'queue';
    }
    if (a.fs === 'queue') {
      if (st.phase === 'dock') {
        const tb = 3 + nIn * 1.3 + 3 + k * 1.3;
        if (st.since >= tb) {
          a.fs = 'board'; a.from = [a.x, a.y, a.h];
        }
      } else if (st.phase === 'out' || st.phase === 'away') { a.fs = 'inside'; }
      if (a.fs === 'queue') { a.yaw = Math.atan2(step[0] - a.x, -(step[1] - a.y)); return false; }
    }
    if (a.fs === 'board') {
      if (st.phase !== 'dock') return ride();
      const tb = 3 + nIn * 1.3 + 3 + k * 1.3, f = (st.since - tb) / 1.6;
      if (f >= 1) return ride();
      return hop(a.from, f < 0.5 ? step : this._seat(F, st, k), f < 0.5 ? f * 2 : (f - 0.5) * 2) || true;
    }
    return null;
  }
  update(dt, t) {
    const night = this.night ?? 0;
    const m = this._m, q = this._q, p = this._p, sc = this._s;
    const yAxis = new THREE.Vector3(0, 1, 0);
    this._t = t;
    for (const a of this.agents) {
      // townsfolk go indoors at night; watchmen come out
      if ((a.s.dayOnly && night > 0.6) || (a.s.nightOnly && night < 0.4)) { for (const f of a.K.frames) f.setMatrixAt(a.idx, this._zero); continue; }
      let moving = false;
      let ctrl = 'free';
      if (a.ctrl && this.ctrlFn) ctrl = this.ctrlFn(a, dt, t) || 'free';
      if (ctrl === 'hide') { for (let f = 0; f < 3; f++) a.K.frames[f].setMatrixAt(a.idx, this._zero); continue; }
      if (ctrl === 'place') {
        q.setFromAxisAngle(yAxis, a.yaw);
        if (a.lie) q.multiply(this._lieQ || (this._lieQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2 + 0.08))); const sk = (a.scale ?? 1) * (a.s.scale ?? 1); sc.set(sk * this.vis, sk * this.vis, sk * this.vis);
        p.set(a.x, a.h, -a.y); m.compose(p, q, sc);
        const fr = a.walkAnim ? ((Math.sin(t * 9 + a.phase) > 0) ? 1 : 2) : 0;
        for (let f = 0; f < 3; f++) a.K.frames[f].setMatrixAt(a.idx, f === fr ? m : this._zero);
        continue;
      }
      if (a.s.ferry != null && this.ferries[a.s.ferry]) {
        const r = this._ferry(a, t, dt);
        if (r !== null) {
          // placed directly by the timetable (riding, hopping, queueing)
          q.setFromAxisAngle(yAxis, a.yaw); const sk = a.s.scale ?? 1; sc.set(sk * this.vis, sk * this.vis, sk * this.vis);
          p.set(a.x, a.h, -a.y); m.compose(p, q, sc);
          for (let f = 0; f < 3; f++) a.K.frames[f].setMatrixAt(a.idx, f === (r ? 1 : 0) ? m : this._zero);
          continue;
        }
      }
      if (a.path) {
        let step = a.speed * (a.speedMul ?? 1) * dt;
        while (step > 0 && a.path) {
          const tp = a.path[a.pi];
          const dx = tp[0] - a.x, dy = tp[1] - a.y, d = Math.hypot(dx, dy);
          if (d <= step) {
            a.x = tp[0]; a.y = tp[1]; a.h = tp[2]; step -= d; a.pi++;
            if (a.pi >= a.path.length) { a.path = null; a.wait = (a.s.pause ?? 2) + this.r() * (a.s.pauseVar ?? 4); a.node = this.nav.nearest(a.x, a.y, a.h, 2, 1.5); }
          } else {
            a.x += dx / d * step; a.y += dy / d * step;
            a.h += (tp[2] - a.h) * Math.min(1, step / Math.max(d, 1e-3));
            const want = Math.atan2(dx, -dy);
            let dd = want - a.yaw; while (dd > Math.PI) dd -= TAU; while (dd < -Math.PI) dd += TAU;
            a.yaw += dd * Math.min(1, dt * 8);
            step = 0;
          }
          moving = true;
        }
      } else if (a.s.mode !== 'idle' && ctrl !== 'path') {
        a.wait -= dt;
        if (a.wait <= 0) this._retarget(a);
      } else if (this.r() < dt * 0.05) a.yaw += (this.r() - 0.5) * 1.2;
      a.phase += dt * (a.speedMul ?? 1) * a.speed * (a.K.animal ? 2.2 : 3.4);
      const sn = Math.sin(a.phase);
      const fr = moving ? (sn > 0.25 ? 1 : sn < -0.25 ? 2 : 0) : 0;
      const bob = moving ? Math.abs(Math.cos(a.phase)) * 0.04 : 0;
      q.setFromAxisAngle(yAxis, a.yaw);
      const s = (a.scale ?? 1) * (a.s.scale ?? 1); sc.set(s * this.vis, s * this.vis, s * this.vis);
      p.set(a.x, a.h + bob, -a.y);
      m.compose(p, q, sc);
      for (let f = 0; f < 3; f++) a.K.frames[f].setMatrixAt(a.idx, f === fr ? m : this._zero);
    }
    if (this.figT) this.figT.value = t;
    for (const K of this.kinds.values()) {
      if (K.rigged) { this._syncRigs(K, dt); continue; }
      if (K.jointed) { this._syncJointed(K, dt); continue; }
      for (const f of K.frames) f.instanceMatrix.needsUpdate = true;
    }
  }
  // jointed figures: matrices from the recorded pose; walk phase from distance covered; idle actions now and then
  _syncJointed(K, dt) {
    const z = this._zero, A = K.aAnim, seedBase = K.animal ? 100 : 0;
    for (let i = 0; i < K.used; i++) {
      if (!K.seen[i]) { K.mesh.setMatrixAt(i, z); continue; }
      const m = K.mats[i], x = m.elements[12], y = m.elements[14];
      const last = K.last[i] || (K.last[i] = [x, y]);
      const d = Math.hypot(x - last[0], y - last[1]); last[0] = x; last[1] = y;
      const sc = Math.hypot(m.elements[0], m.elements[1], m.elements[2]) || 1;
      const moving = (K.fr[i] !== 0 || d > 0.004) && d < 3;
      // stride: about 1.4 m a cycle for a man, shorter for small animals (scaled with the figure)
      if (moving) K.ph[i] += (d / ((K.animal ? 0.5 : 1.4) * sc)) * Math.PI * 2;
      const wk = Math.min(1, Math.max(0, A.getY(i) + (moving ? dt * 5 : -dt * 4)));
      // idle actions: 1 hand to head or turban, 2 stretch, 3 look about, 4 shift weight, 5 hand on hip
      let act = 0;
      if (!moving && wk < 0.2) {
        if (K.act[i] > 0) { K.actP = K.actP || new Float32Array(K.n); K.actP[i] += dt / 2.6; if (K.actP[i] >= 1) { K.act[i] = 0; K.actP[i] = 0; } }
        else { K.actT[i] -= dt; if (K.actT[i] <= 0) { K.actT[i] = 6 + Math.random() * 16; K.act[i] = K.animal ? 1 : 1 + Math.floor(Math.random() * 5); K.actP = K.actP || new Float32Array(K.n); K.actP[i] = 0; } }
        if (K.act[i] > 0) act = K.act[i] + Math.min(0.999, K.actP[i]);
      } else { K.act[i] = 0; if (K.actP) K.actP[i] = 0; }
      A.setXYZW(i, K.ph[i] % (Math.PI * 200), wk, seedBase + (A.getZ(i) % 1), act);
      K.mesh.setMatrixAt(i, m);
      K.seen[i] = 0;
    }
    // draw only the slots in use (reserved ones for births and arrivals stay off the graphics card)
    K.mesh.count = K.used;
    K.mesh.instanceMatrix.needsUpdate = true; A.needsUpdate = true;
  }
  // move each animated animal to its recorded pose and pick walk, run or idle from how far it moved
  _syncRigs(K, dt) {
    const pos = this._rp || (this._rp = new THREE.Vector3()), q = this._rq || (this._rq = new THREE.Quaternion()), sc = this._rs || (this._rs = new THREE.Vector3());
    const kind = [...this.kinds.entries()].find(([, v]) => v === K)[0];
    for (let i = 0; i < K.used; i++) {
      let rig = K.rigs[i];
      if (!K.seen[i]) { if (rig) rig.obj.visible = false; continue; }
      if (!rig) { rig = K.rigs[i] = K.human ? makeCharacter(K.spec) : makeRig(kind); if (!rig) continue; this.group.add(rig.obj); }
      K.mats[i].decompose(pos, q, sc);
      const last = K.last[i] || (K.last[i] = pos.clone());
      const v = dt > 0 ? Math.hypot(pos.x - last.x, pos.z - last.z) / dt : 0;
      last.copy(pos);
      rig.obj.visible = true;
      rig.obj.position.copy(pos); rig.obj.quaternion.copy(q); rig.obj.scale.copy(sc);
      const moving = K.fr[i] !== 0 || v > 0.15;
      rig.set(!moving ? 'idle' : v > rig.R.speed * 2.2 ? 'run' : 'walk', v || rig.R.speed, dt);
      rig.mixer.update(dt);
      K.seen[i] = 0;
    }
  }
  dispose() {
    for (const K of this.kinds.values()) {
      if (K.rigged) { for (const r of K.rigs) if (r) { r.mixer.stopAllAction(); this.group.remove(r.obj); } continue; }
      if (K.jointed) { this.group.remove(K.mesh); K.mesh.geometry.dispose(); continue; }
      for (const f of K.frames) { f.geometry.dispose(); f.dispose?.(); }
    }
    this.mat.dispose();
    this.group.parent?.remove(this.group);
  }
}

// exported for tools/sizes.mjs
export const __figureGeometry = (spec, f) => figureGeometry(spec, f);
export const __animalGeometry = (k, f) => animalGeometry(k, f);
