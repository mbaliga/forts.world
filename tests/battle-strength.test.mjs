import {test} from 'node:test';import assert from 'node:assert/strict';
import {allocate,representativeCounts,representedMen,casualtyFraction} from '../src/game/battle-strength.js';
test('campaign strengths are allocated exactly, including small forces',()=>{
 assert.deepEqual(allocate(101,[8,8,14]),[27,27,47]);
 assert.deepEqual(representativeCounts([{n:12},{n:12},{n:14}],3),[1,1,1]);
 assert.equal(representativeCounts([{n:12},{n:12},{n:14}],800).reduce((a,b)=>a+b,0),38);
 assert.throws(()=>allocate(-1,[1]));
});
test('actual spawned figures carry the whole force and no missing spawns count as casualties',()=>{
 const strengths=allocate(800,[8,4]);const companies=[{side:'own',max:8,strength:strengths[0],alive:8},{side:'own',max:4,strength:strengths[1],alive:4}];
 assert.equal(strengths.reduce((a,b)=>a+b,0),800);assert.equal(casualtyFraction(companies,'own',c=>c.alive),0);
 companies[0].alive=4;assert.equal(Math.round(casualtyFraction(companies,'own',c=>c.alive)*800),Math.round(strengths[0]/2));
 assert.equal(representedMen(companies[1],4),strengths[1]);
});
import {Battle} from '../src/game/battle.js';
test('actual battle start binds spawned companies to campaign strengths',()=>{
 const scenario={own:[{name:'A',n:4,kind:'guard-maratha',arms:'spear',at:[0,0]}],enemy:[{name:'B',n:4,kind:'guard-siddi',arms:'spear',at:[2,2]}]};
 const b=Object.create(Battle.prototype),agents=[];
 b.scn=scenario;b.flags={innerHTML:''};b.bar={hidden:true};b._form=()=>{};b.select=()=>{};
 b.app={world:{ladders:[],ground:()=>0},view:{},climate:{},state:{campaignPending:{men:3,garrison:7}},ui:{toast(){}},people:{agents,spawnAgent:()=>{const a={};agents.push(a);return a},despawn:()=>{}}};
 b.start();assert.equal(b.active,true);assert.equal(b.companies.find(c=>c.side==='own').members.length,3);
 assert.equal(b.companies.find(c=>c.side==='own').strength,3);assert.equal(b.companies.find(c=>c.side==='enemy').strength,7);
});
