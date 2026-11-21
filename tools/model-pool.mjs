// Parallel auto-T1 runner: fetch (Overpass + Terrarium) and build-t1 for many ledger sites at once, publishing to git as it goes.
//   node tools/model-pool.mjs [--queue <file of ids>] [--kinds fort] [--countries A,B] [--notcountries A,B]
//        [--fetchers 3] [--builders 2] [--publish-every 150] [--max-minutes 110] [--label "world"] [--no-push]
// Same files and rules as fetch-geometry.mjs + build-t1.mjs (it calls build-t1.mjs per site), with four differences:
//  - several sites are fetched at once (per-mirror slots, backoff on 429/504), terrain tiles in parallel;
//  - a site whose Overpass query never answers is skipped and logged, not built as an empty "location-only" scene;
//  - a trace over the size budget (250 KB / 400 elements) is rebuilt with present-day buildings and roads capped
//    (recorded in data/traces/build-options.json and in the trace's own build notes);
//  - raw geometry is deleted after each build unless it is tracked in git (raw downloads are never committed).
// Publishing (every N built sites, and at the end): model-ledger-update, region index, commit traces + ledger + options, push.
import fs from 'node:fs';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const TOOLS = path.join(root, 'tools');
const GEO = path.join(root, 'data/geometry'), TR = path.join(root, 'data/traces');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const has = (k) => process.argv.includes('--' + k);
const FETCHERS = +arg('fetchers', 3), BUILDERS = +arg('builders', 2), EVERY = +arg('publish-every', 150);
const MAXMIN = +arg('max-minutes', 110), LABEL = arg('label', 'world'), PUSH = !has('no-push'), R0 = +arg('radius', 1200);
const T0 = Date.now(), log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = 'forts.world-fort-fidelity/1.0 (https://github.com/mbaliga/forts.world)';

// ---------------------------------------------------------------- queue and ledger snapshot
let ids;
if (arg('queue')) ids = fs.readFileSync(arg('queue'), 'utf8').split(/[\s,]+/).filter(Boolean);
else {
  const qa = ['--kinds', arg('kinds', 'fort'), '--limit', '1000000'];
  if (arg('countries')) qa.push('--countries', arg('countries'));
  if (arg('notcountries')) qa.push('--notcountries', arg('notcountries'));
  ids = execFileSync('node', [path.join(TOOLS, 'model-queue.mjs'), ...qa], { encoding: 'utf8', maxBuffer: 1 << 28 }).trim().split(',').filter(Boolean);
}
const parseCsv = (t) => { const rows = []; let row = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; } else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c; } if (f || row.length) { row.push(f); rows.push(row); } return rows; };
const LED = new Map(parseCsv(fs.readFileSync(path.join(root, 'docs/fort-fidelity/ledger.csv'), 'utf8')).slice(1).map((r) => [r[0], r]));
const tracked = new Set(execFileSync('git', ['-C', root, 'ls-files', 'data/geometry'], { encoding: 'utf8', maxBuffer: 1 << 28 }).split('\n').map((p) => p.split('/')[2]).filter(Boolean));
const REBUILD = has('rebuild'); // --rebuild: build these ids again even though a trace exists (e.g. with better caps), starting from --opts
ids = ids.filter((id) => LED.has(id) && (REBUILD || !fs.existsSync(path.join(TR, id + '.trace.json'))));
// --rebuild leaves programme sites with tracked geometry alone (they were built at their own stride and may carry curation) unless --rebuild-tracked
if (REBUILD && !has('rebuild-tracked')) ids = ids.filter((id) => !tracked.has(id));
// --by-sitelinks: most-linked sites first (Wikipedia editions, read from the ledger note), so a run cut short has done the best-known forts
if (has('by-sitelinks')) { const sl = (id) => +(/sitelinks=(\d+)/.exec(LED.get(id)[11] || '') || [0, 0])[1]; const order = new Map(ids.map((id, i) => [id, i])); ids.sort((a, b) => sl(b) - sl(a) || order.get(a) - order.get(b)); }
if (REBUILD && arg('opts')) { const OF = path.join(TR, 'build-options.json'), o = JSON.parse(fs.readFileSync(OF, 'utf8')), start = JSON.parse(arg('opts')); for (const id of ids) o[id] = start; fs.writeFileSync(OF + '.tmp', JSON.stringify(o)); fs.renameSync(OF + '.tmp', OF); }
log(`pool: ${ids.length} sites queued; fetchers ${FETCHERS}, builders ${BUILDERS}, publish every ${EVERY}, stop after ${MAXMIN} min`);

// ---------------------------------------------------------------- Overpass with per-mirror slots
const MIRRORS = (process.env.OVERPASS || 'https://overpass.openstreetmap.fr/api/interpreter,https://maps.mail.ru/osm/tools/overpass/api/interpreter').split(',');
const SLOW = +arg('slow-slots', 1); // slots on the second (slower) mirror
const slots = Object.fromEntries(MIRRORS.map((m, i) => [m, { free: i === 0 ? FETCHERS : SLOW, cool: 0 }]));
async function takeSlot() {
  for (;;) {
    const now = Date.now();
    for (const m of MIRRORS) { const s = slots[m]; if (s.free > 0 && s.cool <= now) { s.free--; return m; } }
    await sleep(250);
  }
}
async function overpass(id, q) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const m = await takeSlot();
    try {
      const r = await fetch(m, { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'content-type': 'application/x-www-form-urlencoded', 'user-agent': UA }, signal: AbortSignal.timeout(150000) });
      const t = r.ok ? await r.text() : '';
      if (r.ok && t.trimStart().startsWith('{') && !/"remark"\s*:\s*"[^"]*(error|timed out|out of memory)/i.test(t)) return t;
      stats.overpassErr++;
      if (r.status === 429 || r.status === 504 || r.status === 503) slots[m].cool = Date.now() + 15000 * (attempt + 1);
      log(id, 'overpass', new URL(m).host, r.status, t.slice(0, 60).replace(/\s+/g, ' '));
    } catch (e) { stats.overpassErr++; log(id, 'overpass', new URL(m).host, e.message.slice(0, 60)); slots[m].cool = Date.now() + 10000; }
    finally { slots[m].free++; }
    await sleep(4000 * (attempt + 1));
  }
  return null;
}

// ---------------------------------------------------------------- one site: fetch (same files as fetch-geometry.mjs)
async function fetchSite(id) {
  const row = LED.get(id), lat = +row[4], lon = +row[5], R = R0, out = path.join(GEO, id);
  const q = `[out:json][timeout:90];(way["historic"](around:${R},${lat},${lon});way["barrier"~"wall|city_wall"](around:${R},${lat},${lon});way["building"](around:${R},${lat},${lon});way["natural"~"water|coastline|cliff|bare_rock"](around:${R},${lat},${lon});way["waterway"](around:${R},${lat},${lon});way["highway"](around:${R},${lat},${lon});way["landuse"](around:${R},${lat},${lon});relation["historic"](around:${R},${lat},${lon});node["historic"](around:${R},${lat},${lon}););out geom;`;
  const osm = await overpass(id, q);
  if (!osm) return false;
  fs.mkdirSync(path.join(out, 'terrarium'), { recursive: true });
  fs.writeFileSync(path.join(out, 'osm.json'), osm);
  const z = 15, n = 2 ** z, tx = (lo) => Math.floor((lo + 180) / 360 * n), ty = (la) => { const s = Math.sin(la * Math.PI / 180); return Math.floor((0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * n); };
  const dLat = R / 111320, dLon = R / (111320 * Math.cos(lat * Math.PI / 180)), tiles = [];
  for (let x = tx(lon - dLon); x <= tx(lon + dLon); x++) for (let y = ty(lat + dLat); y <= ty(lat - dLat); y++) tiles.push([x, y]);
  await Promise.all(tiles.map(async ([x, y]) => {
    for (let k = 0; k < 3; k++) {
      try { const r = await fetch(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${x}/${y}.png`, { signal: AbortSignal.timeout(60000) }); if (r.ok) { fs.writeFileSync(path.join(out, 'terrarium', `${z}_${x}_${y}.png`), Buffer.from(await r.arrayBuffer())); return; } if (r.status === 404 || r.status === 403) return; }
      catch (e) { if (k === 2) log(id, 'tile', x, y, e.message.slice(0, 50)); }
      await sleep(2000);
    }
  }));
  fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify({ id, lat, lon, radiusM: R, osm: true, tiles: tiles.length, fetched: new Date().toISOString(), licence: 'OSM ODbL; Terrarium per AWS Open Data docs' }, null, 1));
  return true;
}

// ---------------------------------------------------------------- build (child process), with automatic size caps
const OPTF = path.join(TR, 'build-options.json');
const CAPS = [{ maxBuildings: 120, maxRoads: 150 }, { maxBuildings: 60, maxRoads: 80, pruneNearM: 150 }, { maxBuildings: 30, maxRoads: 40, pruneNearM: 60, maxElements: 380 }];
const trackedTouched = new Set();
let activeBuilds = 0, publishing = false, buildFree = BUILDERS;
const STRIDE = arg('stride'); // --stride 10: height grid every 10 m (passed to build-t1 as T1_STRIDE)
const run = (args) => new Promise((res) => { const p = spawn('node', args, { cwd: root, env: STRIDE ? { ...process.env, T1_STRIDE: STRIDE } : process.env }); let o = ''; p.stdout.on('data', (d) => (o += d)); p.stderr.on('data', (d) => (o += d)); p.on('close', (code) => res({ code, out: o })); });
// Persistent build workers (build-t1.mjs --serve), one per builder: no module start per site. A worker that dies is replaced.
const workers = [];
function startWorker() {
  const p = spawn('node', [path.join(TOOLS, 'build-t1.mjs'), '--serve'], { cwd: root, env: STRIDE ? { ...process.env, T1_STRIDE: STRIDE } : process.env, stdio: ['pipe', 'pipe', 'pipe'] });
  const w = { p, busy: false, dead: false, resolve: null, err: '' }; let buf = '';
  p.stdout.on('data', (d) => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i); buf = buf.slice(i + 1); let r = null; try { r = JSON.parse(l); } catch { continue; } const f = w.resolve; w.resolve = null; if (f) f({ code: r.code, out: r.out }); } });
  p.stderr.on('data', (d) => { w.err = (w.err + d).slice(-2000); });
  p.on('exit', () => { w.dead = true; const f = w.resolve; w.resolve = null; if (f) f({ code: 1, out: 'build worker exited: ' + w.err.split('\n').filter((x) => !/Warning|trace-warnings/.test(x)).join(' ').slice(0, 200) }); });
  workers.push(w); return w;
}
const buildOne = (id) => new Promise((res) => {
  for (let k = workers.length - 1; k >= 0; k--) if (workers[k].dead) workers.splice(k, 1);
  const w = workers.find((x) => !x.busy) || startWorker(); w.busy = true;
  w.resolve = (r) => { w.busy = false; res(r); }; w.p.stdin.write(id + '\n');
});
async function buildSite(id) {
  while (publishing || buildFree <= 0) await sleep(200);
  buildFree--; activeBuilds++;
  const f0 = path.join(TR, id + '.trace.json'), bak = f0 + '.bak'; if (REBUILD && fs.existsSync(f0)) fs.copyFileSync(f0, bak);
  const restore = () => { if (fs.existsSync(bak)) { fs.renameSync(bak, f0); log(id, 'kept the previous trace'); } };
  try {
    for (let level = -1; level < CAPS.length; level++) {
      if (level >= 0) { const o = JSON.parse(fs.readFileSync(OPTF, 'utf8')); o[id] = { ...(o[id] || {}), ...CAPS[level] }; fs.writeFileSync(OPTF + '.tmp', JSON.stringify(o)); fs.renameSync(OPTF + '.tmp', OPTF); }
      const r = await buildOne(id);
      const f = path.join(TR, id + '.trace.json');
      if (r.code !== 0 || !fs.existsSync(f)) { log(id, 'BUILD FAILED', r.out.split('\n').filter((l) => !/Warning|trace-warnings/.test(l)).join(' ').slice(0, 200)); restore(); return false; }
      const size = fs.statSync(f).size, T = JSON.parse(fs.readFileSync(f, 'utf8'));
      if (size <= 250 * 1024 && T.elements.length <= 400) { fs.rmSync(bak, { force: true }); log(id, `${T.status}, ${T.elements.length} el, ${(size / 1024).toFixed(0)} KB${level >= 0 ? ' (capped ' + JSON.stringify(CAPS[level]) + ')' : ''}`); return true; }
      if (level === CAPS.length - 1) { fs.rmSync(f); log(id, 'OVER BUDGET after caps, not kept', size, T.elements.length); restore(); return false; }
    }
  } finally {
    activeBuilds--; buildFree++;
    if (!tracked.has(id)) fs.rmSync(path.join(GEO, id), { recursive: true, force: true }); else trackedTouched.add(id);
  }
}

// ---------------------------------------------------------------- publish
const stats = { built: 0, sinceCommit: 0, skipped: 0, failed: 0, overpassErr: 0 };
const sh = (cmd, args, opts = {}) => { try { return execFileSync(cmd, args, { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'pipe'], ...opts }); } catch (e) { return 'ERR ' + (e.stderr || e.message).toString().slice(0, 300); } };
const NOCOMMIT = has('no-commit'); // --no-commit: build only; another pool run (or you) commits the traces
async function publish(final = false) {
  if (!stats.sinceCommit || NOCOMMIT) return;
  publishing = true; while (activeBuilds > 0) await sleep(200);
  try {
    sh('node', [path.join(TOOLS, 'model-ledger-update.mjs')]);
    const lf = path.join(root, 'docs/fort-fidelity/ledger.csv');
    fs.writeFileSync(lf, fs.readFileSync(lf, 'utf8').replace(/(\d{4}-\d\d-\d\d): auto-T1 by model-all workflow/g, '$1: auto-T1 by the model-all pipeline run directly'));
    sh('node', [path.join(TOOLS, 'build-region-index.mjs')]);
    sh('git', ['add', 'data/traces', 'docs/fort-fidelity/ledger.csv', ...[...trackedTouched].map((id) => 'data/geometry/' + id)]); trackedTouched.clear();
    const msg = `fort-fidelity: auto-T1 batch, ${stats.sinceCommit} more forts (${LABEL}) (outline plus DEM, not plan-verified)\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_0148p4TwNEXHgZfWg3SvC6w5`;
    const c = sh('git', ['commit', '-qm', msg]);
    if (PUSH) { sh('git', ['fetch', '-q', 'origin', 'main']); sh('git', ['pull', '-q', '--rebase', 'origin', 'fort-fidelity']); const p = sh('git', ['push', '-q', 'origin', 'fort-fidelity']); if (p.startsWith('ERR') && !/moved/i.test(p)) log('push problem:', p.slice(0, 200)); }
    const pack = sh('du', ['-sh', path.join(root, '.git')]).split('\t')[0];
    log(`== pushed at ${stats.built} (${stats.sinceCommit} in this commit${c.startsWith('ERR') ? '; commit: ' + c.slice(0, 80) : ''}); pack ${pack}; overpass errors so far ${stats.overpassErr}${final ? '; FINAL' : ''}`);
    stats.sinceCommit = 0;
  } finally { publishing = false; }
}

// ---------------------------------------------------------------- main loop
let next = 0, stop = false;
process.on('SIGTERM', () => { stop = true; log('SIGTERM: finishing in-flight sites'); });
async function worker() {
  while (!stop && next < ids.length) {
    if ((Date.now() - T0) / 60000 > MAXMIN) { stop = true; break; }
    const id = ids[next++];
    if (!REBUILD && fs.existsSync(path.join(TR, id + '.trace.json'))) { stats.skipped++; continue; }
    let ok = false;
    // a site whose raw geometry is tracked in git is built from that geometry, never refetched (the tracked files are its record)
    if (tracked.has(id)) ok = fs.existsSync(path.join(GEO, id, 'meta.json'));
    else try { ok = await fetchSite(id); } catch (e) { log(id, 'fetch error', e.message.slice(0, 80)); }
    if (!ok) { stats.failed++; log(id, 'SKIPPED: Overpass never answered'); fs.rmSync(path.join(GEO, id), { recursive: true, force: true }); continue; }
    if (await buildSite(id)) { stats.built++; stats.sinceCommit++; }
    else stats.failed++;
    if (stats.sinceCommit >= EVERY && !publishing) await publish();
  }
}
await Promise.all(Array.from({ length: FETCHERS + SLOW }, worker));
for (const w of workers) w.p.stdin.end();
await publish(true);
log(`DONE: built ${stats.built}, failed ${stats.failed}, skipped ${stats.skipped}, remaining ${Math.max(0, ids.length - next)}, minutes ${((Date.now() - T0) / 60000).toFixed(0)}`);
