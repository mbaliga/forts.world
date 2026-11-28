import navigation from './launcher/navigation.cjs';
import { App } from './game/app.js';
import { initialFort } from './game/initial-fort.js';
import { parseDropIn, pickEra } from './game/dropin.js';
import CATALOG from '../build/catalog-lite.json';
import LAND from '../build/land.json';
import TRACE_INDEX from '../build/trace-index.json';
import { lazyLevels, resolveLazy } from './levels/lazy.js';

export function bootWith(BUNDLED, { lazy = true } = {}) {
  const LEVELS = lazy ? BUNDLED.concat(lazyLevels(TRACE_INDEX, BUNDLED.map((l) => l.id))) : BUNDLED;
  function boot(hot = {}) {
    const app = new App({ canvas: document.getElementById('view'), levels: LEVELS, catalog: CATALOG });
    const load = app.load.bind(app);
    app.load = async (id, era, o) => { await resolveLazy(app, id); return load(id, era, o); };
    navigation.installLoader(app);
    window.FortNavigation = navigation;
    app.landPath = LAND && LAND.d ? LAND : null;
    app.ui.buildIndex();
    const fort = initialFort(LEVELS, window.location.search, hot.fort, app.state.lastFort);
    const def = LEVELS.find((l) => l.id === fort);
    // a drop-in link (docs/game/drop-in.md): era id or year, mode, place and heading; unknown values change nothing
    const drop = parseDropIn(window.location.search);
    const dropEra = drop.era ? pickEra(def, drop.era) : null;
    const era = dropEra || (hot.era && def.eras.some((e) => e.id === hot.era) ? hot.era : (app.state.lastFort === fort && def.eras.some((e) => e.id === app.state.lastEra) ? app.state.lastEra : (def.defaultEra || def.eras[0].id)));
    app.load(fort, era).then(() => { if (!hot.fort) app.applyDropIn(drop); }).catch((e) => { console.error(e); app.ui.openIndex(); app.ui.toast('Could not open fort: ' + e.message); });
    try { window.claude?.hot?.snapshot?.(() => ({ fort: app.levelDef?.id, era: app.era })); } catch { /* not in a viewer */ }
    window.__app = app;
  }
  const hot = window.claude?.hot;
  if (hot?.ready) hot.ready(boot); else boot(hot?.data ?? {});
}
