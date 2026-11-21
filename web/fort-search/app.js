// Fort Search: a static search box over the notable sites plus a Leaflet map with lazy-loaded 5-degree marker tiles.
// Data: data/search.json (notable), data/search-osm.json (named map-only markers, loaded on demand), data/tiles/*.json.
(() => {
'use strict';
const KN = ['', 'Castle', 'Fort', 'Ruin', 'Fortification'];
const COL = ['', '#b5472a', '#2f6f8f', '#7a7466', '#9a7b1c'];
const FL = { WHS: 1, HER: 2, OSM: 4, PROG: 8, WP: 16 };
const $ = (s) => document.querySelector(s);
const fold = (s) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ß/g, 'ss');
const toks = (s) => fold(s).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
let regionName = (cc) => cc;
try { const d = new Intl.DisplayNames(['en'], { type: 'region' }); regionName = (cc) => { try { return d.of(cc) || cc; } catch { return cc; } }; } catch {}

// ---- data (column arrays; map-only items are appended when asked for)
const D = { id: [], name: [], native: [], cc: [], lat: [], lon: [], kind: [], sl: [], flags: [], admin: [], prog: [], status: [] };
let nNotable = 0, TL = null;
const vocab = new Map();        // token -> number[] of item indexes
let vocabSorted = [];
const addIndex = (from, to) => {
  for (let i = from; i < to; i++) {
    const t = new Set([...toks(D.name[i]), ...toks(D.native[i]), ...toks(D.admin[i]), ...toks(regionName(D.cc[i])), fold(D.cc[i])]);
    for (const w of t) { const a = vocab.get(w); if (a) a.push(i); else vocab.set(w, [i]); }
  }
  vocabSorted = [...vocab.keys()].sort();
};
const getJSON = (u) => fetch(u).then((r) => { if (!r.ok) throw new Error(u + ' ' + r.status); return r.json(); });

// ---- state
const st = { kinds: new Set([1, 2, 3, 4]), prog: false, osm: false, sel: -1, hits: [], mapOnlyLoaded: false };

// ---- search
function lowerBound(a, x) { let lo = 0, hi = a.length; while (lo < hi) { const m = (lo + hi) >> 1; if (a[m] < x) lo = m + 1; else hi = m; } return lo; }
function postings(prefix) {
  const out = new Set(); let i = lowerBound(vocabSorted, prefix), n = 0;
  for (; i < vocabSorted.length && vocabSorted[i].startsWith(prefix) && n < 400; i++, n++) for (const x of vocab.get(vocabSorted[i])) out.add(x);
  return out;
}
const okItem = (i) => st.kinds.has(D.kind[i]) && (!st.prog || (D.flags[i] & FL.PROG)) && (st.osm || !(D.flags[i] & FL.OSM && !D.sl[i] && !(D.flags[i] & (FL.WHS | FL.HER | FL.PROG))));
function search(q, limit = 60) {
  const qt = toks(q); if (!qt.length || (qt.length === 1 && qt[0].length < 2)) return [];
  const sets = qt.map(postings).sort((a, b) => a.size - b.size);
  let cand = [...sets[0]].filter((i) => sets.every((s) => s.has(i)) && okItem(i));
  const fq = qt.join(' ');
  const sc = (i) => {
    const nm = toks(D.name[i]), fn = nm.join(' ');
    let s = Math.log2(1 + D.sl[i]) * 1.6 + (D.flags[i] & FL.WHS ? 5 : 0) + (D.flags[i] & FL.HER ? 1.5 : 0) + (D.flags[i] & FL.PROG ? 2 : 0);
    if (fn === fq) s += 14; else if (fn.startsWith(fq)) s += 8;
    if (qt.every((t) => nm.some((w) => w.startsWith(t)))) s += 5;
    return s;
  };
  cand = cand.map((i) => [i, sc(i)]).sort((a, b) => b[1] - a[1]).slice(0, limit).map((x) => x[0]);
  return cand;
}
function inView(limit = 60) {
  const b = map.getBounds(), out = [];
  for (let i = 0; i < D.id.length; i++) if (D.lat[i] >= b.getSouth() && D.lat[i] <= b.getNorth() && D.lon[i] >= b.getWest() && D.lon[i] <= b.getEast() && okItem(i) && !(D.flags[i] & FL.OSM && !D.sl[i])) out.push(i);
  return out.sort((a, b) => D.sl[b] - D.sl[a] || (D.flags[b] & 1) - (D.flags[a] & 1)).slice(0, limit);
}

// ---- results list
function render(hits, empty) {
  st.hits = hits; st.sel = -1;
  const ol = $('#results');
  if (!hits.length) { ol.innerHTML = `<li class="empty">${esc(empty)}</li>`; return; }
  ol.innerHTML = hits.map((i, n) => {
    const where = [D.admin[i], regionName(D.cc[i])].filter(Boolean).join(', ');
    const b = (D.flags[i] & FL.WHS ? '<span class="b">World Heritage</span>' : '') + (D.flags[i] & FL.PROG ? '<span class="b">Programme' + (D.status[i] ? ': ' + esc(D.status[i]) : '') + '</span>' : '');
    return `<li data-n="${n}"><i class="dot k${D.kind[i]}"></i><div><div class="n">${esc(D.name[i] || '(unnamed)')}${b}</div><div class="m">${KN[D.kind[i]]} · ${esc(where)}${D.sl[i] ? ' · ' + D.sl[i] + ' wiki' : ''}</div></div></li>`;
  }).join('');
}
function refresh() {
  const q = $('#q').value.trim();
  if (q) render(search(q), 'No match. Try fewer letters or another spelling.');
  else render(inView(), 'Nothing notable in view. Zoom out or pan.');
}
function pick(n) {
  const i = st.hits[n]; if (i == null) return;
  const z = Math.max(map.getZoom(), 13);
  map.setView([D.lat[i], D.lon[i]], z);
  L.popup().setLatLng([D.lat[i], D.lon[i]]).setContent(popupHtml(D.id[i], D.name[i], D.kind[i], D.flags[i], D.admin[i], D.cc[i], D.prog[i], D.status[i])).openOn(map);
  document.querySelectorAll('#results li').forEach((li) => li.classList.toggle('sel', +li.dataset.n === n));
}

// ---- popup
function links(id) {
  const [src, ref] = id.split(':'), out = [];
  if (src === 'wd') { out.push(`<a href="https://www.wikidata.org/wiki/${ref}" target="_blank" rel="noopener">Wikidata</a>`, `<a href="https://www.wikidata.org/wiki/Special:GoToLinkedPage/enwiki/${ref}" target="_blank" rel="noopener">Wikipedia</a>`); }
  if (src === 'osm') { const t = { n: 'node', w: 'way', r: 'relation' }[ref[0]]; out.push(`<a href="https://www.openstreetmap.org/${t}/${ref.slice(1)}" target="_blank" rel="noopener">OpenStreetMap</a>`); }
  return out.join(' · ');
}
function popupHtml(id, name, kind, flags, admin, cc, prog, status) {
  const tags = [flags & FL.WHS ? 'World Heritage' : '', flags & FL.HER ? 'Heritage designation' : '', flags & FL.OSM ? 'Mapped in OSM' : '', flags & FL.PROG ? 'Fort programme' + (status ? ' (' + status + ')' : '') : ''].filter(Boolean);
  const where = [admin, cc ? regionName(cc) : ''].filter(Boolean).join(', ');
  return `<b>${esc(name || '(unnamed)')}</b><div class="m">${KN[kind]}${where ? ' · ' + esc(where) : ''}</div>${tags.length ? `<div class="m">${tags.map(esc).join(' · ')}</div>` : ''}<div class="m">${links(id)}</div>`;
}

// ---- map
const map = L.map('map', { preferCanvas: true, worldCopyJump: true, minZoom: 2, zoomControl: true }).setView([22, 79], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
const layer = L.layerGroup().addTo(map);
const tileCache = new Map();
const tileKey = (la, lo, T) => Math.floor(la / T) * T + '_' + Math.floor(lo / T) * T;
async function tile(k) {
  if (tileCache.has(k)) return tileCache.get(k);
  const p = TL.tiles.includes(k) ? getJSON(`data/tiles/${k}.json`).catch(() => []) : Promise.resolve([]);
  tileCache.set(k, p); return p;
}
let drawTok = 0;
async function draw() {
  if (!TL) return;
  const tok = ++drawTok, z = map.getZoom(), b = map.getBounds().pad(0.05), pts = [];
  if (z >= 6) {
    const T = TL.tile, keys = new Set();
    for (let la = Math.floor(b.getSouth() / T) * T; la <= b.getNorth(); la += T) for (let lo = Math.floor(b.getWest() / T) * T; lo <= b.getEast(); lo += T) keys.add(la + '_' + lo);
    const got = await Promise.all([...keys].map(tile));
    if (tok !== drawTok) return;
    for (const t of got) for (const r of t) if (r[1] >= b.getSouth() && r[1] <= b.getNorth() && r[2] >= b.getWest() && r[2] <= b.getEast() && st.kinds.has(r[3]) && (!st.prog || r[4] & FL.PROG)) pts.push(r);
  } else {
    const min = z <= 3 ? 40 : z === 4 ? 25 : 12;
    for (let i = 0; i < nNotable; i++) if (D.sl[i] >= min && D.lat[i] >= b.getSouth() && D.lat[i] <= b.getNorth() && D.lon[i] >= b.getWest() && D.lon[i] <= b.getEast() && st.kinds.has(D.kind[i]) && (!st.prog || D.flags[i] & FL.PROG)) pts.push([D.id[i], D.lat[i], D.lon[i], D.kind[i], D.flags[i], D.name[i]]);
  }
  // when there are too many, keep the notable ones first, then thin the rest evenly
  const CAP = 4500;
  if (pts.length > CAP) { const a = pts.filter((r) => !(r[4] & FL.OSM) || r[4] & (FL.WHS | FL.HER | FL.PROG)), o = pts.filter((r) => !a.includes(r)); const keep = Math.max(0, CAP - a.length), step = Math.max(1, Math.ceil(o.length / Math.max(1, keep))); pts.length = 0; pts.push(...a.slice(0, CAP), ...o.filter((_, i) => i % step === 0).slice(0, keep)); }
  layer.clearLayers();
  const r0 = z < 6 ? 4 : z < 9 ? 4 : 6;
  for (const r of pts) {
    const prog = r[4] & FL.PROG, whs = r[4] & FL.WHS, osmOnly = (r[4] & FL.OSM) && !(r[4] & (FL.WP | FL.WHS | FL.HER));
    const m = L.circleMarker([r[1], r[2]], { radius: r0 + (whs ? 2 : 0) + (prog ? 1 : 0) - (osmOnly ? 1 : 0), color: prog ? '#111' : '#fff', weight: prog ? 2 : 1, fillColor: COL[r[3]], fillOpacity: osmOnly ? 0.6 : 0.95 });
    m.on('click', () => { const i = D.id.indexOf(r[0]); m.bindPopup(i >= 0 ? popupHtml(r[0], r[5], r[3], r[4], D.admin[i], D.cc[i], D.prog[i], D.status[i]) : popupHtml(r[0], r[5], r[3], r[4], '', '', '', '')).openPopup(); });
    layer.addLayer(m);
  }
  const hint = $('#count'); if (hint && TL.counts) hint.textContent = `${TL.counts.notable.toLocaleString()} notable sites · ${TL.counts.total.toLocaleString()} mapped in all${z < 6 ? ' · zoom in for every marker' : ''}`;
}
let tm = 0;
map.on('moveend', () => {
  draw(); history.replaceState(null, '', '#' + [map.getZoom(), map.getCenter().lat.toFixed(4), map.getCenter().lng.toFixed(4)].join('/'));
  clearTimeout(tm); tm = setTimeout(() => { if (!$('#q').value.trim()) refresh(); }, 250);
});

// ---- controls
$('#q').addEventListener('input', refresh);
$('#q').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = Math.min(st.hits.length - 1, Math.max(0, st.sel + (e.key === 'ArrowDown' ? 1 : -1))); st.sel = n; document.querySelectorAll('#results li').forEach((li) => li.classList.toggle('sel', +li.dataset.n === n)); document.querySelector('#results li.sel')?.scrollIntoView({ block: 'nearest' }); }
  else if (e.key === 'Enter') pick(st.sel >= 0 ? st.sel : 0);
});
$('#results').addEventListener('click', (e) => { const li = e.target.closest('li[data-n]'); if (li) pick(+li.dataset.n); });
$('#chips').addEventListener('click', async (e) => {
  const b = e.target.closest('button'); if (!b) return;
  const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
  if (b.dataset.k) { on ? st.kinds.add(+b.dataset.k) : st.kinds.delete(+b.dataset.k); }
  else if (b.dataset.f === 'prog') st.prog = on;
  else if (b.dataset.f === 'osm') { st.osm = on; if (on && !st.mapOnlyLoaded) { st.mapOnlyLoaded = true; b.disabled = true; try { const O = await getJSON('data/search-osm.json'), s = D.id.length; for (let i = 0; i < O.n; i++) { D.id.push(O.id[i]); D.name.push(O.name[i]); D.native.push(''); D.cc.push(O.cc[i]); D.lat.push(O.lat[i]); D.lon.push(O.lon[i]); D.kind.push(O.kind[i]); D.sl.push(0); D.flags.push(FL.OSM); D.admin.push(''); D.prog.push(''); D.status.push(''); } addIndex(s, D.id.length); } catch (err) { console.error(err); } b.disabled = false; } }
  refresh(); draw();
});

// ---- start
(async () => {
  try {
    const [S, T] = await Promise.all([getJSON('data/search.json'), getJSON('data/tiles.json')]);
    for (const k of Object.keys(D)) D[k] = S[k] || [];
    nNotable = S.n; TL = T;
    addIndex(0, nNotable);
    const h = location.hash.slice(1).split('/').map(Number);
    if (h.length === 3 && h.every(Number.isFinite)) map.setView([h[1], h[2]], h[0]);
    const q0 = new URLSearchParams(location.search).get('q'); if (q0) $('#q').value = q0;
    $('#count').textContent = `${nNotable.toLocaleString()} notable sites`;
    refresh(); draw();
  } catch (err) { $('#count').textContent = 'Could not load data (' + err.message + ')'; console.error(err); }
})();
window.__fortSearch = { search, D, map, st, draw };
})();
