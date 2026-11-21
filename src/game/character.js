// The traveller: a small low-poly figure with walk cycle, selection ring, blob shadow and x-ray silhouette.
import * as THREE from 'three';

function part(geo, color, x, y, z) {
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color, flatShading: true }));
  m.position.set(x, y, z); m.castShadow = true;
  return m;
}

function blobTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 2, 32, 32, 31);
  gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(0.6, 'rgba(0,0,0,0.25)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Traveller {
  constructor({ accent = '#1f8a86', silhouette = '#1f8a86' } = {}) {
    const root = new THREE.Group();
    const body = new THREE.Group(); root.add(body);
    const kurta = 0x2f4a78, pants = 0xe6dfcf, skin = 0x9c6a4a, safa = 0xe08a1e, bag = 0x7a5230, sash = 0xb8452a;
    // legs (pivot at hip)
    this.legs = [];
    for (const sx of [-1, 1]) {
      const pivot = new THREE.Group(); pivot.position.set(sx * 0.11, 0.92, 0);
      const g = new THREE.BoxGeometry(0.17, 0.9, 0.19); g.translate(0, -0.45, 0);
      pivot.add(part(g, pants, 0, 0, 0));
      const foot = new THREE.BoxGeometry(0.18, 0.08, 0.28); foot.translate(0, -0.88, 0.05);
      pivot.add(part(foot, 0x5a3b26, 0, 0, 0));
      body.add(pivot); this.legs.push(pivot);
    }
    // kurta (long tunic) as a tapered 6-sided frustum
    const tunic = new THREE.CylinderGeometry(0.21, 0.3, 0.86, 6); tunic.translate(0, 1.18, 0);
    body.add(part(tunic, kurta, 0, 0, 0));
    const chest = new THREE.CylinderGeometry(0.24, 0.22, 0.32, 6); chest.translate(0, 1.6, 0);
    body.add(part(chest, kurta, 0, 0, 0));
    const belt = new THREE.CylinderGeometry(0.235, 0.235, 0.07, 6); belt.translate(0, 1.36, 0);
    body.add(part(belt, sash, 0, 0, 0));
    // arms
    this.arms = [];
    for (const sx of [-1, 1]) {
      const pivot = new THREE.Group(); pivot.position.set(sx * 0.3, 1.7, 0);
      const g = new THREE.BoxGeometry(0.12, 0.62, 0.13); g.translate(0, -0.3, 0);
      pivot.add(part(g, kurta, 0, 0, 0));
      const hand = new THREE.BoxGeometry(0.1, 0.1, 0.1); hand.translate(0, -0.65, 0);
      pivot.add(part(hand, skin, 0, 0, 0));
      body.add(pivot); this.arms.push(pivot);
    }
    // head + safa
    const neck = new THREE.CylinderGeometry(0.06, 0.07, 0.1, 5); neck.translate(0, 1.79, 0);
    body.add(part(neck, skin, 0, 0, 0));
    const head = new THREE.BoxGeometry(0.22, 0.25, 0.23); head.translate(0, 1.95, 0);
    body.add(part(head, skin, 0, 0, 0));
    const t1 = new THREE.CylinderGeometry(0.15, 0.14, 0.13, 7); t1.translate(0, 2.1, -0.01);
    body.add(part(t1, safa, 0, 0, 0));
    const t2 = new THREE.CylinderGeometry(0.1, 0.15, 0.1, 7); t2.translate(0, 2.2, -0.02);
    body.add(part(t2, safa, 0, 0, 0));
    const tail = new THREE.BoxGeometry(0.08, 0.32, 0.05); tail.translate(0, 1.95, -0.14);
    body.add(part(tail, safa, 0, 0, 0));
    // satchel with strap
    const sat = new THREE.BoxGeometry(0.1, 0.24, 0.3); sat.translate(0.29, 1.14, 0.02);
    body.add(part(sat, bag, 0, 0, 0));
    const strap = new THREE.BoxGeometry(0.05, 0.75, 0.04); strap.rotateZ(0.65); strap.translate(0.02, 1.5, 0.13);
    body.add(part(strap, bag, 0, 0, 0));

    // selection ring + blob shadow
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.62, 40), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.85, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; ring.renderOrder = 5;
    root.add(ring);
    const blob = new THREE.Mesh(new THREE.CircleGeometry(0.62, 24), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; blob.renderOrder = 4;
    root.add(blob);

    // x-ray silhouette: drawn only where the figure is hidden behind geometry
    // pulled slightly towards the camera so it never shows through the figure itself
    const silMat = new THREE.MeshBasicMaterial({ color: silhouette, transparent: true, opacity: 0.6, depthFunc: THREE.GreaterDepth, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -8 });
    const sil = body.clone(true);
    sil.traverse((o) => { if (o.isMesh) { o.material = silMat; o.castShadow = false; o.renderOrder = 10; } });
    root.add(sil);
    this.sil = sil; this.silMat = silMat;

    this.root = root; this.body = body; this.ring = ring; this.blob = blob;
    body.scale.setScalar(0.82); // the traveller at true height too (1.65 m)
    this.phase = 0; this.moving = 0;
    this.pos = [0, 0, 0]; // plan x, y, h
    this.yaw = 0;
  }
  setAccent(hex) { this.ring.material.color.set(hex); this.silMat.color.set(hex); }
  place(x, y, h) { this.pos = [x, y, h]; this.root.position.set(x, h, -y); }
  face(dx, dy, dt = 1) {
    if (Math.abs(dx) + Math.abs(dy) < 1e-6) return;
    // model faces local +Z; plan (dx,dy) maps to render (dx, -dy); rotY(θ) sends +Z to (sinθ, cosθ)
    const want = Math.atan2(dx, -dy);
    let d = want - this.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
    this.yaw += d * Math.min(1, dt * 12);
    this.root.rotation.y = this.yaw;
  }
  animate(t, dt, speed) {
    const moving = speed > 0.05;
    this.moving += ((moving ? 1 : 0) - this.moving) * Math.min(1, dt * 8);
    this.phase += dt * (speed * 1.9);
    const sw = Math.sin(this.phase) * 0.62 * this.moving;
    this.legs[0].rotation.x = sw; this.legs[1].rotation.x = -sw;
    this.arms[0].rotation.x = -sw * 0.8; this.arms[1].rotation.x = sw * 0.6;
    this.body.position.y = Math.abs(Math.cos(this.phase)) * 0.05 * this.moving + Math.sin(t * 1.7) * 0.01 * (1 - this.moving);
    // mirror the silhouette pose
    const sl = this.sil.children;
    this.sil.position.y = this.body.position.y;
    sl.forEach((c, i) => { const src = this.body.children[i]; if (src) c.rotation.copy(src.rotation); });
    const k = 1 + Math.sin(t * 3) * 0.04;
    this.ring.scale.set(k, k, k);
  }
}

// click feedback ring
export class ClickMarker {
  constructor(color) {
    this.mesh = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.9, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.rotation.x = -Math.PI / 2; this.mesh.renderOrder = 6;
    this.t = 1;
  }
  show(x, y, h, ok = true) { this.mesh.position.set(x, h + 0.08, -y); this.t = 0; this.mesh.material.color.set(ok ? this.okColor || '#1f8a86' : '#b3402a'); }
  update(dt) {
    if (this.t >= 1) { this.mesh.material.opacity = 0; return; }
    this.t = Math.min(1, this.t + dt * 1.6);
    const s = 1.6 - this.t;
    this.mesh.scale.set(s, s, s);
    this.mesh.material.opacity = (1 - this.t) * 0.9;
  }
}
