import {test} from 'node:test';
import assert from 'node:assert/strict';
import {gooty,vellore} from '../src/levels/eastern-deccan.js';
import {NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Eastern Deccan scenes are linked and do not appear before their dated interpretations',()=>{
 for(const level of [gooty,vellore]){
  assert.equal(NODES_D.find(n=>n.id===level.id).playable,level.id);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(vellore.eras[0].conjecture,/church/);
 assert.match(gooty.eras[0].conjecture,/hills/);
});
