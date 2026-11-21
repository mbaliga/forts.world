import {test} from 'node:test';
import assert from 'node:assert/strict';
import {suggestMatches} from '../src/game/site-matches.js';
test('possible matches preserve ambiguity and exclude distant or different-country sites',()=>{
 const curated=[{id:'fort-a',name:'Kolaba Fort',country:'India',lat:18.64,lon:72.87},{id:'unlocated',name:'Kasa',country:'India',lat:null,lon:null}];
 const study=[{id:'near',name:'Kolaba',country:'India',lat:18.65,lon:72.87},{id:'far',name:'Kolaba',country:'India',lat:25,lon:75},{id:'foreign',name:'Kolaba',country:'Nepal',lat:18.64,lon:72.87},{id:'one',name:'Kasa',country:'India',lat:18,lon:72},{id:'two',name:'Kasa',country:'India',lat:19,lon:73}];
 const matches=suggestMatches(curated,study);
 assert.deepEqual(matches.get('fort-a').map(x=>x.record.id),['near']);
 assert.ok(matches.get('fort-a')[0].km<2);
 assert.deepEqual(matches.get('unlocated').map(x=>x.record.id),['one','two']);
 assert.equal(matches.get('unlocated')[0].km,null);
 assert.equal(matches.get('near')[0].record.id,'fort-a');
 assert.equal(matches.has('foreign'),false);
});
