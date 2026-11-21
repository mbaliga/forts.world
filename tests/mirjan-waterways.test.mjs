import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mirjan} from '../src/levels/kanara-malabar.js';
import sources from '../src/data/source-catalogue.js';

test('Mirjan identifies mapped waterways as centre lines with unknown banks',()=>{
 const lines=mirjan.terrain('today').filter(o=>o.op==='paint'&&o.paint==='water');
 assert.equal(lines.length,2);
 assert.ok(lines.every(o=>o.w===2&&o.path.length>4));
 assert.ok(lines[0].path.some(([x,y])=>x < -180&&y<0));
 assert.ok(lines[1].path.some(([x,y])=>x > 100&&y<0));
 assert.match(mirjan.pois.find(p=>p.id==='waterway').text,/not a surveyed riverbank/);
 assert.ok(mirjan.eras[0].sources.includes('MIR-09'));
 assert.ok(sources.some(s=>s.id==='MIR-09'));
});
