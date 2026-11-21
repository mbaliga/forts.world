import {test} from 'node:test';
import assert from 'node:assert/strict';
import {medak,kondapalli} from '../src/levels/east-hill-forts.js';
import {NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Eastern hill forts retain sources and Kondapalli respects campaign phases',()=>{
 const node=NODES_D.find(n=>n.id==='kondapalli');
 assert.equal(node.playable,kondapalli.id);
 assert.equal(fortEraAt(kondapalli,1649,node),null);
 assert.equal(fortEraAt(kondapalli,1650,node)?.id,'1650');
 assert.equal(fortEraAt(kondapalli,1687,node),null);
 for(const level of [medak,kondapalli]){
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
});
