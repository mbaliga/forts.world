import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mandu,raisen} from '../src/levels/malwa-forts.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Malwa sites retain sourced periods and reconstruction limits',()=>{
 for(const level of [mandu,raisen]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.deepEqual(mandu.eras.map(e=>e.id),['1420','1454','1480','1510','1540','today']);
 assert.match(mandu.eras.find(e=>e.id==='1540').basis,/1534–1561/);
 assert.match(mandu.eras.find(e=>e.id==='1510').basis,/1500–1510/);
 assert.match(mandu.pois.find(p=>p.id==='rewa').title,/early core and later additions/);
 assert.match(mandu.pois.find(p=>p.id==='rewa').text,/ASI\/NMA dates the palace.*additions/);
 assert.ok(mandu.eras[0].sources.includes('MAN-06'));
 assert.ok(mandu.eras.every(e=>e.sources.includes('MAN-07')));
 assert.match(mandu.pois.find(p=>p.id==='north-approach').text,/Alamgiri and Bhangi gates to Delhi Gate/);
 assert.match(mandu.pois.find(p=>p.id==='royal-enclave').text,/Munj and Kapur tanks/);
 assert.match(mandu.eras[0].conjecture,/Locations and footprints remain schematic/);
 assert.match(mandu.eras.at(-1).basis,/45 km parapet and 12 gates/);
 const baoliZones=[];
 mandu.build(new Proxy({era:'today',ground:()=>0,zone:(poly,name)=>baoliZones.push(name)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.ok(baoliZones.some(name=>name.includes('Champa Baodi')),'the NMA-listed baoli inventory appears in the present scene');
 assert.ok(baoliZones.some(name=>name.includes('present village and roadside market corridor')));
 const historicalZones=[];
 mandu.build(new Proxy({era:'1510',ground:()=>0,zone:(poly,name)=>historicalZones.push(name)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.ok(historicalZones.some(name=>name.includes('housing/market quarter')),'the earlier campaign represents Mandu as a lived-in fortified city');
 assert.ok(!historicalZones.some(name=>name.includes('Champa Baodi')),'undated baoli markers are not back-projected into earlier periods');
});

test('Mandu exposes all 37 ASI/NMA published site coordinates as bounded evidence markers',()=>{
 assert.equal(mandu.stride,3,'the city-scale map retains terrain detail');
 assert.equal(mandu.navCell,2,'city-wide navigation remains less costly than local-battle grids');
 assert.equal(mandu.navStep,2.5,'the strategic grid tolerates height changes across its broader cells');
 const sites=mandu.pois.filter(p=>p.id.startsWith('asi-'));
 assert.equal(sites.length,37);
 for(const site of sites){
  assert.equal(site.positionEvidence,'documented',site.id);
  assert.match(site.text,/location only/,site.id);
  const [minX,minY,maxX,maxY]=mandu.bounds;
  assert.ok(site.at[0]>=minX&&site.at[0]<=maxX&&site.at[1]>=minY&&site.at[1]<=maxY,site.id);
 }
 assert.ok(sites.some(p=>p.id==='asi-hindola-mahal'));
 assert.ok(sites.some(p=>p.id==='asi-jahaj-mahal'));
 assert.ok(sites.some(p=>p.id==='asi-delhi-gate'));
});

test('Mandu site-registered blockouts render at their published local points',()=>{
 const rendered=[];
 const world=new Proxy({era:'1510',ground:()=>0,building:(item)=>rendered.push(item)},{get:(target,key)=>key in target?target[key]:(()=>{})});
 mandu.build(world);
 for(const id of ['dilawar-khan-mosque','hindola-mahal','jahaj-mahal','hoshang-tomb','jama-masjid','ashrafi-mahal']){
  const site=mandu.pois.find(p=>p.id===`asi-${id}`);
  const matches=rendered.filter(item=>item.name?.includes(id==='dilawar-khan-mosque'?'Dilawar Khan':id==='hindola-mahal'?'Hindola Mahal':id==='jahaj-mahal'?'Jahaz Mahal':id==='hoshang-tomb'?'Hoshang Shah':id==='jama-masjid'?'Jami Masjid':'Ashrafi Mahal'));
  assert.ok(matches.length,`${id} blockout is present in the playable scene`);
  assert.ok(matches.some(item=>Math.hypot(item.rect[0]-site.at[0],item.rect[1]-site.at[1])<5),`${id} blockout is anchored to its documented point, with only the Hindola relative sub-part offset`);
 }
});

test('Mandu water placeholders use available official site points and do not duplicate Kapur',()=>{
 const zones=[],tanks=[];
 mandu.build(new Proxy({era:'today',ground:()=>0,zone:(poly,name)=>zones.push({poly,name}),tank:o=>tanks.push(o)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 for(const [id,label] of [['kapoor-talao','Kapur Talao'],['champa-baodi','Champa Baodi'],['ujali-baodi','Ujali Baodi'],['andheri-baodi','Andheri Baodi'],['ancient-hindu-baodi','Ancient Hindu Baodi']]){
  const site=mandu.pois.find(p=>p.id===`asi-${id}`),matches=zones.filter(z=>z.name?.startsWith(label));
  assert.equal(matches.length,1,`${label} appears once`);
  const center=matches[0].poly.reduce((sum,[x,y])=>[sum[0]+x/matches[0].poly.length,sum[1]+y/matches[0].poly.length],[0,0]);
  assert.ok(Math.hypot(center[0]-site.at[0],center[1]-site.at[1])<1e-6,`${label} is centred on the published site point`);
 }
 assert.equal(tanks.length,9);
 const historic=[];
 mandu.build(new Proxy({era:'1510',ground:()=>0,tank:o=>historic.push(o)},{get:(target,key)=>key in target?target[key]:(()=>{})}));
 assert.equal(historic.length,0,'undated placeholder water geometries are not presented as historical reconstructions');
});
