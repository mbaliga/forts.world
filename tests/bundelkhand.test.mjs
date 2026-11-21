import {test} from 'node:test';
import assert from 'node:assert/strict';
import {kalinjar,orchhaFort} from '../src/levels/bundelkhand.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bundelkhand prototypes retain period and evidence limits',()=>{
 for(const level of [kalinjar,orchhaFort]){
  assert.equal(fortEraAt(level,Number(level.eras[0].id)-1),null);
  assert.ok(level.eras.every(e=>e.sources.length&&e.conjecture));
  assert.ok(level.pois.every(p=>p.source));
 }
 assert.equal(fortEraAt(kalinjar,1201).id,'1185');
 assert.equal(fortEraAt(kalinjar,1202),null);
 assert.equal(fortEraAt(kalinjar,1579),null);
 assert.equal(fortEraAt(kalinjar,1581),null);
 assert.equal(fortEraAt(kalinjar,1812),null);
 assert.equal(fortEraAt(kalinjar,1580).id,'1580');
 assert.match(orchhaFort.eras[0].conjecture,/schematic/);
});
