import {test} from 'node:test';
import assert from 'node:assert/strict';
import padmadurg from '../src/levels/padmadurg.js';
import inventory from '../src/data/kolaba-inventory.js';
import {NODES} from '../src/data/konkan.js';
import {World} from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';
test('Padmadurg uses a dated garrison, identifies the chronology disagreement and leaves the original inventory unaltered',()=>{
 const old=new World(padmadurg,{era:'1693'});padmadurg.build(old);old.finish();
 const now=new World(padmadurg,{era:'today'});padmadurg.build(now);now.finish();
 assert.ok(old.npcs.some(n=>n.kind==='guard-maratha'));
 assert.ok(!now.npcs.some(n=>n.kind.startsWith('guard-')));
 assert.ok(old.pois.every(p=>p.source&&p.positionEvidence==='inferred'));
 assert.ok(padmadurg.eras[0].conjecture.includes('1676'));
 assert.ok(NODES.find(n=>n.id==='padmadurg').phases[0].note.includes('1693'));
 assert.equal(inventory.find(f=>f.id==='padmadurg').playable,false);
});
test('Padmadurg campaign exploration does not show its 1693 scene in 1676',async()=>{
 const {fortEraAt}=await import('../src/game/campaign-battle.js');
 assert.equal(fortEraAt(padmadurg,1676),null);
 assert.equal(fortEraAt(padmadurg,1693).id,'1693');
 assert.equal(NODES.find(n=>n.id==='padmadurg').playable,'padmadurg');
});
