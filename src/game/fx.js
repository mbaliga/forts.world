// Sea surf, masonry shading and particle effects (spray, smoke, gunfire, splashes).
import * as THREE from 'three';
import { pointInPoly, clamp, rng, makeNoise } from '../core/geom.js';
import { C, V } from '../core/mesher.js';
import { ATMO } from './atmo.js';

// one swell function shared by the sea surface and the surf band, so foam rides on the waves
export const WAVE_GLSL = `
uniform float uSeaAmp;
float seaWave(vec2 p, float t) {
  // long swell from the west-south-west, a cross swell and short chop (metres)
  vec2 d1 = normalize(vec2(0.9, 0.44)), d2 = normalize(vec2(0.55, 0.83)), d3 = normalize(vec2(-0.3, 0.95));
  float w = sin(dot(p, d1) * 0.085 - t * 0.92) * 0.34;
  w += sin(dot(p, d2) * 0.19 - t * 1.31 + 1.7) * 0.13;
  w += sin(dot(p, d3) * 0.43 - t * 2.1 + 0.4) * 0.05;
  w += sin((p.x + p.y) * 0.71 - t * 2.9) * 0.025;
  return w * uSeaAmp;
}
`;
const NOISE_GLSL = `
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
`;

// ---------------------------------------------------------------- sea
export function seaMaterial(color, o = {}) {
  // Depth-tinted coastal water: clear green over rock and sand in the shallows, deepening to slate-teal offshore;
  // wave slopes reflect the sky, and the normals come from the swell itself so the surface reads smooth.
  const m = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, shininess: 120, specular: new THREE.Color(0xc9d6d4) });
  m.userData.uTime = { value: 0 };
  const U = {
    uTime: m.userData.uTime, uDepth: { value: o.depthTex || null }, uDOrg: { value: new THREE.Vector2(...(o.origin || [0, 0])) }, uDSize: { value: new THREE.Vector2(...(o.size || [1, 1])) },
    uDeep: { value: new THREE.Color(o.deep || '#24525a') }, uMid: { value: new THREE.Color(o.mid || color) }, uShallow: { value: new THREE.Color(o.shallow || '#7aa892') },
    uSilt: { value: new THREE.Color(o.silt || '#8f9a72') }, uSky: { value: new THREE.Color(o.sky || '#cfdcdc') }, uHasDepth: { value: o.depthTex ? 1 : 0 },
  };
  m.userData.U = U;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = 'uniform float uTime;\nvarying float vWave;\nvarying vec2 vSeaXZ;\nvarying vec3 vSeaN;\n' + WAVE_GLSL + '\n' + sh.vertexShader
      .replace('#include <beginnormal_vertex>', `
      vec4 wq = modelMatrix * vec4(position, 1.0);
      vec2 pq = vec2(wq.x, -wq.z);
      float e = 1.5, hx = seaWave(pq + vec2(e, 0.0), uTime) - seaWave(pq - vec2(e, 0.0), uTime), hy = seaWave(pq + vec2(0.0, e), uTime) - seaWave(pq - vec2(0.0, e), uTime);
      vec3 objectNormal = normalize(vec3(-hx / (2.0 * e), 1.0, hy / (2.0 * e)));
      vSeaN = objectNormal;
      #ifdef USE_TANGENT
        vec3 objectTangent = vec3(tangent.xyz);
      #endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vec2 pp = vec2(wp.x, -wp.z);
      float wv = seaWave(pp, uTime);
      transformed.y += wv; vWave = wv; vSeaXZ = pp;`);
    sh.fragmentShader = `uniform float uTime; uniform sampler2D uDepth; uniform vec2 uDOrg; uniform vec2 uDSize; uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uShallow; uniform vec3 uSilt; uniform vec3 uSky; uniform float uHasDepth;
varying float vWave; varying vec2 vSeaXZ; varying vec3 vSeaN;
` + NOISE_GLSL + '\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      {
        float d = 1.0;
        if (uHasDepth > 0.5) { vec2 uv = (vSeaXZ - uDOrg) / uDSize; if (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) d = texture2D(uDepth, uv).r; }
        // d: 0 at the waterline, 1 at 12 m and deeper
        float n1 = vnoise(vSeaXZ * 0.025 + uTime * 0.01), n2 = vnoise(vSeaXZ * 0.11 - uTime * 0.02);
        vec3 c = mix(uShallow, uMid, smoothstep(0.02, 0.32, d + (n1 - 0.5) * 0.08));
        c = mix(c, uDeep, smoothstep(0.35, 0.95, d));
        // silt carried off the shore, patchy
        c = mix(c, uSilt, (1.0 - smoothstep(0.0, 0.18, d)) * 0.45 * smoothstep(0.3, 0.8, n2));
        c *= 0.94 + 0.16 * smoothstep(-0.45, 0.45, vWave);
        // sky reflected on the slopes that face the viewer, sparse whitecaps on the crests
        float tilt = 1.0 - clamp(vSeaN.y, 0.0, 1.0);
        c = mix(c, uSky, clamp(0.12 + tilt * 2.6, 0.0, 0.42));
        float cap = smoothstep(0.4, 0.52, vWave + 0.12 * vnoise(vSeaXZ * 0.35 + uTime * 0.08)) * smoothstep(0.62, 0.9, vnoise(vSeaXZ * 0.21 - uTime * 0.04));
        c = mix(c, vec3(0.88, 0.92, 0.92), cap * 0.3);
        diffuseColor.rgb = c;
        diffuseColor.a = mix(0.72, 0.95, smoothstep(0.0, 0.4, d));
      }`);
  };
  m.customProgramCacheKey = () => 'sea2';
  return m;
}

// seabed depth as a texture over the terrain grid (0 = waterline, 1 = 12 m or deeper)
export function seaDepthTexture(world) {
  const T = world.terrain, w = T.nx + 1, h = T.ny + 1, sea = world.seaLevel;
  const data = new Uint8Array(w * h * 4);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const d = Math.max(0, Math.min(1, (sea - T.h[j * w + i]) / 12)), k = (j * w + i) * 4;
    data[k] = Math.round(d * 255); data[k + 1] = data[k]; data[k + 2] = data[k]; data[k + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter; tex.needsUpdate = true;
  return { tex, origin: [T.vx(0), T.vy(0)], size: [T.vx(T.nx) - T.vx(0), T.vy(T.ny) - T.vy(0)] };
}

// ---------------------------------------------------------------- masonry
// Coursed ashlar in world space: blocks of varying length in each course, lime pointing, tide stain and
// rain streaks. It fades to the plain vertex colour when blocks shrink below a few pixels.
export function masonryMaterial(opts = {}) {
  const O = Object.assign({ row: 0.55, len: 1.25, mortar: 0.035, mortarColor: '#b9b3a3', tide: null, stain: '#2e3a33', paving: 0.95, rough: 0.5 }, opts);
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mc = C(O.mortarColor), st = C(O.stain);
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRow = { value: O.row }; sh.uniforms.uLen = { value: O.len }; sh.uniforms.uMortar = { value: O.mortar };
    sh.uniforms.uMortarCol = { value: new THREE.Vector3(...mc) }; sh.uniforms.uStain = { value: new THREE.Vector3(...st) };
    sh.uniforms.uTide = { value: O.tide ?? -1e4 }; sh.uniforms.uPave = { value: O.paving }; sh.uniforms.uRough = { value: O.rough };
    sh.vertexShader = 'varying vec3 vMP;\nvarying vec3 vMN;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vMP = (modelMatrix * vec4(position, 1.0)).xyz; vMN = normalize(mat3(modelMatrix) * normal);`);
    sh.fragmentShader = `uniform float uRow, uLen, uMortar, uTide, uPave, uRough; uniform vec3 uMortarCol, uStain;
varying vec3 vMP; varying vec3 vMN;
${NOISE_GLSL}
float h11(float x) { return fract(sin(x * 127.1) * 43758.5453); }
` + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      {
        vec3 n = normalize(vMN);
        bool top = abs(n.y) > 0.72;
        vec3 col;
        float detail, bh;
        if (top) {
          // flagstones: irregular cells (a Voronoi pattern), so paving reads as laid stone in any direction
          vec2 q = vec2(vMP.x, -vMP.z) / uPave;
          vec2 ip = floor(q), fp = fract(q);
          float d1 = 8.0, d2 = 8.0; vec2 cid = vec2(0.0);
          for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = vec2(h21(ip + g), h21(ip + g + 17.3)) * 0.8 + 0.1;
            vec2 r = g + o - fp; float d = dot(r, r);
            if (d < d1) { d2 = d1; d1 = d; cid = ip + g; } else if (d < d2) d2 = d;
          }
          float edge = (sqrt(d2) - sqrt(d1)) * uPave;
          float aa = fwidth(vMP.x) + fwidth(vMP.z);
          detail = 1.0 - smoothstep(0.08, 0.3, aa / uPave);
          float joint = 1.0 - smoothstep(0.015, 0.03 + aa * 0.8, edge);
          bh = h21(cid);
          float grain = 0.92 + 0.16 * vnoise(vec2(vMP.x, vMP.z) * 2.3 + bh * 9.0) * uRough;
          vec3 stone = diffuseColor.rgb * (0.86 + 0.24 * bh) * grain * mix(0.9, 1.0, smoothstep(0.0, 0.1, edge));
          vec3 jc = diffuseColor.rgb * 0.55;
          col = mix(diffuseColor.rgb * (0.96 + 0.08 * bh * detail), mix(stone, jc, joint), detail);
        } else {
          vec2 t = normalize(vec2(-n.z, n.x) + 1e-5);
          vec2 uv = vec2(dot(vec2(vMP.x, vMP.z), t), vMP.y);
          float rowH = uRow, baseLen = uLen;
          float row = floor(uv.y / rowH);
          float rh = h11(row + 17.0);
          float blen = baseLen * (0.7 + 0.65 * h11(row * 1.37 + 3.0));
          float u = uv.x + rh * blen * 3.0;
          float bi = floor(u / blen);
          float fu = fract(u / blen) * blen, fv = fract(uv.y / rowH) * rowH;
          float edge = min(min(fu, blen - fu), min(fv, rowH - fv));
          float aa = fwidth(uv.x) + fwidth(uv.y);
          detail = 1.0 - smoothstep(0.3, 0.75, aa / rowH);
          float mort = 1.0 - smoothstep(uMortar - aa * 0.6, uMortar + aa * 0.6, edge);
          bh = h21(vec2(bi, row));
          float tint = 0.85 + 0.28 * bh;
          float pillow = mix(0.86, 1.0, smoothstep(0.0, 0.1, edge));
          float arris = 1.0 + 0.05 * smoothstep(rowH - 0.09, rowH - 0.02, fv) * (1.0 - mort);
          float grain = 0.93 + 0.14 * vnoise(vec2(uv.x * 3.1, uv.y * 3.7) + bh * 9.0) * uRough;
          vec3 stone = diffuseColor.rgb * tint * pillow * arris * grain;
          stone *= mix(vec3(1.0), vec3(1.04, 1.0, 0.95), step(0.7, bh));
          // joints: recessed and shadowed, with only a little lime showing
          vec3 joint = mix(diffuseColor.rgb * 0.6, uMortarCol, 0.22);
          col = mix(diffuseColor.rgb * (0.97 + 0.06 * bh * detail), mix(stone, joint, mort), detail);
        }
        vec2 uv = top ? vec2(vMP.x, -vMP.z) : vec2(dot(vec2(vMP.x, vMP.z), normalize(vec2(-n.z, n.x) + 1e-5)), vMP.y);
        float row = floor(uv.y / uRow), bi = floor(uv.x / uLen);
        // weathering: rain streaks and lichen blotches on vertical faces
        if (!top) {
          float streak = vnoise(vec2(uv.x * 0.9, vMP.y * 0.06));
          col *= 1.0 - 0.16 * smoothstep(0.55, 0.95, streak);
          float blot = vnoise(vec2(uv.x, vMP.y) * 0.35);
          col = mix(col, col * vec3(0.92, 0.96, 0.86), smoothstep(0.62, 0.9, blot) * 0.6);
        }
        // tide line: wet, weed-dark stone below the reach of the waves
        float wet = 1.0 - smoothstep(uTide + 0.4, uTide + 2.6 + 0.6 * vnoise(vec2(uv.x * 0.4, 0.0)), vMP.y);
        col = mix(col, uStain * (0.75 + 0.5 * h21(vec2(bi, row + 31.0))), wet * (top ? 0.3 : 0.78));
        float salt = (1.0 - smoothstep(uTide + 2.4, uTide + 4.2, vMP.y)) * (1.0 - wet);
        col = mix(col, col * vec3(1.06, 1.06, 1.04), salt * 0.5);
        diffuseColor.rgb = col;
      }`);
  };
  return m;
}

// ---------------------------------------------------------------- surf band
// Distance field from every solid thing standing in the sea (walls, bastions, rock above water) on a 1 m grid,
// then a band of quads within `width` metres of it carrying distance and exposure to the swell.
export function surfField(world, width = 11) {
  const sea = world.seaLevel; if (sea == null) return null;
  const [x0, y0, x1, y1] = world.bounds, cell = 1;
  const nx = Math.ceil((x1 - x0) / cell), ny = Math.ceil((y1 - y0) / cell);
  const solid = new Uint8Array(nx * ny);
  const idx = (i, j) => j * nx + i;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const x = x0 + (i + 0.5) * cell, y = y0 + (j + 0.5) * cell;
    if (world.ground(x, y) > sea - 0.15) solid[idx(i, j)] = 1;
  }
  const fill = (poly) => {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
    for (const p of poly) { a = Math.min(a, p[0]); b = Math.min(b, p[1]); c = Math.max(c, p[0]); d = Math.max(d, p[1]); }
    for (let j = Math.max(0, Math.floor((b - y0) / cell)); j <= Math.min(ny - 1, Math.ceil((d - y0) / cell)); j++)
      for (let i = Math.max(0, Math.floor((a - x0) / cell)); i <= Math.min(nx - 1, Math.ceil((c - x0) / cell)); i++)
        if (pointInPoly(x0 + (i + 0.5) * cell, y0 + (j + 0.5) * cell, poly)) solid[idx(i, j)] = 1;
  };
  for (const w of world.walls) {
    const B = w.built; if (!B) continue;
    const { pts, ov } = B, th = w.o.thick ?? 3, N = pts.length, spans = w.closed ? N : N - 1;
    for (let i = 0; i < spans; i++) {
      const j = (i + 1) % N, k = th / 2 + 1.0;
      fill([[pts[i][0] - ov[i][0] * k, pts[i][1] - ov[i][1] * k], [pts[j][0] - ov[j][0] * k, pts[j][1] - ov[j][1] * k], [pts[j][0] + ov[j][0] * k, pts[j][1] + ov[j][1] * k], [pts[i][0] + ov[i][0] * k, pts[i][1] + ov[i][1] * k]]);
    }
  }
  for (const b of world.bastions) {
    const r = (b.rb ?? b.r) + 0.2, ci = Math.round((b.x - x0) / cell), cj = Math.round((b.y - y0) / cell), R = Math.ceil(r);
    for (let j = cj - R; j <= cj + R; j++) for (let i = ci - R; i <= ci + R; i++) {
      if (i < 0 || j < 0 || i >= nx || j >= ny) continue;
      if (Math.hypot(x0 + (i + 0.5) * cell - b.x, y0 + (j + 0.5) * cell - b.y) < r) solid[idx(i, j)] = 1;
    }
  }
  for (const pl of world.surfSolids || []) fill(pl);
  // chamfer distance transform
  const D = new Float32Array(nx * ny).fill(1e6);
  for (let k = 0; k < D.length; k++) if (solid[k]) D[k] = 0;
  const a = 1, b2 = Math.SQRT2;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const k = idx(i, j); let v = D[k];
    if (i > 0) v = Math.min(v, D[k - 1] + a);
    if (j > 0) { v = Math.min(v, D[k - nx] + a); if (i > 0) v = Math.min(v, D[k - nx - 1] + b2); if (i < nx - 1) v = Math.min(v, D[k - nx + 1] + b2); }
    D[k] = v;
  }
  for (let j = ny - 1; j >= 0; j--) for (let i = nx - 1; i >= 0; i--) {
    const k = idx(i, j); let v = D[k];
    if (i < nx - 1) v = Math.min(v, D[k + 1] + a);
    if (j < ny - 1) { v = Math.min(v, D[k + nx] + a); if (i < nx - 1) v = Math.min(v, D[k + nx + 1] + b2); if (i > 0) v = Math.min(v, D[k + nx - 1] + b2); }
    D[k] = v;
  }
  // soften the chamfer staircase so the surf bands follow smooth curves
  for (let pass = 0; pass < 3; pass++) {
    const E = D.slice();
    for (let j = 1; j < ny - 1; j++) for (let i = 1; i < nx - 1; i++) {
      const k = idx(i, j); if (solid[k]) continue;
      let sum = 0, w = 0;
      for (let b = -1; b <= 1; b++) for (let a2 = -1; a2 <= 1; a2++) { const q = k + b * nx + a2; const wt = a2 === 0 && b === 0 ? 4 : (a2 === 0 || b === 0 ? 2 : 1); sum += D[q] * wt; w += wt; }
      E[k] = Math.max(0.05, sum / w);
    }
    D.set(E);
  }
  return { D, solid, nx, ny, x0, y0, cell, width, sea };
}

export function surfMesh(world, F, opts = {}) {
  const { D, nx, ny, x0, y0, cell, width, sea } = F;
  const wave = opts.from ?? [0.898, 0.439]; // direction the swell travels (plan)
  const calm = opts.calm ?? 0.22;
  const at = (i, j) => D[Math.max(0, Math.min(ny - 1, j)) * nx + Math.max(0, Math.min(nx - 1, i))];
  const pos = [], dd = [], ex = [];
  const vert = (i, j) => {
    // distance at the cell corner: average of the four cells sharing it
    const d = (at(i - 1, j - 1) + at(i, j - 1) + at(i - 1, j) + at(i, j)) / 4;
    const gx = at(i, j) + at(i, j - 1) - at(i - 1, j) - at(i - 1, j - 1), gy = at(i, j) + at(i - 1, j) - at(i, j - 1) - at(i - 1, j - 1);
    const gl = Math.hypot(gx, gy) || 1;
    const facing = -(gx / gl * wave[0] + gy / gl * wave[1]); // outward normal against the travel direction
    const e = calm + (1 - calm) * Math.pow(clamp(facing * 0.5 + 0.5, 0, 1), 1.6);
    pos.push(x0 + i * cell, sea, -(y0 + j * cell)); dd.push(d); ex.push(e);
  };
  for (let j = 1; j < ny; j++) for (let i = 1; i < nx; i++) {
    const k = j * nx + i, v = D[k];
    if (v <= 0 || v > width) continue;
    const s = pos.length / 3;
    vert(i, j); vert(i + 1, j); vert(i + 1, j + 1); vert(i, j + 1);
    void s;
  }
  const n = pos.length / 3;
  const index = [];
  for (let q = 0; q < n; q += 4) index.push(q, q + 2, q + 1, q, q + 3, q + 2);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aD', new THREE.Float32BufferAttribute(dd, 1));
  g.setAttribute('aExp', new THREE.Float32BufferAttribute(ex, 1));
  g.setIndex(index);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uLight: { value: 1 }, uWidth: { value: width }, uSeaAmp: ATMO.uSeaAmp },
    vertexShader: `uniform float uTime; attribute float aD; attribute float aExp; varying float vD; varying float vExp; varying vec2 vXZ; varying float vSurge;
${WAVE_GLSL}
void main() {
  vec3 p = position; vec2 pp = vec2(p.x, -p.z);
  float sw = seaWave(pp, uTime);
  // surge: water heaped against the wall foot as each swell arrives, then draining back
  float arrive = uTime * 0.92 - dot(pp, normalize(vec2(0.9, 0.44))) * 0.085;
  float s = pow(max(0.0, sin(arrive + 0.6)), 4.0);
  float near = max(0.0, 1.0 - aD / 2.6);
  p.y += sw + 0.15 + aExp * 1.7 * s * near * near;
  vD = aD; vExp = aExp; vXZ = pp; vSurge = s;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,
    fragmentShader: `uniform float uTime; uniform float uLight; uniform float uWidth; varying float vD; varying float vExp; varying vec2 vXZ; varying float vSurge;
${NOISE_GLSL}
void main() {
  float lam = 4.6 + 1.6 * vnoise(vXZ * 0.04);
  float k = fract((vD + uTime * (1.3 + 0.8 * vExp)) / lam + 0.22 * vnoise(vXZ * 0.11) + 0.08 * vnoise(vXZ * 0.5));
  float crest = exp(-k * 6.0) + 0.3 * exp(-(1.0 - k) * 16.0);
  float fw = clamp(fwidth(vXZ.x) * 2.0, 0.0, 1.0);
  float lace = vnoise(vXZ * 0.85 + vec2(uTime * 0.15, -uTime * 0.11)) * 0.55 + vnoise(vXZ * 2.4 - uTime * 0.35) * 0.3 + mix(vnoise(vXZ * 5.3 + uTime * 0.2), 0.5, fw) * 0.15;
  float breakup = smoothstep(0.2, 0.65, vnoise(vXZ * 0.07 + vec2(uTime * 0.03, 0.0)) + 0.25 * vExp);
  float foam = crest * smoothstep(0.32, 0.7, lace + 0.08) * breakup;
  foam += 0.35 * smoothstep(0.62, 0.9, lace) * (1.0 - smoothstep(1.0, 7.0, vD)) * vExp;
  // far away the bands shrink below a pixel and shimmer: fade them to a soft average instead
  float fb = fwidth(vD) / lam;
  foam = mix(foam, 0.12 * (0.25 + 0.75 * vExp) * (1.0 - smoothstep(2.0, 8.0, vD)), smoothstep(0.06, 0.25, fb));
  float wash = (1.0 - smoothstep(0.0, 2.2 + 1.6 * vExp, vD)) * (0.45 + 0.55 * smoothstep(0.2, 0.8, lace)) * (0.55 + 0.45 * vSurge);
  float a = max(foam * (0.25 + 0.75 * vExp), wash * (0.35 + 0.65 * vExp));
  a *= 1.0 - smoothstep(uWidth * 0.55, uWidth, vD);
  vec3 col = mix(vec3(0.78, 0.86, 0.86), vec3(0.97, 0.98, 0.97), smoothstep(0.2, 0.7, a)) * uLight;
  gl_FragColor = vec4(col, clamp(a * 0.95, 0.0, 0.95));
}`,
  });
  const mesh = new THREE.Mesh(g, mat);
  mesh.renderOrder = 2; mesh.name = 'surf'; mesh.frustumCulled = false;
  return mesh;
}

// spray emitters along the exposed foot of the walls
export function sprayEmitters(world, F, opts = {}) {
  const { D, nx, ny, x0, y0, cell, sea } = F;
  const wave = opts.from ?? [0.898, 0.439];
  const r = rng(world.seed * 41 + 7);
  const out = [], spacing = opts.spacing ?? 13, minExp = opts.minExp ?? 0.55;
  const at = (i, j) => D[Math.max(0, Math.min(ny - 1, j)) * nx + Math.max(0, Math.min(nx - 1, i))];
  const cand = [];
  for (let j = 2; j < ny - 2; j++) for (let i = 2; i < nx - 2; i++) {
    const v = at(i, j); if (v < 0.9 || v > 1.6) continue;
    const gx = at(i + 1, j) - at(i - 1, j), gy = at(i, j + 1) - at(i, j - 1), gl = Math.hypot(gx, gy) || 1;
    const e = -(gx / gl * wave[0] + gy / gl * wave[1]);
    if (e * 0.5 + 0.5 < minExp) continue;
    const px = x0 + (i + 0.5) * cell, py = y0 + (j + 0.5) * cell;
    if (opts.avoid && opts.avoid.some((pl) => pointInPoly(px, py, pl))) continue;
    cand.push({ x: x0 + (i + 0.5) * cell, y: y0 + (j + 0.5) * cell, ox: gx / gl, oy: gy / gl, e: e * 0.5 + 0.5 });
  }
  for (let k = cand.length - 1; k > 0; k--) { const q = Math.floor(r() * (k + 1)); [cand[k], cand[q]] = [cand[q], cand[k]]; }
  for (const c of cand) {
    if (out.some((o) => (o.x - c.x) ** 2 + (o.y - c.y) ** 2 < spacing * spacing)) continue;
    out.push(c);
  }
  // sync each burst with the swell arriving there (same phase as the surf surge)
  for (const c of out) {
    const arrive = (c.x * wave[0] + c.y * wave[1]) * 0.085;
    const base = 2 * Math.PI / 0.92;
    // the most exposed points burst with every swell, the rest with every second or third
    const every = c.e > 0.88 ? 1 : c.e > 0.72 ? 2 : 3;
    const period = base * every;
    const phase = (Math.PI / 2 - 0.6 + arrive) / 0.92 - 0.35 + base * Math.floor(r() * every);
    world.particles.push({
      kind: 'spray', x: c.x, y: c.y, h: sea + 0.2, n: Math.round(14 + 14 * c.e), period, phase,
      out: [c.ox, c.oy], up: [3.5 + 4 * c.e, 6 + 6 * c.e], outV: [0.3, 1.8], side: 1.6, g: 9.8, life: [1.2, 2.1], size: [0.5, 2.4 + c.e], color: '#f4f7f6', alpha: 0.82, spread: 0.18, seed: r() * 100,
    });
  }
  return out;
}

// ---------------------------------------------------------------- particles
// Each emitter is a burst repeated every `period` seconds (or a continuous stream when `stream` is set).
// All motion is computed on the GPU from per-particle constants.
export function particleSystem(world) {
  const em = world.particles;
  if (!em.length) return null;
  const pos = [], vel = [], prm = [], siz = [], col = [];
  for (const e of em) {
    const r = rng(Math.floor((e.seed ?? (e.x * 13.1 + e.y * 7.7)) * 1000) >>> 0 || 1);
    const n = e.n ?? 20;
    const c = C(e.color || '#ffffff');
    const ox = e.out ? e.out[0] : 0, oy = e.out ? e.out[1] : 0;
    for (let k = 0; k < n; k++) {
      const up = (e.up?.[0] ?? 1) + r() * ((e.up?.[1] ?? 1) - (e.up?.[0] ?? 1));
      const ov = (e.outV?.[0] ?? 0) + r() * ((e.outV?.[1] ?? 0) - (e.outV?.[0] ?? 0));
      const sd = (r() - 0.5) * 2 * (e.side ?? 0.5);
      const wx = e.wind ? e.wind[0] : 0, wy = e.wind ? e.wind[1] : 0;
      const vx = ox * ov - oy * sd + wx, vy = oy * ov + ox * sd + wy;
      const life = (e.life?.[0] ?? 1) + r() * ((e.life?.[1] ?? 1) - (e.life?.[0] ?? 1));
      const ph = e.stream ? (k / n) * (e.period ?? life) : (e.phase ?? 0) + r() * (e.spread ?? 0.1) * (e.period ?? 5);
      const jx = (r() - 0.5) * (e.jitter ?? 0.8), jy = (r() - 0.5) * (e.jitter ?? 0.8);
      pos.push(e.x + jx, e.h, -(e.y + jy));
      vel.push(vx, up, -vy);
      prm.push(e.period ?? 5, ph, life, e.g ?? 0);
      siz.push(e.size?.[0] ?? 1, e.size?.[1] ?? 2, e.alpha ?? 0.8, e.flash ? 1 : (e.dark ?? 0));
      col.push(c[0], c[1], c[2], e.nightOnly ? -1 : (e.drag ?? 0));
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aVel', new THREE.Float32BufferAttribute(vel, 3));
  g.setAttribute('aPrm', new THREE.Float32BufferAttribute(prm, 4));
  g.setAttribute('aSiz', new THREE.Float32BufferAttribute(siz, 4));
  g.setAttribute('aCol', new THREE.Float32BufferAttribute(col, 4));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 8 }, uLight: { value: 1 }, uNight: { value: 0 } },
    vertexShader: `uniform float uTime; uniform float uPx; uniform float uNight;
attribute vec3 aVel; attribute vec4 aPrm; attribute vec4 aSiz; attribute vec4 aCol;
varying float vA; varying vec3 vC; varying float vFlash; varying float vSeed;
void main() {
  vSeed = fract(aPrm.y * 7.31 + position.x * 0.137);
  float per = aPrm.x, ph = aPrm.y, life = aPrm.z, g = aPrm.w;
  float tt = mod(uTime - ph, per);
  if (tt > life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
  float f = tt / life;
  float drag = aCol.w; float nightOnly = step(drag, -0.5); drag = max(drag, 0.0);
  float tv = drag > 0.0 ? (1.0 - exp(-drag * tt)) / drag : tt;
  vec3 p = position + aVel * tv + vec3(0.0, -0.5 * g * tt * tt, 0.0);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = mix(aSiz.x, aSiz.y, sqrt(f)) * uPx;
  vA = aSiz.z * pow(1.0 - f, 1.4) * smoothstep(0.0, 0.06, f) * mix(1.0, uNight, nightOnly);
  vC = aCol.rgb; vFlash = aSiz.w;
}`,
    fragmentShader: `uniform float uLight; varying float vA; varying vec3 vC; varying float vFlash; varying float vSeed;
${NOISE_GLSL}
void main() {
  vec2 q = gl_PointCoord - 0.5;
  // lumpy, self-shaded puff: noise pushes the edge in and out, the lower right side sits in its own shadow
  float ang = vSeed * 6.2831;
  vec2 r = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * q;
  float lump = vnoise(r * 5.0 + vSeed * 17.0) * 0.55 + vnoise(r * 11.0 - vSeed * 9.0) * 0.25;
  float d = length(q) * 2.0 + (lump - 0.4) * 0.45;
  if (d > 1.0) discard;
  float soft = smoothstep(1.0, 0.3, d);
  float lit = vFlash > 0.5 ? 1.0 : 0.82 + 0.32 * clamp(0.5 - q.y - q.x * 0.4 + lump * 0.3, 0.0, 1.0);
  vec3 c = vFlash > 0.5 ? vC : vC * uLight * lit;
  gl_FragColor = vec4(c, vA * soft);
}`,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false; pts.renderOrder = 6; pts.name = 'particles';
  return pts;
}
