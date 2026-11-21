// World: terrain + navigation + render batches + plan record for one fort level.
import * as THREE from 'three';
import {
  clamp, lerp, rng, polyArea, resample, offsetPolyline, distToPolyline, pointInPoly, bbox, TAU, DEG,
  signedDistPoly, polylineLength, rectPts,
} from './geom.js';
import { Terrain, PAINT } from './terrain.js';
import { Nav, TAG } from './nav.js';
import { Mesher, C, shade, mix, V } from './mesher.js';

export const DEFAULT_PAL = {
  wall: '#8d8270', wallTop: '#9c917e', trim: '#b8ab92', stone: '#a39883', plaster: '#d9d2c1', plasterDark: '#b9ae97',
  roof: '#8a7a64', dome: '#d8d2c2', wood: '#5a3d26', iron: '#2f2b28', door: '#4a3220', window: '#2a2420',
  grass: '#7d8f4e', dry: '#a99b67', rock: '#7c766b', cliff: '#6d675e', sand: '#cdbb8e', road: '#b49f78', court: '#bdb099',
  field: '#8f9a55', mud: '#6e6550', seabed: '#4c6b66', paved: '#a99f8c', garden: '#5f7d3e',
  water: '#3f7f86', tank: '#4d7a5c', leaf: '#5d7a35', leafDry: '#8a8a45', trunk: '#6b5038', flag: '#d8762b',
  accent: '#c2a35a', tile: '#2a8f97', tileYellow: '#d6b23a', tileGreen: '#4f8c4a', bg: '#dfe6e6',
};

export class InstBatch {
  constructor(geo, { cast = true, receive = true } = {}) { this.geo = geo; this.m = []; this.c = []; this.cast = cast; this.receive = receive; }
  add(matrix, col = [1, 1, 1]) { this.m.push(matrix.clone()); this.c.push(col); }
  build(material) {
    if (!this.m.length) return null;
    const mesh = new THREE.InstancedMesh(this.geo, material, this.m.length);
    for (let i = 0; i < this.m.length; i++) {
      mesh.setMatrixAt(i, this.m[i]);
      mesh.setColorAt(i, new THREE.Color(this.c[i][0], this.c[i][1], this.c[i][2]));
    }
    mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = this.cast; mesh.receiveShadow = this.receive;
    mesh.computeBoundingSphere();
    return mesh;
  }
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();
export function instMatrix(x, y, h, yawDeg, sx, sy, sz, pitchDeg = 0, rollDeg = 0) {
  _e.set(pitchDeg * DEG, yawDeg * DEG, rollDeg * DEG, 'YXZ');
  _q.setFromEuler(_e);
  _p.set(x, h, -y); _s.set(sx, sy, sz);
  return _m.compose(_p, _q, _s);
}
// yaw for a plan direction (dx,dy): rotation about +Y so that local +X points along it
export function yawOf(dx, dy) { return Math.atan2(dy, dx) / DEG; }

export class World {
  constructor(def, { lite = false, era = null } = {}) {
    this.def = def; this.lite = lite;
    this.bounds = def.bounds;
    this.seed = def.seed || 1;
    this.rand = rng(this.seed * 977 + 13);
    const eras = def.eras || [{ id: 'today' }];
    this.eraDef = eras.find((e) => e.id === era) || eras[0];
    this.era = this.eraDef.id;
    this.eraIndex = eras.indexOf(this.eraDef);
    this.npcs = [];
    const P = Object.assign({}, DEFAULT_PAL, def.palette || {}, def.eraPalette?.[this.era] || {});
    this.palHex = P;
    this.pal = Object.fromEntries(Object.entries(P).map(([k, v]) => [k, C(v)]));
    this.seaLevel = def.water?.sea ?? null;
    this.terrain = new Terrain({ bounds: def.bounds, stride: def.stride || 2, seed: this.seed });
    this.terrain.build(typeof def.terrain === 'function' ? def.terrain(this.era, this) : (def.terrain || []));
    this.nav = new Nav(def.bounds, { cell: def.navCell || 1, step: def.navStep ?? 0.62 });
    this.solid = new Mesher(0.07);
    this.trim = new Mesher(0.03);   // fine details, no shadow casting
    this.decal = new Mesher(0.0);   // window/arch decals (no shadows)
    this.waterM = new Mesher(0);
    // dressed-stone surfaces (walls, bastions, gates, stairs) get the masonry shader when the level asks for it
    this.mason = def.masonry ? new Mesher(0.035) : this.solid;
    this.particles = [];   // emitters: spray, smoke, muzzle flashes, splashes (see scene.js)
    this.surf = def.surf || null; // breaking-wave band along the shore
    this.guns = [];        // operable guns (drawn and driven by the game, not merged into the scene)
    this.garrisons = [];   // places soldiers can be garrisoned into: {name, x, y, h, cap, kind}
    this.pens = [];        // livestock pens: {poly, gate, kind, name}
    this.fields = [];      // cultivated plots: {poly, crop, batch, i0, i1, name, area}
    this.settlements = []; // open ground where settlers can be invited to build: {name, poly, from, plots}
    this.onFinish = [];    // level hooks that need the finished geometry (e.g. crews beside the guns)
    this.reserve = {};     // extra figure capacity for animals born and settlers arriving during play
    this.solid.jitter = 0.03;
    this.inst = {};
    this.walls = []; this.bastions = []; this.gates = []; this.tanks = [];
    this.plan = { polys: [], circles: [], lines: [], labels: [], gates: [], trees: [], stairs: [], marks: [] };
    this.pois = []; this.flags = []; this.boats = []; this.zones = []; this.backdrop = [];
    this.ladders = [];    // siege ladders and rope ladders: drawn as their own objects so they can be thrown down
    this.occ = []; // occupied footprints for scatter rejection
    this.spawnAt = null;
    this.waterPolys = []; // {poly, level}
  }
  ground(x, y) { return this.terrain.heightAt(x, y); }
  // era helpers: is('1774','1930s') -> bool; pick({1774: a, today: b, default: c})
  is(...ids) { return ids.includes(this.era); }
  pick(map) { return Object.prototype.hasOwnProperty.call(map, this.era) ? map[this.era] : map.default; }
  // people / animals: {kind, at:[x,y] | zone:poly | circle:[x,y,r] | patrol:[[x,y],...], count, mode:'wander'|'patrol'|'idle'|'route', speed, face}
  npc(o) { this.npcs.push(Object.assign({ count: 1, mode: o.patrol ? 'patrol' : o.zone || o.circle ? 'wander' : 'idle' }, o)); }
  col(c, fallback = 'wall') { if (!c) return this.pal[fallback]; if (typeof c === 'string') return this.pal[c] || C(c); return c; }
  batch(name, geoFn, opts) { if (!this.inst[name]) this.inst[name] = new InstBatch(geoFn(), opts); return this.inst[name]; }
  occupy(poly, pad = 0) { this.occ.push({ poly, bb: bbox(poly), pad }); }
  isFree(x, y, pad = 0) {
    for (const o of this.occ) {
      const p = pad + o.pad;
      if (x < o.bb.x0 - p || x > o.bb.x1 + p || y < o.bb.y0 - p || y > o.bb.y1 + p) continue;
      if (p > 0 ? signedDistPoly(x, y, o.poly) < p : pointInPoly(x, y, o.poly)) return false;
    }
    return true;
  }
  waterLevelAt(x, y) {
    let wl = this.seaLevel ?? -Infinity;
    for (const w of this.waterPolys) if (w.level > wl && pointInPoly(x, y, w.poly)) wl = w.level;
    return wl;
  }
  zone(poly, name) { this.zones.push({ poly, bb: bbox(poly), name }); }
  zoneAt(x, y) {
    for (let i = this.zones.length - 1; i >= 0; i--) {
      const z = this.zones[i];
      if (x < z.bb.x0 || x > z.bb.x1 || y < z.bb.y0 || y > z.bb.y1) continue;
      if (pointInPoly(x, y, z.poly)) return z.name;
    }
    return null;
  }

  // ------------------------------------------------------------------ walls
  // path: [[x,y],...]; closed; h (relative height) or top (absolute: number | fn(x,y,s))
  wall(o) {
    const w = { o, path: o.path, closed: !!o.closed, cuts: [], id: this.walls.length };
    const sgnOut = w.closed ? (polyArea(o.path) > 0 ? -1 : 1) : (o.outer === 'left' ? 1 : -1);
    w.sgnOut = sgnOut;
    w.len = polylineLength(o.path, w.closed);
    this.walls.push(w);
    return w;
  }
  // query wall geometry at arc-length s: point, tangent, outward normal, approx top height
  wallFrame(w, s) {
    const pts = w.path, n = pts.length, m = w.closed ? n : n - 1;
    if (w.closed) s = ((s % w.len) + w.len) % w.len; else s = clamp(s, 0, w.len);
    let acc = 0;
    for (let i = 0; i < m; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (acc + L >= s || i === m - 1) {
        const t = L > 0 ? clamp((s - acc) / L, 0, 1) : 0;
        const tx = (b[0] - a[0]) / (L || 1), ty = (b[1] - a[1]) / (L || 1);
        const x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
        const ox = -ty * w.sgnOut, oy = tx * w.sgnOut;
        return { x, y, tx, ty, ox, oy, s };
      }
      acc += L;
    }
    return null;
  }
  wallS(w, x, y) { return distToPolyline(x, y, w.path, w.closed).s; }
  wallTopAt(w, x, y) {
    const o = w.o;
    if (o.top != null) return typeof o.top === 'function' ? o.top(x, y) : o.top;
    const th = o.thick ?? 3;
    const f = this.wallFrame(w, this.wallS(w, x, y));
    const gi = this.ground(f.x - f.ox * th / 2, f.y - f.oy * th / 2);
    return Math.max(gi, this.ground(f.x, f.y)) + (o.h ?? 8);
  }

  _buildWall(w) {
    const o = w.o, P = this.pal;
    const col = this.col(o.color, 'wall');
    const colTop = o.colorTop ? this.col(o.colorTop) : mix(col, P.wallTop, 0.5);
    const thick = o.thick ?? 3, batter = o.batter ?? 0.08;
    const par = o.parapet === false ? null : Object.assign({ h: 1.1, t: 0.6 }, o.parapet || {});
    const mer = o.merlon === false || !par ? null : Object.assign({ style: 'round', w: 0.9, gap: 0.75, h: 0.9 }, o.merlon || {});
    const walk = o.walk !== false;
    const tag = o.tag ?? TAG.rampart;
    // resample + insert cut boundaries
    let pts = resample(w.path, w.closed, o.maxSeg ?? 3);
    const sOf = [0];
    for (let i = 1; i < pts.length; i++) sOf.push(sOf[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const total = w.closed ? sOf[sOf.length - 1] + Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) : sOf[sOf.length - 1];
    const extra = [];
    for (const c of w.cuts) { extra.push(c.s0, c.s1); }
    for (const s of extra) {
      const ss = w.closed ? ((s % total) + total) % total : clamp(s, 0, total);
      // find insertion index
      let k = sOf.findIndex((v) => v > ss);
      if (k === -1) k = sOf.length; // beyond last (closed loop final span)
      const prevS = sOf[k - 1];
      if (Math.abs(prevS - ss) < 0.05 || (k < sOf.length && Math.abs(sOf[k] - ss) < 0.05)) continue;
      const a = pts[k - 1], b = k < pts.length ? pts[k] : pts[0];
      const nextS = k < sOf.length ? sOf[k] : total;
      const t = (ss - prevS) / (nextS - prevS);
      pts.splice(k, 0, [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
      sOf.splice(k, 0, ss);
    }
    const N = pts.length;
    const norm = (v) => (w.closed ? ((v % total) + total) % total : clamp(v, 0, total));
    for (const c of w.cuts) { c.n0 = norm(c.s0); c.n1 = norm(c.s1); }
    const near = (a, b) => { if (!w.closed) return Math.abs(a - b) < 0.06; const d = ((a - b) % total + total) % total; return d < 0.06 || total - d < 0.06; };
    const off = offsetPolyline(pts, w.closed, 1, 2.5);
    const ov = pts.map((p, i) => [(off[i][0] - p[0]) * w.sgnOut, (off[i][1] - p[1]) * w.sgnOut]);
    const tops = new Float32Array(N), base = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const [x, y] = pts[i], [vx, vy] = ov[i];
      const gi = this.ground(x - vx * thick / 2, y - vy * thick / 2), gc = this.ground(x, y);
      if (o.top != null) tops[i] = typeof o.top === 'function' ? o.top(x, y, sOf[i]) : o.top;
      else tops[i] = Math.max(gi, gc) + (o.h ?? 8);
      const gFoot = this.ground(x + vx * (thick / 2 + 1.5), y + vy * (thick / 2 + 1.5));
      base[i] = Math.min(gi, gc, gFoot) - (o.sink ?? 1.0);
    }
    if (o.top == null && o.smooth !== 0) {
      const t2 = Float32Array.from(tops);
      const K = o.smooth ?? 2;
      for (let i = 0; i < N; i++) {
        let s = 0, n = 0;
        for (let d = -K; d <= K; d++) { let j = i + d; if (w.closed) j = (j + N) % N; else if (j < 0 || j >= N) continue; s += t2[j]; n++; }
        tops[i] = Math.max(t2[i] - 0.5, s / n);
      }
    }
    const cutAt = (s) => {
      for (const c of w.cuts) {
        const a = c.n0, b = c.n1;
        if (w.closed) { const ss = ((s % total) + total) % total; if (a <= b ? ss > a && ss < b : ss > a || ss < b) return c; }
        else if (s > a && s < b) return c;
      }
      return null;
    };
    const inBastion = (x, y) => {
      for (const b of this.bastions) { if (b.wall === w || b.anyWall) { const d = Math.hypot(x - b.x, y - b.y); if (d < b.r - 0.2) return true; } }
      return false;
    };
    const ph = par ? par.h : 0, pt = par ? par.t : 0;
    const M = this.mason, D = this.trim;
    const outerAt = (i, h) => { const k = thick / 2 + batter * Math.max(0, tops[i] - h); return [pts[i][0] + ov[i][0] * k, pts[i][1] + ov[i][1] * k]; };
    const innerAt = (i) => [pts[i][0] - ov[i][0] * thick / 2, pts[i][1] - ov[i][1] * thick / 2];
    const parInAt = (i) => [pts[i][0] + ov[i][0] * (thick / 2 - pt), pts[i][1] + ov[i][1] * (thick / 2 - pt)];
    const outTopAt = (i) => [pts[i][0] + ov[i][0] * thick / 2, pts[i][1] + ov[i][1] * thick / 2];
    const cBase = shade(col, 0.78);
    const spans = w.closed ? N : N - 1;
    const merlonSpots = [];
    // which spans carry a parapet (none where the wall runs inside a bastion), so open ends can be capped
    const parOn = [];
    for (let i = 0; i < spans; i++) {
      const j = (i + 1) % N, mx = (pts[i][0] + pts[j][0]) / 2, my = (pts[i][1] + pts[j][1]) / 2;
      const ovm = [(ov[i][0] + ov[j][0]) / 2, (ov[i][1] + ov[j][1]) / 2];
      parOn[i] = !!par && !inBastion(mx + ovm[0] * thick / 2, my + ovm[1] * thick / 2) && !inBastion(mx, my);
    }
    for (let i = 0; i < spans; i++) {
      const j = (i + 1) % N;
      const sA = sOf[i], sB = j === 0 ? total : sOf[j];
      const sMid = (sA + sB) / 2;
      const cut = cutAt(sMid);
      const mx = (pts[i][0] + pts[j][0]) / 2, my = (pts[i][1] + pts[j][1]) / 2;
      const ovm = [(ov[i][0] + ov[j][0]) / 2, (ov[i][1] + ov[j][1]) / 2];
      const skipPar = !parOn[i];
      const bi = cut ? cut.archTop : base[i], bj = cut ? cut.archTop : base[j];
      const ti = tops[i], tj = tops[j];
      const oi = outerAt(i, bi), oj = outerAt(j, bj);
      const oti = outTopAt(i), otj = outTopAt(j);
      const ii = innerAt(i), ij = innerAt(j);
      const ctr = V(mx, my, (bi + ti) / 2);
      // outer sloped face
      M.quadAway(V(oi[0], oi[1], bi), V(oj[0], oj[1], bj), V(otj[0], otj[1], tj), V(oti[0], oti[1], ti), [cBase, cBase, col, col], V(mx - ovm[0] * 2, my - ovm[1] * 2, (bi + ti) / 2));
      // inner face
      M.quadAway(V(ii[0], ii[1], bi), V(ij[0], ij[1], bj), V(ij[0], ij[1], tj), V(ii[0], ii[1], ti), [cBase, cBase, col, col], V(mx + ovm[0] * 2, my + ovm[1] * 2, (bi + ti) / 2));
      // string courses dividing the outer face into stages (projecting bands that follow the batter)
      if (o.courses && !cut && !inBastion(mx, my)) {
        for (const hc of o.courses) {
          const ha = typeof hc === 'function' ? hc(mx, my) : hc;
          if (ha < Math.max(bi, bj) + 0.6 || ha > Math.min(ti, tj) - 0.6) continue;
          const proj = o.courseProj ?? 0.16, ch = o.courseH ?? 0.32;
          const A0 = outerAt(i, ha), B0 = outerAt(j, ha), A1 = outerAt(i, ha + ch), B1 = outerAt(j, ha + ch);
          const pa = (p, k) => [p[0] + ov[i][0] * k, p[1] + ov[i][1] * k], pb = (p, k) => [p[0] + ov[j][0] * k, p[1] + ov[j][1] * k];
          const a0 = pa(A0, proj), b0 = pb(B0, proj), a1 = pa(A1, proj), b1 = pb(B1, proj);
          const away = V(mx - ovm[0] * 3, my - ovm[1] * 3, ha);
          const cc = shade(col, 1.07);
          M.quadAway(V(a0[0], a0[1], ha), V(b0[0], b0[1], ha), V(b1[0], b1[1], ha + ch), V(a1[0], a1[1], ha + ch), cc, away);
          M.quadAway(V(a1[0], a1[1], ha + ch), V(b1[0], b1[1], ha + ch), V(B1[0], B1[1], ha + ch), V(A1[0], A1[1], ha + ch), shade(cc, 1.08), V(mx, my, ha - 2));
          M.quadAway(V(a0[0], a0[1], ha), V(b0[0], b0[1], ha), V(B0[0], B0[1], ha), V(A0[0], A0[1], ha), shade(cc, 0.6), V(mx, my, ha + 2));
        }
      }
      if (!skipPar) {
        const pi = parInAt(i), pj = parInAt(j);
        // walk
        M.quadAway(V(ii[0], ii[1], ti), V(ij[0], ij[1], tj), V(pj[0], pj[1], tj), V(pi[0], pi[1], ti), colTop, V(mx, my, Math.min(ti, tj) - 3));
        // parapet outer (vertical, flush)
        M.quadAway(V(oti[0], oti[1], ti), V(otj[0], otj[1], tj), V(otj[0], otj[1], tj + ph), V(oti[0], oti[1], ti + ph), col, ctr);
        // parapet inner
        M.quadAway(V(pi[0], pi[1], ti), V(pj[0], pj[1], tj), V(pj[0], pj[1], tj + ph), V(pi[0], pi[1], ti + ph), shade(col, 0.92), V(mx + ovm[0] * 3, my + ovm[1] * 3, ti));
        // parapet top
        M.quadAway(V(pi[0], pi[1], ti + ph), V(pj[0], pj[1], tj + ph), V(otj[0], otj[1], tj + ph), V(oti[0], oti[1], ti + ph), colTop, V(mx, my, ti - 2));
        // close the parapet where it starts or stops (at a bastion, or at the end of an open wall)
        for (const [k, prevOn, inside] of [[i, w.closed ? parOn[(i - 1 + spans) % spans] : i > 0 && parOn[i - 1], V(mx, my, ti + ph / 2)], [j, w.closed ? parOn[(i + 1) % spans] : i + 1 < spans && parOn[i + 1], V(mx, my, tj + ph / 2)]]) {
          if (prevOn) continue;
          const pk = parInAt(k), ok = k === i ? oti : otj, tk = k === i ? ti : tj;
          M.quadAway(V(pk[0], pk[1], tk), V(ok[0], ok[1], tk), V(ok[0], ok[1], tk + ph), V(pk[0], pk[1], tk + ph), shade(col, 0.78), inside);
        }
        if (o.coping) {
          // a dressed coping course along the parapet, overhanging both faces a little
          const ex = 0.07, cpi = [pi[0] + ov[i][0] * ex, pi[1] + ov[i][1] * ex], cpj = [pj[0] + ov[j][0] * ex, pj[1] + ov[j][1] * ex];
          const coi = [oti[0] - ov[i][0] * ex, oti[1] - ov[i][1] * ex], coj = [otj[0] - ov[j][0] * ex, otj[1] - ov[j][1] * ex];
          M.prism([cpi, cpj, coj, coi], (x, y) => Math.min(ti, tj) + ph - 0.02, Math.max(ti, tj) + ph + 0.14, shade(colTop, 1.08), { colTop: shade(colTop, 1.14) });
        }
        if (o.spouts && !inBastion(mx, my)) {
          // drain spouts through the wall at walk level, each with a dark rain streak down the face below it
          const every = o.spouts.every ?? 14, k0 = Math.floor(sA / every), k1 = Math.floor(sB / every);
          if (k1 > k0) {
            const f = (k1 * every - sA) / Math.max(0.01, sB - sA);
            const px = oti[0] + (otj[0] - oti[0]) * f, py = oti[1] + (otj[1] - oti[1]) * f, ph0 = ti + (tj - ti) * f - 0.25;
            const ox = -(ov[i][0] + ov[j][0]) / 2, oy = -(ov[i][1] + ov[j][1]) / 2;
            this.trim.box(px + ox * 0.35, py + oy * 0.35, 0.7, 0.26, ph0 - 0.18, ph0 + 0.08, Math.atan2(oy, ox) / DEG, shade(colTop, 1.05));
            const tx2 = otj[0] - oti[0], ty2 = otj[1] - oti[1], tl = Math.hypot(tx2, ty2) || 1, ux = tx2 / tl * 0.32, uy = ty2 / tl * 0.32;
            const off = 0.03, bx0 = px + ox * off, by0 = py + oy * off, drop = Math.min(5, ph0 - (base[i] + 1));
            this.decal.quadAway(V(bx0 - ux, by0 - uy, ph0 - 0.2 - drop), V(bx0 + ux, by0 + uy, ph0 - 0.2 - drop), V(bx0 + ux * 0.6, by0 + uy * 0.6, ph0 - 0.18), V(bx0 - ux * 0.6, by0 - uy * 0.6, ph0 - 0.18), [shade(col, 0.7), shade(col, 0.7), shade(col, 0.55), shade(col, 0.55)], V(mx, my, ph0));
          }
        }
        if (mer) merlonSpots.push([i, j, sA, sB]);
        this.nav.obstacle({ poly: [pi, pj, otj, oti], bottom: Math.min(ti, tj) - 0.2, top: Math.max(ti, tj) + ph + (mer ? mer.h : 0) });
      } else {
        M.quadAway(V(ii[0], ii[1], ti), V(ij[0], ij[1], tj), V(otj[0], otj[1], tj), V(oti[0], oti[1], ti), colTop, V(mx, my, Math.min(ti, tj) - 3));
      }
      if (cut) {
        // soffit
        M.quadAway(V(ii[0], ii[1], bi), V(ij[0], ij[1], bj), V(oj[0], oj[1], bj), V(oi[0], oi[1], bi), shade(col, 0.55), V(mx, my, bi + 2));
      }
      // jamb faces at cut boundaries
      for (const c of w.cuts) {
        for (const [k, sK, other] of [[i, sA, j], [j, sB, i]]) {
          const isBoundary = near(sK, c.n0) || near(sK, c.n1);
          if (!isBoundary || cut) continue;
          // this non-cut span touches a cut at vertex k: close the wall body facing the passage
          const top = c.archTop, bk = base[k];
          const ik = innerAt(k), ok = outerAt(k, bk), okt = outerAt(k, top);
          const dirx = pts[k][0] - pts[other][0], diry = pts[k][1] - pts[other][1];
          M.quadAway(V(ik[0], ik[1], bk), V(ok[0], ok[1], bk), V(okt[0], okt[1], top), V(ik[0], ik[1], top), shade(col, 0.7), V(pts[k][0] - dirx * 0.5, pts[k][1] - diry * 0.5, (bk + top) / 2));
        }
      }
      // nav: wall body obstacle and walk surface
      const ax = pts[i][0], ay = pts[i][1], bx = pts[j][0], by = pts[j][1];
      const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1;
      const tAt = (x, y) => clamp(((x - ax) * dx + (y - ay) * dy) / l2, 0, 1);
      const topF = (x, y) => lerp(ti, tj, tAt(x, y));
      const pad = 0.05;
      const bodyPoly = [ii, ij, oj, oi].map((p) => p);
      this.nav.obstacle({ poly: bodyPoly, bottom: cut ? cut.archTop : Math.min(bi, bj) - 1, top: (x, y) => topF(x, y) });
      if (walk && !(o.walkGates === false && cut)) {
        const pi = skipPar ? oti : parInAt(i), pj = skipPar ? otj : parInAt(j);
        this.nav.surface({ poly: [ii, ij, pj, pi], h: topF, tag });
      }
      if (!cut) this.plan.polys.push({ pts: [ii, ij, otj, oti], cls: o.planCls || 'wall' });
      else this.plan.polys.push({ pts: [ii, ij, otj, oti], cls: 'wall-over' });
      this.occupy([ii, ij, oj, oi], 0.4);
    }
    // open ends
    if (!w.closed) {
      for (const k of [0, N - 1]) {
        const ik = innerAt(k), ok = outerAt(k, base[k]), okt = outTopAt(k);
        const nb = k === 0 ? 1 : N - 2;
        const away = V(pts[nb][0], pts[nb][1], (base[k] + tops[k]) / 2);
        M.quadAway(V(ik[0], ik[1], base[k]), V(ok[0], ok[1], base[k]), V(okt[0], okt[1], tops[k] + ph), V(ik[0], ik[1], tops[k]), shade(col, 0.85), away);
      }
    }
    // merlons
    if (mer && merlonSpots.length) {
      const B = this.merlonBatch(mer.style + (mer.slit ? '-slit' : ''));
      const pitch = mer.w + mer.gap;
      let next = pitch / 2;
      for (const [i, j, sA, sB] of merlonSpots) {
        while (next < sB) {
          if (next >= sA) {
            const t = (next - sA) / ((sB - sA) || 1);
            const x = lerp(pts[i][0], pts[j][0], t), y = lerp(pts[i][1], pts[j][1], t);
            const ox = lerp(ov[i][0], ov[j][0], t), oy = lerp(ov[i][1], ov[j][1], t);
            const ol = Math.hypot(ox, oy) || 1;
            const k = thick / 2 - pt / 2;
            const top = lerp(tops[i], tops[j], t) + ph;
            const yaw = yawOf(-oy / ol, ox / ol);
            B.add(instMatrix(x + ox / ol * k, y + oy / ol * k, top, yaw, mer.w, mer.h, pt), mer.color ? this.col(mer.color) : col);
          }
          next += pitch;
        }
        if (next < sA) next = sA + pitch / 2;
      }
    }
    w.built = { pts, ov, tops, base, sOf, total };
  }

  merlonBatch(style) {
    return this.batch('merlon-' + style, () => merlonGeometry(style.replace('-slit', ''), style.endsWith('-slit')));
  }

  // ---------------------------------------------------------------- bastions
  // {at:[x,y], r, wall?, top?|dh?, shape:'round'|'square'|'octagon', parapet, merlon, cannon, color}
  bastion(o) {
    const b = { o, x: o.at[0], y: o.at[1], r: o.r ?? 6, wall: o.wall || null, anyWall: !!o.anyWall };
    if (b.wall && o.snap !== false) {
      // place centre relative to the wall line: off = outward offset of the centre (default 0.35 r)
      const s = this.wallS(b.wall, b.x, b.y);
      const f = this.wallFrame(b.wall, s);
      const off = o.off ?? b.r * 0.35;
      b.x = f.x + f.ox * off; b.y = f.y + f.oy * off; b.out = [f.ox, f.oy]; b.s = s;
    }
    this.bastions.push(b);
    return b;
  }

  _buildBastion(b) {
    const o = b.o, P = this.pal;
    const col = this.col(o.color || b.wall?.o.color, 'wall');
    const colTop = mix(col, P.wallTop, 0.5);
    const r = b.r, seg = o.seg ?? (o.shape === 'octagon' ? 8 : o.shape === 'square' ? 4 : Math.max(14, Math.round(r * 2.2)));
    const rot = o.shape === 'square' ? (o.rot ?? 45) * DEG : (o.rot ?? 0) * DEG;
    let top;
    if (o.top != null) top = o.top;
    else if (b.wall) top = this.wallTopAt(b.wall, b.x, b.y) + (o.dh ?? 0.4);
    else top = this.ground(b.x, b.y) + (o.h ?? 10);
    b.top = top;
    const rng0 = this.terrain.rangeAround(b.x, b.y, r * 1.15);
    const base = rng0.lo - (o.sink ?? 1.2);
    const batter = o.batter ?? 0.08;
    const rb = r + batter * (top - base);
    b.rb = rb; b.base = base;
    const M = this.mason;
    M.frustum(b.x, b.y, rb, r, base, top, seg, col, { rot, colTop, shadeBase: 0.75 });
    // string course
    if (o.band !== false) M.frustum(b.x, b.y, r + 0.18, r + 0.18, top - 0.55, top - 0.25, seg, shade(col, 1.08), { rot, top: true, colTop: shade(col, 1.04) });
    const par = o.parapet === false ? null : Object.assign({ h: 1.1, t: 0.6 }, o.parapet || {});
    const mer = o.merlon === false || !par ? null : Object.assign({ style: b.wall?.o.merlon?.style || 'round', w: 0.9, gap: 0.75, h: 0.9 }, b.wall?.o.merlon || {}, o.merlon || {});
    // parapet arc
    const out = b.out || (o.out ? o.out : null);
    // parapet only where the bastion rim lies beyond the wall's outer face, so wall-walks can run onto the bastion
    let gorge = o.gorge ?? -0.25;
    if (b.wall && out && o.gorge == null) {
      const f = this.wallFrame(b.wall, this.wallS(b.wall, b.x, b.y));
      const off = (b.x - f.x) * f.ox + (b.y - f.y) * f.oy;
      gorge = clamp(((b.wall.o.thick ?? 3) / 2 - 0.25 - off) / r, -0.9, 0.9);
    }
    const arcOK = (a) => {
      if (!out || o.fullRing) return true;
      const dx = Math.cos(a), dy = Math.sin(a);
      return dx * out[0] + dy * out[1] > gorge;
    };
    // gun embrasures: arched openings through the parapet, spread over the outward arc
    const emb = [];
    if (par && o.embrasures) {
      const E = Object.assign({ spacing: 5.5, w: 1.25, sill: 0.55, spring: 1.15, rise: 0.38 }, o.embrasures);
      const halfW = E.w / 2 / r;
      let cand = [];
      if (E.angles) cand = E.angles.map((d) => d * DEG);
      else {
        // walk the arc that faces outward, keeping clear of the gorge ends
        const n = 180, ok = [];
        for (let i = 0; i < n; i++) { const a = (i / n) * TAU; ok.push(arcOK(a) && arcOK(a - halfW * 3) && arcOK(a + halfW * 3)); }
        let start = ok.findIndex((v, i) => v && !ok[(i - 1 + n) % n]);
        if (start < 0) start = 0;
        const runs = []; let cur = null;
        for (let k = 0; k < n; k++) { const i = (start + k) % n; if (ok[i]) { if (!cur) { cur = { a0: (i / n) * TAU, len: 0 }; runs.push(cur); } cur.len += TAU / n; } else cur = null; }
        for (const rn of runs) {
          const arcLen = rn.len * r, m = Math.max(1, Math.floor(arcLen / E.spacing));
          for (let k = 0; k < m; k++) cand.push(rn.a0 + rn.len * (k + 0.5) / m);
        }
      }
      for (const a of cand) emb.push({ a, hw: halfW, E });
      b.embrasures = emb;
    }
    const embAt = (a) => { for (const e of emb) { let d = a - e.a; d = ((d + Math.PI) % TAU + TAU) % TAU - Math.PI; if (Math.abs(d) < e.hw) return { e, u: d / e.hw }; } return null; };
    if (par) {
      const nseg = Math.max(seg, 20) * (emb.length ? 4 : 1);
      const ri = r - par.t;
      for (let i = 0; i < nseg; i++) {
        const a0 = rot + (i / nseg) * TAU, a1 = rot + ((i + 1) / nseg) * TAU;
        if (!arcOK((a0 + a1) / 2)) continue;
        const hit = emb.length ? embAt((a0 + a1) / 2) : null;
        if (hit) {
          // opening: sill below, arched lintel above, both through the full parapet thickness
          const E = hit.e.E;
          const archH = (u) => top + E.spring + E.rise * Math.sqrt(Math.max(0, 1 - u * u));
          const P0 = [b.x + Math.cos(a0) * r, b.y + Math.sin(a0) * r], P1 = [b.x + Math.cos(a1) * r, b.y + Math.sin(a1) * r];
          const I0 = [b.x + Math.cos(a0) * ri, b.y + Math.sin(a0) * ri], I1 = [b.x + Math.cos(a1) * ri, b.y + Math.sin(a1) * ri];
          const c = V(b.x, b.y, top), far = V(b.x + Math.cos((a0 + a1) / 2) * r * 3, b.y + Math.sin((a0 + a1) / 2) * r * 3, top);
          const ua = embAt(a0 + 1e-4)?.u ?? -1, ub = embAt(a1 - 1e-4)?.u ?? 1;
          const ha = Math.min(archH(ua), top + par.h - 0.12), hb = Math.min(archH(ub), top + par.h - 0.12), hs = top + E.sill;
          // sill block
          M.quadAway(V(P0[0], P0[1], top), V(P1[0], P1[1], top), V(P1[0], P1[1], hs), V(P0[0], P0[1], hs), col, c);
          M.quadAway(V(I0[0], I0[1], top), V(I1[0], I1[1], top), V(I1[0], I1[1], hs), V(I0[0], I0[1], hs), shade(col, 0.9), far);
          M.quadAway(V(I0[0], I0[1], hs), V(I1[0], I1[1], hs), V(P1[0], P1[1], hs), V(P0[0], P0[1], hs), shade(colTop, 0.92), V(b.x, b.y, top - 3));
          // lintel / arch
          M.quadAway(V(P0[0], P0[1], ha), V(P1[0], P1[1], hb), V(P1[0], P1[1], top + par.h), V(P0[0], P0[1], top + par.h), col, c);
          M.quadAway(V(I0[0], I0[1], ha), V(I1[0], I1[1], hb), V(I1[0], I1[1], top + par.h), V(I0[0], I0[1], top + par.h), shade(col, 0.9), far);
          M.quadAway(V(I0[0], I0[1], top + par.h), V(I1[0], I1[1], top + par.h), V(P1[0], P1[1], top + par.h), V(P0[0], P0[1], top + par.h), colTop, V(b.x, b.y, top - 3));
          M.quadAway(V(I0[0], I0[1], ha), V(I1[0], I1[1], hb), V(P1[0], P1[1], hb), V(P0[0], P0[1], ha), shade(col, 0.45), V(b.x, b.y, top + par.h + 3));
          this.nav.obstacle({ poly: [I0, I1, P1, P0], bottom: top - 0.2, top: top + par.h + 1 });
          // jambs where the opening starts or ends inside this segment
          for (const [edgeA, inA] of [[a0, embAt(a0 - 1e-4)], [a1, embAt(a1 + 1e-4)]]) {
            if (inA) continue;
            const Pe = [b.x + Math.cos(edgeA) * r, b.y + Math.sin(edgeA) * r], Ie = [b.x + Math.cos(edgeA) * ri, b.y + Math.sin(edgeA) * ri];
            const hj = Math.min(archH(edgeA === a0 ? ua : ub), top + par.h);
            M.quadAway(V(Ie[0], Ie[1], hs), V(Pe[0], Pe[1], hs), V(Pe[0], Pe[1], hj), V(Ie[0], Ie[1], hj), shade(col, 0.62), V(b.x + Math.cos(hit.e.a) * r, b.y + Math.sin(hit.e.a) * r, top + 1));
          }
          continue;
        }
        const P0 = [b.x + Math.cos(a0) * r, b.y + Math.sin(a0) * r], P1 = [b.x + Math.cos(a1) * r, b.y + Math.sin(a1) * r];
        const I0 = [b.x + Math.cos(a0) * ri, b.y + Math.sin(a0) * ri], I1 = [b.x + Math.cos(a1) * ri, b.y + Math.sin(a1) * ri];
        const c = V(b.x, b.y, top);
        // close the parapet where the arc starts or stops at the gorge
        for (const [ea, P, I, nb] of [[a0, P0, I0, a0 - (a1 - a0) * 0.5], [a1, P1, I1, a1 + (a1 - a0) * 0.5]]) {
          if (arcOK(nb)) continue;
          M.quadAway(V(I[0], I[1], top), V(P[0], P[1], top), V(P[0], P[1], top + par.h), V(I[0], I[1], top + par.h), shade(col, 0.78), V(b.x + Math.cos((a0 + a1) / 2) * r, b.y + Math.sin((a0 + a1) / 2) * r, top + par.h / 2));
          void ea;
        }
        M.quadAway(V(P0[0], P0[1], top), V(P1[0], P1[1], top), V(P1[0], P1[1], top + par.h), V(P0[0], P0[1], top + par.h), col, c);
        M.quadAway(V(I0[0], I0[1], top), V(I1[0], I1[1], top), V(I1[0], I1[1], top + par.h), V(I0[0], I0[1], top + par.h), shade(col, 0.9), V(b.x + Math.cos((a0 + a1) / 2) * r * 3, b.y + Math.sin((a0 + a1) / 2) * r * 3, top));
        M.quadAway(V(I0[0], I0[1], top + par.h), V(I1[0], I1[1], top + par.h), V(P1[0], P1[1], top + par.h), V(P0[0], P0[1], top + par.h), colTop, V(b.x, b.y, top - 3));
        this.nav.obstacle({ poly: [I0, I1, P1, P0], bottom: top - 0.2, top: top + par.h + 1 });
      }
      if (mer) {
        const Bm = this.merlonBatch(mer.style);
        const rm = r - par.t / 2;
        const n = Math.max(4, Math.floor((TAU * rm) / (mer.w + mer.gap)));
        for (let i = 0; i < n; i++) {
          const a = rot + ((i + 0.5) / n) * TAU, hw = (mer.w / 2 + 0.05) / rm;
          // whole merlons only: both edges must sit on the parapet
          if (!arcOK(a) || !arcOK(a - hw) || !arcOK(a + hw)) continue;
          Bm.add(instMatrix(b.x + Math.cos(a) * rm, b.y + Math.sin(a) * rm, top + par.h, yawOf(-Math.sin(a), Math.cos(a)), mer.w, mer.h, par.t), col);
        }
      }
    }
    // nav
    // body: battered lower part is wide; near the top only the true radius blocks (so walks can join the bastion)
    this.nav.obstacle({ circle: [b.x, b.y, rb], bottom: base, top: top - 2.2 });
    this.nav.obstacle({ circle: [b.x, b.y, r + 0.15], bottom: top - 2.4, top });
    if (o.walk !== false) this.nav.surface({ circle: [b.x, b.y, r + 0.1], h: top, tag: o.tag ?? TAG.bastion });
    this.plan.circles.push({ x: b.x, y: b.y, r, cls: o.planCls || 'bastion', seg, rot });
    this.occupy(polyCircle(b.x, b.y, rb, 12), 0.5);
    if (emb.length && o.embrasureGuns) {
      const G = o.embrasureGuns;
      emb.forEach((e, k) => {
        if (G.pick && !G.pick(k, emb.length)) return;
        const ca = Math.cos(e.a), sa = Math.sin(e.a), len = G.len ?? 2.9;
        const rr = r - (par?.t ?? 0.6) - len * 0.42;
        const lying = G.lying ? G.lying(k) : false;
        this.cannon({ x: b.x + ca * rr, y: b.y + sa * rr, h: top, dir: e.a / DEG, len, r: G.r ?? 0.27, carriage: G.carriage ?? true, lying, color: G.color, dynamic: G.dynamic && !lying, bastion: b, arc: G.arc ?? 40 });
        if (G.balls && G.balls(k)) this.shotPile?.({ x: b.x + ca * (rr - 1.6) - sa * 1.3, y: b.y + sa * (rr - 1.6) + ca * 1.3, h: top, n: 3 });
      });
    }
    if (o.cannon) {
      const cd = typeof o.cannon === 'object' ? o.cannon : {};
      const dir = out ? Math.atan2(out[1], out[0]) / DEG : (cd.dir ?? 0);
      this.cannon({ x: b.x + (out ? out[0] : 0) * r * 0.25, y: b.y + (out ? out[1] : 0) * r * 0.25, h: top, dir: cd.dir ?? dir, len: cd.len ?? 3.2, r: cd.r ?? 0.32, carriage: cd.carriage ?? true, name: cd.name });
    }
    if (o.flag) this.flag({ x: b.x, y: b.y, h: top, pole: o.flag.pole ?? 7, color: o.flag.color });
    if (o.garrison) this.garrisons.push({ name: o.garrison.name || 'Bastion', x: b.x, y: b.y, h: top, cap: o.garrison.cap ?? 6, kind: 'bastion', r: b.r });
  }

  // ------------------------------------------------------------------ gates
  // {wall, at:[x,y], width, spring, rise, towers:{r,dh,gap}, frame:true, doors:true, name, style:'pointed'|'round'|'flat'|'cusped'}
  gate(o) {
    const w = o.wall;
    const s = this.wallS(w, o.at[0], o.at[1]);
    const f = this.wallFrame(w, s);
    const width = o.width ?? 4;
    const g = o.floor ?? this.ground(f.x, f.y);
    const spring = o.spring ?? Math.max(2.6, width * 0.95);
    const rise = o.style === 'flat' ? 0.4 : o.rise ?? width * 0.62;
    const archTop = g + spring + rise + 0.15;
    const cut = { s0: s - width / 2, s1: s + width / 2, archTop };
    w.cuts.push(cut);
    const G = { o, w, s, f, width, g, spring, rise, archTop, cut };
    this.gates.push(G);
    if (o.towers !== false) {
      const T = Object.assign({ r: Math.max(3, width * 0.9), dh: 1.5, gap: 0.2, off: null }, o.towers || {});
      for (const sg of [-1, 1]) {
        const ss = s + sg * (width / 2 + T.r * (0.85 + T.gap));
        const ff = this.wallFrame(w, ss);
        const off = T.off ?? T.r * 0.3;
        this.bastion({ at: [ff.x + ff.ox * off, ff.y + ff.oy * off], r: T.r, wall: w, snap: false, dh: T.dh, color: T.color || o.color, merlon: T.merlon, top: T.top, seg: T.seg, shape: T.shape, band: T.band });
        const B = this.bastions[this.bastions.length - 1]; B.out = [ff.ox, ff.oy];
      }
    }
    return G;
  }

  _buildGate(G) {
    const { o, w, f, width, g, spring, rise, archTop } = G;
    const P = this.pal, M = this.mason;
    const col = this.col(o.color || w.o.color, 'wall');
    const trim = this.col(o.trim, 'trim');
    const thick = w.o.thick ?? 3;
    const top = this.wallTopAt(w, f.x, f.y);
    const batter = w.o.batter ?? 0.08;
    const tx = f.tx, ty = f.ty, ox = f.ox, oy = f.oy;
    // local -> plan: u along tangent, n outward, v up
    const L = (u, n, h) => V(f.x + tx * u + ox * n, f.y + ty * u + oy * n, h);
    const nIn = -thick / 2 - 0.02, nOut = thick / 2 + batter * Math.max(0, top - archTop) + 0.02;
    // spandrel infill to make the arch shape
    const st = o.style || 'pointed';
    if (st !== 'flat') {
      const hw = width / 2;
      const curve = [];
      const segs = 10;
      if (st === 'round') {
        for (let i = 0; i <= segs; i++) { const a = Math.PI - (i / segs) * Math.PI; curve.push([Math.cos(a) * hw, spring + Math.sin(a) * Math.min(rise, hw)]); }
      } else {
        const R = (rise * rise + hw * hw) / (2 * hw) > hw ? (rise * rise + hw * hw) / width : hw;
        // left arc centred at (-hw + R, spring)
        const cxL = -hw + R;
        const apexH = Math.sqrt(Math.max(0, R * R - cxL * cxL));
        for (let i = 0; i <= segs; i++) {
          const x = -hw + (hw) * (i / segs);
          const yy = Math.sqrt(Math.max(0, R * R - (x - cxL) * (x - cxL)));
          curve.push([x, spring + Math.min(yy, apexH)]);
        }
        for (let i = segs - 1; i >= 0; i--) { const p = curve[i]; curve.push([-p[0], p[1]]); }
      }
      // shape polygon: curve then up the right jamb to archTop and back
      const shape = curve.map((p) => [p[0], p[1]]);
      shape.push([hw, archTop - g], [-hw, archTop - g]);
      // extrude between nIn and nOut: front/back faces + inner curve surface
      const faces = [];
      const tris = triangulateLocal(shape);
      for (const n of [nIn, nOut]) {
        for (const [a, b, c] of tris) {
          const A = L(shape[a][0], n, g + shape[a][1]), B = L(shape[b][0], n, g + shape[b][1]), Cc = L(shape[c][0], n, g + shape[c][1]);
          const away = L(0, n === nIn ? n + 3 : n - 3, (g + archTop) / 2);
          M.triAway(A, B, Cc, n === nOut ? trim : col, away);
        }
      }
      for (let i = 0; i < curve.length - 1; i++) {
        const p = curve[i], q = curve[i + 1];
        M.quadAway(L(p[0], nIn, g + p[1]), L(q[0], nIn, g + q[1]), L(q[0], nOut, g + q[1]), L(p[0], nOut, g + p[1]), shade(col, 0.6), L(0, 0, g + 0.5));
      }
    }
    // jamb faces + passage shading strip (dark inner sides)
    for (const sg of [-1, 1]) {
      const u = sg * (width / 2 - 0.04);
      M.quadAway(L(u, nIn + 0.02, g - 0.3), L(u, nOut - 0.02, g - 0.3), L(u, nOut - 0.02, g + spring), L(u, nIn + 0.02, g + spring), shade(col, 0.62), L(0, 0, g + 1));
    }
    // pishtaq frame on outer face
    if (o.frame !== false) {
      const fw = o.frameW ?? Math.max(0.6, width * 0.18), proud = 0.35;
      const fh = Math.min(archTop - g + (o.frameUp ?? 1.6), top - g - 0.2);
      const nAt = (h) => thick / 2 + batter * Math.max(0, top - h);
      for (const sg of [-1, 1]) {
        const u0 = sg * (width / 2), u1 = sg * (width / 2 + fw);
        boxBatter(M, L, Math.min(u0, u1), Math.max(u0, u1), nAt, -0.05, proud, g - 0.2, g + fh, trim);
      }
      boxBatter(M, L, -width / 2 - fw, width / 2 + fw, nAt, -0.05, proud, g + fh - fw * 0.9, g + fh, trim);
      if (o.panel) {
        boxBatter(M, L, -width * 0.32, width * 0.32, nAt, proud - 0.02, proud + 0.1, archTop + 0.15, Math.min(archTop + 0.95, g + fh - fw * 0.9 - 0.05), this.col(o.panel));
      }
    }
    // doors (open, swung inwards) with spikes
    if (o.doors !== false) {
      const dh = spring + rise * 0.55;
      const wood = this.col(o.doorColor, 'door');
      for (const sg of [-1, 1]) {
        const hingeU = sg * (width / 2 - 0.1), hingeN = -thick / 2 + 0.15;
        const ang = (o.doorAngle ?? 100) * DEG;
        const lw = width / 2 - 0.1;
        // leaf runs from hinge towards centre, rotated inwards (towards -n)
        const du = -sg * Math.cos(ang), dn = -Math.sin(ang);
        const p0 = [hingeU, hingeN], p1 = [hingeU + du * lw, hingeN + dn * lw];
        const th = 0.22;
        const nu = -dn, nn = du; // normal of leaf in (u,n)
        const quad = [[p0[0] + nu * th / 2, p0[1] + nn * th / 2], [p1[0] + nu * th / 2, p1[1] + nn * th / 2], [p1[0] - nu * th / 2, p1[1] - nn * th / 2], [p0[0] - nu * th / 2, p0[1] - nn * th / 2]];
        const planQ = quad.map(([u, n]) => [f.x + tx * u + ox * n, f.y + ty * u + oy * n]);
        M.prism(planQ, g, g + dh, wood, { shadeBase: 0.8 });
        if (o.spikes !== false) {
          const Bs = this.batch('spike', () => spikeGeometry());
          for (let r = 1; r <= 3; r++) for (let c = 1; c <= 3; c++) {
            const t = c / 4, hh = g + dh * (r / 4) * 0.9 + 0.6;
            const pu = p0[0] + du * lw * t + nu * th / 2, pn = p0[1] + dn * lw * t + nn * th / 2;
            const px = f.x + tx * pu + ox * pn, py = f.y + ty * pu + oy * pn;
            const dirx = tx * nu + ox * nn, diry = ty * nu + oy * nn;
            Bs.add(instMatrix(px, py, hh, yawOf(dirx, diry), 0.5, 0.18, 0.18), this.pal.iron);
          }
        }
      }
    }
    // nav: passage tagged as gate
    const hw = width / 2;
    const pq = [[-hw, -thick / 2 - 0.6], [hw, -thick / 2 - 0.6], [hw, thick / 2 + 0.8], [-hw, thick / 2 + 0.8]].map(([u, n]) => [f.x + tx * u + ox * n, f.y + ty * u + oy * n]);
    this.nav.surface({ poly: pq, h: (x, y) => this.ground(x, y), tag: TAG.gate });
    if (o.name) this.zone(pq.map(([x, y]) => [x, y]), o.name);
    this.plan.gates.push({ x: f.x, y: f.y, tx, ty, ox, oy, w: width, thick, name: o.name || null });
    if (o.upper) {
      const up = o.upper;
      if (up === 'chhatri' || up.type === 'chhatri') this.chhatri({ x: f.x - ox * 0.3, y: f.y - oy * 0.3, base: top + 1.1, size: up.size ?? width * 0.9, h: up.h ?? 3 });
      else if (up === 'pavilion' || up.type === 'pavilion') this.pavilion({ x: f.x - ox * 0.6, y: f.y - oy * 0.6, w: width + 3, d: thick - 0.4, rot: yawOf(tx, ty), base: top + 0.05, colH: 2.6, cols: [3, 2], roof: up.roof || 'bangaldar', plinth: 0, walk: false });
    }
  }

  // ------------------------------------------------------------------ gameplay markers
  // {id, at:[x,y], h?, r, title, text, source, kind}
  poi(o) {
    const [x, y] = o.at;
    const h = o.h ?? this.ground(x, y);
    const p = Object.assign({ r: 6, kind: 'place' }, o, { x, y, h, n: this.pois.length + 1 });
    this.pois.push(p);
    this.plan.labels.push({ x, y, text: String(p.n), cls: 'poi', title: o.title });
    return p;
  }
  // a place soldiers can be sent into: {name, at:[x,y], h?, cap, kind}
  garrisonSpot(o) { this.garrisons.push({ name: o.name, x: o.at[0], y: o.at[1], h: o.h ?? this.ground(o.at[0], o.at[1]), cap: o.cap ?? 8, kind: o.kind || 'building', r: o.r ?? 3 }); }
  // open ground that settlers can be invited onto: {name, poly, from:[x,y,h], plots, size:[a,b], kinds}
  settlement(o) {
    const r = rng((this.seed * 61 + this.settlements.length * 7) >>> 0), bb = bbox(o.poly), plots = [];
    const want = o.plots ?? 16, size = o.size ?? [6, 8];
    for (let t = 0; t < want * 60 && plots.length < want; t++) {
      const x = bb.x0 + r() * (bb.x1 - bb.x0), y = bb.y0 + r() * (bb.y1 - bb.y0);
      if (!pointInPoly(x, y, o.poly)) continue;
      const w = size[0] + r() * (size[1] - size[0]), d = size[0] + r() * (size[1] - size[0]) * 0.7;
      if (!this.isFree(x, y, Math.max(w, d) * 0.6 + 1.5)) continue;
      if (plots.some((p) => Math.hypot(p.x - x, p.y - y) < Math.max(w, d) + 3)) continue;
      const lo = this.terrain.rangeAround(x, y, Math.max(w, d) / 2);
      if (lo.hi - lo.lo > 1.6) continue;
      plots.push({ x, y, w, d, rot: o.rot ?? 0, h: lo.lo, built: 0, family: [] });
    }
    for (const p of plots) this.occupy(rectPts(p.x, p.y, p.w + 2, p.d + 2, p.rot), 0.3);
    const S = { name: o.name || 'Settlement', poly: o.poly, from: o.from, plots, kinds: o.kinds || ['villager', 'woman-red', 'woman-green', 'merchant', 'woman-indigo'], open: false, pop: 0 };
    this.settlements.push(S);
    for (const k of S.kinds) this.reserve[k] = (this.reserve[k] || 0) + Math.ceil(plots.length * 3 / S.kinds.length) + 2;
    return S;
  }
  // wildlife at large: {kind: count}, wandering within r metres of (x, y); 'walls': true puts them on the ramparts
  wildlife(o) {
    const [x0, y0, x1, y1] = this.bounds, cx = o.x ?? (x0 + x1) / 2, cy = o.y ?? (y0 + y1) / 2, r = o.r ?? Math.min(x1 - x0, y1 - y0) * 0.45;
    for (const [kind, n] of Object.entries(o.kinds)) {
      if (!n) continue;
      if (o.walls && this.walls[0]) {
        // a troop basking along a stretch of the wall-walk
        const w = this.walls[0], L = w.len || 100;
        for (let k = 0; k < n; k++) this.onFinish.push((Wf) => { const f = Wf.wallFrame(w, (o.s ?? 0.3) * L + k * 3.5); Wf.npc({ kind, circle: [f.x, f.y, 2.5], h: Wf.wallTopAt(w, f.x, f.y), count: 1, speed: 0.6 }); });
      } else this.npc({ kind, circle: [cx, cy, r], count: n, speed: kind === 'wolf' ? 1.0 : 0.6 });
    }
  }
  spawn(x, y, h, facing = 0) { this.spawnAt = { x, y, h: h ?? null, facing }; }
  label(x, y, text, cls = 'label', size = 1) { this.plan.labels.push({ x, y, text, cls, size }); }

  // ------------------------------------------------------------------ misc structural
  stairs(o) {
    // {from:[x,y,h?], to:[x,y,h?], w, color, tag, solid:true, side:false}
    const [x0, y0] = o.from, [x1, y1] = o.to;
    const h0 = o.from[2] ?? this.ground(x0, y0), h1 = o.to[2] ?? this.ground(x1, y1);
    const w = o.w ?? 2.5;
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1;
    const tx = dx / L, ty = dy / L, nx = -ty, ny = tx;
    const col = this.col(o.color, 'stone');
    const rise = Math.abs(h1 - h0);
    const n = Math.max(1, Math.round(rise / (o.riser ?? 0.32)));
    const M = o.mason === false ? this.solid : this.mason;
    for (let k = 0; k < n; k++) {
      const a = k / n, b = (k + 1) / n;
      const hs = lerp(h0, h1, h1 > h0 ? b : a);
      const pts = [
        [x0 + dx * a + nx * w / 2, y0 + dy * a + ny * w / 2], [x0 + dx * a - nx * w / 2, y0 + dy * a - ny * w / 2],
        [x0 + dx * b - nx * w / 2, y0 + dy * b - ny * w / 2], [x0 + dx * b + nx * w / 2, y0 + dy * b + ny * w / 2],
      ];
      let lo = Infinity;
      for (const p of pts) lo = Math.min(lo, this.ground(p[0], p[1]));
      // each step a dressed block: worn, lighter tread; darker riser; a shadow line under the nosing
      const wear = 0.97 + ((k * 7) % 5) * 0.025;
      // treads are single stones (plain, not paved) so a flight reads as steps
      this.solid.prism(pts, Math.min(lo, hs) - 0.6, hs, shade(col, 0.82 * wear), { shadeBase: 0.7, colTop: shade(col, 1.14 * wear) });
      if (k > 0 || h1 < h0) {
        const fr = h1 > h0 ? [pts[0], pts[1]] : [pts[3], pts[2]], dir = h1 > h0 ? -1 : 1;
        const sx = tx * dir * 0.012, sy = ty * dir * 0.012;
        this.decal.quadAway(V(fr[0][0] + sx, fr[0][1] + sy, hs - 0.09), V(fr[1][0] + sx, fr[1][1] + sy, hs - 0.09), V(fr[1][0] + sx, fr[1][1] + sy, hs - 0.03), V(fr[0][0] + sx, fr[0][1] + sy, hs - 0.03), shade(col, 0.45), V((fr[0][0] + fr[1][0]) / 2 - tx * dir, (fr[0][1] + fr[1][1]) / 2 - ty * dir, hs - 0.06));
      }
    }
    const poly = [[x0 + nx * w / 2, y0 + ny * w / 2], [x0 - nx * w / 2, y0 - ny * w / 2], [x1 - nx * w / 2, y1 - ny * w / 2], [x1 + nx * w / 2, y1 + ny * w / 2]];
    const hF = (x, y) => lerp(h0, h1, clamp(((x - x0) * tx + (y - y0) * ty) / L, 0, 1));
    this.nav.surface({ poly, h: hF, tag: o.tag ?? TAG.stairs });
    if (o.solid !== false) this.nav.obstacle({ poly, bottom: -1000, top: (x, y) => hF(x, y) - 0.12 });
    if (o.side) {
      // low side walls (balustrade); o.side may name one side only (+1 or -1) when the other runs against a wall
      for (const sg of (o.side === true ? [-1, 1] : [o.side])) {
        const sp = [[x0 + sg * nx * (w / 2), y0 + sg * ny * (w / 2)], [x1 + sg * nx * (w / 2), y1 + sg * ny * (w / 2)], [x1 + sg * nx * (w / 2 + 0.35), y1 + sg * ny * (w / 2 + 0.35)], [x0 + sg * nx * (w / 2 + 0.35), y0 + sg * ny * (w / 2 + 0.35)]];
        M.prism(sp, (x, y) => Math.min(hF(x, y), this.ground(x, y)) - 0.5, (x, y) => hF(x, y) + 0.8, shade(col, 0.95));
        // sloped coping along the top of the side wall
        const cp = [[x0 + sg * nx * (w / 2 - 0.05), y0 + sg * ny * (w / 2 - 0.05)], [x1 + sg * nx * (w / 2 - 0.05), y1 + sg * ny * (w / 2 - 0.05)], [x1 + sg * nx * (w / 2 + 0.4), y1 + sg * ny * (w / 2 + 0.4)], [x0 + sg * nx * (w / 2 + 0.4), y0 + sg * ny * (w / 2 + 0.4)]];
        M.prism(cp, (x, y) => hF(x, y) + 0.78, (x, y) => hF(x, y) + 0.92, shade(col, 1.1), { colTop: shade(col, 1.16) });
      }
    }
    // a flagged apron at the foot of a flight that starts on open ground, flush with it
    if (o.apron !== false) {
      const low = h1 > h0 ? 0 : 1, fx = low ? x1 : x0, fy = low ? y1 : y0, fh = low ? h1 : h0, sgn = low ? 1 : -1, len = o.apron ?? 1.3;
      const g = this.ground(fx + tx * sgn * len * 0.5, fy + ty * sgn * len * 0.5);
      if (Math.abs(g - fh) < 0.45) {
        const ap = [[fx + nx * (w / 2 + 0.2), fy + ny * (w / 2 + 0.2)], [fx - nx * (w / 2 + 0.2), fy - ny * (w / 2 + 0.2)], [fx - nx * (w / 2 + 0.2) + tx * sgn * len, fy - ny * (w / 2 + 0.2) + ty * sgn * len], [fx + nx * (w / 2 + 0.2) + tx * sgn * len, fy + ny * (w / 2 + 0.2) + ty * sgn * len]];
        M.prism(ap, (x, y) => this.ground(x, y) - 0.4, (x, y) => Math.max(this.ground(x, y), fh) + 0.05, shade(col, 0.96), { colTop: shade(col, 1.08) });
        this.nav.surface({ poly: ap, h: fh + 0.05, tag: TAG.road });
      }
    }
    this.plan.stairs.push({ x0, y0, x1, y1, w, n, up: h1 > h0 });
    this.occupy(poly, 0.3);
    return { poly, h0, h1, tx, ty, nx, ny, L };
  }

  // raised walkable terrace / plinth: {poly, h (abs) | dh, color, tag, edge:'steps'|'plain'}
  platform(o) {
    const poly = o.poly;
    let lo = Infinity; for (const p of poly) lo = Math.min(lo, this.ground(p[0], p[1]));
    const top = o.h ?? lo + (o.dh ?? 1);
    const col = this.col(o.color, 'stone');
    (o.mason === false ? this.solid : this.mason).prism(poly, o.bottom ?? lo - 1.2, top, col, { colTop: o.colorTop ? this.col(o.colorTop) : shade(col, 1.06) });
    this.nav.obstacle({ poly, bottom: lo - 2, top: top - 0.05 });
    if (o.walk !== false) this.nav.surface({ poly, h: top, tag: o.tag ?? TAG.terrace });
    this.plan.polys.push({ pts: poly, cls: o.planCls || 'platform' });
    this.occupy(poly, 0.3);
    return top;
  }

  bridge(o) {
    // {from:[x,y], to:[x,y], w, h, color, rail:true, arches:n}
    const [x0, y0] = o.from, [x1, y1] = o.to;
    const w = o.w ?? 3, h = o.h;
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy);
    const nx = -dy / L, ny = dx / L;
    const poly = [[x0 + nx * w / 2, y0 + ny * w / 2], [x0 - nx * w / 2, y0 - ny * w / 2], [x1 - nx * w / 2, y1 - ny * w / 2], [x1 + nx * w / 2, y1 + ny * w / 2]];
    const col = this.col(o.color, 'stone');
    const h0 = o.h0 ?? h, h1 = o.h1 ?? h;
    const hF = (x, y) => lerp(h0, h1, clamp(((x - x0) * dx + (y - y0) * dy) / (L * L), 0, 1));
    this.solid.prism(poly, (x, y) => hF(x, y) - (o.deck ?? 0.8), hF, col, { bottom: true });
    if (o.piers) {
      for (let k = 1; k < o.piers + 1; k++) {
        const t = k / (o.piers + 1), px = x0 + dx * t, py = y0 + dy * t;
        const lo = this.ground(px, py) - 1;
        this.solid.box(px, py, w * 0.7, 1.4, lo, hF(px, py) - 0.8, Math.atan2(dy, dx) / DEG + 90, shade(col, 0.9));
      }
    }
    this.nav.surface({ poly, h: hF, tag: o.tag ?? TAG.bridge });
    if (o.rail !== false) {
      for (const sg of [-1, 1]) {
        const rp = [[x0 + sg * nx * w / 2, y0 + sg * ny * w / 2], [x1 + sg * nx * w / 2, y1 + sg * ny * w / 2], [x1 + sg * nx * (w / 2 + 0.3), y1 + sg * ny * (w / 2 + 0.3)], [x0 + sg * nx * (w / 2 + 0.3), y0 + sg * ny * (w / 2 + 0.3)]];
        this.solid.prism(rp, (x, y) => hF(x, y) - 0.8, (x, y) => hF(x, y) + 0.9, o.railColor ? this.col(o.railColor) : shade(col, 0.95));
      }
    }
    this.plan.polys.push({ pts: poly, cls: 'bridge' });
    return poly;
  }

  // ------------------------------------------------------------------ water
  tank(o) {
    // {poly | (x,y,r,n,rot), rim (abs), floor (abs), water (abs), tiers, color, step}
    const poly = o.poly || regular(o.x, o.y, o.r, o.n ?? 16, o.rot ?? 0);
    let rim = o.rim; if (rim == null) { let lo = Infinity; for (const p of poly) lo = Math.min(lo, this.ground(p[0], p[1])); rim = lo; }
    const waterH = o.water ?? rim - (o.waterDepth ?? 2.2);
    const floor = o.floor ?? waterH - 1.5;
    const tiers = o.tiers ?? Math.max(2, Math.round((rim - floor) / 0.55));
    const col = this.col(o.color, 'stone');
    if (o.waterPoly) {
      const waterPoly = o.waterPoly;
      const sample = (ring, n) => {
        const edges = ring.map((a, i) => Math.hypot(ring[(i + 1) % ring.length][0] - a[0], ring[(i + 1) % ring.length][1] - a[1]));
        const length = edges.reduce((a, b) => a + b, 0);
        return Array.from({ length: n }, (_, j) => {
          let d = j * length / n, i = 0;
          while (i < edges.length - 1 && d > edges[i]) d -= edges[i++];
          const a = ring[i], b = ring[(i + 1) % ring.length], t = d / edges[i];
          return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
        });
      };
      const n = 96, outer = sample(poly, n), innerW = sample(waterPoly, n);
      const colW = this.col(o.color, "stone");
      this.terrain.apply({ op: "dig", poly, h: floor - 1, edge: 0.25, profile: "linear" });
      const tiersW = o.tiers ?? 4;
      let curW = outer;
      for (let k = 0; k < tiersW; k++) {
        const f = (k + 1) / tiersW;
        const next = outer.map((p, i) => [lerp(p[0], innerW[i][0], f), lerp(p[1], innerW[i][1], f)]);
        const h = lerp(rim, waterH + 0.15, k / tiersW);
        ringPrism(this.mason, curW, next, floor - 0.5, h, k % 2 ? colW : shade(colW, 1.04));
        this.nav.surface({ poly: curW, h, tag: TAG.stairs, ringInner: next });
        curW = next;
      }
      this.solid.prism(waterPoly, floor - 0.5, floor, shade(colW, 0.7));
      this.waterM.cap(waterPoly, waterH, this.col(o.waterColor, "tank"));
      this.waterPolys.push({ poly: waterPoly, level: waterH + 0.01 });
      this.plan.polys.push({ pts: poly, cls: "tank" }, { pts: waterPoly, cls: "tank-water" });
      this.occupy(poly, 0.5);
      this.tanks.push({ poly, rim, waterH, waterPoly });
      return { poly, rim, waterH };
    }
    const cen = centroidOf(poly);
    const inset = o.inset ?? 0.9;
    this.terrain.apply({ op: 'dig', poly: shrink(poly, cen, 0.3), h: floor - 1.2, edge: 0.6, profile: 'linear' });
    // dig terrain is expected beforehand via def.terrain (dig op), but we also add a coping ring
    let cur = poly;
    for (let k = 0; k < tiers; k++) {
      const hTop = lerp(rim, floor, k / tiers);
      const inner = shrink(cur, cen, inset);
      // tier ring: between cur and inner at hTop
      ringPrism(this.solid, cur, inner, floor - 0.6, hTop, k % 2 ? col : shade(col, 1.06));
      if (hTop > waterH - 0.05) {
        this.nav.surface({ poly: cur, h: hTop, tag: TAG.stairs, ringInner: inner });
      }
      cur = inner;
    }
    // floor slab under water
    this.solid.prism(cur, floor - 0.8, floor, shade(col, 0.7));
    this.waterM.cap(poly, waterH, this.col(o.waterColor, 'tank'));
    this.waterPolys.push({ poly, level: waterH + 0.01 });
    this.plan.polys.push({ pts: poly, cls: 'tank' });
    this.plan.polys.push({ pts: cur, cls: 'tank-water' });
    this.occupy(poly, 0.5);
    this.tanks.push({ poly, rim, waterH });
    return { poly, rim, waterH };
  }

  // open water inside the level (lakes, wet moats): {poly, level, color}. Dig the terrain below `level` first.
  water(o) {
    this.waterM.cap(o.poly, o.level, this.col(o.color, 'tank'));
    this.waterPolys.push({ poly: o.poly, level: o.level + 0.01 });
    this.plan.polys.push({ pts: o.poly, cls: 'tank-water' });
  }

  // rock-cut tunnel inside a hill: {path:[[x,y,h],...], w, height, name, portals:true}
  // The floor is walkable even though it lies below the terrain surface; the darkness overlay shows inside.
  tunnel(o) {
    const pts = o.path, w = o.w ?? 2.4, hh = o.height ?? 2.8;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, y0, h0] = pts[i], [x1, y1, h1] = pts[i + 1];
      const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1, nx = -dy / L * (w / 2), ny = dx / L * (w / 2);
      const ext = 0.6 / L; // overlap neighbouring segments slightly
      const ax = x0 - dx * ext, ay = y0 - dy * ext, bx = x1 + dx * ext, by = y1 + dy * ext;
      const poly = [[ax + nx, ay + ny], [ax - nx, ay - ny], [bx - nx, by - ny], [bx + nx, by + ny]];
      const hF = (x, y) => lerp(h0, h1, clamp(((x - x0) * dx + (y - y0) * dy) / (L * L), 0, 1));
      this.nav.surface({ poly, h: hF, tag: TAG.tunnel, tunnel: true });
      this.plan.lines.push({ pts: [[x0, y0], [x1, y1]], cls: 'tunnel' });
    }
    if (o.name) for (let i = 0; i < pts.length - 1; i++) {
      const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
      const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1, nx = -dy / L * (w / 2 + 0.5), ny = dx / L * (w / 2 + 0.5);
      this.zone([[x0 + nx, y0 + ny], [x0 - nx, y0 - ny], [x1 - nx, y1 - ny], [x1 + nx, y1 + ny]], o.name);
    }
    // portals: dark arched mouths with a stone frame where the path meets daylight
    if (o.portals !== false) {
      const col = this.col(o.color, 'rock');
      for (const [a, b] of [[pts[0], pts[1]], [pts[pts.length - 1], pts[pts.length - 2]]]) {
        const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, tx = dx / L, ty = dy / L, nx = -ty, ny = tx;
        const P = (u, v, h) => V(a[0] + nx * u + tx * v, a[1] + ny * u + ty * v, a[2] + h);
        const away = V(a[0] - tx * 3, a[1] - ty * 3, a[2] + 1);
        this.decal.quadAway(P(-w / 2, -0.05, 0), P(w / 2, -0.05, 0), P(w / 2, -0.05, hh * 0.75), P(-w / 2, -0.05, hh * 0.75), [0.02, 0.02, 0.02], away);
        this.decal.triAway(P(-w / 2, -0.05, hh * 0.75), P(w / 2, -0.05, hh * 0.75), P(0, -0.05, hh), [0.02, 0.02, 0.02], away);
        boxLocal(this.solid, (u, n, h) => V(a[0] + nx * u + tx * n, a[1] + ny * u + ty * n, a[2] + h), -w / 2 - 0.6, -w / 2, -0.3, 0.4, -0.2, hh + 0.2, shade(col, 0.9));
        boxLocal(this.solid, (u, n, h) => V(a[0] + nx * u + tx * n, a[1] + ny * u + ty * n, a[2] + h), w / 2, w / 2 + 0.6, -0.3, 0.4, -0.2, hh + 0.2, shade(col, 0.9));
        boxLocal(this.solid, (u, n, h) => V(a[0] + nx * u + tx * n, a[1] + ny * u + ty * n, a[2] + h), -w / 2 - 0.6, w / 2 + 0.6, -0.3, 0.4, hh, hh + 0.6, shade(col, 0.9));
      }
    }
  }

  // ------------------------------------------------------------------ finish
  finish() {
    if (this.def.onBuilt) this.def.onBuilt(this);
    // room for the companies of this period's battle, if it has one
    for (const q of [].concat(this.def.battles?.[this.era] || [])) for (const list of [q.own, q.enemy]) for (const d of list || []) this.reserve[d.kind] = (this.reserve[d.kind] || 0) + d.n;
    // ambient life for forts that do not set their own: birds overhead and a couple of dogs near the approach
    if (!this.def.ownFauna && !(this.birdFlocks || []).length && this.spawnAt) {
      const [x0, y0, x1, y1] = this.bounds, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, top = this.terrain.h.reduce((m, v) => (v > m ? v : m), -Infinity);
      this.birds({ x: cx, y: cy, h: top + 25, r: Math.min(x1 - x0, y1 - y0) * 0.25, n: 1, kind: 'kite', speed: 0.05 });
      this.birds({ x: this.spawnAt.x, y: this.spawnAt.y, h: this.ground(this.spawnAt.x, this.spawnAt.y) + 18, r: 30, n: 7, kind: 'crow', speed: 0.17 });
      if (this.seaLevel != null) this.birds({ x: cx, y: cy, h: 22, r: Math.min(x1 - x0, y1 - y0) * 0.45, n: 8, kind: 'gull', speed: 0.06 });
      this.npc({ kind: 'dog', circle: [this.spawnAt.x, this.spawnAt.y, 25], count: 2, speed: 0.8 });
    }
    // patch nav.surface for ring polygons (tank tiers): convert to explicit quads
    for (const w of this.walls) this._buildWall(w);
    for (const b of this.bastions) this._buildBastion(b);
    for (const G of this.gates) this._buildGate(G);
    // ring surfaces -> quads
    const surf = this.nav.surfaces;
    for (let i = surf.length - 1; i >= 0; i--) {
      const s = surf[i];
      if (!s.ringInner) continue;
      surf.splice(i, 1);
      const A = s.poly, B = s.ringInner;
      for (let k = 0; k < A.length; k++) {
        const k2 = (k + 1) % A.length;
        surf.push({ poly: [A[k], A[k2], B[k2], B[k]], h: s.h, tag: s.tag });
      }
    }
    if (this.fieldsFromPaint && this.def.groundDetail !== false) this.fieldsFromPaint();
    if (this.townLife && this.def.townLife !== false) this.townLife();
    if (this.groundStones && this.def.groundDetail !== false) this.groundStones();
    this.nav.bake(this.terrain, (x, y) => this.waterLevelAt(x, y));
    if (this.desirePaths && this.def.groundDetail !== false) this.desirePaths();
    for (const fn of this.onFinish) fn(this);
  }
}

// ---------------------------------------------------------------- helpers
export function polyCircle(x, y, r, n = 16) { const o = []; for (let i = 0; i < n; i++) { const a = (i / n) * TAU; o.push([x + Math.cos(a) * r, y + Math.sin(a) * r]); } return o; }
export function regular(x, y, r, n, rotDeg = 0) { const o = []; for (let i = 0; i < n; i++) { const a = rotDeg * DEG + (i / n) * TAU; o.push([x + Math.cos(a) * r, y + Math.sin(a) * r]); } return o; }
export function centroidOf(p) { let x = 0, y = 0; for (const q of p) { x += q[0]; y += q[1]; } return [x / p.length, y / p.length]; }
export function shrink(poly, cen, d) {
  // inset polygon by d (miter offset towards interior)
  const ccw = polyArea(poly) > 0;
  return offsetPolyline(poly, true, ccw ? d : -d, 2.5);
}
function ringPrism(M, outer, inner, h0, h1, col) {
  const n = outer.length;
  const cb = shade(col, 0.8);
  const ccw = polyArea(outer) > 0;
  for (let k = 0; k < n; k++) {
    const k2 = (k + 1) % n;
    const a = outer[k], b = outer[k2], c = inner[k2], d = inner[k];
    const up = ccw ? [V(a[0], a[1], h1), V(b[0], b[1], h1), V(c[0], c[1], h1), V(d[0], d[1], h1)] : [V(d[0], d[1], h1), V(c[0], c[1], h1), V(b[0], b[1], h1), V(a[0], a[1], h1)];
    M.quad(up[0], up[1], up[2], up[3], col);
    // inner riser (facing inward)
    const mid = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
    const outerMid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    M.quadAway(V(d[0], d[1], h0), V(c[0], c[1], h0), V(c[0], c[1], h1), V(d[0], d[1], h1), cb, V(outerMid[0], outerMid[1], (h0 + h1) / 2));
  }
}
function boxLocal(M, L, u0, u1, n0, n1, h0, h1, col) {
  const P = (u, n, h) => L(u, n, h);
  const c = L((u0 + u1) / 2, (n0 + n1) / 2, (h0 + h1) / 2);
  const cb = shade(col, 0.85);
  M.quadAway(P(u0, n1, h0), P(u1, n1, h0), P(u1, n1, h1), P(u0, n1, h1), [cb, cb, col, col], c);
  M.quadAway(P(u0, n0, h0), P(u1, n0, h0), P(u1, n0, h1), P(u0, n0, h1), [cb, cb, col, col], c);
  M.quadAway(P(u0, n0, h0), P(u0, n1, h0), P(u0, n1, h1), P(u0, n0, h1), [cb, cb, col, col], c);
  M.quadAway(P(u1, n0, h0), P(u1, n1, h0), P(u1, n1, h1), P(u1, n0, h1), [cb, cb, col, col], c);
  M.quadAway(P(u0, n0, h1), P(u1, n0, h1), P(u1, n1, h1), P(u0, n1, h1), shade(col, 1.05), c);
  M.quadAway(P(u0, n0, h0), P(u1, n0, h0), P(u1, n1, h0), P(u0, n1, h0), cb, c);
}
export { boxLocal };
export function boxBatter(M, L, u0, u1, nAt, d0, d1, h0, h1, col) {
  const P = (u, d, h) => L(u, nAt(h) + d, h);
  const c = L((u0 + u1) / 2, nAt((h0 + h1) / 2) + (d0 + d1) / 2, (h0 + h1) / 2);
  const cb = shade(col, 0.85);
  M.quadAway(P(u0, d1, h0), P(u1, d1, h0), P(u1, d1, h1), P(u0, d1, h1), [cb, cb, col, col], c);
  M.quadAway(P(u0, d0, h0), P(u0, d1, h0), P(u0, d1, h1), P(u0, d0, h1), [cb, cb, col, col], c);
  M.quadAway(P(u1, d0, h0), P(u1, d1, h0), P(u1, d1, h1), P(u1, d0, h1), [cb, cb, col, col], c);
  M.quadAway(P(u0, d0, h1), P(u1, d0, h1), P(u1, d1, h1), P(u0, d1, h1), shade(col, 1.05), c);
  M.quadAway(P(u0, d0, h0), P(u1, d0, h0), P(u1, d1, h0), P(u0, d1, h0), cb, c);
}
function triangulateLocal(shape) {
  // ear clipping on [u,v] polygon
  const pts = shape.map((p) => [p[0], p[1]]);
  const area = polyArea(pts);
  const idx = pts.map((_, i) => i);
  if (area < 0) idx.reverse();
  const out = [];
  const isEar = (a, b, c) => {
    const A = pts[a], B = pts[b], Cc = pts[c];
    const cr = (B[0] - A[0]) * (Cc[1] - A[1]) - (B[1] - A[1]) * (Cc[0] - A[0]);
    if (cr <= 1e-9) return false;
    for (const k of idx) {
      if (k === a || k === b || k === c) continue;
      const p = pts[k];
      const d1 = (p[0] - B[0]) * (A[1] - B[1]) - (A[0] - B[0]) * (p[1] - B[1]);
      const d2 = (p[0] - Cc[0]) * (B[1] - Cc[1]) - (B[0] - Cc[0]) * (p[1] - Cc[1]);
      const d3 = (p[0] - A[0]) * (Cc[1] - A[1]) - (Cc[0] - A[0]) * (p[1] - A[1]);
      const neg = d1 < 0 || d2 < 0 || d3 < 0, pos = d1 > 0 || d2 > 0 || d3 > 0;
      if (!(neg && pos)) return false;
    }
    return true;
  };
  let guard = 0;
  while (idx.length > 3 && guard++ < 5000) {
    let found = false;
    for (let i = 0; i < idx.length; i++) {
      const a = idx[(i - 1 + idx.length) % idx.length], b = idx[i], c = idx[(i + 1) % idx.length];
      if (isEar(a, b, c)) { out.push([a, b, c]); idx.splice(i, 1); found = true; break; }
    }
    if (!found) break;
  }
  if (idx.length === 3) out.push([idx[0], idx[1], idx[2]]);
  return out;
}

// --------------------------------------------------------------- instanced unit geometries
function extrudeShape(outline, depth = 1) {
  // outline in (u,v) with u in [-0.5,0.5], v in [0,1]; extrude along z in [-0.5, 0.5]
  const M = new Mesher(0.04);
  const white = [1, 1, 1];
  const tris = triangulateLocal(outline);
  const P = (u, v, z) => [u, v, z];
  for (const z of [-depth / 2, depth / 2]) for (const [a, b, c] of tris) {
    const A = P(outline[a][0], outline[a][1], z), B = P(outline[b][0], outline[b][1], z), Cc = P(outline[c][0], outline[c][1], z);
    M.triAway(A, B, Cc, white, [0, 0.5, z > 0 ? -5 : 5]);
  }
  for (let i = 0; i < outline.length; i++) {
    const p = outline[i], q = outline[(i + 1) % outline.length];
    M.quadAway(P(p[0], p[1], -depth / 2), P(q[0], q[1], -depth / 2), P(q[0], q[1], depth / 2), P(p[0], p[1], depth / 2), white, [0, 0.45, 0]);
  }
  return M.toGeometry();
}
export function merlonGeometry(style, slit = false) {
  let o;
  if (style === 'rect') o = [[-0.5, 0], [0.5, 0], [0.5, 1], [-0.5, 1]];
  else if (style === 'kangura') {
    // Rajput/Mughal leaf merlon: shoulders + pointed top
    o = [[-0.5, 0], [0.5, 0], [0.5, 0.55], [0.32, 0.62], [0.18, 0.86], [0, 1.05], [-0.18, 0.86], [-0.32, 0.62], [-0.5, 0.55]];
  } else if (style === 'pointed') {
    o = [[-0.5, 0], [0.5, 0], [0.5, 0.6], [0, 1.05], [-0.5, 0.6]];
  } else if (style === 'loop') {
    o = [[-0.5, 0], [0.5, 0], [0.5, 1], [-0.5, 1]];
  } else {
    // round (Deccan): rectangle with semicircular cap
    o = [[-0.5, 0], [0.5, 0], [0.5, 0.55]];
    for (let i = 1; i < 6; i++) { const a = (i / 6) * Math.PI; o.push([Math.cos(a) * 0.5, 0.55 + Math.sin(a) * 0.45]); }
    o.push([-0.5, 0.55]);
  }
  // local: u along +X, v up (+Y), depth along Z. Our instance yaw maps local +X to wall tangent.
  if (!slit) return extrudeShape(o, 1);
  // loophole: a narrow dark slit on both faces (musketry loop through the merlon)
  const g = extrudeShape(o, 1);
  const M = new Mesher(0);
  M.geometry(g, null, [1, 1, 1]);
  const dark = [0.1, 0.09, 0.08];
  for (const z of [-0.505, 0.505]) {
    const q = [[-0.07, 0.18], [0.07, 0.18], [0.07, 0.62], [0, 0.7], [-0.07, 0.62]];
    for (let k = 1; k < q.length - 1; k++) M.triAway([q[0][0], q[0][1], z], [q[k][0], q[k][1], z], [q[k + 1][0], q[k + 1][1], z], dark, [0, 0.4, -z * 4]);
  }
  g.dispose();
  return M.toGeometry();
}
export function spikeGeometry() {
  const g = new THREE.ConeGeometry(0.5, 1, 5);
  g.rotateZ(-Math.PI / 2); g.translate(0.5, 0, 0);
  const M = new Mesher(0);
  M.geometry(g, null, [1, 1, 1]);
  return M.toGeometry();
}
