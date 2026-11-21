import {test} from 'node:test';
import assert from 'node:assert/strict';
import {jhansiFortScene,asirgarh,buildAsirMosque} from '../src/levels/bundelkhand-khandesh.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Jhansi and Asirgarh preserve period and evidence limitations',()=>{
 for(const level of [jhansiFortScene,asirgarh]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(jhansiFortScene,1700),null);
 assert.equal(fortEraAt(jhansiFortScene,1857).id,'1857');
 assert.equal(fortEraAt(jhansiFortScene,1858),null);
 assert.equal(fortEraAt(asirgarh,1591),null);
});
test('Asirgarh mosque interpretation is limited to authored scenes',()=>{
 let count=0;const W={ground:()=>10,mosque:()=>{count++;}};
 buildAsirMosque(W,'1580');assert.equal(count,0);
 buildAsirMosque(W,'1590');buildAsirMosque(W,'today');assert.equal(count,2);
});
