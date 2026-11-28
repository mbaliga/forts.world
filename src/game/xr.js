// WebXR (immersive-vr): walk the fort in a headset.
//   - the camera rig stands at the walker's feet ('local-floor', so eye height comes from the headset);
//   - left thumbstick: smooth locomotion on the walkable ground (the same navigation as the traveller);
//   - right thumbstick left/right: snap turn by 30 degrees; forward: aim a teleport arc, release to jump;
//   - trigger: aim and teleport with a parabolic arc onto walkable ground (green when it can land, red when not);
//   - grip (squeeze): switch between the Real and Model views.
// The post-processing chain is bypassed in XR: the scene is drawn directly (ViewModes.renderXR), with Real's
// physically based materials and sky light, or Model's massing and contours (no screen-space edges or occlusion).
import * as THREE from 'three';
import { DEG } from '../core/geom.js';

const SNAP = 30, ARC_V = 9, G = 9.81, ARC_N = 48;

export class XRSupport {
  constructor(app, explorer) {
    this.app = app; this.ex = explorer; explorer.xr = this;
    this.supported = false; this.session = null;
    const r = app.renderer;
    r.xr.enabled = true;
    r.xr.setReferenceSpaceType('local-floor');
    this.ctrl = [0, 1].map((i) => {
      const c = r.xr.getController(i);
      c.userData.i = i;
      c.addEventListener('connected', (e) => { c.userData.src = e.data; c.userData.hand = e.data?.handedness; c.visible = true; });
      c.addEventListener('disconnected', () => { c.userData.src = null; c.visible = false; });
      c.addEventListener('selectstart', () => { this.aim = c; });
      c.addEventListener('selectend', () => { if (this.aim === c) this._teleport(); this.aim = null; });
      c.addEventListener('squeezestart', () => this.app.viewModes.set(this.app.viewModes.mode === 'real' ? 'model' : 'real', { instant: true }));
      // a short pointer ray so the hands can be seen
      const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -0.25)]), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
      ray.userData.vmKeep = true; c.add(ray);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), new THREE.MeshBasicMaterial({ color: 0xe9edee }));
      knob.userData.vmKeep = true; c.add(knob);
      explorer.rig.add(c);
      return c;
    });
    // the teleport arc and its landing ring
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARC_N * 3), 3));
    this.arc = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x4cc3b7, transparent: true, opacity: 0.9, depthTest: false }));
    this.arc.frustumCulled = false; this.arc.renderOrder = 20; this.arc.visible = false; this.arc.userData.vmKeep = true;
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.4, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x4cc3b7, transparent: true, opacity: 0.85, depthTest: false, side: THREE.DoubleSide }));
    this.ring.renderOrder = 21; this.ring.visible = false; this.ring.userData.vmKeep = true;
    app.scene.add(this.arc, this.ring);
    this.snapReady = true; this.target = null;
    r.xr.addEventListener('sessionstart', () => this._start());
    r.xr.addEventListener('sessionend', () => this._end());
    this.probe();
  }
  async probe() {
    try { this.supported = !!(navigator.xr && await navigator.xr.isSessionSupported('immersive-vr')); } catch { this.supported = false; }
    this._button();
    return this.supported;
  }
  _button() {
    const el = document.querySelector('#travelmode'); if (!el) return;
    let b = el.querySelector('[data-travel="vr"]');
    if (this.supported && !b) { b = document.createElement('button'); b.type = 'button'; b.dataset.travel = 'vr'; b.title = 'Walk in a VR headset'; b.textContent = 'VR'; b.setAttribute('aria-pressed', 'false'); el.appendChild(b); }
    if (b) { b.hidden = !this.supported; b.setAttribute('aria-pressed', String(!!this.session)); b.textContent = this.session ? 'Exit VR' : 'VR'; }
  }
  async enter() {
    const r = this.app.renderer;
    if (this.session) { await this.session.end(); return; }
    if (!navigator.xr) return;
    try {
      const s = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] });
      this.session = s;
      s.addEventListener('end', () => { this.session = null; this._button(); });
      await r.xr.setSession(s);
    } catch (e) { this.session = null; this.app.ui.toast(`Could not start VR: ${e.message}`); console.warn('[xr]', e); }
    this._button();
  }
  _start() {
    const app = this.app, ex = this.ex;
    if (ex.mode !== 'walk') ex.set('walk', { instant: true, quiet: true });
    ex.anim = null;
    this.yaw = -ex.hd * DEG;
    ex.cam.position.set(0, 0, 0); ex.cam.rotation.set(0, 0, 0);
    this._placeRig();
    app.traveller.root.visible = false;
    this._tm = { tm: app.renderer.toneMapping, exp: app.renderer.toneMappingExposure };
    document.body.dataset.xr = '1';
    this._button();
  }
  _end() {
    const app = this.app, ex = this.ex;
    ex.rig.position.set(0, 0, 0); ex.rig.quaternion.identity(); ex.rig.updateMatrixWorld(true);
    ex.cam.rotation.order = 'YXZ';
    ex.hd = ((-this.yaw / DEG) % 360 + 360) % 360; ex.pitch = -4;
    if (this._tm) { app.renderer.toneMapping = this._tm.tm; app.renderer.toneMappingExposure = this._tm.exp; }
    this.arc.visible = this.ring.visible = false;
    delete document.body.dataset.xr;
    app._resize();
    this._button();
  }
  _placeRig() {
    const T = this.app.traveller, rig = this.ex.rig;
    rig.position.set(T.pos[0], T.pos[2], -T.pos[1]);
    rig.rotation.set(0, this.yaw, 0);
    rig.updateMatrixWorld(true);
  }
  // the head's pose in the world: the rig's transform times the headset's pose in the reference space. (The XR camera
  // has no parent, so its own getWorldPosition would drop the rig.)
  _headM() { const rig = this.ex.rig; rig.updateMatrixWorld(true); return new THREE.Matrix4().multiplyMatrices(rig.matrixWorld, this.app.renderer.xr.getCamera().matrix); }
  _head() { return new THREE.Vector3().setFromMatrixPosition(this._headM()); }
  _headDir() { const e = this._headM().elements, d = new THREE.Vector3(-e[8], 0, -e[10]); if (d.lengthSq() < 1e-6) d.set(0, 0, -1); return d.normalize(); }
  heading() { const d = this._headDir(); return ((Math.atan2(d.x, -d.z) * 180 / Math.PI) + 360) % 360; }

  // ------------------------------------------------------------------ frame (called by Explorer.update in XR)
  update(dt) {
    const app = this.app, T = app.traveller;
    let move = null, turn = 0, aimStick = null;
    for (const c of this.ctrl) {
      const src = c.userData.src, gp = src?.gamepad; if (!gp) continue;
      // xr-standard: axes 2,3 are the thumbstick (0,1 the touchpad on older controllers)
      const ax = gp.axes.length >= 4 ? gp.axes[2] : gp.axes[0] || 0, ay = gp.axes.length >= 4 ? gp.axes[3] : gp.axes[1] || 0;
      if (src.handedness === 'right') { turn = ax; if (ay < -0.6) aimStick = c; }
      else move = { x: ax, y: ay };
    }
    // smooth locomotion, relative to where the head looks
    if (move && Math.hypot(move.x, move.y) > 0.15) {
      const f = this._headDir(), sp = 2.4 * Math.min(1, Math.hypot(move.x, move.y));
      // plan coords: render (x, -z)
      const fx = f.x, fy = -f.z, rx = -f.z, ry = -f.x;
      let mx = fx * -move.y + rx * move.x, my = fy * -move.y + ry * move.x; const l = Math.hypot(mx, my) || 1; mx /= l; my /= l;
      app.stepTraveller(mx, my, sp * dt);
    }
    // snap turn about the head, with hysteresis
    if (Math.abs(turn) > 0.7 && this.snapReady) { this._snap(turn > 0 ? -SNAP : SNAP); this.snapReady = false; }
    if (Math.abs(turn) < 0.3) this.snapReady = true;
    // teleport aim: the trigger, or the right stick pushed forward (released to jump)
    const aimer = this.aim || aimStick;
    if (aimer) this._aim(aimer); else { if (this._stickAim && this.target) this._teleport(); this.arc.visible = this.ring.visible = false; }
    this._stickAim = !!aimStick && !this.aim;
    this._placeRig();
  }
  _snap(deg) {
    const head = this._head(), rig = this.ex.rig;
    this.yaw += deg * DEG;
    rig.rotation.set(0, this.yaw, 0); rig.updateMatrixWorld(true);
    // keep the head where it was: shift the rig (and the walker) by the head's swing
    const head2 = this._head(); const dx = head.x - head2.x, dz = head.z - head2.z;
    const T = this.app.traveller; T.place(T.pos[0] + dx, T.pos[1] - dz, T.pos[2]);
  }
  // a parabola from the controller, stopped where it meets the ground or a solid top; it can land on walkable cells only
  _aim(c) {
    const nav = this.app.world.nav;
    const o = new THREE.Vector3(), q = new THREE.Quaternion(); c.getWorldPosition(o); c.getWorldQuaternion(q);
    const d = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
    const v = d.multiplyScalar(ARC_V), pos = this.arc.geometry.attributes.position, a = pos.array;
    const topAt = (x, z) => { const k = nav.cellOf(x, -z); return k < 0 ? -Infinity : nav.top[k]; };
    let hit = null, n = 0, dtS = 0.06;
    let p = o.clone();
    for (let i = 0; i < ARC_N; i++) {
      a[i * 3] = p.x; a[i * 3 + 1] = p.y; a[i * 3 + 2] = p.z; n = i + 1;
      const t = (i + 1) * dtS;
      const np = new THREE.Vector3(o.x + v.x * t, o.y + v.y * t - 0.5 * G * t * t, o.z + v.z * t);
      if (np.y <= topAt(np.x, np.z)) {
        // refine where the segment crosses the surface
        let lo = 0, hi = 1;
        for (let k = 0; k < 10; k++) { const m = (lo + hi) / 2; const mp = p.clone().lerp(np, m); if (mp.y <= topAt(mp.x, mp.z)) hi = m; else lo = m; }
        hit = p.clone().lerp(np, hi);
        if (n < ARC_N) { a[n * 3] = hit.x; a[n * 3 + 1] = hit.y; a[n * 3 + 2] = hit.z; n++; }
        break;
      }
      p = np;
    }
    for (let i = n; i < ARC_N; i++) { a[i * 3] = a[(n - 1) * 3]; a[i * 3 + 1] = a[(n - 1) * 3 + 1]; a[i * 3 + 2] = a[(n - 1) * 3 + 2]; }
    pos.needsUpdate = true; this.arc.geometry.computeBoundingSphere();
    this.target = null;
    if (hit) {
      const node = nav.nearest(hit.x, -hit.z, hit.y, 1, 0.9);
      if (node >= 0) { const [nx, ny] = nav.nodeXY(node); this.target = [nx, ny, nav.H[node]]; }
    }
    const ok = !!this.target, col = ok ? 0x4cc3b7 : 0xd0533f;
    this.arc.material.color.set(col); this.ring.material.color.set(col);
    this.arc.visible = true;
    this.ring.visible = !!hit;
    if (hit) this.ring.position.set(ok ? this.target[0] : hit.x, (ok ? this.target[2] : hit.y) + 0.03, ok ? -this.target[1] : hit.z);
  }
  _teleport() {
    const t = this.target; this.arc.visible = this.ring.visible = false; this.target = null;
    if (!t) return;
    // land the head over the target, not the rig origin (the player may stand away from the rig centre)
    const head = this._head(), rig = this.ex.rig;
    const ox = head.x - rig.position.x, oz = head.z - rig.position.z;
    this.app.traveller.place(t[0] - ox, t[1] + oz, t[2]);
    this._placeRig();
  }
}
