import {allocate,representativeCounts,representedMen,casualtyFraction} from './battle-strength.js';
// Battles in the manner of Zeus/Poseidon and Chariots of War: soldiers fight in companies. Select a company by its
// standard or any of its men, then click the ground to move it (it re-forms there, facing the way it went) or an enemy
// company to attack it. Companies keep a formation (line, column, square or open order), fire in volleys at their
// weapon's range, close to hand-to-hand, lose heart as they lose men, and break and run when morale fails.
// Scale: each figure stands for five men, so a company of 12 figures is a company of about 60.
import * as THREE from 'three';
import { DEG, TAU, clamp, pointInPoly } from '../core/geom.js';

// weapons of the period. Matchlock (toradar) muskets: effective to about 80 m, a shot every 25–30 s; bows to about
// 120 m, quicker but less deadly; spears and swords hand-to-hand. Hit rates are per figure per volley.
export const ARMS = {
  musket: { label: 'Matchlock musketeers', range: 80, reload: 26, hit: 0.13, melee: 0.025, speed: 1.25 },
  bow: { label: 'Archers', range: 120, reload: 9, hit: 0.06, melee: 0.02, speed: 1.3 },
  spear: { label: 'Spearmen and swordsmen', range: 0, reload: 0, hit: 0, melee: 0.07, speed: 1.4 },
};
const FORMATIONS = { line: 'Line', column: 'Column', square: 'Square', open: 'Open order' };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const CSS = `
#battle-bar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 70px);display:flex;gap:6px;z-index:22;flex-wrap:wrap;justify-content:center;max-width:calc(100vw - 340px)}
#battle-bar[hidden]{display:none}
.co-card{min-width:132px;background:var(--panel);border:1px solid var(--rule);border-radius:4px;padding:5px 8px;font:500 12px var(--font-body);color:var(--ink);cursor:pointer;text-align:left}
.co-card.sel{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 35%,transparent)}
.co-card.enemy{cursor:default;opacity:.85}
.co-card b{display:block;font:600 12px var(--font-body);margin-bottom:2px}
.co-card .bar{height:4px;background:var(--rule);border-radius:2px;margin-top:3px;overflow:hidden}.co-card .bar i{display:block;height:100%;background:#2f6b45}
.co-card.enemy .bar i{background:#c0501e}.co-card .st{font-size:11px;color:var(--muted)}
#battle-orders{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 128px);display:flex;gap:5px;z-index:22;background:var(--panel);padding:6px 8px;border-radius:5px;box-shadow:0 6px 18px rgba(0,0,0,.15)}
#battle-orders[hidden]{display:none}
#battle-orders button{border:1px solid var(--rule);background:transparent;color:var(--ink);border-radius:3px;padding:4px 8px;font:500 12px var(--font-body);cursor:pointer}
#battle-orders button[aria-pressed="true"]{border-color:var(--accent);color:var(--accent)}
#battle-brief{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(460px,calc(100vw - 32px));background:var(--paper);background-image:var(--paper-tex,none);color:var(--ink);padding:20px 24px;border-radius:6px;box-shadow:0 18px 50px rgba(0,0,0,.25);z-index:40}
#battle-brief[hidden]{display:none}
#battle-brief h2{margin:0 0 6px;font:400 26px/1.1 var(--font-serif)}#battle-brief p{font:15px/1.45 var(--font-serif);margin:8px 0}
#battle-brief .note{font:italic 13px/1.4 var(--font-serif);color:var(--muted)}
#battle-brief button{margin:10px 8px 0 0;border:1px solid var(--ink);background:transparent;color:var(--ink);padding:6px 14px;font:500 14px var(--font-body);cursor:pointer;border-radius:3px}
#btn-battle[hidden]{display:none}
.standard{position:fixed;left:0;top:0;pointer-events:auto;cursor:pointer;z-index:13;transform-origin:50% 100%}
.standard i{display:block;width:3px;height:26px;background:#3a2a1a;margin:0 auto}
.standard b{position:absolute;left:50%;top:0;min-width:22px;padding:1px 4px;font:600 10px var(--font-data);color:#fff;white-space:nowrap}
.standard.enemy b{background:#d36a1a}.standard.own b{background:#2f6b45}.standard.sel b{outline:2px solid #ffd27a}
`;

export class Battle {
  constructor(app) {
    this.app = app; this.active = false; this.companies = []; this.sel = null;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.bar = document.createElement('div'); this.bar.id = 'battle-bar'; this.bar.hidden = true; document.body.appendChild(this.bar);
    this.orders = document.createElement('div'); this.orders.id = 'battle-orders'; this.orders.hidden = true; document.body.appendChild(this.orders);
    this.brief = document.createElement('section'); this.brief.id = 'battle-brief'; this.brief.hidden = true; document.body.appendChild(this.brief);
    this.flags = document.createElement('div'); document.body.appendChild(this.flags);
    for (const el of [this.bar, this.orders, this.brief, this.flags]) el.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.bar.addEventListener('click', (e) => { const c = e.target.closest('[data-co]'); if (c) this.select(this.companies[+c.dataset.co]); });
    this.flags.addEventListener('click', (e) => { const c = e.target.closest('[data-co]'); if (!c) return; const co = this.companies[+c.dataset.co]; if (co.side === 'own') this.select(co); else if (this.sel) this.attack(this.sel, co); });
    this.orders.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b || !this.sel) return; const c = this.sel;
      if (b.dataset.f) { c.formation = b.dataset.f; this._form(c, c.cx, c.cy, c.facing); }
      if (b.dataset.o === 'hold') { c.order = { type: 'hold' }; this._form(c, c.cx, c.cy, c.facing); }
      if (b.dataset.o === 'charge') { const t = this._nearestEnemy(c); if (t) { c.order = { type: 'attack', target: t, charge: true }; } }
      if (b.dataset.o === 'back') { this.move(c, c.home[0], c.home[1]); }
      if (b.dataset.o === 'scale') this.scale(c);
      if (b.dataset.o === 'man') this.man(c);
      if (b.dataset.o === 'fire') { c.fireAtWill = !c.fireAtWill; this.app.ui.toast(`${c.name}: ${c.fireAtWill ? 'fire at will' : 'hold your fire'}`); }
      this._renderOrders(); });
  }
  // ---------------------------------------------------------------- scenario
  onLoad(W) {
    this.end(true);
    const B = W.def.battles?.[W.era]; this.scns = B ? (Array.isArray(B) ? B : [B]) : []; this.scn = this.scns[0] || null;
    const btn = document.querySelector('#btn-battle'); if (btn) btn.hidden = !this.scn;
  }
  showBrief() {
    const S = this.scn; if (!S) return;
    const pick = !this.app.state.campaignPending && this.scns.length > 1 ? `<p>${this.scns.map((q, i) => `<button type="button" data-pick="${i}"${q === S ? ' aria-pressed="true" style="border-width:2px"' : ''}>${esc(q.side || q.title)}</button>`).join(' ')}</p>` : '';
    this.brief.innerHTML = pick + `<h2>${esc(S.title)}</h2><p>${esc(S.text)}</p><p class="note">${esc(S.note)}</p><p class="note">Select a company by its standard or one of its men, then click the ground to move it or an enemy to attack. ${this.app.state.campaignPending ? 'Company strength reflects the campaign forces; each figure represents a share of its company.' : 'Each figure stands for about five men.'}</p><button type="button" data-go>Begin</button><button type="button" data-x>Not now</button>`;
    this.brief.hidden = false;
    this.brief.onclick = (e) => { if (e.target.dataset.pick != null) { this.scn = this.scns[+e.target.dataset.pick]; this.showBrief(); return; } if (e.target.dataset.go != null) { this.brief.hidden = true; this.start(); } if (e.target.dataset.x != null) { this.brief.hidden = true; this.app.campaign?.cancelBattle(); } };
  }
  choose(side) { const q = this.scns.find((x) => x.playerSide === side); if (q) this.scn = q;
  }
  start() {
    const W = this.app.world, S = this.scn, P = this.app.people; if (!S) return;
    this.active = true; this.t = 0; this.companies = []; this.result = null; this.alarm = !S.surprise; this.ladderAnim = [];
    // the scenario's hour, season and weather (a night escalade in the rains, say)
    for (const id of S.ladders || []) { const L = W.ladders[id]; if (L) { L.up = true; L.hidden = false; const m = this.app.view.ladders?.[id]; if (m) { m.visible = true; m.rotation.set(0, 0, 0); } } }
    const C = this.app.climate; if (S.hour != null) { C.setHour(S.hour); } if (S.season) C.setSeason(S.season); if (S.weather) C.setWeather(S.weather);
    // the soldiers dressing the scene stand aside: the companies fight
    if (S.clearSoldiers) for (const a of P.agents.slice()) if (!a.co && S.clearSoldiers.test(a.s.kind)) P.despawn(a);
    const pending=this.app.state.campaignPending;
    for (const [side, list] of [['own', S.own], ['enemy', S.enemy]]) {
      const budget=pending ? (side==='own' ? pending.men : pending.garrison) : null;
      const counts=budget===null ? list.map(d=>d.n) : representativeCounts(list,budget);
      const made=[];
      for (const [index,d] of list.entries()) {
      const c = { asleep: !!d.asleep, sentry: !!d.sentry, side, name: d.name, arms: ARMS[d.arms], armsKey: d.arms, formation: d.formation || 'line', facing: d.facing ?? 0, cx: d.at[0], cy: d.at[1], h: d.h, members: [], reload: Math.random() * 6, morale: d.morale ?? 70, order: { type: 'hold' }, home: d.retreat || d.at, max: d.n, state: 'ready', idx: this.companies.length };
      for (let i = 0; i < counts[index]; i++) {
        const a = P.spawnAgent(d.kind, d.at[0] + (Math.random() - 0.5) * 4, d.at[1] + (Math.random() - 0.5) * 4, d.h ?? W.ground(d.at[0], d.at[1]), { spec: { mode: 'idle' } });
        if (!a) break;
        a.ctrl = { mode: 'company', co: c }; a.co = c; c.members.push(a);
      }
      c.max=c.members.length;
      if(c.max) { this._form(c,c.cx,c.cy,c.facing); this.companies.push(c); made.push(c); }
      }
      const strengths=allocate(budget===null ? made.reduce((n,c)=>n+c.max*5,0) : budget,made.map(c=>c.max));
      made.forEach((c,i)=>{c.strength=strengths[i]});
    }
    if(!this.companies.some(c=>c.side==='own') || !this.companies.some(c=>c.side==='enemy')) {
      for(const c of this.companies) for(const a of c.members) P.despawn(a);
      this.companies=[];this.active=false;this.app.campaign?.cancelBattle();
      this.app.ui.toast('The encounter could not create both forces. Return to the campaign and resolve it there.');
      return;
    }
    // existing soldiers of the garrison stand back while the companies fight
    this.flags.innerHTML = this.companies.map((c, i) => `<div class="standard ${c.side}" data-co="${i}"><b>${esc(c.name.split(' ')[0])}</b><i></i></div>`).join('');
    this.bar.hidden = false; this.app.ui.toast(S.startToast || 'The battle begins');
    this.select(this.companies.find((c) => c.side === 'own'));
  }
  end(silent) {
    if (!this.active) return;
    this.active = false; this.bar.hidden = true; this.orders.hidden = true; this.flags.innerHTML = '';
    for (const c of this.companies) for (const a of c.members) if (!silent) { a.ctrl = a.dead ? a.ctrl : null; }
  }
  // ---------------------------------------------------------------- orders
  select(c) { if (!c || c.side !== 'own' || !c.members.some((a) => !a.dead)) return; this.sel = c; this._renderOrders(); this._renderBar(); }
  move(c, x, y) { const dir = Math.atan2(y - c.cy, x - c.cx) / DEG; c.order = { type: 'move' }; this._form(c, x, y, Math.hypot(x - c.cx, y - c.cy) > 3 ? dir : c.facing); }
  attack(c, t) { c.order = { type: 'attack', target: t }; this.app.ui.toast(`${c.name}: attack the ${t.name}`); }
  click(cx, cy) {
    if (!this.active) return false;
    // an enemy figure under the cursor: attack it; one of ours: select its company; open ground: move there
    let best = null, bd = 26;
    for (const c of this.companies) for (const a of c.members) { if (a.dead) continue; const [sx, sy, z] = this.app.play._screen(a.x, a.y, a.h + 1); if (z > 1) continue; const d = Math.hypot(sx - cx, sy - cy); if (d < bd) { bd = d; best = c; } }
    if (best && best.side === 'own') { this.select(best); return true; }
    if (best && best.side === 'enemy' && this.sel) { this.attack(this.sel, best); return true; }
    if (this.sel) { const hit = this.app.play._groundHit(cx, cy); if (hit) { this.move(this.sel, hit[0], hit[1]); return true; } }
    return false;
  }
  // ---------------------------------------------------------------- formations: slots around the centre, facing `facing`
  _slots(c, n) {
    const out = [], f = c.formation;
    if (f === 'column') { const w = 3; for (let i = 0; i < n; i++) out.push([((i % w) - (w - 1) / 2) * 1.1, -Math.floor(i / w) * 1.3]); }
    else if (f === 'square') { const side = Math.max(2, Math.ceil(n / 4)), L = side * 1.2; for (let i = 0; i < n; i++) { const s = i % 4, k = Math.floor(i / 4) - (side - 1) / 2; const p = [[k * 1.2, L / 2], [L / 2, -k * 1.2], [-k * 1.2, -L / 2], [-L / 2, k * 1.2]][s]; out.push(p); } }
    else { const sp = f === 'open' ? 2.6 : 1.1, ranks = f === 'open' ? 2 : 2, per = Math.ceil(n / ranks); for (let i = 0; i < n; i++) { const r = Math.floor(i / per), k = i % per; out.push([(k - (per - 1) / 2) * sp + (f === 'open' && r ? sp / 2 : 0), -r * (f === 'open' ? 2.4 : 1.4)]); } }
    return out;
  }
  _form(c, x, y, facing) {
    c.cx = x; c.cy = y; c.facing = facing;
    const live = c.members.filter((a) => !a.dead), S = this._slots(c, live.length), a0 = facing * DEG;
    const fx = Math.cos(a0), fy = Math.sin(a0), rx = Math.sin(a0), ry = -Math.cos(a0);
    live.forEach((a, i) => { const [u, v] = S[i]; a.ctrl = { mode: 'company', co: c, to: [x + rx * u + fx * v, y + ry * u + fy * v], re: 0 }; a.path = null; });
  }
  // per-figure control (called through Play.ctrl)
  ctrl(a, dt) {
    const c = a.ctrl, W = this.app.world, nav = W.nav;
    if (a.dead) { a.lie = true; return 'place'; }
    if (c.route) return this._routeStep(a, c, dt);
    if (c.flee) { if (!a.path) { const n = nav.nearest(c.flee[0], c.flee[1], a.h, 8, 4); if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; if (a.path && a.path.length < 2) a.path = null; } } a.speedMul = 1.8; return a.path ? 'path' : 'place'; }
    const [tx, ty] = c.to, d = Math.hypot(tx - a.x, ty - a.y);
    if (d < 0.7) { a.path = null; a.yaw = Math.atan2(Math.cos(c.co.facing * DEG), -Math.sin(c.co.facing * DEG)); a.walkAnim = false; return 'place'; }
    c.re -= dt;
    if (!a.path && c.re <= 0) {
      c.re = 1.5;
      const n = nav.nearest(tx, ty, c.co.h ?? a.h, 4, 3);
      if (n >= 0) { const [x, y] = nav.nodeXY(n); a.path = nav.findPath([a.x, a.y, a.h], [x, y, nav.H[n]]); a.pi = 1; if (a.path && a.path.length < 2) a.path = null; if (!a.path) { c.to = [a.x, a.y]; } }
    }
    a.speedMul = (c.co.order?.charge ? 1.9 : 1.15) * (c.co.arms.speed / 1.25);
    return a.path ? 'path' : 'place';
  }
  // ---------------------------------------------------------------- climbing: walk to each ladder, go up it, on to the next
  _routeStep(a, c, dt) {
    if (c.delay > 0) { c.delay -= dt; a.walkAnim = false; return 'place'; }
    const wp = c.route[c.ri]; if (!wp) { c.route = null; return 'place'; }
    // a ladder thrown down under him: he falls
    if (wp.ladder != null && !this.app.world.ladders[wp.ladder].up && c.onLadder === wp.ladder) { a.dead = true; a.lie = true; a.h = wp.fromH ?? a.h; c.co.morale -= 6; return 'place'; }
    if (wp.ladder != null && !this.app.world.ladders[wp.ladder].up) { a.walkAnim = false; return 'place'; } // waits at the foot of a fallen ladder
    const dx = wp.x - a.x, dy = wp.y - a.y, dh = wp.h - a.h, d = Math.hypot(dx, dy, dh);
    const sp = (wp.ladder != null ? 0.55 : 1.4) * (c.co.order?.charge ? 1.3 : 1);
    c.onLadder = wp.ladder != null ? wp.ladder : null;
    if (d <= sp * dt) { a.x = wp.x; a.y = wp.y; a.h = wp.h; c.ri++; if (c.ri >= c.route.length) { c.route = null; c.onLadder = null; this._form(c.co, c.co.cx, c.co.cy, c.co.facing); } return 'place'; }
    a.x += dx / d * sp * dt; a.y += dy / d * sp * dt; a.h += dh / d * sp * dt;
    if (Math.hypot(dx, dy) > 0.05) a.yaw = Math.atan2(dx, -dy);
    a.walkAnim = true; a.path = null;
    return 'place';
  }
  // send a company up the scenario's ladder chain, one man behind another; on top it re-forms where the climb ends
  scale(c) {
    const S = this.scn, W = this.app.world; if (!S?.climb) return;
    const L = W.ladders, live = this._live(c), end = S.climbEnd || W.escTop || (Array.isArray(S.climbEnds) ? S.climbEnds[0] : null);
    if (!end) return;
    live.forEach((a, i) => {
      const route = [];
      for (const step of S.climb) {
        const ids = Array.isArray(step) ? step : [step], id = ids[i % ids.length], ld = L[id];
        route.push({ x: ld.foot[0], y: ld.foot[1], h: ld.foot[2] });
        route.push({ x: ld.top[0], y: ld.top[1], h: ld.top[2], ladder: id, fromH: ld.foot[2] });
      }
      const e2 = S.climbEnds ? S.climbEnds[i % S.climbEnds.length] : end;
      route.push({ x: e2[0] + (Math.random() - 0.5) * 2, y: e2[1] + (Math.random() - 0.5) * 2, h: e2[2] });
      a.ctrl = { mode: 'company', co: c, route, ri: 0, delay: i * 2.2, to: [end[0], end[1]] };
      a.path = null;
    });
    c.cx = end[0]; c.cy = end[1]; c.h = end[2]; c.order = { type: 'scale' };
    this.app.ui.toast(`${c.name}: up the ladders`);
  }
  // spread a company along the nearest stretch of wall-walk, facing out
  man(c) {
    const W = this.app.world, [x, y] = this._centre(c); let best = null, bd = Infinity;
    for (const w of W.walls) { const s = W.wallS(w, x, y), f = W.wallFrame(w, s), d = Math.hypot(f.x - x, f.y - y); if (d < bd) { bd = d; best = { w, s }; } }
    if (!best) return;
    const live = this._live(c), n = live.length, sp = 1.7;
    live.forEach((a, i) => {
      const f = W.wallFrame(best.w, best.s + (i - (n - 1) / 2) * sp), h = W.wallTopAt(best.w, f.x, f.y), ix = f.x - f.ox * 0.6, iy = f.y - f.oy * 0.6;
      a.ctrl = { mode: 'company', co: c, to: [ix, iy], re: 0 }; a.path = null;
      void h;
    });
    const f0 = W.wallFrame(best.w, best.s); c.cx = f0.x; c.cy = f0.y; c.facing = Math.atan2(f0.oy, f0.ox) / DEG; c.order = { type: 'man' };
    this.app.ui.toast(`${c.name}: manning the wall`);
  }
  // ladders thrown down: the pole pushed off the wall, the ladder falls away and the men on it with it
  _throwDown(id) {
    const W = this.app.world, L = W.ladders[id]; if (!L.up) return;
    L.up = false;
    const mesh = this.app.view.ladders?.[id]; if (mesh) this.ladderAnim.push({ mesh, t: 0 });
    const [x, y] = L.top; this.app.chrome?.alert('ladder' + id, 'A ladder is thrown down!', x, y);
    this.app.audio?.thud(x, y);
  }
  // ---------------------------------------------------------------- the fight, a tick at a time
  _live(c) { return c.members.filter((a) => !a.dead); }
  _centre(c) { const L = this._live(c); if (!L.length) return [c.cx, c.cy]; return [L.reduce((s, a) => s + a.x, 0) / L.length, L.reduce((s, a) => s + a.y, 0) / L.length]; }
  _nearestEnemy(c, max = 1e9) { const [x, y] = this._centre(c); let best = null, bd = max; for (const o of this.companies) { if (o.side === c.side || o.state === 'routed' || !this._live(o).length) continue; const [ox, oy] = this._centre(o), d = Math.hypot(ox - x, oy - y); if (d < bd) { bd = d; best = o; } } return best; }
  _kill(t, n, from) {
    const L = this._live(t);
    for (let k = 0; k < n && L.length; k++) {
      const a = L.splice(Math.floor(Math.random() * L.length), 1)[0];
      a.dead = true; a.lie = true; a.path = null; a.yaw += (Math.random() - 0.5) * 1.5;
      t.morale -= 7 + (from === 'melee' ? 3 : 0);
    }
    if (n && t.side === 'own') { const [cx, cy] = this._centre(t); this.app.chrome?.alert('co' + t.idx, `${t.name}: under attack, ${Math.round(representedMen(t,n))} down`, cx, cy); }
    if (n) for (const o of this.companies) if (o.side === t.side && o !== t) { const [ax, ay] = this._centre(o), [bx, by] = this._centre(t); if (Math.hypot(ax - bx, ay - by) < 40) o.morale -= n * 1.2; } // neighbours see it too
  }
  onImpact(x, y) { if (!this.active) return; for (const c of this.companies) { const hit = this._live(c).filter((a) => Math.hypot(a.x - x, a.y - y) < 4.5).length; if (hit) this._kill(c, Math.min(hit, 1 + (Math.random() * 3 | 0)), 'shot'); } }
  update(dt) {
    if (!this.active) return;
    const W = this.app.world;
    this.t += dt; this._tick = (this._tick || 0) + dt;
    const fx = this.app.play.fx;
    if (this._tick >= 0.5) {
      const step = this._tick; this._tick = 0;
      this._siegeTick(step);
      for (const c of this.companies) {
        const L = this._live(c);
        if (!L.length || c.state === 'routed') continue;
        if (c.asleep) { if (c.wakeT != null) { c.wakeT -= step; if (c.wakeT <= 0) { c.asleep = false; this._form(c, c.cx, c.cy, c.facing); } } continue; }
        // morale: recovers slowly out of contact, breaks below 22 or when two thirds are down
        c.morale = Math.min(c.side === 'own' ? 85 : 80, c.morale + step * 0.6);
        if (c.morale < 22 || L.length < c.max / 3) { c.state = 'routed'; for (const a of L) { a.ctrl = { mode: 'company', co: c, flee: c.home, to: c.home }; a.path = null; } this.app.ui.toast(`The ${c.name} break and run`); continue; }
        // the enemy decides for itself: make for the nearest company, else for the objective
        if (c.side === 'enemy' && (c.order.type !== 'attack' || !this._live(c.order.target).length || c.order.target.state === 'routed')) {
          const t = this._nearestEnemy(c, 160);
          if (t) c.order = { type: 'attack', target: t }; else if (this.scn.objective && c.order.type !== 'move') this.move(c, this.scn.objective[0], this.scn.objective[1]);
        }
        let t = c.order.type === 'attack' ? c.order.target : this._nearestEnemy(c, Math.max(c.arms.range, 14));
        if (t && (!this._live(t).length || t.state === 'routed')) { t = null; if (c.order.type === 'attack') c.order = { type: 'hold' }; }
        if (!t) continue;
        const [x, y] = this._centre(c), [tx, ty] = this._centre(t), d = Math.hypot(tx - x, ty - y);
        const melee = d < 6 + (c.formation === 'open' ? 3 : 0);
        if (c.order.type === 'attack' && !melee) {
          // close to the weapon's range (or to contact for the spears), re-forming facing the enemy
          const want = c.arms.range && !c.order.charge ? c.arms.range * 0.75 : 2;
          if (d > want + 4 && (!c._last || Math.hypot(c._last[0] - tx, c._last[1] - ty) > 5 || this.t - (c._lt || 0) > 6)) {
            const k = (d - want) / d; c._last = [tx, ty]; c._lt = this.t;
            this._form(c, x + (tx - x) * k, y + (ty - y) * k, Math.atan2(ty - y, tx - x) / DEG);
          }
        }
        if (melee) {
          // hand to hand: both sides lose men, the better armed for close work less
          const n = L.length, m = this._live(t).length, rate = c.arms.melee * step * (c.order.charge ? 1.6 : 1) * (t.formation === 'square' ? 0.7 : 1);
          let k = 0; for (let i = 0; i < n; i++) if (Math.random() < rate * Math.min(1.6, n / Math.max(1, m))) k++;
          if (k) this._kill(t, k, 'melee');
          continue;
        }
        c.reload -= step;
        // a surprise attack holds its fire until the alarm or the order to fire (blades are silent)
        const quiet = this.scn.surprise && !this.alarm && c.side === 'own' && !c.fireAtWill;
        if (!quiet && c.arms.range && d <= c.arms.range && c.reload <= 0) {
          // a volley: every man standing in the ranks fires; fewer hit at long range, fewer still against men on the walls
          const shooters = L.filter((a) => !a.path).length; if (!shooters) continue;
          c.reload = c.arms.reload * (0.9 + Math.random() * 0.2);
          const cover = this._live(t).some((a) => a.h > W0(this.app) + 1.5) && t.side !== c.side ? 0.55 : 1;
          const p = c.arms.hit * (1 - 0.6 * d / c.arms.range) * cover * (t.formation === 'open' ? 0.6 : 1);
          let k = 0; for (let i = 0; i < shooters; i++) if (Math.random() < p) k++;
          this._kill(t, k, 'shot');
          t.morale -= 2;
          // smoke and flash along the rank
          this.app.audio?.musket(x, y, Math.min(5, 1 + (shooters / 3) | 0));
          if (!this.alarm) this._raise(x, y);
          if (c.armsKey === 'musket') L.filter((a, i) => i % 3 === 0).slice(0, 6).forEach((a) => { const ang = Math.atan2(ty - a.y, tx - a.x); fx.burst({ x: a.x + Math.cos(ang) * 0.6, y: a.y + Math.sin(ang) * 0.6, h: a.h + 1.4, n: 3, up: [0, 0.3], out: [2, 5], dir: [Math.cos(ang), Math.sin(ang)], side: 0.6, life: [0.06, 0.14], size: [0.5, 0.2], color: '#ffd27a', alpha: 1, flash: true }); fx.burst({ x: a.x + Math.cos(ang), y: a.y + Math.sin(ang), h: a.h + 1.4, n: 8, up: [0.1, 0.5], out: [0.5, 3], dir: [Math.cos(ang), Math.sin(ang)], side: 1, life: [2.5, 5], size: [0.5, 2.6], color: '#ebe8e1', alpha: 0.4, drag: 1, g: -0.05, wind: [0.4, 0.15] }); });
        }
      }
      // garrisons in buildings and towers fire from loopholes and windows at enemies within about 70 m
      for (const G of W.garrisons) {
        if (!G.inside?.length) continue;
        G.reload = (G.reload ?? Math.random() * 10) - step; if (G.reload > 0) continue;
        let t = null, bd = 70;
        for (const o of this.companies) { if (o.side !== 'enemy' || o.state === 'routed') continue; const [ox, oy] = this._centre(o), d = Math.hypot(ox - G.x, oy - G.y); if (d < bd && this._live(o).length) { bd = d; t = o; } }
        if (!t) continue;
        G.reload = 24 + Math.random() * 4;
        const p = 0.1 * (1 - 0.6 * bd / 70); let k = 0; for (let i = 0; i < G.inside.length; i++) if (Math.random() < p) k++;
        this._kill(t, k, 'shot'); t.morale -= 1.5;
        const [tx, ty] = this._centre(t), ang = Math.atan2(ty - G.y, tx - G.x);
        fx.burst({ x: G.x + Math.cos(ang), y: G.y + Math.sin(ang), h: G.h + 2.5, n: 10, up: [0.1, 0.6], out: [0.5, 3], dir: [Math.cos(ang), Math.sin(ang)], side: 1.2, life: [2, 4.5], size: [0.6, 2.6], color: '#ebe8e1', alpha: 0.4, drag: 1, g: -0.05, wind: [0.4, 0.15] });
      }
      // outcome
      const alive = (s) => this.companies.filter((c) => c.side === s && c.state !== 'routed' && this._live(c).length);
      if (!this.result) {
        if (!alive('enemy').length) { this.result = 'won'; this._finish(this.scn.won); }
        else if (!alive('own').length || (this.scn.objectivePoly && alive('enemy').some((c) => pointInPoly(...this._centre(c), this.scn.objectivePoly)))) { this.result = 'lost'; this._finish(this.scn.lost); }
      }
      this._renderBar();
    }
    for (const A of this.ladderAnim) { A.t += dt; const m = A.mesh; m.setRotationFromAxisAngle(m.userData.axis, -Math.min(1.5, A.t * A.t * 1.6)); if (A.t > 2.2) m.visible = false; }
    if (!this.orders.hidden) this.orders.style.bottom = `calc(env(safe-area-inset-bottom, 0px) + ${70 + this.bar.getBoundingClientRect().height + 16}px)`;
    // standards over each company
    [...this.flags.children].forEach((el, i) => {
      const c = this.companies[i], L = this._live(c);
      if (!L.length || c.state === 'routed') { el.hidden = true; return; }
      const [x, y] = this._centre(c), h = L.reduce((s, a) => s + a.h, 0) / L.length;
      const [sx, sy, z] = this.app.play._screen(x, y, h + 2.6 * (this.app.people.vis || 1));
      el.hidden = z > 1; el.style.transform = `translate(${(sx - 2).toFixed(0)}px, ${(sy - 26).toFixed(0)}px)`;
      el.classList.toggle('sel', c === this.sel);
      const t = `${Math.round(representedMen(c,L.length))}`; const b = el.querySelector('b'); if (b.textContent !== t) b.textContent = t;
    });
  }
  _siegeTick(step) {
    const W = this.app.world, night = this.app.climate?.state?.night ?? 0;
    // the alarm: any attacker seen by an awake defender (closer at night), or the first shot fired
    if (!this.alarm) {
      // a sentry sees what is close and in the open: about 8 m on a dark night (less in rain), 35 m by day; each
      // second of sighting is a chance, not a certainty; men on a ladder below the parapet are hard to see
      const rain = this.app.climate?.cur?.rain ?? 0, R = (night > 0.5 ? 8 : 35) * (1 - 0.35 * rain);
      outer: for (const o of this.companies) if (o.side === 'own') for (const a of this._live(o)) {
        const climbing = a.ctrl?.onLadder != null;
        for (const e of this.companies) if (e.side === 'enemy' && !e.asleep && e.state !== 'routed') for (const b of this._live(e)) {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < R && Math.abs(a.h - b.h) < 6 && Math.random() < (climbing ? 0.08 : 0.3) * step) { this._raise(b.x, b.y); break outer; }
        }
      }
    }
    // awake defenders near the top of a ladder push it off the wall
    for (const L of W.ladders) {
      if (!L.up) continue;
      let n = 0; for (const e of this.companies) if (e.side === 'enemy' && !e.asleep && e.state !== 'routed') for (const b of this._live(e)) if (Math.hypot(b.x - L.top[0], b.y - L.top[1]) < 5 && Math.abs(b.h - L.top[2]) < 3) n++;
      if (n && Math.random() < Math.min(0.35, 0.05 * n * step)) this._throwDown(L.id);
    }
    // the objective of an assault: hold it with no awake enemy near
    const S = this.scn;
    if (S.holdPoly && !this.result) for (const o of this.companies) if (o.side === 'own' && o.state !== 'routed' && this._live(o).length && pointInPoly(...this._centre(o), S.holdPoly)) {
      const [x, y] = this._centre(o);
      const near = this.companies.some((e) => e.side === 'enemy' && !e.asleep && e.state !== 'routed' && this._live(e).some((b) => Math.hypot(b.x - x, b.y - y) < 25));
      if (!near) { this.result = 'won'; this._finish(S.won); break; }
    }
  }
  _raise(x, y) {
    this.alarm = true;
    for (const c of this.companies) if (c.asleep) c.wakeT = 12 + Math.random() * 25;
    this.app.chrome?.alert('alarm', this.scn.alarmText || 'The alarm is raised!', x, y);
    this.app.audio?.drum(5);
  }
  _finish(msg) {
    // a battle fought from the campaign reports back: losses on each side as fractions of the men engaged
    if (this.app.state.campaignPending) {
      const frac = side => casualtyFraction(this.companies,side,c=>this._live(c).length);
      const report = [this.result, frac('own'), frac('enemy'), this.app.state.campaignPending.token];
      setTimeout(() => this.app.campaign?.report(...report), 0);
    } this.app.ui.toast(msg); this.brief.innerHTML = `<h2>${esc(this.result === 'won' ? this.scn.wonTitle || 'Victory' : this.scn.lostTitle || 'Defeat')}</h2><p>${esc(msg)}</p><button type="button" data-x>Close</button>`; this.brief.hidden = false; this.brief.onclick = (e) => { if (e.target.dataset.x != null) { this.brief.hidden = true; this.end(); } }; }
  _renderBar() {
    this.bar.innerHTML = this.companies.map((c, i) => { const n = this._live(c).length; return `<div class="co-card ${c.side === 'enemy' ? 'enemy' : ''} ${c === this.sel ? 'sel' : ''}" data-co="${c.side === 'own' ? i : ''}"><b>${esc(c.name)}</b><span class="st">${Math.round(representedMen(c,n))} of ${c.strength} · ${c.state === 'routed' ? 'routed' : c.asleep ? (c.wakeT != null ? 'turning out' : 'asleep') : c.order.type === 'scale' ? 'climbing' : c.order.type === 'man' ? 'on the wall' : c.order.type === 'attack' ? 'attacking' : c.order.type === 'move' ? 'moving' : 'holding'}</span><div class="bar"><i style="width:${Math.max(0, Math.round(c.morale))}%"></i></div></div>`; }).join('');
  }
  _renderOrders() {
    const c = this.sel; if (!c) { this.orders.hidden = true; return; }
    this.orders.hidden = false;
    // sit just above the company cards, however many rows they take
    this.orders.style.bottom = `calc(env(safe-area-inset-bottom, 0px) + ${70 + Math.max(this.bar.offsetHeight, this.bar.scrollHeight, 60) + 18}px)`;
    this.orders.innerHTML = Object.entries(FORMATIONS).map(([k, l]) => `<button type="button" data-f="${k}" aria-pressed="${c.formation === k}">${l}</button>`).join('') + `<button type="button" data-o="hold">Hold</button><button type="button" data-o="charge">Charge</button><button type="button" data-o="back">Fall back</button>` +
      (this.scn?.climb ? '<button type="button" data-o="scale">Scale the walls</button>' : '') + '<button type="button" data-o="man">Man the wall</button>' +
      (this.scn?.surprise && !this.alarm ? `<button type="button" data-o="fire" aria-pressed="${!!c.fireAtWill}">${c.fireAtWill ? 'Fire at will' : 'Holding fire'}</button>` : '');
  }
}
function W0(app) { return app.world.seaLevel ?? app.world.ground(app.cam.target.x, -app.cam.target.z); }
