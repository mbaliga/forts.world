// Walk and fly: the perspective views beside the isometric map view.
//   walk: a person at eye height (1.7 m) on the walkable ground, using the same navigation and collision as the iso
//         traveller (stairs and ramps included). WASD/arrows, mouse-look with pointer lock, or a touch stick and drag.
//   fly:  a bird 20 to 300 m above the terrain with gentle banking; Space/C (or the touch slider) climb and sink;
//         L (or Walk) lands where you are.
// Arrivals are animated like Google Maps' Street View drop: from about 120 m up looking down, down to eye level over
// 1.6 s. Any key, click or tap skips it. See docs/game/drop-in.md.
import * as THREE from 'three';
import { DEG, clamp } from '../core/geom.js';
import { headingToAz, azToHeading } from './dropin.js';

export const EYE = 1.7;
const DROP_H = 120, DROP_T = 1.6;
const FLY_MIN = 20, FLY_MAX = 300;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (a, b, t) => { const k = clamp((t - a) / (b - a), 0, 1); return k * k * (3 - 2 * k); };
const wrap = (d) => { while (d > 180) d -= 360; while (d < -180) d += 360; return d; };

export class Explorer {
  constructor(app) {
    this.app = app;
    this.mode = 'iso';
    this.cam = new THREE.PerspectiveCamera(70, 1, 0.25, 6000);
    this.cam.rotation.order = 'YXZ';
    // the rig carries the camera (and, in XR, the controllers); outside XR it stays at the origin
    this.rig = new THREE.Group(); this.rig.name = 'xr-rig'; this.rig.add(this.cam);
    app.scene.add(this.rig);
    this.hd = 0; this.pitch = -4; this.roll = 0;   // heading (deg clockwise from north), pitch and roll (deg)
    this.pos = new THREE.Vector3();                // plan x, y, height of the eye (fly)
    this.vel = new THREE.Vector3();
    this.eyeH = 0; this.turnRate = 0;
    this.anim = null;
    this.stick = null;        // touch stick {x right, y forward} in -1..1
    this.alt = 0;             // touch altitude slider, -1..1
    this.vkeys = new Set();   // climb / sink keys
    this.look = null; this.stickPtr = null;
    this._lastAz = null;
    this.xr = null;           // set by XRSupport
    this._ui();
    this._keys();
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === app.canvas; this._cross(); });
  }

  get active() { return this.mode !== 'iso'; }
  get flying() { return this.mode === 'fly' && !this.anim?.toWalk; }

  // ------------------------------------------------------------------ switching
  // mode 'walk' | 'fly' | 'iso'. at: {x, y, h?} plan position to arrive at; heading in degrees; instant skips the drop
  set(mode, { at = null, heading = null, instant = false, quiet = false } = {}) {
    const app = this.app, T = app.traveller, W = app.world;
    if (!W || !['iso', 'walk', 'fly'].includes(mode)) return;
    if (app.renderer.xr.isPresenting && mode !== 'walk') return;
    const from = this.mode;
    if (heading != null) this.hd = heading;
    else if (from === 'iso') this.hd = azToHeading(app.cam.az);
    const told = at ? this._placeTraveller(at.x, at.y, at.h, quiet) : false;
    const [x, y, h] = T.pos;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.anim = null; this.vel.set(0, 0, 0); this.stick = null; this.alt = 0;
    if (mode === 'iso') {
      if (document.pointerLockElement) document.exitPointerLock?.();
      this.mode = 'iso';
      app.cam.override = null;
      app.cam.goalAz = app.cam.az = headingToAz(this.hd);
      app.cam.goalViewH = app.cam.viewH = Math.max(app.cam.minViewH, Math.min(app.cam.maxViewH, app.levelDef?.view?.zoom ?? 70));
      app.cam.jumpTo(from === 'fly' ? this.pos.x : x, from === 'fly' ? this.pos.y : y, h);
      app.freeCam = from === 'fly' ? 4 : 0;
      T.root.visible = true;
      app.scene.fog && app._isoFog && Object.assign(app.scene.fog, app._isoFog);
      this._ui(); return;
    }
    app.cam.override = this.cam;
    app.path = null; app.pathLine.visible = false;
    this.mode = mode;
    const g = (px, py) => this._floorAt(px, py);
    if (mode === 'walk') {
      if (from === 'fly' && !at) { this.land({ instant: instant || reduce }); this._ui(); return; }
      this.eyeH = h + EYE; this.pitch = -4; this.roll = 0;
      if (!(instant || reduce)) {
        // the drop: from ~120 m up, looking straight down at the arrival point, to eye level
        this.anim = { t: 0, dur: DROP_T, from: { x, y, h: h + DROP_H, pitch: -89, fov: 62 }, to: { x, y, h: h + EYE, pitch: -4, fov: 70 } };
      }
    } else {
      // take off: from the iso view or from eye level, rise to a bird's height and look out ahead
      const fx = Math.sin(this.hd * DEG), fy = Math.cos(this.hd * DEG);
      const sx = at ? x : from === 'walk' ? x : x - fx * 70, sy = at ? y : from === 'walk' ? y : y - fy * 70;
      const alt = 60;
      this.pos.set(sx, sy, Math.max(g(sx, sy) + alt, h + alt));
      this.pitch = -18; this.roll = 0;
      if (!(instant || reduce)) {
        const start = from === 'walk' ? { x, y, h: h + EYE, pitch: this.pitch < -10 ? this.pitch : -4, fov: 70 } : { x: sx, y: sy, h: this.pos.z + DROP_H, pitch: -80, fov: 62 };
        this.anim = { t: 0, dur: from === 'walk' ? 1.2 : DROP_T, from: start, to: { x: sx, y: sy, h: this.pos.z, pitch: -18, fov: 70 } };
      }
    }
    T.root.visible = mode !== 'walk';
    this._ui();
    if (!quiet && !told && !this._hinted?.[mode]) {
      (this._hinted ||= {})[mode] = true;
      const touch = matchMedia?.('(pointer: coarse)').matches;
      app.ui.toast(mode === 'walk'
        ? (touch ? 'Left thumb to walk, drag to look, tap to go there' : 'WASD to walk, click to look with the mouse (Esc to release)')
        : (touch ? 'Left thumb to fly, slider to climb, Walk to land' : 'WASD to fly, Space and C to climb and sink, L to land'));
    }
  }
  // land where the bird is: the nearest walkable ground below, then the drop to eye level
  land({ instant = false } = {}) {
    const app = this.app, T = app.traveller;
    const p = this.findWalkable(this.pos.x, this.pos.y);
    if (!p) { app.ui.toast('Nowhere to land here'); this.mode = 'fly'; this._ui(); return; }
    T.place(p.x, p.y, p.h);
    this.mode = 'walk'; app.cam.override = this.cam;
    this.eyeH = p.h + EYE; this.roll = 0;
    T.root.visible = false;
    if (!instant) this.anim = { t: 0, dur: 1.3, from: { x: this.pos.x, y: this.pos.y, h: this.pos.z, pitch: this.pitch, fov: 70 }, to: { x: p.x, y: p.y, h: p.h + EYE, pitch: -4, fov: 70 } };
    else this.pitch = -4;
    this._ui();
  }
  skip() { if (this.anim) this.anim.t = this.anim.dur; }

  // the walkable point nearest a plan position: the cell itself if it is open ground, else the closest open cell
  findWalkable(x, y, h = null) {
    const W = this.app.world, nav = W.nav, b = W.bounds;
    const cx = clamp(x, b[0] + 1, b[2] - 1), cy = clamp(y, b[1] + 1, b[3] - 1);
    const g = h ?? W.ground(cx, cy);
    let node = nav.nearest(cx, cy, g, 0, 2.5);
    if (node < 0) for (const r of [2, 6, 16, 40, 100]) { node = nav.nearest(cx, cy, g, r, h == null ? 1e6 : 6); if (node >= 0) break; }
    if (node < 0) node = nav.nearest(cx, cy, g, 260, 1e6);
    if (node < 0) return null;
    const [nx, ny] = nav.nodeXY(node);
    return { x: nx, y: ny, h: nav.H[node], moved: Math.hypot(nx - x, ny - y) };
  }
  _placeTraveller(x, y, h, quiet) {
    const app = this.app, W = app.world, b = W.bounds;
    const outside = x < b[0] || x > b[2] || y < b[1] || y > b[3];
    const p = this.findWalkable(x, y, h);
    if (!p) return false;
    app.traveller.place(p.x, p.y, p.h);
    const k = app.levelDef?.units?.planScale || 1;
    this.arrival = { x, y, placed: p, outside };
    const tell = !quiet && (outside || p.moved * k > 3);
    if (tell) app.ui.toast(outside ? `That point is outside this scene; you start at the nearest walkable ground, ${Math.round(p.moved * k)} m away` : `That point is inside a solid mass or off the walkable ground; moved ${Math.round(p.moved * k)} m to the nearest walkable ground`);
    return tell;
  }
  _floorAt(x, y) {
    // the bird's floor: terrain or the top of whatever stands there
    const W = this.app.world, nav = W.nav;
    const g = W.ground(x, y);
    const c = nav.cellOf(x, y);
    const top = c >= 0 && nav.top ? nav.top[c] : -Infinity;
    return Math.max(g, Number.isFinite(top) ? top - 12 : g);
  }

  // ------------------------------------------------------------------ frame
  // after the app has moved the traveller: place the camera, keep the iso camera's target, angle and span in step so
  // shadows, sound, clouds and the minimap follow the view
  update(dt) {
    const app = this.app;
    if (!this.active || !app.world) return;
    if (app.renderer.xr.isPresenting) { this.xr?.update(dt); this._syncIso(); return; }
    const c = this.cam, T = app.traveller;
    // Q/E (and the rotate buttons, hidden here) turn by 45 degrees
    if (this._lastAz != null && app.cam.goalAz !== this._lastAz) { this.hd = wrap(this.hd - (app.cam.goalAz - this._lastAz) / 2); }
    if (this.anim) {
      const A = this.anim; A.t += dt;
      const t = Math.min(1, A.t / A.dur), e = ease(t);
      const x = A.from.x + (A.to.x - A.from.x) * e, y = A.from.y + (A.to.y - A.from.y) * e;
      // fall fast, then settle: the height eases in log space so the last metres take their time
      const lh = Math.log(Math.max(0.5, A.from.h - A.to.h + 1)) * (1 - e);
      const h = A.to.h + Math.exp(lh) - 1;
      this.pitch = A.from.pitch + (A.to.pitch - A.from.pitch) * smooth(0.25, 1, t);
      c.fov = A.from.fov + (A.to.fov - A.from.fov) * e;
      c.position.set(x, h, -y);
      if (this.mode === 'fly') this.pos.set(x, y, h);
      if (t >= 1) { this.anim = null; if (this.mode === 'walk') this.eyeH = T.pos[2] + EYE; }
    } else if (this.mode === 'walk') {
      const want = T.pos[2] + EYE;
      this.eyeH += (want - this.eyeH) * (1 - Math.exp(-dt * 14));
      if (Math.abs(want - this.eyeH) > 6) this.eyeH = want;
      c.position.set(T.pos[0], this.eyeH, -T.pos[1]);
      c.fov = 70;
      this.roll += (0 - this.roll) * (1 - Math.exp(-dt * 6));
    } else this._fly(dt);
    this.turnRate *= Math.exp(-dt * 5);
    c.rotation.set(this.pitch * DEG, -this.hd * DEG, this.roll * DEG);
    c.near = this.mode === 'fly' ? 1 : 0.25; c.far = this.mode === 'fly' ? 9000 : 6000;
    c.aspect = app.cam.aspect; c.updateProjectionMatrix();
    this.rig.position.set(0, 0, 0); this.rig.quaternion.identity();
    this.rig.updateMatrixWorld(true);
    this._syncIso();
  }
  _fly(dt) {
    const app = this.app, k = app.keys, W = app.world;
    const fwd = (k.has('w') || k.has('arrowup') ? 1 : 0) - (k.has('s') || k.has('arrowdown') ? 1 : 0) + (this.stick?.y || 0);
    const side = (k.has('d') || k.has('arrowright') ? 1 : 0) - (k.has('a') || k.has('arrowleft') ? 1 : 0) + (this.stick?.x || 0);
    const up = (this.vkeys.has(' ') ? 1 : 0) - (this.vkeys.has('c') ? 1 : 0) + this.alt;
    const sp = (app.run ? 55 : 22), h = this.hd * DEG, p = this.pitch * DEG;
    // forward follows the gaze (look down and fly to dive); strafing stays level
    const want = new THREE.Vector3(
      Math.sin(h) * Math.cos(p) * fwd + Math.cos(h) * side,
      Math.cos(h) * Math.cos(p) * fwd - Math.sin(h) * side,
      Math.sin(p) * fwd * 0.8 + up * 0.6).multiplyScalar(sp);
    this.vel.lerp(want, 1 - Math.exp(-dt * 2.6));
    const P = this.pos; P.addScaledVector(this.vel, dt);
    const b = W.bounds, m = 80; P.x = clamp(P.x, b[0] - m, b[2] + m); P.y = clamp(P.y, b[1] - m, b[3] + m);
    // a soft floor and ceiling: pushed back gently rather than stopped dead
    const g = this._floorAt(P.x, P.y), lo = g + FLY_MIN, hi = W.ground(P.x, P.y) + FLY_MAX;
    if (P.z < lo) { P.z += (lo - P.z) * (1 - Math.exp(-dt * 5)); if (this.vel.z < 0) this.vel.z *= Math.exp(-dt * 8); if (P.z < g + 4) P.z = g + 4; }
    if (P.z > hi) { P.z += (hi - P.z) * (1 - Math.exp(-dt * 3)); if (this.vel.z > 0) this.vel.z *= Math.exp(-dt * 8); }
    // bank into turns, and a little into side-slips
    const bank = clamp(-this.turnRate * 0.35 - side * 9, -28, 28);
    this.roll += (bank - this.roll) * (1 - Math.exp(-dt * 3.5));
    this.cam.position.set(P.x, P.z, -P.y);
    this.cam.fov = 70 + Math.min(8, this.vel.length() / 8);
  }
  _syncIso() {
    // what the rest of the game reads from the iso camera
    const app = this.app, ic = app.cam, c = this.cam;
    const wp = app.renderer.xr.isPresenting && this.xr ? this.xr._head() : c.getWorldPosition(new THREE.Vector3());
    const hd = app.renderer.xr.isPresenting ? this.xrHeading() : this.hd;
    ic.az = ic.goalAz = headingToAz(hd); this._lastAz = ic.goalAz;
    const fx = Math.sin(hd * DEG), fy = Math.cos(hd * DEG);
    const g = app.world.ground(wp.x, -wp.z), alt = Math.max(2, wp.y - g);
    const ahead = Math.min(160, 30 + alt * 0.8);
    ic.target.set(wp.x + fx * ahead, g, wp.z - fy * ahead); ic.goal.copy(ic.target);
    // the span drives shadow extent, ground-cover and cloud fades and contour spacing; true-scale figures here
    ic.viewH = ic.goalViewH = clamp(110 + alt * 1.6, 110, 560);
    if (app.scene.fog) {
      const L = app.levelDef?.light || {};
      app.scene.fog.near = 380 + (L.fogNear ?? 120) + alt * 1.5; app.scene.fog.far = app.scene.fog.near + (L.fogFar ?? 1500) * 1.9;
    }
  }
  xrHeading() { return this.xr ? this.xr.heading() : this.hd; }

  // ------------------------------------------------------------------ input
  // the app's canvas handlers ask here first; true means handled
  pointer(type, e) {
    if (!this.active || this.app.renderer.xr.isPresenting) return false;
    const el = this.app.canvas, w = el.clientWidth || innerWidth;
    if (type === 'down' && this.anim) { this.skip(); this._skipped = e.pointerId; return true; }
    if (this._skipped === e.pointerId) { if (type === 'up' || type === 'cancel') this._skipped = null; return true; }
    const touch = e.pointerType === 'touch' || e.pointerType === 'pen';
    if (type === 'down') {
      if (touch && e.clientX < w * 0.42 && this.stickPtr == null) {
        this.stickPtr = { id: e.pointerId, x: e.clientX, y: e.clientY };
        this.stick = { x: 0, y: 0 }; this._stickUI(e.clientX, e.clientY, 0, 0);
        return true;
      }
      if (this.look == null) this.look = { id: e.pointerId, x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t: performance.now(), moved: false, touch, btn: e.button };
      return true;
    }
    if (type === 'move') {
      if (this.locked && !touch) { this._turn(e.movementX * 0.14, -e.movementY * 0.14); return true; }
      if (this.stickPtr?.id === e.pointerId) {
        let dx = e.clientX - this.stickPtr.x, dy = e.clientY - this.stickPtr.y; const l = Math.hypot(dx, dy), R = 48;
        if (l > R) { dx *= R / l; dy *= R / l; }
        this.stick = { x: dx / R, y: -dy / R }; this._stickUI(this.stickPtr.x, this.stickPtr.y, dx, dy);
        return true;
      }
      const L = this.look; if (!L || L.id !== e.pointerId) return true;
      const dx = e.clientX - L.x, dy = e.clientY - L.y; L.x = e.clientX; L.y = e.clientY;
      if (!L.moved && Math.hypot(e.clientX - L.x0, e.clientY - L.y0) > 6) L.moved = true;
      // drag the view like a photograph: drag left to turn right
      if (L.moved) { const k = 70 / Math.max(300, el.clientHeight); this._turn(-dx * k, dy * k); }
      return true;
    }
    if (type === 'up' || type === 'cancel') {
      if (this.stickPtr?.id === e.pointerId) { this.stickPtr = null; this.stick = null; this._stickUI(); return true; }
      const L = this.look; if (!L || L.id !== e.pointerId) return true;
      this.look = null;
      if (type === 'up' && !L.moved && L.btn === 0 && performance.now() - L.t < 600) {
        if (!L.touch && !this.locked && el.requestPointerLock) { try { const r = el.requestPointerLock(); r?.catch?.(() => {}); } catch { /* no pointer lock */ } }
        else if (this.mode === 'walk') {
          // walk to the point: the tap, or the crosshair while the mouse is locked
          const r = el.getBoundingClientRect();
          const x = this.locked ? r.left + r.width / 2 : e.clientX, y = this.locked ? r.top + r.height / 2 : e.clientY;
          this.app._clickAt(x, y, e.shiftKey);
        }
      }
      return true;
    }
    if (type === 'wheel') { if (this.mode === 'fly') this.vel.z -= e.deltaY * 0.05; return true; }
    return false;
  }
  _turn(dh, dp) {
    this.hd = ((this.hd + dh) % 360 + 360) % 360;
    this.pitch = clamp(this.pitch + dp, -85, 85);
    this.turnRate += dh * 4;
  }
  _keys() {
    window.addEventListener('keydown', (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (this.anim && this.active && !['shift', 'v'].includes(k)) this.skip();
      if (k === 'i') this.set('iso');
      else if (k === 'p') this.set('walk');
      else if (k === 'b') this.set('fly');
      else if (k === 'l' && this.mode === 'fly') this.land();
      if (this.mode === 'fly' && (k === ' ' || k === 'c')) { this.vkeys.add(k); e.preventDefault(); }
    });
    window.addEventListener('keyup', (e) => this.vkeys.delete(e.key.toLowerCase()));
    window.addEventListener('blur', () => { this.vkeys.clear(); this.stick = null; this.alt = 0; });
  }

  // ------------------------------------------------------------------ interface
  _ui() {
    const el = document.querySelector('#travelmode');
    document.body.dataset.travel = this.mode;
    if (el && !this._bound) {
      this._bound = true;
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-travel]'); if (!b) return;
        const m = b.dataset.travel;
        if (m === 'vr') { this.xr?.enter(); return; }
        if (m === 'land') { this.land(); return; }
        if (m === this.mode && !this.anim) return;
        this.set(m);
      });
    }
    if (el) {
      for (const b of el.querySelectorAll('[data-travel]')) b.setAttribute('aria-pressed', String(b.dataset.travel === this.mode));
      const walk = el.querySelector('[data-travel="walk"]');
      if (walk) walk.title = this.mode === 'fly' ? 'Land here and walk (L)' : 'Walk at eye height (P)';
    }
    // the touch altitude slider while flying
    let s = document.querySelector('#fp-alt');
    const coarse = !!window.matchMedia?.('(pointer: coarse)').matches;
    if (this.mode === 'fly' && coarse && !s) {
      s = document.createElement('div'); s.id = 'fp-alt'; s.innerHTML = '<span style="top:8px">UP</span><i></i><span style="bottom:8px">DOWN</span>';
      document.body.appendChild(s);
      const knob = s.querySelector('i');
      const set = (e) => { const r = s.getBoundingClientRect(); const v = clamp(((r.top + r.height / 2) - e.clientY) / (r.height / 2 - 18), -1, 1); this.alt = v; knob.style.top = `${(r.height / 2 - 18) * (1 - v)}px`; };
      s.addEventListener('pointerdown', (e) => { s.setPointerCapture(e.pointerId); set(e); e.stopPropagation(); });
      s.addEventListener('pointermove', (e) => { if (s.hasPointerCapture(e.pointerId)) set(e); });
      const end = () => { this.alt = 0; knob.style.top = ''; };
      s.addEventListener('pointerup', end); s.addEventListener('pointercancel', end);
    }
    if (s) s.hidden = this.mode !== 'fly' || !coarse;
    this._cross();
  }
  _cross() {
    let x = document.querySelector('#fp-cross');
    if (!x) { x = document.createElement('div'); x.id = 'fp-cross'; x.hidden = true; document.body.appendChild(x); }
    x.hidden = !(this.locked && this.active);
  }
  _stickUI(cx, cy, dx = 0, dy = 0) {
    let s = this._stickEl;
    if (cx == null) { if (s) s.hidden = true; return; }
    if (!s) { s = this._stickEl = document.createElement('div'); s.className = 'fp-stick'; s.innerHTML = '<i></i>'; document.body.appendChild(s); }
    s.hidden = false; s.style.left = `${cx}px`; s.style.top = `${cy}px`;
    s.firstChild.style.transform = `translate(${dx}px, ${dy}px)`;
  }
}
