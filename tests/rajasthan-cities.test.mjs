import {test} from 'node:test';
import assert from 'node:assert/strict';
import {nahargarh,junagarh} from '../src/levels/rajasthan-cities.js';
import sources from '../src/data/source-catalogue.js';
import {fortEraAt} from '../src/game/campaign-battle.js';

test('Nahargarh separates mapped walls and present terrain from historical phases',()=>{
 assert.deepEqual(nahargarh.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(nahargarh,1734),null);
 assert.equal(fortEraAt(nahargarh,1868),null);
 assert.equal(nahargarh.siteBoundary.length,15);
 assert.match(nahargarh.siteBoundaryLabel,/boundary is not a wall trace/);
 assert.ok(nahargarh.wallPath.length>80);
 assert.notDeepEqual(nahargarh.wallPath,nahargarh.siteBoundary);
 for(const id of nahargarh.eras[0].sources) assert.ok(sources.some(s=>s.id===id),`missing source ${id}`);
 const grid=nahargarh.terrain().find(op=>op.op==='grid').grid;
 assert.deepEqual([grid.nx,grid.ny],[11,9]);
 assert.equal(Buffer.from(grid.data,'base64').length,11*9*2);
 const walls=[],buildings=[],zones=[];
 const world=new Proxy({era:'today',ground:()=>0,wall:o=>(walls.push(o),{}),building:o=>buildings.push(o),zone:(poly,name)=>zones.push({poly,name})},{get:(target,key)=>key in target?target[key]:(()=>{})});
 nahargarh.build(world);
 assert.ok(walls.some(w=>w.path.length>80));
 assert.ok(walls.filter(w=>w.closed===false).length>=2);
 assert.ok(buildings.some(b=>b.name.startsWith('Madhavendra Bhawan')));
 assert.ok(!buildings.some(b=>b.name.startsWith('Queen’s suite')));
 assert.ok(zones.some(z=>z.name===nahargarh.siteBoundaryLabel&&z.poly.length===15));
 assert.ok(junagarh.eras.every(e=>e.sources.length&&e.conjecture));
});
