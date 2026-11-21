import {test} from 'node:test';
import assert from 'node:assert/strict';
import {rohtasgarh,chunar} from '../src/levels/kaimur-ganga.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Rohtasgarh and Chunar retain geographic, source and dated limits',()=>{
 for(const level of [rohtasgarh,chunar]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)+1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.notEqual(rohtasgarh.id,'rohtas-pk');
 assert.ok(rohtasgarh.terrain('today').some(o=>o.paint==='paved'));
 assert.ok(!rohtasgarh.terrain('1540').some(o=>o.paint==='paved'));
});
