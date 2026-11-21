// Hands-on layer: select things in the fort and act on them through a menu that pops up beside them.
// Guns can be fired by hand, by an assigned crew on order, or left on automatic, and rolled along level ramparts.
// Horses can be tamed and ridden, dogs befriended, flocks led into pens, fowl and hares caught and penned to breed.
// Soldiers can be led, put on a gun, or garrisoned into bastions and posts. Open ground can be offered to settlers.
import * as THREE from 'three';
import { TAG } from '../core/nav.js';
import { ANIMAL_TRAITS } from './people.js';
import { pointInPoly, bbox, DEG, TAU, clamp } from '../core/geom.js';
import { Mesher, C, shade, V, smoothGeometry } from '../core/mesher.js';
import { gunParts } from '../core/props.js';
import { addAtmo } from './atmo.js';
import { WILD, odds, pct, shares, Encounters } from './encounter.js';

const SOLDIERS = new Set(['musketeer-maratha', 'guard-siddi', 'musketeer-siddi', 'gunner-siddi', 'archer-siddi', 'guard-maratha', 'guard-mughal', 'guard-rajput', 'guard-deccan', 'sepoy']);
const LABEL = {
  horse: 'Bay horse', 'horse-grey': 'Grey horse', 'horse-chestnut': 'Chestnut horse', 'horse-black': 'Black horse', 'horse-war': 'War horse', dog: 'Village dog', cat: 'Cat', sheep: 'Sheep', goat: 'Goat', cow: 'Cow', buffalo: 'Buffalo', chicken: 'Hen', rooster: 'Cock', chick: 'Chick', rabbit: 'Indian hare', boar: 'Wild boar', langur: 'Hanuman langur', macaque: 'Rhesus macaque', wolf: 'Indian wolf', peafowl: 'Peafowl', elephant: 'Elephant', 'elephant-royal': 'State elephant', camel: 'Camel',
  'guard-siddi': 'Siddi guard', 'musketeer-siddi': 'Siddi musketeer', 'gunner-siddi': 'Siddi gunner', 'archer-siddi': 'Siddi archer', sepoy: 'Sepoy', 'guard-maratha': 'Maratha guard', 'guard-mughal': 'Mughal guard', 'guard-rajput': 'Rajput guard', 'guard-deccan': 'Deccani guard',
};
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const CSS = `
#ctx{position:fixed;z-index:30;min-width:200px;max-width:260px;background:var(--panel,rgba(244,246,244,.94));backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:6px;box-shadow:0 10px 30px rgba(0,0,0,.18);padding:10px 12px 10px;font:13px/1.35 var(--font-body,system-ui);color:var(--ink,#182023);pointer-events:auto}
#ctx[hidden]{display:none}
#ctx h3{margin:0 0 2px;font:400 18px/1.15 var(--font-serif,Georgia,serif)}
#ctx .st{margin:0 0 8px;color:var(--muted,#586569);font-size:12px}
#ctx button{display:block;width:100%;text-align:left;margin:3px 0 0;padding:6px 9px;border:1px solid var(--rule,rgba(0,0,0,.16));background:transparent;border-radius:4px;font:500 13px var(--font-body,system-ui);color:inherit;cursor:pointer}
#ctx button:hover{background:rgba(14,122,119,.1);border-color:var(--accent,#0e7a77)}
#ctx button[disabled]{opacity:.45;cursor:default}
#ctx button.on{border-color:var(--accent,#0e7a77);color:var(--accent,#0e7a77)}
#ctx .lim{margin:8px 0 0;font-size:11.5px;color:var(--muted,#586569);font-style:italic}
#ctx .x{position:absolute;right:6px;top:4px;border:0;width:auto;margin:0;padding:2px 6px;font-size:16px}
#ctx:after{content:'';position:absolute;left:18px;bottom:-7px;border:7px solid transparent;border-bottom:0;border-top-color:var(--panel,rgba(244,246,244,.94))}
#hud-play{position:fixed;left:50%;transform:translateX(-50%);top:calc(env(safe-area-inset-top,0px) + 96px);display:flex;gap:6px;z-index:20;pointer-events:none}
#hud-play span{background:var(--panel,rgba(244,246,244,.9));padding:4px 9px;border-radius:12px;font:500 12px var(--font-data,monospace);box-shadow:0 2px 8px rgba(0,0,0,.08)}
#hud-mode{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 132px);background:var(--ink,#182023);color:var(--paper,#f4f6f4);padding:7px 12px;font-size:13px;z-index:20;border-radius:3px}
#hud-mode[hidden]{display:none}
`;

// ---------------------------------------------------------------- one-shot particles (muzzle flash, smoke, splashes, dust)
class FxPool {
  constructor(scene, N = 2400) {
    this.N = N; this.n = 0;
    this.p = new Float32Array(N * 3); this.v = new Float32Array(N * 3); this.age = new Float32Array(N); this.life = new Float32Array(N).fill(-1);
    this.s0 = new Float32Array(N); this.s1 = new Float32Array(N); this.g = new Float32Array(N); this.drag = new Float32Array(N); this.a0 = new Float32Array(N); this.flash = new Uint8Array(N);
    this.col = new Float32Array(N * 3);
    const geo = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aSz = new THREE.BufferAttribute(new Float32Array(N), 1).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(new Float32Array(N * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aSeed = new THREE.BufferAttribute(new Float32Array(N).map(() => Math.random()), 1);
    geo.setAttribute('position', this.aPos); geo.setAttribute('aSz', this.aSz); geo.setAttribute('aCol', this.aCol); geo.setAttribute('aSeed', this.aSeed);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: { uPx: { value: 8 } },
      vertexShader: 'uniform float uPx; attribute float aSz; attribute vec4 aCol; attribute float aSeed; varying vec4 vC; varying float vS; void main(){ vC = aCol; vS = aSeed; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = aSz * uPx; }',
      fragmentShader: `varying vec4 vC; varying float vS;
float h(vec2 p){ p = fract(p*vec2(123.4,456.2)); p += dot(p,p+45.3); return fract(p.x*p.y); }
float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
void main(){ vec2 q = gl_PointCoord - 0.5; float l = n(q*5.0 + vS*13.0)*0.6 + n(q*11.0 - vS*7.0)*0.3; float d = length(q)*2.0 + (l-0.45)*0.45; if (d > 1.0 || vC.a < 0.003) discard;
  float lit = 0.84 + 0.3*clamp(0.5 - q.y - q.x*0.4 + l*0.3, 0.0, 1.0); gl_FragColor = vec4(vC.rgb*lit, vC.a*smoothstep(1.0,0.3,d)); }`,
    });
    this.pts = new THREE.Points(geo, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 7;
    scene.add(this.pts);
  }
  // burst: {x,y,h, n, up:[a,b], out:[a,b], dir:[dx,dy]|null, side, life:[a,b], size:[a,b], color, alpha, g, drag, flash}
  burst(o) {
    const c = C(o.color || '#ffffff'), dx = o.dir ? o.dir[0] : 0, dy = o.dir ? o.dir[1] : 0;
    for (let k = 0; k < (o.n ?? 12); k++) {
      const i = this.n; this.n = (this.n + 1) % this.N;
      const R = Math.random, a = R() * TAU, up = o.up[0] + R() * (o.up[1] - o.up[0]), out = (o.out?.[0] ?? 0) + R() * ((o.out?.[1] ?? 0) - (o.out?.[0] ?? 0)), sd = (R() - 0.5) * 2 * (o.side ?? 1);
      let vx, vy;
      if (o.dir) { vx = dx * out - dy * sd; vy = dy * out + dx * sd; } else { vx = Math.cos(a) * (out + Math.abs(sd)); vy = Math.sin(a) * (out + Math.abs(sd)); }
      this.p[i * 3] = o.x + (R() - 0.5) * (o.jitter ?? 0.4); this.p[i * 3 + 1] = o.h; this.p[i * 3 + 2] = -(o.y + (R() - 0.5) * (o.jitter ?? 0.4));
      this.v[i * 3] = vx + (o.wind?.[0] ?? 0); this.v[i * 3 + 1] = up; this.v[i * 3 + 2] = -(vy + (o.wind?.[1] ?? 0));
      this.age[i] = -(R() * (o.spread ?? 0.05)); this.life[i] = o.life[0] + R() * (o.life[1] - o.life[0]);
      this.s0[i] = o.size[0]; this.s1[i] = o.size[1]; this.g[i] = o.g ?? 0; this.drag[i] = o.drag ?? 0; this.a0[i] = o.alpha ?? 0.8; this.flash[i] = o.flash ? 1 : 0;
      this.col[i * 3] = c[0]; this.col[i * 3 + 1] = c[1]; this.col[i * 3 + 2] = c[2];
    }
  }
  update(dt, px, light) {
    this.mat.uniforms.uPx.value = px;
    const P = this.aPos.array, S = this.aSz.array, Cc = this.aCol.array;
    for (let i = 0; i < this.N; i++) {
      if (this.life[i] < 0) { S[i] = 0; Cc[i * 4 + 3] = 0; continue; }
      this.age[i] += dt;
      const t = this.age[i];
      if (t > this.life[i]) { this.life[i] = -1; S[i] = 0; Cc[i * 4 + 3] = 0; continue; }
      if (t < 0) { S[i] = 0; Cc[i * 4 + 3] = 0; continue; }
      const dr = Math.exp(-this.drag[i] * dt);
      this.v[i * 3] *= dr; this.v[i * 3 + 2] *= dr; this.v[i * 3 + 1] = this.v[i * 3 + 1] * dr - this.g[i] * dt;
      this.p[i * 3] += this.v[i * 3] * dt; this.p[i * 3 + 1] += this.v[i * 3 + 1] * dt; this.p[i * 3 + 2] += this.v[i * 3 + 2] * dt;
      const f = t / this.life[i];
      P[i * 3] = this.p[i * 3]; P[i * 3 + 1] = this.p[i * 3 + 1]; P[i * 3 + 2] = this.p[i * 3 + 2];
      S[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * Math.sqrt(f);
      const k = this.flash[i] ? 1 : light;
      Cc[i * 4] = this.col[i * 3] * k; Cc[i * 4 + 1] = this.col[i * 3 + 1] * k; Cc[i * 4 + 2] = this.col[i * 3 + 2] * k;
      Cc[i * 4 + 3] = this.a0[i] * Math.pow(1 - f, 1.4) * Math.min(1, f * 18);
    }
    this.aPos.needsUpdate = true; this.aSz.needsUpdate = true; this.aCol.needsUpdate = true;
  }
  dispose() { this.pts.parent?.remove(this.pts); this.pts.geometry.dispose(); this.mat.dispose(); }
}

export class Play {
  constructor(app) {
    this.app = app;
    this.inv = { eggs: 0, milk: 0, wool: 0 };
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.menu = document.createElement('div'); this.menu.id = 'ctx'; this.menu.hidden = true; document.body.appendChild(this.menu);
    this.hud = document.createElement('div'); this.hud.id = 'hud-play'; document.body.appendChild(this.hud);
    this.modeEl = document.createElement('div'); this.modeEl.id = 'hud-mode'; this.modeEl.hidden = true; document.body.appendChild(this.modeEl);
    this.menu.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.menu.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b || b.disabled) return;
      if (b.dataset.close != null) { this.deselect(); return; }
      const fn = this.actions?.[+b.dataset.a]; if (fn) { fn.run(); this.refresh(); }
    });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 40), new THREE.MeshBasicMaterial({ color: 0xd8a02a, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false, side: THREE.DoubleSide }));
    this.ring.rotation.x = -Math.PI / 2; this.ring.renderOrder = 8; this.ring.visible = false;
    app.scene.add(this.ring);
    this.fx = new FxPool(app.scene);
    this.ballGeo = new THREE.SphereGeometry(0.22, 10, 8); this.ballMat = new THREE.MeshLambertMaterial({ color: 0x1d1b19 });
    this.balls = [];
    this.enc = new Encounters(this);
    this.chips = document.createElement('div'); this.chips.id = 'gar-chips'; document.body.appendChild(this.chips);
    this.mini = ''; this._mt = 0;
  }

  // ---------------------------------------------------------------- level life cycle
  onLoad(W, view, people) {
    const app = this.app;
    this.W = W; this.view = view; this.people = people;
    this.deselect(); this.mode = null; this.pending = null;
    this.carry = null; this.mount = null; this.t = 0;
    people.ctrlFn = (a, dt, t) => this.ctrl(a, dt, t);
    // the guns: one instanced barrel and one carriage mesh for the lot
    if (this.gunGroup) { app.scene.remove(this.gunGroup); this.gunGroup.traverse((o) => o.geometry?.dispose()); }
    this.gunGroup = new THREE.Group(); app.scene.add(this.gunGroup);
    this.guns = W.guns;
    if (this.guns.length) {
      const g0 = this.guns[0], parts = gunParts(g0.len, g0.r, W.pal.iron, W.pal.wood);
      const mat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'guns');
      this.barrels = new THREE.InstancedMesh(parts.barrel, mat, this.guns.length); this.carriages = new THREE.InstancedMesh(parts.carriage, mat, this.guns.length);
      for (const m of [this.barrels, this.carriages]) { m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; this.gunGroup.add(m); }
      this.gunLift = parts.lift;
      // most guns are iron; one in five is cast bronze
      const ironC = new THREE.Color().setRGB(...W.pal.iron).multiplyScalar(1.6), bronze = new THREE.Color('#a07a3e');
      for (const g of this.guns) { this.barrels.setColorAt(g.id, g.id % 5 === 2 ? bronze : ironC); this.carriages.setColorAt(g.id, new THREE.Color(1, 1, 1)); }
      for (const g of this.guns) this._gunMatrix(g);
    }
    // pens and their occupants: animals that start inside a pen belong to it
    this.pens = W.pens.map((p) => Object.assign(p, { eggs: 0, breedT: 0, eggT: 0, bb: bbox(p.poly), c: p.poly.reduce((a, q) => [a[0] + q[0] / p.poly.length, a[1] + q[1] / p.poly.length], [0, 0]) }));
    for (const a of people.agents) {
      const tr = ANIMAL_TRAITS[a.s.kind];
      if (!tr) continue;
      const pen = this.pens.find((p) => pointInPoly(a.x, a.y, p.poly));
      if (pen) a.ctrl = { mode: 'pen', pen };
      else if (tr.flee || tr.catch) a.ctrl = { mode: 'wild' };
    }
    // soldiers standing beside a gun at the start are its crew
    for (const g of this.guns) for (const a of people.agents) {
      if (g.crew.length >= 2 || a.ctrl || !SOLDIERS.has(a.s.kind) || a.s.mode !== 'idle') continue;
      if (Math.hypot(a.x - g.x, a.y - g.y) < 3.6 && Math.abs(a.h - g.h) < 1.5) { a.ctrl = { mode: 'crew', gun: g }; g.crew.push(a); }
    }
    for (const G of W.garrisons) G.inside = [];
    for (const S of W.settlements) { S.open = false; S.timer = 4; S.pop = 0; S.houses = []; for (const p of S.plots) { p.built = 0; p.claimed = false; } }
    if (this.houseGroup) { app.scene.remove(this.houseGroup); this.houseGroup.traverse((o) => o.geometry?.dispose()); }
    this.houseGroup = new THREE.Group(); app.scene.add(this.houseGroup);
    for (const b of this.balls) app.scene.remove(b.m); this.balls = [];
    this.enemies = (view.boats || []).filter((B) => B.b.enemy);
    for (const B of this.enemies) { B.hits = 0; B.sinkT = null; }
    this.hudDirty = true;
  }

  // ---------------------------------------------------------------- picking
  _screen(x, y, h) {
    const v = new THREE.Vector3(x, h, -y).project(this.app.cam.cam);
    const r = this.app.canvas.getBoundingClientRect();
    return [(v.x * 0.5 + 0.5) * r.width + r.left, (-v.y * 0.5 + 0.5) * r.height + r.top, v.z];
  }
  _candidates() {
    const out = [];
    for (const a of this.people.agents) {
      if (a.ctrl?.mode === 'garrisoned' || a.ctrl?.mode === 'carried') continue;
      const k = a.s.kind;
      if (ANIMAL_TRAITS[k]) out.push({ type: 'animal', a, x: a.x, y: a.y, h: a.h + 0.4 * (a.scale ?? 1) * (k.startsWith('horse') || k === 'cow' ? 3 : 1) });
      else if (SOLDIERS.has(k) && !a.s.ferry && !a.co) out.push({ type: 'soldier', a, x: a.x, y: a.y, h: a.h + 1.2 });
    }
    for (const g of this.guns) out.push({ type: 'gun', g, x: g.x, y: g.y, h: g.h + 0.8 });
    for (const p of this.pens) out.push({ type: 'pen', p, x: p.c[0], y: p.c[1], h: this.W.ground(p.c[0], p.c[1]) + 0.6, r: 40 });
    for (const G of this.W.garrisons) if (G.kind !== 'building') out.push({ type: 'garrison', G, x: G.x, y: G.y, h: G.h + 1, r: 30 });
    for (const S of this.W.settlements) { const c = S.marker; if (c) out.push({ type: 'settle', S, x: c[0], y: c[1], h: c[2] + 2, r: 40 }); }
    return out;
  }
  pick(cx, cy) {
    let best = null, bd = Infinity;
    for (const e of this._candidates()) {
      const [sx, sy, z] = this._screen(e.x, e.y, e.h); if (z > 1) continue;
      const d = Math.hypot(sx - cx, sy - cy), lim = e.r ?? 24;
      // small things win over big ones at the same distance
      const score = d / lim;
      if (d < lim && score < bd) { bd = score; best = e; }
    }
    return best;
  }

  // the building under the cursor: cast against the scene, then find whose footprint holds the hit
  _pickBuilding(cx, cy) {
    const ray = this.app._ray(cx, cy), rc = this._rc || (this._rc = new THREE.Raycaster());
    rc.set(ray.origin, ray.direction);
    const hits = rc.intersectObjects(this.view.pick || [], false);
    if (!hits.length) return null;
    const p = hits[0].point, x = p.x, y = -p.z;
    let best = null;
    for (const G of this.W.garrisons) if (G.poly && pointInPoly(x, y, G.poly) && (!best || G.area < best.area)) best = G;
    return best ? { type: 'garrison', G: best, x: best.x, y: best.y, h: best.h + 1 } : null;
  }
  // ---------------------------------------------------------------- clicks (returns true when handled)
  click(cx, cy, run) {
    if (!this.W) return false;
    if (this.mode?.type === 'aim') { this._aimClick(cx, cy); return true; }
    if (this.mode?.type === 'move') { this._moveClick(cx, cy); return true; }
    const e = this.pick(cx, cy) || this._pickBuilding(cx, cy) || this.app.farm?.pick(cx, cy);
    if (e) { this.select(e); return true; }
    if (this.sel) this.deselect();
    return false;
  }
  cancel() { if (this.mode) { this.mode = null; this.app.canvas.style.cursor = ''; this._modeText(null); return true; } if (this.sel) { this.deselect(); return true; } return false; }
  select(e) { this.sel = e; this.refresh(); }
  deselect() { this.sel = null; this.menu.hidden = true; this.ring.visible = false; this.app.chrome?.hideSelection(); }
  _modeText(t) { this.modeEl.hidden = !t; if (t) this.modeEl.textContent = t; }

  // ---------------------------------------------------------------- menus
  refresh() {
    const e = this.sel; if (!e) return;
    const A = []; let title = '', status = '', limit = '';
    const add = (label, run, { disabled = false, on = false } = {}) => A.push({ label, run, disabled, on });
    const T = this.app.traveller, near = (x, y, d) => Math.hypot(T.pos[0] - x, T.pos[1] - y) < d;
    if (e.type === 'animal') {
      const a = e.a, k = a.s.kind, tr = ANIMAL_TRAITS[k] || {};
      title = LABEL[k] || k;
      const m = a.ctrl?.mode;
      if (k.startsWith('horse')) {
        if (!a.tame) { status = 'Wild. It will let you close if you come slowly.'; add('Tame it', () => this._pend('tame', a, 2)); }
        else if (this.mount === a) { status = 'You are riding.'; add('Dismount', () => this._dismount()); }
        else { status = 'Tamed.'; add('Ride', () => this._pend('ride', a, 1.6)); add(m === 'follow' ? 'Stop leading' : 'Lead by the rein', () => { a.ctrl = m === 'follow' ? null : { mode: 'follow', d: 2.2 }; }); add('Let it go', () => { a.tame = false; a.ctrl = { mode: 'wild' }; }); }
        limit = 'Horses cannot be ridden up stairs; you dismount at the foot of a flight.';
      } else if (k === 'dog') {
        if (!a.friend) { status = 'Wary of strangers.'; add('Befriend', () => this._pend('befriend', a, 1.8)); }
        else { status = m === 'follow' ? 'At your heel.' : 'Waiting.'; add(m === 'follow' ? 'Stay here' : 'Come to heel', () => { a.ctrl = m === 'follow' ? { mode: 'stay' } : { mode: 'follow', d: 1.6 }; }); add('Let it go', () => { a.friend = false; a.ctrl = null; }); }
      } else if (k === 'cat') { status = 'Cats keep their own counsel. It will not be caught or led.'; }
      else if (tr.wild && WILD[k]) { this._wildMenu(a, k, add, (st, lim) => { status = st; limit = lim; }); }
      else if (tr.wild) { status = k === 'langur' ? 'A Hanuman langur. Troops sun themselves on the walls and leap off if you come close.' : k === 'macaque' ? 'A rhesus macaque. Bold and quick; keep your food out of reach.' : k === 'peafowl' ? 'Wild peafowl. They roost in the trees and keep their distance.' : k === 'boar' ? 'Wild boar. Dangerous when cornered; it will not be led.' : 'A wild Indian wolf. It shadows the herds and keeps well clear of people.'; }
      else if (tr.herd) {
        const pen = m === 'pen' ? a.ctrl.pen : null;
        if (pen) { status = `In the ${pen.name.toLowerCase()}.`; this._penActions(pen, add); }
        else {
          const flock = this._flock(a);
          status = m === 'follow' ? `Following you (${flock.filter((b) => b.ctrl?.mode === 'follow').length}).` : `A flock of ${flock.length}.`;
          add(m === 'follow' ? 'Stop leading' : `Lead the flock (${flock.length})`, () => { for (const b of flock) b.ctrl = m === 'follow' ? null : { mode: 'follow', d: 2.5 + Math.random() * 3 }; });
          if (m === 'follow') limit = 'Walk them to a pen and choose “Pen the flock” there.';
        }
      } else if (tr.catch) {
        if (m === 'pen') { const pen = a.ctrl.pen; status = `In the ${pen.name.toLowerCase()}.`; this._penActions(pen, add); }
        else { status = 'Loose. It will run if you rush at it.'; add(this.carry ? 'Your hands are full' : 'Catch it', () => this._pend('catch', a, 0.9), { disabled: !!this.carry }); limit = k === 'rabbit' ? 'Hares are fast: chase one into a corner or tire it out.' : 'A caught bird can be carried to a coop. A coop needs a hen and a cock before it will breed.'; }
      }
    } else if (e.type === 'soldier') {
      const a = e.a; title = LABEL[a.s.kind] || 'Soldier';
      const squad = this._squad(a);
      const m = a.ctrl?.mode;
      status = m === 'crew' ? 'Serving a gun.' : m === 'follow' ? 'Following you.' : m === 'goto' ? 'On the move.' : 'At his post.';
      add(m === 'follow' ? 'Halt' : `Follow me (squad of ${squad.length})`, () => { for (const b of squad) b.ctrl = m === 'follow' ? null : { mode: 'follow', d: 2 + squad.indexOf(b) * 0.8 }; });
      add('Man the nearest gun', () => this._toNearestGun(a), { disabled: !this.guns.length });
      add(`Garrison the nearest post (${squad.length})`, () => this._toNearestGarrison(squad), { disabled: !this.W.garrisons.length });
      if (m) add('Dismiss', () => { this._releaseCrew(a); a.ctrl = null; });
    } else if (e.type === 'gun') {
      const g = e.g; title = g.name || 'Gun';
      status = `${g.crew.length ? g.crew.length + ' crew' : 'No crew'} · ${g.mode === 'auto' ? 'automatic fire' : g.moving ? 'being moved' : g.reload > 0 ? `reloading (${Math.ceil(g.reload)} s)` : 'loaded'}`;
      add('Fire it yourself', () => this._pend('man', g, 1.8));
      add('Order the crew to fire', () => { this.mode = { type: 'aim', gun: g, by: 'crew' }; this.app.canvas.style.cursor = 'crosshair'; this._modeText('Click a target for the crew. Esc to stop.'); }, { disabled: !g.crew.length });
      add(g.mode === 'auto' ? 'Automatic fire: on' : 'Automatic fire: off', () => { g.mode = g.mode === 'auto' ? 'idle' : 'auto'; }, { disabled: !g.crew.length, on: g.mode === 'auto' });
      add('Assign a gunner', () => this._assignGunner(g), { disabled: g.crew.length >= 3 });
      if (g.crew.length) add('Stand the crew down', () => { for (const c of g.crew.slice()) { this._releaseCrew(c); c.ctrl = null; } g.mode = 'idle'; });
      add('Turn left', () => this._turn(g, 12)); add('Turn right', () => this._turn(g, -12));
      add('Move the gun', () => { if (!g.crew.length && !near(g.x, g.y, 3.5)) { this.app.ui.toast('Stand at the gun or give it a crew to move it'); return; } this.mode = { type: 'move', gun: g }; this.app.canvas.style.cursor = 'move'; this._modeText('Click where to roll the gun. Esc to cancel.'); });
      limit = `Guns traverse ${g.arc}° either side of their embrasure, reach about 450 m, and roll only along level rampart and bastion tops, never up or down stairs, at most 45 m at a time.`;
    } else if (e.type === 'pen') {
      const p = e.p; title = p.name; status = this._penStatus(p);
      this._penActions(p, add);
    } else if (e.type === 'garrison') {
      const G = e.G; title = G.name;
      status = `Garrison ${G.inside.length * 5} of ${G.cap * 5} men${G.kind === 'building' ? ` · ${Math.round(G.area)} m² ${G.ruin ? '(roofless: shelter only)' : ''}` : ''}.`;
      if (G.use === 'granary' && this.app.farm) { status += ' ' + this.app.farm.storesText(); }
      const avail = this._soldiersNear(G.x, G.y, 80).filter((a) => !a.ctrl);
      add(`Send in soldiers (${Math.min(avail.length, G.cap - G.inside.length)} nearby)`, () => this._garrison(G, avail), { disabled: !avail.length || G.inside.length >= G.cap });
      add('Call the garrison out', () => this._ungarrison(G), { disabled: !G.inside.length });
      limit = G.use === 'granary' ? 'A granary holds a small guard only. Harvests and the supply boats fill it; everyone in the fort eats from it, about 0.9 kg of grain a man a day.' : G.kind === 'building' ? `Holds about ${G.cap * 5} men (room per man by use: barracks 4 m², house 8 m², palace 10 m²; roofless ruins half). In a battle, men inside fire from the windows at enemies within about 70 m and cannot be shot at.` : 'Garrisoned soldiers are safe from fire and help serve the guns on their bastion.';
    } else if (e.type === 'field') {
      title = e.F.name; this.app.farm.menu(e.F, add, (st, lim) => { status = st; limit = lim; });
    } else if (e.type === 'settle') {
      const S = e.S, built = S.plots.filter((p) => p.built >= 1).length;
      title = S.name; status = `${built} of ${S.plots.length} plots built · ${S.pop} settlers`;
      add(S.open ? 'Close to newcomers' : 'Open the plots to settlers', () => { S.open = !S.open; if (S.open) S.timer = 2; }, { on: S.open });
      limit = 'Families walk in from the gate, claim a plot and build a house on it. They come only while the plots are open.';
    }
    this.actions = A;
    // the selection's console (portrait, properties, actions) replaces the floating menu
    this.menu.hidden = true;
    this.app.chrome?.showSelection(e, title, status, limit, A);
  }
  _wildMenu(a, k, add, set) {
    const S = WILD[k], E = this.enc;
    if (a.dead) { set(`A dead ${S.name}.`, ''); return; }
    if (a.captive) {
      set(`A captured ${S.name}, on a cord.`, S.huntable ? '' : 'It can only be let go.');
      add(a.ctrl?.mode === 'follow' ? 'Tie it here' : 'Lead it', () => { a.ctrl = a.ctrl?.mode === 'follow' ? { mode: 'stay' } : { mode: 'follow', d: 2.4 }; });
      add('Let it go', () => { a.captive = false; a.tame = false; a.ctrl = { mode: 'wild' }; a.fleeT = 9; });
      return;
    }
    if (E.cur) { set(E.cur.a === a ? (E.cur.phase === 'struggle' ? 'The struggle is on…' : 'Closing in…') : 'You are already in pursuit of another animal.', ''); return; }
    const help = E.helpers(a), cond = E.cond();
    const line = (how, n) => { const O = odds(k, [{ player: true }, ...help.slice(0, n)], how, cond), R = shares(O); return how === 'hunt' ? `kill ${R.die}%, escapes ${R.escape}%, someone hurt ${pct(O.hurt)}` : `taken ${R.take}%, escapes ${R.escape}%${R.die ? `, killed ${R.die}%` : ''}, someone hurt ${pct(O.hurt)}${O.fatal && O.hurt ? ' (can be fatal)' : ''}`; };
    const night = cond.night > 0.5 ? ' Darkness worsens the odds.' : '';
    set(`A wild ${S.name}.${night}`, `${S.why} Odds alone: ${line('capture', 0)}.${help.length ? ` With ${help.length} men: ${line('capture', help.length)}.` : ''}${S.huntable ? ` Hunting with ${help.length || 'no'} men: ${line('hunt', help.length)}.` : ''}`);
    add('Try to capture it alone', () => E.begin(a, 'capture', 0));
    if (help.length) add(`Try to capture it with ${help.length} men`, () => E.begin(a, 'capture', help.length));
    if (S.huntable) add(help.length ? `Hunt it with ${help.length} men` : 'Hunt it alone', () => E.begin(a, 'hunt', help.length));
    add('Leave it be', () => this.deselect());
  }
  _penStatus(p) {
    const inside = this._penned(p), by = {};
    for (const a of inside) by[a.s.kind] = (by[a.s.kind] || 0) + 1;
    const list = Object.entries(by).map(([k, n]) => `${n} ${(LABEL[k] || k).toLowerCase()}${n > 1 ? 's' : ''}`).join(', ');
    const can = this._canBreed(p);
    return `${list || 'Empty'}.${p.eggs ? ` ${p.eggs} eggs.` : ''} ${can ? `Breeding: young in about ${Math.max(1, Math.ceil(can.next - p.breedT))} s.` : inside.length ? (p.kind === 'chicken' ? 'Needs a hen and a cock to breed.' : 'Needs two of a kind to breed.') : ''}`;
  }
  _penActions(p, add) {
    const T = this.app.traveller;
    if (this.carry && this._fits(p, this.carry.s.kind)) add(`Put the ${(LABEL[this.carry.s.kind] || '').toLowerCase()} in`, () => { const a = this.carry; this.carry = null; this._toPen(a, p); this.hudDirty = true; });
    const flock = this.people.agents.filter((a) => a.ctrl?.mode === 'follow' && ANIMAL_TRAITS[a.s.kind]?.herd && this._fits(p, a.s.kind));
    if (flock.length) add(`Pen the flock (${flock.length})`, () => { for (const a of flock) this._toPen(a, p); });
    if (p.eggs) add(`Collect the eggs (${p.eggs})`, () => { this.inv.eggs += p.eggs; p.eggs = 0; this.hudDirty = true; });
    const t = this.t, inside = this._penned(p);
    const milk = inside.filter((a) => ANIMAL_TRAITS[a.s.kind]?.products?.includes('milk') && (a.scale ?? 1) > 0.95 && !(a.milkT > t));
    if (inside.some((a) => ANIMAL_TRAITS[a.s.kind]?.products?.includes('milk'))) add(`Milk (${milk.length} ready)`, () => { for (const a of milk) a.milkT = t + 90; this.inv.milk += milk.length; this.hudDirty = true; }, { disabled: !milk.length });
    const wool = inside.filter((a) => a.s.kind === 'sheep' && (a.scale ?? 1) > 0.95 && !(a.shearT > t));
    if (inside.some((a) => a.s.kind === 'sheep')) add(`Shear (${wool.length} ready)`, () => { for (const a of wool) a.shearT = t + 240; this.inv.wool += wool.length; this.hudDirty = true; }, { disabled: !wool.length });
    void T;
  }
  _fits(p, kind) { const tr = ANIMAL_TRAITS[kind]; if (!tr) return false; if (p.kind === 'any') return !!tr.herd || !!tr.catch; if (p.kind === 'chicken') return tr.breed === 'chicken'; if (p.kind === 'rabbit') return kind === 'rabbit'; return !!tr.herd; }
  _penned(p) { return this.people.agents.filter((a) => a.ctrl?.mode === 'pen' && a.ctrl.pen === p); }
  _flock(a) { return this.people.agents.filter((b) => b.s.kind === a.s.kind && b.ctrl?.mode !== 'pen' && Math.hypot(b.x - a.x, b.y - a.y) < 32); }
  _squad(a) { return [a, ...this._soldiersNear(a.x, a.y, 12).filter((b) => b !== a && !b.ctrl).slice(0, 5)]; }
  _soldiersNear(x, y, r) { return this.people.agents.filter((b) => SOLDIERS.has(b.s.kind) && !b.s.ferry && b.ctrl?.mode !== 'garrisoned' && Math.hypot(b.x - x, b.y - y) < r).sort((p, q) => Math.hypot(p.x - x, p.y - y) - Math.hypot(q.x - x, q.y - y)); }

  // ---------------------------------------------------------------- actions
  _pend(type, target, reach) {
    const [x, y, h] = type === 'man' ? this._breech(target) : [target.x, target.y, target.h];
    this.pending = { type, target, reach, t: 0, chase: 0 };
    this.app.walkTo(x, y, h, type === 'catch');
  }
  _breech(g) { const a = g.dir * DEG; return [g.x - Math.cos(a) * 2.2, g.y - Math.sin(a) * 2.2, g.h]; }
  _toPen(a, p) {
    const gx = p.poly[p.gate], gy = p.poly[(p.gate + 1) % p.poly.length];
    const inX = p.c[0] * 0.7 + (gx[0] + gy[0]) / 2 * 0.3, inY = p.c[1] * 0.7 + (gx[1] + gy[1]) / 2 * 0.3;
    a.x = inX; a.y = inY; a.h = this.W.ground(inX, inY); a.path = null;
    a.ctrl = { mode: 'pen', pen: p };
  }
  _dismount() {
    const a = this.mount; if (!a) return;
    this.mount = null; a.ctrl = { mode: 'stay' };
    const T = this.app.traveller; a.x = T.pos[0] + 1.2; a.y = T.pos[1]; a.h = T.pos[2];
    this.hudDirty = true;
  }
  _turn(g, deg) {
    const nd = g.dir + deg; let off = ((nd - g.home + 540) % 360) - 180;
    if (Math.abs(off) > g.arc) { this.app.ui.toast(`The embrasure limits this gun to ${g.arc}° either side`); return; }
    g.dir = nd; this._gunMatrix(g);
  }
  _assignGunner(g) {
    const c = this._soldiersNear(g.x, g.y, 120).find((a) => !a.ctrl || a.ctrl.mode === 'follow');
    if (!c) { this.app.ui.toast('No free soldier within reach'); return; }
    this._sendTo(c, g.x, g.y, g.h, { mode: 'crew', gun: g });
    g.crew.push(c);
  }
  _toNearestGun(a) {
    let best = null, bd = Infinity;
    for (const g of this.guns) { const d = Math.hypot(g.x - a.x, g.y - a.y); if (g.crew.length < 3 && d < bd) { bd = d; best = g; } }
    if (!best) { this.app.ui.toast('Every gun is fully crewed'); return; }
    this._releaseCrew(a); this._sendTo(a, best.x, best.y, best.h, { mode: 'crew', gun: best }); best.crew.push(a);
  }
  _releaseCrew(a) { for (const g of this.guns) { const i = g.crew.indexOf(a); if (i >= 0) g.crew.splice(i, 1); if (!g.crew.length && g.mode === 'auto') g.mode = 'idle'; } }
  _toNearestGarrison(squad) {
    const a = squad[0];
    const G = this.W.garrisons.filter((q) => q.inside.length < q.cap).sort((p, q) => Math.hypot(p.x - a.x, p.y - a.y) - Math.hypot(q.x - a.x, q.y - a.y))[0];
    if (!G) { this.app.ui.toast('Every post is full'); return; }
    this._garrison(G, squad);
  }
  _garrison(G, soldiers) {
    for (const a of soldiers.slice(0, G.cap - G.inside.length)) { this._releaseCrew(a); this._sendTo(a, G.x, G.y, G.h, { mode: 'garrisoned', G }); G.inside.push(a); }
  }
  _ungarrison(G) {
    for (const a of G.inside) { const ang = Math.random() * TAU; a.x = G.x + Math.cos(ang) * 2; a.y = G.y + Math.sin(ang) * 2; a.h = G.h; a.ctrl = null; a.path = null; }
    G.inside = [];
  }
  _sendTo(a, x, y, h, then) { a.ctrl = { mode: 'goto', to: [x, y, h], then, tries: 0 }; a.path = null; }

  // ---------------------------------------------------------------- guns
  _gunMatrix(g) {
    const i = g.id, a = g.dir * DEG, rc = g.recoil * 0.5;
    const m = new THREE.Matrix4().compose(new THREE.Vector3(g.x, g.h, -g.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, a, 0)), new THREE.Vector3(1, 1, 1));
    this.carriages.setMatrixAt(i, m);
    const mb = new THREE.Matrix4().compose(new THREE.Vector3(g.x - Math.cos(a) * rc, g.h, -(g.y - Math.sin(a) * rc)), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, a, 0)), new THREE.Vector3(1, 1, 1));
    this.barrels.setMatrixAt(i, mb);
    this.carriages.instanceMatrix.needsUpdate = true; this.barrels.instanceMatrix.needsUpdate = true;
  }
  _groundHit(cx, cy) {
    const ray = this.app._ray(cx, cy), W = this.W;
    let best = null;
    if (W.seaLevel != null && ray.direction.y < 0) { const t = (W.seaLevel - ray.origin.y) / ray.direction.y; best = [ray.origin.x + ray.direction.x * t, -(ray.origin.z + ray.direction.z * t), W.seaLevel, t]; }
    const hit = W.nav.pickRay([ray.origin.x, ray.origin.y, ray.origin.z], [ray.direction.x, ray.direction.y, ray.direction.z]);
    if (hit) { const t = Math.hypot(hit[0] - ray.origin.x, hit[2] - ray.origin.y, -hit[1] - ray.origin.z); if (!best || t < best[3]) best = [hit[0], hit[1], hit[2], t]; }
    // terrain beyond the walkable grid (open ground, shallows)
    if (!best) { for (let t = 0; t < 6000; t += 4) { const x = ray.origin.x + ray.direction.x * t, y = ray.origin.y + ray.direction.y * t, z = ray.origin.z + ray.direction.z * t; if (y < W.ground(x, -z)) { best = [x, -z, W.ground(x, -z), t]; break; } } }
    return best;
  }
  _aimClick(cx, cy) {
    const { gun: g, by } = this.mode;
    const hit = this._groundHit(cx, cy); if (!hit) return;
    const [tx, ty, th] = hit, d = Math.hypot(tx - g.x, ty - g.y);
    const want = Math.atan2(ty - g.y, tx - g.x) / DEG, off = ((want - g.home + 540) % 360) - 180;
    if (Math.abs(off) > g.arc) { this.app.ui.toast(`Out of the embrasure's arc (${g.arc}° either side)`); return; }
    if (d < 25) { this.app.ui.toast('Too close for this gun'); return; }
    if (d > 450) { this.app.ui.toast('Out of range (about 450 m)'); return; }
    if (g.reload > 0) { this.app.ui.toast(`Reloading: ${Math.ceil(g.reload)} s`); return; }
    g.dir = want; this._gunMatrix(g);
    this._fire(g, tx, ty, th, by === 'player' ? 9 : 12);
    if (by === 'crew') { this.mode = null; this.app.canvas.style.cursor = ''; this._modeText(null); }
  }
  _fire(g, tx, ty, th, reload) {
    const a = g.dir * DEG, ca = Math.cos(a), sa = Math.sin(a);
    const mx = g.x + ca * g.len * 0.68, my = g.y + sa * g.len * 0.68, mh = g.h + this.gunLift;
    this.fx.burst({ x: mx, y: my, h: mh, n: 14, up: [0, 0.8], out: [4, 12], dir: [ca, sa], side: 1.5, life: [0.08, 0.2], size: [1.5, 0.4], color: '#ffd27a', alpha: 1, flash: true });
    this.fx.burst({ x: mx, y: my, h: mh, n: 46, up: [0.2, 1.4], out: [1.5, 11], dir: [ca, sa], side: 2.6, life: [3, 7], size: [0.8, 5.5], color: '#ece9e2', alpha: 0.45, drag: 1.3, g: -0.08, wind: [0.5, 0.2], spread: 0.05 });
    g.recoil = 1; g.reload = reload; this.app.audio?.cannon(g.x, g.y);
    const d = Math.hypot(tx - mx, ty - my), dur = 0.35 + d / 160, apex = 2 + d * 0.11;
    const m = new THREE.Mesh(this.ballGeo, this.ballMat); m.castShadow = true; this.app.scene.add(m);
    this.balls.push({ m, from: [mx, my, mh], to: [tx, ty, th], t: 0, dur, apex });
  }
  _impact(b) {
    const [x, y, h] = b.to, W = this.W;
    this.app.battle?.onImpact(x, y);
    const wet = W.waterLevelAt(x, y) > W.ground(x, y) + 0.2;
    if (wet) this.app.audio?.splash(x, y); else this.app.audio?.thud(x, y);
    if (wet) this.fx.burst({ x, y, h: W.waterLevelAt(x, y), n: 40, up: [5, 13], out: [0, 1.5], side: 1.5, life: [1, 2], size: [0.6, 2.4], color: '#f2f5f4', alpha: 0.85, g: 9.8, jitter: 1 });
    else this.fx.burst({ x, y, h, n: 34, up: [2, 6], out: [1, 4], side: 2, life: [1.2, 2.8], size: [0.8, 3.5], color: '#9a8466', alpha: 0.6, g: 3, drag: 1.2, jitter: 0.8 });
    for (const B of this.enemies) {
      if (B.sinkT != null) continue;
      const p = B.m.position;
      if (Math.hypot(p.x - x, -p.z - y) < 7) {
        B.hits++;
        this.fx.burst({ x: p.x, y: -p.z, h: 1.5, n: 30, up: [1, 4], out: [1, 3], side: 1.5, life: [2, 5], size: [1, 4], color: '#4a4440', alpha: 0.55, drag: 0.8, g: -0.2 });
        if (B.hits >= 2) { B.sinkT = this.app.t; this.app.ui.toast('Enemy gallivat sunk'); } else this.app.ui.toast('A hit!');
      }
    }
  }
  _moveClick(cx, cy) {
    const g = this.mode.gun, W = this.W, nav = W.nav;
    const hit = this._groundHit(cx, cy); if (!hit) return;
    const node = nav.nearest(hit[0], hit[1], g.h, 4, 1.0);
    const fail = (m) => { this.app.ui.toast(m); };
    if (node < 0) return fail('Guns can only stand on level rampart or bastion tops');
    const tag = nav.T[node], [nx, ny] = nav.nodeXY(node), nh = nav.H[node];
    if (![TAG.rampart, TAG.bastion, TAG.terrace].includes(tag)) return fail('Guns can only stand on rampart, bastion or terrace tops');
    if (Math.abs(nh - g.h) > 0.8) return fail('That spot is higher or lower than the gun; it cannot be hauled up or down');
    const path = nav.findPath([g.x, g.y, g.h], [nx, ny, nh]);
    if (!path) return fail('No level way there');
    let L = 0; for (let i = 1; i < path.length; i++) { L += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); if (Math.abs(path[i][2] - g.h) > 0.8) return fail('The way there goes up or down stairs'); }
    if (L > 45) return fail(`Too far to haul in one go (${Math.round(L)} m; 45 m at most)`);
    g.movePath = path; g.pi = 1; g.moving = true; g.mode = 'idle';
    this.mode = null; this.app.canvas.style.cursor = ''; this._modeText(null);
  }

  // ---------------------------------------------------------------- per-agent control (called by People)
  ctrl(a, dt) {
    const c = a.ctrl, T = this.app.traveller, W = this.W, nav = W.nav;
    const dP = Math.hypot(T.pos[0] - a.x, T.pos[1] - a.y);
    switch (c.mode) {
      case 'wild': {
        if (a.dead) { a.lie = true; return 'place'; }
        const tr = ANIMAL_TRAITS[a.s.kind] || {}, chased = this.pending?.type === 'catch' && this.pending.target === a;
        const r = (tr.flee || 0) * (chased ? 1.6 : 1);
        if (r && dP < r && (this.app.moving || chased)) {
          if (!a.path || a.fleeT > 0.8) {
            a.fleeT = 0;
            const ang = Math.atan2(a.y - T.pos[1], a.x - T.pos[0]) + (Math.random() - 0.5) * 1.6, d = 5 + Math.random() * 6;
            const n = nav.nearest(a.x + Math.cos(ang) * d, a.y + Math.sin(ang) * d, a.h, 3, 1.5);
            if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; }
          }
          a.fleeT = (a.fleeT || 0) + dt;
          const tired = chased && this.pending.chase > 5 ? 0.45 : 1;
          a.speedMul = (a.s.kind === 'rabbit' ? 2.6 : 3.2) * tired;
          return 'path';
        }
        a.speedMul = 1;
        return 'free';
      }
      case 'follow': case 'goto': {
        const [tx, ty, th] = c.mode === 'follow' ? T.pos : c.to;
        const d = Math.hypot(tx - a.x, ty - a.y);
        if (c.mode === 'goto' && d < 1.6 && Math.abs(th - a.h) < 1.5) { a.ctrl = c.then; a.path = null; return a.ctrl ? this.ctrl(a, dt) : 'free'; }
        c.re = (c.re || 0) - dt;
        if (c.mode === 'follow' && d < (c.d ?? 2)) { a.path = null; return 'path'; }
        if ((!a.path || c.re <= 0) && (c.mode === 'follow' || !a.path)) {
          c.re = c.mode === 'follow' ? 1.2 : 4;
          const n = nav.nearest(tx + (c.mode === 'follow' ? (Math.random() - 0.5) * 2 : 0), ty, th, 4, 2);
          if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; }
          if (!a.path && c.mode === 'goto' && ++c.tries > 3) { a.ctrl = c.then; return this.ctrl(a, dt); }
        }
        a.speedMul = d > 8 ? 1.9 : 1.2;
        return 'path';
      }
      case 'company': return this.app.battle.ctrl(a, dt);
      case 'hunter': {
        // run in on the animal and close round it
        const t = c.tgt, ang = c.slot * 2.1, tx = t.x + Math.cos(ang) * 1.6, ty = t.y + Math.sin(ang) * 1.6;
        if (Math.hypot(tx - a.x, ty - a.y) < 1.2) { a.path = null; a.yaw = Math.atan2(t.x - a.x, -(t.y - a.y)); a.walkAnim = false; return 'place'; }
        c.re = (c.re || 0) - dt;
        if (!a.path || c.re <= 0) { c.re = 0.9; const n = nav.nearest(tx, ty, t.h, 4, 2); if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; if (a.path && a.path.length < 2) a.path = null; } }
        a.speedMul = 2.2; return a.path ? 'path' : 'place';
      }
      case 'hurt': { a.hurt -= dt; if (a.hurt <= 0) { a.lie = false; a.ctrl = null; a.speedMul = 0.6; a.limpT = 60; } return 'place'; }
      case 'vanish': this.people.despawn(a); return 'hide';
      case 'stay': return 'place';
      case 'carried': {
        const ang = T.yaw; a.x = T.pos[0] + Math.sin(ang) * 0.35 + Math.cos(ang) * 0.25; a.y = T.pos[1] + Math.cos(ang) * 0.35 - Math.sin(ang) * 0.25;
        a.h = T.root.position.y + 0.95; a.yaw = T.yaw + Math.PI / 2; a.walkAnim = false; return 'place';
      }
      case 'mounted': {
        a.x = T.pos[0]; a.y = T.pos[1]; a.h = T.pos[2]; a.yaw = T.yaw; a.walkAnim = this.app.moving; return 'place';
      }
      case 'pen': {
        const p = c.pen;
        if (!c.tgt || Math.hypot(c.tgt[0] - a.x, c.tgt[1] - a.y) < 0.2) {
          c.wait = (c.wait ?? 0) - dt; a.walkAnim = false;
          if (c.wait > 0) { a.h = W.ground(a.x, a.y); return 'place'; }
          for (let k = 0; k < 10; k++) { const x = p.bb.x0 + Math.random() * (p.bb.x1 - p.bb.x0), y = p.bb.y0 + Math.random() * (p.bb.y1 - p.bb.y0); if (pointInPoly(x, y, p.poly) && W.isFree(x, y, 0) !== null) { const q = p.poly.map(([u, v]) => [p.c[0] + (u - p.c[0]) * 0.8, p.c[1] + (v - p.c[1]) * 0.8]); if (pointInPoly(x, y, q)) { c.tgt = [x, y]; break; } } }
          c.wait = 1 + Math.random() * 5;
        }
        if (c.tgt) {
          const dx = c.tgt[0] - a.x, dy = c.tgt[1] - a.y, d = Math.hypot(dx, dy), st = Math.min(d, a.speed * 0.6 * dt);
          a.x += dx / (d || 1) * st; a.y += dy / (d || 1) * st; a.yaw = Math.atan2(dx, -dy); a.walkAnim = d > 0.05;
        }
        a.h = W.ground(a.x, a.y);
        return 'place';
      }
      case 'crew': {
        const g = c.gun, k = g.crew.indexOf(a), ang = g.dir * DEG, side = k % 2 ? 1 : -1, back = 1.2 + Math.floor(k / 2) * 1.1;
        a.x = g.x - Math.cos(ang) * back - Math.sin(ang) * side * 1.0; a.y = g.y - Math.sin(ang) * back + Math.cos(ang) * side * 1.0; a.h = g.h;
        a.yaw = Math.atan2(Math.cos(ang), -Math.sin(ang)); a.walkAnim = !!g.moving;
        return 'place';
      }
      case 'garrisoned': {
        // on a bastion the garrison stands guard round the parapet; in barracks and towers they are indoors
        const G = c.G;
        if (G.kind !== 'bastion') return 'hide';
        const i = G.inside.indexOf(a), n = Math.max(G.inside.length, 1), ang = (i + 0.5) / n * TAU + (G.x + G.y) * 0.1, rr = Math.max(1.5, (G.r ?? 6) - 2.2);
        a.x = G.x + Math.cos(ang) * rr; a.y = G.y + Math.sin(ang) * rr; a.h = G.h; a.yaw = Math.atan2(Math.cos(ang), -Math.sin(ang)); a.walkAnim = false;
        return 'place';
      }
      case 'settler': {
        const pl = c.plot;
        if (Math.hypot(pl.x - a.x, pl.y - a.y) < 2.5 || c.tries > 3) {
          if (pl.built === 0) pl.built = 0.001;
          a.ctrl = null; a.s = Object.assign({}, a.s, { mode: 'wander', zone: c.S.poly }); a.path = null; return 'free';
        }
        if (!a.path) { const n = nav.nearest(pl.x, pl.y, pl.h, 6, 3); if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; } if (!a.path) c.tries = (c.tries || 0) + 1; }
        return 'path';
      }
      default: return 'free';
    }
  }

  // ---------------------------------------------------------------- breeding
  _canBreed(p) {
    const ins = this._penned(p).filter((a) => (a.scale ?? 1) > 0.95 && a.s.kind !== 'chick');
    if (ins.length + this._penned(p).filter((a) => (a.scale ?? 1) <= 0.95 || a.s.kind === 'chick').length >= p.cap) return null;
    const by = {}; for (const a of ins) by[a.s.kind] = (by[a.s.kind] || 0) + 1;
    if (by.chicken && by.rooster) return { kind: 'chick', next: 45 };
    for (const k of ['sheep', 'goat', 'cow', 'buffalo']) if ((by[k] || 0) >= 2) return { kind: k, next: 70 };
    if ((by.rabbit || 0) >= 2) return { kind: 'rabbit', next: 35 };
    return null;
  }
  _pens(dt) {
    for (const p of this.pens) {
      const ins = this._penned(p);
      const hens = ins.filter((a) => a.s.kind === 'chicken').length;
      // a hen lays about four eggs in five days, counted in calendar days (they pass only while time passes)
      if (hens) { p.eggT += (this.app.climate?.dDays || 0) * hens * 0.8; while (p.eggT >= 1) { p.eggT -= 1; p.eggs = Math.min(60, p.eggs + 1); } }
      const can = this._canBreed(p);
      if (can) {
        p.breedT += dt;
        if (p.breedT > can.next) {
          p.breedT = 0;
          const x = p.c[0] + (Math.random() - 0.5) * 2, y = p.c[1] + (Math.random() - 0.5) * 2;
          const yng = this.people.spawnAgent(can.kind, x, y, this.W.ground(x, y));
          if (yng) { yng.ctrl = { mode: 'pen', pen: p }; yng.scale = can.kind === 'chick' ? 1 : 0.5; yng.born = this.t; if (this.sel?.p === p) this.refresh(); }
        }
      } else p.breedT = 0;
      for (const a of ins) {
        if (a.born == null) continue;
        const age = this.t - a.born;
        if (a.s.kind === 'chick' && age > 90) { const k = Math.random() < 0.3 ? 'rooster' : 'chicken'; const b = this.people.spawnAgent(k, a.x, a.y, a.h); if (b) { b.ctrl = { mode: 'pen', pen: p }; this.people.despawn(a); } }
        else if (a.s.kind !== 'chick' && (a.scale ?? 1) < 1) a.scale = Math.min(1, 0.5 + age / 200);
      }
    }
  }

  // ---------------------------------------------------------------- settlers
  _settlers(dt) {
    for (const S of this.W.settlements) {
      if (!S.marker) {
        // a signpost on the nearest walkable spot to the middle of the plots
        const c = S.poly.reduce((a, q) => [a[0] + q[0] / S.poly.length, a[1] + q[1] / S.poly.length], [0, 0]);
        const n = this.W.nav.nearest(c[0], c[1], this.W.ground(c[0], c[1]), 20, 6);
        const [mx, my] = n >= 0 ? this.W.nav.nodeXY(n) : c, mh = n >= 0 ? this.W.nav.H[n] : this.W.ground(c[0], c[1]);
        S.marker = [mx, my, mh];
        const M = new Mesher(0.02), wood = C('#6b4c32');
        M.box(0, 0, 0.14, 0.14, 0, 2.4, 0, wood); M.box(0, 0, 1.4, 0.08, 1.6, 2.3, 0, C('#e8dcc0')); M.box(0, 0, 1.5, 0.1, 2.3, 2.38, 0, wood);
        const sign = new THREE.Mesh(M.toGeometry(), addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'house'));
        sign.position.set(mx, mh, -my); sign.castShadow = true; this.houseGroup.add(sign);
      }
      if (S.open) {
        S.timer -= dt;
        const free = S.plots.filter((p) => !p.claimed);
        if (S.timer <= 0 && free.length) {
          S.timer = 9 + Math.random() * 8;
          const pl = free[Math.floor(Math.random() * free.length)]; pl.claimed = true;
          const n = 2 + Math.floor(Math.random() * 2);
          for (let i = 0; i < n; i++) {
            const kind = S.kinds[Math.floor(Math.random() * S.kinds.length)];
            const a = this.people.spawnAgent(kind, S.from[0] + (Math.random() - 0.5) * 3, S.from[1] + (Math.random() - 0.5) * 3, S.from[2]);
            if (a) { a.ctrl = { mode: 'settler', plot: pl, S }; pl.family.push(a); S.pop++; }
          }
          if (this.sel?.S === S) this.refresh();
        }
      }
      for (const pl of S.plots) {
        if (pl.built > 0 && pl.built < 1) {
          if (!pl.mesh) { pl.mesh = this._house(pl); this.houseGroup.add(pl.mesh); }
          pl.built = Math.min(1, pl.built + dt / 6);
          pl.mesh.scale.set(1, Math.max(0.02, pl.built), 1);
          if (pl.built >= 1 && this.sel?.S === S) this.refresh();
        }
      }
    }
  }
  _house(pl) {
    const M = new Mesher(0.03), W = this.W;
    const wall = W.col(['plaster', 'plasterDark', '#d9cdb5'][Math.floor(Math.random() * 3)]), roof = W.col('#9a5a3a');
    const h = 3.0 + Math.random() * 0.8;
    M.box(0, 0, pl.w, pl.d, -0.6, h, pl.rot, wall);
    M.hip(0, 0, pl.w + 0.5, pl.d + 0.5, h, h + 1.6, pl.rot, roof, pl.w * 0.5);
    const c = Math.cos(pl.rot * DEG), s = Math.sin(pl.rot * DEG), dx = -s * (pl.d / 2 + 0.03), dy = c * (pl.d / 2 + 0.03);
    M.quad(V(dx - c * 0.55, dy - s * 0.55, 0), V(dx + c * 0.55, dy + s * 0.55, 0), V(dx + c * 0.55, dy + s * 0.55, 2.1), V(dx - c * 0.55, dy - s * 0.55, 2.1), [0.16, 0.12, 0.09]);
    const mesh = new THREE.Mesh(M.toGeometry(), addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), 'house'));
    mesh.position.set(pl.x, pl.h, -pl.y); mesh.castShadow = true; mesh.receiveShadow = true;
    return mesh;
  }

  // ---------------------------------------------------------------- minimap
  _miniLayer() {
    const W = this.W, [x0, , x1, y1] = W.bounds, s = Math.max(x1 - x0, W.bounds[3] - W.bounds[1]) / 60;
    const X = (x) => (x - x0).toFixed(1), Y = (y) => (y1 - y).toFixed(1);
    const out = [];
    for (const a of this.people.agents) {
      const m = a.ctrl?.mode; if (m === 'garrisoned' || m === 'carried' || m === 'mounted') continue;
      if (SOLDIERS.has(a.s.kind)) out.push(`<circle class="mm-sol" cx="${X(a.x)}" cy="${Y(a.y)}" r="${(s * 0.32).toFixed(2)}"/>`);
      else if (ANIMAL_TRAITS[a.s.kind]) out.push(`<circle class="mm-ani${a.tame || a.friend ? ' own' : ''}" cx="${X(a.x)}" cy="${Y(a.y)}" r="${(s * 0.26).toFixed(2)}"/>`);
    }
    for (const g of this.guns) out.push(`<rect class="mm-gun${g.mode === 'auto' ? ' auto' : g.crew.length ? ' crew' : ''}" x="${(g.x - x0 - s * 0.35).toFixed(1)}" y="${(y1 - g.y - s * 0.35).toFixed(1)}" width="${(s * 0.7).toFixed(2)}" height="${(s * 0.7).toFixed(2)}"/>`);
    for (const B of this.view.boats || []) {
      if (!B.m.visible) continue;
      const bx = B.m.position.x, by = -B.m.position.z; if (bx < x0 - 50 || bx > x1 + 50) continue;
      const a = -B.m.rotation.y * 180 / Math.PI, k = s * (B.b.enemy ? 1.2 : 0.9);
      out.push(`<path class="${B.b.enemy ? 'mm-foe' : 'mm-boat'}" transform="translate(${X(bx)} ${Y(by)}) rotate(${a.toFixed(0)})" d="M${k} 0 L${-k} ${(k * 0.55).toFixed(2)} L${-k} ${(-k * 0.55).toFixed(2)}Z"/>`);
    }
    for (const G of W.garrisons) if (G.inside?.length) out.push(`<g class="mm-gar" transform="translate(${X(G.x)} ${Y(G.y)})"><circle r="${(s * 1.05).toFixed(2)}"/><text dy="${(s * 0.4).toFixed(2)}" font-size="${(s * 1.2).toFixed(1)}">${G.inside.length}</text></g>`);
    for (const p of this.pens) { const n = this._penned(p).length; out.push(`<g class="mm-pen" transform="translate(${X(p.c[0])} ${Y(p.c[1])})"><rect x="${(-s * 0.8).toFixed(2)}" y="${(-s * 0.8).toFixed(2)}" width="${(s * 1.6).toFixed(2)}" height="${(s * 1.6).toFixed(2)}"/>${n ? `<text dy="${(s * 0.4).toFixed(2)}" font-size="${(s * 1.1).toFixed(1)}">${n}</text>` : ''}</g>`); }
    for (const S of W.settlements) if (S.marker) out.push(`<g class="mm-set" transform="translate(${X(S.marker[0])} ${Y(S.marker[1])})"><path d="M0 ${(-s * 1.4).toFixed(2)} L${(s * 1.2).toFixed(2)} 0 L${(-s * 1.2).toFixed(2)} 0Z"/><text dy="${(s * 1.4).toFixed(2)}" font-size="${(s * 1.1).toFixed(1)}">${S.plots.filter((p) => p.built >= 1).length}/${S.plots.length}</text></g>`);
    if (this.sel) { const e = this.sel, src = e.a || e.g || e; out.push(`<circle class="mm-sel" cx="${X(src.x ?? e.x)}" cy="${Y(src.y ?? e.y)}" r="${(s * 1.6).toFixed(2)}"/>`); }
    return `<g class="mm-live">${out.join('')}</g>`;
  }

  // ---------------------------------------------------------------- frame
  speedMul() { return (this.mount ? 1.75 : 1) * (this.hurtT > 0 ? 0.55 : 1); }
  update(dt) {
    if (!this.W) return;
    this.t += dt;
    if (this.hurtT > 0) { this.hurtT -= dt; if (this.hurtT <= 0) this.hudDirty = true; }
    this.enc.update(dt);
    const app = this.app, T = app.traveller, W = this.W;
    // pending hands-on actions: walk up, then do it
    const P = this.pending;
    if (P) {
      const tg = P.target, [x, y] = P.type === 'man' ? this._breech(tg) : [tg.x, tg.y];
      const d = Math.hypot(T.pos[0] - x, T.pos[1] - y);
      if (P.type === 'catch') {
        P.chase += dt; P.re = (P.re || 0) - dt;
        if (P.re <= 0) { P.re = 0.6; app.walkTo(tg.x, tg.y, tg.h, true); }
        if (d < 1.3) { this.carry = tg; tg.ctrl = { mode: 'carried' }; this.pending = null; app.ui.toast(`Caught the ${(LABEL[tg.s.kind] || '').toLowerCase()}`); this.hudDirty = true; if (this.sel?.a === tg) this.deselect(); }
        else if (P.chase > 30) { this.pending = null; app.ui.toast('It got away'); }
      } else if (d < P.reach) {
        P.t += dt;
        if (P.type === 'man') { this.pending = null; this.mode = { type: 'aim', gun: tg, by: 'player' }; app.canvas.style.cursor = 'crosshair'; this._modeText('Click a target to fire. Walk away or press Esc to leave the gun.'); }
        else if (P.type === 'tame' || P.type === 'befriend') {
          tg.ctrl = { mode: 'stay' }; tg.yaw = Math.atan2(T.pos[0] - tg.x, -(T.pos[1] - tg.y));
          if (P.t > (P.type === 'tame' ? 3 : 2)) {
            if (P.type === 'tame') { tg.tame = true; app.ui.toast(tg.s.kind === 'horse-war' ? 'The war horse accepts you' : 'The horse lets you take the rein'); } else { tg.friend = true; tg.ctrl = { mode: 'follow', d: 1.6 }; app.ui.toast('The dog falls in at your heel'); }
            this.pending = null; if (this.sel?.a === tg) this.refresh();
          }
        } else if (P.type === 'ride') { this.mount = tg; tg.ctrl = { mode: 'mounted' }; this.pending = null; T.place(tg.x, tg.y, tg.h); this.hudDirty = true; if (this.sel?.a === tg) this.refresh(); }
      } else if (!app.path && P.t === 0 && P.type !== 'man') { P.wait = (P.wait || 0) + dt; if (P.wait > 1.5) { P.wait = 0; app.walkTo(x, y, tg.h ?? T.pos[2]); } }
    }
    // leaving a gun you were manning
    if (this.mode?.type === 'aim' && this.mode.by === 'player') { const [bx, by] = this._breech(this.mode.gun); if (Math.hypot(T.pos[0] - bx, T.pos[1] - by) > 4) { this.mode = null; app.canvas.style.cursor = ''; this._modeText(null); } }
    // riding: sit higher, and step down at the foot of stairs
    if (this.mount) {
      const tag = W.nav.tagAt(T.pos[0], T.pos[1], T.pos[2]);
      if (tag === TAG.stairs || tag === TAG.tunnel) { this._dismount(); app.ui.toast('You dismount to take the stairs'); }
      else T.root.position.y = T.pos[2] + 1.05;
    }
    // guns: reload, recoil, rolling, automatic fire
    for (const g of this.guns) {
      let dirty = false;
      if (g.reload > 0) g.reload = Math.max(0, g.reload - dt * (1 + 0.35 * Math.max(0, g.crew.length - 1) + (g.bastion ? 0.2 * W.garrisons.filter((G) => G.kind === 'bastion' && Math.hypot(G.x - g.bastion.x, G.y - g.bastion.y) < 1 && G.inside.length).length : 0)));
      if (g.recoil > 0) { g.recoil = Math.max(0, g.recoil - dt * 1.6); dirty = true; }
      if (g.moving && g.movePath) {
        const q = g.movePath[g.pi]; const dx = q[0] - g.x, dy = q[1] - g.y, dd = Math.hypot(dx, dy), st = 0.9 * dt;
        if (dd <= st) { g.x = q[0]; g.y = q[1]; g.pi++; if (g.pi >= g.movePath.length) { g.moving = false; g.movePath = null; g.home = g.dir; g.arc = 60; } }
        else { g.x += dx / dd * st; g.y += dy / dd * st; const want = Math.atan2(dy, dx) / DEG; g.dir += (((want - g.dir + 540) % 360) - 180) * Math.min(1, dt * 2); }
        dirty = true;
      }
      if (g.mode === 'auto' && g.crew.length && g.reload <= 0 && !g.moving && this.enemies.length) {
        let best = null, bd = 450;
        for (const B of this.enemies) {
          if (B.sinkT != null || !B.m.visible) continue;
          const bx = B.m.position.x, by = -B.m.position.z, d = Math.hypot(bx - g.x, by - g.y);
          const off = ((Math.atan2(by - g.y, bx - g.x) / DEG - g.home + 540) % 360) - 180;
          if (d < bd && d > 25 && Math.abs(off) <= g.arc) { bd = d; best = [bx + (Math.random() - 0.5) * 10, by + (Math.random() - 0.5) * 10]; }
        }
        if (best) { g.dir = Math.atan2(best[1] - g.y, best[0] - g.x) / DEG; this._fire(g, best[0], best[1], W.seaLevel ?? 0, 14); dirty = true; }
      }
      if (dirty) this._gunMatrix(g);
    }
    // shot in flight
    for (let i = this.balls.length - 1; i >= 0; i--) {
      const b = this.balls[i]; b.t += dt; const f = Math.min(1, b.t / b.dur);
      const x = b.from[0] + (b.to[0] - b.from[0]) * f, y = b.from[1] + (b.to[1] - b.from[1]) * f, h = b.from[2] + (b.to[2] - b.from[2]) * f + b.apex * 4 * f * (1 - f);
      b.m.position.set(x, h, -y);
      if (f >= 1) { this._impact(b); app.scene.remove(b.m); this.balls.splice(i, 1); }
    }
    this._pens(dt);
    this._settlers(dt);
    // the menu and ring follow the selection
    if (this.sel) {
      const e = this.sel, src = e.a || e.g || null;
      const x = src ? src.x : e.x, y = src ? src.y : e.y, h = src ? src.h : e.h - 1;
      this.ring.visible = true; this.ring.position.set(x, h + 0.08, -y);
      const k = e.type === 'field' ? 6 : e.type === 'pen' || e.type === 'settle' ? 4 : e.type === 'garrison' ? 3 : e.type === 'gun' ? 2 : 1; this.ring.scale.setScalar(k * (1 + Math.sin(this.t * 4) * 0.05));
      const [sx, sy, z] = this._screen(x, y, h + (e.type === 'animal' ? 1.2 : 2.2));
      const mw = this.menu.offsetWidth || 220, mh = this.menu.offsetHeight || 160;
      this.menu.style.left = `${clamp(sx - 26, 8, window.innerWidth - mw - 8)}px`;
      this.menu.style.top = `${clamp(sy - mh - 18, 8, window.innerHeight - mh - 8)}px`;
      this.menu.style.visibility = z > 1 ? 'hidden' : 'visible';
      this._rt = (this._rt || 0) + dt; if (this._rt > 1) { this._rt = 0; if (e.type === 'gun' || e.type === 'pen' || e.type === 'garrison' || e.type === 'settle') this.refresh(); }
      if (e.a && !this.people.agents.includes(e.a)) this.deselect();
    }
    this.fx.update(dt, (app.renderer.domElement.height || 800) / Math.max(1, app.cam.viewH), app.climate?.light ?? 1);
    // garrison badges over posts that hold soldiers
    {
      const held = W.garrisons.filter((G) => G.inside?.length);
      while (this.chips.children.length < held.length) { const d = document.createElement('div'); d.className = 'gchip'; this.chips.appendChild(d); }
      [...this.chips.children].forEach((d, i) => {
        const G = held[i]; if (!G) { d.hidden = true; return; }
        const [sx, sy, z] = this._screen(G.x, G.y, G.h + 3.5);
        d.hidden = z > 1; d.style.transform = `translate(${sx.toFixed(0)}px, ${sy.toFixed(0)}px) translate(-50%, -100%)`;
        const txt = `${G.name} · ${G.inside.length}/${G.cap}`; if (d.textContent !== txt) d.textContent = txt;
      });
    }
    // live layer for the minimap, rebuilt a few times a second
    this._mt -= dt; if (this._mt <= 0) { this._mt = 0.35; this.mini = this._miniLayer(); }
    if (this.hudDirty) {
      this.hudDirty = false;
      const bits = [];
      if (this.mount) bits.push('Riding');
      if (this.carry) bits.push(`Carrying a ${(LABEL[this.carry.s.kind] || '').toLowerCase()}`);
      const dogs = this.people.agents.filter((a) => a.friend && a.ctrl?.mode === 'follow').length; if (dogs) bits.push(`Dog at heel`);
      if (this.hurtT > 0) bits.push('Hurt');
      for (const [k, l] of [['meat', 'Boar meat'], ['pelt', 'Wolf pelt']]) if (this.inv[k]) bits.push(`${l} ${this.inv[k]}`);
      if (this.inv.eggs) bits.push(`Eggs ${this.inv.eggs}`); if (this.inv.milk) bits.push(`Milk ${this.inv.milk}`); if (this.inv.wool) bits.push(`Wool ${this.inv.wool}`);
      this.hud.innerHTML = bits.map((b) => `<span>${esc(b)}</span>`).join('');
    }
  }
}
