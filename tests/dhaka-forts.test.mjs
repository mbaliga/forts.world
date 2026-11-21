import {test} from 'node:test';
import assert from 'node:assert/strict';
import {idrakpur,lalbagh,buildIdrakpurPlatform} from '../src/levels/dhaka-forts.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Dhaka prototypes retain source and date limits',()=>{
 for(const level of [idrakpur,lalbagh]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)+1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(idrakpur.pois.find(p=>p.id==='location').text,/differ/);
});
test('Idrakpur platform is present only in the modern interpretation',()=>{
 const calls=[];const W={ground:()=>5,bastion:o=>calls.push(o),stairs:()=>{}};
 buildIdrakpurPlatform(W,'1670');assert.equal(calls.length,0);
 buildIdrakpurPlatform(W,'today');assert.equal(calls.length,1);
 assert.equal(calls[0].r*6,32.9);
});
