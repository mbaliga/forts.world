import {test} from 'node:test';
import assert from 'node:assert/strict';
import jaisalmer from '../src/levels/jaisalmer.js';
import mehrangarh from '../src/levels/mehrangarh.js';
import {junagarh} from '../src/levels/rajasthan-cities.js';
import {taragarhBundi} from '../src/levels/taragarh-pair.js';
import {lohagarh} from '../src/levels/lohagarh.js';

test('Jaisalmer wells and drainage are sourced and visibly marked as approximate',()=>{
 const names=['Jaisaloo','Ranisar','Bulla','Harjaloo','Khuniwala','Ramdeora','Gosisar'];
 for(const name of names) assert.ok(jaisalmer.pois.some(p=>p.title.startsWith(`${name} well`)));
 assert.ok(jaisalmer.eras.every(e=>e.sources.includes('JAI-21')));
 assert.match(jaisalmer.pois.find(p=>p.id==='ghutnali').text,/three original ghutnallis/);
});

test('Jaisalmer bastion count conflict and photogrammetry lead remain explicit',()=>{
 const bastions=jaisalmer.pois.find(p=>p.id==='bastions');
 assert.match(bastions.title,/count disputed/);
 assert.match(bastions.text,/89/);
 assert.match(bastions.text,/99/);
 assert.ok(jaisalmer.eras.find(e=>e.id==='1650').sources.includes('JAI-22'));
 assert.ok(jaisalmer.eras.find(e=>e.id==='1650').sources.includes('JAI-23'));
 assert.ok(jaisalmer.eras.find(e=>e.id==='1650').sources.includes('JAI-24'));
 assert.match(jaisalmer.eras.find(e=>e.id==='1650').conjecture,/not a verified historical count/);
});

test('Akhai Pol uses documented gatehouse massing and preserves the dating conflict',()=>{
 const gate=jaisalmer.pois.find(p=>p.id==='akhai');
 assert.match(gate.text,/wooden doorway between two semicircular bastions/);
 assert.match(gate.text,/single-storey jharokha structure/);
 assert.match(gate.eraNote['1650'],/mid-17th century/);
 assert.match(gate.eraNote['1650'],/1722–1762/);
});

test('Mehrangarh maps current lake outlines without projecting them into older scenes',()=>{
 assert.ok(mehrangarh.eras.at(-1).sources.includes('MEH-19'));
 assert.ok(mehrangarh.eras.at(-1).sources.includes('MEH-20'));
 const current=mehrangarh.terrain('today').filter(o=>o.op==='dig');
 assert.ok(current.some(o=>o.poly.length>100));
 assert.ok(current.some(o=>o.poly.length>20&&o.poly.length<100));
 assert.equal(mehrangarh.terrain('1806').filter(o=>o.op==='dig').length,0);
});

test('Junagarh identifies the mapped perimeter discrepancy and leaves historical periods unavailable',()=>{
 assert.equal(junagarh.type,'Urban fort · mapped research reconstruction');
 assert.deepEqual(junagarh.eras.map(e=>e.id),['today']);
 assert.match(junagarh.eras[0].conjecture,/1,596 m/);
 assert.match(junagarh.eras[0].conjecture,/986–990 m/);
 assert.ok(junagarh.pois.some(p=>p.id==='suraj-pol'));
 assert.ok(junagarh.eras[0].sources.includes('JUN-B-06'));
 const walls=[],gates=[];
 junagarh.build(new Proxy({ground:()=>0,wall:o=>(walls.push(o),{}),gate:o=>gates.push(o)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.ok(walls[0].path.length>100);
 assert.ok(Math.abs(gates[0].at[0]-154.7)<1&&Math.abs(gates[0].at[1]-81.4)<1,'gate follows mapped shared entry node');
});

test('Bundi and Lohagarh use present mapped geometry with clear limits',()=>{
 assert.ok(taragarhBundi.pois.some(p=>p.id==='raniji-baori'));
 assert.ok(taragarhBundi.eras.at(-1).sources.includes('TBU-07'));
 assert.match(taragarhBundi.eras.at(-1).conjecture,/not surveyed plans/);
 const ops=lohagarh.terrain('today');
 assert.ok(ops.some(op=>op.op==='dig'));
 assert.equal(ops.filter(op=>op.op==='raise').length,1);
 assert.ok(lohagarh.pois.some(p=>p.id==='burjs'));
 assert.ok(lohagarh.eras.every(e=>e.sources.includes('LOH-02')));
});
