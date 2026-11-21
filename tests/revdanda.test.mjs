import {test} from 'node:test';
import assert from 'node:assert/strict';
import level,{wallPath,coast,road,townRoad,wallSections,elevation} from '../src/levels/revdanda.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import {NODES} from '../src/data/konkan.js';
import {World} from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';

test('Revdanda presents mapped town walls and modern context without asserting a 1610 plan',()=>{
 assert.deepEqual(level.coords,[18.5474,72.9268]);
 const node=NODES.find(n=>n.id==='revdanda');
 assert.deepEqual([node.lat,node.lon],level.coords);
 assert.ok(wallPath.length>=25&&coast.length>=15&&road.length>=20);
 assert.equal(Buffer.from(elevation.data,'base64').length,13*15*2);
 assert.deepEqual(level.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(level,1610),null);
 assert.match(level.eras[0].conjecture,/moat, churches, buildings and settlement are not reconstructed/);
});
test('mapped present-day road crossings can be traversed from the fort',()=>{
 assert.ok(townRoad.length>20&&wallSections.length===2);
 const w=new World(level,{era:'today'});level.build(w);w.finish();
 const s=w.spawnAt, start=w.nav.nearest(s.x,s.y,s.h??w.ground(s.x,s.y),10,4);
 const reachable=w.nav.reachable(start);
 for(const [x,y] of [[7.5,89.36],[60,-90]]){
  const node=w.nav.nearest(x,y,w.ground(x,y),3,4);
  assert.ok(node>=0&&reachable[node],`road point ${x},${y} must be reachable`);
 }
});
