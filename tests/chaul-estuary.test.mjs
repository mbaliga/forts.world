import {test} from 'node:test';
import assert from 'node:assert/strict';
import {revdanda,korlai} from '../src/levels/chaul-estuary.js';
import {NODES} from '../src/data/konkan.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Chaul scenes link to existing nodes without crossing ownership phases',()=>{
 for(const level of [revdanda,korlai]){
  const node=NODES.find(n=>n.id===level.id);
  assert.equal(node.playable,level.id);
  assert.equal(fortEraAt(level,1609,node),null);
  assert.equal(fortEraAt(level,1610,node)?.id,'1610');
  assert.equal(fortEraAt(level,1740,node),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(korlai.eras[0].basis,/1592 or 1594/);
});
