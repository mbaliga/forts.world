// Ground detail for every fort: pebbles and fieldstones, gravel on unpaved tracks, and paths worn into the grass
// along the routes people actually take (between the approach, the gates and the places worth visiting).
import * as THREE from 'three';
import { World, instMatrix } from './world.js';
import { PAINT } from './terrain.js';
import { TAG } from './nav.js';
import { Mesher, smoothGeometry } from './mesher.js';
import { rng, makeNoise } from './geom.js';

const W = World.prototype;
function pebbleGeo(det = 0) {
  const g = new THREE.IcosahedronGeometry(0.5, det), p = g.attributes.position, nz = makeNoise(17);
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 0.8 + 0.3 * nz(x * 2 + z, y * 2); p.setXYZ(i, x * k * 1.2, Math.max(-0.1, y * k * 0.55), z * k); }
  const M = new Mesher(0.05); M.geometry(g, null, [1, 1, 1]); return smoothGeometry(M.toGeometry(), 60);
}

// before the nav is baked: stones that do not block anyone
W.groundStones = function () {
  const T = this.terrain, r = rng(this.seed * 131 + 7), sea = this.seaLevel ?? -1e9, nz = makeNoise(this.seed * 7 + 3);
  const B = this.batch('pebble', () => pebbleGeo(0), { cast: false }), F = this.batch('fieldstone', () => pebbleGeo(1), { cast: true });
  const rock = this.col('rock'), road = this.col('road');
  const [x0, y0, x1, y1] = this.bounds;
  let n = 0;
  for (let y = y0; y < y1; y += 1.6) for (let x = x0; x < x1; x += 1.6) {
    const px = x + r() * 1.6, py = y + r() * 1.6, h = this.ground(px, py);
    if (h < sea + 0.2 || this.waterLevelAt(px, py) > h - 0.1) continue;
    const paint = T.paintAt(px, py);
    if (paint === PAINT.paved || paint === PAINT.court || paint === PAINT.garden || paint === PAINT.field) continue;
    const sl = Math.abs(this.ground(px + 1, py) - this.ground(px - 1, py)) + Math.abs(this.ground(px, py + 1) - this.ground(px, py - 1));
    // stony where the ground is rocky or steep, gravelly on unpaved tracks, a few stones elsewhere in patches
    const patch = nz(px / 18, py / 18) * 0.5 + 0.5;
    const want = paint === PAINT.rock ? 0.9 : paint === PAINT.road ? 0.75 : paint === PAINT.sand ? 0.08 : Math.min(0.85, 0.12 + sl * 0.35 + (patch > 0.7 ? 0.3 : 0));
    if (r() > want * 0.45) continue;
    if (!this.isFree(px, py, 0.15)) continue;
    const col = paint === PAINT.road ? road : rock, t = 0.75 + r() * 0.4;
    const k = paint === PAINT.road ? 2 + (r() * 3 | 0) : 1 + (r() < 0.4 ? 1 : 0);
    for (let j = 0; j < k; j++) {
      const qx = px + (r() - 0.5) * 1.2, qy = py + (r() - 0.5) * 1.2, s = paint === PAINT.road ? 0.06 + r() * 0.08 : 0.08 + r() * 0.16;
      B.add(instMatrix(qx, qy, this.ground(qx, qy) - s * 0.15, r() * 360, s, s, s), [col[0] * t, col[1] * t, col[2] * t]);
    }
    // occasional fieldstone on slopes and rocky ground
    if ((paint === PAINT.rock || sl > 0.8 || patch > 0.82) && r() < 0.12 && F.m.length < 600) { const s = 0.25 + r() * 0.5; F.add(instMatrix(px, py, h - s * 0.2, r() * 360, s * 1.3, s, s), [rock[0] * t, rock[1] * t, rock[2] * t]); }
    if (B.m.length > 9000) return;
  }
};

// after the nav is baked: wear paths along the routes between the approach, the gates and the places of interest
W.desirePaths = function () {
  const nav = this.nav, T = this.terrain, w = T.nx + 1;
  const pts = [];
  if (this.spawnAt) pts.push([this.spawnAt.x, this.spawnAt.y, this.spawnAt.h ?? this.ground(this.spawnAt.x, this.spawnAt.y)]);
  for (const p of this.pois) pts.push([p.x, p.y, p.h ?? this.ground(p.x, p.y)]);
  for (const g of this.gates || []) if (g.f) pts.push([g.f.x, g.f.y, g.g ?? this.ground(g.f.x, g.f.y)]);
  for (const t of this.towns || []) if (t.market) pts.push([t.market[0], t.market[1], this.ground(t.market[0], t.market[1])]);
  if (pts.length < 2) return;
  const traffic = new Float32Array(w * (T.ny + 1));
  const walk = (a, b, wt) => {
    const path = nav.findPath(a, b); if (!path) return;
    for (let i = 1; i < path.length; i++) {
      const [ax, ay, ah] = path[i - 1], [bx, by, bh] = path[i], L = Math.hypot(bx - ax, by - ay), n = Math.max(1, Math.ceil(L / (T.stride * 0.5)));
      for (let k = 0; k <= n; k++) {
        const x = ax + (bx - ax) * k / n, y = ay + (by - ay) * k / n, h = ah + (bh - ah) * k / n;
        if (Math.abs(h - this.ground(x, y)) > 0.5) continue; // on a wall, a bridge or a floor: no wear
        const i2 = Math.round((x - T.x0) / T.stride), j2 = Math.round((y - T.y0) / T.stride);
        if (i2 < 0 || j2 < 0 || i2 > T.nx || j2 > T.ny) continue;
        traffic[j2 * w + i2] += wt;
      }
    }
  };
  // from the approach to everything, and between neighbouring places
  for (let i = 1; i < pts.length; i++) walk(pts[0], pts[i], 2);
  for (let i = 1; i < pts.length; i++) {
    const near = pts.map((p, j) => [j, Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1])]).filter(([j]) => j !== i && j > 0).sort((a, b) => a[1] - b[1]).slice(0, 2);
    for (const [j] of near) walk(pts[i], pts[j], 1);
  }
  // spread the wear a little sideways, then paint the worn ground where it crosses grass or scrub
  const r = rng(this.seed * 17 + 1);
  let worn = 0;
  for (let j = 1; j < T.ny; j++) for (let i = 1; i < T.nx; i++) {
    const k = j * w + i;
    const t = traffic[k] + 0.35 * (traffic[k - 1] + traffic[k + 1] + traffic[k - w] + traffic[k + w]);
    if (t < 1.5) continue;
    const p = T.paint[k];
    if (p !== PAINT.natural && p !== PAINT.field) continue;
    if (t < 3 && r() < 0.4) continue;
    T.paint[k] = PAINT.worn; worn++;
  }
  // nothing grows on a worn path: drop the ground cover standing on it, leave a little grit
  const onWorn = (x, y) => { const i2 = Math.round((x - T.x0) / T.stride), j2 = Math.round((y - T.y0) / T.stride); return T.paint[j2 * w + i2] === PAINT.worn; };
  for (const key of ['tree-grass', 'tree-flowers', 'tree-reed', 'tree-bush']) {
    const B = this.inst[key]; if (!B) continue;
    const keepM = [], keepC = [];
    B.m.forEach((m, i) => { const x = m.elements[12], y = -m.elements[14]; if (!onWorn(x, y)) { keepM.push(m); keepC.push(B.c[i]); } });
    B.m = keepM; B.c = keepC;
  }
  this.wornCells = worn;
};

// ---------------------------------------------------------------- farmed fields from the painted field ground
// Every patch of field paint becomes a working field with the region's crop and a few farmers.
const REGION_CROP = (def) => /Rajasthan/.test(def.region) ? 'bajra' : /Tamil/.test(def.region) ? 'rice' : /Madhya/.test(def.region) ? 'wheat' : /Telangana|Deccan|Aurangabad/.test(def.region + def.name) ? 'jowar' : 'jowar';
W.fieldsFromPaint = function () {
  const T = this.terrain, w = T.nx + 1, seen = new Uint8Array(w * (T.ny + 1)), crop = this.def.fieldCrop || REGION_CROP(this.def);
  const geo = crop === 'rice' ? 'veg' : 'millet';
  let made = 0;
  for (let j = 0; j <= T.ny; j++) for (let i = 0; i <= T.nx; i++) {
    const k0 = j * w + i; if (seen[k0] || T.paint[k0] !== PAINT.field) continue;
    // flood the patch
    const cells = [], st = [k0]; seen[k0] = 1;
    while (st.length) { const k = st.pop(); cells.push(k); const ci = k % w, cj = (k / w) | 0; for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const ii = ci + a, jj = cj + b; if (ii < 0 || jj < 0 || ii > T.nx || jj > T.ny) continue; const kk = jj * w + ii; if (!seen[kk] && T.paint[kk] === PAINT.field) { seen[kk] = 1; st.push(kk); } } }
    const area = cells.length * T.stride * T.stride; if (area < 300) continue;
    // split the patch into irregular parcels (nearest of a few seed cells), each with its own row direction
    const r = rng(this.seed * 7 + k0), np = Math.max(1, Math.min(6, Math.round(area / 1400)));
    const seeds = Array.from({ length: np }, () => cells[Math.floor(r() * cells.length)]).map((k) => [T.vx(k % w) + (r() - 0.5) * 6, T.vy((k / w) | 0) + (r() - 0.5) * 6]);
    const parcels = seeds.map(() => []);
    for (const k of cells) { const x = T.vx(k % w), y = T.vy((k / w) | 0); let bi = 0, bd = Infinity; seeds.forEach(([sx, sy], i) => { const d = (x - sx) ** 2 + (y - sy) ** 2 * 1.3; if (d < bd) { bd = d; bi = i; } }); parcels[bi].push(k); }
    const names = { bajra: 'Bajra field', jowar: 'Jowar field', wheat: 'Wheat field', rice: 'Paddy' };
    for (const pc of parcels) {
      if (pc.length * T.stride * T.stride < 120) continue;
      const hull = convexHull(pc.map((k) => [T.vx(k % w), T.vy((k / w) | 0)]));
      this.garden({ poly: hull, crop: geo, rot: r() * 180, name: names[crop], cropKind: crop, cells: new Set(pc), cellOf: (x, y) => Math.round((y - T.y0) / T.stride) * w + Math.round((x - T.x0) / T.stride) });
      this.fields[this.fields.length - 1].crop = crop;
      this.npc({ kind: 'farmer', zone: hull, count: Math.max(1, Math.min(3, Math.round(pc.length * T.stride * T.stride / 900))), speed: 0.5 });
    }
    if (++made > 12) return;
  }
};
function convexHull(P) {
  const p = P.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]); if (p.length < 3) return p;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}

// ---------------------------------------------------------------- town life: markets, crowds, lanterns and fires
// Every cluster of houses gets a market square with stalls and vendors, townspeople about their business by day
// (indoors by night), watchmen by night, lanterns at a share of doors and at the stalls, and cooking fires.
function stallGeo(cloth) {
  const M = new Mesher(0.03), wood = [0.42, 0.3, 0.2];
  for (const [x, z] of [[-1, -0.7], [1, -0.7], [-1, 0.7], [1, 0.7]]) { const p = new THREE.CylinderGeometry(0.04, 0.04, 2.1, 5); p.translate(x, 1.05, z); M.geometry(p, null, wood); }
  const aw = new THREE.BoxGeometry(2.3, 0.05, 1.8); aw.rotateX(0.18); aw.translate(0, 2.15, 0); M.geometry(aw, null, cloth);
  const tb = new THREE.BoxGeometry(2.0, 0.08, 1.2); tb.translate(0, 0.8, 0.1); M.geometry(tb, null, wood);
  return M.toGeometry();
}
W.townLife = function () {
  const houses = this.garrisons.filter((g) => g.use === 'house');
  if (houses.length < 10) return;
  const r = rng(this.seed * 31 + 3);
  // cluster houses on a 70 m grid
  const cells = new Map();
  for (const h of houses) { const k = `${Math.floor(h.x / 70)},${Math.floor(h.y / 70)}`; if (!cells.has(k)) cells.set(k, []); cells.get(k).push(h); }
  const clusters = [...cells.values()].filter((c) => c.length >= 8).sort((a, b) => b.length - a.length).slice(0, 6);
  const goods = [[0.82, 0.66, 0.32], [0.72, 0.24, 0.12], [0.85, 0.6, 0.15], [0.5, 0.36, 0.2], [0.75, 0.7, 0.55]];
  const cloths = [[0.75, 0.22, 0.15], [0.9, 0.62, 0.2], [0.85, 0.82, 0.72], [0.25, 0.4, 0.6], [0.55, 0.2, 0.4]];
  this.towns = [];
  for (const cl of clusters) {
    const cx = cl.reduce((s, h) => s + h.x, 0) / cl.length, cy = cl.reduce((s, h) => s + h.y, 0) / cl.length;
    // a market square: the most open spot near the middle of the cluster
    let best = null;
    for (let t = 0; t < 60 && !best; t++) { const a = r() * Math.PI * 2, d = t * 0.6, x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d; if (this.isFree(x, y, 7)) best = [x, y]; }
    const hull = convexHull(cl.map((h) => [h.x, h.y])); if (hull.length < 3) continue;
    if (best) {
      const [mx, my] = best, n = 4 + Math.min(6, (cl.length / 6) | 0);
      for (let i = 0; i < n; i++) {
        const a = i / n * Math.PI * 2, x = mx + Math.cos(a) * 5.2, y = my + Math.sin(a) * 5.2, rot = (a * 180 / Math.PI) + 90, g = this.ground(x, y);
        const cloth = cloths[i % cloths.length];
        this.batch('stall-' + (i % cloths.length), () => stallGeo(cloth), { cast: true }).add(instMatrix(x, y, g, rot, 1, 1, 1), [1, 1, 1]);
        // goods on the table: grain heaps, spice cones, pots, bolts of cloth
        for (let k = 0; k < 3; k++) { const gx = x + Math.cos(a) * 0.1 + Math.cos(a + Math.PI / 2) * (k - 1) * 0.55, gy = y + Math.sin(a) * 0.1 + Math.sin(a + Math.PI / 2) * (k - 1) * 0.55; this.batch('goods', () => { const M = new Mesher(0); const c = new THREE.ConeGeometry(0.22, 0.26, 8); c.translate(0, 0.13, 0); M.geometry(c, null, [1, 1, 1]); return M.toGeometry(); }, { cast: false }).add(instMatrix(gx, gy, g + 0.84, r() * 360, 1, 0.8 + r() * 0.5, 1), goods[(i + k) % goods.length]); }
        this.npc({ kind: r() < 0.3 ? 'woman-red' : 'villager', at: [mx + Math.cos(a) * 6.6, my + Math.sin(a) * 6.6], face: (a * 180 / Math.PI) + 180, mode: 'idle', dayOnly: true });
        this.particles.push({ nightOnly: true, kind: 'fire', x, y, h: g + 2.0, n: 6, stream: true, period: 0.6, life: [0.3, 0.5], up: [0.3, 0.8], outV: [0, 0], side: 0.06, g: 0, size: [0.32, 0.08], color: '#ffb050', alpha: 0.9, flash: true, jitter: 0.1, seed: x * 3 + y });
      }
      this.zone([[mx - 8, my - 8], [mx + 8, my - 8], [mx + 8, my + 8], [mx - 8, my + 8]], 'Market');
      this.npc({ kind: 'villager', circle: [mx, my, 7], count: 6, speed: 0.6, dayOnly: true });
      this.npc({ kind: 'woman-red', circle: [mx, my, 7], count: 4, speed: 0.5, dayOnly: true });
    }
    // townspeople about the lanes by day; watchmen at night
    this.npc({ kind: 'villager', zone: hull, count: Math.min(16, (cl.length / 3) | 0), speed: 0.75, dayOnly: true });
    this.npc({ kind: 'porter', zone: hull, count: Math.min(5, (cl.length / 10) | 0 + 1), speed: 0.7, dayOnly: true });
    this.npc({ kind: 'woman-red', zone: hull, count: Math.min(8, (cl.length / 5) | 0), speed: 0.55, dayOnly: true });
    this.npc({ kind: 'villager', zone: hull, count: 2, speed: 0.5, nightOnly: true });
    // lanterns at a share of doors, cooking smoke at others
    for (const h of cl) {
      const g = this.ground(h.x, h.y);
      if (r() < 0.22) this.particles.push({ nightOnly: true, kind: 'fire', x: h.x, y: h.y, h: g + 2.1, n: 5, stream: true, period: 0.7, life: [0.3, 0.5], up: [0.2, 0.6], outV: [0, 0], side: 0.05, g: 0, size: [0.28, 0.07], color: '#ffb860', alpha: 0.9, flash: true, jitter: 0.08, seed: h.x + h.y * 7 });
      else if (r() < 0.06) this.particles.push({ kind: 'smoke', x: h.x, y: h.y, h: g + 3.5, n: 8, stream: true, period: 2.5, life: [4, 8], up: [0.4, 0.9], outV: [0.1, 0.3], side: 0.3, g: -0.02, size: [0.6, 2.4], color: '#d8d4cc', alpha: 0.25, drag: 0.6, wind: [0.4, 0.15], seed: h.x * 2 + h.y });
    }
    this.towns.push({ x: cx, y: cy, hull, market: best, houses: cl.length });
  }
};

// ---------------------------------------------------------------- a real street plan (see tools/osm2level.mjs)
// Roads are painted (wider for main roads, packed earth for lanes in the old periods); buildings become houses on
// their real footprints where the ground is free; markets become market squares. Call in a level's build().
W.applyOSM = function (osm, { era = null, old = true, maxBuildings = 1500 } = {}) {
  const T = this.terrain, w = T.nx + 1, [bx0, by0, bx1, by1] = this.bounds;
  const inB = (x, y) => x > bx0 + 4 && x < bx1 - 4 && y > by0 + 4 && y < by1 - 4;
  for (const r of osm.roads) {
    if (old && /primary|secondary/.test(r.type) === false && r.w > 6) continue;
    for (let i = 1; i < r.pts.length; i++) {
      const [ax, ay] = r.pts[i - 1], [bx, by] = r.pts[i], L = Math.hypot(bx - ax, by - ay), n = Math.ceil(L / (T.stride * 0.5));
      for (let k = 0; k <= n; k++) { const x = ax + (bx - ax) * k / n, y = ay + (by - ay) * k / n; if (!inB(x, y)) continue;
        const rr = Math.ceil(r.w / 2 / T.stride); const ci = Math.round((x - T.x0) / T.stride), cj = Math.round((y - T.y0) / T.stride);
        for (let dj = -rr; dj <= rr; dj++) for (let di = -rr; di <= rr; di++) { const ii = ci + di, jj = cj + dj; if (ii < 0 || jj < 0 || ii > T.nx || jj > T.ny) continue; if (Math.hypot(di, dj) * T.stride > r.w / 2) continue; const kk = jj * w + ii; if (T.paint[kk] !== PAINT.paved && T.paint[kk] !== PAINT.court) T.paint[kk] = PAINT.road; } }
      this.occupy([[ax, ay], [bx, by], [bx + 0.01, by + 0.01]], r.w / 2);
    }
  }
  let n = 0;
  for (const b of osm.buildings) {
    if (n >= maxBuildings || b.pts.length < 3) continue;
    const cx = b.pts.reduce((s, p) => s + p[0], 0) / b.pts.length, cy = b.pts.reduce((s, p) => s + p[1], 0) / b.pts.length;
    if (!inB(cx, cy) || !this.isFree(cx, cy, 1.5)) continue;
    this.building({ poly: b.pts, storeys: b.storeys || (old ? 1 + (n % 3 === 0 ? 1 : 0) : 2), kind: 'house', roof: 'flat', color: 'plaster' });
    n++;
  }
};
