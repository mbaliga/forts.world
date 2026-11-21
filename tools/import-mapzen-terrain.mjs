// Download z7 public Terrarium tiles and mean-sample them onto the strategic grid.
// Run from the repository root; the generated grid is only ~31k values.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import BASE from '../src/data/basemap.js';
import { decodeTerrariumPNG } from './terrarium-png.mjs';

const [outputPath = 'src/data/strategic-dem-grid.js'] = process.argv.slice(2);
const [west, south, east, north] = BASE.bbox;
const cell = 0.25, ncols = Math.round((east - west) / cell), nrows = Math.round((north - south) / cell);
const zoom = 7, tilesAcross = 2 ** zoom, samplesPerCellAxis = 12, nodata = -9999;
const routeCountryIso = new Set(['IND','PAK','AFG','BGD','NPL','BTN','LKA','MMR','CHN','IRN']);
const cacheDir = '/private/tmp/inrts-mapzen-z7';
fs.mkdirSync(cacheDir, { recursive: true });

async function requestWithRetry(url, options = {}) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(30000), ...options });
      if (response.ok) return response;
      if (response.status < 500 && response.status !== 429) throw new Error(`HTTP ${response.status} for ${url}.`);
      if (attempt === 4) throw new Error(`HTTP ${response.status} after retries for ${url}.`);
    } catch (error) {
      if (attempt === 4 || /^HTTP 4\d\d/.test(error.message)) throw error;
    }
    await new Promise(resolve => setTimeout(resolve, 250 * (2 ** attempt)));
  }
}

const xAt = lon => Math.floor((lon + 180) / 360 * tilesAcross);
const mercatorY = lat => (1 - Math.asinh(Math.tan(lat * Math.PI / 180)) / Math.PI) / 2;
const yAt = lat => Math.floor(mercatorY(lat) * tilesAcross);
const xMin = xAt(west), xMax = xAt(east - 1e-9), yMin = yAt(north), yMax = yAt(south);
const jobs = [];
for (let y = yMin; y <= yMax; y++) for (let x = xMin; x <= xMax; x++) jobs.push({ x, y });

function inRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function isLand(lon, lat) {
  return BASE.countries.some(country => routeCountryIso.has(country.iso) && country.rings.some(ring => inRing(lon, lat, ring)));
}

const tiles = new Map(), tileSources = [];
let cursor = 0;
async function worker() {
  while (cursor < jobs.length) {
    const { x, y } = jobs[cursor++], key = `${zoom}/${x}/${y}`, cachePath = path.join(cacheDir, `${x}-${y}.png`);
    let png;
    let sources;
    if (fs.existsSync(cachePath)) {
      png = fs.readFileSync(cachePath);
      const sourcePath = cachePath.replace(/\.png$/, '.sources');
      sources = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : 'cached tile source metadata unavailable';
      if (sources.includes('unavailable')) {
        const response = await requestWithRetry(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${key}.png`, { method: 'HEAD' });
        sources = response.headers.get('x-amz-meta-x-imagery-sources') || 'source header unavailable';
        fs.writeFileSync(sourcePath, sources);
      }
    }
    else {
      const response = await requestWithRetry(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${key}.png`);
      png = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(cachePath, png);
      sources = response.headers.get('x-amz-meta-x-imagery-sources') || 'source header unavailable';
      fs.writeFileSync(cachePath.replace(/\.png$/, '.sources'), sources);
    }
    tileSources.push({ z: zoom, x, y, sources });
    const tile = decodeTerrariumPNG(png);
    if (tile.width !== 256 || tile.height !== 256) throw new Error(`Unexpected tile size ${tile.width}x${tile.height} at ${key}.`);
    tiles.set(`${x}/${y}`, tile);
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
console.log(`Loaded ${tiles.size} public Terrarium tiles at zoom ${zoom} (${xMin}–${xMax}, ${yMin}–${yMax}).`);

const samples = [];
let validCells = 0, seaCells = 0, missing = 0;
for (let row = 0; row < nrows; row++) {
  const latNorth = north - row * cell;
  for (let col = 0; col < ncols; col++) {
    const lonWest = west + col * cell;
    if (!isLand(lonWest + cell / 2, latNorth - cell / 2)) { samples.push(nodata); seaCells++; continue; }
    const landQuadrants = [[0.25,0.25],[0.75,0.25],[0.25,0.75],[0.75,0.75]].map(([fx,fy])=>isLand(lonWest+fx*cell,latNorth-fy*cell));
    const allLand = landQuadrants.every(Boolean);
    let sum = 0, count = 0;
    for (let sy = 0; sy < samplesPerCellAxis; sy++) for (let sx = 0; sx < samplesPerCellAxis; sx++) {
      const lon = lonWest + (sx + 0.5) / samplesPerCellAxis * cell;
      const lat = latNorth - (sy + 0.5) / samplesPerCellAxis * cell;
      // Most 0.25° cells are entirely land or sea. Four quarter-cell checks
      // detect coast cells; only those need exact coastline checks per sample.
      if (!allLand && !isLand(lon, lat)) continue;
      const gx = (lon + 180) / 360 * tilesAcross * 256;
      const gy = mercatorY(lat) * tilesAcross * 256;
      const px = Math.floor(gx), py = Math.floor(gy), tx = Math.floor(px / 256), ty = Math.floor(py / 256);
      const tile = tiles.get(`${tx}/${ty}`);
      if (!tile) { missing++; continue; }
      const value = tile.elevationAt(px - tx * 256, py - ty * 256);
      if (Number.isFinite(value) && value > -1000 && value < 10000) { sum += value; count++; }
    }
    if (count) { samples.push(Math.round(sum / count)); validCells++; }
    else { samples.push(nodata); seaCells++; }
  }
}
if (missing) throw new Error(`${missing} sample points had no downloaded tile.`);
const usable = samples.filter(value => value !== nodata);
if (usable.length < Math.floor(ncols * nrows * 0.2)) throw new Error(`Only ${usable.length} cells have land elevations.`);
const out = path.resolve(outputPath);
const asc = path.join(cacheDir, 'south-asia-0.25deg.asc');
const header = [`ncols ${ncols}`, `nrows ${nrows}`, `xllcorner ${west}`, `yllcorner ${south}`, `cellsize ${cell}`, `NODATA_value ${nodata}`];
fs.writeFileSync(asc, `${header.join('\n')}\n${Array.from({ length: nrows }, (_, row) => samples.slice(row * ncols, (row + 1) * ncols).join(' ')).join('\n')}\n`);
const sources = [...new Set(tileSources.flatMap(tile => tile.sources.split(/,\s*/).map(name => name.split('/')[0])))].sort();
const attribution = 'Mapzen Terrain Tiles (Tilezen). Tile metadata reports global SRTM and GMTED2010 terrain data courtesy of USGS and ETOPO1 data from NOAA. Source families present here: ' + sources.join(', ') + '. Attribution and licensing details: Tilezen attribution guidance.';
execFileSync(process.execPath, ['tools/import-strategic-dem.mjs', asc, out], {
  stdio: 'inherit',
  env: {
    ...process.env,
    INRTS_DEM_PRODUCT: 'Mapzen Terrain Tiles (z7 Terrarium regional mosaic)',
    INRTS_DEM_SOURCE: 'https://registry.opendata.aws/terrain-tiles/',
    INRTS_DEM_ATTRIBUTION: attribution,
    INRTS_DEM_ELEVATION_TYPE: 'Composite terrain elevation; source definitions and native resolutions vary by source tile.',
    INRTS_DEM_VERTICAL_DATUM: 'Source-dependent; Terrarium tiles do not provide one uniform vertical datum.',
    INRTS_DEM_RESAMPLING: `Mean of ${samplesPerCellAxis * samplesPerCellAxis} stratified samples per 0.25° cell, land-only by Natural Earth mask; rounded to integer metres.`,
    INRTS_DEM_SOURCE_TILES: String(tiles.size),
    INRTS_DEM_SOURCE_FAMILIES: sources.join(', '),
    INRTS_DEM_TILE_SCHEME: `Web Mercator XYZ Terrarium z${zoom}; 256 px tiles`,
    INRTS_DEM_RETRIEVED_AT: new Date().toISOString().slice(0,10),
    INRTS_DEM_VALID_CELLS: String(validCells),
    INRTS_DEM_NODATA_CELLS: String(seaCells),
  },
});
fs.writeFileSync('src/data/strategic-dem-tile-sources.csv', `z,x,y,imagery_sources\n${tileSources.sort((a,b)=>a.y-b.y||a.x-b.x).map(t=>`${t.z},${t.x},${t.y},"${t.sources.replaceAll('"','""')}"`).join('\n')}\n`);
execFileSync(process.execPath, ['tools/build-south-asia-elevation-grid.mjs'], { stdio: 'inherit' });
console.log(`Wrote ${validCells.toLocaleString()} land cells and ${seaCells.toLocaleString()} NODATA cells; contributing source families: ${sources.join(', ')}.`);
