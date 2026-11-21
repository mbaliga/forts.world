import {test} from 'node:test';
import assert from 'node:assert/strict';
import {narwar,garhKundar} from '../src/levels/narwar-kundar.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Narwar and Garh Kundar preserve uncertainty and phase boundaries',()=>{
 for(const level of [narwar,garhKundar]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(garhKundar,1301),null);
 assert.equal(fortEraAt(garhKundar,1520).id,'1520');
 assert.equal(fortEraAt(garhKundar,1521),null);
});
