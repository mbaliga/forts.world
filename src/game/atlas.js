// The atlas: the subcontinent, Asia and the world, through time. Empires and states at 27 dates from 500 BCE to 2010
// (historical-basemaps, GPL-3.0), the forts appearing from the date each was built, and India's official modern
// boundaries for South Asia as an overlay (Natural Earth, India's point of view).
import ATLAS from '../data/atlas-data.js';
import BASE from '../data/basemap.js';
import { FORTS } from '../data/forts.js';
import { NODES, OWNERS, ownerAt, existsAt } from '../data/konkan.js';
import { KEYDATES } from '../data/keydates.js';
import { REGIONS } from '../data/forts.js';
import { catalogueFirstYear, atlasFortScene } from './atlas-forts.js';
import {strategicTerrainAt} from './strategic-terrain.js';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const DATA_YEARS = Object.keys(ATLAS.years).map(Number).sort((a, b) => a - b);
// false in forts.world, which ships no historical borders (src/data/atlas-data.js is a stub)
export const HAS_BORDERS = Object.values(ATLAS.years).some((v) => v.length > 0);
const KEY_YEARS = KEYDATES.map((k) => k.year);
const YEARS = [...new Set(DATA_YEARS.concat(KEY_YEARS))].sort((a, b) => a - b);
const baseYear = (y) => DATA_YEARS.filter((d) => d <= y).pop() ?? DATA_YEARS[0];
// campaign regions on the map (lon0, lat0, lon1, lat1): A and B are built
const CAMPAIGN_BOXES = { A: [72.5, 15.6, 74.0, 21.0], B: [73.4, 15.6, 75.8, 21.1], C: [73.4, 8.0, 76.5, 15.6], D: [76.5, 8.0, 85.5, 19.5], E: [79.4, 5.8, 82.0, 9.9], F: [60, 19.5, 98, 37] };
const BUILT = new Set(['A', 'B', 'C', 'D']);
const ZB = [60, 5, 98, 38], ZS = 0.2;   // zones of control: South Asia on a 0.2 degree grid
const TERRAIN_REGION = new Set(['IND','PAK','AFG','BGD','NPL','BTN','LKA','MMR','CHN','IRN']);
const HEIGHT_BANDS = [[150,'#d8d2ae'],[400,'#c5bd8b'],[1000,'#a0a67a'],[2000,'#78906d'],[3500,'#8b8277'],[5000,'#b4b0a4'],[Infinity,'#e4e2d7']];
const SCOPES = { Subcontinent: [58, 4, 100, 39], Asia: [25, -12, 150, 60], World: [-180, -60, 180, 84] };
const yearText = (y) => y < 0 ? `${-y} BCE` : y === 0 ? '1 BCE' : `${y} CE`;
const K = 10, P = (lon, lat) => [(lon + 180) * K, (90 - lat) * K];
// a stable colour per polity name: the same empire keeps its colour from date to date
const hue = (s) => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return Math.abs(h) % 360; };
const colour = (name, lord) => { if (!name) return '#e4dcc8'; const h = hue(lord || name); return lord ? `hsl(${h} 38% 74%)` : `hsl(${h} 46% 62%)`; };
// Undated sites remain visible as research markers, with their uncertainty disclosed.
const firstYear = (f) => catalogueFirstYear(f, NODES);
const visibleAt = (f, year) => firstYear(f) == null || firstYear(f) <= year;
const CSS = `
#atlas{position:fixed;inset:0;z-index:47;display:grid;grid-template-columns:300px 1fr;background:var(--paper);background-image:var(--paper-tex,none);color:var(--ink)}
#atlas[hidden]{display:none}#atlas aside{padding:14px 16px;overflow:auto;border-right:1px solid var(--rule)}
#atlas h2{margin:0;font:400 25px/1.1 var(--font-serif)}#atlas .sub{font:italic 14px/1.4 var(--font-serif);color:var(--muted);margin:4px 0 10px}
#atlas .yr{font:400 34px/1 var(--font-display);margin:8px 0 4px}#atlas input[type=range]{width:100%;accent-color:var(--accent)}
#atlas .row{display:flex;flex-wrap:wrap;gap:5px;margin:6px 0}#atlas button.b{border:1px solid var(--ink);background:none;color:var(--ink);padding:5px 10px;font:500 13px var(--font-body);cursor:pointer}
#atlas button.b[aria-pressed="true"]{background:var(--ink);color:var(--paper)}
#atlas .pol{display:flex;gap:7px;align-items:center;font:13px/1.3 var(--font-body);padding:2px 0;cursor:pointer}#atlas .pol i{flex:none;width:12px;height:12px;border:1px solid rgba(0,0,0,.25)}
#atlas .note{font:italic 12px/1.45 var(--font-serif);color:var(--muted);margin-top:10px}
#atlas .stage{position:relative;overflow:hidden;background:#b9cdd0}#atlas svg{width:100%;height:100%;display:block;cursor:grab;touch-action:none}
#atlas .p{stroke:rgba(40,30,20,.55);stroke-width:.5;vector-effect:non-scaling-stroke}#atlas .p.approx{stroke-dasharray:2 2;fill-opacity:.75}#atlas .p.hl{stroke:#000;stroke-width:2}
#atlas .ind{fill:none;stroke:#7a1a1a;stroke-width:1.1;vector-effect:non-scaling-stroke}
#atlas .lbl{font-family:var(--font-data);fill:#2b2116;paint-order:stroke;stroke:rgba(240,232,210,.85);stroke-width:2px;text-anchor:middle;pointer-events:none;letter-spacing:.04em}
#atlas .fort{fill:#d8a02a;stroke:#3a2410;stroke-width:.6;vector-effect:non-scaling-stroke}
#atlas .tip{position:absolute;pointer-events:none;background:rgba(43,33,22,.9);color:#fff;font:12px/1.35 var(--font-body);padding:4px 8px;border-radius:3px;max-width:280px}
#atlas .x{position:absolute;right:14px;top:10px;font-size:22px;border:0;background:none;color:var(--ink);cursor:pointer;z-index:2}
@media (max-width:760px){#atlas{grid-template-columns:1fr;grid-template-rows:auto 1fr}#atlas aside{max-height:38vh}}
`;
export class Atlas {
  constructor(app) {
    this.app = app; this.yi = YEARS.indexOf(1700); this.showForts = true; this.showIndia = false; this.showTerrain = false; this.showRivers = false; this.terrainMarkup = null; this.riverMarkup = null; this.cache = new Map();
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.el = document.createElement('section'); this.el.id = 'atlas'; this.el.hidden = true; document.body.appendChild(this.el);
    this.el.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.setScope('Subcontinent');
  }
  setScope(name) { const [a, b, c, d] = SCOPES[name], [x0, y0] = P(a, d), [x1, y1] = P(c, b); this.vb = [x0, y0, x1 - x0, y1 - y0]; this.scope = name; }
  // decode one year into SVG paths, once
  year(y) {
    if (this.cache.has(y)) return this.cache.get(y);
    const out = ATLAS.years[String(y)].map(([name, lord0, prec, rings]) => {
      const lord = lord0 && lord0 !== name ? lord0 : '';   // the dataset names a sovereign state as its own overlord
      let d = '', big = null, bigA = 0;
      for (const r of rings) {
        let x = r[0], yy = r[1]; const pts = [[x, yy]];
        for (let i = 2; i < r.length; i += 2) { x += r[i]; yy += r[i + 1]; pts.push([x, yy]); }
        const pp = pts.map(([qx, qy]) => P(qx / 20, qy / 20));
        d += 'M' + pp.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z';
        let A = 0; for (let i = 0; i < pp.length; i++) { const p = pp[i], q = pp[(i + 1) % pp.length]; A += p[0] * q[1] - q[0] * p[1]; } A = Math.abs(A / 2);
        if (A > bigA) { bigA = A; big = pp; }
      }
      const c = big ? [big.reduce((s, p) => s + p[0], 0) / big.length, big.reduce((s, p) => s + p[1], 0) / big.length] : [0, 0];
      return { name, lord, prec, d, c, area: bigA };
    });
    this.cache.set(y, out); return out;
  }
  open() { if (!this.svg) this.build(); this.el.hidden = false; this.render(); }
  close() { this.el.hidden = true; this.stop(); }
  build() {
    const india = BASE.countries.find((c) => c.iso === 'IND');
    this.indiaPath = india.rings.map((r) => 'M' + r.map(([lo, la]) => P(lo, la).map((v) => v.toFixed(1)).join(',')).join('L') + 'Z').join('');
    this.el.innerHTML = `<button class="x" aria-label="Close">×</button><aside></aside><div class="stage"><svg preserveAspectRatio="xMidYMid meet"><rect x="0" y="0" width="${360 * K}" height="${180 * K}" fill="#b9cdd0"/><g class="pols"></g><g class="zones"></g><g class="terrain" pointer-events="none"></g><g class="rivers" pointer-events="none"></g><path class="ind" d="" style="display:none"/><g class="camp"></g><g class="lbls"></g><g class="forts"></g></svg><div class="tip" hidden></div></div>`;
    this.svg = this.el.querySelector('svg');
    this.el.querySelector('.x').onclick = () => this.close();
    this.svg.addEventListener('wheel', (e) => { e.preventDefault(); const [mx, my] = this.toMap(e), f = e.deltaY < 0 ? 0.82 : 1.22, w = Math.max(30, Math.min(360 * K, this.vb[2] * f)), h = w * this.vb[3] / this.vb[2]; this.vb = [mx - (mx - this.vb[0]) * w / this.vb[2], my - (my - this.vb[1]) * h / this.vb[3], w, h]; this.scope = ''; this.render(); }, { passive: false });
    let drag = null;
    this.svg.addEventListener('pointerdown', (e) => { drag = [e.clientX, e.clientY, this.vb[0], this.vb[1]]; this.svg.setPointerCapture(e.pointerId); });
    this.svg.addEventListener('pointermove', (e) => {
      const zt = e.target.closest('.zones'); if (zt && !drag) { const [mx, my] = this.toMap(e), lon = mx / K - 180, lat = 90 - my / K, z = this.zoneAt(lon, lat); const t2 = this.el.querySelector('.tip'), r2 = this.el.querySelector('.stage').getBoundingClientRect(); if (z) { t2.innerHTML = `<b>${esc(z.name)}</b> about ${yearText(YEARS[this.yi])}<br>${z.note ? esc(z.note) + '<br>' : ''}<i>zone of control, inferred from its seats</i>`; t2.hidden = false; t2.style.left = (e.clientX - r2.left + 14) + 'px'; t2.style.top = (e.clientY - r2.top + 10) + 'px'; return; } }
      if (drag) { const r = this.svg.getBoundingClientRect(), s = Math.max(this.vb[2] / r.width, this.vb[3] / r.height); this.vb[0] = drag[2] - (e.clientX - drag[0]) * s; this.vb[1] = drag[3] - (e.clientY - drag[1]) * s; this.svg.setAttribute('viewBox', this.vb.join(' ')); return; }
      const t = this.el.querySelector('.tip'), g = e.target.closest('[data-i]'), fo = e.target.closest('[data-f]'), r = this.el.querySelector('.stage').getBoundingClientRect();
      if (fo) { const f = FORTS[+fo.dataset.f], year = YEARS[this.yi], scene = atlasFortScene(f, year, this.app.levels, NODES); t.innerHTML = `<b>${esc(f.name)}</b><br>${esc(f.region)} · ${esc(f.builder)}; ${esc(f.cent || 'date unknown')}<br><i>Location approximate · ${firstYear(f) == null ? 'start date unknown' : 'start date estimated'}</i><br>${scene ? `Open ${esc(scene.era.year)} snapshot` : 'No dated scene available at this date'}`; }
      else if (g) { const p = this.year(YEARS[this.yi])[+g.dataset.i]; t.innerHTML = `<b>${esc(p.name || 'unclaimed or unknown')}</b>${p.lord ? `<br>subject of ${esc(p.lord)}` : ''}<br><i>border ${['', 'approximate', 'moderately precise', 'set by international law'][p.prec] || 'unknown'}</i>`; }
      else { t.hidden = true; return; }
      t.hidden = false; t.style.left = (e.clientX - r.left + 14) + 'px'; t.style.top = (e.clientY - r.top + 10) + 'px';
    });
    this.svg.addEventListener('pointerup', () => { if (drag) { drag = null; this.render(); } });
    this.svg.addEventListener('pointerleave', () => { this.el.querySelector('.tip').hidden = true; });
    this.svg.addEventListener('click', (e) => {
      const fo = e.target.closest('[data-f]'); if (!fo) return;
      const f = FORTS[+fo.dataset.f], scene = atlasFortScene(f, YEARS[this.yi], this.app.levels, NODES);
      if (!scene) { this.app.ui.toast('No dated scene is available for this fort at the selected date.'); return; }
      this.close();
      this.app.load(scene.level.id, scene.era.id).catch(error => this.app.ui.toast(`Could not open fort: ${error.message}`));
    });
  }
  // the campaign region under the middle of the view, and whether it is built
  campaignHere() {
    const lon = (this.vb[0] + this.vb[2] / 2) / K - 180, lat = 90 - (this.vb[1] + this.vb[3] / 2) / K;
    const id = Object.entries(CAMPAIGN_BOXES).find(([, [a, b, c, d]]) => lon >= a && lon <= c && lat >= b && lat <= d)?.[0];
    if (!id) return '';
    const R = REGIONS.find((r) => r.id === id);
    return BUILT.has(id) ? `<p style="margin:8px 0 0"><button class="b" data-launch="${id}">Campaign here: ${esc(R.name)}</button></p>` : `<p class="note" style="margin-top:8px">Campaign region ${id}, ${esc(R.name)}: not built yet.</p>`;
  }
  // a power's zone: the cell goes to the seat nearest in distance divided by its weight, within about 450 km
  zoneAt(lon, lat) {
    const key = KEYDATES.find((k) => k.year === YEARS[this.yi]); if (!key) return null;
    let best = null, bd = 450;
    for (const p of key.polities) for (const [la, lo, w] of p.a) { const d = Math.hypot((lo - lon) * Math.cos(lat * Math.PI / 180), la - lat) * 111 / w; if (d < bd) { bd = d; best = p; } }
    return this.land(lon, lat) ? best : null;
  }
  land(lon, lat) {
    if (!this._rings) this._rings = BASE.countries.flatMap((c) => c.rings);
    for (const r of this._rings) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) c = !c; } if (c) return true; }
    return false;
  }
  zonesImage(key) {
    this._zc ||= new Map(); if (this._zc.has(key.year)) return this._zc.get(key.year);
    const nx = Math.round((ZB[2] - ZB[0]) / ZS), ny = Math.round((ZB[3] - ZB[1]) / ZS);
    if (!this._mask) { this._mask = new Uint8Array(nx * ny); for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) this._mask[j * nx + i] = this.land(ZB[0] + (i + 0.5) * ZS, ZB[3] - (j + 0.5) * ZS) ? 1 : 0; }
    const cv = document.createElement('canvas'); cv.width = nx; cv.height = ny; const ctx = cv.getContext('2d'), img = ctx.createImageData(nx, ny);
    const cols = key.polities.map((p) => { const h = hue(p.name), c = new OffscreenCanvas(1, 1).getContext('2d'); c.fillStyle = `hsl(${h} 50% 58%)`; c.fillRect(0, 0, 1, 1); return c.getImageData(0, 0, 1, 1).data; });
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      if (!this._mask[j * nx + i]) continue;
      const lon = ZB[0] + (i + 0.5) * ZS, lat = ZB[3] - (j + 0.5) * ZS, cl = Math.cos(lat * Math.PI / 180);
      let bi = -1, bd = 450;
      key.polities.forEach((p, k) => { for (const [la, lo, w] of p.a) { const d = Math.hypot((lo - lon) * cl, la - lat) * 111 / w; if (d < bd) { bd = d; bi = k; } } });
      if (bi < 0) continue;
      const c = cols[bi], o = (j * nx + i) * 4; img.data[o] = c[0]; img.data[o + 1] = c[1]; img.data[o + 2] = c[2]; img.data[o + 3] = Math.round(235 * Math.min(1, (450 - bd) / 120));
    }
    ctx.putImageData(img, 0, 0);
    // soften the edges: zones, not borders
    const out = document.createElement('canvas'); out.width = nx * 3; out.height = ny * 3; const o2 = out.getContext('2d'); o2.filter = 'blur(2px)'; o2.imageSmoothingEnabled = true; o2.drawImage(cv, 0, 0, out.width, out.height);
    const url = out.toDataURL('image/png'); this._zc.set(key.year, url); return url;
  }
  // open at a given date and area (used by the campaign)
  openAt(year, box) {
    // the nearest date the atlas holds (a campaign in 1760 opens at 1761, not 1715)
    this.yi = YEARS.reduce((bi, y, i) => (Math.abs(y - year) < Math.abs(YEARS[bi] - year) ? i : bi), 0);
    if (box) { const [x0, y0] = P(box[0], box[3]), [x1, y1] = P(box[2], box[1]); this.vb = [x0, y0, x1 - x0, y1 - y0]; this.scope = ''; }
    this.open();
  }
  toMap(e) { const r = this.svg.getBoundingClientRect(), s = Math.max(this.vb[2] / r.width, this.vb[3] / r.height), ox = (r.width * s - this.vb[2]) / 2, oy = (r.height * s - this.vb[3]) / 2; return [this.vb[0] + (e.clientX - r.left) * s - ox, this.vb[1] + (e.clientY - r.top) * s - oy]; }
  play() { if (this.timer) return this.stop(); this.timer = setInterval(() => { if (this.yi >= YEARS.length - 1) return this.stop(); this.yi++; this.render(); }, 1600); this.render(); }
  stop() { clearInterval(this.timer); this.timer = null; }
  render() {
    if (!this.svg) return;
    this.svg.setAttribute('viewBox', this.vb.map((v) => v.toFixed(1)).join(' '));
    const y = YEARS[this.yi], key = KEYDATES.find((k) => k.year === y), pols = this.year(baseYear(y)), sc = this.vb[2] / (360 * K);
    this.svg.querySelector('.pols').innerHTML = pols.map((p, i) => `<path class="p${p.prec === 1 ? ' approx' : ''}${p.name && p.name === this.hl ? ' hl' : ''}" data-i="${i}" d="${p.d}" fill="${colour(p.name, p.lord)}"/>`).join('');
    // labels for the largest polities in view
    const [vx, vy, vw, vh] = this.vb;
    // at a key date the zones speak for South Asia: the dataset's own labels there are left out
    const [zx0, zy0] = P(ZB[0], ZB[3]), [zx1, zy1] = P(ZB[2], ZB[1]), inZ = (c) => key && this.showKey !== false && c[0] > zx0 && c[0] < zx1 && c[1] > zy0 && c[1] < zy1;
    const inView = pols.filter((p) => p.name && p.c[0] > vx && p.c[0] < vx + vw && p.c[1] > vy && p.c[1] < vy + vh && !inZ(p.c));
    const seen = new Set(), top = inView.sort((a, b) => b.area - a.area).filter((p) => !seen.has(p.name) && seen.add(p.name)).slice(0, 26);
    this.svg.querySelector('.lbls').innerHTML = top.filter((p) => p.area > vw * vh * 0.004).map((p) => `<text class="lbl" x="${p.c[0].toFixed(1)}" y="${p.c[1].toFixed(1)}" font-size="${Math.max(vw / 90, Math.min(vw / 32, Math.sqrt(p.area) / 6)).toFixed(1)}">${esc(p.name)}</text>`).join('');
    // key dates: zones of control over South Asia, drawn from their seats
    const zg = this.svg.querySelector('.zones');
    if (key && this.showKey !== false) { const url = this.zonesImage(key); const [x0, y0] = P(ZB[0], ZB[3]), [x1, y1] = P(ZB[2], ZB[1]); zg.innerHTML = `<image href="${url}" x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" preserveAspectRatio="none" opacity="0.92"/>` + key.polities.map((p) => { const top = p.a.slice().sort((q, r) => r[2] - q[2])[0], [lx, ly] = P(top[1], top[0]); const fs = Math.max(vw / 100, Math.min(vw / 40, 6 + top[2] * 4)) ; return `<text class="lbl" x="${lx.toFixed(1)}" y="${(ly - fs * 0.6).toFixed(1)}" font-size="${(fs * Math.min(1, 380 / vw * 3)).toFixed(1)}">${esc(p.name)}</text>`; }).join(''); }
    else zg.innerHTML = '';
    if(this.showTerrain&&this.terrainMarkup===null)this.terrainMarkup=this.southAsiaTerrainLayer();
    if(this.showRivers&&this.riverMarkup===null)this.riverMarkup=BASE.rivers.map(r=>`<path d="M${r.pts.map(([lo,la])=>P(lo,la).map(v=>v.toFixed(1)).join(',')).join('L')}" fill="none" stroke="#397d98" stroke-width="1.1" vector-effect="non-scaling-stroke"><title>${esc(r.name)} · modern generalized Natural Earth hydrography</title></path>`).join('');
    this.svg.querySelector('.terrain').innerHTML = this.showTerrain ? this.terrainMarkup : '';
    this.svg.querySelector('.rivers').innerHTML = this.showRivers ? this.riverMarkup : '';
    // the campaign: its sites in their owners' colours at the campaign's own date, and its forces
    const C = this.app.campaign?.state, cg = this.svg.querySelector('.camp');
    if (C && this.showCamp !== false) {
      const cy = C.year;
      const CN = this.app.campaign.nodes;
      cg.innerHTML = CN.filter((n) => existsAt(n, cy)).map((n) => { const o = this.app.campaign.owner(n), [x, yy] = P(n.lon, n.lat), r = (n.kind === 'fort' ? 3.2 : 2.4) * Math.max(0.05, sc) * 4; return `<rect x="${(x - r).toFixed(2)}" y="${(yy - r).toFixed(2)}" width="${(r * 2).toFixed(2)}" height="${(r * 2).toFixed(2)}" transform="rotate(45 ${x.toFixed(1)} ${yy.toFixed(1)})" fill="${this.app.campaign.ownerColour?.(o) || OWNERS[o]?.col || '#888'}" stroke="#fff" stroke-width="0.4"><title>${esc(n.name)} (campaign, ${cy})</title></rect>`; }).join('') +
        C.units.filter((u) => u.men > 0).map((u) => { const h = this.app.campaign.hexes?.get(u.hex); const n = CN.find((m) => m.hex === u.hex); if (!n && !h) return ''; const ll = n ? [n.lon, n.lat] : null; if (!ll) return ''; const [x, yy] = P(ll[0], ll[1]), r = 5 * Math.max(0.05, sc) * 4; return `<circle cx="${x}" cy="${(yy - r * 1.6).toFixed(1)}" r="${r.toFixed(2)}" fill="${u.side === 'siddi' ? OWNERS.siddi.col : OWNERS.maratha.col}" stroke="#fff" stroke-width=".6"><title>${esc(u.name)}: ${u.men} men</title></circle>`; }).join('');
    } else cg.innerHTML = '';
    const ind = this.svg.querySelector('.ind'); ind.setAttribute('d', this.indiaPath); ind.style.display = this.showIndia ? '' : 'none';
    this.svg.querySelector('.forts').innerHTML = this.showForts ? FORTS.map((f, i) => { if (!visibleAt(f, y)) return ''; const scene = atlasFortScene(f, y, this.app.levels, NODES), [x, yy] = P(f.lon, f.lat), r = (scene ? 4 : 2.4) * Math.max(0.06, sc) * 4; return `<circle class="fort" data-f="${i}" cx="${x.toFixed(1)}" cy="${yy.toFixed(1)}" r="${r.toFixed(2)}" style="cursor:${scene ? 'pointer' : 'default'};opacity:${scene ? 1 : 0.75}"/>`; }).join('') : '';
    const nForts = FORTS.filter((f) => visibleAt(f, y)).length;
    this.el.querySelector('aside').innerHTML = `<h2>Atlas of empires</h2><p class="sub">The subcontinent, Asia and the world through time.</p>
      <div class="row">${Object.keys(SCOPES).map((k) => `<button class="b" data-scope="${k}" aria-pressed="${this.scope === k}">${k}</button>`).join('')}</div>
      <div class="yr">${yearText(y)}</div>${HAS_BORDERS ? '' : '<p class="note">Historical borders are not included in this build: the dataset used earlier is GPL-3.0. Forts through time, India\'s official boundary, terrain and rivers are shown.</p>'}${key ? `<div style="font:italic 14px var(--font-serif);color:var(--muted)">${esc(key.title)} · zones of control <span style="font:600 10px var(--font-data);border:1px solid #a0601e;color:#a0601e;padding:0 4px">INFERRED</span></div>` : baseYear(y) !== y ? '' : ''}<input type="range" min="0" max="${YEARS.length - 1}" value="${this.yi}" aria-label="Date">
      <div class="row"><button class="b" data-play>${this.timer ? 'Pause' : 'Play through time'}</button><button class="b" data-forts aria-pressed="${this.showForts}">Forts (${nForts})</button><button class="b" data-india aria-pressed="${this.showIndia}">India's official boundary</button><button class="b" data-terrain aria-pressed="${this.showTerrain}">South Asia terrain</button><button class="b" data-rivers aria-pressed="${this.showRivers}">Modern rivers</button>${this.app.campaign?.state ? `<button class="b" data-campov aria-pressed="${this.showCamp !== false}">Campaign (${this.app.campaign.state.year})</button>` : ''}</div>
      ${(this.showTerrain||this.showRivers)?`<p class="note">${this.showTerrain?'Terrain is deterministic procedural game relief at about 40 km cells, not a DEM or historical elevation. ':''}${this.showRivers?'River lines are generalized modern Natural Earth hydrography, not period-specific channels or verified crossings.':''}</p>`:''}
      ${this.campaignHere()}
      <p style="font:600 11px var(--font-data);letter-spacing:.08em;text-transform:uppercase;margin:12px 0 4px;color:var(--muted)">In view, largest first</p>
      ${key && this.showKey !== false ? key.polities.map((p) => `<div class="pol"><i style="background:hsl(${hue(p.name)} 50% 58%)"></i>${esc(p.name)}${p.note ? ` <span style="color:var(--muted)">— ${esc(p.note)}</span>` : ''}</div>`).join('') : ''}
      ${top.slice(0, key ? 8 : 18).map((p) => `<div class="pol" data-n="${esc(p.name)}"><i style="background:${colour(p.name, p.lord)}"></i>${esc(p.name)}${p.lord ? ` <span style="color:var(--muted)">(under ${esc(p.lord)})</span>` : ''}</div>`).join('')}
      ${key ? '<p class="note">At this key date South Asia is shown as zones of control filled out from the seats and strongholds each power is known to have held, not as mapped borders. They are inferred from general knowledge and meant to be replaced by traced borders from sources (see src/data/keydates.js); outside South Asia the borders are the dataset\'s for ' + yearText(baseYear(y)) + '.</p>' : ''}<p class="note">Borders: historical-basemaps by André Ourednik (GPL-3.0), at the dates it provides; dashed borders are approximate. They are drawn at world scale and simplify a great deal, especially for the many smaller states of the subcontinent. Modern boundaries in South Asia follow the dataset unless India's official boundary (Natural Earth, India's view) is switched on. Fort dates and locations are approximate; undated sites remain visible. Selecting a fort opens an available dated snapshot at or before the atlas date, not a reconstruction of every intervening year.</p>`;
    const A = this.el.querySelector('aside');
    A.querySelector('input').oninput = (e) => { this.yi = +e.target.value; this.render(); };
    A.querySelectorAll('[data-scope]').forEach((b) => b.onclick = () => { this.setScope(b.dataset.scope); this.render(); });
    A.querySelector('[data-play]').onclick = () => this.play();
    A.querySelector('[data-forts]').onclick = () => { this.showForts = !this.showForts; this.render(); };
    A.querySelector('[data-india]').onclick = () => { this.showIndia = !this.showIndia; this.render(); };
    A.querySelector('[data-terrain]').onclick = () => { this.showTerrain = !this.showTerrain; this.render(); };
    A.querySelector('[data-rivers]').onclick = () => { this.showRivers = !this.showRivers; this.render(); };
    A.querySelector('[data-campov]') && (A.querySelector('[data-campov]').onclick = () => { this.showCamp = this.showCamp === false; this.render(); });
    A.querySelector('[data-launch]') && (A.querySelector('[data-launch]').onclick = (e) => { this.close(); const id = e.target.dataset.launch; this.app.campaign.open(id === 'A' || id === 'B' ? 'AB' : id); });
    A.querySelectorAll('.pol').forEach((d) => d.onclick = () => { this.hl = this.hl === d.dataset.n ? null : d.dataset.n; this.render(); });
  }
  southAsiaTerrainLayer() {
    const out=['<title>Deterministic procedural relief at approximately 40 km cells; generated elevation estimates, not measured terrain or historical surface</title>'], dx=.5, dy=.4;
    const inRing=(lon,lat,ring)=>{let hit=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const [xi,yi]=ring[i],[xj,yj]=ring[j];if((yi>lat)!==(yj>lat)&&lon<(xj-xi)*(lat-yi)/(yj-yi)+xi)hit=!hit;}return hit;};
    for(let lat=4.5;lat<39.5;lat+=dy)for(let lon=44;lon<100.5;lon+=dx){const cx=lon+dx/2,cy=lat+dy/2;if(!BASE.countries.some(c=>TERRAIN_REGION.has(c.iso)&&c.rings.some(r=>inRing(cx,cy,r))))continue;const h=strategicTerrainAt(cx,cy).elevationMeters,fill=HEIGHT_BANDS.find(([top])=>h<=top)[1],[x,y]=P(lon,lat),[x2,y2]=P(lon+dx,lat+dy);out.push(`<rect x="${x.toFixed(1)}" y="${y2.toFixed(1)}" width="${(x2-x).toFixed(1)}" height="${(y-y2).toFixed(1)}" fill="${fill}"/>`);}
    return out.join('');
}

}
