// The canonical character: one skinned human body in three cuts (long coat, bare body, dress), loaded from
// assets/characters/*.glb when present, its walk and idle animations, and a dressing system on top of it.
// forts.world ships no bodies (the earlier ones were adapted from 0 A.D., CC BY-SA 3.0); without them the game
// draws its own figures. A body is
// dressed by a palette over nine regions read from the skeleton (head and hands, forearm, upper arm, torso, waist,
// thigh, calf, foot), with headwear and a carried object riding on the head and weapon bones. A new people or period
// is a new entry in CHARACTERS (or in assets/characters/characters.json): no new modelling for the common case.
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { MODELS } from './fauna3d.js';
import { figureGeometry } from './figures.js';
import { C } from '../core/mesher.js';

// palette slots: 0 skin, 1 forearm, 2 upper arm, 3 torso, 4 spare, 5 waist sash, 6 thigh/skirt, 7 calf, 8 foot
export function dressFromKind(spec) {
  const skin = spec.skin, top = spec.top, bot = spec.bottom, sash = spec.sash, shoe = '#4a3426';
  if (spec.skirt) return { body: 'body_dress', pal: [skin, top, top, top, top, sash, bot, bot, skin] };
  if (spec.long || spec.top === spec.bottom) return { body: 'body_jama', pal: [skin, top, top, top, top, sash, top, bot, shoe] };
  // a kurta over a dhoti: sleeves to the elbow, dhoti to mid-calf, bare feet
  return { body: 'body_bare', pal: [skin, skin, top, top, top, sash, bot, skin, skin] };
}
let mats = new Map();
function dressMaterial(pal) {
  const key = pal.join(','); if (mats.has(key)) return mats.get(key);
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0 });
  const cols = pal.map((c) => new THREE.Color(c).convertSRGBToLinear());
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uPal = { value: cols };
    sh.vertexShader = 'attribute float aRegion; varying float vRegion;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vRegion = aRegion;');
    sh.fragmentShader = 'uniform vec3 uPal[9]; varying float vRegion;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      { int r = int(vRegion + 0.5); vec3 c = uPal[0]; for (int i = 1; i < 9; i++) if (i == r) c = uPal[i]; diffuseColor.rgb *= c; }`);
  };
  m.customProgramCacheKey = () => 'dress';
  mats.set(key, m); return m;
}
// the head, its headwear and the carried object come from the jointed figure: we take those parts of it
function partsOf(spec, keep) {
  const g = figureGeometry(spec), part = g.attributes.aPart, pos = g.attributes.position, nor = g.attributes.normal, col = g.attributes.color;
  const P = [], N = [], Cc = [];
  // triangles whose first vertex is in a kept part
  for (let i = 0; i < pos.count; i += 3) { if (!keep(part.getX(i), pos.getY(i))) continue; for (let j = 0; j < 3; j++) { P.push(pos.getX(i + j), pos.getY(i + j), pos.getZ(i + j)); N.push(nor.getX(i + j), nor.getY(i + j), nor.getZ(i + j)); Cc.push(col.getX(i + j), col.getY(i + j), col.getZ(i + j)); } }
  const out = new THREE.BufferGeometry(); out.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); out.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); out.setAttribute('color', new THREE.Float32BufferAttribute(Cc, 3));
  return out;
}
const headMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
export function makeCharacter(spec) {
  const d = dressFromKind(spec), M = MODELS[d.body]; if (!M) return null;
  // the region codes arrive as '__region' (a name the shader language reserves): give them a usable name once
  if (!M._regionFixed) { M.scene.traverse((o) => { const g = o.geometry; if (g) { const r = g.getAttribute('__region') || g.getAttribute('_region'); if (r) g.setAttribute('aRegion', r); } }); M._regionFixed = true; }
  const obj = SkeletonUtils.clone(M.scene);
  const mat = dressMaterial(d.pal);
  let head = null, hand = null;
  obj.traverse((o) => { if (o.isMesh) { o.material = mat; o.castShadow = true; o.frustumCulled = false; } if (o.isBone && o.name === 'head') head = o; if (o.isBone && o.name === 'weapon_R') hand = o; });
  const holder = new THREE.Group(); holder.add(obj);
  obj.updateMatrixWorld(true);
  // head and headwear: built for a 1.65 m figure; sit its neck on the head bone, then let the bone carry it
  if (head) {
    const g = partsOf(spec, (p) => p === 1), hm = new THREE.Mesh(g, headMat); hm.castShadow = true;
    const hp = head.getWorldPosition(new THREE.Vector3());
    hm.position.set(hp.x, hp.y - 1.42, hp.z + 0.0);
    holder.add(hm); hm.updateMatrixWorld(true); head.attach(hm);
  }
  if (hand && spec.prop && !['pack', 'pot', 'basket', 'sack', 'camera'].includes(spec.prop)) {
    const g = partsOf(spec, (p, y) => p === 3 && (y > 1.75 || y < 0.7 || spec.prop === 'bow')), pm = new THREE.Mesh(g, headMat); pm.castShadow = true;
    const hp = hand.getWorldPosition(new THREE.Vector3());
    pm.position.set(hp.x - 0.24, hp.y - 0.85, hp.z - 0.05);
    holder.add(pm); pm.updateMatrixWorld(true); hand.attach(pm);
  }
  const mixer = new THREE.AnimationMixer(obj), acts = {};
  for (const c of M.clips) { const a = mixer.clipAction(c); a.play(); a.setEffectiveWeight(0); acts[c.name] = a; }
  const idles = Object.keys(acts).filter((k) => /^idle/.test(k));
  let cur = null, idleK = idles[Math.floor(Math.random() * idles.length)] || 'idle', swapT = 8 + Math.random() * 12;
  const rig = {
    obj: holder, mixer, R: { speed: 1.25 },
    set(state, speed, dt = 0) {
      if (state === 'idle') { swapT -= dt; if (swapT <= 0) { swapT = 8 + Math.random() * 14; idleK = idles[Math.floor(Math.random() * idles.length)] || idleK; } }
      const want = state === 'idle' ? acts[idleK] : acts.walk;
      if (!want) return;
      if (want !== cur) { if (cur) cur.fadeOut(0.3); want.reset().setEffectiveWeight(1).fadeIn(0.3).play(); cur = want; }
      want.timeScale = state === 'idle' ? 1 : Math.min(2.4, Math.max(0.5, speed / 1.25));
    },
  };
  rig.set('idle', 0); mixer.update(Math.random() * 4);
  return rig;
}
