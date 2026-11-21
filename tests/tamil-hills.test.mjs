import {test} from 'node:test';
import assert from 'node:assert/strict';
import {dindigul,sankagiri} from '../src/levels/tamil-hills.js';
import {NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Tamil hill scenes preserve sources and campaign phase boundaries',()=>{
 const node=NODES_D.find(n=>n.id==='dindigul');
 assert.equal(node.playable,'dindigul');
 assert.equal(fortEraAt(dindigul,1760,node)?.id,'1760');
 assert.equal(fortEraAt(dindigul,1784,node),null);
 assert.match(node.phases[1].note,/1742/);
 for(const level of [dindigul,sankagiri]){
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
});
