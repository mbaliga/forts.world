import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bhatner} from '../src/levels/bhatner.js';
import {fortEraAt} from '../src/game/campaign-battle.js';
test('Bhatner identifies the 1805 transition and limits its reconstructed scene',()=>{
 assert.equal(fortEraAt(bhatner,1804),null);
 assert.ok(bhatner.eras.every(e=>e.sources.length&&e.conjecture));
 assert.ok(bhatner.pois.every(p=>p.source));
 assert.match(bhatner.eras[0].conjecture,/Ghaggar channel/);
});
