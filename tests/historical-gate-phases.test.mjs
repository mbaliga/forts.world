import {test} from 'node:test';
import assert from 'node:assert/strict';
import {kalinjar} from '../src/levels/bundelkhand.js';
import {narwar} from '../src/levels/narwar-kundar.js';

function gateNames(level,era){
 const names=[];
 const world=new Proxy({era,wall:()=>({}),gate:o=>names.push(o.name)}, {get:(target,key)=>key in target?target[key]:(()=>{})});
 level.build(world);
 return names;
}

test('later documented Kalinjar and Narwar gate names do not leak into earlier scenes',()=>{
 for(const [fort,early,names] of [
  [kalinjar,'1185',['Alamgir','Ganesh','Chandi','Budh Budr','Hanuman','Lal','Bara']],
  [narwar,'1250',['Alamgiri','Saiyadonka','Piran Paur','Hawa Paur','Urwahi','Gaimukha','Dholya Pol']],
 ]){
  assert.equal(gateNames(fort,early).length,1,'early scene keeps one undated illustrative opening');
  const current=gateNames(fort,'today');
  for(const name of names) assert.ok(current.some(gate=>gate.includes(name)),`${name} is present in the documented present-day view`);
 }
});
