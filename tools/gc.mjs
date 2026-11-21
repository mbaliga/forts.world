import { World } from '../src/core/world.js';
import '../src/core/arch.js'; import '../src/core/props.js'; import '../src/core/camp.js';
import L from '../src/levels/janjira.js';
const W = new World(L, { era: 'today' }); L.build(W);
for (const [k, B] of Object.entries(W.inst)) console.log(k, B.m.length);
