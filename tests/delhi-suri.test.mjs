import {test} from 'node:test';
import assert from 'node:assert/strict';
import {salimgarh,puranaQila} from '../src/levels/delhi-suri.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Delhi fort prototypes identify historical and modern limits',()=>{
 for(const level of [salimgarh,puranaQila]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(salimgarh.eras[0].conjecture,/placeholder/);
 assert.match(salimgarh.eras[1].conjecture,/railway/);
 assert.ok(puranaQila.terrain('1556').some(o=>o.op==='dig'));
});
