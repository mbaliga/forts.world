// A fort generator: a level built from a data sheet rather than drawn by hand. Hill forts are an irregular mesa with
// a cliff and a talus slope, a wall along the rim, gates (the main one with towers), bastions at intervals and a
// switchback path up to the main gate. Sea forts are a walled island with a landing; coastal forts join the island
// to the shore. Buildings, temples, tanks, places of interest and people come from the sheet. Everything the sheet
// gives is a reconstruction unless it says otherwise: positions and dimensions are inferred, not surveyed.
import { rectPts } from './kit.js';
import { DEG, makeNoise, fbm } from '../core/geom.js';

export function buildingExistsInEra(building, era) {
  return !building.since || era === 'today' || era === 'hist' || Number(era) >= building.since;
}

const ellR = (rx, ry, rot, a) => { const t = (a - rot) * DEG; return rx * ry / Math.hypot(ry * Math.cos(t), rx * Math.sin(t)); };
function outlineFn(F) {
  const { rx, ry, rot = 0 } = F.size, s = F.seed || 1;
  if (Array.isArray(F.outline) && F.outline.length >= 3) {
    // Explicit site-plan polygon, in local metres. The radial intersection keeps
    // existing terrain, gate and wall builders usable while preserving traced corners.
    const vertices = F.outline;
    return (a) => {
      const theta = (a - rot) * DEG, u = [Math.cos(theta), Math.sin(theta)];
      const cross = (v, w) => v[0] * w[1] - v[1] * w[0];
      let nearest = Infinity;
      for (let i = 0; i < vertices.length; i++) {
        const p = vertices[i], q = vertices[(i + 1) % vertices.length], edge = [q[0] - p[0], q[1] - p[1]], d = cross(u, edge);
        if (Math.abs(d) < 1e-9) continue;
        const distance = cross(p, edge) / d, along = cross(p, u) / d;
        if (distance >= 0 && along >= -1e-9 && along <= 1 + 1e-9) nearest = Math.min(nearest, distance);
      }
      if (!Number.isFinite(nearest)) throw new Error(`Fort outline has no origin-visible edge at angle ${a}`);
      return nearest;
    };
  }
  if (F.shape === 'chamfered') {
    const c = Math.max(0, Math.min(F.chamfer ?? Math.min(rx, ry) * 0.16, rx * 0.45, ry * 0.45));
    const vertices = [[-rx+c,-ry],[rx-c,-ry],[rx,-ry+c],[rx,ry-c],[rx-c,ry],[-rx+c,ry],[-rx,ry-c],[-rx,-ry+c]];
    return (a) => {
      const theta = (a - rot) * DEG, u = [Math.cos(theta), Math.sin(theta)], cross = (v,w) => v[0]*w[1]-v[1]*w[0];
      let nearest = Infinity;
      for (let i=0;i<vertices.length;i++) { const p=vertices[i],q=vertices[(i+1)%vertices.length],e=[q[0]-p[0],q[1]-p[1]],d=cross(u,e); if(Math.abs(d)<1e-9)continue; const r=cross(p,e)/d,t=cross(p,u)/d; if(r>=0&&t>=-1e-9&&t<=1+1e-9)nearest=Math.min(nearest,r); }
      return nearest;
    };
  }
  if (F.shape === 'square') return (a) => { const t = (a - rot) * DEG, shear = F.shear || 0; return Math.min(rx / (Math.abs(Math.cos(t) - shear * Math.sin(t)) || 1e-9), ry / (Math.abs(Math.sin(t)) || 1e-9)); };
  if (F.shape === 'triangle') {
    // Three illustrative vertices around the origin; no survey or orientation is implied.
    const vertices = [0, 120, 240].map(a => [rx * Math.cos(a * DEG), rx * Math.sin(a * DEG)]);
    return (a) => {
      const theta = (a - rot) * DEG, u = [Math.cos(theta), Math.sin(theta)];
      const cross = (v, w) => v[0] * w[1] - v[1] * w[0];
      let nearest = Infinity;
      for (let i = 0; i < 3; i++) {
        const p = vertices[i], q = vertices[(i + 1) % 3], edge = [q[0]-p[0], q[1]-p[1]], d = cross(u, edge);
        if (Math.abs(d) < 1e-9) continue;
        const distance = cross(p, edge) / d, along = cross(p, u) / d;
        if (distance >= 0 && along >= -1e-9 && along <= 1 + 1e-9) nearest = Math.min(nearest, distance);
      }
      return nearest;
    };
  }
  const ph = [s * 1.7, s * 2.9, s * 4.3];
  return (a) => ellR(rx, ry, rot, a) * (1 + 0.07 * Math.sin((3 * a) * DEG + ph[0]) + 0.045 * Math.sin((5 * a) * DEG + ph[1]) + 0.025 * Math.sin((9 * a) * DEG + ph[2]));
}
const ringAt = (R, k, cx = 0, cy = 0, step = 4) => { const out = []; for (let a = 0; a < 360; a += step) out.push([cx + R(a) * k * Math.cos(a * DEG), cy + R(a) * k * Math.sin(a * DEG)]); return out; };
const ellPoly = (x, y, rx, ry, rot = 0, n = 20) => Array.from({ length: n }, (_, i) => { const t = i / n * Math.PI * 2, c = Math.cos(rot * DEG), s = Math.sin(rot * DEG); const lx = rx * Math.cos(t), ly = ry * Math.sin(t); return [x + lx * c - ly * s, y + lx * s + ly * c]; });
const smooth = (t) => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
function nearestPathPoint(path, point) {
  let best = null;
  for (let i = 0; i < path.length; i++) {
    const p = path[i], q = path[(i + 1) % path.length], dx = q[0] - p[0], dy = q[1] - p[1];
    const t = Math.max(0, Math.min(1, ((point[0] - p[0]) * dx + (point[1] - p[1]) * dy) / (dx * dx + dy * dy || 1)));
    const at = [p[0] + dx * t, p[1] + dy * t], d = Math.hypot(point[0] - at[0], point[1] - at[1]);
    if (!best || d < best.distance) best = { at, distance: d, tangent: [dx, dy] };
  }
  return best;
}
function pointInPolygon(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

export function makeFort(F) {
  const R = outlineFn(F), moat = F.type === 'moat', flat0 = !!F.flatGround, sea = F.type === 'sea' || F.type === 'coast' || F.type === 'river' || moat;
  const H0 = moat ? 3 : flat0 ? (F.baseH ?? 0.4) : sea ? 3 : F.hill.h, cliffW0 = sea || flat0 ? 0 : F.hill.cliff ?? 12, skirt0 = sea || flat0 ? 0 : F.hill.skirt ?? 90;
  const landscapeFor = (era) => F.terrainByEra?.[era] || {};
  const flatFor = (era) => landscapeFor(era).flatGround ?? flat0;
  const heightFor = (era) => landscapeFor(era).H ?? H0;
  const cliffFor = (era) => landscapeFor(era).cliff ?? (sea ? 0 : F.hill.cliff ?? cliffW0);
  const skirtFor = (era) => landscapeFor(era).skirt ?? (sea ? 0 : F.hill.skirt ?? skirt0);
  const maxR = Array.isArray(F.outline) && F.outline.length >= 3
    ? Math.max(...F.outline.map(([x, y]) => Math.hypot(x, y)))
    : Array.isArray(F.wallPath) && F.wallPath.length >= 3
      ? Math.max(...F.wallPath.map(([x, y]) => Math.hypot(x, y)))
    : F.shape === 'square' ? Math.hypot(F.size.rx + Math.abs(F.shear || 0) * F.size.ry, F.size.ry) : Math.max(F.size.rx, F.size.ry) * 1.13;
  const extraWallR = Math.max(0, ...(F.additionalWalls || []).flatMap((w) => (w.path || []).map(([x, y]) => Math.hypot(x, y))));
  const contextPoints = [
    ...(F.siteBoundary || []),
    ...(F.pois || []).map((p) => p.at),
  ];
  const contextR = Math.max(0, ...contextPoints.map(([x, y]) => Math.hypot(x, y)));
  // A fort's radial terrain shell must also contain its separately mapped
  // present-day site boundary and evidence markers. These context layers may
  // extend beyond the fort footprint; they must not enlarge or reshape it.
  const contextMargin = F.margin ?? 40;
  const hillProfiles = Object.values(F.terrainByEra || {}).filter((p) => p.flatGround === false);
  const maxCliff = Math.max(cliffW0, ...hillProfiles.map((p) => p.cliff ?? F.hill.cliff ?? 0)), maxSkirt = Math.max(skirt0, ...hillProfiles.map((p) => p.skirt ?? F.hill.skirt ?? 0));
  const ext = Math.max((sea || (flat0 && !hillProfiles.length)) ? maxR + (F.margin ?? 70) : maxR + maxCliff + maxSkirt + contextMargin, extraWallR + contextMargin, contextR + contextMargin);
  const NZ = makeNoise((F.seed || 1) * 31);
  const wallK = F.wallK ?? (sea ? 0.86 : 0.94);
  const mainGate = F.gates.find((g) => g.main) || F.gates[0];
  const gatesForEra = (era) => F.gatesByEra?.[era] || F.gates;
  const at = (a, k) => [R(a) * k * Math.cos(a * DEG), R(a) * k * Math.sin(a * DEG)];
  // hill-fort walls run a fixed distance in from the rim (so a narrow plateau keeps room for a gate landing)
  const explicitWallPath = Array.isArray(F.wallPath) && F.wallPath.length >= 3;
  const RW = (a) => (sea || flat0 ? R(a) * wallK : R(a) - 7), atW = (a, extra = 0) => {
    const r = RW(a) + extra, radial = [r * Math.cos(a * DEG), r * Math.sin(a * DEG)];
    return explicitWallPath ? nearestPathPoint(F.wallPath, radial).at : radial;
  };
  // the wall's outward normal at angle a (a gate faces this way, which on a curving rim is not along the radius)
  const wallArea = explicitWallPath ? F.wallPath.reduce((sum, p, i) => { const q = F.wallPath[(i + 1) % F.wallPath.length]; return sum + p[0] * q[1] - q[0] * p[1]; }, 0) / 2 : 0;
  const normalW = (a) => {
    if (explicitWallPath) {
      const tangent = nearestPathPoint(F.wallPath, atW(a)).tangent; let nx = tangent[1], ny = -tangent[0];
      if (wallArea < 0) { nx = -nx; ny = -ny; }
      const l = Math.hypot(nx, ny) || 1; return [nx / l, ny / l];
    }
    const [x0, y0] = atW(a - 1.5), [x1, y1] = atW(a + 1.5); let nx = y1 - y0, ny = -(x1 - x0); const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l; const [px, py] = atW(a); if (nx * px + ny * py < 0) { nx = -nx; ny = -ny; } return [nx, ny];
  };
  // the switchback path from the foot of the hill to the main gate
  function hillPath(H, cliffW, skirt) {
    // the approach winds round the hill below the rim, always on the slope at its own angle, descending steadily
    const a0 = mainGate.a, side = F.hill.pathSide ?? 1, sweep = Math.min(230, 110 + H * 1.8), N = 28;
    const [gx, gy] = atW(a0), [nx, ny] = normalW(a0);
    const pts = [[gx + nx * 3.5, gy + ny * 3.5, H], [gx + nx * 10, gy + ny * 10, H - 0.15]];
    for (let i = 0; i <= N; i++) {
      const t = i / N, a = a0 + side * (4 + sweep * t), r = R(a) + 4 + (cliffW + skirt * 0.85) * Math.pow(t, 0.85);
      pts.push([r * Math.cos(a * DEG), r * Math.sin(a * DEG), H - 0.2 - (H - 1.0) * t]);
    }
    const end = pts[pts.length - 1], ea = Math.atan2(end[1], end[0]); pts.push([end[0] + Math.cos(ea) * 14, end[1] + Math.sin(ea) * 14, 0.8]);
    return pts;
  }
  const hasShore = !!F.shore;
  const SHORE = hasShore ? (() => { const d = F.shore.dist, w = ext * 2.2; const a = F.shore.a * DEG, ux = Math.cos(a), uy = Math.sin(a), tx = -uy, ty = ux; const c0 = [ux * d, uy * d], c1 = [ux * (d + ext * 2), uy * (d + ext * 2)]; return [[c0[0] + tx * w, c0[1] + ty * w], [c0[0] - tx * w, c0[1] - ty * w], [c1[0] - tx * w, c1[1] - ty * w], [c1[0] + tx * w, c1[1] + ty * w]]; })() : null;
  const ISTHMUS = (F.type === 'coast' || F.type === 'river') && hasShore ? (() => { const a = F.shore.a * DEG, ux = Math.cos(a), uy = Math.sin(a), tx = -uy, ty = ux, w = F.isthmusW ?? 40; return [[tx * w, ty * w], [-tx * w, -ty * w], [ux * (F.shore.dist + 10) - tx * w, uy * (F.shore.dist + 10) - ty * w], [ux * (F.shore.dist + 10) + tx * w, uy * (F.shore.dist + 10) + ty * w]]; })() : null;

  const def = {
    id: F.id, name: F.name, native: F.native, region: F.region, type: F.typeLabel, coords: F.coords,
    ...(F.siteReference ? { siteReference: { ...F.siteReference } } : {}),
    ...(Array.isArray(F.outline) ? { outline: F.outline.map(([x, y]) => [x, y]) } : {}),
    ...(Array.isArray(F.wallPath) ? { wallPath: F.wallPath.map(([x, y]) => [x, y]) } : {}),
    ...(Array.isArray(F.additionalWalls) ? { additionalWalls: F.additionalWalls.map((w) => ({ ...w, path: (w.path || []).map(([x, y]) => [x, y]) })) } : {}),
    ...(Array.isArray(F.siteBoundary) ? { siteBoundary: F.siteBoundary.map(([x, y]) => [x, y]), siteBoundaryLabel: F.siteBoundaryLabel || 'Site boundary · source status unspecified' } : {}),
    ...(F.spawnInside ? { spawnInside: [...F.spawnInside] } : {}),
    poiCount: F.pois.length, groundName: F.groundName || (sea || flat0) ? (F.groundName || 'Inside the walls') : 'The plateau', datum: 0, datumLabel: (F.type === 'river' || moat) ? 'above schematic water level' : sea ? 'above high tide' : flat0 ? 'local ground datum' : 'above the foot of the hill',
    units: F.units || { planScale: 3, vScale: 6 }, bounds: [-ext, -ext, ext, ext], stride: F.stride ?? (ext > 380 ? 3 : 2), navCell: F.navCell ?? (ext > 700 ? 2 : 1), navStep: F.navStep ?? (ext > 700 ? 2.5 : 0.62), seed: F.seed || 7,
    water: sea ? { sea: 0, deep: '#2a5558', mid: '#3d6f6a', shallow: '#6f9a84', silt: '#8c9470' } : null,
    apron: sea ? undefined : { h: 0.4, color: '#8a8a55' },
    view: { az: F.view?.az ?? -35, el: 40, zoom: F.view?.zoom ?? 80, introAt: [0, 0], introZoom: ext * 1.9 },
    light: { sky: '#e1e3db', sunAz: -125, sunEl: 48 },
    palette: Object.assign({ wall: '#7d7670', wallTop: '#8c857e', trim: '#9c948a', stone: '#7f786f', plaster: '#ddd5c2', plasterDark: '#b9ab8e', roof: '#7a4a32',
      rock: '#6e6862', cliff: '#4f4a45', grass: '#6f8a3c', dry: '#a89060', road: '#9a7a56', court: '#a99a80', paved: '#8f877c', sand: '#c9b48a',
      field: '#8a9a50', mud: '#6a5440', garden: '#5f8a3e', water: '#4f6f6a', tank: '#4d6a5a', leaf: '#3f6a2a', leafDry: '#8c8648', trunk: '#5e4a36', dome: '#e4dccb', flag: '#e8731a', accent: '#b89a5a' }, F.palette || {}),
    eraPalette: { today: { plaster: '#cfc6b3', grass: '#6a8a38' } },
    defaultEra: F.defaultEra || F.eras[0].id,
    eras: F.eras.map((e) => Object.assign({ sources: [] }, e)),
    pois: F.pois.map((p) => ({ id: p.id, at: p.at, r: p.r ?? 7, title: p.title, source: p.source, evidence: p.ev || 'unknown', positionEvidence: p.positionEvidence || 'inferred', text: p.text, eraNote: p.eraNote || {} })),

    terrain: (era) => {
      const profile = landscapeFor(era), flat = flatFor(era), H = heightFor(era), cliffW = cliffFor(era), skirt = skirtFor(era), PATH = (sea || flat || profile.approach === false || F.noApproach) ? null : hillPath(H, cliffW, skirt);
      const gates = gatesForEra(era);
      const mainGate = gates.find((g) => g.main) || gates[0];
      const ops = [{ op: 'base', h: sea ? -6 : flat ? (F.baseGround ?? 0.4) : 0.4 }, { op: 'noise', amp: sea || flat ? 0.6 : 1.4, scale: 60 }];
      if (sea) {
        if (moat) {
          // A schematic landward bank, flooded ditch, raised fort, and gate causeways.
          const outer = a => R(a) + (F.moatWidth ?? 8);
          ops.push({ op: 'flatten', poly: rectPts(0, 0, ext * 2, ext * 2, 0), h: H, edge: 0 });
          if (!F.moatOnly || F.moatOnly === era) {
          ops.push({ op: 'dig', poly: ringAt(outer, 1), h: -3, edge: 1 });
          ops.push({ op: 'raise', poly: ringAt(R, 1), h: H, edge: 1 });
          for (const gate of gates) {
            const a = gate.a * DEG, distance = R(gate.a) + (F.moatWidth ?? 8) / 2;
            ops.push({ op: 'raise', poly: rectPts(Math.cos(a) * distance, Math.sin(a) * distance, (F.moatWidth ?? 8) + 12, 7, gate.a), h: H, edge: 1 });
          }
          }
        } else ops.push({ op: 'raise', poly: ringAt(R, 1.0), h: H + 6, edge: 4 });
        // A few coastal forts occupy a high, narrow ridge rather than a flat island.
        // Heights are elevations above the local sea datum; the spine itself must still
        // be sourced and registered by each level author.
        if (F.islandHill?.spine?.length >= 2) {
          const spine = F.islandHill.spine, topHalf = (F.islandHill.topWidth ?? 18) / 2, slope = F.islandHill.slopeWidth ?? 65, base = H + 6;
          ops.push({ op: 'fn', fn: (x, y, current) => {
            let nearest = null, walked = 0, length = 0;
            for (let i = 1; i < spine.length; i++) length += Math.hypot(spine[i][0] - spine[i - 1][0], spine[i][1] - spine[i - 1][1]);
            for (let i = 1; i < spine.length; i++) {
              const a = spine[i - 1], b = spine[i], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
              const t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2));
              const px = a[0] + dx * t, py = a[1] + dy * t, d = Math.hypot(x - px, y - py), segLen = Math.sqrt(l2);
              if (!nearest || d < nearest.d) nearest = { d, z: a[2] + (b[2] - a[2]) * t, s: walked + segLen * t };
              walked += segLen;
            }
            if (nearest.d >= topHalf + slope) return current;
            const q = Math.max(0, Math.min(1, (nearest.d - topHalf) / slope)), k = q * q * (3 - 2 * q);
            return Math.max(current, base + (nearest.z - base) * (1 - k));
          } });
        }
        if (SHORE) ops.push({ op: 'raise', poly: SHORE, h: 8.5, edge: 18 }, { op: 'paint', poly: SHORE, paint: 'grass' });
        if (ISTHMUS) ops.push({ op: 'raise', poly: ISTHMUS, h: 8, edge: 6 });
        ops.push({ op: 'paint', poly: ringAt(R, 0.84), paint: era === 'today' ? 'grass' : 'court' });
        // the landing outside the gate
        const [lx, ly] = at(mainGate.a, 0.95); ops.push({ op: 'flatten', poly: rectPts(lx, ly, 10, 8, mainGate.a + 90), h: 1.2, edge: 1.5 });
      } else if (flat) {
        const ground = F.baseGround ?? 0.4;
        ops.push({ op: 'flatten', poly: rectPts(0, 0, ext * 2, ext * 2, 0), h: ground, edge: 0 });
        if (H > ground + 0.01) ops.push({ op: 'raise', poly: ringAt(R, 1.08), h: H, edge: F.moundEdge ?? 12 });
        ops.push({ op: 'flatten', poly: ringAt(R, 0.99), h: H, edge: 1.5 });
        ops.push({ op: 'paint', poly: ringAt(R, 1.10), paint: 'sand' }, { op: 'paint', poly: ringAt(R, 0.99), paint: era === 'today' ? 'grass' : 'court' });
        for (const gate of gates) { const a = gate.a * DEG, d = R(gate.a) + 4; ops.push({ op: 'flatten', poly: rectPts(Math.cos(a) * d, Math.sin(a) * d, 16, 10, gate.a), h: H, edge: 2, paint: 'road' }); }
      } else {
        ops.push({ op: 'fn', fn: (x, y, h) => {
          const r = Math.hypot(x, y); if (r > maxR + cliffW + skirt) return h;
          const a = Math.atan2(y, x) / DEG, Rp = R(a), d = r - Rp;
          let z;
          if (d <= 0) z = H + 1.2 * fbm(NZ, x / 25, y / 25, 2);                                // the plateau, gently uneven
          else if (d < cliffW) z = H * (1 - 0.55 * smooth(d / cliffW));                         // the scarp
          else z = H * 0.45 * (1 - smooth((d - cliffW) / skirt));                               // the talus down to the plain
          z += (d > 0 ? 2.2 : 0) * fbm(NZ, x / 9, y / 9, 3) * Math.min(1, Math.max(0, d) / 6);
          return Math.max(h, z);
        } });
        ops.push({ op: 'paint', poly: ringAt(R, 1.12), paint: 'rock' }, { op: 'paint', poly: ringAt(R, 0.98), paint: era === 'today' ? 'grass' : 'dry' });
        for (const s of F.spurs || []) ops.push({ op: 'ridge', path: s.path.map(([x, y]) => [x, y]), w: s.w ?? 10, edge: s.edge ?? 12 }, { op: 'fn', fn: (x, y, h) => h });
        ops.push({ op: 'ramp', path: PATH, w: 4.6, edge: 3, paint: 'road' });
        for (const g of gates) { const [gx, gy] = atW(g.a), [nx, ny] = normalW(g.a), ang = Math.atan2(ny, nx) / DEG; ops.push({ op: 'flatten', poly: rectPts(gx + nx * 3, gy + ny * 3, 13, 9, ang), h: H, edge: 2 }); }
      }
      for (const v of F.rockSteps || []) if (!v.only || v.only === era) ops.push({ op: 'dig', poly: rectPts((v.from[0]+v.to[0])/2, (v.from[1]+v.to[1])/2, Math.hypot(v.to[0]-v.from[0], v.to[1]-v.from[1]), v.w + 1, Math.atan2(v.to[1]-v.from[1], v.to[0]-v.from[0])/DEG), h: H - v.depth - 1, edge: 1 });
      for (const t of F.tanks || []) if (!t.only || t.only === era) ops.push({ op: 'paint', poly: ellPoly(t.x, t.y, t.rx + 2, t.ry + 2, t.rot || 0), paint: 'paved' });
      if (F.extraTerrain) ops.push(...F.extraTerrain(era, H));
      ops.push({ op: 'edge', h: sea ? -6 : 0.4, w: 20 });
      return ops;
    },

    build(W) {
      const era = W.era, baseEra = era.endsWith('~built') ? era.slice(0, -6) : era, hist = baseEra !== 'today', E = F.eras.find((e) => e.id === baseEra) || F.eras[0], gates = gatesForEra(era);
      const profile = landscapeFor(era), flat = flatFor(era), H = heightFor(era), cliffW = cliffFor(era), skirt = skirtFor(era), PATH = (sea || flat || profile.approach === false || F.noApproach) ? null : hillPath(H, cliffW, skirt);
      const wallStyle = F.wallStyleByEra?.[era] || {};
      if (F.siteBoundary && F.siteBoundaryLabel && (!F.siteBoundaryOnly || F.siteBoundaryOnly === era)) W.zone(F.siteBoundary, F.siteBoundaryLabel);
      const ring = explicitWallPath
        ? F.wallPath.map(([x, y]) => [x, y])
        : [];
      if (!ring.length) for (let a = 0; a < 360; a += 3) ring.push(atW(a));
      const wall = F.suppressPerimeterWall ? null : W.wall({ path: ring, closed: true, outer: 'right', h: wallStyle.h ?? F.wallH ?? (sea ? 7 : 5), thick: wallStyle.thick ?? F.wallTByEra?.[era] ?? F.wallT ?? 3.2, batter: wallStyle.batter ?? 0.06, parapet: wallStyle.parapet ?? { h: 1.2, t: 0.6 }, merlon: wallStyle.merlon ?? { style: 'round', w: 0.9, gap: 0.75, h: 0.85, slit: true }, color: wallStyle.color || 'wall', coping: wallStyle.coping ?? true, spouts: wallStyle.spouts ?? { every: 18 }, maxSeg: 3 });
      let innerW = null;
      if (F.innerWall && (!F.innerWall.only || F.innerWall.only === era)) innerW = W.wall({ path: ringAt(R, F.innerWall.k, 0, 0, 4), closed: true, outer: 'right', h: F.innerWall.h ?? 4.5, thick: 2.6, batter: 0.05, parapet: { h: 1.1, t: 0.5 }, merlon: { style: 'round', w: 0.85, gap: 0.8, h: 0.8 }, color: 'wall' });
      // gates
      const gateAt = [];
      for (const g of (wall ? gates : [])) {
        const p = atW(g.a); gateAt.push(p);
        W.gate({ wall, at: p, width: g.main ? 3.6 : 2.8, spring: g.main ? 3.4 : 2.8, rise: g.main ? 1.9 : 1.4, style: 'pointed', towers: g.main && g.towers !== false ? { r: 4.6, dh: 1.4, off: 2.2, gap: 0.15 } : false, name: g.name, doors: hist, frameUp: 1.0, floor: (F.islandHill || F.gatesFollowTerrain) ? W.ground(p[0], p[1]) : H });
      }
      if (innerW) { const ga = F.innerWall.gate ?? mainGate.a, p = at(ga, F.innerWall.k); W.gate({ wall: innerW, at: p, width: 2.8, spring: 2.8, rise: 1.4, style: 'pointed', towers: false, name: 'Inner gate', doors: hist, frameUp: 1.0, floor: F.islandHill ? W.ground(p[0], p[1]) : H }); }
      const enclosedPaths = [F.wallPath, ...(F.additionalWalls || []).map((w) => w.path)].filter((p) => Array.isArray(p) && p.length >= 3);
      for (const circuit of F.additionalWalls || []) {
        if (!Array.isArray(circuit.path) || circuit.path.length < 3 || (circuit.only && circuit.only !== era)) continue;
        const cs = circuit.wallStyleByEra?.[era] || {};
        const circuitWall = W.wall({ path: circuit.path.map(([x, y]) => [x, y]), closed: true, outer: 'right', h: cs.h ?? circuit.h ?? 5, thick: cs.thick ?? circuit.thick ?? 3, batter: 0.05, parapet: cs.parapet ?? { h: 1.1, t: 0.5 }, merlon: cs.merlon ?? { style: 'round', w: 0.85, gap: 0.8, h: 0.8 }, color: cs.color || circuit.color || 'wall', maxSeg: 3 });
        const gateSpec = circuit.gatesByEra?.[era] || (circuit.gateAt ? [{ at: circuit.gateAt, width: circuit.gateWidth, name: circuit.gateName }] : []);
        for (const g of gateSpec) W.gate({ wall: circuitWall, at: g.at, width: g.width ?? 3, spring: 2.8, rise: 1.4, style: 'pointed', towers: false, name: g.name || 'Gate · plan position, schematic form', doors: hist, frameUp: 1, floor: H });
        if (circuit.label) W.zone(circuit.path, circuit.label);
      }
      // bastions along the wall, clear of the gates
      const step = F.bastionStep ?? 34; let acc = 0, k = 0;
      const bastionAngles = F.bastionAnglesByEra?.[era] ?? F.bastionAngles;
      if (bastionAngles) for (const a of bastionAngles) W.bastion({ at: atW(a), wall, r: F.bastionR ?? 3.6, off: 1.3, dh: 0.4, cannon: false });
      else if (F.bastionsPerSide && explicitWallPath) {
        const count = Math.max(1, Math.floor(F.bastionsPerSide));
        for (let side = 0; side < F.wallPath.length; side++) {
          const p0 = F.wallPath[side], p1 = F.wallPath[(side + 1) % F.wallPath.length];
          const first = F.bastionsInteriorOnly ? 1 : 0, last = F.bastionsInteriorOnly ? count : count - 1;
          for (let i = first; i <= last; i++) {
            const t = F.bastionsInteriorOnly ? i / (count + 1) : i / count, p = [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
            if (gateAt.some((g) => Math.hypot(g[0] - p[0], g[1] - p[1]) < (F.bastionGateClearance ?? 14))) continue;
            W.bastion({ at: p, wall, r: F.bastionR ?? 3.6, off: 1.3, dh: 0.4, cannon: false });
          }
        }
        if (F.cornerBastionR) for (const p of F.wallPath) W.bastion({ at: p, wall, r: F.cornerBastionR, off: 1.3, dh: 0.4, cannon: false });
      }
      else for (let i = 1; i < ring.length; i++) {
        acc += Math.hypot(ring[i][0] - ring[i - 1][0], ring[i][1] - ring[i - 1][1]); if (acc < step) continue; acc = 0;
        const p = ring[i]; if (gateAt.some((g) => Math.hypot(g[0] - p[0], g[1] - p[1]) < 14)) continue;
        W.bastion({ at: p, wall, r: F.bastionR ?? 3.6, off: 1.3, dh: 0.4, cannon: hist && F.cannons !== false && k++ % 3 === 0 ? { len: 2.8, r: 0.28 } : false });
      }
      // buildings: roofed in the historic period, ruins today unless they still stand
      const inside = (x, y) => Array.isArray(F.wallPath) && F.wallPath.length >= 3
        ? enclosedPaths.some((path) => pointInPolygon(x, y, path))
        : (() => { const a = Math.atan2(y, x) / DEG; return Math.hypot(x, y) < R(a) * wallK * 0.88; })();
      for (const p of F.pois) W.occupy(rectPts(p.at[0], p.at[1], 5, 5, 0), 0.3);
      // keep the approach path and the gate landings clear of trees and props
      if (PATH) for (let i = 1; i < PATH.length; i++) { const [x0, y0] = PATH[i - 1], [x1, y1] = PATH[i], cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, L = Math.hypot(x1 - x0, y1 - y0); W.occupy(rectPts(cx, cy, L + 2, 7, Math.atan2(y1 - y0, x1 - x0) / DEG), 0.5); }
      for (const g of gates) { const [gx, gy] = atW(g.a), [nx, ny] = normalW(g.a); W.occupy(rectPts(gx + nx * 4, gy + ny * 4, 16, 9, Math.atan2(ny, nx) / DEG), 0.5); }
      for (const b of F.buildings || []) {
        // A site-specific documented point can place a structure outside the
        // schematic fort core; keep that blockout on the terrain instead of
        // silently dropping it. Its footprint remains an explicit inference.
        if (!inside(b.x, b.y) && !b.siteCoordinate) continue;
        if (b.only && b.only !== (hist ? 'hist' : 'today') && b.only !== era) continue;
        // Dated structures enter after their documented construction phase;
        // the present-day scene retains later fabric as surviving or ruined fabric.
        if (!buildingExistsInEra(b, era)) continue;
        const rect = [b.x, b.y, b.w, b.d, b.rot || 0];
        const base = F.islandHill || b.siteCoordinate ? W.ground(b.x, b.y) : H;
        if (hist || b.stands) W.building(Object.assign({}, b, { rect, base, storeys: b.storeys || 1, storeyH: b.storeyH || 3.2, color: b.color || 'plaster', roof: b.roof || 'flat', parapet: b.parapet ?? { h: 0.6, t: 0.25 }, windows: b.windows ?? { style: 'arch', spacing: 2.4, w: 1.0, h: 2.0, sill: 0.4 }, kind: b.kind || 'building', name: b.name }));
        else W.ruin({ rect, base, h: Math.min(3.4, 2.2 + (b.storeys || 1) * 0.6), thick: 0.6, jag: true, windows: false, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 1.8 }] });
        if (b.name) W.zone(rectPts(b.x, b.y, b.w + 6, b.d + 6, b.rot || 0), b.name);
      }
      for (const t of F.temples || []) if ((!t.only || t.only === era) && inside(t.x, t.y)) W.temple({ x: t.x, y: t.y, rot: t.rot || 0, w: t.w || 4.5, h: t.h || 7, style: t.style || 'nagara', plinth: 0.6, mandapa: { d: 4.5, w: (t.w || 4.5) + 1, h: 2.8, roof: 'flat' }, color: 'stone', base: F.islandHill ? W.ground(t.x, t.y) : H });
      for (const t of F.tanks || []) if (!t.only || t.only === era) { const poly = ellPoly(t.x, t.y, t.rx, t.ry, t.rot || 0); W.tank({ poly, waterDepth: 2, tiers: 4, color: 'stone' }); if (t.name) W.zone(poly, t.name); }
      // Small illustrative rock-cut stair and shaft; scale and placement come from the level sheet.
      for (const v of F.rockSteps || []) if (!v.only || v.only === era) {
        W.stairs({ from: [v.from[0], v.from[1], H], to: [v.to[0], v.to[1], H-v.depth], w: v.w, color: 'rock', apron: false });
        W.tank({ x:v.well[0], y:v.well[1], r:v.radius, n:16, rim:H-v.depth, waterDepth:1.2, tiers:2, color:'rock' });
      }
      // Optional site-specific structures are built before scenery so they reserve their footprints.
      if (F.extraBuild) F.extraBuild(W, { era, H });
      // flags, people, trees
      const [fx, fy] = at(mainGate.a, wallK * 0.82);
      if (hist && F.flag !== false) W.flag({ x: fx, y: fy, h: W.ground(fx, fy), pole: 8, color: F.flagColor || '#e8731a', shape: 'swallow', size: 1.5 });
      const inner = ringAt(R, wallK * 0.8, 0, 0, 10);
      if (hist) {
        if (F.guard !== false) {
          const guard = F.guardByEra?.[era] || F.guard || 'guard-maratha';
          for (const g of gates) { const [gx, gy] = at(g.a, wallK * 0.88); W.npc({ kind: guard, circle: [gx, gy, 4], count: g.main ? 3 : 1, speed: 0.4 }); }
          W.npc({ kind: guard, patrol: ringAt(R, wallK * 0.9, 0, 0, 20), count: 4 });
        }
        if ((F.people ?? 10) > 0) {
          W.npc({ kind: 'villager', zone: inner, count: F.people ?? 10, speed: 0.6 });
          W.npc({ kind: 'woman-red', zone: inner, count: Math.round((F.people ?? 10) / 3), speed: 0.5 });
        }
      } else {
        W.npc({ kind: 'tourist-a', zone: inner, count: F.visitors ?? 8, speed: 0.6 });
        if (F.todayPeople !== false) W.npc({ kind: 'villager', zone: inner, count: 2, speed: 0.5 });
      }
      W.trees({ poly: ringAt(R, wallK * 0.82, 0, 0, 12), count: profile.trees ?? F.trees ?? (sea ? 14 : 30), types: sea ? { palm: 3, round: 1 } : hist ? { round: 2, neem: 1, acacia: 2 } : { round: 3, neem: 2, acacia: 2, banyan: 1 }, s: [0.8, 1.3], minDist: 6, seed: F.seed || 7 });
      if (!sea && !flat) W.trees({ poly: ringAt(R, 1.0 + (cliffW + skirt * 0.8) / F.size.rx, 0, 0, 12).filter(() => true), count: profile.slopeTrees ?? F.slopeTrees ?? 50, types: { round: 2, acacia: 2, bush: 3 }, s: [0.7, 1.2], minDist: 7, seed: (F.seed || 7) + 3 });
      if (sea && !moat) for (const b of F.boats || [{ a: mainGate.a, k: 1.25 }]) { const [bx, by] = at(b.a, b.k); W.boat({ x: bx, y: by, dir: b.a + 90, size: 0.8, sail: hist }); }
      if (!F.suppressPerimeterWall) W.zone(ring, (sea || flat) ? 'Inside the walls' : 'The plateau');
      // places of interest, with the note for this period; kept clear of buildings and trees
      for (const p of def.pois) { W.poi(Object.assign({}, p, { eraNote: p.eraNote?.[era] || null })); }
      if (!sea && !flat) W.wildlife({ kinds: { langur: 4 }, walls: true, s: 0.3 });
      // arrival: at the foot of the path for a hill fort, inside the gate for a sea fort
      if (F.spawnInside) { const [sx, sy] = F.spawnInside; W.spawn(sx, sy, null, mainGate.a + 180 - 90); }
      else if (sea || flat) { const [sx, sy] = at(mainGate.a, wallK * 0.7); W.spawn(sx, sy, null, mainGate.a + 180 - 90); }
      else { const f = PATH[PATH.length - 1]; W.spawn(f[0], f[1], null, Math.atan2(-f[0], f[1]) / DEG); }
      void E;
    },
  };
  return def;
}
