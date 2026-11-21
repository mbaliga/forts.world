import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bhatner} from '../src/levels/bhatner.js';
import {ranthambore,gagron} from '../src/levels/rajasthan-landscapes.js';
import kumbhalgarh from '../src/levels/kumbhalgarh.js';
import { OSM_WALL_TRACE, RAMPOL_GEO } from '../src/levels/kumbhalgarh.trace.js';
import chittorgarh from '../src/levels/chittorgarh.js';

test('Bhatner uses an aerial-scaled provisional outline and keeps its river course unresolved',()=>{
 assert.equal(bhatner.datumLabel,'local ground datum');
 assert.ok(bhatner.terrain('today').some(op=>op.op==='raise'));
 assert.ok(bhatner.pois.some(p=>p.id==='town'));
 assert.ok(bhatner.eras.every(e=>e.sources.includes('BHA-04')));
});

test('Ranthambore names the seven documented gates and preserves position uncertainty',()=>{
 assert.equal(ranthambore.eras[0].sources.includes('RAN-03'),true);
 assert.ok(ranthambore.pois.filter(p=>p.id.startsWith('gate-')).length===7);
 assert.match(ranthambore.eras[0].conjecture,/bearings are schematic/);
});

test('Gagron distinguishes documented rivers from the simplified water scene',()=>{
 assert.ok(gagron.eras.every(e=>e.sources.includes('GAG-03')));
 assert.match(gagron.eras.at(-1).conjecture,/not the mapped channels/);
 assert.ok(gagron.pois.some(p=>p.title.includes('Ahu')));
});

test('Kumbhalgarh cites the official conservation report in its modern and founding phases',()=>{
 assert.ok(kumbhalgarh.eras.find(e=>e.id==='1458').sources.includes('KUM-21'));
 assert.ok(kumbhalgarh.eras.find(e=>e.id==='today').sources.includes('KUM-21'));
});

test('Kumbhalgarh experimental OSM trace records its scale and geographic anchor',()=>{
 const length=OSM_WALL_TRACE.reduce((sum,p,i)=>{
  const q=OSM_WALL_TRACE[(i+1)%OSM_WALL_TRACE.length];
  return sum+Math.hypot(q[0]-p[0],q[1]-p[1])*kumbhalgarh.units.planScale;
 },0);
 const xs=OSM_WALL_TRACE.map(p=>p[0]),ys=OSM_WALL_TRACE.map(p=>p[1]);
 assert.equal(OSM_WALL_TRACE.length,419);
 assert.ok(length>9500&&length<9750,`simplified mapped wall length ${length} m`);
 assert.ok(Math.max(...ys)-Math.min(...ys)>Math.max(...xs)-Math.min(...xs));
 assert.deepEqual(RAMPOL_GEO,[25.1476914,73.582073]);
 assert.ok(OSM_WALL_TRACE.every(([x,y,h])=>Number.isFinite(x)&&Number.isFinite(y)&&Number.isFinite(h)));
 assert.equal(kumbhalgarh.id,'kumbhalgarh');
});

test('Chittorgarh shows UNESCO property area with an explicit unaligned-boundary caveat',()=>{
 const p=chittorgarh.pois.find(p=>p.id==='unesco-boundary');
 assert.ok(p);
 assert.match(p.text,/305 ha/);
 assert.match(p.text,/about 440 m from ASI Jodhpur Circle’s whole-fort point/);
 assert.match(p.text,/conflicting extents/);
 assert.match(p.text,/not a surveyed boundary/);
 assert.ok(chittorgarh.eras.at(-1).sources.includes('CHI-21'));
});
