import * as THREE from 'three';
import { World } from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import '../src/core/camp.js';
import { buildScene } from '../src/game/scene.js';
import L from '../src/levels/janjira.js';
for (const era of process.argv.slice(2)) {
  const W = new World(L, { era }); L.build(W); W.finish();
  const v = buildScene(W); const rows = [];
  v.group.traverse((o) => { if (!o.geometry || !o.geometry.attributes.position) return; const t = (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3 * (o.isInstancedMesh ? o.count : 1); rows.push([o.name || o.type, Math.round(t), o.isInstancedMesh ? o.count : '']); });
  rows.sort((a, b) => b[1] - a[1]);
  console.log(era, 'total', rows.reduce((a, r) => a + r[1], 0)); console.log(rows.slice(0, 24).map((r) => r.join(' ')).join('\n'));
}
