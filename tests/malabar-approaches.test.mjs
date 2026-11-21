import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bekal,palakkad} from '../src/levels/malabar-approaches.js';
import {NODES_C} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bekal and Palakkad connect to the campaign only from their dated scenes',()=>{
 for(const level of [bekal,palakkad]){
  assert.equal(NODES_C.find(n=>n.id===level.id).playable,level.id);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(palakkad.eras[0].conjecture,/square/);
 assert.match(bekal.eras[0].basis,/competing/);
});
