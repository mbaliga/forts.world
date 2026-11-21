import {test} from 'node:test';
import assert from 'node:assert/strict';
import {warangal,bhongir} from '../src/levels/kakatiya.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Kakatiya prototypes carry sources and no future scene is selected',()=>{
 for(const level of [warangal,bhongir]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
});
