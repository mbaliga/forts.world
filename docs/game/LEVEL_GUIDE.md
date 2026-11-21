# Writing a fort level

A level is one ES module in `src/levels/<slug>.js` exporting a plain object (`export default { ... }`).
`src/levels/janjira.js` is the reference level: read it first and copy its structure.
The engine builds the level from code: terrain from a list of operations, then structures through
the `W` (World) API inside `build(W)`. Everything is rebuilt for each era.

## Rules for parallel work

- Only create or edit **your own level file** (`src/levels/<slug>.js`). Do not touch `src/core/*`, `src/game/*`,
  `src/plan/*`, `src/levels/index.js`, `src/levels/janjira.js`, `build.mjs` or `page.html`; other levels are being
  written at the same time. If you need a helper, write it inside your level file using the public API below.
  If an engine bug blocks you, work around it in your file and describe the bug in your final report.
- Put screenshots under `/home/claude/forts/tools/shots/` with your slug as the name prefix.

## Test loop (run all of these from `/home/claude/forts/engine`)

1. `node tools/smoke.mjs src/levels/<slug>.js` builds every era in Node and reports build time, triangle and
   instance counts, and **unreachable places**. Every place must be reachable on foot from the spawn in every era.
2. `node build.mjs --level src/levels/<slug>.js` writes `../dist/test-<slug>.html` containing just your level.
3. `cd ../tools && python3 shoot.py <slug>-a html=/home/claude/forts/dist/test-<slug>.html key=Escape zoom=70 shot:spawn era=<id> zoom=400 wait=1500 shot:wide`
   renders headless screenshots into `tools/shots/` (open them with the Read tool to look).
   Actions: `key=Escape` (close help), `zoom=<viewH>`, `rot=<azimuth deg>`, `era=<id>`, `goto=x,y,h` (teleport the
   traveller and camera), `walk=x,y,h`, `wait=<ms>`, `shot` / `shot:<label>`, `size=390x844` (phone), `dark`.
   Swiftshader rendering is slow: keep one shoot.py run under ~8 shots.
4. Look at the screenshots critically and iterate: readable silhouettes, nothing floating or sunk, gates you can
   walk through, walls meeting bastions, buildings not overlapping walls or each other, people on the right surfaces.

## Coordinates and units

- Plan coordinates: **x = east, y = north**, in level units. Heights `h` are up. One unit is about one metre at
  human scale: the traveller is 1.8 units tall, walks 5.5 units/s.
- Big forts are **compressed in plan**: set `units.planScale` (metres of the real fort per level unit) so the
  scale bar on the plan stays honest. Building heights and gate openings stay at human scale (gates at least 3 units
  wide, about 5–7 high; walls 6–14 high; wall-walks at least 2.5 wide). `units.vScale` converts unit heights to
  metres for the elevation readout (use 1 unless you compressed heights, e.g. a 180 m cliff modelled 45 units → 4).
- Keep `bounds` (x0, y0, x1, y1) within about **600 × 600 units** (the nav grid is 1 unit per cell). Keep the edges of
  the terrain flat and plain (use the `edge` op) so the world meets the apron cleanly.
- `datum` and `datumLabel` define the elevation readout (e.g. plain = 0, "above the plain").

## Level object

```js
export default {
  id: 'golconda', name: 'Golconda', native: { text: 'గోల్కొండ', lang: 'te', script: 'telu' },
  // script: 'mr' Marathi Devanagari, 'deva' Hindi Devanagari, 'telu' Telugu, 'taml' Tamil
  region: 'Hyderabad · Telangana', type: 'Citadel and walled city', coords: [17.3854, 78.4041],
  poiCount: POIS.length, groundName: 'Outer fort', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 2.5, vScale: 1 },
  bounds: [-280, -260, 280, 260], stride: 2, seed: 4,
  water: null,                     // { sea: 0 } for sea forts only
  apron: { h: 0, color: '#a99b67' },  // flat ground (or seabed) beyond the bounds
  view: { az: -45, el: 40, zoom: 70, introAt: [x, y], introZoom: 380 },  // az = direction the camera sits (deg from east)
  light: { sky: '#dfe5e2', sunAz: -120, sunEl: 52 },
  palette: { ... },                // see DEFAULT_PAL in src/core/world.js for all keys
  eraPalette: { '1686': { plaster: '#e8e2d2' }, today: { ... } },
  eras: [ { id, year, label, short, lens, summary, basis, conjecture, sources: ['GOL-01', ...] }, ... ],
  terrain: (era, W) => [ ...ops ],
  build(W) { ... },
};
```

- `eras`: exactly three, oldest first. `lens`: `'engraving'` (painted or engraved sources), `'albumen'`
  (19th/early-20th c. photographs), `'none'` (today). `summary` is one sentence shown under the fort name, written
  to make the moment vivid. `basis` names what the moment is drawn from; `conjecture` says plainly what is
  reconstructed. `sources` are catalogue IDs from `../deliver/Indian-Forts/catalog.json` for your fort.
- Palette keys (hex strings): wall, wallTop, trim, stone, plaster, plasterDark, roof, dome, wood, iron, door, window,
  grass, dry, rock, cliff, sand, road, court, field, mud, seabed, paved, garden, water, tank, leaf, leafDry, trunk,
  flag, accent, tile, tileYellow, tileGreen. Any `color:` option accepts a palette key or a hex string.

## Terrain operations (applied in order to a height grid)

```
{ op: 'base', h }                                          flat start (plain or seabed)
{ op: 'noise', amp, scale, poly?, edge? }                  add fbm noise (optionally inside a polygon)
{ op: 'raise', poly, h, edge, profile, mode, dome, domeR, rough, roughScale }   raise a polygon (islands, mesas, terraces)
{ op: 'plateau', ...same as raise }                        alias of raise
{ op: 'hill', x, y, r | rx+ry, rot, h, base, top, profile, rough, roughScale, wobble }  radial hill, top = flat fraction
{ op: 'ridge', path: [[x,y,h],...], w, edge, profile }      long ridge (Aravalli spurs)
{ op: 'flatten', poly, h, edge }                           level a court or terrace to h
{ op: 'ramp', path: [[x,y,h],...], w, edge, paint }        cut-and-fill road along a path (keep slopes < 0.45 rise/run)
{ op: 'dig', poly, h, edge }                               lower below h (moats, ditches, lakes)
{ op: 'moat', path, closed, w, h, edge }                   dig along a polyline
{ op: 'paint', poly | path+w, paint }                      paint: 'road' | 'court' | 'paved' | 'field' | 'sand' | 'rock' | 'garden' | 'mud'
{ op: 'edge', h, w }                                       blend to h near the bounds (put it after shaping ops)
profiles: 'smooth' (default), 'linear', 'cliff' (steep near the rim), 'scarp' (near-vertical drop), 'concave', 'convex'
modes (raise/hill/ridge): 'max' (default, only raises), 'set', 'min', 'add'
```

Cliffs: a `raise`/`plateau` with `profile: 'scarp'` and a small `edge` (4–8) makes an unclimbable rock face;
slopes steeper than about 0.6 rise per unit are not walkable, so access must go by ramps or stairs.
Roads up hills: `ramp` ops with gentle grades (switchbacks for big heights), painted `'road'`.

## World API (inside `build(W)`)

Helpers from `./kit.js`: `rectPts(cx,cy,w,d,rotDeg)`, `ellipsePts(cx,cy,rx,ry,n,rotDeg,wobble,seed)`,
`regularPoly(cx,cy,r,n,rotDeg)`, `onEllipse(rx,ry,deg,cx,cy)`, `wallStairs(W, wall, {at, dir, run, w, top})`,
`bastionsAt(W, wall, angles, [rx,ry,cx,cy], opts)`.

- `W.era`, `W.is('1686','today')`, `W.pick({ '1686': a, today: b, default: c })` — branch on era.
- `W.ground(x, y)` terrain height. Terrain changes after `build()` starts are only allowed through `W.tank` (it digs).
- **Walls** `W.wall({ path, closed, top | h, thick, batter, parapet:{h,t} | false, merlon:{style,w,gap,h} | false, walk, color, outer, smooth })`
  - `top`: absolute wall-walk height (number or `(x,y,s)=>h`); or `h`: height above the inner ground (follows terrain).
  - closed paths: interior is wherever the polygon encloses; open paths: `outer: 'left' | 'right'` relative to travel.
  - merlon styles: `'round'` (Deccan/Konkan), `'kangura'` (Rajput/Mughal leaf), `'pointed'`, `'rect'`.
  - The wall-walk is walkable (tag rampart) and connects to bastions automatically. Reach it with `wallStairs` or
    stairs ending level with the walk. Keep stairs at least `r + 3` units from any bastion centre.
- **Bastions** `W.bastion({ at, r, wall, off, dh | top, shape:'round'|'square'|'octagon', cannon, flag, merlon, color })`.
  Attached to a wall they snap to it; `off` pushes the centre outward. Their top is walkable.
- **Gates** `W.gate({ wall, at, width, spring, rise, style:'pointed'|'round'|'flat', towers:{r,dh,off,gap} | false, name, doors, spikes, frame, panel, upper:'chhatri'|'pavilion', floor })`.
  The ground under a gate must be **level and continuous** inside and out — flatten or ramp it in the terrain ops.
  For a gate across a road (ramp gates, the "pols"), make a short open wall across the road and put the gate in it.
  `name` creates a zone so the HUD shows the gate's name while the traveller is in it.
- `W.stairs({ from:[x,y,h?], to:[x,y,h?], w, color, side })` solid flight; walkable; 0.3 rise per step.
- `W.platform({ poly, h | dh, color, tag })` raised walkable terrace. `W.bridge({ from, to, w, h | h0+h1, piers, rail })`.
- `W.tank({ x, y, r, n, rot | poly, rim, waterDepth, tiers })` stepped tank/kund (digs the terrain itself).
- `W.water({ poly, level })` open water (lakes, wet moats) — dig the terrain below `level` in the terrain ops first.
- `W.tunnel({ path:[[x,y,h],...], w, height, name })` rock-cut passage walkable below the terrain surface; the
  screen darkens inside. Make both ends meet open ground.
- **Buildings** `W.building({ rect:[x,y,w,d,rot] | poly, base?, h | storeys+storeyH, color, roofColor, roof, parapet, merlon,
  windows:{style:'arch'|'rect'|'jali', spacing, w, h, rows}, chhatris:'corners'|[[x,y],...], chhatriSize, jharokhas:{every,size,rows},
  setbacks:[{h,inset}], walkRoof, kind, ruin })`
  - roofs: `'flat'` (with parapet, optional merlons), `'dome'`/`'domes'` (+`domes:[{x,y,r,shape}]`, `domeShape`),
    `'pyramid'`, `'hip'`, `'stepped'`, `'vault'`, `'bangaldar'`, `'gable'`/`'tiled'`.
  - `kind` sets the plan class: 'palace', 'house', 'temple', 'mosque', 'granary', 'barracks', 'building'.
  - `ruin: true` (or `W.ruin({...})`) draws a roofless broken shell with `doors:[{edge, at, w}]` you can walk into.
- `W.dome({ x, y, r, base, shape:'onion'|'half'|'bulb'|'low'|'bell', drum, color })`, `W.chhatri({ x, y, base, size, h, cols, dome })`
- `W.pavilion({ x, y, w, d, rot, plinth, colH, cols:[nx,ny], roof, color, walk, stairs })` baradari / mandapa / colonnade (walk-in).
- `W.temple({ x, y, rot, w, h, plinth, style:'nagara'|'jain'|'dravida'|'wagon', mandapa:{d,w,h,roof} | false, flag })` faces local −y.
- `W.gopuram({ x, y, w, d, rot, tiers, h })`, `W.tower({ x, y, w, storeys, sh, taper, top:'chhatri'|'dome' })` (stambha),
  `W.minaret({ x, y, r, h, rings })`, `W.mosque({ x, y, w, d, rot, domes, minarets, court:{d} })` (prayer hall faces local +y).
- `W.houses({ poly, count, size:[a,b], h:[storeys a,b], colors:[...], roof:'flat'|'tiled'|'mix', rot, spacing, ruin, ruinShare, chhatriChance, jharokhaChance, seed })`
- Props: `W.cannon({ x, y, h, dir, len, r, carriage })`, `W.flag({ x, y, h, pole, color, size })`, `W.well({ x, y, r })`,
  `W.tree({ x, y, type, s })`, `W.trees({ poly, count, types:{palm,round,neem,mango,acacia,khejri,shrub,ashoka,banyan,grass}, s, minDist, seed })`,
  `W.boulder({ x, y, s })`, `W.boulders({ poly | x,y,r, count, s:[a,b], seed })`, `W.boat({ x, y, dir, size, path, speed })`,
  `W.scenery({ poly, h0, h1, color } | { hill:{x,y,r,h} })` render-only scenery outside the bounds.
- **People** `W.npc({ kind, count, at | circle:[x,y,r] | zone:poly | patrol:[[x,y,h],...], mode:'wander'|'patrol'|'idle', h, face, speed, scale })`.
  Kinds: guard-siddi, guard-maratha, guard-mughal, guard-rajput, guard-deccan, courtier, sailor, sepoy, officer, lady,
  villager, merchant, priest, pilgrim, woman-red, woman-green, woman-indigo, boatman, fisherwoman, tourist-a/b/c/d,
  asi-guard, student; animals: elephant, elephant-royal, camel, horse, cow, goat.
  Give `h` for people standing on raised surfaces (ramparts, bastions). Patrol points carry their height.
- `W.zone(poly, name)` names an area for the HUD. `W.label(x, y, text)` plan-only label.
- **Places** `W.poi({ id, at:[x,y], h?, r, hTol, title, text, source, eraNote })` — 10 to 14 per fort, from section 8
  of the research file. Put each on walkable ground (not inside a building footprint); `r` is the trigger radius.
  `eraNote` is one sentence specific to the current era (write a per-era map in the data and pass the right one).
- `W.spawn(x, y, h, facingDeg)` where the traveller starts (at the approach: landing, outer gate, foot of the ramp).

## Design notes

- Read your research file fully. Follow it where it is sourced; where it is estimated, choose plausibly and keep
  the layout legible. Do not invent named structures; the places must match the research.
- RTS readability: strong silhouettes, distinct materials per fort (basalt, laterite, granite, golden sandstone,
  red sandstone), a visible approach route, gates that read as gates, and a clear highest point.
- Eras should differ visibly and plausibly: intact vs ruined buildings, flags, cannons, people and animals
  (garrison and court in the early era; caretakers or villagers in the photograph era; visitors today),
  vegetation (overgrown in the 19th century), siege camps when the moment is a siege.
- Budget: solid triangles under ~250k, instances under ~6k, `build` + `finish` under ~2.5 s per era in Node.
- Avoid placing stairs, gates and buildings where bastion bodies or other obstacles overlap them; use
  `node tools/smoke.mjs` to confirm reachability and look at screenshots for overlaps.
