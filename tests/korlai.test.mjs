import {test} from 'node:test';
import assert from 'node:assert/strict';
import level,{wallPath,coast,light,elevation} from '../src/levels/korlai.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import {NODES} from '../src/data/konkan.js';

test('Korlai uses a mapped ridge wall and separate modern lighthouse coordinate',()=>{
 assert.deepEqual(level.coords,[18.5377,72.9074]);
 const node=NODES.find(n=>n.id==='korlai');
 assert.deepEqual([node.lat,node.lon],level.coords);
 assert.ok(wallPath.length>=25&&coast.length>100);
 const height=(Math.max(...wallPath.map(p=>p[1]))-Math.min(...wallPath.map(p=>p[1])))*3;
 assert.ok(height>700&&height<730);
 assert.equal(Buffer.from(elevation.data,'base64').length,13*15*2);
 assert.deepEqual(level.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(level,1610),null);
 const buildings=[];
 level.build(new Proxy({era:'today',ground:()=>0,building:o=>buildings.push(o)}, {get:(target,key)=>key in target?target[key]:(()=>{})}));
 const lighthouse=buildings.find(b=>b.name?.startsWith('1955 Korlai lighthouse'));
 assert.deepEqual(lighthouse.rect.slice(0,2),light);
 assert.equal(lighthouse.h*level.units.vScale,12.7);
});
