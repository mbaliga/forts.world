import {test} from 'node:test';
import assert from 'node:assert/strict';
import catalogue from '../src/data/source-catalogue.js';
import {redFort,agraFort} from '../src/levels/mughal-capitals.js';
import {salimgarh,puranaQila} from '../src/levels/delhi-suri.js';
import gwalior from '../src/levels/gwalior.js';

const byId=new Map(catalogue.map(source=>[source.id,source]));

test('Red Fort scene identifies its mapped city and linked Salimgarh context while flagging its untraced plan',()=>{
 assert.ok(redFort.eras.every(era=>era.sources.includes('DEL-02')));
 assert.match(redFort.eras[0].conjecture,/not a traced plan/);
 assert.match(redFort.pois.find(poi=>poi.id==='palace').text,/Shahjahanabad/);
});

test('Salimgarh phases distinguish the historic island from later urban change',()=>{
 assert.match(salimgarh.eras[0].basis,/1546/);
 assert.match(salimgarh.eras.at(-1).basis,/railway/);
 assert.match(salimgarh.pois.find(poi=>poi.id==='redfort').text,/shared Delhi world map/);
});

test('Agra keeps Akbar-era form separate from later palace buildings and marks outline uncertainty',()=>{
 assert.ok(agraFort.eras[0].sources.includes('AGR-03'));
 assert.match(agraFort.eras[0].basis,/2.5 km/);
 assert.match(agraFort.eras[0].conjecture,/not fitted/);
 assert.match(agraFort.pois.find(poi=>poi.id==='palaces').text,/later than the c.1580 scene/);
});

test('Purana Qila records ASI-listed monuments and its inferred plan status',()=>{
 assert.ok(puranaQila.eras.every(era=>era.sources.includes('PQD-02')));
 assert.match(puranaQila.eras[0].basis,/Sher Mandal/);
 assert.match(puranaQila.eras[0].conjecture,/not a traced survey plan/);
});

test('Gwalior source list includes government site-plan and satellite evidence',()=>{
 const today=gwalior.eras.find(era=>era.id==='today');
 for(const id of ['GWA-25','GWA-26','GWA-27']) assert.ok(today.sources.includes(id));
 for(const id of ['GWA-25','GWA-26','GWA-27']) assert.ok(byId.has(id));
 assert.match(today.basis,/satellite map has not been registered/);
});
