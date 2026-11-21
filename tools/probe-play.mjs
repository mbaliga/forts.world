import { World } from '../src/core/world.js';
import '../src/core/arch.js'; import '../src/core/props.js'; import '../src/core/camp.js';
import L from '../src/levels/janjira.js';
for (const era of ['1760', '1774', '1933', 'today']) {
  const W = new World(L, { era }); L.build(W); W.finish();
  console.log(era, 'guns', W.guns.length, 'garrisons', W.garrisons.length, 'pens', W.pens.map((p) => p.name).join('/'), 'zones', W.zones.filter((z) => /Training|garden|Plantain|Akhada/.test(z.name)).map((z) => z.name).join('/'), 'reserve', JSON.stringify(W.reserve));
}
