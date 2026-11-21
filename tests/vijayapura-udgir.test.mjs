import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bijapur,udgir} from '../src/levels/vijayapura-udgir.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bijapur and Udgir scenes carry sources and avoid earlier periods',()=>{
 for(const level of [bijapur,udgir]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(udgir.pois.find(p=>p.id==='tunnel').text,/unverified/);
 assert.equal(bijapur.additionalWalls.length,1,'Arkilla retains a separate outer wall circuit');
 assert.equal(bijapur.coords[0],16.82681,'Arkilla marker is placed at the citadel reference, not the city centre');
});
