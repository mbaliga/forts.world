import {test} from 'node:test';
import assert from 'node:assert/strict';
import {explorerMatches} from '../src/game/explorer-filter.js';
const levels=[{id:'bidar',name:'Bidar Fort',region:'Bidar · Karnataka',type:'Citadel',native:{text:'बीदर'}},{id:'gooty',name:'Gooty',region:'Andhra Pradesh',type:'Hill'}];
test('fort search matches words across names, regions and scripts while preserving map numbers',()=>{
 assert.deepEqual(explorerMatches(levels,'').map(x=>x.index),[0,1]);
 assert.deepEqual(explorerMatches(levels,'  FORT karnataka ').map(x=>x.index),[0]);
 assert.deepEqual(explorerMatches(levels,'बीदर').map(x=>x.index),[0]);
 assert.deepEqual(explorerMatches(levels,'hill').map(x=>x.index),[1]);
 assert.deepEqual(explorerMatches(levels,'unknown'),[]);
});
