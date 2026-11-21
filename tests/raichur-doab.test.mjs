import {test} from 'node:test';
import assert from 'node:assert/strict';
import {raichur,mudgal} from '../src/levels/raichur-doab.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Raichur and Mudgal scenes preserve evidence and phase limits',()=>{
 for(const level of [raichur,mudgal]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(mudgal.eras[0].conjecture,/provisional/);
 assert.match(raichur.eras[0].basis,/two-enclosure plan/);
 assert.equal(raichur.additionalWalls.length,1,'Raichur inner and outer enclosures stay separate');
 assert.equal(raichur.coords[0],16.20112,'Use the government mapped reference latitude');
});
