// Farming and husbandry as a working economy. Fields follow the crop calendar of the region: ploughed and sown at
// the right season, growing with the rains (or with water drawn from a well), weeded and harvested by the farmers
// working them, and gathered into the granary. Pens tended by a keeper give milk, eggs and wool to the stores.
// The garrison and the people of the fort eat from the stores, about a seer (0.9 kg) of grain a man a day.
// Time is counted in calendar days, which pass only while time passes (see Sky & weather).
import * as THREE from 'three';
import { pointInPoly } from '../core/geom.js';
import { Climate } from './climate.js';

// crops. season: how fast it grows in each season (0 = not grown then); days: sowing to ripeness;
// yield: kilograms a hectare at a fair harvest (late-18th-century estimates for unirrigated land, irrigated gardens)
export const CROPS = {
  millet: { label: 'Finger millet (nachni)', short: 'nachni is',  what: 'grain', days: 110, yield: 650, sow: ['monsoon'], season: { monsoon: 1, autumn: 0.9, winter: 0, summer: 0 }, ripe: [0.78, 0.62, 0.38],
    note: 'Sown with the first rains in June and cut in October; the hill grain of the Konkan and the Deccan.' },
  bajra: { label: 'Bajra (pearl millet)', short: 'bajra is', what: 'grain', days: 85, yield: 450, sow: ['monsoon'], season: { monsoon: 1, autumn: 0.9, winter: 0, summer: 0 }, ripe: [0.8, 0.68, 0.42],
    note: 'The rain-fed grain of the Thar and Marwar, sown when the monsoon breaks in July and cut in September or October.' },
  jowar: { label: 'Jowar (sorghum)', short: 'jowar is', what: 'grain', days: 110, yield: 600, sow: ['monsoon'], season: { monsoon: 1, autumn: 0.9, winter: 0.3, summer: 0 }, ripe: [0.78, 0.6, 0.4],
    note: 'The staple of the Deccan: kharif jowar sown in June or July and harvested after the rains.' },
  wheat: { label: 'Wheat', short: 'wheat is', what: 'grain', days: 120, yield: 750, sow: ['autumn', 'winter'], season: { monsoon: 0, autumn: 0.8, winter: 1, summer: 0.4 }, irrigated: true, ripe: [0.85, 0.74, 0.45],
    note: 'A rabi crop: sown after the rains in October or November on watered land, cut in March and April.' },
  rice: { label: 'Paddy', short: 'paddy is', what: 'grain', days: 140, yield: 1100, sow: ['monsoon'], season: { monsoon: 1, autumn: 1, winter: 0.5, summer: 0 }, ripe: [0.8, 0.7, 0.42],
    note: 'Transplanted into flooded fields as the rains come and harvested from November to January.' },
  veg: { label: 'Vegetables (kitchen garden)', short: 'vegetables are',  what: 'produce', days: 80, yield: 7000, sow: ['monsoon', 'autumn', 'winter'], season: { monsoon: 1, autumn: 1, winter: 0.9, summer: 0.25 }, irrigated: true,
    note: 'Gourds, brinjal, greens and pulses, grown round the year with water from the well; little grows in the heat of May.' },
  banana: { label: 'Plantains', short: 'plantains are',  what: 'produce', days: 300, yield: 12000, perennial: true, sow: ['monsoon', 'autumn', 'winter', 'summer'], season: { monsoon: 1, autumn: 0.9, winter: 0.6, summer: 0.5 }, irrigated: true,
    note: 'A plantain stool fruits about ten months after planting and is cut back to sprout again.' },
};
const STAGES = { fallow: 'Fallow', ploughed: 'Ploughed', sown: 'Sown', growing: 'Growing', ripe: 'Ripe, waiting for the sickle', harvested: 'Harvested (stubble)' };
const PER_MAN_KG = 0.9;
const MILK = { cow: 2.5, buffalo: 4, goat: 1, sheep: 0.4 };

export class Farm {
  constructor(app) { this.app = app; this.fields = []; this.stores = null; }
  onLoad(W, view, people) {
    this.W = W; this.view = view; this.people = people;
    const era = W.era, war = /war|attack|siege/i.test(W.eraDef?.label || '') || W.def.battles?.[era];
    // opening stocks: a fort expecting attack kept months of grain in hand
    const S = W.def.stores?.[era] || (W.eraDef?.lens === 'none' ? null : { grain: war ? 90000 : 35000, produce: 1500, milk: 0, eggs: 0, wool: 0 });
    this.stores = S ? Object.assign({ grain: 0, produce: 0, milk: 0, eggs: 0, wool: 0, meat: 0 }, S) : null;
    this.fields = W.fields.map((f) => {
      const C = CROPS[f.crop]; if (!C) return null;
      const mesh = view.group.getObjectByName(f.batch);
      const base = [], col = [];
      if (mesh) for (let i = f.i0; i < f.i1; i++) { const m = new THREE.Matrix4(); mesh.getMatrixAt(i, m); base.push(m); const c = new THREE.Color(); if (mesh.instanceColor) mesh.getColorAt(i, c); else c.setRGB(1, 1, 1); col.push(c); }
      // start where the season would have it
      const season = this.app.climate?.season || 'autumn';
      const stage = f.stage || (C.perennial ? 'growing' : C.season[season] > 0 ? 'growing' : 'fallow');
      return Object.assign({}, f, { C, mesh, base, col, stage, prog: stage === 'growing' ? 0.55 : 0, labour: 1, quality: 1, spoil: 0 });
    }).filter(Boolean);
    this.dayAcc = 0;
    this._apply(true);
  }
  // farmers working a field: anyone with a hoe (or any villager) standing in it
  _workers(F) { return this.people.agents.filter((a) => !a.dead && /farmer|villager/.test(a.s.kind) && pointInPoly(a.x, a.y, F.poly)).length; }
  _needed(F) { return Math.max(1, Math.round(F.area / 350)); }
  _wet() { const C = this.app.climate; return (C?.cur?.rain ?? 0) > 0.3 || C?.season === 'monsoon'; }
  step(days) {
    const season = this.app.climate?.season || 'autumn';
    for (const F of this.fields) {
      const C = F.C, w = this._workers(F), need = this._needed(F), lab = Math.min(1, w / need);
      F.labour = lab;
      const water = this._wet() ? 1 : C.irrigated ? 0.85 : 0.35;
      switch (F.stage) {
        case 'fallow': if (C.sow.includes(season) && lab > 0) { F.prog += days / 8 * lab; if (F.prog >= 1) { F.stage = 'ploughed'; F.prog = 0; } } break;
        case 'ploughed': if (lab > 0) { F.prog += days / 4 * lab; if (F.prog >= 1) { F.stage = 'sown'; F.prog = 0; F.quality = 1; } } break;
        case 'sown': F.prog += days / 12 * water; if (F.prog >= 1) { F.stage = 'growing'; F.prog = 0.12; } break;
        case 'growing': {
          const g = C.season[season] * water;
          F.prog += days / C.days * g * (0.55 + 0.45 * lab);               // untended fields grow weedy and slow
          F.quality = Math.max(0.35, F.quality - days * (lab < 0.5 ? 0.004 : 0) - (g === 0 ? days * 0.01 : 0));
          if (F.prog >= 1) { F.stage = 'ripe'; F.spoil = 0; this.app.ui.toast(`${F.name}: the ${C.short} ripe`); }
          break;
        }
        case 'ripe':
          if (lab > 0) { F.prog += days / 6 * lab; if (F.prog >= 2) this._harvest(F); }
          else { F.spoil += days; F.quality = Math.max(0.2, F.quality - days * 0.01); }
          break;
        case 'harvested': F.prog += days / 20; if (F.prog >= 1) { F.stage = C.perennial ? 'growing' : 'fallow'; F.prog = C.perennial ? 0.3 : 0; } break;
      }
    }
    this._husbandry(days);
    this._eat(days);
    this._apply();
  }
  _harvest(F) {
    const kg = Math.round(F.area / 10000 * F.C.yield * F.quality);
    if (this.stores) this.stores[F.C.what] += kg;
    F.stage = 'harvested'; F.prog = 0;
    this.app.ui.toast(`${F.name}: harvest in, ${kg.toLocaleString()} kg of ${F.C.what === 'grain' ? 'grain' : 'produce'} to the granary`);
    // porters carry it to the granary
    const gran = this.W.garrisons.find((g) => g.use === 'granary');
    if (gran) for (let k = 0; k < 2; k++) { const c = F.poly[k]; const a = this.people.spawnAgent('porter', c[0], c[1], this.W.ground(c[0], c[1])); if (a) a.ctrl = { mode: 'goto', to: [gran.x, gran.y, gran.h], then: { mode: 'vanish' } }; }
  }
  // tended pens give milk and eggs every day, wool twice a year
  _husbandry(days) {
    const P = this.app.play; if (!P?.pens || !this.stores) return;
    for (const p of P.pens) {
      const keeper = this.people.agents.some((a) => !a.dead && !a.K.animal && /villager|farmer|woman|porter/.test(a.s.kind) && Math.hypot(a.x - p.c[0], a.y - p.c[1]) < 30);
      if (!keeper) continue;
      for (const a of P._penned(p)) { const m = MILK[a.s.kind]; if (m && (a.scale ?? 1) > 0.95) this.stores.milk += m * days; }
      if (p.eggs) { this.stores.eggs += p.eggs; p.eggs = 0; }
    }
    const d0 = this.app.climate.day - days, d1 = this.app.climate.day;
    for (const shear of [60, 280]) if (d0 < shear && d1 >= shear) for (const p of P.pens) this.stores.wool += P._penned(p).filter((a) => a.s.kind === 'sheep').length * 0.5;
    this.stores.milk = Math.max(0, this.stores.milk - days * 40 * 0.3);     // milk does not keep: most is drunk the same day
  }
  _men() {
    // everyone in the fort, at five men a figure: soldiers, garrisons, townspeople; animals not counted
    return this.people.agents.filter((a) => !a.dead && !a.K.animal && !/tourist|student/.test(a.s.kind)).length * 5;
  }
  _eat(days) {
    if (!this.stores) return;
    const need = this._men() * PER_MAN_KG * days;
    const fromProduce = Math.min(this.stores.produce, need * 0.25);
    this.stores.produce -= fromProduce; this.stores.grain = Math.max(0, this.stores.grain - (need - fromProduce));
  }
  daysLeft() { if (!this.stores) return null; const per = this._men() * PER_MAN_KG; return per ? Math.floor((this.stores.grain + this.stores.produce * 0.25) / per) : Infinity; }
  storesText() {
    const S = this.stores; if (!S) return 'No stores are kept here in this period.';
    const d = this.daysLeft();
    return `Stores: ${Math.round(S.grain).toLocaleString()} kg grain, ${Math.round(S.produce).toLocaleString()} kg produce, ${Math.round(S.milk)} l milk, ${S.eggs} eggs, ${S.wool.toFixed(1)} kg wool. Enough grain for ${d === Infinity ? 'any time' : `${d} days`} for ${this._men().toLocaleString()} people.`;
  }
  // instance growth: hidden when fallow or ploughed, small when sown, full and golden when ripe, cut to stubble after
  _apply(force) {
    for (const F of this.fields) {
      if (!F.mesh) continue;
      const key = F.stage + Math.round(F.prog * 10); if (!force && key === F._key) continue; F._key = key;
      const k = { fallow: 0, ploughed: 0, sown: 0.12, growing: 0.15 + 0.85 * Math.min(1, F.prog), ripe: 1, harvested: 0.18 }[F.stage];
      const gold = F.stage === 'ripe' && F.C.ripe ? 1 : F.stage === 'harvested' ? 1 : 0;
      const m = new THREE.Matrix4(), s = new THREE.Matrix4(), c = new THREE.Color(), straw = new THREE.Color(...(F.C.ripe || [0.75, 0.68, 0.45]));
      for (let i = 0; i < F.base.length; i++) {
        m.copy(F.base[i]);
        const e = m.elements; const px = e[12], py = e[13], pz = e[14];
        s.makeScale(Math.max(0.001, k), Math.max(0.001, k), Math.max(0.001, k)); m.multiply(s); m.elements[12] = px; m.elements[13] = py; m.elements[14] = pz;
        F.mesh.setMatrixAt(F.i0 + i, m);
        c.copy(F.col[i]).lerp(straw, gold * 0.85); F.mesh.setColorAt(F.i0 + i, c);
      }
      F.mesh.instanceMatrix.needsUpdate = true; if (F.mesh.instanceColor) F.mesh.instanceColor.needsUpdate = true;
    }
  }
  update(dt) {
    if (!this.W) return;
    // the island is victualled by sea: every time the boat ties up at the landing it lands its cargo
    if (this.stores && this.W.def.supply) for (const F of this.view.ferries || []) {
      const st = F.state(this.app.t);
      if (st.phase === 'dock' && F._lastDock !== st.n) { F._lastDock = st.n; const kg = this.W.def.supply[this.W.era] ?? 0; if (kg) { this.stores.grain += kg; this.app.play.hudDirty = true; this.app.ui.toast(`The boat from Rajapuri lands ${kg.toLocaleString()} kg of grain`); } }
    }
    const d = this.app.climate?.dDays || 0;
    if (d > 0) { this.dayAcc += d; if (this.dayAcc > 0.25) { this.step(this.dayAcc); this.dayAcc = 0; this.app.play.hudDirty = true; } }
  }
  pick(cx, cy) {
    const hit = this.app.play._groundHit(cx, cy); if (!hit) return null;
    const F = this.fields.find((f) => pointInPoly(hit[0], hit[1], f.poly));
    return F ? { type: 'field', F, x: hit[0], y: hit[1], h: hit[2] + 1 } : null;
  }
  menu(F, add, set) {
    const C = F.C, w = this._workers(F), need = this._needed(F), season = this.app.climate?.season;
    const pct = F.stage === 'growing' ? ` (${Math.round(Math.min(1, F.prog) * 100)}%)` : '';
    const est = Math.round(F.area / 10000 * C.yield * F.quality);
    set(`${STAGES[F.stage]}${pct}. ${w} ${w === 1 ? 'hand' : 'hands'} working it (it wants ${need}). ${Math.round(F.area)} m²; a fair harvest here is about ${est.toLocaleString()} kg.`,
      `${C.note} ${C.season[season] > 0 ? '' : `Nothing grows in ${season === 'summer' ? 'the hot months' : 'this season'} without water. `}Time must pass (Sky & weather) for the crop to move on.`);
    const idle = this.people.agents.filter((a) => !a.dead && !a.K.animal && /farmer|villager/.test(a.s.kind) && !a.co && !pointInPoly(a.x, a.y, F.poly));
    if (idle.length && w < need) add(`Send ${Math.min(need - w, idle.length)} more hands`, () => { idle.sort((p, q) => Math.hypot(p.x - F.poly[0][0], p.y - F.poly[0][1]) - Math.hypot(q.x - F.poly[0][0], q.y - F.poly[0][1])).slice(0, need - w).forEach((a) => { a.s = Object.assign({}, a.s, { mode: 'wander', zone: F.poly }); a.path = null; a.wait = 0; }); });
    if (F.stage === 'ripe') add('Bring in the harvest now', () => { if (w > 0) this._harvest(F); else this.app.ui.toast('There is no one in the field to cut it'); });
  }
}
