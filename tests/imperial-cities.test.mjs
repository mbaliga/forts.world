import {test} from 'node:test';
import assert from 'node:assert/strict';
import {tughlaqabad,fatehpurSikri,buildPanchMahal,buildAnupTalao} from '../src/levels/imperial-cities.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('fortified city prototypes disclose the model and period limits',()=>{
 for(const level of [tughlaqabad,fatehpurSikri]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(tughlaqabad.eras[0].conjecture,/manually digitized.*not georeferenced/);
 assert.match(fatehpurSikri.eras[0].conjecture,/not the fortified city/);
});

test('Panch Mahal interpretation uses five storeys only in the present scene',()=>{
 const floors=[];
 const world={ground:()=>10,pavilion:o=>{floors.push(o);return {roofTop:o.base+o.colH+0.35};}};
 buildPanchMahal(world,'1580'); assert.equal(floors.length,0);
 buildPanchMahal(world,'today'); assert.equal(floors.length,5);
 assert.ok(floors.every(f=>f.inner&&f.walk===false));
 assert.ok(floors.every((f,i)=>i===0||f.base>floors[i-1].base));
});

test('Anup Talao interpretation has a tank and four walks only in the present scene',()=>{
 let tanks=0; const bridges=[];
 const world={ground:()=>10,tank:()=>{tanks++;},bridge:o=>bridges.push(o)};
 buildAnupTalao(world,'1580'); assert.equal(tanks,0); assert.equal(bridges.length,0);
 buildAnupTalao(world,'today'); assert.equal(tanks,1); assert.equal(bridges.length,4);
});
