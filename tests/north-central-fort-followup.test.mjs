import {test} from 'node:test';
import assert from 'node:assert/strict';
import catalogue from '../src/data/source-catalogue.js';
import {tughlaqabad,fatehpurSikri} from '../src/levels/imperial-cities.js';
import {allahabadFort,lahoreFort} from '../src/levels/mughal-river-cities.js';
import {jhansiFortScene} from '../src/levels/bundelkhand-khandesh.js';

const ids=new Set(catalogue.map(s=>s.id));

test('Tughlaqabad scene traces the official site-plan outline and separates its named areas',()=>{
 assert.ok(tughlaqabad.eras.every(e=>e.sources.includes('TUG-02')));
 assert.match(tughlaqabad.eras[0].basis,/outer wall.*eastern citadel.*southern palace area.*northern city/);
 assert.match(tughlaqabad.eras[0].conjecture,/manually digitized.*not georeferenced/);
 assert.ok(tughlaqabad.outline.length>=40,'the outer boundary follows the published plan rather than an ellipse');
 const planCircuit=tughlaqabad.outline.reduce((sum,p,i)=>{const q=tughlaqabad.outline[(i+1)%tughlaqabad.outline.length];return sum+Math.hypot(q[0]-p[0],q[1]-p[1]);},0)*tughlaqabad.units.planScale;
 assert.ok(Math.abs(planCircuit-6500)<1,'the outline uses the stated 6.5 km circuit pending map-scale reconciliation');
 assert.deepEqual(tughlaqabad.wallPath,tughlaqabad.outline,'the wall uses the actual traced polygon instead of a radialized approximation');
 const wallPaths=[];
 const world=new Proxy({era:'1325',ground:()=>0,wall:(options)=>{wallPaths.push(options.path);return {}; }},{get:(target,key)=>key in target?target[key]:(()=>{})});
 tughlaqabad.build(world);
 assert.deepEqual(wallPaths[0],tughlaqabad.wallPath,'the generated outer wall preserves every traced vertex');
 assert.ok(tughlaqabad.spawnInside,'the playable start is connected to the city interior');
 assert.equal(tughlaqabad.pois.find(p=>p.id==='dynasty').title,'Eastern citadel approach');
});

test('Fatehpur Sikri preserves UNESCO city plan facts without calling the enclosure a city model',()=>{
 assert.ok(fatehpurSikri.eras.every(e=>e.sources.includes('FAT-03')));
 assert.match(fatehpurSikri.eras[0].basis,/six-kilometre wall.*nine gates/);
 assert.match(fatehpurSikri.eras[0].conjecture,/not been traced/);
});

test('Allahabad scene identifies Sangam access context and its geographic limits',()=>{
 assert.ok(allahabadFort.eras[0].sources.includes('ALH-02'));
 assert.match(allahabadFort.eras[0].basis,/eastern ramparts/);
 assert.match(allahabadFort.eras.at(-1).conjecture,/restricted/);
});

test('Lahore source map supports named quadrangles and keeps the model explicitly schematic',()=>{
 assert.ok(lahoreFort.eras.every(e=>e.sources.includes('LAH-02')));
 assert.match(lahoreFort.eras.at(-1).basis,/200 m scale/);
 assert.match(lahoreFort.eras.at(-1).conjecture,/not a current image/);
 for(const id of ['LAH-02','TUG-02','FAT-03','ALH-02']) assert.ok(ids.has(id));
});

test('Jhansi scene names official gates and preserves disagreement in construction dating',()=>{
 assert.match(jhansiFortScene.eras[0].conjecture,/1606–27.*1613/);
 assert.match(jhansiFortScene.pois.find(p=>p.id==='gates').text,/Khandero.*Orchha/);
 assert.match(jhansiFortScene.eras.at(-1).conjecture,/not modeled/);
});
