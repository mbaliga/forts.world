import {test} from 'node:test';
import assert from 'node:assert/strict';
import {allahabadFort,lahoreFort,buildNorthCourt} from '../src/levels/mughal-river-cities.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('river-city prototypes keep sources and historical phase limits',()=>{
 for(const level of [allahabadFort,lahoreFort]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(lahoreFort,1624).id,'1600');
 assert.equal(fortEraAt(lahoreFort,1625).id,'1625');
});
test('the court cue is absent in the earlier period',()=>{
 let count=0;const W={ground:()=>8,pavilion:()=>{count++;}};
 buildNorthCourt(W,'1600');assert.equal(count,0);
 buildNorthCourt(W,'1625');assert.equal(count,1);
 buildNorthCourt(W,'today');assert.equal(count,2);
});
