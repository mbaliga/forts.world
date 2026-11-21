import {test} from 'node:test';
import assert from 'node:assert/strict';
import {fortWilliam,barabati} from '../src/levels/lower-ganges.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('lower Ganges prototypes retain source and date limitations',()=>{
 for(const level of [fortWilliam,barabati]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)+1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(barabati.terrain('1300').filter(o=>o.op==='dig').length,0);
 assert.ok(barabati.terrain('today').some(o=>o.op==='dig'));
 assert.match(fortWilliam.eras[0].conjecture,/older fort/);
});
