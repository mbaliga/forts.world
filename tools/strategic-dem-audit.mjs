// Validate the runtime DEM interpolation with a hand-computable 2 x 2 grid.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { sampleStrategicDEM } from '../src/game/strategic-terrain.js';

const grid = { ncols: 2, nrows: 2, xllcorner: 0, yllcorner: 0, cellsize: 1, nodata: -9999, elevations: [30, 40, 10, 20] };
assert.equal(sampleStrategicDEM(grid, 0.5, 1.5), 30, 'north-west cell center');
assert.equal(sampleStrategicDEM(grid, 1, 1), 25, 'bilinear center interpolation');
assert.equal(sampleStrategicDEM(grid, -1, 1), null, 'outside grid extent');
grid.elevations[0] = -9999;
assert.equal(sampleStrategicDEM(grid, 0.5, 1.5), null, 'nodata cell');
assert.equal(sampleStrategicDEM(grid, 1, 1), 23, 'interpolation renormalizes around nodata');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'inrts-dem-audit-'));
try {
  const asc = path.join(dir, 'synthetic.asc'), modulePath = path.join(dir, 'synthetic-dem.mjs');
  const rows = Array.from({ length: 140 }, (_, row) => Array.from({ length: 226 }, (_, col) => 100 + row + col).join(' '));
  fs.writeFileSync(asc, ['ncols 226', 'nrows 140', 'xllcorner 44', 'yllcorner 4.5', 'cellsize 0.25', 'NODATA_value -9999', ...rows].join('\n'));
  execFileSync(process.execPath, ['tools/import-strategic-dem.mjs', asc, modulePath], { stdio: 'pipe' });
  const { STRATEGIC_DEM } = await import(`${pathToFileURL(modulePath).href}?audit=${Date.now()}`);
  assert.equal(STRATEGIC_DEM.elevations.length, 31640, 'regional sample count');
  assert.equal(STRATEGIC_DEM.elevations[0], 100, 'north-west sample order');
  assert.equal(STRATEGIC_DEM.elevations.at(-1), 464, 'south-east sample order');
  assert.equal(STRATEGIC_DEM.product, 'Copernicus DEM GLO-90', 'source provenance');
} finally {
  fs.rmSync(dir, { recursive: true, force: true });
}
console.log('PASS · DEM interpolation, nodata handling, ASCII-grid import and source metadata.');
