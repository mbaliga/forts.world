import {test} from 'node:test';
import assert from 'node:assert/strict';
import {thirumayam,fortStGeorge} from '../src/levels/tamil-coast.js';
import {NODES_D} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Tamil coast scenes link catalogue entries to campaign sites and dates',()=>{
 for(const [level,nodeId,year] of [[thirumayam,'thirumayam',1700],[fortStGeorge,'madras',1751]]){
  const node=NODES_D.find(n=>n.id===nodeId);
  assert.equal(node.playable,level.id);
  assert.equal(fortEraAt(level,year-1,node),null);
  assert.equal(fortEraAt(level,year,node)?.id,String(year));
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
});
