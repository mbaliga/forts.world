import {test} from 'node:test';
import assert from 'node:assert/strict';
import {FORTS} from '../src/data/forts.js';
import sources from '../src/data/source-catalogue.js';
import chittorgarh from '../src/levels/chittorgarh.js';
import kumbhalgarh from '../src/levels/kumbhalgarh.js';
import {ranthambore,gagron} from '../src/levels/rajasthan-landscapes.js';
import {taragarhAjmer} from '../src/levels/taragarh-pair.js';

test('Rajasthan playable scene anchors match cited ASI and UNESCO reference coordinates',()=>{
 const cases=[
  [chittorgarh,[24.887222,74.646944],'CHI-22'],
  [kumbhalgarh,[25.149167,73.581111],'KUM-22'],
  [ranthambore,[26.020278,76.455],'RAN-06'],
  [gagron,[24.626389,76.187222],'GAG-04'],
  [taragarhAjmer,[26.443597,74.616686],'TAJ-03'],
 ];
 for(const [scene,coordinate,sourceId] of cases){
  assert.deepEqual(scene.coords,coordinate,`${scene.id} scene anchor`);
  const entry=FORTS.find(f=>f.id===scene.id);
  assert.deepEqual([entry.lat,entry.lon],coordinate,`${scene.id} catalogue anchor`);
  assert.ok(sources.some(s=>s.id===sourceId),`${scene.id} source record`);
 }
});

test('Taragarh distinguishes its scaled Lakshmi Pol drawing from unverified fort walls',()=>{
 assert.ok(taragarhAjmer.eras.every(e=>e.sources.includes('TAJ-02')&&e.sources.includes('TAJ-03')));
 assert.match(taragarhAjmer.eras[0].conjecture,/other eight gates/);
 const rooms=[];
 const world=new Proxy({era:'today',wall:()=>({}),building:options=>rooms.push(options.name),zone:()=>{},houses:()=>{}},{get:(target,key)=>key in target?target[key]:(()=>{})});
 taragarhAjmer.build(world);
 assert.equal(rooms.filter(name=>name.includes('Lakshmi Pol flanking guard room')).length,2);
});
