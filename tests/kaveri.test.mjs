import {test} from 'node:test';
import assert from 'node:assert/strict';
import {srirangapatna,trichyRock} from '../src/levels/kaveri.js';
import {NODES_C,NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Kaveri scenes link catalogue IDs to campaign nodes and respect phase boundaries',()=>{
 for(const [level,node,year] of [[srirangapatna,NODES_C.find(n=>n.id==='srirangapatna'),1795],[trichyRock,NODES_D.find(n=>n.id==='trichy'),1751]]){
  assert.equal(node.playable,level.id);
  assert.equal(fortEraAt(level,year-1,node),null);
  assert.equal(fortEraAt(level,year,node)?.id,String(year));
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(srirangapatna,1799,NODES_C.find(n=>n.id==='srirangapatna')),null);
});
