import {test} from 'node:test';
import assert from 'node:assert/strict';
import level,{island,fortArea,pier,elevation} from '../src/levels/khanderi.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
import {NODES} from '../src/data/konkan.js';
import sources from '../src/data/source-catalogue.js';

test('Khanderi separates mapped island, fort area and documented but disputed lighthouse',()=>{
 assert.deepEqual(level.coords,[18.7043,72.8133]);
 const node=NODES.find(n=>n.id==='khanderi');
 assert.deepEqual([node.lat,node.lon],level.coords);
 assert.ok(island.length>50&&fortArea.length>20&&pier.length>=4);
 assert.deepEqual(level.eras.map(e=>e.id),['today']);
 assert.equal(fortEraAt(level,1679),null);
 assert.ok(level.eras[0].sources.every(id=>sources.filter(s=>s.id===id).length===1&&sources.find(s=>s.id===id).fort==='khanderi'));
 assert.equal(Buffer.from(elevation.data,'base64').length,13*17*2);
 const buildings=[];
 level.build(new Proxy({era:'today',ground:()=>0,building:o=>buildings.push(o)}, {get:(target,key)=>key in target?target[key]:(()=>{})}));
 const lighthouse=buildings.find(b=>b.name?.startsWith('Kanhoji Angre lighthouse'));
 assert.equal(lighthouse.poly.length,8);
 assert.equal(lighthouse.h*level.units.vScale,17);
 assert.match(level.pois.find(p=>p.id==='light').text,/30 m/);
 assert.match(level.pois.find(p=>p.id==='light').text,/33 m/);
});
