// View modes for the fort scenes.
//   Real:  physically based materials (procedural stone, earth, leaf and water detail), an image-lit sky (three's Sky,
//          prefiltered with PMREM), soft shadows, screen-space ambient occlusion, aerial haze, ACES tone mapping and a
//          light colour grade.
//   Model: the time map's language. Monotone land and water, contour lines on the ground that get finer as the camera
//          comes closer, buildings and walls as light-grey massing with crisp screen-space edges and soft occlusion.
// Switching paints one view onto the other like a drop of ink landing where the user tapped and spreading, or draining
// back into the tap point. Both views are drawn into their own render targets and composited with a noisy circular mask.
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { ATMO } from './atmo.js';

// the time map's palette (web/home): ground, water and line ink, light and dark
export const MODEL_THEME = {
  light: { ground: '#fafaf8', water: '#e7eae9', ink: '#16191a', line: 0.3, mass: '#dcdfdf', flora: '#e9ebe9', accent: '#0e7a77' },
  dark: { ground: '#12171a', water: '#0b0e10', ink: '#e9edee', line: 0.3, mass: '#b8bfc1', flora: '#2a3236', accent: '#4cc3b7' },
};
const DURATION = 1.2;   // seconds for the ink to cover the screen
const HIDE_IN_MODEL = /^(clouds|mist|surf|particles|decal|tree-grass|tree-flowers|tree-reed|pebble)$/;
// display-space (sRGB) values: the Model view is composed in display space and written to the screen unconverted
const srgb = (hex) => { const n = parseInt(hex.slice(1), 16); return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255); };

// ------------------------------------------------------------------ model materials (no lights, no textures)
const MODEL_VERT = `
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
varying vec3 vMW; varying vec3 vMN;
void main() {
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  vec4 wq = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    wq = instanceMatrix * wq;
  #endif
  vMW = (modelMatrix * wq).xyz;
  vMN = inverseTransformDirection(transformedNormal, viewMatrix);
}`;
// alpha carries the surface class for the edge pass: 0 ground, 0.3 water, 0.6 trees, 1 buildings and figures
const MODEL_FRAG = {
  mass: `uniform vec3 uCol; uniform vec3 uKey; uniform float uClass; varying vec3 vMW; varying vec3 vMN;
void main() {
  vec3 n = normalize(vMN); if (!gl_FrontFacing) n = -n;
  float k = dot(n, uKey), sky = 0.5 + 0.5 * n.y;
  vec3 c = uCol * (0.8 + 0.13 * k + 0.1 * sky);
  gl_FragColor = vec4(c, uClass);
}`,
  water: `uniform vec3 uCol; varying vec3 vMW; varying vec3 vMN;
void main() { gl_FragColor = vec4(uCol, 0.3); }`,
  ground: `uniform vec3 uCol; uniform vec3 uInk; uniform vec3 uWater; uniform vec3 uKey; uniform float uLineA; uniform float uStep; uniform float uSea; uniform float uRelief;
varying vec3 vMW; varying vec3 vMN;
float cline(float h, float s, float w) {
  float x = h / s, fw = fwidth(x);
  float d = abs(fract(x - 0.5) - 0.5) / max(fw, 1e-5);
  // lines that would crowd closer than ~3 px (steep ground) fade out instead of filling in
  // ...and ground that is exactly level draws none, even when it sits on a contour height (a flat plateau at 8 m)
  return (1.0 - smoothstep(w - 0.5, w + 0.5, d)) * (1.0 - smoothstep(0.12, 0.3, fw)) * smoothstep(0.0004, 0.003, fw);
}
void main() {
  vec3 n = normalize(vMN); if (!gl_FrontFacing) n = -n;
  float h = vMW.y;
  // relief: a whisper of hillshade so the land reads without colour
  float sh = 1.0 + uRelief * (dot(n, uKey) - 0.55) - 0.05 * (1.0 - n.y);
  vec3 c = uCol * sh;
  // contours: nested intervals s, 2s, 4s, 8s (s a power of two set by the zoom). Each set's weight depends only on
  // log2(spacing) - uStep, so zooming moves lines smoothly between minor and major and nothing pops.
  float L = uStep, s0 = exp2(floor(L)), f = fract(L), a = 0.0;
  for (int k = 0; k < 4; k++) {
    float x = float(k) + 1.0 - f;
    float w = 0.5 * smoothstep(0.0, 1.0, x) + 0.5 * smoothstep(2.0, 3.0, x);
    a = max(a, cline(h, s0 * exp2(float(k)), 0.5 + 0.35 * smoothstep(2.0, 3.0, x)) * w);
  }
  a *= uLineA * 1.6;
  // the waterline, drawn firmer
  float fwh = fwidth(h);
  float shore = (1.0 - smoothstep(0.6, 1.6, abs(h - uSea) / max(fwh, 1e-4))) * step(-1e3, uSea) * smoothstep(0.0005, 0.004, fwh);
  a = max(a, shore * min(1.0, uLineA * 2.2));
  if (h < uSea - 0.05) c = uWater;
  c = mix(c, uInk, a);
  gl_FragColor = vec4(c, 0.0);
}`,
};

// ------------------------------------------------------------------ real-material additions (procedural detail)
const REAL_NOISE = `
uniform float uVmT; uniform float uVmWet;
varying vec3 vVmW;
float vmH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vmN(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(vmH(i), vmH(i + vec3(1, 0, 0)), f.x), mix(vmH(i + vec3(0, 1, 0)), vmH(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(vmH(i + vec3(0, 0, 1)), vmH(i + vec3(1, 0, 1)), f.x), mix(vmH(i + vec3(0, 1, 1)), vmH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
// detail that fades out once a feature of size 1/freq is under ~2 px
float vmFade(float fp, float freq) { return 1.0 - smoothstep(0.25, 0.6, fp * freq); }
vec3 vmBump(vec3 n, float H, vec3 pos) {
  vec3 sx = dFdx(pos), sy = dFdy(pos);
  vec2 dH = vec2(dFdx(H), dFdy(H));
  vec3 r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1);
  vec3 g = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * n - g);
}`;
// per surface kind: bump height field, roughness, albedo variation
const REAL_KIND = {
  stone: { rough: 0.86, H: `float H = 0.0; { vec3 p = vVmW;
      H = (vmN(p * 2.3) * 0.6 + vmN(p * 6.1) * 0.25 * vmFade(fp, 6.1) + vmN(p * 15.0) * 0.12 * vmFade(fp, 15.0)) * 0.035 * vmFade(fp, 2.3); }`,
    alb: `diffuseColor.rgb *= 0.93 + 0.12 * vmN(vVmW * 0.7) + 0.06 * vmN(vVmW * 3.1);`, rv: `roughnessFactor = clamp(roughnessFactor - 0.1 * vmN(vVmW * 1.3), 0.0, 1.0);` },
  earth: { rough: 0.96, H: `float H = 0.0; { vec3 p = vec3(vVmW.x, vVmW.y * 0.3, vVmW.z);
      H = (vmN(p * 1.1) * 0.7 + vmN(p * 3.7) * 0.3 * vmFade(fp, 3.7) + vmN(p * 11.0) * 0.18 * vmFade(fp, 11.0)) * 0.06 * vmFade(fp, 1.1); }`,
    alb: `diffuseColor.rgb *= 0.95 + 0.1 * vmN(vVmW * 0.21);`, rv: `` },
  flora: { rough: 0.78, H: `float H = vmN(vVmW * 4.0) * 0.04 * vmFade(fp, 4.0);`, alb: `diffuseColor.rgb *= 0.88 + 0.2 * vmN(vVmW * 0.9);`, rv: `` },
  water: { rough: 0.07, H: `float H = 0.0; { vec3 p = vec3(vVmW.x, 0.0, vVmW.z);
      H = (vmN(p * 0.55 + vec3(uVmT * 0.31, 0.0, uVmT * 0.17)) * 0.6 + vmN(p * 1.7 - vec3(uVmT * 0.5, 0.0, -uVmT * 0.23)) * 0.3 * vmFade(fp, 1.7)
         + vmN(p * 4.3 + vec3(0.0, uVmT * 0.9, uVmT * 0.4)) * 0.12 * vmFade(fp, 4.3)) * 0.09; }`, alb: ``, rv: `` },
  other: { rough: 0.8, H: `float H = vmN(vVmW * 5.0) * 0.012 * vmFade(fp, 5.0);`, alb: ``, rv: `` },
};
function realPatch(kind) {
  const K = REAL_KIND[kind] || REAL_KIND.other;
  return (sh) => {
    sh.uniforms.uVmT = ATMO.uAtmoT; sh.uniforms.uVmWet = ATMO.uWet;
    sh.vertexShader = 'varying vec3 vVmW;\n' + sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
      { vec4 vw = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          vw = instanceMatrix * vw;
        #endif
        vVmW = (modelMatrix * vw).xyz; }`);
    sh.fragmentShader = REAL_NOISE + '\n' + sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>\n${K.alb}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        ${K.rv}
        // rain: wet surfaces turn glossy
        roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.3), uVmWet * 0.85);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { float fp = length(fwidth(vVmW)); ${K.H} normal = vmBump(normal, H * faceDirection, -vViewPosition); }`);
  };
}

// ------------------------------------------------------------------ composite (both views, the ink mask, grading)
const POST_VERT = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const POST_FRAG = `
uniform sampler2D tReal, tRealD, tModel, tModelD;
uniform vec2 uRes; uniform vec2 uHalf; uniform float uNear, uFar, uPx, uDpr, uTarget, uPersp;
uniform mat4 uCamW;
uniform float uR, uRmax, uSeed, uTime; uniform vec2 uOrigin;
uniform vec3 uGround, uInk, uEdge, uSky, uSeaHaze; uniform float uExposure, uHaze, uSea, uAoReal, uAoModel, uDark;
varying vec2 vUv;
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
float h2(vec2 p) { p = fract(p * vec2(233.34, 851.73)); p += dot(p, p + 23.45); return fract(p.x * p.y); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += n2(p) * a; p = p * 2.07 + 11.3; a *= 0.5; } return s / 0.9375; }
// view distance from window depth: linear for the iso (orthographic) camera, hyperbolic for walk and fly (perspective)
float viewZ(float d) {
  if (uPersp > 0.5) return 2.0 * uNear * uFar / (uFar + uNear - (d * 2.0 - 1.0) * (uFar - uNear));
  return uNear + d * (uFar - uNear);
}
vec3 vpos(vec2 uv, float d) { float z = viewZ(d); vec2 xy = (uv * 2.0 - 1.0) * uHalf; if (uPersp > 0.5) xy *= z; return vec3(xy, -z); }
// metres per pixel at view distance z (uPx is metres per pixel at 1 m for a perspective camera)
float pxAt(float z) { return uPersp > 0.5 ? uPx * z : uPx; }
// ambient occlusion from the depth buffer, radius in metres
float ssao(sampler2D tD, vec2 uv, float R, float strength) {
  float d0 = texture2D(tD, uv).x; if (d0 >= 0.99999) return 1.0;
  vec2 e = 1.0 / uRes;
  vec3 P = vpos(uv, d0);
  vec3 pr = vpos(uv + vec2(e.x, 0.0), texture2D(tD, uv + vec2(e.x, 0.0)).x), pl = vpos(uv - vec2(e.x, 0.0), texture2D(tD, uv - vec2(e.x, 0.0)).x);
  vec3 pu = vpos(uv + vec2(0.0, e.y), texture2D(tD, uv + vec2(0.0, e.y)).x), pd = vpos(uv - vec2(0.0, e.y), texture2D(tD, uv - vec2(0.0, e.y)).x);
  vec3 dx = abs(pr.z - P.z) < abs(P.z - pl.z) ? pr - P : P - pl;
  vec3 dy = abs(pu.z - P.z) < abs(P.z - pd.z) ? pu - P : P - pd;
  vec3 N = normalize(cross(dx, dy)); if (N.z < 0.0) N = -N;
  float rpx = clamp(R / pxAt(-P.z), 3.0 * uDpr, 40.0 * uDpr);
  float ang = ign(gl_FragCoord.xy) * 6.2831853, occ = 0.0;
  const int NS = AO_SAMPLES;
  for (int i = 0; i < NS; i++) {
    float t = (float(i) + 0.5) / float(NS);
    vec2 o = vec2(cos(ang), sin(ang)) * rpx * t * e; ang += 2.3999632;
    vec3 S = vpos(uv + o, texture2D(tD, uv + o).x);
    vec3 v = S - P; float l = length(v) + 1e-4;
    occ += max(0.0, dot(N, v) / l - 0.12) * (1.0 - smoothstep(R * 0.6, R * 1.6, l));
  }
  return clamp(1.0 - strength * occ / float(NS), 0.0, 1.0);
}
vec3 aces(vec3 color) {
  color *= uExposure / 0.6;
  const mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  color = m1 * color;
  vec3 a = color * (color + 0.0245786) - 0.000090537, b = color * (0.983729 * color + 0.4329510) + 0.238081;
  return clamp(m2 * (a / b), 0.0, 1.0);
}
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
#ifdef USE_REAL
vec3 realAt(vec2 uv) {
  float d = texture2D(tRealD, uv).x;
  vec3 c = texture2D(tReal, uv).rgb;
  if (d < 0.99999) {
    c *= ssao(tRealD, uv, 2.2, uAoReal);
    // aerial perspective: farther from the eye and lower down, the more air between
    vec3 P = vpos(uv, d), W = (uCamW * vec4(P, 1.0)).xyz;
    float far = max(0.0, viewZ(d) - uTarget);
    float hz = (1.0 - exp(-far * uHaze)) * mix(1.0, 0.55, smoothstep(0.0, 160.0, W.y - uSea));
    c = mix(c, uSky, clamp(hz, 0.0, 0.6));
  }
  c = aces(c);
  // grade: cool shadows, warm highlights, a touch more saturation, gentle vignette
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c *= mix(vec3(0.965, 0.99, 1.04), vec3(1.03, 1.0, 0.955), smoothstep(0.1, 0.8, l));
  c = mix(vec3(l), c, 1.08);
  c = toSRGB(clamp(c, 0.0, 1.0));
  vec2 q = vUv - 0.5; c *= 1.0 - 0.22 * pow(clamp(length(q * vec2(1.0, 0.8)) * 1.35, 0.0, 1.0), 2.6);
  return c;
}
#endif
#ifdef USE_MODEL
vec3 modelAt(vec2 uv) {
  float d = texture2D(tModelD, uv).x;
  vec4 s = texture2D(tModel, uv);
  if (d >= 0.99999) return uGround;
  vec3 c = s.rgb * mix(1.0, ssao(tModelD, uv, 3.2, uAoModel), s.a > 0.2 ? 1.0 : 0.65);
  // edges: depth creases (second derivative, zero on any flat face in an orthographic view), depth steps, class changes
  float k = max(1.0, uDpr * 0.75);
  vec2 e = k / uRes;
  float zc = viewZ(d);
  float zl = viewZ(texture2D(tModelD, uv - vec2(e.x, 0.0)).x), zr = viewZ(texture2D(tModelD, uv + vec2(e.x, 0.0)).x);
  float zd = viewZ(texture2D(tModelD, uv - vec2(0.0, e.y)).x), zu = viewZ(texture2D(tModelD, uv + vec2(0.0, e.y)).x);
  float al = texture2D(tModel, uv - vec2(e.x, 0.0)).a, ar = texture2D(tModel, uv + vec2(e.x, 0.0)).a;
  float ad = texture2D(tModel, uv - vec2(0.0, e.y)).a, au = texture2D(tModel, uv + vec2(0.0, e.y)).a;
  float px = pxAt(zc) * k;
  float lap, jump;
  if (uPersp > 0.5) {
    // perspective: 1/z, not z, is linear across a flat face, so creases and steps are read from 1/z (scaled back to
    // metres by z^2). A face seen edge-on has large one-sided steps but no second difference, so the step test uses the
    // second difference too, or every distant wall seen at a glancing angle would be inked solid.
    float wc = 1.0 / zc, wl = 1.0 / zl, wr = 1.0 / zr, wd = 1.0 / zd, wu = 1.0 / zu;
    lap = max(abs(wl + wr - 2.0 * wc), abs(wu + wd - 2.0 * wc)) * zc * zc / px;
    jump = lap * 0.6;
  } else {
    lap = max(abs(zl + zr - 2.0 * zc), abs(zu + zd - 2.0 * zc)) / px;
    jump = max(max(abs(zl - zc), abs(zr - zc)), max(abs(zu - zc), abs(zd - zc))) / px;
  }
  float bc = step(0.9, s.a), bn = max(max(step(0.9, al), step(0.9, ar)), max(step(0.9, ad), step(0.9, au)));
  float tc = step(0.5, s.a) * (1.0 - bc), tn = max(max(step(0.5, al), step(0.5, ar)), max(step(0.5, ad), step(0.5, au)));
  float crease = bc * smoothstep(0.45, 1.1, lap);
  float sil = max(bc, bn) * smoothstep(2.5, 6.0, jump);
  float cls = bc * (1.0 - min(min(step(0.9, al), step(0.9, ar)), min(step(0.9, ad), step(0.9, au))));
  float tre = max(tc, tn) * smoothstep(3.0, 8.0, jump) * 0.55;
  float edge = clamp(max(max(crease, sil), max(cls * 0.9, tre)), 0.0, 1.0);
  return mix(c, uEdge, edge * (uDark > 0.5 ? 0.75 : 0.62));
}
#endif
void main() {
  vec2 uv = vUv;
#if defined(USE_REAL) && defined(USE_MODEL)
  // the ink drop: an organic, noisy-edged disc around the tap point (radius uR in screen heights)
  vec2 q = (uv - uOrigin) * vec2(uRes.x / uRes.y, 1.0);
  float r = length(q);
  vec2 dir = q / max(r, 1e-4);
  float lobes = fbm(dir * 1.6 + uSeed) - 0.5;                 // a few broad lobes
  float fibre = fbm(q * 9.0 + uSeed * 3.1) - 0.5;             // feathery, paper-fibre edge
  float grow = smoothstep(0.0, 0.25, uR);
  float R = uR * (1.0 + 0.32 * lobes * grow) + 0.045 * fibre * grow;
  float edge = r - R;
  float fw = 0.004 + 0.012 * grow;
  float m = 1.0 - smoothstep(-fw, fw, edge);
  // satellite droplets thrown just beyond the rim
  float sat = smoothstep(0.74, 0.8, n2(q * 26.0 + uSeed * 7.0)) * (1.0 - smoothstep(0.0, 0.06 + 0.05 * uR, edge)) * step(0.0, edge) * grow;
  m = max(m, sat * step(uR, uRmax * 0.98));
  // pigment pools along the rim and pushes outward; a damp halo darkens the paper ahead of it
  float rim = exp(-pow((edge + fw * 1.5) / (0.01 + 0.03 * uR), 2.0)) * m;
  float halo = exp(-pow(max(edge, 0.0) / (0.015 + 0.02 * uR), 2.0)) * (1.0 - m);
  vec2 uvR = uv - dir * rim * 0.006 / vec2(uRes.x / uRes.y, 1.0);
  vec3 cR = realAt(uvR), cM = modelAt(uv);
  float lr = dot(cR, vec3(0.299, 0.587, 0.114));
  cR = mix(cR, mix(vec3(lr), cR, 1.35) * 0.78, rim * 0.6);
  cM *= 1.0 - (uDark > 0.5 ? -0.05 : 0.05) * halo;
  vec3 c = mix(cM, cR, m);
#elif defined(USE_REAL)
  vec3 c = realAt(uv);
#else
  vec3 c = modelAt(uv);
#endif
  c += (ign(gl_FragCoord.xy + uTime * 61.0) - 0.5) / 255.0;    // dither against banding
  gl_FragColor = vec4(c, 1.0);
}`;

export class ViewModes {
  constructor(app) {
    this.app = app;
    const r = app.renderer;
    this.enabled = !!r.capabilities.isWebGL2;
    let saved = null; try { saved = localStorage.getItem('fw:view'); } catch { /* storage unavailable */ }
    const q = new URLSearchParams(window.location.search).get('view');
    this.mode = q === 'model' || q === 'real' ? q : saved === 'model' ? 'model' : 'real';
    this.anim = null;          // { from, to, t0, origin:[u,v], seed }
    this.freeze = null;        // a fixed transition progress (0..1), for screenshots
    this.aoSamples = 10;
    // quality levers: pbr (standard-material twins and sky light), detail (procedural bump and mottling)
    this.opts = { pbr: true, detail: true };
    // the Real view's light balance: exposure into ACES, sky-light strength, and how much of the hemisphere light stays
    this.look = { exposure: 0.66, env: 0.32, hemi: 0.85, sky: 0.55 };
    // dynamic resolution: the views render at `scale` of the drawing buffer, lowered when frames run long (iPad)
    this.scale = 1; this.adaptive = true; this._ema = 1 / 60; this._slow = 0; this._fast = 0; this._last = 0;
    this.twins = new WeakMap();
    this.modelMats = {};
    this.list = null; this.scanT = 0;
    this.env = null; this.envSun = new THREE.Vector3(0, -1, 0); this.envT = -1e9;
    if (!this.enabled) return;
    this.hdr = r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float');
    this.post = new THREE.Scene();
    this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const U = {
      tReal: { value: null }, tRealD: { value: null }, tModel: { value: null }, tModelD: { value: null },
      uRes: { value: new THREE.Vector2(1, 1) }, uHalf: { value: new THREE.Vector2(1, 1) }, uNear: { value: 1 }, uFar: { value: 6000 }, uPx: { value: 0.1 }, uDpr: { value: 1 }, uTarget: { value: 2500 },
      uCamW: { value: new THREE.Matrix4() }, uR: { value: 0 }, uRmax: { value: 1 }, uSeed: { value: 0 }, uTime: { value: 0 }, uOrigin: { value: new THREE.Vector2(0.5, 0.5) },
      uGround: { value: new THREE.Vector3() }, uInk: { value: new THREE.Vector3() }, uEdge: { value: new THREE.Vector3() }, uSky: { value: new THREE.Color() }, uSeaHaze: { value: new THREE.Color() },
      uPersp: { value: 0 }, uExposure: { value: 0.92 }, uHaze: { value: 1 / 2600 }, uSea: { value: -1e4 }, uAoReal: { value: 1.25 }, uAoModel: { value: 1.0 }, uDark: { value: 0 },
    };
    this.U = U;
    const mk = (defs) => new THREE.ShaderMaterial({ uniforms: U, vertexShader: POST_VERT, fragmentShader: POST_FRAG, defines: Object.assign({ AO_SAMPLES: this.aoSamples }, defs), depthTest: false, depthWrite: false });
    this.postMats = { real: mk({ USE_REAL: 1 }), model: mk({ USE_MODEL: 1 }), mix: mk({ USE_REAL: 1, USE_MODEL: 1 }) };
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.postMats.real);
    this.quad.frustumCulled = false; this.post.add(this.quad);
    this.size = new THREE.Vector2();
    // the sky that lights the Real view
    this.sky = new Sky(); this.sky.scale.setScalar(10);
    this.skyScene = new THREE.Scene(); this.skyScene.add(this.sky);
    this.pmrem = new THREE.PMREMGenerator(r);
  }

  // ---------------------------------------------------------------- public
  set(mode, { x, y, instant = false } = {}) {
    if (mode !== 'model' && mode !== 'real') return;
    const from = this._shown();
    try { localStorage.setItem('fw:view', mode); } catch { /* storage unavailable */ }
    this.mode = mode;
    this._ui();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (instant || reduce || !this.enabled || from === mode) { this.anim = null; this._lens(); return; }
    const w = this.app.canvas.clientWidth || window.innerWidth, h = this.app.canvas.clientHeight || window.innerHeight;
    const rect = this.app.canvas.getBoundingClientRect();
    const u = x != null ? (x - rect.left) / w : 0.5, v = y != null ? 1 - (y - rect.top) / h : 0.5;
    // when interrupting a transition, carry on from where the ink is now
    let t0 = performance.now();
    if (this.anim) { const k = inkK(this.anim.to, this._progress()); t0 -= inkP(mode, k) * DURATION * 1000; }
    this.anim = { to: mode, t0, origin: this.anim ? this.anim.origin : [u, v], seed: Math.random() * 50 };
    this._lens();
  }
  setQuality({ pbr = this.opts.pbr, detail = this.opts.detail, ao = this.aoSamples } = {}) {
    this.opts.pbr = pbr; this.opts.detail = detail; this.list = null;
    if (ao !== this.aoSamples && this.postMats) { this.aoSamples = ao; for (const m of Object.values(this.postMats)) { m.defines.AO_SAMPLES = ao; m.needsUpdate = true; } }
  }
  toggle(ev) { this.set(this._shown() === 'real' ? 'model' : 'real', ev ? { x: ev.x, y: ev.y } : {}); }
  bindUI(root = document) {
    this.el = root.querySelector('#viewmode');
    if (!this.el) return;
    this.el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-view]'); if (!b || b.dataset.view === this.mode) return;
      // the ink lands at the centre of the screen when chosen from the toolbar
      this.set(b.dataset.view);
    });
    // V drops the ink where the pointer is
    window.addEventListener('keydown', (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      // with the mouse locked (walk, fly) the ink lands at the crosshair
      if (e.key.toLowerCase() === 'v' && !e.metaKey && !e.ctrlKey) this.toggle(document.pointerLockElement ? null : this._pointer);
    });
    this.app.canvas.addEventListener('pointermove', (e) => { this._pointer = { x: e.clientX, y: e.clientY }; });
    this.app.canvas.addEventListener('pointerdown', (e) => { this._pointer = { x: e.clientX, y: e.clientY }; });
    this._ui();
  }
  onLoad() { this.list = null; this.scanT = 0; this._lens(); if (this.enabled) this._precompile(); }

  // ---------------------------------------------------------------- frame
  render() {
    const app = this.app, r = app.renderer, scene = app.scene, cam = app.cam.cam;
    if (r.xr.isPresenting) { this.renderXR(); return; }
    if (!this.enabled) { this._renderFallback(); return; }
    const now = performance.now();
    if (!this.list || now - this.scanT > 1500) this._scan();
    let p = 1, both = false;
    if (this.anim) { p = this._progress(); if (p >= 1 && this.freeze == null) { this.anim = null; this._lens(); } else both = true; }
    const showReal = both || this.mode === 'real', showModel = both || this.mode === 'model';
    this._adapt(now, showReal && showModel);
    this._targets();
    if (showReal) {
      this._env(now);
      const hemi = app.hemi.intensity, envWas = scene.environment, bgWas = scene.background;
      app.hemi.intensity = hemi * this.look.hemi; scene.environment = this.env;
      // walk and fly see the horizon: the same sky that lights the scene is drawn behind it
      if (cam.isPerspectiveCamera) { scene.background = this.env; scene.backgroundIntensity = this.look.sky; }
      this._swap('real');
      r.setRenderTarget(this.rtReal); r.render(scene, cam);
      this._restore();
      app.hemi.intensity = hemi; scene.environment = envWas; scene.background = bgWas;
    }
    if (showModel) {
      // model frames skip the shadow map (the model view has no cast shadows); a pending update waits for the Real view
      const pend = r.shadowMap.needsUpdate; if (!showReal) r.shadowMap.needsUpdate = false;
      const fog = scene.fog, ca = r.getClearAlpha(); scene.fog = null; r.setClearAlpha(0);
      this._swap('model');
      r.setRenderTarget(this.rtModel); r.render(scene, cam);
      this._restore();
      scene.fog = fog; r.setClearAlpha(ca); if (!showReal) r.shadowMap.needsUpdate = pend;
    }
    r.setRenderTarget(null);
    this._uniforms(p, now);
    this.quad.material = both ? this.postMats.mix : showReal ? this.postMats.real : this.postMats.model;
    r.render(this.post, this.postCam);
  }
  // WebXR: the post chain is bypassed (the headset needs its own stereo framebuffer and frame budget). The scene is
  // drawn directly: Real keeps its physically based twins and sky light, tone-mapped by the renderer; Model keeps its
  // massing and contours but has no screen-space edges or occlusion.
  renderXR() {
    const app = this.app, r = app.renderer, scene = app.scene, cam = app.cam.cam, now = performance.now();
    if (!this.list || now - this.scanT > 1500) this._scan();
    if (this.anim) { this.anim = null; this._lens(); }
    if (this.mode === 'real' && this.enabled) {
      this._env(now);
      const hemi = app.hemi.intensity, envWas = scene.environment, bgWas = scene.background;
      app.hemi.intensity = hemi * this.look.hemi; scene.environment = this.env; scene.background = this.env; scene.backgroundIntensity = this.look.sky;
      r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = this.look.exposure / 0.6;
      this._swap('real'); r.render(scene, cam); this._restore();
      app.hemi.intensity = hemi; scene.environment = envWas; scene.background = bgWas;
    } else {
      const fog = scene.fog, bgWas = scene.background, th = this._theme();
      scene.fog = null; r.toneMapping = THREE.NoToneMapping;
      scene.background = (this._xrPaper ||= new THREE.Color()).setRGB(th.groundV.x, th.groundV.y, th.groundV.z, THREE.SRGBColorSpace);
      this._swap('model'); r.render(scene, cam); this._restore();
      scene.fog = fog; scene.background = bgWas;
    }
  }
  _renderFallback() {
    // WebGL 1: no depth textures or multisampled targets, so no edges, occlusion or ink; the materials still switch
    const app = this.app;
    if (!this.list || performance.now() - this.scanT > 1500) this._scan();
    if (this.mode === 'model') { this._swap('model'); app.renderer.render(app.scene, app.cam.cam); this._restore(); }
    else app.renderer.render(app.scene, app.cam.cam);
  }
  _shown() { return this.anim ? this.anim.to : this.mode; }
  _progress() {
    if (!this.anim) return 1;
    if (this.freeze != null) return this.freeze;
    return Math.min(1, (performance.now() - this.anim.t0) / (DURATION * 1000));
  }
  _uniforms(p, now) {
    const U = this.U, app = this.app, c = app.cam, r = app.renderer;
    const th = this._theme();
    U.uRes.value.copy(this.size);
    if (c.cam.isPerspectiveCamera) {
      const t = Math.tan(c.cam.fov * Math.PI / 360);
      U.uPersp.value = 1; U.uHalf.value.set(t * c.cam.aspect, t);
      U.uNear.value = c.cam.near; U.uFar.value = c.cam.far; U.uTarget.value = 60;
      U.uPx.value = 2 * t / this.size.y;
    } else {
      U.uPersp.value = 0;
      U.uHalf.value.set((c.cam.right - c.cam.left) / 2, (c.cam.top - c.cam.bottom) / 2);
      U.uNear.value = c.cam.near; U.uFar.value = c.cam.far; U.uTarget.value = c.dist;
      U.uPx.value = (c.cam.top - c.cam.bottom) / this.size.y;
    }
    U.uDpr.value = r.getPixelRatio() * this.scale;
    U.uCamW.value.copy(c.cam.matrixWorld);
    U.uGround.value.copy(th.groundV); U.uInk.value.copy(th.inkV); U.uEdge.value.copy(th.dark ? th.groundV : th.inkV); U.uDark.value = th.dark ? 1 : 0;
    r.getClearColor(U.uSky.value);
    U.uSea.value = app.world?.seaLevel ?? -1e4; U.uExposure.value = this.look.exposure;
    U.uTime.value = (now / 1000) % 100;
    if (this.anim) {
      const [u, v] = this.anim.origin, asp = this.size.x / this.size.y;
      let rmax = 0; for (const [cx, cy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) rmax = Math.max(rmax, Math.hypot((cx - u) * asp, cy - v));
      rmax = rmax * 1.22 + 0.08;   // the lobes can pull the rim in by ~16% and the fibres by 0.045
      // toward Real the drop lands and spreads (fast, then slowing); toward Model the colour drains back to the tap point
      const k = inkK(this.anim.to, p);
      U.uR.value = k * rmax; U.uRmax.value = rmax; U.uOrigin.value.set(u, v); U.uSeed.value = this.anim.seed;
    }
  }
  _targets() {
    const r = this.app.renderer; const s = r.getDrawingBufferSize(new THREE.Vector2()).multiplyScalar(this.scale).floor();
    if (this.rtReal && s.equals(this.size)) return;
    this.size.copy(s);
    this.rtReal?.dispose(); this.rtModel?.dispose(); this.rtReal?.depthTexture?.dispose(); this.rtModel?.depthTexture?.dispose();
    const mk = (type) => {
      const dt = new THREE.DepthTexture(s.x, s.y); dt.type = THREE.UnsignedIntType;
      return new THREE.WebGLRenderTarget(s.x, s.y, { type, samples: 4, depthTexture: dt, depthBuffer: true });
    };
    this.rtReal = mk(this.hdr ? THREE.HalfFloatType : THREE.UnsignedByteType);
    this.rtModel = mk(THREE.UnsignedByteType);
    this.U.tReal.value = this.rtReal.texture; this.U.tRealD.value = this.rtReal.depthTexture;
    this.U.tModel.value = this.rtModel.texture; this.U.tModelD.value = this.rtModel.depthTexture;
  }
  _adapt(now, both) {
    // keep frames near 60 Hz: drop the render scale in steps after ~1.5 s of slow frames, raise it after ~4 s of fast
    // ones; the two-view frames of a switch do not count
    const dt = this._last ? Math.min(0.25, (now - this._last) / 1000) : 1 / 60; this._last = now;
    if (!this.adaptive || both || document.hidden) return;
    this._ema += (dt - this._ema) * 0.08;
    if (this._ema > 1 / 42) { this._slow += dt; this._fast = 0; } else if (this._ema < 1 / 57) { this._fast += dt; this._slow = 0; } else { this._slow = 0; this._fast = 0; }
    if (this._slow > 1.5 && this.scale > 0.6) { this.scale = Math.max(0.6, this.scale - 0.1); this._slow = 0; this._ema = 1 / 50; }
    if (this._fast > 4 && this.scale < 1) { this.scale = Math.min(1, this.scale + 0.1); this._fast = 0; }
  }
  _env(now) {
    const sd = this.app.sunDir; if (!sd) return;
    if (this.env && (sd.angleTo(this.envSun) < 0.035 || now - this.envT < 2000)) return;
    const u = this.sky.material.uniforms, dusk = this.app.dark;
    u.turbidity.value = dusk ? 6 : 3.2; u.rayleigh.value = dusk ? 2.4 : 1.1; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.78;
    u.sunPosition.value.copy(sd);
    const old = this.envRT;
    this.envRT = this.pmrem.fromScene(this.skyScene, 0.02, 0.1, 100);
    this.env = this.envRT.texture; old?.dispose();
    this.envSun.copy(sd); this.envT = now;
  }

  // ---------------------------------------------------------------- materials
  _theme() {
    const dark = !!this.app.dark;
    if (this._th?.dark === dark) return this._th;
    const T = dark ? MODEL_THEME.dark : MODEL_THEME.light;
    this._th = { dark, T, groundV: srgb(T.ground), inkV: srgb(T.ink) };
    const M = this.modelMats;
    if (M.ground) this._paint();
    return this._th;
  }
  _paint() {
    const { T } = this._th, M = this.modelMats;
    M.ground.uniforms.uCol.value.copy(srgb(T.ground)); M.ground.uniforms.uInk.value.copy(srgb(T.ink)); M.ground.uniforms.uWater.value.copy(srgb(T.water));
    M.ground.uniforms.uLineA.value = T.line; M.ground.uniforms.uRelief.value = this._th.dark ? 0.2 : 0.08;
    M.water.uniforms.uCol.value.copy(srgb(T.water));
    for (const k of ['mass', 'massD']) M[k].uniforms.uCol.value.copy(srgb(T.mass));
    for (const k of ['flora', 'floraD']) M[k].uniforms.uCol.value.copy(srgb(T.flora));
    M.accent.uniforms.uCol.value.copy(srgb(T.accent));
  }
  _modelMats() {
    if (this.modelMats.ground) return this.modelMats;
    const key = new THREE.Vector3(-0.45, 0.75, 0.48).normalize();
    const mk = (frag, extra = {}, side = THREE.FrontSide) => new THREE.ShaderMaterial({
      vertexShader: MODEL_VERT, fragmentShader: frag, side, fog: false, lights: false,
      uniforms: Object.assign({ uCol: { value: new THREE.Vector3(1, 1, 1) }, uKey: { value: key } }, extra),
    });
    const M = this.modelMats;
    M.ground = mk(MODEL_FRAG.ground, { uInk: { value: new THREE.Vector3() }, uWater: { value: new THREE.Vector3() }, uLineA: { value: 0.3 }, uStep: { value: 0 }, uSea: { value: -1e4 }, uRelief: { value: 0.08 } }, THREE.DoubleSide);
    M.water = mk(MODEL_FRAG.water, {}, THREE.DoubleSide);
    M.mass = mk(MODEL_FRAG.mass, { uClass: { value: 1 } });
    M.massD = mk(MODEL_FRAG.mass, { uClass: { value: 1 } }, THREE.DoubleSide);
    M.flora = mk(MODEL_FRAG.mass, { uClass: { value: 0.6 } });
    M.floraD = mk(MODEL_FRAG.mass, { uClass: { value: 0.6 } }, THREE.DoubleSide);
    M.accent = mk(MODEL_FRAG.mass, { uClass: { value: 1 } }, THREE.DoubleSide);
    this._th = null; this._theme(); this._paint();
    return M;
  }
  _kind(o) {
    const n = o.name || '';
    if (/^(terrain|skirt|apron|backdrop|dunes)$/.test(n)) return 'earth';
    if (/^(sea|tanks)$/.test(n)) return 'water';
    if (/^(tree-|crop-)/.test(n)) return 'flora';
    if (/^(masonry|solid|trim)$/.test(n)) return 'stone';
    return 'other';
  }
  _scan() {
    // every drawable in the scene, with what it becomes in each view
    const app = this.app, keep = new Set([app.pathLine, app.marker?.mesh, ...(app.markers || [])]);
    const trav = new Set(); app.traveller?.root?.traverse((o) => trav.add(o));
    const M = this._modelMats();
    const list = [];
    app.scene.traverse((o) => {
      if (!(o.isMesh || o.isPoints || o.isLine) || keep.has(o) || o.userData.vmKeep) return;
      if (keep.has(o.parent) && o.parent) return;
      if (Array.isArray(o.material)) return;
      const n = o.name || '', mat = o.material, kind = this._kind(o);
      let model = null, hide = false;
      if (o.isPoints || o.isLine || HIDE_IN_MODEL.test(n) || (mat && mat.isShaderMaterial && !/^(sea|tanks)$/.test(n))) hide = true;
      else if (trav.has(o)) model = M.accent;
      else if (kind === 'earth') model = M.ground;
      else if (kind === 'water') model = M.water;
      else if (kind === 'flora') model = mat?.side === THREE.DoubleSide ? M.floraD : M.flora;
      else model = mat?.side === THREE.DoubleSide ? M.massD : M.mass;
      list.push({ o, model, hide, kind, real: this._twin(mat, kind) });
    });
    this.list = list; this.scanT = performance.now();
  }
  _twin(mat, kind) {
    // a physically based copy of a Lambert or Phong material, keeping its shader edits (cloud shadows, masonry, sea)
    if (!mat || !(mat.isMeshLambertMaterial || mat.isMeshPhongMaterial) || !this.opts.pbr) return null;
    if (!this.opts.detail) kind = 'flat:' + kind;
    let byKind = this.twins.get(mat); if (!byKind) { byKind = {}; this.twins.set(mat, byKind); }
    if (byKind[kind]) return byKind[kind];
    const K = REAL_KIND[kind.replace('flat:', '')] || REAL_KIND.other;
    const s = new THREE.MeshStandardMaterial({ vertexColors: mat.vertexColors, color: mat.color, map: mat.map, side: mat.side, transparent: mat.transparent, opacity: mat.opacity,
      emissive: mat.emissive, emissiveIntensity: mat.emissiveIntensity, roughness: K.rough, metalness: 0, polygonOffset: mat.polygonOffset, polygonOffsetFactor: mat.polygonOffsetFactor, polygonOffsetUnits: mat.polygonOffsetUnits,
      alphaTest: mat.alphaTest, depthWrite: mat.depthWrite, flatShading: mat.flatShading });
    s.vmEnv = kind.endsWith('water') ? 1.25 : 1;
    const prev = mat.onBeforeCompile, patch = kind.startsWith('flat:') ? () => {} : realPatch(kind);
    const hasPrev = prev && prev !== THREE.Material.prototype.onBeforeCompile;
    s.onBeforeCompile = (sh, r) => { if (hasPrev) prev.call(s, sh, r); patch(sh); };
    // programs must differ per original edit and per kind: build a key from both
    const base = mat.customProgramCacheKey !== THREE.Material.prototype.customProgramCacheKey ? mat.customProgramCacheKey() : (hasPrev ? 'f' + hashStr(prev.toString()) : 'plain');
    s.customProgramCacheKey = () => 'vm-real:' + kind + ':' + base;
    s.userData = mat.userData;   // shared uniforms (the sea's clock) stay shared
    byKind[kind] = s;
    return s;
  }
  _swap(mode) {
    const list = this.list; if (!list) return;
    if (mode === 'model') {
      const M = this.modelMats, c = this.app.cam;
      M.ground.uniforms.uStep.value = Math.log2(Math.max(0.25, c.viewH / 55));
      M.ground.uniforms.uSea.value = this.app.world?.seaLevel ?? -1e4;
    }
    for (const e of list) {
      e.mat = e.o.material; e.vis = e.o.visible;
      if (mode === 'model') { if (e.hide) e.o.visible = false; else if (e.model) e.o.material = e.model; }
      else if (e.real) {
        const s = e.real, m = e.mat;
        if (m.color) s.color.copy(m.color);
        if (m.emissive) s.emissive.copy(m.emissive);
        s.envMapIntensity = s.vmEnv * this.look.env;
        s.opacity = m.opacity; s.transparent = m.transparent; s.visible = m.visible; s.side = m.side; s.depthWrite = m.depthWrite;
        e.o.material = s;
      }
    }
  }
  _restore() { const list = this.list; if (!list) return; for (const e of list) { e.o.material = e.mat; e.o.visible = e.vis; } }
  _precompile() {
    // compile the other view's programs in the background (KHR_parallel_shader_compile where available), so the
    // first switch does not stall; the shown view compiles on its first frame as before
    const app = this.app, r = app.renderer, other = this.mode === 'real' ? 'model' : 'real';
    if (!r.compileAsync) return;
    try {
      this._scan();
      const envWas = app.scene.environment;
      if (other === 'real') { this._env(performance.now()); app.scene.environment = this.env; }
      // programs depend on the target (linear output into it, not sRGB to the screen), so compile against it
      this._targets(); const rtWas = r.getRenderTarget(); r.setRenderTarget(other === 'real' ? this.rtReal : this.rtModel);
      const fog = app.scene.fog; if (other === 'model') app.scene.fog = null;
      this._swap(other);
      const done = r.compileAsync(app.scene, app.cam.cam);   // collects the materials synchronously, then waits
      this._restore(); app.scene.environment = envWas; app.scene.fog = fog; r.setRenderTarget(rtWas);
      done.catch((e) => console.warn('[view] precompile', e));
    } catch (e) { this._restore(); console.warn('[view] precompile', e); }
  }

  // ---------------------------------------------------------------- interface
  _ui() {
    if (!this.el) return;
    for (const b of this.el.querySelectorAll('[data-view]')) b.setAttribute('aria-pressed', String(b.dataset.view === this.mode));
    document.body.dataset.view = this.mode;
  }
  _lens() {
    // the period lens (a sepia filter on the canvas) belongs to the Real view only
    const c = this.app.canvas; if (!c) return;
    const model = this.mode === 'model' || !!this.anim;
    c.classList.toggle('vm-model', model);
    document.querySelector('#lens')?.classList.toggle('vm-off', model);
  }
}

// the ink's radius (0..1 of full cover) at progress p: toward Real it lands and spreads, fast then slowing; toward
// Model the colour drains back to the tap point. inkP inverts it, so an interrupted switch reverses from where it is.
function inkK(to, p) { return to === 'real' ? 1 - Math.pow(1 - p, 2.6) : Math.pow(1 - p, 1.7); }
function inkP(to, k) { k = Math.min(1, Math.max(0, k)); return to === 'real' ? 1 - Math.pow(1 - k, 1 / 2.6) : 1 - Math.pow(k, 1 / 1.7); }
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
