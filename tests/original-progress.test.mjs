import {test} from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {LEVELS} from '../src/levels/index.js';
import {NODES} from '../src/data/konkan.js';
const baseline=JSON.parse(readFileSync(new URL('../src/data/original-r22-ids.json',import.meta.url)));
test('the original R22 catalogue remains a stable measurable reconstruction backlog',()=>{
 assert.equal(baseline.length,138);assert.equal(new Set(baseline).size,138);
 assert.equal(LEVELS.filter(l=>baseline.includes(l.id)).length,113);
 for(const id of ['torna','sinhagad','purandar']){const level=LEVELS.find(l=>l.id===id);assert.ok(level);assert.equal(NODES.find(n=>n.id===id).playable,id);assert.ok(level.eras.every(e=>e.conjecture&&e.sources.length));}
});
