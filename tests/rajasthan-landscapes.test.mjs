import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ranthambore,gagron} from '../src/levels/rajasthan-landscapes.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Rajasthan landscape prototypes retain dated sources and terrain caveats',()=>{
 for(const level of [ranthambore,gagron]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(gagron.eras[0].conjecture,/not a surveyed/);
});
test('Gagron separates mapped fort area and wall traces from the current rivers',()=>{
 assert.deepEqual(gagron.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(gagron,1450),null);
 assert.ok(gagron.siteBoundary.length>100);
 const grid=gagron.terrain().find(op=>op.op==='grid').grid;
 assert.deepEqual([grid.nx,grid.ny,grid.stride],[13,13,60]);
 assert.equal(Buffer.from(grid.data,'base64').length,338);
 assert.equal(gagron.terrain().filter(op=>op.op==='dig').length,3);
});
test('Ranthambore uses a mapped enclosure and does not invent a medieval phase',()=>{
 assert.deepEqual(ranthambore.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(ranthambore,1290),null);
 assert.ok(ranthambore.wallPath.length>200);
 const p=ranthambore.wallPath;
 const area=Math.abs(p.reduce((s,a,i)=>{const b=p[(i+1)%p.length];return s+a[0]*b[1]-b[0]*a[1]},0))/2*9;
 assert.ok(area>1_050_000&&area<1_160_000,'mapped enclosure is approximately 110 ha');
 const grid=ranthambore.terrain().find(op=>op.op==='grid').grid;
 assert.deepEqual([grid.nx,grid.ny],[11,11]);
 assert.equal(Buffer.from(grid.data,'base64').length,242);
 assert.equal(ranthambore.terrain().filter(op=>op.op==='dig').length,3);
});
