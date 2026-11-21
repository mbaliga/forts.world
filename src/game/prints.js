// Footprints that behave like the real thing: they form only in ground soft enough to take them (sand, mud,
// soil and tracks when wet, the strip of wet sand by the water), sharper and darker when wet, and they go:
// the swash wipes the tide line clean within seconds, wind fills dry sand, rain softens everything.
import * as THREE from 'three';
import { PAINT } from '../core/terrain.js';
import { TAG } from '../core/nav.js';

// print shape by kind: 0 foot, 1 hoof (horse), 2 cloven (cattle, goats, sheep, boar), 3 paw (dog, wolf, cat), 4 bird, 5 elephant, 6 camel pad
const SHAPE = { horse: 1, 'horse-grey': 1, 'horse-chestnut': 1, 'horse-black': 1, 'horse-war': 1, cow: 2, buffalo: 2, goat: 2, sheep: 2, boar: 2, dog: 3, wolf: 3, cat: 3, chicken: 4, rooster: 4, chick: 4, peafowl: 4, elephant: 5, 'elephant-royal': 5, camel: 6 };
const SIZE = { 0: [0.12, 0.28], 1: [0.14, 0.15], 2: [0.1, 0.11], 3: [0.08, 0.09], 4: [0.09, 0.09], 5: [0.42, 0.42], 6: [0.2, 0.22] };
const STRIDE = { 0: 0.72, 1: 0.9, 2: 0.45, 3: 0.4, 4: 0.18, 5: 1.2, 6: 1.1 };
const SOFT = new Set([TAG.ground, TAG.road, TAG.shore, TAG.court]);

export class Prints {
  constructor(app, N = 1400) {
    this.app = app; this.N = N; this.i = 0;
    const g = new THREE.PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    this.born = new THREE.InstancedBufferAttribute(new Float32Array(N).fill(-1e6), 1);
    this.life = new THREE.InstancedBufferAttribute(new Float32Array(N).fill(1), 1);
    this.kind = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
    this.side = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
    this.depth = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
    for (const [n, a] of [['aBorn', this.born], ['aLife', this.life], ['aKind', this.kind], ['aSide', this.side], ['aDepth', this.depth]]) { a.setUsage(THREE.DynamicDrawUsage); g.setAttribute(n, a); }
    this.U = { uT: { value: 0 }, uLight: { value: 1 } };
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, uniforms: this.U,
      vertexShader: `attribute float aBorn; attribute float aLife; attribute float aKind; attribute float aSide; attribute float aDepth; uniform float uT;
varying vec2 vUv; varying float vK; varying float vA; varying float vD;
void main(){ vUv = vec2(position.x * aSide, -position.z); vK = aKind; vD = aDepth;
  float age = uT - aBorn; vA = age < 0.0 ? 0.0 : (1.0 - smoothstep(aLife * 0.55, aLife, age)) * smoothstep(0.0, 0.15, age);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform float uLight; varying vec2 vUv; varying float vK; varying float vA; varying float vD;
float el(vec2 p, vec2 c, vec2 r){ vec2 q = (p - c) / r; return length(q) - 1.0; }
void main(){
  vec2 p = vUv; float d = 1.0; int k = int(vK + 0.5);
  if (k == 0) { // bare or sandalled foot: ball, heel, the outer edge between, toes
    d = min(min(el(p, vec2(0.04, 0.12), vec2(0.4, 0.26)), el(p, vec2(0.0, -0.3), vec2(0.27, 0.17))), el(p, vec2(0.12, -0.08), vec2(0.18, 0.28)));
    for (int i = 0; i < 5; i++) { float fi = float(i); d = min(d, el(p, vec2(-0.2 + fi * 0.1, 0.4 - abs(fi - 1.0) * 0.02 - fi * 0.01), vec2(0.06 - fi * 0.006, 0.06))); }
  } else if (k == 1) { // horse hoof: a rounded U open at the heel, with the frog
    float r = length(p * vec2(1.0, 0.95)); d = max(abs(r - 0.33) - 0.1, -(p.y + 0.18)); d = min(d, el(p, vec2(0.0, -0.08), vec2(0.08, 0.16)));
  } else if (k == 2) { // cloven hoof: two halves
    d = min(el(p, vec2(-0.13, 0.04), vec2(0.11, 0.34)), el(p, vec2(0.13, 0.04), vec2(0.11, 0.34)));
  } else if (k == 3) { // paw: pad and four toes
    d = el(p, vec2(0.0, -0.12), vec2(0.24, 0.2));
    for (int i = 0; i < 4; i++) { float fi = float(i); d = min(d, el(p, vec2(-0.27 + fi * 0.18, 0.2 + (fi == 1.0 || fi == 2.0 ? 0.08 : 0.0)), vec2(0.08, 0.1))); }
  } else if (k == 4) { // bird: three toes forward, one back
    vec2 q = p; d = 1.0;
    for (int i = 0; i < 3; i++) { float a = (float(i) - 1.0) * 0.55; vec2 dir = vec2(sin(a), cos(a)); float t = clamp(dot(q, dir), 0.0, 0.42); d = min(d, length(q - dir * t) - 0.045); }
    d = min(d, length(q - vec2(0.0, -clamp(-q.y, 0.0, 0.22))) - 0.04);
  } else if (k == 5) { // elephant: a broad round pad with toenail marks at the front
    d = el(p, vec2(0.0), vec2(0.44, 0.42)); for (int i = 0; i < 4; i++) { float a = (float(i) - 1.5) * 0.35; d = min(d, el(p, vec2(sin(a) * 0.4, cos(a) * 0.38), vec2(0.06, 0.05))); }
  } else { // camel: wide soft pad, two-lobed
    d = min(el(p, vec2(-0.1, 0.02), vec2(0.2, 0.38)), el(p, vec2(0.1, 0.02), vec2(0.2, 0.38)));
  }
  float soft = 0.02 + (1.0 - vD) * 0.05;
  float inside = 1.0 - smoothstep(-soft, soft, d);
  float rim = smoothstep(-0.02, 0.02, d) * (1.0 - smoothstep(0.02, 0.09, d));
  float a = (inside * (0.35 + 0.4 * vD) + rim * 0.12 * vD) * vA;
  if (a < 0.01) discard;
  vec3 c = mix(vec3(0.28, 0.21, 0.14), vec3(0.95, 0.9, 0.82), rim * (1.0 - inside));
  gl_FragColor = vec4(c * uLight, a);
}`,
    });
    this.mesh = new THREE.InstancedMesh(g, mat, N); this.mesh.frustumCulled = false; this.mesh.renderOrder = 4;
    const z = new THREE.Matrix4().makeScale(0, 0, 0); for (let i = 0; i < N; i++) this.mesh.setMatrixAt(i, z);
    app.scene.add(this.mesh);
    this.track = new WeakMap(); this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3();
  }
  // how well the ground at (x, y, h) takes a print: 0 not at all, 1 crisp; and how long it lasts
  soil(x, y, h) {
    const W = this.app.world, C = this.app.climate, T = W.terrain;
    const g = W.ground(x, y); if (Math.abs(h - g) > 0.25) return null;            // on a floor, a step or a wall
    if (W.waterLevelAt(x, y) > g - 0.05) return null;                              // under water
    const tag = W.nav.tagAt(x, y, h); if (tag != null && !SOFT.has(tag)) return null;
    const p = T.paintAt(x, y), wet = C?.cur?.wet ?? 0, wind = C?.cur?.wind ?? 1, sea = W.seaLevel;
    const tideLine = sea != null && g < sea + 1.2;                                 // sand kept wet by the sea
    let depth = 0, life = 40;
    if (p === PAINT.sand || (tideLine && p !== PAINT.rock && p !== PAINT.paved)) { depth = tideLine ? 1 : 0.5 + 0.5 * wet; life = tideLine ? (g < sea + 0.5 ? 8 : 30) : 26 / Math.max(1, wind * 0.9); }
    else if (p === PAINT.mud || p === PAINT.garden || p === PAINT.field) { depth = 0.35 + 0.65 * Math.max(wet, p === PAINT.mud ? 0.8 : 0.3); life = 60; }
    else if (p === PAINT.natural || p === PAINT.worn || p === PAINT.road) { if (wet < 0.25) return null; depth = wet * (p === PAINT.road ? 0.6 : 0.8); life = 45; }
    else return null;
    if (wet > 0.6) life *= 0.6;                                                    // heavy rain softens the edges and fills them
    return { depth: Math.min(1, depth), life };
  }
  stamp(x, y, h, yaw, kind, side, soil) {
    const i = this.i; this.i = (this.i + 1) % this.N;
    const [sx, sz] = SIZE[kind];
    this._q.setFromAxisAngle(this._v.set(0, 1, 0), yaw); this._s.set(sx, 1, sz);
    this._m.compose(new THREE.Vector3(x, h + 0.015, -y), this._q, this._s);
    this.mesh.setMatrixAt(i, this._m); this.mesh.instanceMatrix.needsUpdate = true;
    this.born.setX(i, this.app.t); this.life.setX(i, soil.life); this.kind.setX(i, kind); this.side.setX(i, side); this.depth.setX(i, soil.depth);
    for (const a of [this.born, this.life, this.kind, this.side, this.depth]) a.needsUpdate = true;
  }
  // walkers leave a print each stride, alternating feet a little either side of their line
  step(who, x, y, h, kind) {
    let tr = this.track.get(who);
    if (!tr) { tr = { x, y, d: 0, side: 1 }; this.track.set(who, tr); return; }
    const dx = x - tr.x, dy = y - tr.y, d = Math.hypot(dx, dy); tr.x = x; tr.y = y;
    if (d > 4) { tr.d = 0; return; }                                               // teleported
    tr.d += d; const stride = STRIDE[kind] * (who.run ? 1.4 : 1);
    if (tr.d < stride || d < 1e-4) return;
    tr.d = 0;
    const soil = this.soil(x, y, h); if (!soil) return;
    const yaw = Math.atan2(dx, -dy), nx = -dy / d, ny = dx / d, off = kind === 0 ? 0.09 : kind === 5 ? 0.45 : kind === 1 || kind === 6 ? 0.22 : 0.06;
    tr.side = -tr.side;
    this.stamp(x + nx * off * tr.side, y + ny * off * tr.side, h, yaw, kind, tr.side, soil);
    if (kind === 1 || kind === 2 || kind === 5 || kind === 6) this.stamp(x - nx * off * tr.side + dx / d * 0.3, y - ny * off * tr.side + dy / d * 0.3, h, yaw, kind, -tr.side, soil); // the other pair of feet
  }
  update(dt) {
    const app = this.app; if (!app.world) return;
    this.U.uT.value = app.t; this.U.uLight.value = app.climate?.light ?? 1;
    const T = app.traveller, mounted = app.play?.mount;
    this.step(T, T.pos[0], T.pos[1], T.pos[2], mounted ? 1 : 0);
    // people and animals near the view
    const t = app.cam.target, R = Math.max(40, app.cam.viewH * 0.8);
    for (const a of app.people?.agents || []) {
      if (Math.abs(a.x - t.x) > R || Math.abs(-a.y - t.z) > R) continue;
      const m = a.ctrl?.mode; if (m === 'carried' || m === 'mounted' || m === 'garrisoned' || m === 'ride') continue;
      const kind = SHAPE[a.s.kind] ?? (a.K.animal ? 3 : 0);
      this.step(a, a.x, a.y, a.h, kind);
    }
  }
  clear() { this.born.array.fill(-1e6); this.born.needsUpdate = true; this.track = new WeakMap(); }
}
