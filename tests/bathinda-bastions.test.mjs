import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bathinda} from '../src/levels/punjab-jammu-forts.js';

test('Bathinda blockout preserves 32 smaller bastions and four larger corners',()=>{
 const calls=[];
 const world=new Proxy({era:'1835',ground:()=>0,wall:()=>({}),bastion:spec=>calls.push(spec)},{get:(target,key)=>key in target?target[key]:(()=>{})});
 bathinda.build(world);
 assert.equal(calls.length,36);
 assert.equal(calls.filter(x=>x.r===1.7).length,32);
 assert.equal(calls.filter(x=>x.r===4.2).length,4);
});
