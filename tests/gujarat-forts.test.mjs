import {test} from 'node:test';
import assert from 'node:assert/strict';
import {uparkot,pavagadh} from '../src/levels/gujarat-forts.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Gujarat prototypes retain sources and dated interpretation limits',()=>{
 for(const level of [uparkot,pavagadh]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(uparkot.eras[0].conjecture,/later cannon/);
 assert.match(pavagadh.eras[1].conjecture,/archaeological park/);
});

test('Uparkot stair excavation appears only in the present-day interpretation',()=>{
 assert.equal(uparkot.terrain('1460').filter(op=>op.op==='dig').length,0);
 const digs=uparkot.terrain('today').filter(op=>op.op==='dig');
 assert.equal(digs.length,1);
 assert.ok(digs[0].poly.length>=4);
 assert.match(uparkot.pois.find(p=>p.id==='stepwell').text,/1460 scene omits/);
});
