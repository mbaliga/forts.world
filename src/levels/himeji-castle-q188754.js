import { makeT1 } from './t1.js';
import { TRACE } from './himeji-castle-q188754.trace.js';
const level = makeT1(TRACE, { id: 'himeji-castle-q188754' });
level.region = 'Hyogo · Japan';
level.type = 'Japanese hirayamajiro (shiro) · OSM-mapped gates, yagura and walls in three eras (T1) · schematic constructed layer (Daitenshu, yagura, gate flanks, plastered walls)';

// In the constructed eras the Daitenshu stone base covers the whole mapped outline, which is where the generic T1 spawn is put (the outline centre).
// Start the player instead on the mapped path nearest the keep that is clear of every schematic mass and wall.
const dseg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
const masses = (TRACE.constructed || []).filter((e) => e.kind === 'building');
const cwalls = (TRACE.constructed || []).filter((e) => e.kind === 'wall');
const clear = (p) => masses.every((m) => Math.hypot(p[0] - m.at[0], p[1] - m.at[1]) > Math.hypot(m.w, m.d) / 2 + 5) && cwalls.every((w) => w.path.every((q, i) => i === w.path.length - 1 || dseg(p, q, w.path[i + 1]) > 5));
let spawn = null, bd = Infinity;
for (const r of TRACE.elements.filter((e) => e.kind === 'road')) for (const p of r.path) { if (!clear(p)) continue; const d = Math.hypot(p[0] - 30, p[1] + 40); if (d < bd) { bd = d; spawn = p; } }
const build = level.build;
level.build = function (W) {
  if (!String(W.era).endsWith('~built') || !spawn) return build.call(this, W);
  const poi = W.poi.bind(W);
  W.poi = (p) => poi(p.id === 'about' ? { ...p, at: spawn } : p);
  build.call(this, W);
  W.poi = poi;
  W.spawn(spawn[0], spawn[1], W.ground(spawn[0], spawn[1]), -120);
};
export default level;
