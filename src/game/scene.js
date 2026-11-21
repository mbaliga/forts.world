// Turns a finished World into three.js meshes.
import * as THREE from 'three';
import { smoothGeometry } from '../core/mesher.js';
import { Mesher, C, shade, mix, V } from '../core/mesher.js';
import { PAINT } from '../core/terrain.js';
import { makeNoise, fbm, clamp, DEG, TAU } from '../core/geom.js';
import { seaMaterial, seaDepthTexture, masonryMaterial, surfField, surfMesh, sprayEmitters, particleSystem } from './fx.js';
import { ATMO, addAtmo, cloudLayer, mistLayer } from './atmo.js';

export function terrainColorFn(world) {
  const P = world.pal, sea = world.seaLevel;
  const nz = makeNoise(world.seed * 3 + 1);
  const nz2 = makeNoise(world.seed * 5 + 2);
  const base = (paint, h, slope, x, y) => {
    switch (paint) {
      case PAINT.road: return mix(P.road, P.dry, 0.12 * (nz2(x / 9, y / 9) * 0.5 + 0.5));
      case PAINT.court: return P.court;
      case PAINT.field: return mix(P.field, P.grass, nz2(x / 20, y / 20) * 0.5 + 0.5);
      case PAINT.sand: return P.sand;
      case PAINT.rock: return slope > 0.5 ? P.cliff : P.rock;
      case PAINT.garden: return P.garden;
      case PAINT.mud: return P.mud;
      case PAINT.paved: return P.paved;
      // a path worn by feet and hooves: bare, compacted earth, darker along the middle
      case PAINT.worn: return mix(mix(P.road, P.dry, 0.35), shade(P.road, 0.82), 0.4 + 0.2 * (nz2(x / 3, y / 3) * 0.5 + 0.5));
      default: break;
    }
    if (sea != null && h < sea - 0.35) return mix(P.seabed, shade(P.seabed, 0.55), clamp((sea - h) / 9, 0, 1));
    if (sea != null && h < sea + 0.8) return slope > 0.4 ? mix(P.rock, P.mud, 0.4) : P.sand;
    if (slope > 0.62) return P.cliff;
    if (slope > 0.36) return mix(P.rock, P.cliff, (slope - 0.36) / 0.26);
    const n = fbm(nz, x / 52, y / 52, 3) * 0.5 + 0.5 + fbm(nz2, x / 13, y / 13, 2) * 0.1;
    const k = n < 0.3 ? 0 : n > 0.7 ? 1 : (n - 0.3) / 0.4;
    let c = mix(P.grass, P.dry, k * k * (3 - 2 * k));
    if (slope > 0.22) c = mix(c, P.rock, (slope - 0.22) / 0.14 * 0.6);
    return c;
  };
  const T = world.terrain;
  if (!T.tintFn) return base;
  // photographic colour wash over the land (not the sea bed), keeping the lighting from the mesh
  return (paint, h, slope, x, y) => {
    const c = base(paint, h, slope, x, y);
    if (sea != null && h < sea + 0.8) return c;
    const t = T.tintFn(x, y); if (!t) return c;
    return mix(c, [t[0] * 1.15, t[1] * 1.15, t[2] * 1.15], T.tintAmount * (paint === PAINT.court || paint === PAINT.paved ? 0.5 : 1));
  };
}

export function terrainGeometry(world, colorFn = terrainColorFn(world)) {
  // a smooth, indexed height-field: one vertex per lattice point with its own colour and a normal from the slope,
  // split along the same diagonal the navigation uses (00-10-11, 00-11-01)
  const T = world.terrain, H = T.h, Pn = T.paint, w = T.nx + 1, nV = w * (T.ny + 1), s = T.stride;
  const pos = new Float32Array(nV * 3), nor = new Float32Array(nV * 3), col = new Float32Array(nV * 3);
  const hAt = (i, j) => H[Math.min(T.ny, Math.max(0, j)) * w + Math.min(T.nx, Math.max(0, i))];
  for (let j = 0; j <= T.ny; j++) for (let i = 0; i <= T.nx; i++) {
    const k = j * w + i, x = T.vx(i), y = T.vy(j), h = H[k];
    pos[k * 3] = x; pos[k * 3 + 1] = h; pos[k * 3 + 2] = -y;
    const dx = (hAt(i + 1, j) - hAt(i - 1, j)) / (2 * s), dy = (hAt(i, j + 1) - hAt(i, j - 1)) / (2 * s);
    const nl = Math.hypot(dx, 1, dy);
    nor[k * 3] = -dx / nl; nor[k * 3 + 1] = 1 / nl; nor[k * 3 + 2] = dy / nl;
    // paint: blend with the neighbours so painted edges are soft, not stair-stepped
    let c = colorFn(Pn[k], h, 1 - 1 / nl, x, y);
    let n = 1;
    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ii = i + a, jj = j + b; if (ii < 0 || jj < 0 || ii > T.nx || jj > T.ny) continue;
      const kk = jj * w + ii; if (Pn[kk] === Pn[k]) continue;
      const c2 = colorFn(Pn[kk], h, 1 - 1 / nl, x, y); c = [c[0] + c2[0] * 0.5, c[1] + c2[1] * 0.5, c[2] + c2[2] * 0.5]; n += 0.5;
    }
    col[k * 3] = c[0] / n; col[k * 3 + 1] = c[1] / n; col[k * 3 + 2] = c[2] / n;
  }
  const idx = new Uint32Array(T.nx * T.ny * 6); let q = 0;
  for (let j = 0; j < T.ny; j++) for (let i = 0; i < T.nx; i++) {
    const a = j * w + i, b = a + 1, c = a + w + 1, d = a + w;
    // counter-clockwise seen from above (render z = -y)
    idx[q++] = a; idx[q++] = b; idx[q++] = c; idx[q++] = a; idx[q++] = c; idx[q++] = d;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  // fix winding if needed (normals must face up)
  { const ax = pos[0], az = pos[2], bx = pos[3], bz = pos[5], cx = pos[(w + 1) * 3], cz = pos[(w + 1) * 3 + 2];
    const ny = (bz - az) * (cx - ax) - (bx - ax) * (cz - az);
    if (ny < 0) for (let k = 0; k < idx.length; k += 3) { const t = idx[k + 1]; idx[k + 1] = idx[k + 2]; idx[k + 2] = t; } }
  g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}

function terrainSkirt(world) {
  const T = world.terrain, H = T.h, w = T.nx + 1;
  const M = new Mesher(0);
  const P = (i, j) => V(T.vx(i), T.vy(j), H[j * w + i]);
  const base = world.def.apron?.h ?? (world.seaLevel != null ? world.seaLevel - 10 : Math.min(...[H[0], H[w - 1], H[H.length - 1], H[H.length - w]]) - 2);
  const skirt = shade(world.pal.cliff, 0.8);
  for (let i = 0; i < T.nx; i++) {
    M.quadAway(V(T.vx(i), T.vy(0), base), V(T.vx(i + 1), T.vy(0), base), P(i + 1, 0), P(i, 0), skirt, V(T.vx(i), T.vy(1), base));
    M.quadAway(V(T.vx(i), T.vy(T.ny), base), V(T.vx(i + 1), T.vy(T.ny), base), P(i + 1, T.ny), P(i, T.ny), skirt, V(T.vx(i), T.vy(T.ny - 1), base));
  }
  for (let j = 0; j < T.ny; j++) {
    M.quadAway(V(T.vx(0), T.vy(j), base), V(T.vx(0), T.vy(j + 1), base), P(0, j + 1), P(0, j), skirt, V(T.vx(1), T.vy(j), base));
    M.quadAway(V(T.vx(T.nx), T.vy(j), base), V(T.vx(T.nx), T.vy(j + 1), base), P(T.nx, j + 1), P(T.nx, j), skirt, V(T.vx(T.nx - 1), T.vy(j), base));
  }
  return M.toGeometry();
}

// Konkan sailing boat: planked hull with sheer, gunwale, thwarts, a raked mast and a lateen yard and sail.
function boatMesh(b, pal) {
  const g = new THREE.Group();
  const M = new Mesher(0.05);
  const L = 7 * b.size, B = 2.0 * b.size, D = 1.1 * b.size;
  const hull = C(b.color), wood = C(b.wood || '#a07b55'), dark = shade(hull, 0.55);
  // stations along the hull: [x, half-beam, sheer height]
  const st = [[-0.5, 0.0, 0.95], [-0.42, 0.28, 0.75], [-0.3, 0.44, 0.62], [-0.1, 0.5, 0.58], [0.12, 0.49, 0.58], [0.3, 0.42, 0.64], [0.42, 0.26, 0.8], [0.5, 0.0, 1.05]];
  const P = (x, y, z) => [x * L, z * D, -y * B];
  for (let i = 0; i < st.length - 1; i++) {
    const [xa, ya, za] = st[i], [xb, yb, zb] = st[i + 1];
    for (const sg of [-1, 1]) {
      // topside plank, bottom plank down to the keel line
      M.quadAway(P(xa, sg * ya, za), P(xb, sg * yb, zb), P(xb, sg * yb * 0.8, -0.05), P(xa, sg * ya * 0.8, -0.05), [hull, hull, shade(hull, 0.8), shade(hull, 0.8)], [ (xa + xb) / 2 * L, 0.1, 0 ]);
      M.quadAway(P(xa, sg * ya * 0.8, -0.05), P(xb, sg * yb * 0.8, -0.05), P(xb, 0, -0.6), P(xa, 0, -0.6), [shade(hull, 0.8), shade(hull, 0.8), dark, dark], [(xa + xb) / 2 * L, 0.2, 0]);
      // gunwale rail
      M.quadAway(P(xa, sg * ya, za), P(xb, sg * yb, zb), P(xb, sg * yb, zb + 0.08), P(xa, sg * ya, za + 0.08), shade(wood, 0.8), [(xa + xb) / 2 * L, 0, 0]);
    }
  }
  // deck / floorboards
  const deck = st.map(([x, y]) => [x * L * 0.94, y * B * 0.92]).concat(st.slice().reverse().map(([x, y]) => [x * L * 0.94, -y * B * 0.92]));
  M.cap(deck, D * 0.12, wood);
  // thwarts
  for (const x of [-0.25, -0.05, 0.15, 0.3]) M.box(x * L, 0, 0.35 * b.size, B * 0.86, D * 0.12, D * 0.3, 0, shade(wood, 0.9));
  // stern-post and rudder
  M.box(-0.52 * L, 0, 0.14, 0.12, -D * 0.5, D * 0.6, 0, dark);
  const hm = new THREE.Mesh(M.toGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true }));
  hm.castShadow = true; g.add(hm);
  if (b.sail) {
    const s = b.size, mastH = 6.2 * s, mx = L * 0.12;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06 * s, 0.1 * s, mastH, 6), new THREE.MeshLambertMaterial({ color: 0x4a3a2a }));
    mast.position.set(mx, mastH / 2, 0); mast.rotation.z = 0.08; mast.castShadow = true; g.add(mast);
    // lateen yard: long spar slung from the masthead, low at the bow, high at the stern
    const ya = [mx + L * 0.5, 1.4 * s], yb = [mx - L * 0.55, mastH + 1.5 * s];
    const yl = Math.hypot(ya[0] - yb[0], ya[1] - yb[1]);
    const rig = new THREE.Group(); g.add(rig);
    const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.05 * s, 0.07 * s, yl, 5), new THREE.MeshLambertMaterial({ color: 0x5a4632 }));
    yard.position.set((ya[0] + yb[0]) / 2, (ya[1] + yb[1]) / 2, 0); yard.rotation.z = Math.atan2(yb[1] - ya[1], yb[0] - ya[0]) - Math.PI / 2; yard.castShadow = true; rig.add(yard);
    const sg = new THREE.BufferGeometry();
    const foot = [mx - L * 0.36, 0.9 * s];
    const v = new Float32Array([ya[0], ya[1], 0.05, yb[0], yb[1], 0.05, foot[0], foot[1], -0.35 * s, ya[0], ya[1], 0.05, foot[0], foot[1], -0.35 * s, (ya[0] + foot[0]) / 2, (ya[1] + foot[1]) / 2 - 0.2, -0.55 * s]);
    sg.setAttribute('position', new THREE.BufferAttribute(v, 3)); sg.computeVertexNormals();
    const sail = new THREE.Mesh(sg, new THREE.MeshLambertMaterial({ color: b.sailColor, side: THREE.DoubleSide }));
    sail.castShadow = true; rig.add(sail);
    // furled sail bundle along a lowered yard (shown at the landing)
    const furl = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * s, 0.11 * s, L * 0.78, 6), new THREE.MeshLambertMaterial({ color: new THREE.Color(b.sailColor).multiplyScalar(0.82) }));
    furl.position.set(-L * 0.02, D * 1.05, 0); furl.rotation.z = Math.PI / 2 - 0.05; furl.visible = false; g.add(furl);
    g.userData.rig = rig; g.userData.furl = furl;
  }
  if (b.flag) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(0.9 * b.size, 0.55 * b.size), new THREE.MeshLambertMaterial({ color: b.flag, side: THREE.DoubleSide }));
    f.position.set(-L * 0.5 - 0.4, D * 1.3 + 0.6, 0); g.add(f);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 4), new THREE.MeshLambertMaterial({ color: 0x3b3530 }));
    pole.position.set(-L * 0.5 + 0.05, D * 0.9 + 0.4, 0); g.add(pole);
  }
  if (b.oars) {
    const oarM = new THREE.MeshLambertMaterial({ color: 0x6b4c32 });
    for (let k = 0; k < b.oars; k++) for (const sg of [-1, 1]) {
      const o = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 2.6 * b.size), oarM);
      o.position.set(-L * 0.3 + (k + 0.5) * L * 0.6 / b.oars, D * 0.2, -sg * (B * 0.5 + 1.0 * b.size)); o.rotation.x = sg * 0.35; g.add(o);
    }
  }
  // gangplank, shown while moored
  const plank = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 1), new THREE.MeshLambertMaterial({ color: 0x8a6a48 }));
  plank.visible = false; plank.castShadow = true; g.userData.plank = plank;
  g.userData.L = L; g.userData.B = B; g.userData.D = D;
  return g;
}

// Ferry timetable: in along `path` (easing into the landing), moored for `dwell`, out the same way, away.
export function makeFerry(b) {
  const F = b.ferry, path = F.path;
  const seg = []; let Ltot = 0;
  for (let i = 0; i < path.length - 1; i++) { const l = Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]); seg.push(l); Ltot += l; }
  const sp = F.speed ?? 3.2;
  const Tin = (Ltot / sp) * 1.6, Tout = Tin * 0.9, dwell = F.dwell ?? 40, away = F.away ?? 20;
  const C = Tin + dwell + Tout + away;
  const at = (s) => {
    let i = 0; while (i < seg.length - 1 && s > seg[i]) { s -= seg[i]; i++; }
    const u = seg[i] ? Math.min(1, s / seg[i]) : 1, p = path[i], q = path[i + 1];
    return { x: p[0] + (q[0] - p[0]) * u, y: p[1] + (q[1] - p[1]) * u, dx: q[0] - p[0], dy: q[1] - p[1] };
  };
  const off = F.offset ?? 0;
  const state = (t) => {
    const tt = t + off, n = Math.floor(tt / C), u = tt - n * C;
    let phase, s, yaw, f;
    if (u < Tin) { phase = 'in'; f = u / Tin; s = Ltot * (1 - (1 - f) * (1 - f)); const p = at(s); yaw = Math.atan2(p.dy, p.dx); return { phase, n, u, x: p.x, y: p.y, yaw: f > 0.92 ? lerpAng(yaw, F.dock.dir * DEG, (f - 0.92) / 0.08) : yaw, C, Tin, dwell }; }
    if (u < Tin + dwell) { phase = 'dock'; const p = path[path.length - 1]; return { phase, n, u, x: p[0], y: p[1], yaw: F.dock.dir * DEG, C, Tin, dwell, since: u - Tin }; }
    if (u < Tin + dwell + Tout) { phase = 'out'; f = (u - Tin - dwell) / Tout; s = Ltot * (1 - f * f); const p = at(s); yaw = Math.atan2(-p.dy, -p.dx); return { phase, n, u, x: p.x, y: p.y, yaw: f < 0.1 ? lerpAng(F.dock.dir * DEG, yaw, f / 0.1) : yaw, C, Tin, dwell }; }
    const p = path[0]; return { phase: 'away', n, u, x: p[0], y: p[1], yaw: Math.atan2(path[1][1] - p[1], path[1][0] - p[0]), C, Tin, dwell };
  };
  return { b, state, C, Tin, dwell, Tout };
}
function lerpAng(a, b, t) { let d = b - a; while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU; return a + d * clamp(t, 0, 1); }

export function buildScene(world) {
  const group = new THREE.Group();
  const solidMat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'solid');
  const decalMat = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  const instMat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'inst');
  const terrMat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'terrain', { detail: true });
  const floraMat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), 'flora', { season: true });
  const pick = [];
  addAtmo(decalMat, 'decal');
  const disposables = [solidMat, decalMat, instMat, terrMat, floraMat];

  const tgeo = terrainGeometry(world);
  const terrain = new THREE.Mesh(tgeo, terrMat); terrain.name = 'terrain'; terrain.receiveShadow = true; terrain.castShadow = true;
  group.add(terrain); pick.push(terrain);
  const skirtM = new THREE.Mesh(terrainSkirt(world), solidMat); skirtM.name = 'skirt'; skirtM.receiveShadow = true; group.add(skirtM);

  // apron (big flat ground beyond the level)
  const [x0, y0, x1, y1] = world.bounds;
  const apH = world.def.apron?.h ?? (world.seaLevel != null ? world.seaLevel - 10 : null);
  if (apH != null) {
    const deep = world.seaLevel != null ? mix(world.pal.seabed, shade(world.pal.seabed, 0.55), clamp((world.seaLevel - apH) / 9, 0, 1)) : world.pal.dry;
    // a frame of ground around the bounds (never over the level itself, so dug moats and lakes stay visible)
    const T = world.terrain, F = 3000, h = apH - 0.02;
    const ax0 = T.x0, ay0 = T.y0, ax1 = T.x1, ay1 = T.y1;
    const am = new Mesher(0);
    const colA = world.def.apron?.color ? C(world.def.apron.color) : deep;
    const q = (a, b, c, d) => am.quad(V(a[0], a[1], h), V(b[0], b[1], h), V(c[0], c[1], h), V(d[0], d[1], h), colA);
    q([ax0 - F, ay0 - F], [ax1 + F, ay0 - F], [ax1 + F, ay0], [ax0 - F, ay0]);
    q([ax0 - F, ay1], [ax1 + F, ay1], [ax1 + F, ay1 + F], [ax0 - F, ay1 + F]);
    q([ax0 - F, ay0], [ax0, ay0], [ax0, ay1], [ax0 - F, ay1]);
    q([ax1, ay0], [ax1 + F, ay0], [ax1 + F, ay1], [ax1, ay1]);
    const ap = new THREE.Mesh(am.toGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true }));
    ap.receiveShadow = true; ap.name = 'apron';
    group.add(ap); disposables.push(ap.material);
  }

  const layers = [['solid', world.solid, solidMat, true], ['trim', world.trim, solidMat, false], ['decal', world.decal, decalMat, false]];
  if (world.mason !== world.solid) {
    const masonMat = addAtmo(masonryMaterial(Object.assign({ tide: world.seaLevel ?? -1e4 }, world.def.masonry || {})), 'mason');
    disposables.push(masonMat);
    layers.unshift(['masonry', world.mason, masonMat, true]);
  }
  for (const [name, M, mat, cast] of layers) {
    if (!M.triCount) continue;
    const mesh = new THREE.Mesh(M.toGeometry(), mat); mesh.name = name;
    mesh.castShadow = cast; mesh.receiveShadow = true;
    group.add(mesh); if (name === 'solid' || name === 'masonry') pick.push(mesh);
  }
  if (world.back && world.back.triCount) {
    const mesh = new THREE.Mesh(smoothGeometry(world.back.toGeometry(), 38), solidMat); mesh.receiveShadow = true; mesh.castShadow = false; mesh.name = 'backdrop';
    group.add(mesh);
  }
  for (const [name, B] of Object.entries(world.inst)) {
    const mesh = B.build(/^(tree-|crop-)/.test(name) ? floraMat : instMat);
    if (mesh) { mesh.name = name; group.add(mesh); }
  }
  // tank water
  let tankMat = null;
  if (world.waterM.triCount) {
    tankMat = addAtmo(new THREE.MeshPhongMaterial({ vertexColors: true, transparent: true, opacity: 0.9, shininess: 80, specular: new THREE.Color(0x7d9a90) }), 'tank');
    const mesh = new THREE.Mesh(world.waterM.toGeometry(), tankMat); mesh.receiveShadow = true; mesh.name = 'tanks';
    group.add(mesh); disposables.push(tankMat);
  }
  // sea
  let seaMat = null;
  if (world.seaLevel != null) {
    const pad = 900;
    const W = x1 - x0 + pad * 2, D = y1 - y0 + pad * 2;
    const seg = Math.min(190, Math.round(W / 9));
    const g = new THREE.PlaneGeometry(W, D, seg, Math.round(seg * D / W));
    g.rotateX(-Math.PI / 2);
    const dt0 = seaDepthTexture(world), wc = world.def.water || {};
    seaMat = addAtmo(seaMaterial(new THREE.Color().setRGB(...world.pal.water), { depthTex: dt0.tex, origin: dt0.origin, size: dt0.size, deep: wc.deep, mid: wc.mid, shallow: wc.shallow, silt: wc.silt, sky: world.def.light?.sky }), 'sea', { wet: false });
    disposables.push(dt0.tex);
    const sea = new THREE.Mesh(g, seaMat); sea.position.set((x0 + x1) / 2, world.seaLevel, -(y0 + y1) / 2);
    sea.receiveShadow = true; sea.name = 'sea'; sea.renderOrder = 1;
    group.add(sea); disposables.push(seaMat);
  }
  // breaking surf and spray where the sea meets the walls
  let surf = null;
  if (world.seaLevel != null && world.surf) {
    const F = surfField(world, world.surf.width ?? 11);
    surf = surfMesh(world, F, world.surf);
    group.add(surf); disposables.push(surf.material);
    if (world.surf.spray !== false) sprayEmitters(world, F, world.surf.spray || {});
  }
  const parts = particleSystem(world);
  if (parts) { group.add(parts); disposables.push(parts.material); }
  // sky: a cloud deck well above the highest ground, and mist over the water on sea forts
  const A = Object.assign({ clouds: 0.3, mist: world.seaLevel != null ? 0.22 : 0 }, world.def.atmo || {});
  let hiG = -Infinity; for (const v of world.terrain.h) if (v > hiG) hiG = v;
  const cloudAlt = Math.max(90, hiG + 75);
  const clouds = A.clouds > 0 ? cloudLayer(world, cloudAlt) : null;
  if (clouds) { group.add(clouds); disposables.push(clouds.material); }
  const mist = A.mist > 0 && world.seaLevel != null ? mistLayer(world, world.seaLevel + 2.2, A.mist) : null;
  if (mist) { group.add(mist); disposables.push(mist.material); }
  // siege ladders: rails and rungs (or rope and wooden rungs), each its own mesh, pivoting at its foot
  const ladders = [];
  for (const L of world.ladders) {
    const M = new Mesher(0.03), col = C(L.rope ? '#7a6a4a' : '#5a3d26');
    const [fx, fy, fh] = L.foot, [tx, ty, th] = L.top;
    const dx = tx - fx, dy = ty - fy, d2 = Math.hypot(dx, dy) || 1, nx = -dy / d2, ny = dx / d2, len = Math.hypot(dx, dy, th - fh);
    const bar = (a, b, r) => { const v = new THREE.Vector3(b[0] - a[0], b[2] - a[2], -(b[1] - a[1])), Lb = v.length(); const g = new THREE.CylinderGeometry(r, r, Lb, 5); g.translate(0, Lb / 2, 0); g.applyMatrix4(new THREE.Matrix4().makeTranslation(a[0] - fx, a[2] - fh, -(a[1] - fy)).multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize())))); M.geometry(g, null, col); };
    for (const sg of [-1, 1]) bar([fx + nx * L.w / 2 * sg, fy + ny * L.w / 2 * sg, fh], [tx + nx * L.w / 2 * sg, ty + ny * L.w / 2 * sg, th], L.rope ? 0.025 : 0.05);
    const n = Math.floor(len / 0.38);
    for (let i = 1; i < n; i++) { const t = i / n, cx = fx + dx * t, cy = fy + dy * t, ch = fh + (th - fh) * t; bar([cx - nx * L.w / 2, cy - ny * L.w / 2, ch], [cx + nx * L.w / 2, cy + ny * L.w / 2, ch], L.rope ? 0.02 : 0.035); }
    const geo = M.toGeometry(), mat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'ladder');
    const mesh = new THREE.Mesh(geo, mat); mesh.position.set(fx, fh, -fy); mesh.castShadow = true; mesh.name = 'ladder-' + L.id;
    // pivot axis: across the ladder, so it can fall away from the wall
    mesh.userData = { axis: new THREE.Vector3(nx, 0, -ny).normalize(), L };
    mesh.visible = !L.hidden;
    group.add(mesh); ladders.push(mesh); disposables.push(geo, mat);
  }
  // flags: cloth with a border or a swallow tail, all streaming downwind and rippling
  const flags = [];
  const windDir = Math.atan2(0.44, 0.9);
  for (const f of world.flags) {
    const L = f.size * 1.5, Hh = f.size, nx = 14, ny = 5;
    const g = new THREE.PlaneGeometry(L, Hh, nx, ny); g.translate(L / 2, -Hh / 2, 0);
    const pa = g.attributes.position, cols = new Float32Array(pa.count * 3);
    const c0 = new THREE.Color(f.color), c1 = new THREE.Color(f.border || f.color), c2 = new THREE.Color(f.stripe || f.color);
    for (let i = 0; i < pa.count; i++) {
      let x = pa.getX(i), y = -pa.getY(i);
      const u = x / L, v = y / Hh;
      // shapes: swallow-tailed pennant (Maratha bhagwa), tapering pennant, or a rectangle
      if (f.shape === 'swallow') { const notch = u > 0.62 ? (u - 0.62) / 0.38 * 0.42 : 0; if (Math.abs(v - 0.5) < notch) { pa.setX(i, L * 0.62 + (x - L * 0.62) * (Math.abs(v - 0.5) / 0.5)); } }
      if (f.shape === 'pennant') pa.setY(i, -(Hh / 2 + (y - Hh / 2) * (1 - u * 0.85)));
      const edge = Math.min(v, 1 - v, 1 - u) < (f.border ? 0.12 : -1);
      const stripe = f.stripe && Math.abs(v - 0.5) < 0.12;
      const c = edge ? c1 : stripe ? c2 : c0;
      cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const mat = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), 'flag');
    const m = new THREE.Mesh(g, mat);
    m.position.set(f.x, f.top - 0.1, -f.y);
    m.rotation.y = windDir;
    m.castShadow = true;
    group.add(m);
    flags.push({ m, base: Float32Array.from(g.attributes.position.array), L, phase: Math.random() * 6 });
    disposables.push(g, mat);
  }
  // boats
  const boats = [], ferries = [];
  for (const b of world.boats) {
    const bm = boatMesh(b, world.pal);
    bm.position.set(b.x ?? 0, (world.seaLevel ?? 0) + 0.1, -(b.y ?? 0));
    bm.rotation.y = (b.dir ?? 0) * DEG;
    group.add(bm);
    if (bm.userData.plank) group.add(bm.userData.plank);
    const B = { b, m: bm, s: 0, phase: Math.random() * 6 };
    if (b.ferry) {
      B.ferry = makeFerry(b); B.ferry.m = bm; ferries.push(B.ferry);
      // start (and export) moored at the landing
      const st = B.ferry.state(B.ferry.Tin + 1 - (b.ferry.offset ?? 0));
      bm.position.set(st.x, (world.seaLevel ?? 0) + 0.1, -st.y); bm.rotation.y = st.yaw;
      if (bm.userData.rig) { bm.userData.rig.visible = false; bm.userData.furl.visible = true; }
    }
    boats.push(B);
  }

  // birds: one instanced mesh per kind, wings flapped by squashing in y
  // dune fields: a smooth height-field with wind ripples across it and darker slip faces
  for (const D of world.duneFields || []) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(D.pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(D.col, 3)); g.setIndex(D.idx); g.computeVertexNormals();
    const m = addAtmo(new THREE.MeshLambertMaterial({ vertexColors: true }), 'dune');
    const prev = m.onBeforeCompile;
    m.onBeforeCompile = (sh, r) => {
      prev(sh, r);
      sh.uniforms.uDuneWind = { value: new THREE.Vector2(D.wind[0], D.wind[1]) };
      sh.fragmentShader = 'uniform vec2 uDuneWind;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        { vec2 p = vec2(vAtmoW.x, -vAtmoW.z); float k = dot(p, uDuneWind) * 3.1 + aN(p * 0.35) * 4.0;
          float rip = 0.5 + 0.5 * sin(k); float px = fwidth(k); diffuseColor.rgb *= 1.0 + (rip - 0.5) * 0.12 * (1.0 - smoothstep(0.6, 2.4, px)); }`);
    };
    m.customProgramCacheKey = () => 'dune';
    const mesh = new THREE.Mesh(g, m); mesh.receiveShadow = true; mesh.castShadow = true; mesh.name = 'dunes';
    group.add(mesh); disposables.push(g, m);
  }
  const coverMeshes = ['tree-grass', 'tree-flowers', 'tree-reed', 'pebble'].map((n) => group.getObjectByName(n)).filter(Boolean);
  const birdSets = [];
  for (const F of world.birdFlocks || []) {
    const col = F.kind === 'gull' ? 0xeeeeea : F.kind === 'kite' ? 0x6a4a32 : 0x1f1d1c, span = F.kind === 'kite' ? 1.5 : F.kind === 'gull' ? 1.0 : 0.6;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.15, -span / 2, 0.12, -0.05, 0, 0, -0.2, 0, 0, 0.15, 0, 0, -0.2, span / 2, 0.12, -0.05], 3)); g.computeVertexNormals();
    const im = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: col, side: THREE.DoubleSide }), F.n);
    im.frustumCulled = false; im.name = 'birds'; group.add(im); disposables.push(g, im.material);
    birdSets.push({ F, im, ph: Array.from({ length: F.n }, () => [Math.random() * TAU, 0.6 + Math.random() * 0.8, (Math.random() - 0.5) * 6, Math.random() * 6]) });
  }
  const _bm = new THREE.Matrix4(), _bq = new THREE.Quaternion(), _bp = new THREE.Vector3(), _bs = new THREE.Vector3(), _be = new THREE.Euler();
  let update = (t, dt, ctx = {}) => {
    for (const S of birdSets) {
      const F = S.F;
      S.ph.forEach(([a0, rk, dh, fp], i) => {
        const a = a0 + t * F.speed * (F.kind === 'kite' ? 0.6 : 1) * (i % 2 ? 1 : 1.1), r = F.r * rk;
        const x = F.x + Math.cos(a) * r, y = F.y + Math.sin(a) * r, h = F.h + dh + Math.sin(t * 0.7 + fp) * 1.5;
        const flap = F.kind === 'kite' ? 0.85 + 0.15 * Math.sin(t * 2 + fp) : 0.3 + 0.7 * Math.abs(Math.sin(t * (F.kind === 'crow' ? 9 : 6) + fp));
        _be.set(0, a + Math.PI, 0.25); _bq.setFromEuler(_be); _bp.set(x, h, -y); _bs.set(1, flap * 2 - 0.4, 1);
        _bm.compose(_bp, _bq, _bs); S.im.setMatrixAt(i, _bm);
      });
      S.im.instanceMatrix.needsUpdate = true;
    }
    if (seaMat) seaMat.userData.uTime.value = t;
    ATMO.uAtmoT.value = t; if (ctx.climate !== true) ATMO.uCloud.value = A.clouds; ATMO.uCloudAlt.value = cloudAlt; ATMO.uSeaLvl.value = world.seaLevel ?? -1e4;
    // ground cover is sub-pixel when the whole fort is in view: skip drawing it then
    if (ctx.viewH != null) { const show = ctx.viewH < 240; for (const m of coverMeshes) m.visible = show; }
    if (ctx.sunDir) { const sd = ctx.sunDir, k = 1 / Math.max(0.2, sd.y); ATMO.uSunOff.value.set(sd.x * k, -sd.z * k); }
    if (ctx.viewH != null) { const v = Math.min(1, Math.max(0, (ctx.viewH - 70) / 230)); ATMO.uCloudVis.value = v * v * (3 - 2 * v); }
    if (surf) { surf.material.uniforms.uTime.value = t; surf.material.uniforms.uLight.value = ctx.light ?? 1; }
    if (parts) { parts.material.uniforms.uTime.value = t; parts.material.uniforms.uPx.value = ctx.px ?? 8; parts.material.uniforms.uLight.value = ctx.light ?? 1; parts.material.uniforms.uNight.value = ctx.night ?? 0; }
    for (const f of flags) {
      const pos = f.m.geometry.attributes.position;
      const a = pos.array, base = f.base;
      for (let i = 0; i < a.length; i += 3) {
        const x = base[i], k = x / f.L;
        // travelling ripple that grows towards the fly, a slow flutter, and a slight sag
        a[i + 2] = Math.sin(t * 6.2 - x * 2.1 + f.phase) * 0.26 * k + Math.sin(t * 3.4 - base[i + 1] * 2.6 + x) * 0.07 * k;
        a[i] = base[i] - Math.abs(Math.sin(t * 6.2 - x * 2.1 + f.phase)) * 0.06 * k;
        a[i + 1] = base[i + 1] - k * k * 0.1;
      }
      pos.needsUpdate = true; f.m.geometry.computeVertexNormals();
    }
    for (const B of boats) {
      const { b, m } = B;
      if (B.sinkT != null) {
        // hit twice: settles by the stern and rolls over, then a fresh boat comes back out
        const k = t - B.sinkT;
        if (k < 7) { m.visible = true; m.position.y = (world.seaLevel ?? 0) - k * 0.35; m.rotation.z = k * 0.18; m.rotation.x = k * 0.05; continue; }
        if (k < 60) { m.visible = false; continue; }
        B.sinkT = null; B.hits = 0; B.s = 0; m.visible = true; m.rotation.set(0, m.rotation.y, 0);
      }
      if (B.ferry) {
        const st = B.ferry.state(t);
        m.position.x = st.x; m.position.z = -st.y;
        let d = st.yaw - m.rotation.y; while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU;
        m.rotation.y += d * Math.min(1, dt * 2.5);
        const moored = st.phase === 'dock';
        if (m.userData.rig) { m.userData.rig.visible = !moored; m.userData.furl.visible = moored; }
        const pl = m.userData.plank;
        if (pl) {
          pl.visible = moored && !!b.ferry.step;
          if (pl.visible) {
            const [sx, sy, sh] = b.ferry.step, gx = st.x, gy = st.y;
            // from the gunwale nearest the step to the step itself
            const dx = sx - gx, dy = sy - gy, dl = Math.hypot(dx, dy) || 1;
            const ex = gx + dx / dl * m.userData.B * 0.45, ey = gy + dy / dl * m.userData.B * 0.45, eh = (world.seaLevel ?? 0) + m.userData.D * 0.42;
            const len = Math.hypot(sx - ex, sy - ey);
            pl.position.set((sx + ex) / 2, (sh + eh) / 2, -(sy + ey) / 2);
            pl.scale.set(1, 1, len);
            pl.rotation.set(0, 0, 0); pl.rotation.y = Math.atan2(sx - ex, -(sy - ey)) ; pl.rotation.x = 0;
            pl.lookAt(sx, sh + 0.04, -sy);
          }
        }
      } else if (b.path) {
        B.s += dt * (b.speed ?? 2);
        const P = b.path, n = P.length;
        let L = 0; const seg = [];
        for (let i = 0; i < n; i++) { const p = P[i], q = P[(i + 1) % n]; const l = Math.hypot(q[0] - p[0], q[1] - p[1]); seg.push(l); L += l; }
        let s = B.s % L, i = 0;
        while (s > seg[i]) { s -= seg[i]; i = (i + 1) % n; }
        const p = P[i], q = P[(i + 1) % n], u = s / seg[i];
        m.position.x = p[0] + (q[0] - p[0]) * u; m.position.z = -(p[1] + (q[1] - p[1]) * u);
        const target = Math.atan2(q[1] - p[1], q[0] - p[0]);
        let d = target - m.rotation.y; while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU;
        m.rotation.y += d * Math.min(1, dt * 1.5);
      }
      m.position.y = (world.seaLevel ?? 0) + 0.12 + Math.sin(t * 1.3 + B.phase) * 0.1;
      m.rotation.z = Math.sin(t * 1.1 + B.phase) * 0.04;
      m.rotation.x = Math.sin(t * 0.9 + B.phase * 2) * 0.03;
    }
  };
  const dispose = () => {
    group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    for (const d of disposables) if (d.dispose) d.dispose();
  };
  // firelight: eight warm point lights shared among the flames nearest the view, flickering, at dusk and night
  const flames = (world.particles || []).filter((e) => e.kind === 'fire').map((e) => ({ x: e.x, y: e.y, h: e.h, night: !!e.nightOnly, seed: (e.seed || 0) + e.x }));
  const fireLights = [];
  for (let i = 0; i < 8; i++) { const L = new THREE.PointLight(0xffa04a, 0, 14, 1.8); L.castShadow = false; group.add(L); fireLights.push(L); }
  const _upd0 = update;
  update = (t, dt, ctx = {}) => {
    _upd0(t, dt, ctx);
    const night = Math.max(ctx.night ?? 0, 0);
    if (night < 0.05 || !flames.length) { for (const L of fireLights) L.intensity = 0; return; }
    const tx = ctx.camTarget?.x ?? 0, tz = ctx.camTarget?.z ?? 0;
    const near = flames.map((f) => [f, (f.x - tx) ** 2 + (-f.y - tz) ** 2]).sort((a, b) => a[1] - b[1]).slice(0, fireLights.length);
    fireLights.forEach((L, i) => {
      const f = near[i]?.[0]; if (!f) { L.intensity = 0; return; }
      L.position.set(f.x, f.h + 0.4, -f.y);
      const flick = 0.8 + 0.2 * Math.sin(t * 13 + f.seed) * Math.sin(t * 7.3 + f.seed * 2);
      L.intensity = 2.2 * night * flick * (f.night ? 1 : 1.3);
    });
  };
  return { group, update, pick, dispose, terrain, ferries, boats, ladders };
}
