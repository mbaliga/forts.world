import { makeT1 } from './t1.js';
import { TRACE } from './bourtange-fortress-q5470838.trace.js';
const level = makeT1(TRACE, { id: 'bourtange-fortress-q5470838' });
level.region = 'Westerwolde · Groningen · Netherlands';
level.type = 'Star fort and fortress village · OSM outline, buildings and five fitted bastion tips (T1, no plan read) · schematic constructed layer';
// The shared T1 builder draws schematic walls, gates, towers and buildings but not water. The moats of the constructed layer are schematic water polygons
// (level derived from the DEM, terrain dug by the T1 terrain pass), so this wrapper floods them in the `<era>~built` eras.
const baseBuild = level.build;
level.build = function (W) {
  baseBuild.call(this, W);
  const era = String(W.era);
  if (!era.endsWith('~built')) return;
  const base = era.replace('~built', '');
  for (const c of TRACE.constructed) if (c.kind === 'water' && (!c.eras || c.eras.includes(base))) W.water({ poly: c.poly, level: c.level, color: '#557d79' });
};
export default level;
