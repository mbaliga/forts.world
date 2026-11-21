import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bidar,gulbarga} from '../src/levels/bahmani.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bahmani scenes retain dated interpretations and source caveats',()=>{
 for(const level of [bidar,gulbarga]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(gulbarga.pois.find(p=>p.id==='walls').text,/30-foot moat/);
 assert.equal(bidar.additionalWalls.length,1);
 assert.equal(bidar.additionalWalls[0].path.length,5,'Bidar city circuit reflects the documented pentagonal plan');
 assert.equal(gulbarga.additionalWalls.length,1,'Gulbarga double fortification remains distinct');
 assert.equal(gulbarga.water,null,'Gulbarga must not render the prior invented river setting');
});
