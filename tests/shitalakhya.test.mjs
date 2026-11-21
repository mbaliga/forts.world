import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sonakanda,hajiganj,buildSonakandaPlatform} from '../src/levels/shitalakhya.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Shitalakhya prototypes disclose evidence, locations and period limits',()=>{
 for(const level of [sonakanda,hajiganj]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)+1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
  assert.match(level.pois.find(p=>p.id==='location').text,/different/);
 }
});
test('Sonakanda platform has sourced nominal dimensions only in the modern scene',()=>{
 const calls=[];const W={ground:()=>5,bastion:o=>calls.push(o),stairs:()=>{}};
 buildSonakandaPlatform(W,'1670');assert.equal(calls.length,0);
 buildSonakandaPlatform(W,'today');assert.equal(calls.length,1);
 assert.equal(calls[0].r*6,21.75);assert.equal(calls[0].h*4,6.09);
});
