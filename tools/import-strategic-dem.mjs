// Convert a resampled ESRI ASCII grid into the lightweight runtime DEM module.
// Expected grid: EPSG:4326, 226 x 140, 0.25 degree cells, bounds 44E–100.5E / 4.5N–39.5N.
import fs from 'node:fs';

const [inputPath, outputPath = 'src/data/strategic-dem-grid.js'] = process.argv.slice(2);
if (!inputPath) throw new Error('Usage: node tools/import-strategic-dem.mjs input.asc [output.js]');
const text = fs.readFileSync(inputPath, 'utf8');
const lines = text.trim().split(/\r?\n/);
const header = new Map();
let offset = 0;
for (; offset < lines.length && header.size < 6; offset++) {
  const parts = lines[offset].trim().split(/\s+/);
  if (parts.length !== 2) break;
  header.set(parts[0].toLowerCase(), Number(parts[1]));
}
const expected = { ncols: 226, nrows: 140, xllcorner: 44, yllcorner: 4.5, cellsize: 0.25 };
for (const [key, value] of Object.entries(expected)) {
  const actual = header.get(key);
  if (!Number.isFinite(actual) || Math.abs(actual - value) > 1e-8) {
    throw new Error(`Expected ${key}=${value}; received ${actual ?? 'missing'}`);
  }
}
const nodata = header.get('nodata_value');
if (!Number.isFinite(nodata)) throw new Error('ASCII grid is missing NODATA_value.');
const samples = lines.slice(offset).join(' ').trim().split(/\s+/).filter(Boolean).map(Number);
if (samples.length !== 226 * 140 || samples.some(v => !Number.isFinite(v))) {
  throw new Error(`Expected 31,640 numeric elevation cells; received ${samples.length}.`);
}
const usable = samples.filter(v => v !== nodata);
if (!usable.length || Math.min(...usable) < -500 || Math.max(...usable) > 9000) {
  throw new Error('No usable elevations, or values fall outside the supported -500 to 9,000 m range.');
}
const dem = {
  product: process.env.INRTS_DEM_PRODUCT || 'Copernicus DEM GLO-90',
  source: process.env.INRTS_DEM_SOURCE || 'https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM',
  attribution: process.env.INRTS_DEM_ATTRIBUTION || 'Produced using Copernicus WorldDEM-90 © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the European Union and ESA; all rights reserved.',
  elevationType: process.env.INRTS_DEM_ELEVATION_TYPE || 'Digital Surface Model; includes buildings, infrastructure and vegetation.',
  verticalDatum: process.env.INRTS_DEM_VERTICAL_DATUM || 'EGM2008 geoid',
  resampling: process.env.INRTS_DEM_RESAMPLING || 'Mean resampling to 0.25° strategic cells; metres rounded to integer values.',
  sourceTileCount: process.env.INRTS_DEM_SOURCE_TILES ? Number(process.env.INRTS_DEM_SOURCE_TILES) : undefined,
  sourceFamilies: process.env.INRTS_DEM_SOURCE_FAMILIES?.split(', ').filter(Boolean),
  sourceTileScheme: process.env.INRTS_DEM_TILE_SCHEME,
  sourceRetrievedAt: process.env.INRTS_DEM_RETRIEVED_AT,
  validCells: process.env.INRTS_DEM_VALID_CELLS ? Number(process.env.INRTS_DEM_VALID_CELLS) : undefined,
  nodataCells: process.env.INRTS_DEM_NODATA_CELLS ? Number(process.env.INRTS_DEM_NODATA_CELLS) : undefined,
  ncols: 226, nrows: 140, xllcorner: 44, yllcorner: 4.5, cellsize: 0.25, nodata,
  // ASCII row order is north to south; the renderer and router use this same order.
  elevations: samples.map(v => v === nodata ? nodata : Math.round(v)),
  elevationRangeMeters: [Math.min(...usable), Math.max(...usable)],
};
fs.writeFileSync(outputPath, `// Generated from a clipped source DEM grid.\nexport const STRATEGIC_DEM = ${JSON.stringify(dem)};\n`);
console.log(`Wrote ${outputPath}: ${usable.length.toLocaleString()} valid of ${samples.length.toLocaleString()} cells, ${Math.round(Math.min(...usable))}–${Math.round(Math.max(...usable))} m.`);
