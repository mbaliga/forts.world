import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS } from '../src/levels/index.js';
import { FORTS } from '../src/data/forts.js';
import sources from '../src/data/source-catalogue.js';

const expected = {
  salher: { coords: [20.7225, 73.9425], area: 335.96, id: 'MMI-01' },
  raigad: { coords: [18.236111, 73.444444], area: 340.77, id: 'MMI-02' },
  rajgad: { coords: [18.246111, 73.6825], area: 269.26, id: 'MMI-03' },
  pratapgad: { coords: [17.935833, 73.578611], area: 79.30, id: 'MMI-04' },
  gingee: { coords: [12.250556, 79.401389], area: 225.49, id: 'MMI-05' },
};
const levels = new Map(LEVELS.map((level) => [level.id, level]));
const forts = new Map(FORTS.map((fort) => [fort.id, fort]));

test('five Maratha landscape scene anchors match UNESCO component reference coordinates', () => {
  for (const [id, expectedSite] of Object.entries(expected)) {
    const level = levels.get(id);
    assert.ok(level, `${id} has a playable scene`);
    assert.deepEqual(level.coords, expectedSite.coords, `${id} uses the UNESCO component reference point`);
    assert.equal(level.siteReference.propertyAreaHa, expectedSite.area);
    assert.match(level.siteReference.kind, /not a boundary vertex or fort-wall centre/);
    assert.deepEqual(level.siteReference.previousCataloguePoint, [forts.get(id).lat, forts.get(id).lon]);
    assert.ok(sources.some((source) => source.id === expectedSite.id && source.fort === id));
  }
});

test('Rajgad survey quantities remain separate from the UNESCO property extent', () => {
  const { siteReference } = levels.get('rajgad');
  assert.equal(siteReference.propertyAreaHa, 269.26);
  assert.equal(siteReference.researchSurvey.wallPerimeterM, 8032);
  assert.equal(siteReference.researchSurvey.mappedAreaAcres, 87.5);
  assert.match(siteReference.researchSurvey.controlPointCaveat, /not interchangeable/);
  assert.ok(sources.some((source) => source.id === 'RAG-UAV-01' && source.fort === 'rajgad'));
});
