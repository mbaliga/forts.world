import {test} from 'node:test';
import assert from 'node:assert/strict';
import chittorgarh from '../src/levels/chittorgarh.js';

test('Chittorgarh scene spans the full research-outline length and labels unresolved geometry',()=>{
  const [minX,minY,maxX,maxY]=chittorgarh.bounds;
  assert.ok(maxY-minY >= 1100, 'scene bounds should include the approx. 5.6 km north-south plateau at the 5.5 m plan scale');
  assert.ok(maxX-minX >= 400, 'scene bounds should include both plateau rims and the scarp apron');
  assert.ok(chittorgarh.eras.every(era=>era.sources.length && era.conjecture));
  assert.match(chittorgarh.eras.find(era=>era.id==='today').conjecture,/Georeference the official property plan/);
});
