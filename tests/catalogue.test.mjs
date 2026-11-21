import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {FORTS} from '../src/data/forts.js';
import INVENTORY from '../src/data/konkan-inventory.js';
import {LEVELS} from '../src/levels/index.js';
test('the preserved 130 sites remain in the expanded catalogue',()=>{
 const old=JSON.parse(readFileSync(new URL('../content/historical-world/legacy-catalogue.json',import.meta.url)));
 const rows=Array.isArray(old)?old:old.entries;
 assert.equal(rows.length,130);
 const ids=new Set(FORTS.map(f=>f.id)); assert.equal(ids.size,FORTS.length);
 for(const f of rows) assert.ok(ids.has(f.id),f.id);
});
test('playable flags match 115 scenes and 258 periods',()=>{
 assert.equal(LEVELS.length,115);assert.equal(LEVELS.reduce((n,l)=>n+l.eras.length,0),258);
 assert.deepEqual(new Set(FORTS.filter(f=>f.playable).map(f=>f.id)),new Set(LEVELS.map(l=>l.id)));
});
test('site boundaries and evidence markers fit inside generated terrain bounds',()=>{
 for(const level of LEVELS){
  const [minX,minY,maxX,maxY]=level.bounds;
  const points=[...(level.siteBoundary||[]),...(level.pois||[]).map(p=>p.at).filter(Array.isArray)];
  for(const [x,y] of points){
   assert.ok(x>=minX&&x<=maxX&&y>=minY&&y<=maxY,`${level.id} context point ${x},${y} falls outside ${level.bounds}`);
  }
 }
});
test('district inventory candidates do not pretend to be mapped or playable',()=>{
 assert.equal(INVENTORY.length,25);
 for(const f of INVENTORY){assert.equal(f.lat,null);assert.equal(f.lon,null);assert.equal(f.playable,false);assert.equal(f.ev.position,'unknown');assert.equal(f.ev.phases,'unknown');assert.ok(f.source.startsWith('https://ratnagiri.nic.in/'));}
});

test('Karnataka inventory matches existing IDs without changing evidence grades',async()=>{
 const {default:rows}=await import('../src/data/karnataka-inventory.js');
 assert.equal(rows.length,20);
 for(const row of rows){const matches=FORTS.filter(f=>f.id===row.id);assert.equal(matches.length,1,row.id);assert.ok(row.source_rows.length);assert.equal(row.ev.position,'unknown');}
 assert.equal(FORTS.find(f=>f.id==='bidar').ev.position,'inferred');
 assert.ok(FORTS.find(f=>f.id==='bidar').inventory_references.length);
});

test('Kolaba gazetteer inventory keeps all 37 candidates and distinct ambiguous names',async()=>{
 const {default:rows}=await import('../src/data/kolaba-inventory.js');
 assert.equal(rows.length,37);assert.equal(rows.filter(r=>r.gazetteer_group==='coastal').length,9);
 for(const row of rows){assert.equal(FORTS.filter(f=>f.id===row.id).length,1,row.id);assert.equal(row.ev.position,'unknown');assert.equal(row.playable,false);}
 assert.notEqual(FORTS.find(f=>f.id==='vishalgad-karjat').id,FORTS.find(f=>f.id==='vishramgad').id);
 assert.ok(FORTS.find(f=>f.id==='raigad').inventory_references.some(r=>r.url.includes('places_Forts')));
});

test('Maharashtra inventory retains provenance and keeps similarly named forts distinct',async()=>{
 const {default:rows}=await import('../src/data/maharashtra-asi-inventory.js');
 assert.equal(rows.length,46);
 for(const row of rows){assert.equal(FORTS.filter(f=>f.id===row.id).length,1,row.id);assert.equal(row.ev.position,'unknown');assert.ok(row.source_rows.length);}
 assert.notEqual(FORTS.find(f=>f.id==='pratapgrah-bhandara').id,FORTS.find(f=>f.id==='pratapgad').id);
 assert.ok(FORTS.find(f=>f.id==='padmadurg').inventory_references.some(r=>r.aliases.includes('Kasa')));
});

test('Palghar source names preserve regional ambiguity and match existing forts',async()=>{
 const {default:rows}=await import('../src/data/palghar-inventory.js');
 assert.equal(rows.length,10);
 for(const row of rows){assert.equal(FORTS.filter(f=>f.id===row.id).length,1);assert.equal(row.ev.position,'unknown');}
 assert.ok(FORTS.find(f=>f.id==='arnala').inventory_references.some(r=>r.aliases.includes('Janjire Arnala')));
});
