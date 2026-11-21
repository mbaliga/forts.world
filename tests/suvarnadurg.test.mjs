import {test} from 'node:test';
import assert from 'node:assert/strict';
import level,{island,fortPoint,elevation} from '../src/levels/suvarnadurg.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import {NODES} from '../src/data/konkan.js';

test('Suvarnadurg separates the UNESCO reference, mapped shoreline and unresolved fort plan',()=>{
 assert.ok(Math.abs(level.coords[0]-17.816389)<0.000001);
 assert.ok(Math.abs(level.coords[1]-73.084444)<0.000001);
 const node=NODES.find(n=>n.id==='suvarnadurg');
 assert.ok(Math.abs(node.lat-level.coords[0])<0.000001&&Math.abs(node.lon-level.coords[1])<0.000001);
 assert.ok(island.length>30&&fortPoint.length===2);
 const area=Math.abs(island.reduce((sum,p,i)=>{const q=island[(i+1)%island.length];return sum+p[0]*q[1]-q[0]*p[1]},0))/2*4;
 assert.ok(area>68000&&area<73000);
 assert.equal(Buffer.from(elevation.data,'base64').length,13*15*2);
 assert.deepEqual(level.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(level,1755),null);
 assert.match(level.eras[0].conjecture,/not a fort-wall/);
});
