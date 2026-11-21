// Sky, season and weather: sun and moon from the fort's latitude, the season and the hour; dawn, day, dusk and
// night; seasonal colour in the grass and trees; clear, hazy, overcast, rain, storm, fog and dust; solar and lunar eclipses.
import * as THREE from 'three';
import { ATMO } from './atmo.js';

const DEG = Math.PI / 180;
export const SEASONS = {
  summer: { label: 'Summer', note: 'April–May: hot, dry, hazy', day: 130, dry: 0.75, lush: 0, auto: [['clear', 4], ['hazy', 4], ['dust', 1]] },
  monsoon: { label: 'Monsoon', note: 'June–September: the rains', day: 200, dry: 0, lush: 0.9, auto: [['rain', 4], ['overcast', 3], ['storm', 2], ['clear', 1]] },
  autumn: { label: 'After the rains', note: 'October–November: green and clear', day: 295, dry: 0.08, lush: 0.6, auto: [['clear', 5], ['overcast', 1], ['hazy', 1]] },
  winter: { label: 'Winter', note: 'December–February: cool, morning fog', day: 20, dry: 0.35, lush: 0.1, auto: [['clear', 5], ['hazy', 2], ['fog', 1]] },
};
export const WEATHER = {
  clear: { label: 'Clear', sun: 1, sky: null, clouds: 0.22, cloudDark: 0, rain: 0, wet: 0, sea: 1, fog: 1, wind: 1 },
  hazy: { label: 'Hazy', sun: 0.8, sky: '#d9d6cb', clouds: 0.3, cloudDark: 0, rain: 0, wet: 0, sea: 1, fog: 0.55, wind: 1 },
  overcast: { label: 'Overcast', sun: 0.28, sky: '#b4bcbe', clouds: 0.78, cloudDark: 0.35, rain: 0, wet: 0.15, sea: 1.35, fog: 0.7, wind: 1.4 },
  rain: { label: 'Rain', sun: 0.14, sky: '#8f999c', clouds: 0.92, cloudDark: 0.55, rain: 0.6, wet: 0.85, sea: 1.6, fog: 0.45, wind: 1.7 },
  storm: { label: 'Storm', sun: 0.06, sky: '#5e686c', clouds: 1, cloudDark: 0.8, rain: 1, wet: 1, sea: 2.3, fog: 0.35, wind: 2.6, lightning: true },
  fog: { label: 'Fog', sun: 0.45, sky: '#cfd3d1', clouds: 0.4, cloudDark: 0.1, rain: 0, wet: 0.3, sea: 0.8, fog: 0.12, wind: 0.6, mist: 0.9 },
  dust: { label: 'Dust', sun: 0.5, sky: '#d2b88c', clouds: 0.15, cloudDark: 0, rain: 0, wet: 0, sea: 1.2, fog: 0.25, wind: 2, tint: '#e8b878' },
};
const lerp = (a, b, t) => a + (b - a) * t;
const mixC = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t);
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export class Climate {
  constructor(app) {
    this.app = app;
    const s = app.state.climate || {};
    this.hour = s.hour ?? (app.dark ? 19.2 : 10.5);
    this.flow = s.flow ?? true;        // does time pass? (on by default, so crops, seasons and stores move)
    this.rate = s.rate ?? 0.0167;      // game hours per real second (1 h a minute by default)
    this.season = s.season || 'autumn';
    this.day = s.day ?? SEASONS[this.season].day;   // day of the year
    this.turn = s.turn ?? true;                     // do the seasons turn while time passes?
    this.weatherSel = s.weather || 'auto';
    this.auto = { kind: 'clear', t: 0 };
    this.cur = Object.assign({}, WEATHER.clear);
    this.eclipse = null;
    this.flash = 0; this.nextBolt = 5;
    this.build();
  }
  save() { this.app.state.climate = { hour: this.hour, flow: this.flow, rate: this.rate, season: this.season, weather: this.weatherSel, day: this.day, turn: this.turn }; this.app._save(); }
  dateText() { const d = Math.floor(this.day) % 365, M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], N = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; let m = 0, r = d; while (r >= M[m]) { r -= M[m]; m++; } return `${r + 1} ${N[m]}`; }
  static seasonOf(day) { const d = ((day % 365) + 365) % 365; return d >= 60 && d < 152 ? 'summer' : d >= 152 && d < 274 ? 'monsoon' : d >= 274 && d < 335 ? 'autumn' : 'winter'; }

  // ---------------------------------------------------------------- scene objects: rain, stars, lightning bolt
  build() {
    const scene = this.app.scene;
    // rain: falling streaks in a box that follows the view
    const N = 7000, pos = new Float32Array(N * 2 * 3), seed = new Float32Array(N * 2 * 2);
    for (let i = 0; i < N; i++) { const a = Math.random(), b = Math.random(), c = Math.random(), d = Math.random(); for (let e = 0; e < 2; e++) { const k = i * 2 + e; pos[k * 3] = a; pos[k * 3 + 1] = e; pos[k * 3 + 2] = b; seed[k * 2] = c; seed[k * 2 + 1] = d; } }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 2));
    this.rainU = { uT: { value: 0 }, uC: { value: new THREE.Vector3() }, uBox: { value: 200 }, uH: { value: 60 }, uAmt: { value: 0 }, uWind: { value: new THREE.Vector2(3, 1) }, uLight: { value: 1 } };
    this.rain = new THREE.LineSegments(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: this.rainU,
      vertexShader: `uniform float uT; uniform vec3 uC; uniform float uBox; uniform float uH; uniform float uAmt; uniform vec2 uWind; attribute vec2 aSeed; varying float vA;
void main(){
  float on = step(aSeed.x, uAmt);
  float sp = 22.0 + 10.0 * aSeed.y, len = 0.9 + 0.6 * aSeed.y;
  float y = mod(aSeed.x * uH * 7.0 - uT * sp, uH);
  vec3 p = vec3((position.x - 0.5) * uBox, y - uH * 0.3, (position.z - 0.5) * uBox) + uC;
  vec3 fall = normalize(vec3(uWind.x, -sp, -uWind.y));
  p -= fall * position.y * len;
  vA = on * (0.25 + 0.3 * aSeed.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  if (on < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,
      fragmentShader: 'uniform float uLight; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.82, 0.86, 0.9) * uLight, vA); }',
    }));
    this.rain.frustumCulled = false; this.rain.renderOrder = 10; this.rain.visible = false;
    scene.add(this.rain);
    // stars: drawn only where nothing else is (the far plane), fading in at night
    this.starU = { uNight: { value: 0 }, uT: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } };
    const sg = new THREE.PlaneGeometry(2, 2);
    this.stars = new THREE.Mesh(sg, new THREE.ShaderMaterial({
      depthWrite: false, transparent: false, blending: THREE.AdditiveBlending, uniforms: this.starU,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }',
      fragmentShader: `uniform float uNight; uniform float uT; uniform vec2 uRes; varying vec2 vUv;
float h(vec2 p){ p = fract(p * vec2(443.8, 441.4)); p += dot(p, p + 19.2); return fract(p.x * p.y); }
void main(){ vec2 p = vUv * uRes / 2.2; vec2 i = floor(p), f = fract(p); float r = h(i); float s = step(0.985, r);
  vec2 o = vec2(h(i + 3.1), h(i + 7.7)); float d = length(f - o); float tw = 0.7 + 0.3 * sin(uT * (1.0 + r * 3.0) + r * 40.0);
  float a = s * smoothstep(0.12, 0.0, d) * tw * uNight; gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a, 1.0); }`,
    }));
    this.stars.frustumCulled = false; this.stars.renderOrder = 50;
    scene.add(this.stars);
    // a jagged bolt for storms, out over the sea or the plain
    const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(40 * 3), 3));
    this.bolt = new THREE.Line(bg, new THREE.LineBasicMaterial({ color: 0xf4f6ff, transparent: true, opacity: 0, depthWrite: false }));
    this.bolt.frustumCulled = false; this.bolt.renderOrder = 11; scene.add(this.bolt);
  }

  // ---------------------------------------------------------------- controls
  setHour(h) { this.hour = ((h % 24) + 24) % 24; this.save(); }
  setSeason(k) { this.season = k; this.day = SEASONS[k].day; this.auto.t = 0; this.save(); }
  setWeather(k) { this.weatherSel = k; this.auto.t = 0; this.save(); }
  startEclipse(type) {
    if (type === 'solar' && (this.hour < 9 || this.hour > 15.5)) this.hour = 12;
    if (type === 'lunar' && this.hour > 5 && this.hour < 20) this.hour = 23;
    this.eclipse = { type, t: 0, dur: 75 };
    this.app.ui.toast(type === 'solar' ? 'The moon begins to cover the sun' : 'The earth\'s shadow creeps across the moon');
  }

  // ---------------------------------------------------------------- sun position (simple solar geometry)
  sunAt(hour) {
    const lat = (this.app.levelDef?.coords?.[0] ?? 20) * DEG, N = this.day;
    const dec = 23.44 * DEG * Math.sin(2 * Math.PI * (284 + N) / 365);
    const H = (hour - 12) * 15 * DEG;
    const sinEl = Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(H);
    const el = Math.asin(sinEl);
    // azimuth clockwise from north
    let az = Math.atan2(-Math.sin(H), Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(H));
    return { el, az };
  }

  // ---------------------------------------------------------------- per frame
  update(dt) {
    const app = this.app, L = app.levelDef?.light || {}, S = SEASONS[this.season];
    this.dDays = 0;
    if (this.flow) { const h0 = this.hour; this.hour = (this.hour + dt * this.rate) % 24;
      // ten calendar days to each game day, so the year turns in about a dozen minutes at the default speed
      if (this.turn) { this.dDays = dt * this.rate / 24 * 10; this.day = (this.day + this.dDays) % 365; const ns = Climate.seasonOf(this.day); if (ns !== this.season) { this.season = ns; this.auto.t = 0; this.app.ui.toast(`${SEASONS[ns].label} begins`); } }
      void h0; this._saveT = (this._saveT || 0) + dt; if (this._saveT > 5) { this._saveT = 0; this.save(); } }
    // weather: chosen, or drawn from the season every couple of minutes, with gentle transitions
    let want = this.weatherSel;
    if (want === 'auto') {
      this.auto.t -= dt;
      if (this.auto.t <= 0) {
        const opts = S.auto.filter(([k]) => k !== 'dust' || this.app.levelDef?.arid); const tot = opts.reduce((a, [, w]) => a + w, 0);
        let r = Math.random() * tot; for (const [k, w] of opts) { r -= w; if (r <= 0) { this.auto.kind = k; break; } }
        if (this.season === 'winter' && this.hour < 9 && Math.random() < 0.5) this.auto.kind = 'fog';
        this.auto.t = 90 + Math.random() * 90;
      }
      want = this.auto.kind;
    }
    const W = WEATHER[want] || WEATHER.clear, k = Math.min(1, dt * 0.6);
    for (const key of ['sun', 'clouds', 'cloudDark', 'rain', 'wet', 'sea', 'fog', 'wind']) this.cur[key] = lerp(this.cur[key] ?? W[key], W[key], k);
    this.cur.kind = want; this.cur.mist = lerp(this.cur.mist ?? 0, W.mist ?? 0, k);
    // sun and moon
    const { el, az } = this.sunAt(this.hour);
    const elD = el / DEG;
    const day = smooth(-4, 6, elD), twilight = smooth(-14, -2, elD) * (1 - smooth(4, 16, elD));
    const night = 1 - smooth(-12, -3, elD);
    // eclipse progress (0 → 1 → 0)
    let ec = 0;
    if (this.eclipse) {
      this.eclipse.t += dt; const f = this.eclipse.t / this.eclipse.dur;
      if (f >= 1) { this.eclipse = null; app.ui.toast('The eclipse is over'); } else ec = Math.pow(Math.sin(f * Math.PI), 1.5);
    }
    const solar = this.eclipse?.type === 'solar' ? ec : 0, lunar = this.eclipse?.type === 'lunar' ? ec : 0;
    // light colours through the day
    const low = 1 - smooth(4, 22, elD);
    const sunCol = mixC(L.sunColor || '#fff1dc', '#ff9a52', low * 0.85).lerp(new THREE.Color('#ff6a3a'), smooth(3, -2, elD) * 0.6);
    const moonCol = mixC('#a9bde0', '#b8543a', lunar);
    const daySky = new THREE.Color(L.sky || '#dfe7e6'), goldSky = new THREE.Color('#e9c7a2'), duskSky = new THREE.Color('#40415e'), nightSky = new THREE.Color('#141d2e');
    let sky = daySky.clone().lerp(goldSky, low * day * 0.75).lerp(duskSky, twilight * (1 - day)).lerp(nightSky, night);
    if (W.sky) sky.lerp(new THREE.Color(W.sky).multiplyScalar(0.25 + 0.75 * Math.max(day, 0.15)), (1 - this.cur.sun) * 0.9 * (0.4 + 0.6 * day));
    sky.lerp(new THREE.Color('#1a2030'), solar * 0.8);
    // directional light: the sun by day, the moon by night
    const sunOn = day * this.cur.sun * (1 - 0.96 * solar);
    // moonlight: cloud dims it but does not black it out, so a night scene stays readable
    const moonOn = night * 0.38 * (1 - 0.8 * lunar) * (0.7 + 0.3 * this.cur.sun);
    let dir;
    if (sunOn >= moonOn) dir = new THREE.Vector3(Math.cos(Math.max(el, 4 * DEG)) * Math.sin(az), Math.sin(Math.max(el, 4 * DEG)), -Math.cos(Math.max(el, 4 * DEG)) * Math.cos(az));
    else { const mel = 52 * DEG, maz = az + Math.PI; dir = new THREE.Vector3(Math.cos(mel) * Math.sin(maz), Math.sin(mel), -Math.cos(mel) * Math.cos(maz)); }
    app.sun.color.copy(sunOn >= moonOn ? sunCol : moonCol);
    app.sun.intensity = (L.sun ?? 2.6) * sunOn + 1.4 * moonOn;
    const hemiK = (L.hemi ?? 1.25) * (0.16 + 0.84 * day + 0.25 * twilight) * (0.75 + 0.25 * this.cur.sun) * (1 - 0.7 * solar);
    app.hemi.intensity = hemiK * (1 - 0.5 * night) + 0.58 * night;
    app.hemi.color.copy(mixC(L.hemiSky || '#e3ecef', '#c9a0a8', twilight * 0.6).lerp(new THREE.Color('#5a6a90'), night));
    app.hemi.groundColor.copy(mixC(L.hemiGround || '#9a8a6a', '#2a2a36', night));
    // lightning
    if (W.lightning && this.cur.rain > 0.5) {
      this.nextBolt -= dt;
      if (this.nextBolt <= 0) { this.nextBolt = 4 + Math.random() * 9; this.flash = 1; this._bolt(); this.app.audio?.thunder(0.6 + Math.random() * 2); }
    }
    if (this.flash > 0) { const f = this.flash; app.hemi.intensity += 3.5 * f * (Math.random() < 0.7 ? 1 : 0.3); sky.lerp(new THREE.Color('#dfe6ff'), f * 0.6); this.flash = Math.max(0, f - dt * 5); this.bolt.material.opacity = f; } else this.bolt.material.opacity = 0;
    // apply sky, fog and shadows
    app.renderer.setClearColor(sky);
    if (app.scene.fog) {
      const fogCol = sky.clone(); if (W.tint) fogCol.lerp(new THREE.Color(W.tint), 0.5);
      app.scene.fog.color.copy(fogCol);
      const f = this.cur.fog * (this.season === 'winter' && this.hour < 9.5 ? 0.5 : 1);
      app.scene.fog.near = 2480 + (L.fogNear ?? 120) * f - (1 - f) * 260; app.scene.fog.far = 2480 + (L.fogFar ?? 1500) * f + 80;
    }
    const prev = app.sunDir; app.sunDir = dir.normalize();
    if (!prev || prev.angleTo(app.sunDir) > 0.006) { this._sh = (this._sh || 0) + dt; if (this._sh > 0.4 || !prev) { this._sh = 0; app.lastShadow.set(1e9, 0, 0); } }
    // shared shader state
    ATMO.uCloud.value = this.cur.clouds; ATMO.uCloudDark.value = this.cur.cloudDark * (1 - 0.5 * night);
    ATMO.uCloudShade.value = 0.42 * Math.max(0.15, day * this.cur.sun);
    ATMO.uWet.value = this.cur.wet; ATMO.uSeaAmp.value = this.cur.sea; ATMO.uDry.value = S.dry; ATMO.uLush.value = S.lush;
    ATMO.uMistBoost.value = this.cur.mist + (this.season === 'winter' && this.hour < 9 ? 0.4 : 0) + night * 0.15;
    ATMO.uWind.value.set(0.006 * this.cur.wind, 0.0025 * this.cur.wind);
    this.light = Math.max(0.12, Math.min(1, 0.2 + 0.8 * day * (0.5 + 0.5 * this.cur.sun) - 0.6 * solar));
    ATMO.uSkyLight.value = Math.max(0.1, this.light);
    // the interface goes dark with the sky, so its text and edge fades stay legible over a dark scene
    const sky2 = this.light < 0.36 ? 'night' : 'day';
    if (document.documentElement.dataset.sky !== sky2) document.documentElement.dataset.sky = sky2;
    // rain follows the view
    const R = this.cur.rain;
    this.rain.visible = R > 0.02;
    if (this.rain.visible) {
      const t = app.cam.target, vh = app.cam.viewH;
      this.rainU.uT.value = app.t; this.rainU.uC.value.set(t.x, t.y, t.z); this.rainU.uBox.value = Math.min(500, vh * 2.2 + 40); this.rainU.uH.value = Math.min(160, vh * 0.9 + 30);
      this.rainU.uAmt.value = R * Math.min(1, 160 / Math.max(60, vh)) + R * 0.15; this.rainU.uWind.value.set(3 * this.cur.wind, 1.2 * this.cur.wind); this.rainU.uLight.value = 0.4 + 0.6 * this.light;
    }
    this.starU.uNight.value = night * (1 - this.cur.clouds * 0.9) + solar * 0.5; this.starU.uT.value = app.t;
    this.starU.uRes.value.set(app.renderer.domElement.width, app.renderer.domElement.height);
    this.stars.visible = this.starU.uNight.value > 0.01;
    this.state = { el: elD, az: az / DEG, day, night, twilight, ec, solar, lunar, kind: want };
  }
  _bolt() {
    const app = this.app, t = app.cam.target, a = Math.random() * Math.PI * 2, d = 120 + Math.random() * 250;
    const x = t.x + Math.cos(a) * d, z = t.z + Math.sin(a) * d, top = 200, P = this.bolt.geometry.attributes.position;
    let px = x, pz = z;
    for (let i = 0; i < 40; i++) { const y = top - (top / 39) * i; px += (Math.random() - 0.5) * 9; pz += (Math.random() - 0.5) * 9; P.setXYZ(i, px, y, pz); }
    P.needsUpdate = true;
  }
  phaseName() {
    const s = this.state; if (!s) return '';
    if (this.eclipse) return this.eclipse.type === 'solar' ? 'Solar eclipse' : 'Lunar eclipse';
    if (s.el < -12) return 'Night'; if (s.el < -2) return this.hour < 12 ? 'First light' : 'Dusk';
    if (s.el < 8) return this.hour < 12 ? 'Dawn' : 'Sunset'; if (this.hour < 11) return 'Morning'; if (this.hour < 15) return 'Midday'; return 'Afternoon';
  }
}
