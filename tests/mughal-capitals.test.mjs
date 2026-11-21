import {test} from 'node:test';
import assert from 'node:assert/strict';
import {redFort,agraFort} from '../src/levels/mughal-capitals.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Mughal capital prototypes disclose phase and site limitations',()=>{
 for(const level of [redFort,agraFort]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(redFort.eras[0].conjecture,/Moti Masjid/);
 assert.match(agraFort.eras[0].conjecture,/Shah Jahan/);
});
