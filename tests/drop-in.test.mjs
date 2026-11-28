// The drop-in URL contract (docs/game/drop-in.md): parsing, geo to plan conversion, era by year, fort aliases.
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDropIn, toLocal, toGeo, geoOrigin, pickEra, eraYear, resolveFortId, headingToAz, azToHeading } from '../src/game/dropin.js';
import { initialFort } from '../src/game/initial-fort.js';

test('drop-in parameters parse, and unknown values fall back to null', () => {
  const d = parseDropIn('?fort=janjira-hand&mode=walk&at=18.2999,72.9644&heading=450&era=1774&view=model');
  assert.deepEqual(d, { fort: 'janjira-hand', mode: 'walk', at: [18.2999, 72.9644], heading: 90, era: '1774', view: 'model' });
  const bad = parseDropIn('?mode=swim&at=north&heading=east&view=photo');
  assert.equal(bad.mode, null); assert.equal(bad.at, null); assert.equal(bad.heading, null); assert.equal(bad.view, null);
  assert.equal(parseDropIn('?at=95,10').at, null);
  assert.equal(parseDropIn('').mode, null);
});

test('lat/lon converts to the plan frame of the trace origin, or the catalogue point for hand levels', () => {
  const traced = { trace: { origin: { lat: 26.2982278, lon: 73.0176463 } }, coords: [26.298228, 73.017646] };
  assert.equal(geoOrigin(traced).source, 'trace');
  const p = toLocal(traced, 26.2982278 + 0.001, 73.0176463 + 0.001);
  assert.ok(Math.abs(p.y - 111.19) < 0.1, `north ${p.y}`);
  assert.ok(Math.abs(p.x - 111.19 * Math.cos(26.2982278 * Math.PI / 180)) < 0.1, `east ${p.x}`);
  const back = toGeo(traced, p.x, p.y);
  assert.ok(Math.abs(back.lat - 26.2992278) < 1e-9 && Math.abs(back.lon - 73.0186463) < 1e-9);
  const hand = { coords: [18.2996, 72.9644], units: { planScale: 2 } };
  assert.equal(geoOrigin(hand).source, 'coords');
  const q = toLocal(hand, 18.2999, 72.9644);
  assert.ok(Math.abs(q.y - 33.36 / 2) < 0.05 && Math.abs(q.x) < 1e-9, 'plan units follow planScale');
  assert.equal(toLocal({}, 1, 2), null);
});

test('era: an id as given, else the era nearest a year', () => {
  const def = { eras: [{ id: '1760', year: 'c. 1760' }, { id: '1774', year: '1774' }, { id: '1933', year: '1933' }, { id: 'today', year: 'Today' }] };
  assert.equal(pickEra(def, '1774'), '1774');
  assert.equal(pickEra(def, '1700'), '1760');
  assert.equal(pickEra(def, '1900'), '1933');
  assert.equal(pickEra(def, '2010', 2026), 'today');
  assert.equal(pickEra(def, 'today'), 'today');
  assert.equal(pickEra(def, 'bronze age'), null);
  assert.equal(eraYear({ year: '300 BCE' }), -300);
  assert.equal(eraYear({ year: 'Today' }, 2026), 2026);
});

test('?fort= takes a level id, its file name, or an id ending with it', () => {
  const levels = [{ id: 'murud-janjira-hand', file: 'janjira-hand' }, { id: 'mehrangarh', file: 'mehrangarh' }];
  assert.equal(resolveFortId(levels, 'janjira-hand'), 'murud-janjira-hand');
  assert.equal(resolveFortId(levels, 'mehrangarh'), 'mehrangarh');
  assert.equal(resolveFortId(levels, 'nowhere'), null);
  assert.equal(initialFort(levels, '?fort=janjira-hand', null, null), 'murud-janjira-hand');
  assert.equal(initialFort(levels, '?fort=nowhere', null, 'mehrangarh'), 'mehrangarh');
});

test('compass heading and the iso camera angle convert both ways', () => {
  for (const h of [0, 45, 90, 180, 270, 359]) assert.ok(Math.abs(azToHeading(headingToAz(h)) - h) < 1e-9);
  // heading north: the camera's forward (-cos az, -sin az) points to +y
  const az = headingToAz(0) * Math.PI / 180;
  assert.ok(Math.abs(-Math.cos(az)) < 1e-9 && Math.abs(-Math.sin(az) - 1) < 1e-9);
});
