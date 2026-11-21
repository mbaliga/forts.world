import {test} from 'node:test';
import assert from 'node:assert/strict';
import {reisMagos} from '../src/levels/goa-estuaries.js';
import {warangal} from '../src/levels/kakatiya.js';
import {World} from '../src/core/world.js';
test('generated places separate explicit historical evidence from inferred locations',()=>{
 const graded=reisMagos.pois.find(p=>p.id==='upper');
 assert.equal(graded.evidence,'documented');
 assert.equal(graded.positionEvidence,'inferred');
 const unknown=warangal.pois.find(p=>p.id==='gateways');
 assert.ok(unknown.source);
 assert.equal(unknown.evidence,'unknown');
 assert.equal(unknown.positionEvidence,'inferred');
 const fake={pois:[],plan:{labels:[]},ground:()=>0};
 const actual=World.prototype.poi.call(fake,graded);
 assert.equal(actual.evidence,'documented');assert.equal(actual.positionEvidence,'inferred');
});
