// Game chrome in the manner of Warcraft III and Blades of the Shogun: a resource bar across the top with a
// sun-and-moon orb at its centre; a console at the foot when something is selected, with a live portrait, its
// properties, the actions it allows and a "Learn more" card; alerts with a drumbeat and a ping on the plan.
import * as THREE from 'three';
import { loreFor } from './lore.js';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ICON = {
  grain: '<path d="M6 20c0-6 2-9 6-9s6 3 6 9z" fill="#c9a654" stroke="#5a4020"/><path d="M9 11c0-3 1-5 3-6 2 1 3 3 3 6" fill="none" stroke="#5a4020"/>',
  produce: '<ellipse cx="12" cy="14" rx="6" ry="7" fill="#7a9a3a" stroke="#3a4a1a"/><path d="M12 7c0-2 1-3 3-3" stroke="#3a4a1a" fill="none"/>',
  milk: '<path d="M8 6h8l1 3v10H7V9z" fill="#c9a05a" stroke="#5a4020"/><path d="M8 11h9" stroke="#efe9da" stroke-width="2"/>',
  eggs: '<ellipse cx="12" cy="13" rx="5" ry="6.5" fill="#efe6d2" stroke="#7a6a50"/>',
  wool: '<circle cx="9" cy="13" r="4" fill="#e9e2d0" stroke="#7a6a50"/><circle cx="15" cy="12" r="4.5" fill="#e9e2d0" stroke="#7a6a50"/>',
  meat: '<path d="M6 15c0-5 4-8 8-8 3 0 4 3 3 6-1 4-6 6-9 5" fill="#a8452a" stroke="#4a1a10"/>',
  men: '<circle cx="12" cy="7" r="3" fill="#e0c79a" stroke="#4a3020"/><path d="M6 21c0-5 3-8 6-8s6 3 6 8z" fill="#c8b48a" stroke="#4a3020"/>',
};
const CSS = `
#topbar{position:fixed;left:0;right:0;top:0;height:42px;z-index:24;display:grid;grid-template-columns:1fr 110px 1fr;align-items:center;padding:0 10px;box-sizing:border-box;font:600 13px var(--font-data);color:#f4ead2;
 background:linear-gradient(#5a3a22,#3a2414 60%,#2a190d);border-bottom:2px solid #b08a3a;box-shadow:0 3px 10px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,230,180,.25)}
#topbar .res{display:flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(0,0,0,.35);border:1px solid rgba(176,138,58,.6);border-radius:3px;min-width:66px;justify-content:flex-end}
#topbar .res svg{width:18px;height:18px}#topbar .res b{font-variant-numeric:tabular-nums;font-weight:600}
#topbar .side{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden}#topbar .side.l{justify-content:flex-end}#topbar .grow{flex:1}#topbar .warn{color:#ffb070}#topbar .good{color:#9fe0a0}
#topbar .navslot{display:flex;gap:4px;white-space:nowrap;flex:none}#topbar .navslot *{white-space:nowrap}#topbar .navslot a,#topbar .navslot button{font-size:12px !important;padding:3px 7px !important}
#topbar .res{white-space:nowrap}
#topbar button{border:1px solid rgba(176,138,58,.7);background:rgba(0,0,0,.3);color:#f4ead2;border-radius:3px;padding:3px 8px;font:600 12px var(--font-data);cursor:pointer}
#orb{position:fixed;left:50%;top:-6px;transform:translateX(-50%);width:76px;height:76px;z-index:26;cursor:pointer;filter:drop-shadow(0 4px 6px rgba(0,0,0,.45))}
#orb-tip{position:fixed;left:50%;top:72px;transform:translateX(-50%);z-index:26;font:500 11px var(--font-data);color:#f4ead2;background:rgba(30,18,8,.75);padding:1px 8px;border-radius:8px;white-space:nowrap}
body[data-chrome="modern"] #topbar{background:rgba(20,26,28,.86);border-bottom:1px solid rgba(255,255,255,.12);backdrop-filter:blur(8px)}
body[data-chrome="modern"] #topbar .res{border-color:rgba(255,255,255,.15)}
body[data-chrome="albumen"] #topbar{background:linear-gradient(#4a3826,#2e2216);border-bottom-color:#c9a25e}
#console{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 84px);width:min(760px,calc(100vw - 340px));min-height:150px;z-index:23;display:grid;grid-template-columns:154px 1fr 220px;gap:0;box-sizing:border-box;color:#f4ead2}
#console>div:not(#portrait){background:linear-gradient(#4a301c,#2a190d);border:2px solid #b08a3a;border-left:0;padding:10px;box-shadow:0 10px 30px rgba(0,0,0,.45)}
#console>div:last-child{border-radius:0 6px 6px 0}
body[data-chrome="modern"] #console>div:not(#portrait){background:rgba(20,26,28,.92);border-color:rgba(255,255,255,.18)}
#console[hidden]{display:none}
#portrait{width:150px;height:150px;border:4px solid #b08a3a;border-radius:6px 0 0 6px;box-shadow:inset 0 0 0 2px #3a2414,0 10px 30px rgba(0,0,0,.45);background:transparent;box-sizing:content-box}
#console h3{margin:0;font:400 20px/1.15 var(--font-serif);color:#fff3d8}#console .sub{font:italic 13px var(--font-serif);color:#d8c8a4;margin:1px 0 6px}
#console .st{font:13px/1.4 var(--font-body);color:#efe4cc;margin:0 0 4px}#console .lim{font:italic 12px/1.35 var(--font-serif);color:#c9b48a;margin:4px 0 0;max-height:62px;overflow:auto}
#console .acts{display:grid;grid-template-columns:repeat(2,1fr);gap:5px;align-content:start}
#console .acts button{min-height:34px;border:1px solid #b08a3a;background:linear-gradient(#5a3a22,#3a2414);color:#f4ead2;border-radius:3px;font:500 12px/1.2 var(--font-body);cursor:pointer;padding:3px 5px;text-align:center}
#console .acts button:hover{background:linear-gradient(#7a4a26,#4a2c14)}#console .acts button[disabled]{opacity:.4;cursor:default}#console .acts button.on{box-shadow:inset 0 0 0 2px #ffd27a}
#console .x{position:absolute;right:6px;top:4px;border:0;background:none;color:#d8c8a4;font-size:18px;cursor:pointer}
#lorecard{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(480px,calc(100vw - 32px));z-index:41;background:var(--paper);background-image:var(--paper-tex,none);color:var(--ink);padding:20px 24px;border-radius:6px;box-shadow:0 18px 50px rgba(0,0,0,.3)}
#lorecard[hidden]{display:none}#lorecard h2{margin:0 0 8px;font:400 24px/1.15 var(--font-serif)}#lorecard p{font:15px/1.5 var(--font-serif)}#lorecard button{border:1px solid var(--ink);background:none;color:var(--ink);padding:5px 14px;cursor:pointer}
#alerts{position:fixed;left:16px;top:200px;z-index:27;display:flex;flex-direction:column;gap:6px;pointer-events:none}
#alerts div{background:rgba(120,20,10,.88);color:#fff;font:600 13px var(--font-body);padding:6px 10px;border-left:4px solid #ffcf5a;border-radius:3px;box-shadow:0 4px 12px rgba(0,0,0,.3);animation:alertIn .3s}
@keyframes alertIn{from{transform:translateX(-20px);opacity:0}to{transform:none;opacity:1}}
#mini-over .ping{fill:none;stroke:#ff4a2a;stroke-width:2;vector-effect:non-scaling-stroke}
#cartouche{top:calc(env(safe-area-inset-top,0px) + 52px) !important}
#help,#drawer{margin-top:20px}
@media (max-width:720px){#console{width:calc(100vw - 20px);grid-template-columns:96px 1fr;min-height:110px}#portrait{width:96px;height:96px}#console .acts{grid-column:1 / -1;grid-template-columns:repeat(3,1fr)}#topbar .res{min-width:0;padding:2px 4px}#topbar .res:nth-child(n+5){display:none}}
`;
export class Chrome {
  constructor(app) {
    this.app = app; this.pings = []; this.alertT = {};
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.bar = document.createElement('div'); this.bar.id = 'topbar'; document.body.appendChild(this.bar);
    this.orb = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); this.orb.id = 'orb'; this.orb.setAttribute('viewBox', '-40 -40 80 80'); document.body.appendChild(this.orb);
    this.orbTip = document.createElement('div'); this.orbTip.id = 'orb-tip'; document.body.appendChild(this.orbTip);
    this.orb.addEventListener('click', () => document.querySelector('#btn-sky')?.click());
    this.con = document.createElement('section'); this.con.id = 'console'; this.con.hidden = true; document.body.appendChild(this.con);
    this.lore = document.createElement('section'); this.lore.id = 'lorecard'; this.lore.hidden = true; document.body.appendChild(this.lore);
    this.alerts = document.createElement('div'); this.alerts.id = 'alerts'; document.body.appendChild(this.alerts);
    for (const el of [this.bar, this.con, this.lore, this.orb]) el.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.con.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      this.app.audio?.click();
      if (b.dataset.close != null) { this.app.play.deselect(); return; }
      if (b.dataset.lore != null) { this.showLore(); return; }
      const fn = this.actions?.[+b.dataset.a]; if (fn && !b.disabled) { fn.run(); this.app.play.refresh(); }
    });
    this.lore.addEventListener('click', (e) => { if (e.target.closest('button')) this.lore.hidden = true; });
    this.bar.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b?.dataset.snd != null) { this.app.audio.toggle(); this.renderBar(true); } if (b?.dataset.map != null) this.app.fortmap.open(); if (b?.dataset.camp != null) this.app.campaign.open(); if (b?.dataset.atlas != null) this.app.atlas.open(); });
    // the page's own menu links move into the bar
    const nav = document.querySelector('#nav, nav'); if (nav) { this.nav = nav; }
    this.portraitCam = new THREE.PerspectiveCamera(28, 1, 0.1, 200);
    this._t = 0;
  }
  // ---------------------------------------------------------------- the resource bar and orb
  renderBar(force) {
    const F = this.app.farm, S = F?.stores, P = this.app.play;
    const men = this.app.people ? this.app.people.agents.filter((a) => !a.dead && !a.K.animal).length * 5 : 0;
    const d = F?.daysLeft?.();
    const cells = S ? [['grain', Math.round(S.grain).toLocaleString() + ' kg'], ['produce', Math.round(S.produce).toLocaleString() + ' kg'], ['milk', Math.round(S.milk) + ' l'], ['eggs', String(S.eggs + (P?.inv.eggs || 0))], ['wool', (S.wool + (P?.inv.wool || 0)).toFixed(1) + ' kg'], ['meat', String(S.meat + (P?.inv.meat || 0))]] : [];
    const cell = ([k, v]) => `<span class="res" title="${k}"><svg viewBox="0 0 24 24">${ICON[k]}</svg><b>${v}</b></span>`;
    const html = `<div class="side l">${cells.slice(0, 4).map(cell).join('')}</div><div></div><div class="side r">${cells.slice(4).map(cell).join('')}` +
      `<span class="res" title="people in the fort (each figure stands for five)"><svg viewBox="0 0 24 24">${ICON.men}</svg><b>${men.toLocaleString()}</b></span><span class="grow"></span>` +
      (S ? `<span class="res ${d < 30 ? 'warn' : 'good'}" title="days of grain">${d === Infinity ? 'Provisions: ample' : `Provisions: ${d} days`}</span>` : '<span class="res">No stores kept</span>') +
      `<button type="button" data-atlas>Atlas</button><button type="button" data-camp>Campaign</button><button type="button" data-map>Map</button><button type="button" data-snd>${this.app.audio?.on ? 'Sound on' : 'Sound off'}</button><span class="navslot"></span></div>`;
    if (force || html !== this._barHtml) {
      this._barHtml = html; const navEl = this.nav && this.nav.parentElement === this.bar.querySelector('.navslot') ? this.nav : this.nav;
      this.bar.innerHTML = html;
      if (navEl) { navEl.style.position = 'static'; navEl.style.margin = '0'; this.bar.querySelector('.navslot').appendChild(navEl); }
    }
  }
  renderOrb() {
    const C = this.app.climate, st = C?.state; if (!st) return;
    const night = st.night ?? 0, day = st.day ?? 1, ec = st.ec || 0;
    const sky = night > 0.5 ? '#0d1424' : day > 0.6 ? '#7fb2d8' : '#d98a5a';
    // the sun (or moon) rides an arc across the orb from east to west
    const h = C.hour, up = st.el > -6, t = up ? ((h - 6) / 12) : (((h + 6) % 24) - 6) / 12;
    const a = Math.PI * Math.min(1, Math.max(0, t)), x = -Math.cos(a) * 22, y = 14 - Math.sin(a) * 26;
    const stars = night > 0.3 ? Array.from({ length: 9 }, (_, i) => `<circle cx="${(Math.sin(i * 7.1) * 24).toFixed(1)}" cy="${(Math.cos(i * 3.3) * 18 - 4).toFixed(1)}" r=".9" fill="#fff" opacity="${(0.4 + 0.6 * Math.abs(Math.sin(this._t * 2 + i))).toFixed(2)}"/>`).join('') : '';
    const body = up ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" fill="#ffd25a"/>${st.solar ? `<circle cx="${(x + 9 - ec * 9).toFixed(1)}" cy="${y.toFixed(1)}" r="8" fill="#141824"/>` : ''}` : `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="${st.lunar ? (ec > 0.5 ? '#9a3a24' : '#c98a6a') : '#e9ecf2'}"/><circle cx="${(x + 3).toFixed(1)}" cy="${(y - 2).toFixed(1)}" r="1.4" fill="#c8ccd6"/>`;
    const rain = (C.cur?.rain ?? 0) > 0.3 ? Array.from({ length: 7 }, (_, i) => `<line x1="${-18 + i * 6}" y1="${-4 + (i % 2) * 5}" x2="${-21 + i * 6}" y2="${4 + (i % 2) * 5}" stroke="#cfe0ff" stroke-width="1"/>`).join('') : '';
    const cloud = (C.cur?.clouds ?? 0) > 0.6 ? '<ellipse cx="6" cy="2" rx="16" ry="7" fill="#c8ccd0" opacity=".85"/><ellipse cx="-8" cy="5" rx="12" ry="6" fill="#d8dce0" opacity=".85"/>' : '';
    this.orb.innerHTML = `<defs><clipPath id="orbc"><circle r="30"/></clipPath><linearGradient id="orbrim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0d38a"/><stop offset=".5" stop-color="#9a7428"/><stop offset="1" stop-color="#e8c470"/></linearGradient></defs>
      <circle r="37" fill="url(#orbrim)"/><circle r="33" fill="#2a1a0c"/><g clip-path="url(#orbc)"><circle r="30" fill="${sky}"/>${stars}${body}${cloud}${rain}<rect x="-30" y="14" width="60" height="20" fill="#3a5a2a"/></g>
      ${Array.from({ length: 8 }, (_, i) => { const q = i / 8 * Math.PI * 2; return `<circle cx="${(Math.cos(q) * 35).toFixed(1)}" cy="${(Math.sin(q) * 35).toFixed(1)}" r="1.6" fill="#f6e2a6"/>`; }).join('')}`;
    const hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
    this.orbTip.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} · ${C.phaseName()} · ${C.dateText?.() || ''}`;
  }
  // ---------------------------------------------------------------- the console
  showSelection(sel, title, status, limit, actions) {
    this.sel = sel; this.actions = actions;
    const lore = loreFor(sel);
    const role = (k) => /musket/.test(k) ? 'matchlock musketeer' : /gunner/.test(k) ? 'gunner' : /archer/.test(k) ? 'archer' : /guard/.test(k) ? 'spearman' : k === 'sepoy' ? 'sepoy' : '';
    const sub = sel.type === 'soldier' ? (sel.a.co ? sel.a.co.name : `${role(sel.a.s.kind)} · ${this.app.world.eraDef?.year || ''}`) : sel.type === 'animal' ? (sel.a.tame ? 'tamed' : sel.a.captive ? 'captive' : 'at large') : sel.type === 'garrison' ? (sel.G.kind === 'building' ? `${sel.G.use} · holds about ${sel.G.cap * 5} men` : 'bastion') : sel.type;
    this.con.innerHTML = `<button class="x" data-close aria-label="Close">×</button><div id="portrait"></div><div><h3>${esc(title)}</h3><p class="sub">${esc(sub)}</p><p class="st">${esc(status)}</p>${limit ? `<p class="lim">${esc(limit)}</p>` : ''}</div>
      <div class="acts">${actions.map((b, i) => `<button type="button" data-a="${i}"${b.disabled ? ' disabled' : ''}${b.on ? ' class="on"' : ''}>${esc(b.label)}</button>`).join('')}${lore ? '<button type="button" data-lore>Learn more</button>' : ''}</div>`;
    this.con.hidden = false;
  }
  hideSelection() { this.sel = null; this.con.hidden = true; }
  showLore() { const L = loreFor(this.sel); if (!L) return; this.lore.innerHTML = `<h2>${esc(L.t)}</h2><p>${esc(L.b)}</p><button type="button">Close</button>`; this.lore.hidden = false; }
  // ---------------------------------------------------------------- alerts
  alert(key, text, x, y) {
    const now = this.app.t; if (this.alertT[key] && now - this.alertT[key] < 14) return;
    this.alertT[key] = now;
    const d = document.createElement('div'); d.textContent = text; this.alerts.prepend(d);
    setTimeout(() => d.remove(), 6500);
    while (this.alerts.children.length > 4) this.alerts.lastChild.remove();
    if (x != null) this.pings.push({ x, y, t: now });
    this.app.audio?.drum(2);
  }
  pingSVG(x0, y1, s) {
    const now = this.app.t; this.pings = this.pings.filter((p) => now - p.t < 6);
    return this.pings.map((p) => { const k = ((now - p.t) % 1.5) / 1.5; return `<circle class="ping" cx="${(p.x - x0).toFixed(1)}" cy="${(y1 - p.y).toFixed(1)}" r="${(s * (1 + k * 5)).toFixed(1)}" opacity="${(1 - k).toFixed(2)}"/>`; }).join('');
  }
  // ---------------------------------------------------------------- the live portrait, drawn after the main view
  renderPortrait(renderer, scene) {
    const sel = this.sel, el = !this.con.hidden && this.con.querySelector('#portrait'); if (!sel || !el) return;
    const src = sel.a || sel.g || null; let x, y, h, yaw = 0, size = 2;
    if (src) { x = src.x; y = src.y; h = src.h; yaw = src.yaw ?? (src.dir ? (90 - src.dir) * Math.PI / 180 : 0); size = sel.a ? (sel.a.K.animal ? (/elephant/.test(sel.a.s.kind) ? 4.5 : /horse|camel|cow|buffalo/.test(sel.a.s.kind) ? 3 : 1.2) : 2.1) : 3.5; }
    else if (sel.G) { x = sel.G.x; y = sel.G.y; h = sel.G.h; size = 9; }
    else if (sel.F) { x = sel.x; y = sel.y; h = sel.h; size = 7; }
    else return;
    const r = el.getBoundingClientRect(), c = renderer.domElement.getBoundingClientRect(), dpr = renderer.getPixelRatio();
    const vx = (r.left - c.left) * dpr, vy = (c.bottom - r.bottom) * dpr, vw = r.width * dpr, vh = r.height * dpr;
    if (vw < 4) return;
    const cam = this.portraitCam, fx = Math.sin(yaw), fz = Math.cos(yaw);
    const eye = new THREE.Vector3(x + fx * size * 1.8 + fz * size * 0.6, h + size * 0.75, -y + fz * size * 1.8 - fx * size * 0.6);
    cam.aspect = vw / vh; cam.position.copy(eye); cam.lookAt(x, h + size * 0.45, -y); cam.updateProjectionMatrix();
    const ac = renderer.autoClear; renderer.autoClear = false;
    renderer.setScissorTest(true); renderer.setScissor(vx / dpr, vy / dpr, vw / dpr, vh / dpr); renderer.setViewport(vx / dpr, vy / dpr, vw / dpr, vh / dpr);
    renderer.clearDepth(); renderer.render(scene, cam);
    renderer.setScissorTest(false); const s2 = renderer.getSize(new THREE.Vector2()); renderer.setViewport(0, 0, s2.x, s2.y); renderer.autoClear = ac;
  }
  update(dt) {
    this._t += dt; this._bt = (this._bt || 0) - dt;
    if (this._bt <= 0) { this._bt = 0.5; this.renderBar(); this.renderOrb(); }
    // keep the console clear of the battle bar
    const bb = document.querySelector('#battle-bar'); this.con.style.bottom = bb && !bb.hidden ? `calc(env(safe-area-inset-bottom, 0px) + ${84 + bb.offsetHeight + 60}px)` : '';
  }
}
