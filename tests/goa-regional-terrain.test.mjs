import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {FORTS} from '../src/data/forts.js';
const base=new URL('../src/goa/',import.meta.url);
const data=JSON.parse(fs.readFileSync(new URL('terrain.json',base)));
const extra=JSON.parse(fs.readFileSync(new URL('forts.json',base)));
test('regional terrain has complete elevation and land-cover grids',()=>{
 assert.equal(Buffer.from(data.elevation,'base64').length,data.nx*data.ny*2);
 const cover=Buffer.from(data.cover,'base64');assert.equal(cover.length,data.nx*data.ny);
 for(const code of [10,40,50,80])assert.ok(cover.includes(code),`missing land cover ${code}`);
});
test('Goa markers lie in the regional extent and include Reis Magos',()=>{
 const forts=[...FORTS.filter(f=>f.region==='Goa'),...extra];
 assert.ok(forts.some(f=>f.name==='Reis Magos'));
 for(const f of forts){assert.ok(f.lon>=data.bounds[0]&&f.lon<=data.bounds[2]&&f.lat>=data.bounds[1]&&f.lat<=data.bounds[3],`${f.name} outside terrain`);}
});
