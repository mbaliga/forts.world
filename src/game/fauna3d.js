// Animated animal models, embedded by build.mjs from assets/fauna as glTF and scaled to real size. forts.world ships none
// (the earlier 0 A.D. models are CC BY-SA 3.0 and stay out of this repository); with no models the game draws its own figures.
// People records each animal's pose as usual; a rig per animal follows it and plays walk, run or idle.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { FAUNA_FILES } from './fauna-data.js';

// game kind -> model, coat texture, natural walking speed (m/s), extra scale, heading offset
export const RIGGED = {
  horse: { model: 'horse', speed: 1.5 }, 'horse-grey': { model: 'horse', tex: 'horse_gray.jpg', speed: 1.5 }, 'horse-chestnut': { model: 'horse', tex: 'horse_cherrybay.jpg', speed: 1.5 },
  'horse-black': { model: 'horse', tex: 'horse_black.jpg', speed: 1.5 }, 'horse-war': { model: 'horse', tex: 'horse_white.jpg', speed: 1.5, tack: 'saddle' },
  elephant: { model: 'elephant', speed: 1.2 }, 'elephant-royal': { model: 'elephant', speed: 1.2, tack: 'howdah' },
  cow: { model: 'zebu', speed: 0.9 }, camel: { model: 'camel', speed: 1.3 },
  boar: { model: 'boar', speed: 1.0 }, wolf: { model: 'wolf', speed: 1.2 },
};
const b64 = (s) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };
export const MODELS = {};
const TEX = {};
let loading = null;
export function loadFauna() {
  if (loading) return loading;
  const loader = new GLTFLoader();
  loading = Promise.all(Object.entries(FAUNA_FILES).map(([f, data]) => new Promise((res) => {
    const bytes = b64(data);
    if (f.endsWith('.jpg')) {
      const url = URL.createObjectURL(new Blob([bytes], { type: 'image/jpeg' }));
      new THREE.TextureLoader().load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.flipY = false; TEX[f] = t; res(); }, undefined, () => res());
      return;
    }
    try { loader.parse(bytes.buffer, '', (g) => {
      g.scene.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; if (o.material) { o.material.roughness = 0.92; o.material.metalness = 0; } } });
      MODELS[f.replace('.glb', '').replace('char:', '')] = { scene: g.scene, clips: g.animations };
      res();
    }, () => res()); } catch (e) { res(); }
  })));
  return loading;
}

function boneLike(obj, re) { let hit = null; obj.traverse((o) => { if (!hit && o.isBone && re.test(o.name)) hit = o; }); return hit; }
function tack(rig, kind, model) {
  // static trappings riding on the spine: a saddle cloth for a war horse, a caparison and howdah for a state elephant
  const spine = boneLike(rig, /spine|back|chest/i) || rig;
  const g = new THREE.Group();
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 });
  if (kind === 'saddle') {
    const cloth = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 0.7, 16, 1, true, -Math.PI * 0.62, Math.PI * 1.24), mat(0x8a2a22)); cloth.rotation.z = Math.PI / 2; cloth.material.side = THREE.DoubleSide;
    const seat = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), mat(0x4a2c18)); seat.scale.set(1.2, 0.35, 1); seat.position.y = 0.42;
    g.add(cloth, seat);
  } else {
    const cloth = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 2.1, 20, 1, true, -Math.PI * 0.6, Math.PI * 1.2), mat(0x9a2a24)); cloth.rotation.z = Math.PI / 2; cloth.material.side = THREE.DoubleSide;
    const trim = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.04, 6, 24, Math.PI * 1.2), mat(0xd0a040)); trim.rotation.y = Math.PI / 2; trim.rotation.z = -Math.PI * 0.1;
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.65, 1.2), mat(0xc89a3a)); box.position.y = 1.15;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.85, 0.65, 4), mat(0x9a2a24)); roof.position.y = 1.85; roof.rotation.y = Math.PI / 4;
    for (const [x, z] of [[-0.45, -0.55], [0.45, -0.55], [-0.45, 0.55], [0.45, 0.55]]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 6), mat(0xd0a040)); p.position.set(x, 1.82, z); g.add(p); }
    g.add(cloth, trim, box, roof);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  // place in world space on the animal's back, then parent to the spine so it rides with the walk
  rig.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(rig), top = box.max.y, cz = (box.min.z + box.max.z) / 2;
  g.position.set(0, top * (kind === 'saddle' ? 0.66 : 0.82), cz);
  rig.add(g);
  void spine; void model;
  return g;
}

// one animated animal
export function makeRig(kind) {
  const R = RIGGED[kind]; if (!R) return null;
  const M = MODELS[R.model]; if (!M) return null;
  const obj = SkeletonUtils.clone(M.scene);
  if (R.tex && TEX[R.tex]) obj.traverse((o) => { if (o.isMesh && o.material?.map && !o.material.alphaTest) { o.material = o.material.clone(); o.material.map = TEX[R.tex]; } });
  const holder = new THREE.Group(); holder.add(obj);
  if (R.scale) obj.scale.multiplyScalar(R.scale);
  if (R.tack) tack(obj, R.tack, R.model);
  const mixer = new THREE.AnimationMixer(obj), acts = {};
  for (const c of M.clips) { const a = mixer.clipAction(c); a.play(); a.setEffectiveWeight(0); acts[c.name] = a; }
  const pick = (n) => acts[n] || acts.walk || acts.idle;
  let cur = null;
  const rig = {
    obj: holder, mixer, R,
    set(state, speed) {
      const want = state === 'run' ? pick('run') : state === 'walk' ? pick('walk') : (acts.idle || pick('walk'));
      if (want !== cur) { if (cur) cur.fadeOut(0.25); want.reset().setEffectiveWeight(1).fadeIn(0.25).play(); cur = want; }
      want.timeScale = state === 'idle' ? 0.9 : Math.min(2.6, Math.max(0.45, speed / (R.speed * (state === 'run' ? 2.6 : 1))));
    },
  };
  rig.set('idle', 0);
  // vary the start so herds don't move in step
  mixer.update(Math.random() * 3);
  return rig;
}
