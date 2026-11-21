// Sound, synthesised in the browser (no recordings): wind, surf, birds by day and crickets by night, rain and
// thunder; guns, matchlocks and the splash of shot; a nagara drum for alarms; a soft click for the interface.
export class Audio {
  constructor(app) { this.app = app; this.on = app.state.sound !== false; this.ctx = null; this.started = false; this.nextBird = 2; this.nextCricket = 0; }
  start() {
    if (this.started || !this.on) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    this.ctx = new AC(); this.started = true;
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = 0.55; this.master.connect(c.destination);
    // a shared noise buffer
    const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    let b = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = 0.985 * b + 0.015 * w; d[i] = b * 6 + w * 0.15; }
    this.noise = buf;
    const loop = (filterType, freq, q, gain) => { const s = c.createBufferSource(); s.buffer = buf; s.loop = true; const f = c.createBiquadFilter(); f.type = filterType; f.frequency.value = freq; f.Q.value = q; const g = c.createGain(); g.gain.value = gain; s.connect(f); f.connect(g); g.connect(this.master); s.start(); return { s, f, g }; };
    this.wind = loop('lowpass', 420, 0.4, 0.0);
    this.surf = loop('bandpass', 700, 0.5, 0.0);
    this.rain = loop('highpass', 2600, 0.3, 0.0);
  }
  toggle() { this.on = !this.on; this.app.state.sound = this.on; this.app._save(); if (this.on) { this.start(); this.ctx?.resume(); } else this.ctx?.suspend(); }
  // ---------------------------------------------------------------- one-shots
  _env(node, t0, a, peak, dur) { node.gain.setValueAtTime(0.0001, t0); node.gain.exponentialRampToValueAtTime(peak, t0 + a); node.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); }
  _noiseShot(type, freq, q, peak, dur, delay = 0) {
    const c = this.ctx; if (!c) return; const t0 = c.currentTime + delay;
    const s = c.createBufferSource(); s.buffer = this.noise; const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = c.createGain();
    this._env(g, t0, 0.005, peak, dur); s.connect(f); f.connect(g); g.connect(this.master); s.start(t0, Math.random()); s.stop(t0 + dur + 0.1);
    return f;
  }
  _tone(freq, peak, dur, type = 'sine', delay = 0, glide = 0) {
    const c = this.ctx; if (!c) return; const t0 = c.currentTime + delay;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t0); if (glide) o.frequency.exponentialRampToValueAtTime(freq * glide, t0 + dur);
    const g = c.createGain(); this._env(g, t0, 0.004, peak, dur); o.connect(g); g.connect(this.master); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  // distance falls off with the view: louder when the camera is near
  _near(x, y) { const t = this.app.cam.target, d = Math.hypot(x - t.x, -y - t.z) / Math.max(30, this.app.cam.viewH); return Math.max(0.08, 1 - d * 0.7); }
  cannon(x, y) { if (!this.ctx) return; const k = this._near(x, y); this._noiseShot('lowpass', 900, 0.7, 0.9 * k, 1.6); this._tone(55, 0.6 * k, 0.9, 'sine', 0, 0.5); this._noiseShot('lowpass', 300, 0.5, 0.35 * k, 2.6, 0.05); }
  musket(x, y, n = 3) { if (!this.ctx) return; const k = this._near(x, y); for (let i = 0; i < n; i++) this._noiseShot('bandpass', 1800 + Math.random() * 900, 0.8, 0.35 * k, 0.22, i * 0.06 + Math.random() * 0.12); }
  splash(x, y) { if (!this.ctx) return; const k = this._near(x, y) * 0.7; this._noiseShot('bandpass', 1200, 0.4, 0.4 * k, 1.1); }
  thud(x, y) { if (!this.ctx) return; const k = this._near(x, y) * 0.7; this._noiseShot('lowpass', 400, 0.6, 0.5 * k, 0.6); }
  thunder(delay = 1) { if (!this.ctx) return; const f = this._noiseShot('lowpass', 260, 0.4, 0.8, 3.8, delay); f?.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + delay + 3.5); }
  // a nagara (kettledrum) beat: low membrane with a quick pitch drop
  drum(n = 3) { if (!this.ctx) return; for (let i = 0; i < n; i++) { this._tone(110, 0.5, 0.45, 'sine', i * 0.28, 0.55); this._noiseShot('lowpass', 500, 0.6, 0.25, 0.12, i * 0.28); } }
  click() { if (!this.ctx) return; this._tone(1400, 0.05, 0.05, 'triangle'); }
  bird() { const base = 2400 + Math.random() * 1600, n = 2 + (Math.random() * 4 | 0); for (let i = 0; i < n; i++) this._tone(base * (0.9 + Math.random() * 0.25), 0.04, 0.09, 'sine', i * 0.12, 1.15); }
  cricket() { for (let i = 0; i < 3; i++) this._tone(4300, 0.018, 0.035, 'square', i * 0.06); }
  // ---------------------------------------------------------------- the ambient bed, every frame
  update(dt) {
    if (!this.ctx || !this.on) return;
    const C = this.app.climate, st = C?.state || {}, W = this.app.world;
    const wind = Math.min(1, 0.2 + 0.3 * (C?.cur?.wind ?? 1)), rain = C?.cur?.rain ?? 0;
    const zoom = Math.min(1, 120 / Math.max(40, this.app.cam.viewH));
    const sea = W?.seaLevel != null ? 0.6 * (C?.cur?.sea ?? 1) * (0.6 + 0.4 * Math.sin(this.app.t * 0.92) ** 2) : 0;
    const k = 0.15;
    this.wind.g.gain.setTargetAtTime(0.05 * wind + 0.03, this.ctx.currentTime, 0.5);
    this.wind.f.frequency.setTargetAtTime(300 + 500 * wind, this.ctx.currentTime, 1);
    this.surf.g.gain.setTargetAtTime(0.09 * sea * (0.4 + 0.6 * zoom), this.ctx.currentTime, k);
    this.rain.g.gain.setTargetAtTime(0.12 * rain, this.ctx.currentTime, 0.6);
    // birds by day, crickets at night
    this.nextBird -= dt; this.nextCricket -= dt;
    if ((st.day ?? 1) > 0.5 && rain < 0.3 && this.nextBird <= 0) { this.nextBird = 2 + Math.random() * 6; this.bird(); }
    if ((st.night ?? 0) > 0.5 && rain < 0.3 && this.nextCricket <= 0) { this.nextCricket = 0.5 + Math.random() * 1.4; this.cricket(); }
  }
}
