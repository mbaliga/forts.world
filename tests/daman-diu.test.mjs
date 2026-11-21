import {test} from 'node:test';
import assert from 'node:assert/strict';
import {diu,motiDaman} from '../src/levels/daman-diu.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Daman and Diu prototypes preserve sources and dated limits',()=>{
 for(const level of [diu,motiDaman]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(diu.eras[0].conjecture,/Panikotha/);
});
