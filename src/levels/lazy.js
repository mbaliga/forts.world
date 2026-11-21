// Lazy auto-T1 levels (PIPELINE-DESIGN.md §5). The bundle carries only the trace index; each trace is loaded on demand
// as dist/traces/<id>.trace.js (a script that calls window.__IN_RTS_TRACE), which works from file:// as well as http.
import { makeT1 } from './t1.js';

// Explorer stubs: enough for the index list, map and URL routing; `lazy` marks them unresolved.
export function lazyLevels(index, bundledIds) {
  const taken = new Set(bundledIds);
  return (index?.sites || []).map((s) => {
    const id = taken.has(s.id) ? `${s.id}-t1` : s.id;
    return { id, traceId: s.id, lazy: true, name: s.name, native: { text: s.name, lang: 'en', script: 'latn' }, region: s.region || '', type: `${s.type} · auto T1 · ${s.status}`, coords: [s.lat, s.lon], tier: s.tier, poiCount: 0, eras: [{ id: 'today', year: 'Today', label: 'Mapped site · auto T1', short: 'Present', sources: [] }], defaultEra: 'today' };
  });
}

const pending = new Map();
export function loadTrace(id, base = 'traces/') {
  if (pending.has(id)) return pending.get(id);
  const p = new Promise((resolve, reject) => {
    const prev = window.__IN_RTS_TRACE;
    window.__IN_RTS_TRACE = (T) => { window.__IN_RTS_TRACE = prev; T && T.id === id ? resolve(T) : reject(new Error(`trace ${id}: unexpected payload`)); };
    const sc = document.createElement('script');
    sc.src = `${base}${id}.trace.js`; sc.async = true;
    sc.onerror = () => { window.__IN_RTS_TRACE = prev; reject(new Error(`trace ${id} not found at ${sc.src}`)); };
    document.head.appendChild(sc);
  });
  pending.set(id, p);
  p.catch(() => pending.delete(id));
  return p;
}

// Replace a stub in app.levels with the built level, keeping the stub's id.
export async function resolveLazy(app, id) {
  const i = app.levels.findIndex((l) => l.id === id);
  const stub = app.levels[i];
  if (!stub || !stub.lazy) return;
  const T = await loadTrace(stub.traceId);
  app.levels[i] = makeT1(T, { id: stub.id });
}
