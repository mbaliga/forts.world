import {test} from 'node:test';
import assert from 'node:assert/strict';
import {kangra,nurpur,buildTempleCue} from '../src/levels/kangra-valley.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Kangra and Nurpur preserve evidence and phase boundaries',()=>{
 for(const level of [kangra,nurpur]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(kangra,1615),null);
 assert.equal(fortEraAt(kangra,1625).id,'1625');
 assert.equal(fortEraAt(kangra,1626),null);
});
test('Kangra temple cue is not projected into earlier phases',()=>{
 let count=0;const W={ground:()=>10,temple:()=>{count++;}};
 buildTempleCue(W,'1610','kangra');buildTempleCue(W,'1625','kangra');assert.equal(count,0);
 buildTempleCue(W,'today','kangra');buildTempleCue(W,'1620','nurpur');assert.equal(count,2);
});
