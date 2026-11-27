// Game runtime: renderer, level loading, input, traveller control, discovery, eras.
import * as THREE from 'three';
import { World } from '../core/world.js';
import '../core/arch.js';
import '../core/props.js';
import '../core/camp.js';
import '../core/ground.js';
import { TAG, TAG_NAMES } from '../core/nav.js';
import { buildScene } from './scene.js';
import { IsoCamera } from './camera.js';
import { Traveller, ClickMarker } from './character.js';
import { People } from './people.js';
import { renderPlan } from '../plan/svg.js';
import { UI } from './ui.js';
import { Play } from './play.js';
import { Climate } from './climate.js';
import { loadFauna } from './fauna3d.js';
import { Prints } from './prints.js';
import { Battle } from './battle.js';
import { Farm } from './farm.js';
import { Chrome } from './chrome.js';
import { Audio } from './audio.js';
import { FortMap } from './fortmap.js';
import { Campaign } from './campaign.js';
import { Atlas } from './atlas.js';
import { ViewModes } from './viewmodes.js';
import { markerStyle, markerGeometry } from './markers.js';
import { clamp, DEG } from '../core/geom.js';

const TAG_LABEL = {
  ground: 'Open ground', rampart: 'Rampart walk', bastion: 'Bastion', gate: 'Gateway', stairs: 'Stairs', court: 'Courtyard',
  citadel: 'Citadel', summit: 'Summit', tunnel: 'Tunnel', bridge: 'Bridge', terrace: 'Terrace', landing: 'Landing', roof: 'Roof',
  boat: 'Boat', shore: 'Shore', road: 'Road', temple: 'Temple plinth', palace: 'Palace',
};

const store = {
  get() { try { return JSON.parse(localStorage.getItem('tenforts:v1') || '{}'); } catch { return {}; } },
  set(v) { try { localStorage.setItem('tenforts:v1', JSON.stringify(v)); } catch { /* storage unavailable */ } },
};

export class App {
  constructor({ canvas, levels, catalog, root }) {
    this.levels = levels; this.catalog = catalog;
    this.canvas = canvas;
    this.state = Object.assign({ found: {}, lens: true }, store.get());
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; r.shadowMap.autoUpdate = false;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer = r;
    this.viewModes = new ViewModes(this);   // Model and Real views and the ink-drop switch between them
    this.scene = new THREE.Scene();
    this.cam = new IsoCamera();
    this.hemi = new THREE.HemisphereLight(0xdfe9ee, 0x9a8a6a, 1.25);
    this.sun = new THREE.DirectionalLight(0xfff1dc, 2.5);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.6;
    this.scene.add(this.hemi, this.sun, this.sun.target);
    this.traveller = new Traveller({});
    this.scene.add(this.traveller.root);
    this.marker = new ClickMarker('#0e7a77');
    this.scene.add(this.marker.mesh);
    this.pathLine = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({ color: 0x0e7a77, dashSize: 0.6, gapSize: 0.45, transparent: true, opacity: 0.8, depthTest: false }));
    this.pathLine.renderOrder = 7; this.pathLine.frustumCulled = false;
    this.scene.add(this.pathLine);
    this.world = null; this.view = null; this.people = null;
    this.path = null; this.pi = 0; this.keys = new Set(); this.run = false;
    this.lastShadow = new THREE.Vector3(1e9, 0, 0); this.lastShadowView = 0;
    this.freeCam = 0; this.t = 0;
    this.ui = new UI(this, root);
    this.play = new Play(this);
    this.climate = new Climate(this);
    this.prints = new Prints(this);
    this.battle = new Battle(this);
    this.farm = new Farm(this);
    this.chrome = new Chrome(this);
    this.audio = new Audio(this);
    this.fortmap = new FortMap(this);
    this.campaign = new Campaign(this);
    this.atlas = new Atlas(this);
    this.viewModes.bindUI(root || document);
    // browsers start sound only after a gesture
    const go = () => { this.audio.start(); window.removeEventListener('pointerdown', go); window.removeEventListener('keydown', go); };
    window.addEventListener('pointerdown', go); window.addEventListener('keydown', go);
    this._bindInput();
    this._resize(); window.addEventListener('resize', () => this._resize());
    this._themeWatch();
    this.clock = new THREE.Clock();
    const loop = () => { this._frame(); this.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
  }

  // ------------------------------------------------------------ theme / sky
  _themeWatch() {
    const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    const apply = () => {
      const attr = document.documentElement.getAttribute('data-theme');
      const dark = attr ? attr === 'dark' : !!(mq && mq.matches);
      this.dark = dark;
      this._applyLight();
    };
    if (mq && mq.addEventListener) mq.addEventListener('change', apply);
    new MutationObserver(apply).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    apply();
  }
  _applyLight() {
    const L = this.levelDef?.light || {};
    const dusk = this.dark;
    const sky = dusk ? (L.duskSky || '#26313a') : (L.sky || '#dfe7e6');
    this.renderer.setClearColor(new THREE.Color(sky));
    // aerial haze: the far side of the view and the sea horizon fade into the sky
    const fogC = new THREE.Color(sky);
    if (!this.scene.fog) this.scene.fog = new THREE.Fog(fogC, 2500, 3900);
    this.scene.fog.color.copy(fogC); this.scene.fog.near = 2480 + (L.fogNear ?? 120); this.scene.fog.far = 2480 + (L.fogFar ?? 1500);
    this.hemi.color.set(dusk ? '#9fb2c4' : (L.hemiSky || '#e3ecef'));
    this.hemi.groundColor.set(dusk ? '#4a4038' : (L.hemiGround || '#9a8a6a'));
    this.hemi.intensity = dusk ? 0.95 : (L.hemi ?? 1.25);
    this.sun.color.set(dusk ? '#ffc58a' : (L.sunColor || '#fff1dc'));
    this.sun.intensity = dusk ? 2.1 : (L.sun ?? 2.6);
    const az = (dusk ? (L.duskAz ?? -160) : (L.sunAz ?? -115)) * DEG, el = (dusk ? 22 : (L.sunEl ?? 52)) * DEG;
    this.sunDir = new THREE.Vector3(Math.cos(az) * Math.cos(el), Math.sin(el), -Math.sin(az) * Math.cos(el)).normalize();
    this.lastShadow.set(1e9, 0, 0);
  }

  // ------------------------------------------------------------ loading
  async load(fortId, eraId, { keepPos = false } = {}) {
    await loadFauna();
    const def = this.levels.find((l) => l.id === fortId) || this.levels[0];
    const era = eraId || def.defaultEra || (def.eras ? def.eras[0].id : 'today');
    const prevPos = keepPos && this.world && this.levelDef?.id === def.id ? this.traveller.pos.slice() : null;
    this.ui.loading(def, era);
    await new Promise((r) => setTimeout(r, 30));
    // Construct the replacement first so an invalid fort does not destroy the current scene.
    const t0 = performance.now();
    const W = new World(def, { era });
    def.build(W);
    W.finish();
    const nextView = buildScene(W);
    await new Promise((r) => setTimeout(r, 0));
    if (this.view) { this.scene.remove(this.view.group); this.view.dispose(); this.view = null; }
    if (this.people) { this.people.dispose(); this.people = null; }
    this.markers?.forEach((m) => this.scene.remove(m)); this.markers = [];
    this.world = W; this.levelDef = def; this.era = W.era;
    this.view = nextView;
    this.scene.add(this.view.group);
    this.people = new People(W, this.scene, this.view);
    this.play.onLoad(W, this.view, this.people);
    this.prints.clear();
    this.battle.onLoad(W);
    this.farm.onLoad(W, this.view, this.people);
    this._makeMarkers();
    this._applyLight();
    const v = def.view || {};
    this.cam.setBounds(def.bounds);
    this.cam.el = v.el ?? 40;
    this.cam.goalAz = this.cam.az = v.az ?? -45;
    this.cam.goalViewH = this.cam.viewH = v.zoom ?? 70;
    this.cam.maxViewH = Math.max(def.bounds[2] - def.bounds[0], def.bounds[3] - def.bounds[1]) * 1.1;
    // place traveller
    let sx, sy, sh;
    if (prevPos) { [sx, sy, sh] = prevPos; }
    else { const s = W.spawnAt || { x: (def.bounds[0] + def.bounds[2]) / 2, y: (def.bounds[1] + def.bounds[3]) / 2 }; sx = s.x; sy = s.y; sh = s.h ?? W.ground(s.x, s.y); }
    const node = W.nav.nearest(sx, sy, sh, 16, 30);
    if (node >= 0) { const [nx, ny] = W.nav.nodeXY(node); sx = prevPos ? sx : nx; sy = prevPos ? sy : ny; sh = W.nav.H[node]; }
    if (prevPos && node >= 0) { const [nx, ny] = W.nav.nodeXY(node); sx = nx; sy = ny; }
    this.traveller.place(sx, sy, sh);
    if (W.spawnAt?.facing != null && !prevPos) { this.traveller.yaw = W.spawnAt.facing * DEG; this.traveller.root.rotation.y = this.traveller.yaw; }
    this.path = null; this.pathLine.visible = false;
    if (!prevPos && v.intro !== false) {
      // start wide, settle on the traveller
      const c = v.introAt || [(def.bounds[0] + def.bounds[2]) / 2, (def.bounds[1] + def.bounds[3]) / 2];
      this.cam.jumpTo(c[0], c[1], 0);
      this.cam.viewH = Math.min(this.cam.maxViewH, v.introZoom ?? (this.cam.maxViewH * 0.7));
      this.cam.lookAt(sx, sy, sh);
    } else this.cam.jumpTo(sx, sy, sh);
    this.freeCam = 0;
    this.lastShadow.set(1e9, 0, 0);
    // minimap plan
    this.plan = renderPlan(W, { mode: 'mini', hachures: true, trees: false });
    this.state.lastFort = def.id; this.state.lastEra = era; this._save();
    this.viewModes.onLoad();
    this.ui.levelReady(def, W, this.plan);
    this.ui.updateProgress();
    console.info(`[forts] ${def.id}/${era} built in ${Math.round(performance.now() - t0)} ms; tris: ${(this.view.group.children.reduce((a, m) => a + (m.geometry?.attributes?.position?.count || 0) / 3 * (m.isInstancedMesh ? m.count : 1), 0) / 1000).toFixed(0)}k`);
  }
  setEra(eraId) { if (this.levelDef && eraId !== this.era) this.load(this.levelDef.id, eraId, { keepPos: true }).catch(error => this.ui.toast(`Could not change period: ${error.message}`)); }

  _makeMarkers() {
    const W = this.world;
    this.markers = [];
    const style = markerStyle(this.levelDef), geo = markerGeometry(style);
    // brass for the lamp and the minaret, warm sandstone for the pavilions; grey stone once found
    const live = style === 'samai' || style === 'minaret' ? 0xd8a02a : style === 'chhatri' ? 0xe0b07a : 0xd9b98a;
    for (const p of W.pois) {
      const found = this.isFound(p);
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, color: found ? 0x9aa6a4 : live, emissive: found ? 0x000000 : 0x4a2c00, emissiveIntensity: 0.6, metalness: style === 'samai' ? 0.6 : 0.1, roughness: 0.45, transparent: true, opacity: found ? 0.6 : 1 }));
      m.scale.setScalar(1.6);
      if (style === 'samai' && !found) { const fl = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 6), new THREE.MeshBasicMaterial({ color: 0xffb040 })); for (let k = 0; k < 5; k++) { const f2 = fl.clone(); const a2 = k / 5 * Math.PI * 2; f2.position.set(Math.cos(a2) * 0.26, 0.26, Math.sin(a2) * 0.26); f2.userData.flame = true; m.add(f2); } }
      m.position.set(p.x, p.h + (p.mh ?? 2.6), -p.y);
      m.userData.poi = p; m.renderOrder = 8;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, p.mh ?? 2.6, 4), new THREE.MeshBasicMaterial({ color: found ? 0x9aa6a4 : 0xd8a02a, transparent: true, opacity: 0.5 }));
      stem.position.y = -(p.mh ?? 2.6) / 2 / 1.6; stem.scale.y = 1 / 1.6; m.add(stem);
      this.scene.add(m); this.markers.push(m);
    }
  }
  _refreshMarker(p) {
    const m = this.markers.find((k) => k.userData.poi === p); if (!m) return;
    m.material.color.set(0x9aa6a4); m.material.emissive.set(0x000000); m.material.opacity = 0.6;
    m.children[0].material.color.set(0x9aa6a4);
    for (const c of m.children.slice()) if (c.userData.flame) m.remove(c);
  }
  poiKey(p) { return p.id || p.title; }
  isFound(p) { return (this.state.found[this.levelDef.id] || []).includes(this.poiKey(p)); }
  _save() { store.set(this.state); }

  // ------------------------------------------------------------ input
  _bindInput() {
    const el = this.canvas;
    const pointers = new Map();
    let down = null, pinch = null;
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      el.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) down = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false, btn: e.button };
      if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), vh: this.cam.goalViewH }; down = null; }
    });
    el.addEventListener('pointermove', (e) => {
      const p = pointers.get(e.pointerId); if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (pinch && pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        this.cam.goalViewH = clamp(pinch.vh * (pinch.d / Math.max(20, d)), this.cam.minViewH, this.cam.maxViewH);
        this.freeCam = 4;
        return;
      }
      if (down) {
        if (!down.moved && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 7) down.moved = true;
        if (down.moved) { this.cam.panPixels(dx, dy, el.clientHeight); this.freeCam = 5; this.ui.showRecenter(true); }
      }
    });
    const up = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = null;
      if (down && !down.moved && down.btn === 0) this._clickAt(e.clientX, e.clientY, e.shiftKey);
      if (pointers.size === 0) down = null;
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', (e) => { pointers.delete(e.pointerId); down = null; pinch = null; });
    el.addEventListener('wheel', (e) => { e.preventDefault(); this.cam.zoom(Math.exp(e.deltaY * 0.0012)); }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      const k = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) { this.keys.add(k); this.path = null; this.pathLine.visible = false; e.preventDefault(); }
      if (k === 'shift') this.run = true;
      if (k === 'q') this.cam.rotate(-1);
      if (k === 'e') this.cam.rotate(1);
      if (k === ' ' || k === 'f') { this.recenter(); e.preventDefault(); }
      if (k === '+' || k === '=') this.cam.zoom(0.8);
      if (k === '-' || k === '_') this.cam.zoom(1.25);
      if (k === 'escape') { if (!this.play.cancel()) this.ui.closeAll(); }
      if (/^[1-4]$/.test(k) && this.levelDef?.eras?.[+k - 1]) this.setEra(this.levelDef.eras[+k - 1].id);
    });
    window.addEventListener('keyup', (e) => { const k = e.key.toLowerCase(); this.keys.delete(k); if (k === 'shift') this.run = false; });
    window.addEventListener('blur', () => { this.keys.clear(); this.run = false; });
  }
  recenter() { this.freeCam = 0; this.ui.showRecenter(false); const [x, y, h] = this.traveller.pos; this.cam.lookAt(x, y, h); }

  _ray(cx, cy) {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
    const rc = new THREE.Raycaster(); rc.setFromCamera(ndc, this.cam.cam);
    return rc.ray;
  }
  _clickAt(cx, cy, run) {
    if (!this.world) return;
    // markers first (screen-space)
    const rect = this.canvas.getBoundingClientRect();
    let best = null, bd = 26;
    for (const m of this.markers) {
      const v = m.position.clone().project(this.cam.cam);
      const sx = (v.x * 0.5 + 0.5) * rect.width + rect.left, sy = (-v.y * 0.5 + 0.5) * rect.height + rect.top;
      const d = Math.hypot(sx - cx, sy - cy);
      if (d < bd) { bd = d; best = m.userData.poi; }
    }
    if (best) { this.walkToPoi(best); return; }
    if (this.battle.click(cx, cy)) return;
    if (this.play.click(cx, cy, run)) return;
    const ray = this._ray(cx, cy);
    const hit = this.world.nav.pickRay([ray.origin.x, ray.origin.y, ray.origin.z], [ray.direction.x, ray.direction.y, ray.direction.z]);
    if (!hit) return;
    this.walkTo(hit[0], hit[1], hit[2], run);
  }
  walkToPoi(p) { this.walkTo(p.x, p.y, p.h, false, p); }
  walkTo(x, y, h, run = false, poi = null) {
    const nav = this.world.nav;
    const goal = nav.nearest(x, y, h, poi ? 12 : 9, poi ? 8 : 60);
    if (goal < 0) { this.marker.show(x, y, h, false); return; }
    const [gx, gy] = nav.nodeXY(goal);
    const path = nav.findPath(this.traveller.pos, [gx, gy, nav.H[goal]]);
    if (!path) { this.marker.show(gx, gy, nav.H[goal], false); this.ui.toast('No way through from here'); return; }
    this.path = path; this.pi = 1; this.runPath = run || path.length > 260;
    this.marker.okColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0e7a77';
    this.marker.show(gx, gy, nav.H[goal], true);
    const pts = path.map((p) => new THREE.Vector3(p[0], p[2] + 0.15, -p[1]));
    this.pathLine.geometry.dispose();
    this.pathLine.geometry = new THREE.BufferGeometry().setFromPoints(pts);
    this.pathLine.computeLineDistances();
    this.pathLine.visible = true;
    if (this.freeCam > 0) { this.freeCam = 0; this.ui.showRecenter(false); }
  }

  // ------------------------------------------------------------ frame
  _resize() {
    const w = this.canvas.clientWidth || window.innerWidth, h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.cam.setAspect(w / Math.max(1, h));
  }
  _frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    this.t += dt;
    if (!this.world) { this.renderer.render(this.scene, this.cam.cam); return; }
    const nav = this.world.nav, T = this.traveller;
    let speed = 0;
    // keyboard movement (camera-relative)
    if (this.keys.size) {
      const { fx, fy, rx, ry } = this.cam.axes();
      let mx = 0, my = 0;
      if (this.keys.has('w') || this.keys.has('arrowup')) { mx += fx; my += fy; }
      if (this.keys.has('s') || this.keys.has('arrowdown')) { mx -= fx; my -= fy; }
      if (this.keys.has('d') || this.keys.has('arrowright')) { mx += rx; my += ry; }
      if (this.keys.has('a') || this.keys.has('arrowleft')) { mx -= rx; my -= ry; }
      const l = Math.hypot(mx, my);
      if (l > 0) {
        mx /= l; my /= l;
        const sp = (this.run ? 9 : 5.5) * this.play.speedMul(), step = sp * dt;
        const [x, y, h] = T.pos;
        let nh = nav.probe(x + mx * step, y + my * step, h);
        if (nh != null) T.place(x + mx * step, y + my * step, nh);
        else if ((nh = nav.probe(x + mx * step, y, h)) != null) T.place(x + mx * step, y, nh);
        else if ((nh = nav.probe(x, y + my * step, h)) != null) T.place(x, y + my * step, nh);
        T.face(mx, my, dt); speed = sp;
        if (this.freeCam > 0) { this.freeCam = 0; this.ui.showRecenter(false); }
      }
    } else if (this.path) {
      const sp = (this.runPath || this.run ? 9 : 5.5) * this.play.speedMul();
      let step = sp * dt;
      let [x, y, h] = T.pos;
      let fdx = 0, fdy = 0;
      while (step > 0 && this.path) {
        const p = this.path[this.pi];
        const dx = p[0] - x, dy = p[1] - y, d = Math.hypot(dx, dy);
        if (d <= step) { x = p[0]; y = p[1]; h = p[2]; step -= d; this.pi++; fdx += dx; fdy += dy; if (this.pi >= this.path.length) { this.path = null; this.pathLine.visible = false; } }
        else { const k = step / d; x += dx * k; y += dy * k; h += (p[2] - h) * k; fdx += dx; fdy += dy; step = 0; }
      }
      T.place(x, y, h); T.face(fdx, fdy, dt); speed = sp;
    }
    T.animate(this.t, dt, this.play.mount ? 0 : speed);
    this.moving = speed > 0;
    this.marker.update(dt);
    if (this.pathLine.visible) this.pathLine.material.dashOffset = -this.t * 1.6;
    // tunnel / interior darkness hint
    const tag = nav.tagAt(T.pos[0], T.pos[1], T.pos[2]);
    this.ui.setDark(tag === TAG.tunnel);
    // camera follow
    if (this.freeCam > 0) this.freeCam -= dt * 0.15;
    if (this.freeCam <= 0) this.cam.lookAt(T.pos[0], T.pos[1], T.pos[2]);
    this.cam.update(dt);
    this.climate.update(dt);
    this.ui.updateClimate?.();
    // shadows follow the view
    const tgt = this.cam.target;
    const span = this.cam.viewH * Math.max(1, this.cam.aspect) * 0.75 + 30;
    if (tgt.distanceTo(this.lastShadow) > span * 0.25 || Math.abs(this.cam.viewH - this.lastShadowView) > this.lastShadowView * 0.2) {
      const s = this.sun.shadow.camera;
      const ext = Math.min(span, 420);
      s.left = -ext; s.right = ext; s.top = ext; s.bottom = -ext; s.near = 10; s.far = 1600;
      this.sun.position.copy(tgt).addScaledVector(this.sunDir, 700);
      this.sun.target.position.copy(tgt);
      this.sun.target.updateMatrixWorld();
      s.updateProjectionMatrix();
      this.renderer.shadowMap.needsUpdate = true;
      this.lastShadow.copy(tgt); this.lastShadowView = this.cam.viewH;
    }
    // world animation
    const pxH = this.renderer.domElement.height || 800;
    this.view?.update(this.t, dt, { px: pxH / Math.max(1, this.cam.viewH), light: this.climate.light ?? 1, viewH: this.cam.viewH, sunDir: this.sunDir, climate: true, camTarget: this.cam.target, night: Math.max(this.climate.state?.night ?? 0, (this.climate.state?.twilight ?? 0) * 0.7, (this.climate.state?.solar ?? 0)) });
    // figures are true scale close up; enlarged when zoomed out so troops stay readable (switchable)
    { const v = this.cam.viewH, k = this.state.trueScale ? 0 : Math.min(1, Math.max(0, (v - 70) / 250)); const vis = 1 + 0.75 * k * k * (3 - 2 * k);
      if (this.people) this.people.vis = vis; if (this.people) this.people.night = this.climate?.state?.night ?? 0; this.traveller.body.scale.setScalar(0.82 * vis); }
    this.people?.update(dt, this.t);
    this.battle.update(dt);
    this.farm.update(dt);
    this.chrome.update(dt);
    this.audio.update(dt);
    this.play.update(dt);
    this.prints.update(dt);
    for (const m of this.markers) { m.rotation.y += dt * 0.6; for (const c of m.children) if (c.userData.flame) c.scale.y = 0.85 + 0.3 * Math.abs(Math.sin(this.t * 9 + c.position.x * 7)); m.position.y = m.userData.poi.h + (m.userData.poi.mh ?? 2.6) + Math.sin(this.t * 2 + m.userData.poi.n) * 0.18; }
    // discovery
    for (const p of this.world.pois) {
      if (this.isFound(p)) continue;
      const d = Math.hypot(p.x - T.pos[0], p.y - T.pos[1]);
      if (d < (p.r ?? 6) && Math.abs(p.h - T.pos[2]) < (p.hTol ?? 6)) {
        const k = this.poiKey(p);
        (this.state.found[this.levelDef.id] ||= []).push(k);
        this._save(); this._refreshMarker(p);
        this.ui.showPlace(p, true);
        this.ui.updateProgress();
      }
    }
    this.ui.frame(dt, tag);
    this.viewModes.render();
    this.chrome.renderPortrait(this.renderer, this.scene);
  }
  zoneName() {
    const [x, y, h] = this.traveller.pos;
    const z = this.world.zoneAt(x, y);
    if (z) return z;
    const tag = this.world.nav.tagAt(x, y, h);
    const name = TAG_NAMES[tag] || 'ground';
    if (name === 'ground') return this.levelDef.groundName || TAG_LABEL.ground;
    return TAG_LABEL[name] || name;
  }
}
