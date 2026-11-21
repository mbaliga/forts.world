import {campaignBattle, battleLosses, fortEraAt} from './campaign-battle.js';
// The regional campaign: turn-based (a week a turn) on the real coastline of the Konkan, sharing one simulation with
// the real-time local battles. Food, men, ships, the date and the damage done carry over between the two.
// The hex grid carries movement; the terrain of each land hex (Konkan lowland, Sahyadri escarpment, Deccan plateau)
// is inferred from its distance inland, not measured: it is marked so in the legend.
import BASE from '../data/basemap.js';
import DEM from '../data/dem-janjira.js';
import { NODES as NODES_AB, ROUTES as ROUTES_AB, OWNERS as OWNERS_AB, SEASON_RULES, ECON, RESOURCES_OF, ownerAt, existsAt } from '../data/konkan.js';
import { NODES_C, ROUTES_C, NODES_D, ROUTES_D, OWNERS_SOUTH } from '../data/south.js';
import { FORTS } from '../data/forts.js';
import VERIFIED from '../data/verified.js';
import {strategicTerrainAt} from './strategic-terrain.js';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
// the campaign regions built so far; each has its own map, sites, routes and saved game
export const CAMPAIGN_REGIONS = {
  AB: { title: 'The Konkan and the Deccan', bb: [72.55, 15.7, 75.65, 21.05], nodes: NODES_AB, routes: ROUTES_AB, coast: 'west' },
  C: { title: 'Goa, Kanara and Malabar', bb: [73.3, 9.5, 77.1, 15.95], nodes: NODES_C, routes: ROUTES_C, coast: 'west' },
  D: { title: 'The eastern Deccan and the Tamil coast', bb: [77.0, 9.4, 81.7, 18.4], nodes: NODES_D, routes: ROUTES_D, coast: 'east' },
};
const OWNERS = Object.assign({}, OWNERS_SOUTH, OWNERS_AB);
// who counts as friendly to whom (allies and the branches of one power)
const ALLIES = { maratha: ['maratha', 'angre', 'peshwa'], mysore: ['mysore'], english: ['english', 'british'], french: ['french', 'carnatic'], siddi: ['siddi', 'janjira'], zamorin: ['zamorin'] };
let NODES = NODES_AB, ROUTES = ROUTES_AB, BB = CAMPAIGN_REGIONS.AB.bb, COAST = 'west';
const HEX = 0.055;                                    // hex size in degrees of latitude (about 6 km across)
const MONSOON = (m) => m >= 5 && m <= 8;              // the south-west monsoon, June–September: inland rains everywhere
const RATION = 0.9, CARRY_DAYS = 30;
const CSS = `
#campaign{position:fixed;inset:0;z-index:46;display:grid;grid-template-columns:320px 1fr;background:var(--paper);background-image:var(--paper-tex,none);color:var(--ink)}
#campaign[hidden]{display:none}#campaign aside{padding:14px 16px;overflow:auto;border-right:1px solid var(--rule)}
#campaign h2{margin:0;font:400 24px/1.1 var(--font-serif)}#campaign .sub{font:italic 14px/1.4 var(--font-serif);color:var(--muted);margin:4px 0 10px}
#campaign .date{font:400 22px var(--font-display);margin:6px 0}#campaign .season{font:italic 13px var(--font-serif);color:var(--muted)}
#campaign button.b{border:1px solid var(--ink);background:none;color:var(--ink);padding:6px 12px;font:500 13px var(--font-body);cursor:pointer;margin:6px 6px 0 0}
#campaign .unit{border:1px solid var(--rule);padding:6px 8px;margin:6px 0;cursor:pointer;font:13px/1.35 var(--font-body)}#campaign .unit.sel{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent)}
#campaign .unit b{font-weight:600}#campaign .log{font:12px/1.45 var(--font-body);color:var(--muted);max-height:180px;overflow:auto;border-top:1px solid var(--rule);margin-top:10px;padding-top:6px}
#campaign .stage{position:relative;overflow:hidden;background:#c9d6d3}#campaign svg{width:100%;height:100%;display:block;touch-action:none}
#campaign .hx{stroke:rgba(80,70,50,.12);stroke-width:.4;vector-effect:non-scaling-stroke}
#campaign .hx.reach{fill:rgba(216,160,42,.28) !important;cursor:pointer}#campaign .hx.reach:hover{fill:rgba(216,160,42,.5) !important}
#campaign .coast{fill:none;stroke:#5a4a32;stroke-width:1;vector-effect:non-scaling-stroke}
#campaign .route{fill:none;stroke-width:1.2;vector-effect:non-scaling-stroke}#campaign .route.closed{stroke-dasharray:3 3;opacity:.5}
#campaign .node text{font:600 7px var(--font-body);fill:#2b2116;paint-order:stroke;stroke:#efe5cd;stroke-width:2px;pointer-events:none}
#campaign .card{position:absolute;left:14px;bottom:14px;width:min(380px,calc(100% - 28px));background:var(--paper);border:1px solid var(--ink);box-shadow:0 0 0 3px var(--paper),0 0 0 4px var(--ink),0 10px 26px rgba(0,0,0,.25);padding:12px 14px;font:13px/1.4 var(--font-body)}
#campaign .card[hidden]{display:none}#campaign .card h3{margin:0 0 4px;font:400 19px var(--font-serif)}#campaign .ev{font:600 10px var(--font-data);letter-spacing:.06em;text-transform:uppercase;padding:1px 5px;border:1px solid currentColor;border-radius:2px;margin-left:4px}
#campaign .ev.measured{color:#2f6b45}#campaign .ev.documented{color:#2c5aa0}#campaign .ev.inferred{color:#a0601e}#campaign .ev.unknown{color:#888}
#campaign .x{position:absolute;right:14px;top:10px;font-size:22px;border:0;background:none;color:var(--ink);cursor:pointer;z-index:2}
#campaign .legend{font:12px/1.5 var(--font-body);margin-top:8px}#campaign .legend i{display:inline-block;width:10px;height:10px;margin-right:5px;vertical-align:-1px}
#campaign canvas.dem{width:100%;border:1px solid var(--rule);margin-top:6px;image-rendering:pixelated}
`;
// ---------------------------------------------------------------- geometry
const K = 100; let kx = Math.cos(18 * Math.PI / 180), W = 0, H = 0;
const P = (lon, lat) => [(lon - BB[0]) * kx * K, (BB[3] - lat) * K];
function useRegion(id) { const R = CAMPAIGN_REGIONS[id]; NODES = R.nodes; ROUTES = R.routes; BB = R.bb; COAST = R.coast; kx = Math.cos((BB[1] + BB[3]) / 2 * Math.PI / 180); W = (BB[2] - BB[0]) * kx * K; H = (BB[3] - BB[1]) * K; }
useRegion('AB');
// the sea closes in the south-west monsoon on the west coast, in the north-east monsoon on the Coromandel
const seaClosed = (m) => (COAST === 'east' ? m >= 9 && m <= 11 : m >= 5 && m <= 8);
// and the rains on land follow the coast too: June–September in the west, October–December on the Coromandel
const landRains = (m) => (COAST === 'east' ? m >= 9 && m <= 11 : m >= 5 && m <= 8);
// pointy-top axial hexes in projected units
const S = HEX * K / Math.sqrt(3);
const hexCenter = (q, r) => [S * Math.sqrt(3) * (q + r / 2), S * 1.5 * r];
function pixelToHex(x, y) { const q = (Math.sqrt(3) / 3 * x - y / 3) / S, r = (2 / 3 * y) / S; let rq = Math.round(q), rr = Math.round(r), rs = Math.round(-q - r); const dq = Math.abs(rq - q), dr = Math.abs(rr - r), ds = Math.abs(rs + q + r); if (dq > dr && dq > ds) rq = -rr - rs; else if (dr > ds) rr = -rq - rs; return [rq, rr]; }
const key = (q, r) => q + ',' + r;
const NB = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, -1], [-1, 1]];
function inPoly(x, y, ring) { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, yi] = ring[i], [xj, yj] = ring[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }

export class Campaign {
  constructor(app) {
    this.app = app;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.el = document.createElement('section'); this.el.id = 'campaign'; this.el.hidden = true; document.body.appendChild(this.el);
    this.el.addEventListener('pointerdown', (e) => e.stopPropagation());
    app.state.campaigns ||= {}; if (app.state.campaign && !app.state.campaigns.AB) app.state.campaigns.AB = app.state.campaign;
    // Tactical battle saves are not serialized yet; abandon only the unfinished handoff on restart.
    if (app.state.campaignPending) { app.state.campaignPending = null; app._save(); }
    this.region = 'AB'; this.state = app.state.campaigns.AB || null;
    this.vb = [0, 0, W, H];
    // verified facts in the source first, then any imported in this browser
    for (const R of Object.values(CAMPAIGN_REGIONS)) { const keep = NODES; NODES = R.nodes; this.applyVerifications(VERIFIED); this.applyVerifications(app.state.verifications || []); NODES = keep; }
  }
  // ---------------------------------------------------------------- the world: hexes, terrain, routes
  buildWorld() {
    if (this.hexes) return;
    const india = BASE.countries.find((c) => c.iso === 'IND'), rings = india.rings.map((r) => r.map(([lo, la]) => P(lo, la)));
    const land = (x, y) => rings.some((r) => inPoly(x, y, r));
    this.hexes = new Map();
    const [q0] = pixelToHex(0, 0), [, r1] = pixelToHex(0, H);
    for (let r = -1; r <= r1 + 1; r++) for (let q = q0 - Math.ceil(r1 / 2) - 2; q < q0 + W / (S * Math.sqrt(3)) + 2; q++) {
      const [x, y] = hexCenter(q, r); if (x < -S || y < -S || x > W + S || y > H + S) continue;
      this.hexes.set(key(q, r), { q, r, x, y, land: land(x, y) });
    }
    // terrain inland: distance to the sea in hexes (one hex is about 6 km)
    const dist = new Map(), queue = [];
    for (const h of this.hexes.values()) if (!h.land) { dist.set(key(h.q, h.r), 0); queue.push(h); }
    while (queue.length) { const h = queue.shift(), d = dist.get(key(h.q, h.r)); for (const [a, b] of NB) { const k2 = key(h.q + a, h.r + b), n = this.hexes.get(k2); if (n && !dist.has(k2)) { dist.set(k2, d + 1); queue.push(n); } } }
    // west coast: Konkan lowland, the Sahyadri escarpment, the Deccan plateau; east coast: a broad coastal plain
    // rising to the plateau (the Eastern Ghats are broken hills, not one wall). Inferred from distance inland.
    for (const h of this.hexes.values()) {
      const d = dist.get(key(h.q, h.r)) ?? 99; h.inland = d;
      if (!h.land) h.terrain = d <= 2 ? 'coastal sea' : 'open sea';
      else {
        const lon = BB[0] + h.x / (kx * K), lat = BB[3] - h.y / K, t = strategicTerrainAt(lon, lat);
        h.strategicTerrain = t.id; h.terrain = t.id === 'highlands' || t.id === 'hills' || t.id === 'escarpment' || t.id === 'uplands' ? 'ghats' : t.id === 'plateau' || t.id === 'arid' ? 'desh' : 'konkan';
      }
    }
    // sites on their hexes; routes as chains of hexes
    this.nodeHex = new Map();
    for (const n of NODES) { const [x, y] = P(n.lon, n.lat), [q, r] = pixelToHex(x, y); n.hex = key(q, r); this.nodeHex.set(n.hex, n); const h = this.hexes.get(n.hex); if (h && n.water === 'sea') h.port = true; }
    this.routeHex = new Map();
    for (const [a, b, kind] of ROUTES) {
      const A = NODES.find((n) => n.id === a), B = NODES.find((n) => n.id === b); if (!A || !B) continue;
      const [ax, ay] = P(A.lon, A.lat), [bx, by] = P(B.lon, B.lat), steps = Math.ceil(Math.hypot(bx - ax, by - ay) / (S * 0.8));
      for (let i = 0; i <= steps; i++) { const [q, r] = pixelToHex(ax + (bx - ax) * i / steps, ay + (by - ay) * i / steps); const k2 = key(q, r); const prev = this.routeHex.get(k2); if (!prev || kind === 'road') this.routeHex.set(k2, kind); }
    }
  }
  // ---------------------------------------------------------------- the simulation
  newGame(scn) {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    if (this.region === 'C') return this.newGameC();
    if (this.region === 'D') return this.newGameD();
    return this.newGameAB(scn);
  }
  newGameC() {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    this.state = { scn: 'malabar-1765', year: 1765, day: 290, side: 'mysore', turn: 1, log: [], overrides: {}, damage: {},
      units: [
        { id: 'c1', side: 'mysore', kind: 'army', name: 'Hyder Ali\'s army', at: 'srirangapatna', men: 12000, food: 12000 * RATION * 21 },
        { id: 'c2', side: 'mysore', kind: 'fleet', name: 'Mysore ships at Mangalore', at: 'mangalore', men: 600, ships: 8, food: 600 * RATION * 21 },
        { id: 'c3', side: 'zamorin', kind: 'army', name: 'The Zamorin\'s Nairs', at: 'calicut', men: 6000, food: 6000 * RATION * 21 },
        { id: 'c4', side: 'english', kind: 'army', name: 'Company garrison, Tellicherry', at: 'tellicherry', men: 700, food: 700 * RATION * 30 },
      ],
      garrisons: { calicut: 2500, kochi: 600, 'st-angelo': 400, tellicherry: 700, bekal: 400, palakkad: 300, mangalore: 1200, srirangapatna: 3000, 'old-goa': 2500, aguada: 400 } };
    for (const u of this.state.units) u.hex = NODES.find((n) => n.id === u.at).hex;
    this.log('Hyder Ali, master of Mysore, turns towards Malabar, autumn 1765 (he invaded in 1766). A scenario; numbers are a reconstruction.');
    this.save();
  }
  newGameD() {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    this.state = { scn: 'carnatic-1751', year: 1751, day: 220, side: 'english', turn: 1, log: [], overrides: { trichy: 'english' }, damage: {},
      units: [
        { id: 'd1', side: 'english', kind: 'army', name: 'Clive\'s force', at: 'madras', men: 500, food: 500 * RATION * 21 },
        { id: 'd2', side: 'english', kind: 'army', name: 'Muhammad Ali and the Company at Trichinopoly', at: 'trichy', men: 1600, food: 1600 * RATION * 14 },
        { id: 'd3', side: 'french', kind: 'army', name: 'Chanda Sahib\'s army', at: 'trichy', men: 9000, food: 9000 * RATION * 21, siege: 'trichy' },
        { id: 'd4', side: 'french', kind: 'army', name: 'French troops at Pondicherry', at: 'pondicherry', men: 1800, food: 1800 * RATION * 30 },
      ],
      garrisons: { madras: 800, arcot: 1100, trichy: 1600, pondicherry: 1800, gingee: 600, vellore: 500, golconda: 3000, hyderabad: 2000 } };
    for (const u of this.state.units) u.hex = NODES.find((n) => n.id === u.at).hex;
    const d2 = this.state.units[1], d3 = this.state.units[2]; d2.hex = NODES.find((n) => n.id === 'trichy').hex; d3.hex = d2.hex;
    this.log('August 1751: Chanda Sahib and the French besiege Muhammad Ali in Trichinopoly; Clive proposes to strike at Arcot. Numbers are approximate.');
    this.save();
  }
  newGameAB(scn = 'janjira-1760') {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    this.state = {
      scn, year: 1760, day: 300, side: 'maratha', turn: 1, log: [], overrides: {}, damage: {},
      units: [
        { id: 'u1', side: 'maratha', kind: 'fleet', name: 'Angre squadron', hex: null, at: 'vijaydurg', men: 1200, ships: 14, food: 1200 * RATION * 21 },
        { id: 'u2', side: 'maratha', kind: 'army', name: 'Peshwa\'s army of the Konkan', hex: null, at: 'raigad', men: 4000, food: 4000 * RATION * 21 },
        { id: 'u3', side: 'siddi', kind: 'fleet', name: 'Siddi fleet', hex: null, at: 'murud-janjira', men: 900, ships: 10, food: 900 * RATION * 21 },
      ],
      garrisons: { 'murud-janjira': 1500, padmadurg: 200, raigad: 800, rajapuri: 300, bombay: 2500, vijaydurg: 600, sindhudurg: 500, suvarnadurg: 300, kolaba: 500 },
    };
    for (const u of this.state.units) u.hex = NODES.find((n) => n.id === u.at).hex;
    this.log('The Peshwa\'s forces gather against Janjira, autumn 1760. (A scenario built on the attack shown on the indigenous map of about 1760; numbers are a reconstruction.)');
    this.save();
  }
  save() { this.state.stores = Object.fromEntries(NODES.map((n) => [n.id, Math.round(n.stores)])); this.app.state.campaigns[this.region] = this.state; this.app.state.campaign = this.app.state.campaigns.AB; this.app._save(); }
  get nodes() { return NODES; }
  ownerColour(o) { return OWNERS[o]?.col; }
  get box() { return BB; }
  restore() { if (this.state?.stores) for (const n of NODES) if (this.state.stores[n.id] != null) n.stores = this.state.stores[n.id]; }
  log(t) { this.state.log.unshift(`${this.dateText()}: ${t}`); this.state.log = this.state.log.slice(0, 60); }
  month() { const M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; let d = this.state.day % 365, m = 0; while (d >= M[m]) { d -= M[m]; m++; } return m; }
  dateText() { const N = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; let d = this.state.day % 365, m = 0; while (d >= M[m]) { d -= M[m]; m++; } return `${d + 1} ${N[m]} ${this.state.year}`; }
  owner(n) { return this.state.overrides[n.id] || ownerAt(n, this.state.year)?.owner || null; }
  friendly(n, side) { const o = this.owner(n); return o === side || (ALLIES[side] || []).includes(o); }
  // days to enter a hex, for a unit, in this season; Infinity if it cannot
  stepCost(u, h) {
    if (!h) return Infinity; const mon = landRains(this.month()), route = this.routeHex.get(key(h.q, h.r));
    if (u.kind === 'fleet') { if (h.land && !this.nodeHex.get(key(h.q, h.r))?.water?.match(/sea|creek|river/)) return Infinity; return seaClosed(this.month()) ? Infinity : h.terrain === 'open sea' ? 0.35 : 0.45; }
    if (!h.land) return Infinity;
    let c = route === 'road' ? 0.5 : route === 'ghat' ? 1.5 : h.terrain === 'ghats' ? 3 : h.terrain === 'desh' ? 0.8 : 1;
    if (mon) c *= SEASON_RULES[route === 'ghat' || h.terrain === 'ghats' ? 'ghat' : 'road'].monsoon;
    return c;
  }
  reach(u) {
    const budget = 7, best = new Map([[u.hex, 0]]), q = [[u.hex, 0]];
    while (q.length) { q.sort((a, b) => a[1] - b[1]); const [k2, d] = q.shift(); const h = this.hexes.get(k2); if (!h) continue; if (k2 !== u.hex && ((this.nodeHex.get(k2) && !this.friendly(this.nodeHex.get(k2), u.side)) || this.state.units.some((v) => v.men > 0 && v.side !== u.side && v.hex === k2))) continue; for (const [a, b] of NB) { const nk = key(h.q + a, h.r + b), c = this.stepCost(u, this.hexes.get(nk)); const nd = d + c; if (nd <= budget && nd < (best.get(nk) ?? Infinity)) { best.set(nk, nd); q.push([nk, nd]); } } }
    return best;
  }
  move(u, k2) {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    const R = this.reach(u); if (!R.has(k2)) return;
    const foe = this.state.units.find((v) => v.men > 0 && v.side !== u.side && v.hex === k2);
    if (foe) { u.hex = k2; u.moved = true; this.clash(u, foe, true); return; }
    u.hex = k2; u.moved = true; const n = this.nodeHex.get(k2);
    if (n && existsAt(n, this.state.year) && !this.friendly(n, u.side) && n.kind !== 'pass') this.encounter(u, n);
    this.render();
  }
  // two forces meet: odds by strength (ships count at sea), both sides lose men, the loser falls back
  clash(a, d, ask) {
    const atSea = !this.hexes.get(d.hex)?.land, str = (u) => u.men * (u.food > 0 ? 1 : 0.6) + (atSea ? (u.ships || 0) * 60 : 0);
    const p = str(a) / (str(a) + str(d));
    const go = () => {
      const win = Math.random() < p, la = Math.round(a.men * (win ? 0.06 + Math.random() * 0.08 : 0.15 + Math.random() * 0.15)), ld = Math.round(d.men * (win ? 0.15 + Math.random() * 0.15 : 0.06 + Math.random() * 0.08));
      a.men -= la; d.men -= ld; if (atSea) { if (win) d.ships = Math.max(0, (d.ships || 0) - 1 - (Math.random() * 3 | 0)); else a.ships = Math.max(0, (a.ships || 0) - 1 - (Math.random() * 2 | 0)); }
      const loser = win ? d : a; this.fallBack(loser); if (loser.siege) loser.siege = null;
      this.log(`${a.name} ${win ? 'defeats' : 'is beaten off by'} ${d.name}${atSea ? ' at sea' : ''}. Losses: ${la.toLocaleString()} and ${ld.toLocaleString()}.`);
      this.card(null); this.save(); this.render();
    };
    if (!ask) return go();
    this.card(`<h3>${esc(a.name)} meets ${esc(d.name)}</h3><p>${a.men.toLocaleString()} men${a.ships ? `, ${a.ships} ships` : ''} against ${d.men.toLocaleString()}${d.ships ? `, ${d.ships} ships` : ''}${atSea ? ', at sea' : ''}. Odds of carrying the day: about ${Math.round(p * 100)}%.</p><button class="b" data-go>Attack</button><button class="b" data-x>Draw off</button>`,
      (e) => { if (e.target.dataset.go != null) go(); if (e.target.dataset.x != null) { this.fallBack(a); this.card(null); this.render(); } });
  }
  fallBack(u) {
    let best = null, bd = Infinity; const h0 = this.hexes.get(u.hex);
    for (const n of NODES) { if (!existsAt(n, this.state.year) || !this.friendly(n, u.side)) continue; if (u.kind === 'fleet' && !/sea|creek/.test(n.water)) continue; const h = this.hexes.get(n.hex); if (!h) continue; const d = Math.hypot(h.x - h0.x, h.y - h0.y); if (d < bd) { bd = d; best = n; } }
    if (best) u.hex = best.hex;
  }
  // a hostile site: assault it, as a real-time battle where the fort is playable, or by the odds
  encounter(u, n) {
    const g = this.state.garrisons[n.id] ?? 300, def = n.kind === 'fort' ? (n.water === 'sea' ? 3 : 2.2) : 1.2, dmg = this.state.damage[n.id] || 0;
    const ratio = u.men / (g * def * (1 - dmg * 0.5)), p = Math.max(0.03, Math.min(0.92, 0.5 * ratio / (1 + 0.5 * ratio)));
    const battle = campaignBattle(this.app.levels, n, this.state.year, u.side);
    this.card(`<h3>Before ${esc(n.name)}</h3><p>${esc(u.name)} (${u.men.toLocaleString()} men${u.ships ? `, ${u.ships} ships` : ''}) faces a garrison of about ${g.toLocaleString()}${dmg ? `, its walls ${Math.round(dmg * 100)}% breached` : ''}.</p>
      <p>Odds of carrying it by assault: about ${Math.round(p * 100)}%. A siege costs a week a turn and wears the garrison down, if your food lasts.</p>
      ${battle ? '<button class="b" data-fight>Fight the battle</button>' : ''}<button class="b" data-auto>Assault (by the odds)</button><button class="b" data-siege>Lay siege</button><button class="b" data-x>Withdraw</button>`,
      (e) => {
        if (e.target.dataset.auto != null) this.resolve(u, n, Math.random() < p, Math.round(u.men * (0.08 + Math.random() * 0.15)), Math.round(g * (0.2 + Math.random() * 0.3)));
        if (e.target.dataset.siege != null) { u.siege = n.id; this.log(`${u.name} lays siege to ${n.name}.`); this.card(null); this.render(); }
        if (e.target.dataset.fight != null) this.fight(u, n);
        if (e.target.dataset.x != null) { this.card(null); }
      });
  }
  resolve(u, n, won, lossA, lossD) {
    u.men = Math.max(0, u.men - lossA); this.state.garrisons[n.id] = Math.max(0, (this.state.garrisons[n.id] ?? 300) - lossD);
    if (won) { this.state.overrides[n.id] = u.side; this.state.garrisons[n.id] = Math.round(u.men * 0.15); u.men -= this.state.garrisons[n.id]; this.log(`${n.name} falls to ${u.name}. Losses: ${lossA.toLocaleString()} attackers, ${lossD.toLocaleString()} defenders.`); }
    else this.log(`The assault on ${n.name} fails. ${u.name} loses ${lossA.toLocaleString()} men; the defenders ${lossD.toLocaleString()}.`);
    this.card(null); this.save(); this.render();
  }
  // hand over to the real-time battle at the fort; the result comes back through report()
  async fight(u, n) {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current encounter first.'); return; }
    if (u.men <= 0 || (this.state.garrisons[n.id] ?? 300) <= 0) { this.app.ui.toast('No opposing forces remain; resolve this encounter on the campaign map.'); return; }
    const match = campaignBattle(this.app.levels,n,this.state.year,u.side);
    if (!match) { this.app.ui.toast('No authored attacking battle matches this faction and year. Use the regional assault.'); return; }
    const pending = {token: `${Date.now()}-${Math.random()}`,region:this.region,level:match.level.id,era:match.era,phase:'loading',unit:u.id,node:n.id,men:u.men,garrison:this.state.garrisons[n.id] ?? 300,grain:Math.max(0,Number(n.stores)||0),year:this.state.year};
    this.app.state.campaignPending = pending; this.save(); this.close();
    try {
      await this.app.load(match.level.id,match.era);
      if (this.app.state.campaignPending?.token !== pending.token) return;
      if (this.app.farm?.stores) this.app.farm.stores.grain = pending.grain;
      pending.phase = 'ready'; this.save();
      this.app.battle.choose(u.side);
      this.app.battle.showBrief();
    } catch (error) {
      if (this.app.state.campaignPending?.token === pending.token) this.app.state.campaignPending = null;
      this.save(); this.app.ui.toast(`Battle could not load: ${error.message}`); this.open();
    }
  }
  cancelBattle() {
    if (!this.app.state.campaignPending || this.app.battle?.active) return;
    this.app.state.campaignPending = null; this.app._save();
  }
  report(result, ownLossFrac, enemyLossFrac, token) {
    const pd = this.app.state.campaignPending;
    if (!pd || pd.token !== token || pd.region !== this.region || !this.state || pd.year !== this.state.year) return;
    const u=this.state.units.find(v=>v.id===pd.unit), n=NODES.find(m=>m.id===pd.node);
    if (!u || !n) return;
    let losses;
    try { losses=battleLosses(pd,result,ownLossFrac,enemyLossFrac); } catch { return; }
    const grain=this.app.farm?.stores?.grain;
    if (this.app.levelDef?.id===pd.level && this.app.era===pd.era && Number.isFinite(grain)) n.stores=Math.max(0,grain);
    this.app.state.campaignPending=null;
    this.state.damage[n.id]=Math.min(0.9,(this.state.damage[n.id]||0)+0.15);
    this.resolve(u,n,losses.won,losses.lossA,losses.lossD);
  }
  endTurn() {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle before advancing time.'); return; }
    const S = this.state; S.turn++; S.day += 7; if (S.day >= 365) { S.day -= 365; S.year++; }
    const mon = landRains(this.month());
    for (const u of S.units) {
      u.moved = false;
      // eat; restock at a friendly port or fort; go hungry without supply
      u.food -= u.men * RATION * 7;
      const n = this.nodeHex.get(u.hex);
      if (n && existsAt(n, S.year) && this.friendly(n, u.side) && n.stores) { const want = u.men * RATION * CARRY_DAYS - u.food; if (want > 0) { const take = Math.min(want, n.stores); u.food += take; n.stores -= take; } }
      if (u.food < 0) { const lost = Math.round(u.men * 0.06); u.men -= lost; u.food = 0; this.log(`${u.name} is starving: ${lost} men desert or die.`); }
      // a fleet caught at sea when the rains break
      if (u.kind === 'fleet' && seaClosed(this.month()) && this.hexes.get(u.hex) && !this.hexes.get(u.hex).land && !n) { const sunk = Math.min(u.ships, Math.random() < 0.5 ? 1 + (Math.random() * 3 | 0) : 0); if (sunk) { u.ships -= sunk; u.men = Math.round(u.men * (1 - sunk / Math.max(1, u.ships + sunk))); this.log(`A monsoon gale catches ${u.name} at sea: ${sunk} ships lost.`); } }
      // a siege wears the garrison down
      if (u.siege) { const g = S.garrisons[u.siege] ?? 0, n2 = NODES.find((m) => m.id === u.siege); if (u.hex !== n2.hex) u.siege = null; else { S.garrisons[u.siege] = Math.max(0, Math.round(g * 0.96)); S.damage[u.siege] = Math.min(0.9, (S.damage[u.siege] || 0) + 0.03); } }
    }
    this.economy(mon);
    this.ai();
    if (mon && !this._monsoonSaid) { this.log('The south-west monsoon breaks: the sea lanes are closed until October, the ghats slow to a crawl.'); this._monsoonSaid = true; }
    if (!mon) this._monsoonSaid = false;
    this.save(); this.render();
  }
  // the places live: towns and ports feed themselves and lay by a surplus (most at the harvest after the rains),
  // ports trade while the sea is open, garrisons eat from their stores and are fed from friendly neighbours; a siege
  // or a blockade cuts all of that off, and a garrison that runs out of food starves
  economy(mon) {
    const S = this.state, m = this.month(), harvest = m === 9 || m === 10;
    const besieged = new Set(S.units.filter((u) => u.siege && u.men > 0).map((u) => u.siege));
    for (const n of NODES) {
      if (!existsAt(n, S.year)) continue;
      const E = ECON[n.kind] || ECON.fort, cut = besieged.has(n.id);
      if (!cut) {
        n.stores += E.pop * RATION * 7 * (E.grow - 1) + (harvest && E.grow ? E.pop * RATION * 7 * 1.2 : 0) + (!seaClosed(m) && n.water === 'sea' ? E.trade * 7 : 0);
        // a fort is fed from friendly places one route away
        if (n.kind === 'fort') for (const [a, b] of ROUTES) { const o = a === n.id ? b : b === n.id ? a : null; if (!o) continue; const m2 = NODES.find((x) => x.id === o); if (m2 && existsAt(m2, S.year) && this.owner(m2) === this.owner(n) && m2.kind !== 'pass' && !besieged.has(m2.id) && m2.stores > 4000) { const t = Math.min(2500, m2.stores - 4000); m2.stores -= t; n.stores += t; } }
      }
      const g = S.garrisons[n.id] || 0; n.stores -= g * RATION * 7;
      if (n.stores < 0) { n.stores = 0; if (g) { const lost = Math.round(g * 0.08); S.garrisons[n.id] = g - lost; if (cut) this.log(`${n.name} is starving under siege: ${lost} of the garrison die or desert.`); } }
      n.stores = Math.min(n.stores, 250000);
    }
  }
  // the other side acts: relieve a siege, strike a weaker force nearby, or fall back to restock
  ai() {
    const S = this.state;
    for (const u of S.units) {
      if (u.side === S.side || u.men <= 0) continue;
      const R = this.reach(u);
      const besieger = S.units.find((v) => v.side !== u.side && v.siege && v.men > 0 && this.friendly(NODES.find((n) => n.id === v.siege), u.side));
      const target = besieger || S.units.find((v) => v.side !== u.side && v.men > 0 && v.men < u.men * 0.9 && R.has(v.hex));
      if (target && R.has(target.hex)) { u.hex = target.hex; this.log(`${u.name} moves against ${target.name}${besieger ? ' to break the siege' : ''}.`); this.clash(u, target, false); continue; }
      if (u.food < u.men * RATION * 7) { this.fallBack(u); this.log(`${u.name} falls back to take on food.`); }
    }
  }
  // ---------------------------------------------------------------- evidence: the report, a checklist to verify, and verified facts back in
  facts() {
    const rows = [];
    for (const n of NODES) { rows.push({ id: n.id, name: n.name, field: 'position', value: `${n.lat}, ${n.lon}`, ev: n.pos, source: n.source || '' }); n.phases.forEach((p, i) => rows.push({ id: n.id, name: n.name, field: `phase:${i}`, value: `${p.from}${p.to ? '–' + p.to : '+'} ${p.owner || ''}`, ev: p.ev, source: p.source || '' })); }
    for (const f of FORTS) if (!NODES.some((n) => n.id === f.id)) rows.push({ id: f.id, name: f.name, field: 'position', value: `${f.lat}, ${f.lon}`, ev: f.ev?.position || 'inferred', source: '' });
    return rows;
  }
  evidence() {
    const rows = this.facts(), by = {}; for (const r of rows) by[r.ev] = (by[r.ev] || 0) + 1;
    this.card(`<h3>Evidence</h3><p>${rows.length} facts: ${Object.entries(by).map(([k, v]) => `<span class="ev ${k}">${k}</span> ${v}`).join(' · ')}.</p>
      <p>Export the checklist, verify each row against a survey, map or source, fill in <i>verified_lat</i>, <i>verified_lon</i> (for positions), <i>ev</i> and <i>source</i>, then import it: the facts update here and are kept.</p>
      <button class="b" data-csv>Export checklist (CSV)</button><label class="b" style="display:inline-block">Import verifications<input type="file" accept=".csv,text/csv" hidden></label><button class="b" data-x>Close</button>`,
      (e) => {
        if (e.target.dataset.x != null) this.card(null);
        if (e.target.dataset.csv != null) {
          const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
          const csv = ['id,name,field,value,ev,source,verified_lat,verified_lon'].concat(rows.map((r) => [r.id, r.name, r.field, r.value, r.ev, r.source, '', ''].map(q).join(','))).join('\n');
          const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'forts-evidence-checklist.csv'; a.click();
        }
      });
    this.el.querySelector('.card input[type=file]').onchange = async (e) => {
      const text = await e.target.files[0].text(), lines = text.split(/\r?\n/).filter(Boolean), head = lines.shift().split(',');
      const parse = (l) => { const out = []; let cur = '', q = false; for (let i = 0; i < l.length; i++) { const c = l[i]; if (q) { if (c === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; } else if (c === '"') q = true; else if (c === ',') { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; };
      const rows2 = lines.map((l) => Object.fromEntries(parse(l).map((v, i) => [head[i], v]))).filter((r) => r.source && r.ev);
      const prev = this.app.state.verifications || []; this.app.state.verifications = prev.concat(rows2); this.app._save();
      const n = this.applyVerifications(rows2); this.hexes = null; this.buildWorld(); this.render(); this.log(`${n} facts updated from verified sources.`); this.evidence();
    };
  }
  applyVerifications(rows) {
    let n = 0;
    for (const r of rows) {
      const node = NODES.find((x) => x.id === r.id), fort = FORTS.find((x) => x.id === r.id);
      if (r.field === 'position') {
        const lat = parseFloat(r.verified_lat), lon = parseFloat(r.verified_lon);
        for (const t of [node, fort]) if (t) { if (isFinite(lat) && isFinite(lon)) { t.lat = lat; t.lon = lon; } if (t === node) { t.pos = r.ev; t.source = r.source; } else { t.ev = Object.assign({}, t.ev, { position: r.ev }); t.source = r.source; } }
        if (node || fort) n++;
      } else if (/^phase:\d+$/.test(r.field) && node) { const p = node.phases[+r.field.split(':')[1]]; if (p) { p.ev = r.ev; p.source = r.source; n++; } }
    }
    return n;
  }
  // ---------------------------------------------------------------- the screen
  setRegion(id) {
    if (this.app.state.campaignPending) { this.app.ui.toast('Finish or cancel the current battle first.'); return; }
    if (!CAMPAIGN_REGIONS[id] || (id === this.region && this.hexes)) return;
    if (this.state) this.save();
    this.region = id; useRegion(id); this.hexes = null; this.svg = null; this.sel = null; this.vb = [0, 0, W, H];
    this.state = this.app.state.campaigns[id] || null; this._restored = false;
  }
  open(id) { if (id) this.setRegion(id); this.buildWorld(); if (!this.state) this.newGame(); else if (!this._restored) { this.restore(); this._restored = true; } this.el.hidden = false; if (!this.svg) this.buildDom(); this.render(); }
  close() { this.el.hidden = true; }
  card(html, onclick) { const c = this.el.querySelector('.card'); if (!html) { c.hidden = true; return; } c.innerHTML = html; c.hidden = false; c.onclick = onclick || ((e) => { if (e.target.dataset.x != null) c.hidden = true; }); }
  buildDom() {
    const india = BASE.countries.find((c) => c.iso === 'IND');
    const coast = india.rings.map((r) => 'M' + r.map(([lo, la]) => P(lo, la).map((v) => v.toFixed(1)).join(',')).join('L') + 'Z').join('');
    this.el.innerHTML = `<button class="x" aria-label="Close">×</button><aside></aside><div class="stage"><svg viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}" preserveAspectRatio="xMidYMid meet">
      <defs><clipPath id="regclip"><rect x="0" y="0" width="${W.toFixed(0)}" height="${H.toFixed(0)}"/></clipPath></defs><rect x="-200" y="-200" width="${W + 400}" height="${H + 400}" fill="#e9e2d0"/><rect x="0" y="0" width="${W.toFixed(0)}" height="${H.toFixed(0)}" fill="#c9d6d3"/><g class="hexes"></g><path class="coast" clip-path="url(#regclip)" d="${coast}"/><g class="routes"></g><g class="nodes"></g><g class="units"></g></svg><div class="card" hidden></div></div>`;
    this.svg = this.el.querySelector('svg');
    this.el.querySelector('.x').onclick = () => this.close();
    this.svg.addEventListener('click', (e) => {
      const hx = e.target.closest('[data-h]'), nd = e.target.closest('[data-n]'), un = e.target.closest('[data-u]');
      if (un) { this.sel = un.dataset.u; this.render(); return; }
      if (hx && hx.classList.contains('reach') && this.sel) { this.move(this.state.units.find((u) => u.id === this.sel), hx.dataset.h); return; }
      if (nd) this.showNode(NODES.find((n) => n.id === nd.dataset.n));
    });
    let drag = null;
    this.svg.addEventListener('wheel', (e) => { e.preventDefault(); const f = e.deltaY < 0 ? 0.85 : 1.18, r = this.svg.getBoundingClientRect(), s = Math.max(this.vb[2] / r.width, this.vb[3] / r.height), mx = this.vb[0] + (e.clientX - r.left) * s, my = this.vb[1] + (e.clientY - r.top) * s; const w = Math.max(W / 12, Math.min(W * 1.2, this.vb[2] * f)), h = w * H / W; this.vb = [mx - (mx - this.vb[0]) * w / this.vb[2], my - (my - this.vb[1]) * h / this.vb[3], w, h]; this.svg.setAttribute('viewBox', this.vb.join(' ')); this.render(); }, { passive: false });
    this.svg.addEventListener('pointerdown', (e) => { if (e.button === 2 || e.shiftKey || e.altKey) { drag = [e.clientX, e.clientY, this.vb[0], this.vb[1]]; } });
    this.svg.addEventListener('pointermove', (e) => { if (!drag) return; const r = this.svg.getBoundingClientRect(), s = Math.max(this.vb[2] / r.width, this.vb[3] / r.height); this.vb[0] = drag[2] - (e.clientX - drag[0]) * s; this.vb[1] = drag[3] - (e.clientY - drag[1]) * s; this.svg.setAttribute('viewBox', this.vb.join(' ')); });
    this.svg.addEventListener('pointerup', () => { drag = null; });
    this.svg.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  showNode(n) {
    const yr = this.state.year, ph = ownerAt(n, yr), o = this.owner(n);
    const phases = n.phases.map((p) => `<li>${p.from}${p.to ? '–' + p.to : ' onwards'}: ${esc(OWNERS[p.owner]?.name || 'no owner')}${p.note ? ' — ' + esc(p.note) : ''} <span class="ev ${p.ev}">${p.ev}</span></li>`).join('');
    const level = this.app.levels.find(l => l.id === n.playable);
    const era = existsAt(n, yr) ? fortEraAt(level, yr, n, o) : null;
    const dem = n.id === 'murud-janjira' ? '<p><b>Local region</b> (1 km radius): Copernicus GLO-30 surface elevations <span class="ev measured">measured</span></p><canvas class="dem" width="101" height="101"></canvas>' : '';
    this.card(`<h3>${esc(n.name)}</h3><p>${esc(n.kind)} · ${existsAt(n, yr) ? `in ${yr}: ${esc(OWNERS[o]?.name || '—')}` : `not yet built in ${yr}`} · position <span class="ev ${n.pos}">${n.pos}</span></p>
      <ul style="margin:4px 0 0 16px;padding:0">${phases}</ul>${n.kind !== 'pass' && n.kind !== 'fort' ? `<p>About ${(ECON[n.kind]?.pop || 0).toLocaleString()} people; lives on ${esc((RESOURCES_OF[n.id] || ECON[n.kind]?.res || []).join(', '))} <span class="ev inferred">inferred</span></p>` : ''}${n.source ? `<p>Source: ${esc(n.source)}</p>` : ''}${this.state.garrisons[n.id] ? `<p>Garrison about ${this.state.garrisons[n.id].toLocaleString()}; stores ${Math.round(n.stores).toLocaleString()} kg grain.</p>` : ''}${dem}
      ${era ? `<p>Available scene: ${esc(era.year)} · ${esc(era.label)}. This reconstruction depicts that date, not necessarily ${yr}.</p><button class="b" data-enter>Explore this earlier scene</button>` : (n.playable ? '<p>No local scene is available for this campaign period and current control.</p>' : '')}<button class="b" data-x>Close</button>`,
      (e) => { if (e.target.dataset.x != null) this.card(null); if (e.target.dataset.enter != null) { this.close(); this.app.load(n.playable, era.id).catch(error => this.app.ui.toast(error.message)); } });
    void ph;
    const cv = this.el.querySelector('canvas.dem');
    if (cv) { const ctx = cv.getContext('2d'), img = ctx.createImageData(101, 101), hs = DEM.heights; for (let i = 0; i < hs.length; i++) { const v = hs[i], k = i * 4; if (v <= 0) { img.data[k] = 150; img.data[k + 1] = 180; img.data[k + 2] = 190; } else { const t = Math.min(1, v / 120); img.data[k] = 120 + 110 * t; img.data[k + 1] = 140 + 70 * t; img.data[k + 2] = 90 + 60 * t; } img.data[k + 3] = 255; } ctx.putImageData(img, 0, 0); }
  }
  render() {
    if (!this.svg) return;
    const S2 = this.state, yr = S2.year, mon = landRains(this.month()), sel = S2.units.find((u) => u.id === this.sel), reach = sel && !sel.moved ? this.reach(sel) : null;
    const hexPath = (x, y) => { let d = ''; for (let i = 0; i < 6; i++) { const a = Math.PI / 180 * (60 * i - 30); d += (i ? 'L' : 'M') + (x + S * Math.cos(a)).toFixed(1) + ',' + (y + S * Math.sin(a)).toFixed(1); } return d + 'Z'; };
    const FILL = { 'open sea': 'none', 'coastal sea': 'rgba(150,190,200,.15)', konkan: 'rgba(120,150,80,.14)', ghats: 'rgba(110,90,60,.22)', desh: 'rgba(190,160,100,.16)' };
    this.svg.querySelector('.hexes').innerHTML = [...this.hexes.values()].map((h) => { const k2 = key(h.q, h.r), r = reach?.has(k2) && k2 !== sel.hex; return `<path class="hx${r ? ' reach' : ''}" data-h="${k2}" d="${hexPath(h.x, h.y)}" fill="${FILL[h.terrain]}"/>`; }).join('');
    const col = { sea: '#2c6a8a', 'sea-e': '#2c6a8a', ferry: '#5a8aa0', road: '#8a5a2a', ghat: '#6a3a1a' };
    this.svg.querySelector('.routes').innerHTML = ROUTES.map(([a, b, kind]) => { const A = NODES.find((n) => n.id === a), B = NODES.find((n) => n.id === b); if (!A || !B || !existsAt(A, yr) || !existsAt(B, yr)) return ''; const [ax, ay] = P(A.lon, A.lat), [bx, by] = P(B.lon, B.lat); const closed = (kind === 'sea' || kind === 'sea-e') && seaClosed(this.month()); return `<path class="route${closed ? ' closed' : ''}" d="M${ax.toFixed(1)},${ay.toFixed(1)}L${bx.toFixed(1)},${by.toFixed(1)}" stroke="${col[kind]}"><title>${kind}${closed ? ' (closed in the monsoon)' : ''}</title></path>`; }).join('');
    this.svg.querySelector('.nodes').innerHTML = NODES.filter((n) => existsAt(n, yr)).map((n) => { const [x, y] = P(n.lon, n.lat), o = OWNERS[this.owner(n)], r = n.kind === 'fort' ? 4 : n.kind === 'pass' ? 2.6 : 3.2; const shape = n.kind === 'fort' ? `<rect x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" transform="rotate(45 ${x} ${y})" fill="${o?.col || '#888'}" stroke="#fff" stroke-width=".8"/>` : n.kind === 'pass' ? `<path d="M${x - r} ${y + r}L${x} ${y - r}L${x + r} ${y + r}Z" fill="#6a3a1a"/>` : `<circle cx="${x}" cy="${y}" r="${r}" fill="${o?.col || '#888'}" stroke="#fff" stroke-width=".8"/>`; const fz = (7 * Math.max(0.3, this.vb[2] / W)).toFixed(2); return `<g class="node" data-n="${n.id}" style="cursor:pointer">${shape}<text x="${x + 6 * this.vb[2] / W + 2}" y="${y + 2.5}" font-size="${fz}">${esc(n.name)}</text></g>`; }).join('');
    this.svg.querySelector('.units').innerHTML = S2.units.filter((u) => u.men > 0).map((u) => { const h = this.hexes.get(u.hex); if (!h) return ''; const c = u.side === 'siddi' ? OWNERS.siddi.col : OWNERS.maratha.col; return `<g data-u="${u.id}" style="cursor:pointer"><circle cx="${h.x}" cy="${h.y - 9}" r="6.5" fill="${c}" stroke="${u.id === this.sel ? '#ffd27a' : '#fff'}" stroke-width="${u.id === this.sel ? 2 : 1}"/><text x="${h.x}" y="${h.y - 6.5}" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">${u.kind === 'fleet' ? '⛵' : '⚔'}</text></g>`; }).join('');
    const side = S2.side;
    this.el.querySelector('aside').innerHTML = `<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px">${Object.entries(CAMPAIGN_REGIONS).map(([k, R]) => `<button class="b" data-region="${k}" style="margin:0;padding:3px 7px;font-size:12px${k === this.region ? ';background:var(--ink);color:var(--paper)' : ''}">${k === 'AB' ? 'A–B' : k}</button>`).join('')}</div><h2>${esc(CAMPAIGN_REGIONS[this.region].title)}</h2><p class="sub">The regional campaign: a week a turn on the real coastline. Battles at playable forts are fought in real time.</p>
      <div class="date">${this.dateText()}</div><div class="season">${seaClosed(this.month()) ? (COAST === 'east' ? 'North-east monsoon: the Coromandel is closed to shipping.' : 'Monsoon: the sea is closed; the ghats are slow.') : mon ? 'The rains: roads and passes are slow; the sea lanes are open.' : 'Fair season: the sea lanes are open.'} Turn ${S2.turn}.</div>
      <button class="b" data-end>End turn (a week)</button><button class="b" data-new>New campaign</button><button class="b" data-ev>Evidence</button><button class="b" data-atlas>Show in atlas</button>
      ${S2.units.filter((u) => u.men > 0).map((u) => `<div class="unit${u.id === this.sel ? ' sel' : ''}" data-u="${u.id}"><b>${esc(u.name)}</b> · ${u.side === side ? 'yours' : 'enemy'}<br>${u.men.toLocaleString()} men${u.ships ? `, ${u.ships} ships` : ''} · food for ${Math.max(0, Math.floor(u.food / Math.max(1, u.men * RATION)))} days${u.siege ? ` · besieging ${esc(NODES.find((n) => n.id === u.siege)?.name)}` : ''}${u.moved ? ' · moved' : ''}</div>`).join('')}
      <div class="legend"><i style="background:rgba(120,150,80,.5)"></i>${COAST === 'east' ? 'Coastal plain' : 'Konkan lowland'} ${COAST === 'east' ? '' : '<i style="background:rgba(110,90,60,.6)"></i>Western Ghats '}<i style="background:rgba(190,160,100,.5)"></i>Deccan plateau <span class="ev inferred">inferred</span><br>
      Lines: <span style="color:#2c6a8a">sea lane</span>, <span style="color:#5a8aa0">ferry</span>, <span style="color:#8a5a2a">road</span>, <span style="color:#6a3a1a">ghat road</span>. Shift-drag to pan, wheel to zoom.</div>
      <div class="log">${S2.log.map((l) => `<div>${esc(l)}</div>`).join('')}</div>`;
    const aside = this.el.querySelector('aside');
    aside.querySelector('[data-end]').onclick = () => this.endTurn();
    aside.querySelector('[data-new]').onclick = () => { this.newGame(); this.render(); };
    aside.querySelector('[data-ev]').onclick = () => this.evidence();
    aside.querySelectorAll('[data-region]').forEach((b) => b.onclick = () => { this.setRegion(b.dataset.region); this.open(); });
    aside.querySelector('[data-atlas]').onclick = () => { this.close(); this.app.atlas.openAt(this.state.year, [BB[0] - 1, BB[1] - 0.6, BB[2] + 1, BB[3] + 0.6]); };
    aside.querySelectorAll('.unit').forEach((d) => d.onclick = () => { const u = S2.units.find((v) => v.id === d.dataset.u); if (u.side === side) { this.sel = u.id; this.render(); } });
  }
}
