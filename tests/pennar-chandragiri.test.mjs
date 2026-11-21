import {test} from 'node:test';
import assert from 'node:assert/strict';
import {gandikota,chandragiri} from '../src/levels/pennar-chandragiri.js';
import {NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Pennar and Chandragiri scenes have sources and respect campaign ownership phases',()=>{
 for(const level of [gandikota,chandragiri]){
  const node=NODES_D.find(n=>n.id===level.id);
  assert.equal(node.playable,level.id);
  assert.equal(fortEraAt(level,1599,node),null);
  assert.equal(fortEraAt(level,1600,node)?.id,'1600');
  assert.equal(fortEraAt(level,1700,node),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
});
