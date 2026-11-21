// DOM overlay: cartouche, timeline, minimap plan, places, sources, fort index, cards.
import * as THREE from 'three';
import { SEASONS, WEATHER } from './climate.js';
import { explorerMatches } from './explorer-filter.js';
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CAT_LABEL = { 'site-plans': 'Site plans', 'historic-maps': 'Historic maps', 'elevations-details': 'Elevations and details', views: 'Views and photographs', reports: 'Reports and dossiers' };

export class UI {
  constructor(app, root = document) {
    this.app = app; this.root = root;
    this.el = {
      cartouche: $('#cartouche'), region: $('#c-region'), name: $('#c-name'), native: $('#c-native'), meta: $('#c-meta'),
      timeline: $('#timeline'), eraNote: $('#era-note'), status: $('#status'), zone: $('#s-zone'), elev: $('#s-elev'), progress: $('#s-progress'),
      mini: $('#minimap'), miniPlan: $('#mini-plan'), miniOver: $('#mini-over'),
      card: $('#card'), drawer: $('#drawer'), index: $('#index'), help: $('#help'), veil: $('#veil'), veilName: $('#veil-name'), veilNote: $('#veil-note'),
      lens: $('#lens'), dark: $('#dark'), recenter: $('#btn-recenter'), toast: $('#toast'), compass: $('#compass-needle'), lensBtn: $('#btn-lens'),
    };
    this.statusT = 0;
    const on = (id, fn) => { const b = $(id); if (b) b.addEventListener('click', fn); };
    on('#btn-forts', () => this.openIndex());
    on('#btn-places', () => this.openDrawer('places'));
    on('#btn-sources', () => this.openDrawer('sources'));
    on('#btn-help', () => this.toggle(this.el.help));
    on('#btn-rot-l', () => app.cam.rotate(-1));
    on('#btn-rot-r', () => app.cam.rotate(1));
    on('#btn-zoom-in', () => app.cam.zoom(0.75));
    on('#btn-zoom-out', () => app.cam.zoom(1.33));
    on('#btn-recenter', () => app.recenter());
    on('#btn-battle', () => app.battle.showBrief());
    on('#btn-sky', () => { const c = $('#climate'); c.hidden = !c.hidden; $('#btn-sky').setAttribute('aria-expanded', String(!c.hidden)); if (!c.hidden) this.renderClimate(); });
    on('#climate-close', () => { $('#climate').hidden = true; $('#btn-sky').setAttribute('aria-expanded', 'false'); });
    $('#cl-hour')?.addEventListener('input', (e) => { app.climate.setHour(+e.target.value); });
    on('#cl-turn', () => { app.climate.turn = !app.climate.turn; app.climate.save(); this.renderClimate(); });
    on('#cl-play', () => { app.climate.flow = !app.climate.flow; app.climate.save(); this.renderClimate(); });
    $('#cl-rate')?.addEventListener('change', (e) => { app.climate.rate = +e.target.value; app.climate.save(); });
    $('#cl-season')?.addEventListener('click', (e) => { const b = e.target.closest('[data-s]'); if (b) { app.climate.setSeason(b.dataset.s); this.renderClimate(); } });
    $('#cl-weather')?.addEventListener('click', (e) => { const b = e.target.closest('[data-w]'); if (b) { app.climate.setWeather(b.dataset.w); this.renderClimate(); } });
    on('#cl-solar', () => app.climate.startEclipse('solar'));
    on('#cl-lunar', () => app.climate.startEclipse('lunar'));
    on('#mini-key-btn', (e) => { e?.stopPropagation?.(); const k = document.querySelector('#mini-key'); k.hidden = !k.hidden; document.querySelector('#mini-key-btn').setAttribute('aria-expanded', String(!k.hidden)); });
    on('#btn-lens', () => { app.state.lens = !app.state.lens; app._save(); this.applyLens(); });
    on('#index-close', () => this.closeIndex());
    on('#help-close', () => this.el.help.hidden = true);
    this.el.card.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) this.el.card.hidden = true; });
    this.el.drawer.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) { this.el.drawer.hidden = true; return; }
      const go = e.target.closest('[data-walk]');
      if (go) { const p = app.world.pois[+go.dataset.walk]; app.walkToPoi(p); if (window.innerWidth < 720) this.el.drawer.hidden = true; }
      const rd = e.target.closest('[data-read]');
      if (rd) this.showPlace(app.world.pois[+rd.dataset.read], false);
    });
    this.el.timeline.addEventListener('click', (e) => { const b = e.target.closest('[data-era]'); if (b) app.setEra(b.dataset.era); });
    this.el.index.addEventListener('click', (e) => { const b = e.target.closest('[data-fort]'); if (b) { this.closeIndex(); app.load(b.dataset.fort).catch(error => { this.openIndex(); this.toast(`Could not open fort: ${error.message}`); }); } });
    $('#index-search')?.addEventListener('input', () => this.buildIndex());
    this.el.mini.addEventListener('click', (e) => {
      const r = this.el.miniPlan.getBoundingClientRect();
      if (!app.world) return;
      const [x0, y0, x1, y1] = app.world.bounds;
      const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
      const x = x0 + fx * (x1 - x0), y = y1 - fy * (y1 - y0);
      app.cam.lookAt(x, y, app.world.ground(x, y)); app.freeCam = 6; this.showRecenter(true);
    });
    this.el.mini.addEventListener('dblclick', (e) => {
      const r = this.el.miniPlan.getBoundingClientRect();
      const [x0, y0, x1, y1] = app.world.bounds;
      const x = x0 + ((e.clientX - r.left) / r.width) * (x1 - x0), y = y1 - ((e.clientY - r.top) / r.height) * (y1 - y0);
      app.walkTo(x, y, app.world.ground(x, y));
    });
    this.buildIndex();
  }
  toggle(el) { el.hidden = !el.hidden; }
  closeAll() { this.el.card.hidden = true; this.el.drawer.hidden = true; this.el.help.hidden = true; if (this.app.world) this.el.index.hidden = true; }
  toast(msg) { const t = this.el.toast; t.textContent = msg; t.hidden = false; clearTimeout(this._tt); this._tt = setTimeout(() => (t.hidden = true), 2600); }
  showRecenter(on) { this.el.recenter.classList.toggle('attn', !!on); }
  setDark(on) { this.el.dark.classList.toggle('on', !!on); }

  loading(def, era) {
    const e = (def.eras || []).find((x) => x.id === era);
    this.el.veilName.textContent = def.name;
    this.el.veilNote.textContent = e ? `${e.year} · ${e.label}` : '';
    this.el.veil.hidden = false;
  }
  levelReady(def, W, planSvg) {
    const e = W.eraDef;
    this.el.region.textContent = def.region;
    this.el.name.textContent = def.name;
    this.el.native.textContent = def.native?.text || '';
    this.el.native.lang = def.native?.lang || 'hi';
    this.el.native.className = 'native native-' + (def.native?.script || 'deva');
    const coordinateDigits = def.siteReference ? 5 : 2;
    const siteReference = def.siteReference
      ? ` · UNESCO component reference · ${def.siteReference.propertyAreaHa.toFixed(2)} ha inscribed property`
      : '';
    this.el.meta.textContent = `${def.type} · ${def.coords[0].toFixed(coordinateDigits)}° N ${def.coords[1].toFixed(coordinateDigits)}° E${siteReference}`;
    // timeline
    const eras = def.eras || [];
    this.el.timeline.innerHTML = `<ol>${eras.map((x, i) => `<li><button type="button" data-era="${x.id}" aria-pressed="${x.id === W.era}" title="${esc(x.label)} (key ${i + 1})"><span class="yr">${esc(x.year)}</span><span class="lb">${esc(x.short || x.label)}</span></button></li>`).join('')}</ol>`;
    this.el.eraNote.innerHTML = e ? `<p>${esc(e.summary || '')}</p>` : '';
    // minimap
    this.el.miniPlan.innerHTML = planSvg;
    const [x0, y0, x1, y1] = W.bounds;
    this.el.miniOver.setAttribute('viewBox', `0 0 ${x1 - x0} ${y1 - y0}`);
    this.el.miniPlan.querySelector('svg')?.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    // the plan sits centred in the octagon at its own proportions
    { const asp = (x1 - x0) / (y1 - y0), box = document.querySelector('#mini-box'); box.style.width = asp >= 1 ? '100%' : `${(asp * 100).toFixed(1)}%`; }
    this.drawMiniFrame();
    this.el.card.hidden = true;
    this.buildPlaces(); this.buildSources();
    this.applyLens();
    this.el.veil.hidden = true;
    if (!this._welcomed) { this._welcomed = true; if (!this.app.state.seenHelp) { this.el.help.hidden = false; this.app.state.seenHelp = true; this.app._save(); } }
    document.title = def.name + ' · Historical Worlds';
  }
  renderClimate() {
    const C = this.app.climate; if (!C) return;
    const $ = (q) => document.querySelector(q);
    {
      $('#cl-season').innerHTML = Object.entries(SEASONS).map(([k, v]) => `<button type="button" data-s="${k}" aria-pressed="${C.season === k}">${v.label}</button>`).join('');
      $('#cl-season-note').textContent = SEASONS[C.season].note;
      $('#cl-weather').innerHTML = [['auto', 'With the season'], ...Object.entries(WEATHER).map(([k, v]) => [k, v.label])].map(([k, l]) => `<button type="button" data-w="${k}" aria-pressed="${C.weatherSel === k}">${l}</button>`).join('');
    }
    $('#cl-play').setAttribute('aria-pressed', String(C.flow)); $('#cl-play').textContent = C.flow ? 'Time is passing' : 'Let time pass';
    $('#cl-rate').value = String(C.rate);
    const tb = $('#cl-turn'); if (tb) { tb.setAttribute('aria-pressed', String(C.turn)); tb.textContent = C.turn ? 'Seasons turn' : 'Seasons hold'; }
    this._clT = 5; this.updateClimate();
  }
  updateClimate() {
    const C = this.app.climate, el = document.querySelector('#climate'); if (!C || !el || el.hidden || !C.state) return;
    this._clT = (this._clT || 0) + 1; if (this._clT % 6) return;
    const h = Math.floor(C.hour), m = Math.floor((C.hour - h) * 60);
    document.querySelector('#cl-time').textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    const wk = C.weatherSel === 'auto' ? ` · ${C.state.kind}` : '';
    document.querySelector('#cl-phase').textContent = `${C.dateText()} · ${C.phaseName()}${wk}`;
    const sl = document.querySelector('#cl-hour'); if (document.activeElement !== sl) sl.value = String(C.hour);
    // the dial: an arc from east to west with the sun (or the moon at night), darkened in an eclipse
    const t = ((C.hour - 6) / 12) * Math.PI, sunUp = C.state.el > -6;
    const px = -Math.cos(t) * 46, py = -Math.sin(t) * 30;
    const mt = ((C.hour + 6) % 24 - 6) / 12 * Math.PI, mx = -Math.cos(mt) * 46, my = -Math.sin(mt) * 30;
    const ec = C.state.ec || 0;
    const body = sunUp ? `<circle class="sun" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="6"/>${C.state.solar ? `<circle class="ecl" cx="${(px + 10 - ec * 10).toFixed(1)}" cy="${py.toFixed(1)}" r="6"/>` : ''}`
      : `<circle class="moon" cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="5.5" style="${C.state.lunar ? `fill:${ec > 0.5 ? '#9a3a24' : '#c98a6a'}` : ''}"/>`;
    document.querySelector('#cl-dial').innerHTML = `<path class="arc" d="M-46 0 A46 30 0 0 1 46 0"/><line class="hz" x1="-56" y1="0" x2="56" y2="0"/>${body}<text x="-56" y="10" font-size="7" fill="currentColor">E</text><text x="51" y="10" font-size="7" fill="currentColor">W</text>`;
  }
  // the octagonal frame, dressed for the period: an engraved compass card, a brass surveyor's bezel, or a plain ring
  drawMiniFrame() {
    const chrome = document.body.dataset.chrome || 'modern', svg = document.querySelector('#mini-frame'); if (!svg) return;
    if (this._frameFor === chrome) return; this._frameFor = chrome;
    const oct = (R) => Array.from({ length: 8 }, (_, k) => { const a = (-67.5 + k * 45) * Math.PI / 180; return `${(50 + Math.cos(a) * R).toFixed(2)},${(50 + Math.sin(a) * R).toFixed(2)}`; }).join(' ');
    const ring = (R1, R2) => `M${oct(R1).split(' ').join(' L')} Z M${oct(R2).split(' ').join(' L')} Z`;
    // a point on the octagon of vertex-radius R at bearing deg (so scales follow the flat edges)
    const ptAt = (R, deg) => { const off = ((((deg - 22.5) % 45) + 45) % 45) - 22.5, r = R * Math.cos(22.5 * Math.PI / 180) / Math.cos(off * Math.PI / 180), a = (deg - 90) * Math.PI / 180; return [50 + Math.cos(a) * r, 50 + Math.sin(a) * r]; };
    // compass rose in the top-right corner, outside the octagon
    const rose = (cx, cy, r) => {
      let out = '';
      for (let k = 0; k < 8; k++) { const a = k * 45 * Math.PI / 180, l = k % 2 ? r * 0.55 : r, w = r * 0.18;
        const tip = [cx + Math.sin(a) * l, cy - Math.cos(a) * l], lft = [cx + Math.sin(a - Math.PI / 2) * w, cy - Math.cos(a - Math.PI / 2) * w], rgt = [cx + Math.sin(a + Math.PI / 2) * w, cy - Math.cos(a + Math.PI / 2) * w];
        out += `<path class="rose-a" d="M${cx} ${cy} L${lft[0].toFixed(2)} ${lft[1].toFixed(2)} L${tip[0].toFixed(2)} ${tip[1].toFixed(2)}Z"/><path class="rose-b" d="M${cx} ${cy} L${rgt[0].toFixed(2)} ${rgt[1].toFixed(2)} L${tip[0].toFixed(2)} ${tip[1].toFixed(2)}Z"/>`; }
      return out + `<circle cx="${cx}" cy="${cy}" r="${(r * 0.12).toFixed(2)}" class="rose-b"/><text class="rose-n" x="${cx}" y="${(cy - r - 1.6).toFixed(2)}">N</text>`;
    };
    let html = '';
    if (chrome === 'engraving') {
      // a printed compass card: a ruled double octagon with a degree scale between the rules, cardinal letters at the points
      html += `<path class="band" d="${ring(50, 46.6)}" fill-rule="evenodd"/><polygon class="ring" points="${oct(49.6)}" stroke-width="1.6"/><polygon class="ring" points="${oct(46.6)}" stroke-width=".7"/>`;
      for (let d = 0; d < 360; d += 5) { const [a1, b1] = ptAt(46.8, d), [a2, b2] = ptAt(d % 45 ? 47.9 : 49.2, d); html += `<line class="tick" x1="${a1.toFixed(2)}" y1="${b1.toFixed(2)}" x2="${a2.toFixed(2)}" y2="${b2.toFixed(2)}"/>`; }
      html += rose(90, 10, 7.5);
    } else if (chrome === 'albumen') {
      // a brass bezel with screws at the points, as on a surveyor's instrument
      html += `<defs><linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e7c77a"/><stop offset=".45" stop-color="#a7802f"/><stop offset=".7" stop-color="#d9b663"/><stop offset="1" stop-color="#7a5a1e"/></linearGradient></defs>`;
      html += `<path d="${ring(50, 46.6)}" fill="url(#brass)" fill-rule="evenodd" stroke="#4a3610" stroke-width=".4"/><polygon class="ring" points="${oct(46.6)}" stroke-width=".9" style="stroke:#3a2c14"/>`;
      for (let k = 0; k < 8; k++) { const [x, y] = ptAt(48.3, 22.5 + k * 45); html += `<circle class="bolt" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.1"/><line x1="${(x - 0.7).toFixed(2)}" y1="${y.toFixed(2)}" x2="${(x + 0.7).toFixed(2)}" y2="${y.toFixed(2)}" stroke="#3a2c14" stroke-width=".3"/>`; }
      html += rose(90, 10, 7);
    } else {
      html += `<polygon class="ring" points="${oct(48.5)}" stroke-width="1.4" style="stroke:var(--paper)"/><polygon class="ring" points="${oct(47)}" stroke-width=".6" style="stroke:var(--rule)"/>`;
      html += rose(91, 9, 6);
    }
    svg.innerHTML = html;
  }
  applyLens() {
    const lens = this.app.world?.eraDef?.lens || 'none';
    const on = this.app.state.lens !== false;
    const cls = on ? lens : 'none';
    this.app.canvas.dataset.lens = cls; this.el.lens.dataset.lens = cls;
    // the interface itself dresses for the period: printed survey, photograph album, or present day
    document.body.dataset.chrome = lens === 'engraving' ? 'engraving' : lens === 'albumen' ? 'albumen' : 'modern';
    this.drawMiniFrame();
    this.el.lensBtn.setAttribute('aria-pressed', String(on));
    this.el.lensBtn.title = on ? 'Period lens on (click to see true colour)' : 'Period lens off';
  }
  updateProgress() {
    const app = this.app; if (!app.world) return;
    const n = app.world.pois.length, f = app.world.pois.filter((p) => app.isFound(p)).length;
    this.el.progress.innerHTML = `<span class="dots" aria-hidden="true">${app.world.pois.map((p) => `<i class="${app.isFound(p) ? 'on' : ''}"></i>`).join('')}</span><span>${f} of ${n} places</span>`;
    if (f === n && n && !this._doneShown?.[app.levelDef.id]) {
      (this._doneShown ||= {})[app.levelDef.id] = true;
      const i = app.levels.findIndex((l) => l.id === app.levelDef.id);
      const next = app.levels[(i + 1) % app.levels.length];
      this.toast(`You have walked all of ${app.levelDef.name}. Next: ${next.name}`);
    }
    this.buildPlaces();
    this.buildIndex();
  }
  buildPlaces() {
    const app = this.app; if (!app.world || this.mode !== 'places' || this.el.drawer.hidden) return;
    this._renderDrawer('places');
  }
  buildSources() { if (this.mode === 'sources' && !this.el.drawer.hidden) this._renderDrawer('sources'); }
  openDrawer(mode) {
    if (!this.el.drawer.hidden && this.mode === mode) { this.el.drawer.hidden = true; return; }
    this.mode = mode; this._renderDrawer(mode); this.el.drawer.hidden = false; this.el.card.hidden = true;
  }
  _renderDrawer(mode) {
    const app = this.app, W = app.world, def = app.levelDef;
    if (mode === 'places') {
      const rows = W.pois.map((p, i) => {
        const f = app.isFound(p);
        return `<li class="${f ? 'found' : ''}"><span class="n">${p.n}</span><div class="t"><b>${esc(p.title)}</b>${f ? `<button type="button" class="lnk" data-read="${i}">Read</button>` : '<span class="hint">Not yet found</span>'}</div><button type="button" class="go" data-walk="${i}" aria-label="Walk to ${esc(p.title)}">Walk</button></li>`;
      }).join('');
      this.el.drawer.innerHTML = `<header><h2>Places</h2><button type="button" class="x" data-close aria-label="Close">×</button></header><p class="sub">${esc(def.name)}, ${esc(W.eraDef.year)}. Walk close to a marker to read about it.</p><ol class="places">${rows}</ol>`;
    } else {
      const e = W.eraDef;
      const cat = this.app.catalog.filter((c) => c.fort === def.id);
      const byId = Object.fromEntries(cat.map((c) => [c.id, c]));
      const eraRows = (e.sources || []).map((s) => {
        const c = byId[s];
        if (!c) return `<li>${esc(s)}</li>`;
        return `<li><a href="${esc(c.page_url)}" target="_blank" rel="noopener">${esc(c.title)}</a><span class="m">${esc([c.creator, c.date, c.institution].filter(Boolean).join(' · '))}</span></li>`;
      }).join('');
      const groups = {};
      for (const c of cat) (groups[c.category] ||= []).push(c);
      const all = Object.entries(CAT_LABEL).filter(([k]) => groups[k]).map(([k, label]) => `<h4>${label}</h4><ul class="src">${groups[k].map((c) => `<li><a href="${esc(c.page_url)}" target="_blank" rel="noopener">${esc(c.title)}</a><span class="m">${esc([c.date, c.institution].filter(Boolean).join(' · '))}</span><span class="lic">${esc(c.license)}</span></li>`).join('')}</ul>`).join('');
      this.el.drawer.innerHTML = `<header><h2>Sources</h2><button type="button" class="x" data-close aria-label="Close">×</button></header>
        <section class="era-src"><h3>${esc(e.year)}: ${esc(e.label)}</h3><p>${esc(e.basis || e.summary || '')}</p>${eraRows ? `<ul class="src">${eraRows}</ul>` : ''}${e.conjecture ? `<p class="caveat">${esc(e.conjecture)}</p>` : ''}</section>
        <section><h3>Everything catalogued for ${esc(def.name)}</h3>${all}</section>
        <p class="caveat">The 3D fort is a schematic reconstruction drawn from these sources, not a measured survey. Plan distances are compressed where the fort is large.</p>`;
    }
  }
  showPlace(p, justFound) {
    const app = this.app;
    const n = app.world.pois.length;
    this.el.card.innerHTML = `<button type="button" class="x" data-close aria-label="Close">×</button>
      <p class="eyebrow">${justFound ? 'Found · ' : ''}Place ${p.n} of ${n}</p>
      <h2>${esc(p.title)}</h2>
      ${p.eraNote ? `<p class="era-note">${esc(p.eraNote)}</p>` : ''}
      <p>${esc(p.text)}</p>
      ${p.evidence || p.positionEvidence ? `<p class="evidence-note">${p.evidence ? `Description: ${esc(p.evidence)}` : ''}${p.evidence && p.positionEvidence ? ' · ' : ''}${p.positionEvidence ? `Marker position: ${esc(p.positionEvidence)}` : ''}</p>` : ''}
      ${p.source ? `<p class="src"><a href="${esc(p.source)}" target="_blank" rel="noopener">Source</a></p>` : ''}`;
    this.el.card.hidden = false;
    this.el.drawer.hidden = true;
  }
  openIndex() { this.buildIndex(); this.el.index.hidden = false; }
  closeIndex() { if (this.app.world) this.el.index.hidden = true; }
  buildIndex() {
    const app = this.app;
    const matches = explorerMatches(app.levels, $('#index-search')?.value);
    const list = matches.map(({level:l, index:i}) => {
      const n = l.poiCount || 0;
      const f = (app.state.found[l.id] || []).length;
      const cur = app.levelDef?.id === l.id;
      return `<li><button type="button" data-fort="${l.id}"${cur ? ' aria-current="true"' : ''}><span class="no">${String(i + 1).padStart(2, '0')}</span><span class="nm">${esc(l.name)}<span class="nt native-${l.native?.script || 'deva'}" lang="${l.native?.lang || 'hi'}">${esc(l.native?.text || '')}</span></span><span class="rg">${esc(l.region)} · ${esc(l.type)}</span><span class="pr">${f ? `${f} found` : ''}</span></button></li>`;
    }).join('');
    const map = this.app.landPath ? this.mapSvg(new Set(matches.map(({level}) => level.id))) : '';
    $('#index-count').textContent = `${matches.length} of ${app.levels.length} forts`;
    $('#index-list').innerHTML = list ? `<p class="note">These are research reconstructions. The presence of a 3D scene does not mean its accuracy or historical period has been verified.</p><ol>${list}</ol>` : '<p class="note">No forts match your search.</p>';
    if (map) $('#index-map').innerHTML = map;
  }
  mapSvg(visibleIds = null) {
    const L = this.app.landPath; // {d, lon0, lon1, lat0, lat1, w, h}
    const P = (lat, lon) => [((lon - L.lon0) / (L.lon1 - L.lon0)) * L.w, ((L.lat1 - lat) / (L.lat1 - L.lat0)) * L.h];
    const dots = this.app.levels.map((l, i) => {
      if (visibleIds && !visibleIds.has(l.id)) return '';
      const [x, y] = P(l.coords[0], l.coords[1]);
      const cur = this.app.levelDef?.id === l.id;
      return `<g class="dot${cur ? ' cur' : ''}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" data-fort="${l.id}"><circle r="${cur ? 7 : 5.5}"/><text x="9" y="4">${i + 1}</text></g>`;
    }).join('');
    const grat = [];
    for (let lon = Math.ceil(L.lon0 / 5) * 5; lon <= L.lon1; lon += 5) { const [x] = P(0, lon); grat.push(`<path d="M${x.toFixed(1)} 0V${L.h}"/><text class="gl" x="${(x + 3).toFixed(1)}" y="${L.h - 4}">${lon}°E</text>`); }
    for (let lat = Math.ceil(L.lat0 / 5) * 5; lat <= L.lat1; lat += 5) { const [, y] = P(lat, 0); grat.push(`<path d="M0 ${y.toFixed(1)}H${L.w}"/><text class="gl" x="4" y="${(y - 3).toFixed(1)}">${lat}°N</text>`); }
    return `<svg viewBox="0 0 ${L.w} ${L.h}" role="img" aria-label="Where the playable forts are"><g class="grat">${grat.join('')}</g><path class="land" d="${L.d}"/>${dots}</svg>`;
  }
  frame(dt) {
    this.statusT -= dt;
    const app = this.app;
    if (this.statusT <= 0) {
      this.statusT = 0.2;
      const [x, y, h] = app.traveller.pos;
      const def = app.levelDef;
      const elev = (h - (def.datum ?? 0)) * (def.units?.vScale ?? 1);
      this.el.zone.textContent = app.zoneName();
      this.el.elev.textContent = `${elev >= 0 ? '+' : '−'}${Math.abs(elev).toFixed(0)} m ${def.datumLabel || ''}`.trim();
    }
    // minimap overlay: traveller + view
    const W = app.world; if (!W) return;
    const [x0, , , y1] = W.bounds;
    const [x, y] = app.traveller.pos;
    const yaw = app.traveller.yaw;
    const px = x - x0, py = y1 - y;
    const s = Math.max(W.bounds[2] - W.bounds[0], W.bounds[3] - W.bounds[1]) / 60;
    const cam = app.cam.cam, t = app.cam.target, fwd = cam.getWorldDirection(new THREE.Vector3());
    const foot = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => {
      const o = new THREE.Vector3(u, v, -1).unproject(cam), k = (t.y - o.y) / (fwd.y || -1e-6);
      const gx = o.x + fwd.x * k, gz = o.z + fwd.z * k; return `${(gx - x0).toFixed(1)},${(y1 + gz).toFixed(1)}`;
    }).join(' ');
    const cx = t.x - x0, cy = y1 + t.z;
    const az = app.cam.az;
    const pois = W.pois.map((p) => `<circle class="${app.isFound(p) ? 'pf' : 'pu'}" cx="${(p.x - x0).toFixed(1)}" cy="${(y1 - p.y).toFixed(1)}" r="${(s * 0.55).toFixed(2)}"/>`).join('');
    this.el.miniOver.innerHTML = (app.play?.mini || '') + (app.chrome?.pingSVG(x0, y1, s) || '') + `<g class="view"><polygon points="${foot}"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(s * 0.45).toFixed(2)}"/></g>${pois}<g class="me" transform="translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${(-yaw * 180 / Math.PI).toFixed(1)})"><path d="M0 ${(s * 1.3).toFixed(2)} L${(-s * 0.85).toFixed(2)} ${(-s * 0.9).toFixed(2)} L0 ${(-s * 0.35).toFixed(2)} L${(s * 0.85).toFixed(2)} ${(-s * 0.9).toFixed(2)}Z"/></g>`;
    // scale bar: a round number of metres about a quarter of the plan's width
    if (!this._scaleFor || this._scaleFor !== W || this._scaleW !== innerWidth) {
      this._scaleW = innerWidth;
      this._scaleFor = W;
      const span = (W.bounds[2] - W.bounds[0]) * (W.def.units?.planScale ?? 1), pick = [10, 20, 25, 50, 100, 200, 250, 500, 1000].find((v) => v >= span * 0.22) || 1000;
      const sb = document.querySelector('#mini-scale'), wrapW = document.querySelector('#mini-wrap')?.clientWidth || 220; if (sb) { sb.querySelector('i').style.width = `${(pick / span * wrapW).toFixed(0)}px`; sb.querySelector('span').textContent = `${pick} m`; }
    }
    if (this.el.compass) this.el.compass.style.transform = `rotate(${(az + 90).toFixed(1)}deg)`;
  }
}
