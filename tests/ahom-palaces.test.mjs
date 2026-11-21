import {test} from 'node:test';
import assert from 'node:assert/strict';
import {karengGhar,talatalGhar,buildAhomPalace} from '../src/levels/ahom-palaces.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Garhgaon and Rangpur remain distinct sourced sites with date limits',()=>{
 assert.notEqual(karengGhar.id,talatalGhar.id);
 for(const level of [karengGhar,talatalGhar]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)+1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(talatalGhar.eras[0].conjecture,/underground/);
});
test('Talatal uses a ruin cue in the present-day scene',()=>{
 const calls=[];const W={ground:()=>4,building:()=>calls.push('building'),ruin:()=>calls.push('ruin'),zone:()=>{}};
 buildAhomPalace(W,'1768','talatal');buildAhomPalace(W,'today','talatal');
 assert.deepEqual(calls,['building','ruin']);
});
