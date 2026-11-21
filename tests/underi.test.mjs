import {test} from 'node:test';
import assert from 'node:assert/strict';
import underi from '../src/levels/underi.js';
import {World} from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';
test('Underi uses existing Siddi units only in the historical scene',()=>{
 const past=new World(underi,{era:'1680'});underi.build(past);past.finish();
 const now=new World(underi,{era:'today'});underi.build(now);now.finish();
 assert.ok(past.npcs.some(n=>n.kind==='guard-siddi'));
 assert.ok(!now.npcs.some(n=>n.kind.startsWith('guard-')));
 assert.ok(!underi.eras.some(e=>Number(e.year)<1680));
 assert.ok(past.pois.every(p=>p.source&&p.positionEvidence==='inferred'));
 assert.ok(underi.eras.every(e=>e.conjecture&&e.sources.length));
});
