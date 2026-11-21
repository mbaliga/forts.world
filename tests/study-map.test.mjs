import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {normalizeRows,parseCSV} from '../src/game/fort-import.js';
const data=JSON.parse(readFileSync(new URL('../src/data/smith-newton-2024.json',import.meta.url)));
test('study dataset preserves all named source rows and counts usable coordinates',()=>{
 assert.equal(data.records.length,3863);
 assert.equal(new Set(data.records.map(r=>r.id)).size,3863);
 assert.equal(data.records.filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lon)).length,3697);
 assert.equal(data.records.filter(r=>r.lat===null&&r.lon===null).length,166);
 const recovered=data.records.filter(r=>r.coordinate_note);
 assert.equal(recovered.length,1);assert.equal(recovered[0].name,'Behat Hill');
 assert.match(recovered[0].source_cells[11],/,/);assert.equal(recovered[0].lon,78.53267860332618);
 const malformed=data.records.find(r=>r.name==='Taragarh'&&r.source_cells[10]==='s26.44270312312864');
 assert.ok(malformed);assert.equal(malformed.lat,null);
 assert.deepEqual(new Set(data.records.map(r=>r.country)),new Set(['India','Pakistan','Bangladesh','Nepal']));
});
test('manual imports reject empty coordinates and preserve quoted CSV text',()=>{
 const rows=normalizeRows(parseCSV('name,country,latitude,longitude,notes\r\n"A, B",India,18.1,73.2,"two\nlines"\r\nUnlocated,India,,,\r\n'));
 assert.equal(rows.length,2);assert.equal(rows[0].name,'A, B');assert.equal(rows[0].lat,18.1);
 assert.equal(rows[1].lat,null);assert.equal(rows[1].lon,null);
});
