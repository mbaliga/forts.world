import {test} from 'node:test';
import assert from 'node:assert/strict';
import level,{wallSegments,sea,road,elevation} from '../src/levels/vijaydurg.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import {NODES} from '../src/data/konkan.js';

test('Vijaydurg keeps mapped wall segments distinct from its documented three circuits',()=>{
 assert.ok(Math.abs(level.coords[0]-16.560833)<0.000001&&Math.abs(level.coords[1]-73.333333)<0.000001);
 const node=NODES.find(n=>n.id==='vijaydurg');
 assert.ok(Math.abs(node.lat-level.coords[0])<0.000001&&Math.abs(node.lon-level.coords[1])<0.000001);
 assert.equal(wallSegments.length,10);
 assert.ok(wallSegments.every(p=>p.length>=2)&&sea.length>70&&road.length>5);
 assert.equal(Buffer.from(elevation.data,'base64').length,13*13*2);
 assert.deepEqual(level.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(level,1756),null);
 assert.match(level.eras[0].conjecture,/cannot yet be assigned to all three historical circuits/);
});
