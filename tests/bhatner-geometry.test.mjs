import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bhatner} from '../src/levels/bhatner.js';
import {FORTS} from '../src/data/forts.js';
import sources from '../src/data/source-catalogue.js';

test('Bhatner uses ASI coordinates and an aerial-scaled, plan-informed bastion circuit',()=>{
 assert.deepEqual(bhatner.coords,[29.58605,74.325322]);
 assert.deepEqual(FORTS.find(f=>f.id==='bhatner').lat,29.58605);
 assert.deepEqual(FORTS.find(f=>f.id==='bhatner').lon,74.325322);
 assert.deepEqual(bhatner.wallPath,[[-68,-43],[53,-43],[68,43],[-53,43]]);
 assert.ok(bhatner.eras.every(e=>e.sources.includes('BHA-06')));
 assert.ok(bhatner.eras.every(e=>e.sources.includes('BHA-08')));
 assert.ok(sources.some(s=>s.id==='BHA-08'&&s.institution==='Archaeological Survey of India, Jodhpur Circle'));
 assert.ok(sources.some(s=>s.id==='BHA-06'&&s.page_url==='https://www.asijodhpurcircle.in/monuments'));
 assert.match(bhatner.eras[0].conjecture,/not georeferenced.*Exact corners/);

 const walls=[],bastions=[];let waterCount=0;
 const world=new Proxy({era:'1810',ground:()=>0,wall:options=>{walls.push(options.path);return {};},bastion:options=>bastions.push(options),water:()=>waterCount++},{get:(target,key)=>key in target?target[key]:(()=>{})});
 bhatner.build(world);
 assert.deepEqual(walls[0],bhatner.wallPath,'the enclosure keeps the ASI plan form instead of a radial ellipse');
 assert.ok(bastions.length>=47&&bastions.length<=48,'the twelve-per-side count is represented, allowing a gate opening');
 assert.equal(waterCount,0,'an unverified present channel is not drawn as a surveyed river');
});
