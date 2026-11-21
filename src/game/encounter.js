// Encounters with wild animals. Trying to capture or hunt one is a gamble: the odds are shown first, then the party
// closes in, there is a struggle, and the outcome is rolled: the animal is taken, escapes, or dies, and men can be
// hurt or killed. What may be attempted follows the period's practice: peafowl were protected in the Rajput and
// Maratha states and are sacred to many, and the langur is Hanuman's monkey, so neither can be hunted.

// per species: base chances for one man alone, in daylight and fair weather.
//   capture: taken alive; kill: the animal dies (by accident while capturing, or as the aim of a hunt);
//   hurt: someone in the party is injured; fatal: share of injuries that kill; danger: how hard it fights back.
export const WILD = {
  boar: { name: 'boar', capture: 0.06, hunt: 0.38, hurt: 0.32, fatal: 0.14, danger: 1.0, huntable: true, prize: 'meat',
    why: 'Boar were hunted on foot and on horseback with spears (pig-sticking); a cornered boar tusks men and horses.' },
  wolf: { name: 'Indian wolf', capture: 0.04, hunt: 0.3, hurt: 0.22, fatal: 0.06, danger: 0.7, huntable: true, prize: 'pelt',
    why: 'Wolves were trapped and speared as killers of sheep and goats; they bite hard when caught.' },
  peafowl: { name: 'peafowl', capture: 0.28, hurt: 0.02, fatal: 0, danger: 0.05, huntable: false,
    why: 'Peafowl could be netted alive for a palace garden, but were protected in the Rajput and Maratha states and are sacred to many; they are not hunted here.' },
  langur: { name: 'Hanuman langur', capture: 0.08, hurt: 0.1, fatal: 0, danger: 0.25, huntable: false,
    why: 'The langur is Hanuman\'s monkey and is not harmed; a captured one can only be let go. They bite and scratch.' },
  macaque: { name: 'rhesus macaque', capture: 0.12, hurt: 0.16, fatal: 0, danger: 0.3, huntable: false,
    why: 'Macaques live alongside people at temples and forts and are not hunted; they bite when grabbed.' },
};
const ARMED = /guard|musketeer|gunner|archer|sepoy/;

// odds for a party against an animal: modified by numbers, arms, light and weather
export function odds(kind, party, how, cond) {
  const S = WILD[kind]; if (!S) return null;
  const n = party.length, armed = party.filter((a) => a.player || ARMED.test(a.s?.kind || '')).length;
  const dark = cond.night > 0.5 ? 0.6 : cond.night > 0.15 ? 0.8 : 1, wet = cond.rain > 0.4 ? 0.85 : 1;
  const help = Math.min(2.4, 1 + 0.32 * (n - 1));                       // more hands, better odds (with diminishing returns)
  const arms = 1 + 0.25 * armed / Math.max(1, n);
  let take, die;
  if (how === 'hunt') { take = 0; die = Math.min(0.85, S.hunt * help * arms * dark * wet); }
  else { take = Math.min(0.8, S.capture * help * dark * wet); die = S.huntable ? Math.min(0.25, 0.04 + 0.08 * armed * S.danger) : 0; }
  // the more it is pressed, the harder it fights: injury risk grows with danger, falls with numbers sharing the work
  const hurt = Math.min(0.75, S.hurt * (how === 'hunt' ? 1.25 : 1) * (1 + 0.12 * (n - 1)) * (dark < 1 ? 1.3 : 1) / (1 + 0.2 * armed));
  const escape = Math.max(0, 1 - take - die);
  return { take, die, escape, hurt, fatal: S.fatal, n };
}
export const pct = (x) => `${Math.round(x * 100)}%`;
// round a set of shares so they still add up to 100
export function shares(O) { const a = [O.take, O.die, O.escape].map((x) => x * 100), f = a.map(Math.floor); let r = 100 - f.reduce((s, x) => s + x, 0); a.map((x, i) => [x - f[i], i]).sort((p, q) => q[0] - p[0]).forEach(([, i]) => { if (r-- > 0) f[i]++; }); return { take: f[0], die: f[1], escape: f[2] }; }

export class Encounters {
  constructor(play) { this.play = play; this.cur = null; }
  get app() { return this.play.app; }
  // nearest men who could join: soldiers and villagers not otherwise engaged
  helpers(a, max = 6) {
    const P = this.play.people.agents;
    return P.filter((b) => !b.dead && !b.co && !b.ctrl && !b.K.animal && Math.hypot(b.x - a.x, b.y - a.y) < 45 && !/tourist|student|lady|woman|asi-guard|boatman/.test(b.s.kind))
      .sort((p, q) => Math.hypot(p.x - a.x, p.y - a.y) - Math.hypot(q.x - a.x, q.y - a.y)).slice(0, max);
  }
  cond() { const st = this.app.climate?.state || {}; return { night: st.night ?? 0, rain: this.app.climate?.cur?.rain ?? 0 }; }
  begin(a, how, withN) {
    const T = this.app.traveller, men = this.helpers(a, withN);
    const party = [{ player: true }, ...men];
    const O = odds(a.s.kind, party, how, this.cond());
    this.cur = { a, how, men, O, t: 0, phase: 'approach' };
    for (const m of men) { m.ctrl = { mode: 'hunter', tgt: a, slot: men.indexOf(m) }; m.path = null; }
    this.app.walkTo(a.x, a.y, a.h, true);
    this.app.ui.toast(`${how === 'hunt' ? 'The hunt is on' : 'Closing in'}: ${men.length ? `you and ${men.length} men` : 'alone'}`);
    void T;
  }
  // the animal under pursuit runs, and turns at bay when they close in
  update(dt) {
    const E = this.cur; if (!E) return;
    const app = this.app, a = E.a, T = app.traveller, fx = this.play.fx;
    if (!this.play.people.agents.includes(a) || a.dead) { this.cur = null; return; }
    E.t += dt;
    const close = [T, ...E.men].filter((m) => Math.hypot((m.pos ? m.pos[0] : m.x) - a.x, (m.pos ? m.pos[1] : m.y) - a.y) < 3).length;
    if (E.phase === 'approach') {
      E.re = (E.re || 0) - dt; if (E.re <= 0) { E.re = 0.8; app.walkTo(a.x, a.y, a.h, true); }
      // it turns at bay once two of them are on it, or after a chase
      if (close >= Math.min(2, 1 + E.men.length) || E.t > 22) { E.phase = 'struggle'; E.t = 0; a.ctrl = { mode: 'stay' }; a.path = null; }
      return;
    }
    if (E.phase === 'struggle') {
      if (Math.random() < dt * 6) fx.burst({ x: a.x, y: a.y, h: a.h + 0.1, n: 5, up: [0.5, 1.6], out: [0.5, 2], side: 1, life: [0.6, 1.4], size: [0.4, 1.4], color: '#a08a68', alpha: 0.45, drag: 1.2, g: 2 });
      a.yaw += Math.sin(E.t * 17) * dt * 6;
      if (E.t > 2.6) this._resolve();
    }
  }
  _resolve() {
    const E = this.cur, a = E.a, app = this.app, S = WILD[a.s.kind], O = E.O, r = Math.random();
    let text;
    if (r < O.take) { text = `Taken alive: the ${S.name} is yours to lead.`; a.ctrl = { mode: 'follow', d: 2.4 }; a.captive = true; a.tame = true; }
    else if (r < O.take + O.die) { text = E.how === 'hunt' ? `The ${S.name} is killed.` : `In the struggle the ${S.name} is killed.`; a.dead = true; a.lie = true; a.ctrl = { mode: 'stay' }; if (S.prize) { this.play.inv[S.prize] = (this.play.inv[S.prize] || 0) + 1; this.play.hudDirty = true; } }
    else { text = `The ${S.name} breaks away and escapes.`; a.ctrl = { mode: 'wild' }; a.path = null; a.fleeT = 9; }
    // injuries: each man close to it may be hurt; some injuries prove fatal
    const hurt = [];
    if (Math.random() < O.hurt) {
      const pool = [...E.men, 'player'], k = 1 + (Math.random() < O.hurt * 0.5 ? 1 : 0);
      for (let i = 0; i < k && pool.length; i++) {
        const v = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
        if (v === 'player') { this.play.hurtT = 45; this.play.hudDirty = true; hurt.push('you are hurt and will move slowly for a while'); continue; }
        if (Math.random() < O.fatal) { v.dead = true; v.lie = true; v.ctrl = { mode: 'stay' }; hurt.push('one of your men is killed'); }
        else { v.hurt = 20; v.lie = true; v.ctrl = { mode: 'hurt' }; hurt.push('one of your men is injured'); }
      }
    }
    for (const m of E.men) if (m.ctrl?.mode === 'hunter') { m.ctrl = null; m.path = null; }
    const h = hurt.join('; ');
    app.ui.toast(text + (h ? ' ' + h[0].toUpperCase() + h.slice(1) + '.' : ''));
    this.cur = null;
    if (this.play.sel?.a === a) this.play.refresh();
  }
}
