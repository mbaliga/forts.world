import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mirjan,stAngelo} from '../src/levels/kanara-malabar.js';
import {NODES_C} from '../src/data/south.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Kanara and Malabar scenes link to their campaign sites without appearing before their dated interpretation',()=>{
 for(const level of [mirjan,stAngelo]){
  assert.equal(NODES_C.find(n=>n.id===level.id).playable,level.id);
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.match(stAngelo.eras[0].conjecture,/triangle/);
 assert.match(mirjan.eras[0].basis,/differ/);
});

test('St Angelo terrain has three straight sides in its schematic outline',()=>{
 const poly=stAngelo.terrain('today').find(op=>op.op==='raise').poly;
 const vertices=[poly[0],poly[30],poly[60]];
 for(let i=0;i<poly.length;i++){
  const a=vertices[Math.floor(i/30)],b=vertices[(Math.floor(i/30)+1)%3],p=poly[i];
  const cross=(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]);
  assert.ok(Math.abs(cross)<1e-6,`point ${i} deviates from triangle`);
 }
});
