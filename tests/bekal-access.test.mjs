import {test} from 'node:test';
import assert from 'node:assert/strict';
import {World} from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';
import {bekal} from '../src/levels/malabar-approaches.js';

test('Bekal observation platform is reachable from the courtyard', () => {
  const world = new World(bekal, {era:'today'});
  bekal.build(world); world.finish();
  const nav = world.nav;
  const start = nav.nearest(0,90,28,3,2);
  const top = nav.nearest(66,27,34,3,1);
  assert.ok(start >= 0 && top >= 0, 'courtyard and tower should have navigation nodes');
  assert.ok(nav.reachable(start)[top], 'tower platform should connect to the courtyard');
});
