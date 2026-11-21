import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chanderi,ajaigarh} from '../src/levels/chanderi-ajaigarh.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bundelkhand hill forts preserve evidence and dated limits',()=>{
 for(const level of [chanderi,ajaigarh]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(fortEraAt(level,Number(level.eras[0].id)));
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(ajaigarh.terrain('1200').filter(o=>o.paint==='paved').length,0);
 assert.ok(ajaigarh.terrain('today').some(o=>o.paint==='paved'));
});
