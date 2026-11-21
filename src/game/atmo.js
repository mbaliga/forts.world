// Atmosphere: drifting clouds and their shadows, coastal mist, and the ground-detail shader.
// One set of uniforms is shared by every material, so the sky stays consistent across terrain, walls, trees and sea.
import * as THREE from 'three';

export const ATMO = {
  uAtmoT: { value: 0 }, uWind: { value: new THREE.Vector2(0.006, 0.0025) }, uCloud: { value: 0.35 },
  uSunOff: { value: new THREE.Vector2(0.5, 0.3) }, uCloudAlt: { value: 140 }, uCloudShade: { value: 0.42 }, uCloudVis: { value: 1 }, uSeaLvl: { value: -1e4 },
  uCloudDark: { value: 0 }, uWet: { value: 0 }, uSeaAmp: { value: 1 }, uDry: { value: 0 }, uLush: { value: 0 }, uMistBoost: { value: 0 }, uSkyLight: { value: 1 },
};

export const ATMO_GLSL = `
uniform float uAtmoT; uniform vec2 uWind; uniform float uCloud; uniform vec2 uSunOff; uniform float uCloudAlt; uniform float uCloudShade; uniform float uCloudVis; uniform float uSeaLvl; uniform float uCloudDark; uniform float uWet; uniform float uDry; uniform float uLush; uniform float uMistBoost; uniform float uSkyLight;
float aH(vec2 p) { p = fract(p * vec2(233.34, 851.73)); p += dot(p, p + 23.45); return fract(p.x * p.y); }
float aN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(aH(i), aH(i + vec2(1, 0)), f.x), mix(aH(i + vec2(0, 1)), aH(i + vec2(1, 1)), f.x), f.y); }
float aFbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += aN(p) * a; p = p * 2.03 + vec2(17.1, 9.3); a *= 0.5; } return s / 0.9375; }
float aFbm3(vec2 p) { float s = aN(p) * 0.5; p = p * 2.03 + vec2(17.1, 9.3); s += aN(p) * 0.25; p = p * 2.03 + vec2(17.1, 9.3); s += aN(p) * 0.125; return s / 0.875; }
float cloudField(vec2 p) {
  vec2 q = p * 0.0032 + uWind * uAtmoT;
  float f = aFbm(q) + 0.25 * aFbm3(q * 2.7 - uWind * uAtmoT * 1.7);
  return smoothstep(1.02 - uCloud, 1.32 - uCloud, f);
}
float cloudFieldLo(vec2 p) {
  vec2 q = p * 0.0032 + uWind * uAtmoT;
  return smoothstep(1.02 - uCloud, 1.32 - uCloud, aFbm3(q) * 1.08 + 0.12);
}
float cloudShadow(vec3 w) {
  if (uCloud <= 0.0) return 1.0;
  vec2 p = vec2(w.x, -w.z) + uSunOff * max(0.0, uCloudAlt - w.y);
  return 1.0 - uCloudShade * cloudFieldLo(p);
}`;

// add cloud shadows (and optional ground detail) to a built-in material, keeping any shader edits it already has
export function addAtmo(mat, key, { detail = false, season = false, wet = true } = {}) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev.call(mat, sh, r);
    Object.assign(sh.uniforms, ATMO);
    sh.vertexShader = 'varying vec3 vAtmoW;\n' + sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
      { vec4 aw = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          aw = instanceMatrix * aw;
        #endif
        vAtmoW = (modelMatrix * aw).xyz; }`);
    let fs = 'varying vec3 vAtmoW;\n' + ATMO_GLSL + '\n' + sh.fragmentShader;
    if (detail) fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      { vec2 gp = vec2(vAtmoW.x, -vAtmoW.z);
        float d1 = aN(gp * 1.35), d2 = aN(gp * 0.31 + 7.0), d3 = aN(gp * 4.1 - 3.0);
        float px = fwidth(gp.x);
        float k = 1.0 - smoothstep(0.25, 1.4, px);
        float d4 = aN(gp * 0.09 - 3.0);
        diffuseColor.rgb *= 1.0 + (0.26 * (d1 - 0.5) + 0.12 * (d3 - 0.5)) * k + 0.2 * (d2 - 0.5);
        // patches: greener where the ground holds water, drier and redder (laterite) on the rises
        float g = smoothstep(0.35, 0.75, d4);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.92, 1.06, 0.86), g * 0.5);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.1, 0.97, 0.86), (1.0 - smoothstep(0.2, 0.5, d4)) * 0.35);
        // the tidal band: wet, dark rock and weed just above the water
        float wet = 1.0 - smoothstep(uSeaLvl + 0.15, uSeaLvl + 1.1 + 0.4 * d1, vAtmoW.y);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.52, 0.58, 0.52), wet * 0.85); }`);
    // season: dry straw in the hot months, deep green in the rains (only on green things); everything darkens when wet
    if (season || detail) fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      { vec3 c = diffuseColor.rgb; float g = clamp((c.g - max(c.r, c.b)) * 5.0, 0.0, 1.0);
        c = mix(c, c * vec3(1.32, 1.06, 0.6), g * uDry); c = mix(c, c * vec3(0.84, 1.1, 0.8), g * uLush); diffuseColor.rgb = c; }`);
    if (wet) fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      diffuseColor.rgb *= 1.0 - 0.28 * uWet;`);
    fs = fs.replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
      { float cs = cloudShadow(vAtmoW); reflectedLight.directDiffuse *= cs; reflectedLight.directSpecular *= cs; }`);
    sh.fragmentShader = fs;
  };
  mat.customProgramCacheKey = () => 'atmo:' + key;
  return mat;
}

// the cloud deck: one large plane high above the fort, drawn with the same field that casts the shadows
export function cloudLayer(world, alt) {
  const [x0, y0, x1, y1] = world.bounds, pad = 1400;
  const g = new THREE.PlaneGeometry(x1 - x0 + pad * 2, y1 - y0 + pad * 2, 1, 1); g.rotateX(-Math.PI / 2);
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: Object.assign({}, ATMO, { uOpacity: { value: 0.62 } }),
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: ATMO_GLSL + `\nuniform float uOpacity; varying vec3 vW;
void main(){
  vec2 p = vec2(vW.x, -vW.z);
  float c = cloudField(p);
  float c2 = cloudFieldLo(p + vec2(18.0, -12.0));
  float a = c * uOpacity * uCloudVis;
  if (a < 0.004) discard;
  vec3 col = mix(vec3(0.78, 0.8, 0.83), vec3(1.0, 0.995, 0.98), clamp(0.55 + (c - c2) * 2.5, 0.0, 1.0));
  col *= (1.0 - 0.6 * uCloudDark) * uSkyLight; a = min(0.92, a * (1.0 + 0.6 * uCloudDark));
  gl_FragColor = vec4(col, a);
}`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set((x0 + x1) / 2, alt, -(y0 + y1) / 2);
  mesh.renderOrder = 9; mesh.frustumCulled = false; mesh.name = 'clouds';
  return mesh;
}

// low banks of mist drifting over the water
export function mistLayer(world, h, amount = 0.3) {
  const [x0, y0, x1, y1] = world.bounds, pad = 1200;
  const g = new THREE.PlaneGeometry(x1 - x0 + pad * 2, y1 - y0 + pad * 2, 1, 1); g.rotateX(-Math.PI / 2);
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: Object.assign({}, ATMO, { uAmt: { value: amount } }),
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: ATMO_GLSL + `\nuniform float uAmt; varying vec3 vW;
void main(){
  vec2 p = vec2(vW.x, -vW.z) * 0.012 + uWind * uAtmoT * 3.0;
  float f = aFbm(p) * 0.7 + aFbm(p * 3.1 + 4.0) * 0.3;
  float a = smoothstep(0.42 - 0.2 * min(uMistBoost, 1.0), 0.78, f) * min(0.85, uAmt * (1.0 + 2.5 * uMistBoost)) * max(uCloudVis, 0.5 * min(uMistBoost, 1.0));
  if (a < 0.004) discard;
  gl_FragColor = vec4(vec3(0.93, 0.95, 0.95) * uSkyLight, a);
}`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set((x0 + x1) / 2, h, -(y0 + y1) / 2);
  mesh.renderOrder = 3; mesh.frustumCulled = false; mesh.name = 'mist';
  return mesh;
}
