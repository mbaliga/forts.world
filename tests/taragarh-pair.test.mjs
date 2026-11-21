import {test} from 'node:test';
import assert from 'node:assert/strict';
import {taragarhBundi,taragarhAjmer} from '../src/levels/taragarh-pair.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import sources from '../src/data/source-catalogue.js';

test('Bundi mapped context is separated from historic reconstructions',()=>{
 assert.notEqual(taragarhBundi.id,taragarhAjmer.id);
 assert.deepEqual(taragarhBundi.coords,[25.451,75.6375]);
 assert.deepEqual(taragarhBundi.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(taragarhBundi,1700),null);
 assert.ok(taragarhBundi.eras[0].sources.every(id=>sources.some(s=>s.id===id)));
 const present=[],tanks=[],walls=[];
 taragarhBundi.build(new Proxy({era:'today',ground:()=>0,zone:(poly,name)=>present.push({poly,name}),tank:o=>tanks.push(o),wall:o=>(walls.push(o),{})},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 for(const name of ['Jait Sagar','Nawal Sagar','Raniji ki Baori','Sukh Mahal','Garh Palace']) assert.ok(present.some(z=>z.name.includes(name)),name);
 assert.equal(walls.filter(w=>w.closed===false&&w.path.length>90).length,1);
 assert.ok(!walls.some(w=>w.closed===true),'generated oval fort wall is absent');
 const baori=tanks[0];assert.equal((baori.rim-baori.floor)*taragarhBundi.units.vScale,46);
 const baoriZone=present.find(z=>z.name.startsWith('Raniji ki Baori'));
 assert.deepEqual(baori.poly,baoriZone.poly);
 const terrain=taragarhBundi.terrain('today'),dem=terrain.find(o=>o.op==='grid').grid;
 assert.deepEqual([dem.nx,dem.ny],[11,11]);
 assert.equal(terrain.filter(o=>o.op==='dig').length,2);
 assert.ok(taragarhAjmer.eras.every(e=>e.sources.length&&e.conjecture));
});

test('Ajmer keeps the mapped wall separate from the ASI gateway point',()=>{
 assert.deepEqual(taragarhAjmer.coords,[26.443597,74.616686]);
 assert.deepEqual(taragarhAjmer.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(taragarhAjmer,1650),null);
 const walls=[],gates=[];
 taragarhAjmer.build(new Proxy({era:'today',ground:()=>0,wall:o=>(walls.push(o),{}),gate:o=>gates.push(o)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.ok(walls.some(w=>w.closed===false&&w.path.length===100));
 assert.ok(!walls.some(w=>w.closed===true),'the generated ellipse is removed');
 assert.deepEqual(gates[0].at,[0,0]);
 assert.ok(taragarhAjmer.eras[0].sources.every(id=>sources.some(s=>s.id===id)));
 const grid=taragarhAjmer.terrain('today').find(o=>o.op==='grid').grid;
 assert.deepEqual([grid.nx,grid.ny],[11,11]);
});
