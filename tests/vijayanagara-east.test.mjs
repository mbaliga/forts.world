import {test} from 'node:test';
import assert from 'node:assert/strict';
import {penukonda,udayagiri} from '../src/levels/vijayanagara-east.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Vijayanagara prototypes preserve sources and location uncertainty',()=>{
 for(const level of [penukonda,udayagiri]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(penukonda.pois.find(p=>p.id==='position').text,/differs/);
 assert.match(udayagiri.pois.find(p=>p.id==='identity').text,/Kanyakumari/);
});
