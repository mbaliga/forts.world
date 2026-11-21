import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parenda,kandhar} from '../src/levels/marathwada.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Marathwada fort scenes disclose sources and uncertain phases',()=>{
 for(const level of [parenda,kandhar]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(kandhar.eras[0].conjecture,/not established/);
});
