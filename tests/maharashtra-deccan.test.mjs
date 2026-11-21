import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ahmednagar,naldurg} from '../src/levels/maharashtra-deccan.js';
import {NODES} from '../src/data/konkan.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Deccan fort scenes retain sources and Ahmednagar observes campaign ownership',()=>{
 const node=NODES.find(n=>n.id==='ahmednagar');
 assert.equal(node.playable,'ahmednagar');
 assert.equal(fortEraAt(ahmednagar,1596,node)?.id,'1596');
 assert.equal(fortEraAt(ahmednagar,1600,node),null);
 for(const level of [ahmednagar,naldurg]){
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(naldurg.eras[0].conjecture,/palace/);
 assert.equal(naldurg.additionalWalls.length,2,'Naldurg Naya Qilah and southern enclosure are separate from the principal circuit');
});
