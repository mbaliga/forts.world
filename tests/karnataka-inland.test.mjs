import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chitradurga,bangalore} from '../src/levels/karnataka-inland.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Karnataka inland scenes disclose reconstruction limits and sources',()=>{
 for(const level of [chitradurga,bangalore]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(bangalore.eras[0].conjecture,/not yet complete/);
});
