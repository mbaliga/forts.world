import {test} from 'node:test';import assert from 'node:assert/strict';
import {purandar,vasai} from '../src/levels/western-campaign.js';
import {World} from '../src/core/world.js';
import {KINDS} from '../src/game/people.js';
import '../src/core/arch.js';import '../src/core/props.js';import '../src/core/camp.js';import '../src/core/ground.js';
test('new scenes use dated garrisons, sourced landmarks and explicit reconstruction caveats',()=>{
 for(const [level,era,guard] of [[purandar,'1665','guard-mughal'],[vasai,'1738','guard-portuguese']]){
  const past=new World(level,{era});level.build(past);past.finish();
  const now=new World(level,{era:'today'});level.build(now);now.finish();
  assert.ok(KINDS[guard]);assert.ok(past.npcs.some(n=>n.kind===guard));
  assert.ok(!now.npcs.some(n=>n.kind.startsWith('guard-')));
  assert.ok(past.pois.every(p=>p.source&&p.positionEvidence==='inferred'));
  assert.ok(level.eras.every(e=>e.conjecture&&e.sources.length));
 }
});
