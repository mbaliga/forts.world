import {test} from 'node:test';
import assert from 'node:assert/strict';
import {campaignBattle,battleLosses,fortEraAt} from '../src/game/campaign-battle.js';
import {LEVELS} from '../src/levels/index.js';
const node={playable:'murud-janjira'};
test('campaign can launch the actual Maratha assault only at its authored date',()=>{
 assert.equal(campaignBattle(LEVELS,node,1760,'maratha').scenario.playerSide,'maratha');
 for(const year of [1674,1733,1759,1761]) assert.equal(campaignBattle(LEVELS,node,year,'maratha'),null);
 assert.equal(campaignBattle(LEVELS,node,1760,'siddi'),null);
 assert.equal(campaignBattle(LEVELS,{playable:'underi'},1680,'maratha'),null);
});
test('losses use encounter strength and reject malformed or unfinished results',()=>{
 const pd={men:800,garrison:300};
 assert.deepEqual(battleLosses(pd,'won',.25,.5),{won:true,lossA:200,lossD:150});
 assert.deepEqual(battleLosses(pd,'lost',1,0),{won:false,lossA:800,lossD:0});
 for(const f of [-1,1.1,NaN,Infinity]) assert.throws(()=>battleLosses(pd,'won',f,0));
 assert.throws(()=>battleLosses(pd,null,0,0));
});
import {Campaign} from '../src/game/campaign.js';
test('campaign report is applied once and only to its matching encounter',()=>{
 const c=Object.create(Campaign.prototype);let resolved=0;
 const pending={token:'one',region:'AB',year:1760,unit:'army',node:'murud-janjira',men:800,garrison:300};
 c.region='AB';c.app={state:{campaignPending:pending}};c.state={year:1760,units:[{id:'army',men:800}],damage:{}};
 c.resolve=(u,n,won,a,d)=>{resolved++;assert.equal(a,200);assert.equal(d,150)};
 c.report('won',.25,.5,'wrong');assert.equal(resolved,0);
 c.report('won',.25,.5,'one');c.report('won',.25,.5,'one');assert.equal(resolved,1);
 assert.equal(c.app.state.campaignPending,null);
});
test('failed scene loading releases the campaign handoff',async()=>{
 const c=Object.create(Campaign.prototype);let reopened=false;
 c.region='AB';c.state={year:1760,garrisons:{'murud-janjira':300}};
 c.app={levels:LEVELS,state:{},ui:{toast(){}},load:async()=>{throw Error('renderer failed')}};
 c.save=()=>{};c.close=()=>{};c.open=()=>{reopened=true};
 await c.fight({id:'army',side:'maratha',men:800},{id:'murud-janjira',playable:'murud-janjira'});
 assert.equal(c.app.state.campaignPending,null);assert.equal(reopened,true);
});
import {NODES} from '../src/data/konkan.js';
test('fort grain enters local battle and returns on its matching result',async()=>{
 const node=NODES.find(n=>n.id==='murud-janjira'), original=node.stores; node.stores=900;
 try {
  const c=Object.create(Campaign.prototype), unit={id:'army',side:'maratha',men:800};
  c.region='AB';c.state={year:1760,garrisons:{[node.id]:300},units:[unit],damage:{}};
  c.app={levels:LEVELS,state:{},farm:{stores:{grain:10}},battle:{choose(){},showBrief(){}},ui:{toast(){}},load:async(id,era)=>{c.app.levelDef={id};c.app.era=era}};
  c.save=()=>{};c.close=()=>{};c.resolve=()=>{};
  await c.fight(unit,node);assert.equal(c.app.farm.stores.grain,900);
  c.app.farm.stores.grain=740;
  c.report('won',.1,.5,c.app.state.campaignPending.token);
  assert.equal(node.stores,740);
 } finally {node.stores=original;}
});

test('campaign exploration never selects an undated or future fort scene',()=>{
 const level=LEVELS.find(l=>l.id==='murud-janjira');
 assert.equal(fortEraAt(level,1733),null);assert.equal(fortEraAt(level,1760).id,'1760');
 assert.equal(fortEraAt(level,1800).id,'1774');assert.equal(fortEraAt(level,3000).id,'1933');
 assert.equal(fortEraAt(level,NaN),null);assert.equal(fortEraAt(null,1760),null);
});

test('campaign exploration does not carry an older garrison across ownership or player capture', async()=>{
 const {NODES_C}=await import('../src/data/south.js');
 const st=NODES_C.find(n=>n.id==='st-angelo');
 const level=LEVELS.find(l=>l.id==='st-angelo');
 assert.equal(fortEraAt(level,1600,st,'portuguese')?.id,'1510');
 assert.equal(fortEraAt(level,1662,st,'portuguese')?.id,'1510');
 assert.equal(fortEraAt(level,1663,st,'dutch'),null);
 assert.equal(fortEraAt(level,1600,st,'dutch'),null);
 assert.equal(fortEraAt(level,1504,st),null);
 const mirrored={phases:[{from:1500,to:1550,owner:'a'},{from:1550,to:1600,owner:'b'},{from:1600,owner:'a'}]};
 const one={eras:[{id:'1520'}]};
 assert.equal(fortEraAt(one,1620,mirrored,'a'),null);
});
