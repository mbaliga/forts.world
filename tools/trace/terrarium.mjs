// Terrarium z15 tiles -> a local-metre heights grid in the scene's `grid` op format.
// Tiles: 256 px Web Mercator; elevation = R*256 + G + B/256 - 32768 (metres). At z15 one pixel is
// ~4.6 m at 15 N and ~4.1 m at 28 N; the underlying source is mostly SRTM 30 m (1 arc-second),
// so anything finer than ~30 m is interpolation, not measurement. Output heights are metres above
// the Terrarium datum (approximately mean sea level), rounded to 0.05 m by the int16/20 encoding.
import fs from 'node:fs';
import path from 'node:path';
import { decodeTerrariumPNG } from '../terrarium-png.mjs';

const R_EARTH = 6371008.8, DEG = Math.PI / 180;

export function loadTiles(dir) {
  const tiles = new Map();
  if (!fs.existsSync(dir)) return tiles;
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(/^(\d+)_(\d+)_(\d+)\.png$/); if (!m) continue;
    tiles.set(`${m[1]}/${m[2]}/${m[3]}`, { z: +m[1], x: +m[2], y: +m[3], png: decodeTerrariumPNG(fs.readFileSync(path.join(dir, f))) });
  }
  return tiles;
}

// Sample the elevation at lat/lon with bilinear interpolation across tile boundaries.
export function makeSampler(tiles) {
  const zs = [...new Set([...tiles.values()].map((t) => t.z))];
  if (!zs.length) return null;
  const z = Math.max(...zs), n = 2 ** z;
  const px = (lat, lon) => {
    const s = Math.sin(lat * DEG);
    return [((lon + 180) / 360) * n * 256, (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * n * 256];
  };
  const at = (gx, gy) => { // global pixel -> elevation or NaN
    const tx = Math.floor(gx / 256), ty = Math.floor(gy / 256), t = tiles.get(`${z}/${tx}/${ty}`);
    if (!t) return NaN;
    return t.png.elevationAt(gx - tx * 256, gy - ty * 256);
  };
  const sample = (lat, lon) => {
    const [gx, gy] = px(lat, lon), x0 = Math.floor(gx - 0.5), y0 = Math.floor(gy - 0.5), u = gx - 0.5 - x0, v = gy - 0.5 - y0;
    const a = at(x0, y0), b = at(x0 + 1, y0), c = at(x0, y0 + 1), d = at(x0 + 1, y0 + 1);
    if ([a, b, c, d].some((q) => q !== q)) return [a, b, c, d].find((q) => q === q) ?? NaN;
    return (1 - v) * ((1 - u) * a + u * b) + v * ((1 - u) * c + u * d);
  };
  return { z, sample, metresPerPixel: (lat) => (2 * Math.PI * R_EARTH * Math.cos(lat * DEG)) / (n * 256) };
}

// Build the grid for a local frame (x east, y north, metres from lat0/lon0) over bounds [x0,y0,x1,y1].
export function buildHeightsGrid(tilesDir, lat0, lon0, bounds, stride = 5) {
  const tiles = loadTiles(tilesDir), S = makeSampler(tiles);
  if (!S) return null;
  const [bx0, by0, bx1, by1] = bounds;
  const x0 = Math.floor(bx0 / stride) * stride, y0 = Math.floor(by0 / stride) * stride;
  const nx = Math.ceil((bx1 - x0) / stride) + 1, ny = Math.ceil((by1 - y0) / stride) + 1;
  const buf = Buffer.alloc(nx * ny * 2);
  let min = Infinity, max = -Infinity, missing = 0;
  const cosLat = Math.cos(lat0 * DEG);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const x = x0 + i * stride, y = y0 + j * stride;
    const lat = lat0 + y / (R_EARTH * DEG), lon = lon0 + x / (R_EARTH * DEG * cosLat);
    const h = S.sample(lat, lon);
    if (h !== h) { missing++; buf.writeInt16LE(-32768, (j * nx + i) * 2); continue; }
    min = Math.min(min, h); max = Math.max(max, h);
    buf.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(h * 20))), (j * nx + i) * 2);
  }
  return {
    x0, y0, stride, nx, ny, data: buf.toString('base64'),
    src: 'dem:terrarium-z' + S.z, unit: 'm above Terrarium datum (~MSL)', encoding: 'int16le/20 base64, -32768 = no data',
    nativeResolutionM: +S.metresPerPixel(lat0).toFixed(2), sourceResolutionM: 30, stats: { min: +min.toFixed(2), max: +max.toFixed(2), missing, cells: nx * ny },
  };
}

// Decode a grid back to a Float32Array (NaN = no data) and a bilinear sampler; shared with the runtime check tools.
export function gridSampler(G) {
  const u8 = Buffer.from(G.data, 'base64'), h = new Float32Array(G.nx * G.ny);
  for (let q = 0; q < h.length; q++) { const v = u8.readInt16LE(q * 2); h[q] = v === -32768 ? NaN : v / 20; }
  const at = (i, j) => h[Math.max(0, Math.min(G.ny - 1, j)) * G.nx + Math.max(0, Math.min(G.nx - 1, i))];
  return {
    h,
    sample(x, y) {
      const fx = (x - G.x0) / G.stride, fy = (y - G.y0) / G.stride, i = Math.floor(fx), j = Math.floor(fy), u = fx - i, v = fy - j;
      const a = at(i, j), b = at(i + 1, j), c = at(i, j + 1), d = at(i + 1, j + 1);
      if ([a, b, c, d].some((q) => q !== q)) return a === a ? a : NaN;
      return (1 - v) * ((1 - u) * a + u * b) + v * ((1 - u) * c + u * d);
    },
  };
}
