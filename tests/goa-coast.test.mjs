import {test} from 'node:test';
import assert from 'node:assert/strict';
import {aguada,caboDeRama} from '../src/levels/goa-coast.js';
import {NODES_C} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Goa headland scenes link to the campaign without earlier periods or unsourced landmarks',()=>{
 for(const level of [aguada,caboDeRama]){
  assert.equal(NODES_C.find(n=>n.id===level.id).playable,level.id);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(aguada.eras[0].conjecture,/lighthouse/);
 assert.match(caboDeRama.eras[0].conjecture,/dates are not reconstructed/i);
 const terrain=aguada.terrain('today'),dem=terrain.find(op=>op.op==='grid').grid;
 assert.deepEqual([dem.nx,dem.ny,dem.stride],[18,13,40]);
 assert.equal(Buffer.from(dem.data,'base64').length,18*13*2);
 assert.ok(terrain.some(op=>op.op==='dig'&&op.poly.length>20),'the mapped shoreline defines water');
 assert.ok(aguada.eras[0].sources.includes('AGU-09')&&aguada.eras[0].sources.includes('AGU-10'));
 assert.ok(aguada.eras[0].sources.includes('AGU-11')&&aguada.eras[0].sources.includes('AGU-12'));
 assert.match(aguada.pois.find(p=>p.id==='new-light').text,/460 m/);
 assert.match(aguada.pois.find(p=>p.id==='light').text,/16 m/);
 const buildings=[];
 aguada.build(new Proxy({era:'today',ground:()=>63,wall:()=>({}),building:o=>buildings.push(o)}, {get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.equal(buildings.find(b=>b.name?.startsWith('Modern Aguada lighthouse')).h,18);
 assert.equal(buildings.filter(b=>b.name?.startsWith('Lower complex building')).length,3);
 assert.ok(aguada.eras[0].sources.includes('AGU-13'));
 const caboOps=caboDeRama.terrain('today'),caboGrid=caboOps.find(op=>op.op==='grid').grid;
 assert.deepEqual([caboGrid.nx,caboGrid.ny,caboGrid.stride],[11,9,100]);
 assert.equal(Buffer.from(caboGrid.data,'base64').length,11*9*2);
 assert.equal(caboOps.filter(op=>op.op==='paint'&&Array.isArray(op.path)).length,2);
 assert.ok(caboDeRama.eras[0].sources.includes('CAB-07')&&caboDeRama.eras[0].sources.includes('CAB-08'));
});
