import {test} from 'node:test';
import assert from 'node:assert/strict';
import BASE from '../src/data/basemap.js';
import {FORTS} from '../src/data/forts.js';
import {STRATEGIC_DEM,sampleStrategicDEM} from '../src/game/strategic-terrain.js';
import {HYDRO_RIVERS,decodeHydroPolyline} from '../src/data/hydrorivers.js';
import {contourSegments} from '../src/south-asia/national-relief.js';
import {initialFort} from '../src/game/initial-fort.js';

test('regional grid covers the requested extent and retains missing values',()=>{
 assert.deepEqual(BASE.bbox,[44,4.5,100.5,39.5]);
 assert.equal(STRATEGIC_DEM.cellsize,.25);
 assert.equal(STRATEGIC_DEM.elevations.length,STRATEGIC_DEM.ncols*STRATEGIC_DEM.nrows);
 assert.equal(sampleStrategicDEM(STRATEGIC_DEM,120,0),null);
 const himalaya=sampleStrategicDEM(STRATEGIC_DEM,86.75,27.9);
 const plain=sampleStrategicDEM(STRATEGIC_DEM,80.95,26.85);
 assert.ok(himalaya>2000 && plain>=0 && himalaya>plain);
});
test('contours skip missing data and interpolate a crossing',()=>{
 const grid={ncols:2,nrows:2,elevations:[0,1000,0,1000],nodata:-9999};
 assert.deepEqual(contourSegments(grid,500),[[[1,.5],[1,1.5]]]);
 grid.elevations[0]=-9999;assert.deepEqual(contourSegments(grid,500),[]);
});
test('fort link takes precedence only for an available scene',()=>{
 const levels=[{id:'janjira'},{id:'reis-magos'}];
 assert.equal(initialFort(levels,'?fort=reis-magos',null,'janjira'),'reis-magos');
 assert.equal(initialFort(levels,'?fort=missing',null,'janjira'),'janjira');
});
test('fort locations and decoded hydrography are usable for the overview',()=>{
 const forts=FORTS.filter(f=>Number.isFinite(f.lat)&&Number.isFinite(f.lon)&&f.lon>=44&&f.lon<=100.5&&f.lat>=4.5&&f.lat<=39.5);
 assert.ok(forts.length>=100 && forts.some(f=>f.id==='reis-magos'));
 // forts.world ships no HydroRIVERS data (src/data/hydrorivers.js is a stub; see LICENSES.md): check the decoder on a fixed string instead
 if(!HYDRO_RIVERS.length){const pts=decodeHydroPolyline('_p~iF~ps|U_ulLnnqC_mqNvxq`@');assert.equal(pts.length,3);assert.ok(pts.every(([lon,lat])=>Number.isFinite(lon)&&Number.isFinite(lat)));return;}
 const row=HYDRO_RIVERS.find(r=>r[1]>=6);assert.ok(row);
 const points=decodeHydroPolyline(row[2].split('!')[0]);assert.ok(points.length>=2);
 assert.ok(points.every(([lon,lat])=>Number.isFinite(lon)&&Number.isFinite(lat)));
});
