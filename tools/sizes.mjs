// measure the height and length of every figure and animal as built
import * as THREE from 'three';
import { KINDS, ANIMALS } from '../src/game/people.js';
import * as P from '../src/game/people.js';
const fig = P.__figureGeometry, ani = P.__animalGeometry;
const out = [];
for (const k of ['villager', 'guard-siddi', 'musketeer-siddi', 'woman-red', 'officer', 'tourist-a']) { const g = fig(KINDS[k], 0); g.computeBoundingBox(); const b = g.boundingBox; out.push([k, (b.max.y - b.min.y).toFixed(2), (b.max.z - b.min.z).toFixed(2)]); }
for (const k of ['dog', 'cat', 'goat', 'sheep', 'buffalo', 'chicken', 'rabbit', 'langur', 'macaque', 'peafowl']) { const g = ani(k, 0); g.computeBoundingBox(); const b = g.boundingBox; out.push([k, (b.max.y - b.min.y).toFixed(2), (b.max.z - b.min.z).toFixed(2)]); }
console.log(out.map((r) => r.join('\t')).join('\n'));
