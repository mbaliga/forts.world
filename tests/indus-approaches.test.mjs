import {test} from 'node:test';
import assert from 'node:assert/strict';
import {rohtasFort,attockFort} from '../src/levels/indus-approaches.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Indus approach prototypes retain sources and uncertainty',()=>{
 for(const level of [rohtasFort,attockFort]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.ok(!rohtasFort.terrain('1550').some(o=>o.op==='dig'));
 assert.ok(rohtasFort.terrain('today').some(o=>o.op==='dig'));
 assert.match(attockFort.eras[1].basis,/restricted/);
});
