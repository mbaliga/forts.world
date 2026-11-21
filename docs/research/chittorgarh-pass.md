# Chittorgarh: fort-fidelity pass (batch 2, board-validated T1)

Date of pass: 2026-11-11. Branch `fort-fidelity`. Trace: `src/levels/chittorgarh.trace.js`
(from `data/traces/chittorgarh.trace.json` plus `tools/trace/curation/chittorgarh.mjs`). Level: `src/levels/chittorgarh.js` (`makeT1` over the trace, id `chittorgarh`).
The older hand level is kept as `src/levels/chittorgarh-hand.js` (id `chittorgarh-hand`, not registered).
Plan material: `data/plans/chittorgarh/` (ASI Jaipur Circle guide board, 2010, photo by Amitbanerjee0143, CC BY-SA 4.0). Registration: `data/plans/chittorgarh/registration.json`.

**Status: `needs-plan`, tier T1 (plan-validated).** The mapped geometry is OpenStreetMap; the board is used to check it and to add four features OSM lacks.
No survey-grade plan was found, so nothing here is T2.

**Method and limit.** The board is a tourist guide map photographed at an angle, not a survey. It was registered to OSM by a similarity fit on 12 named control points
(named tanks and palaces that both the board and OSM carry). Because the control points were chosen from features both show, every other named feature is a check.

## Two layers

- **Documented/mapped layer** (eras `1568`, `today`): OSM outline, ring wall line, walls, gates, buildings, tanks, roads; plus three tanks and the Kirti Stambh symbol read from the board. All kerb-high; no invented heights.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): a schematic with assumed heights: a rampart ring (8 m high, 3 m thick), Vijay Stambh (37 m) and Kirti Stambh (24 m), each carrying a `basis`.

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Sieges | 1303 (Alauddin Khalji), 1534-35 (Bahadur Shah), 1567-68 (Akbar; captured 1568) | Britannica | secondary |
| Fort height | about 180 m above the plain | Britannica | secondary |
| Size | circumference about 13 km; about 700 acres | Britannica | secondary; conflicts with the mapped ring (below) |
| Towers | Kirti Stambh 12th century; Vijay Stambh 15th century | Britannica (no heights) | secondary |
| Protection | UNESCO 2013 (Hill Forts of Rajasthan) | Britannica | secondary |
| Board features | Surhadia tank, Mrigvan pond, one more tank, Kirti Stambh symbol | ASI guide board 2010 | board, +-30 m after registration |

## Mapped (OpenStreetMap, ODbL)

The outline, the 1095-vertex ring wall (way 549769775), about 40 other walls, buildings, tanks and roads. Thirteen OSM `historic=city_gate` nodes within 30 m of a wall were promoted
to `gate-N` elements (mapped, confidence 0.6) with a plain opening; the node's name and form are not mapped, so no gate form is drawn.
Steps and path-class roads (41 ways) were dropped to keep the trace within the 250 KB budget. Terrain: Terrarium z15, about 20 m cells over a 1.5 x 5.65 km rectangular window (`bounds` build option).

## Registration accuracy (honest)

- Fit: similarity, 1.9375 m per board pixel, rotation -89.7 degrees (north is to the left of the board); rms 20.1 m over the 12 controls; leave-one-out median 19.6 m.
- Independent checks (not in the fit): Ratan Singh's Palace 3 m, Kalika Mata Temple 3 m, Padmini's Palace 8 m, Bhanpur Haveli 11 m, Bhamashah Haveli 12 m, Fatta Haveli 12 m, Vijaya Stambh symbol 16 m, Kumbha Palace 46 m.
- Worst control residuals: Bhimlat Kund 44 m, Kumaria Talab 32 m. Stated accuracy of board-sourced features: about +-30 m.
- The three board tanks have **no OSM water within 130-480 m** of their centres, so they are not corroborated by OSM. They are drawn as board contours (colour threshold) and labelled so.

Inland water: OSM maps 20 tanks and kunds with no surface height. Each is given a **derived** level, the lowest 20 m DEM value on its outline, so the water sits at its lowest rim.
(Without a level the pipeline floods at sea level, which on this 540 m plateau digs a shaft hundreds of metres deep; that was found in the first screenshots and fixed here.) The levels are not read from any source.

## Inferred (flagged `inferred` in the trace)

- **Era 1568.** The OSM walls, ring, gates and buildings are carried back unchanged to 1568 (about 450 years); some buildings are certainly later. Carried-back elements are named "carried back, inferred".
- **Heights.** None on the documented layer. On the constructed layer the 8 m / 3 m rampart is illustrative (no wall height was read in this pass); the 37 m Vijay Stambh comes from the earlier hand level's Wikipedia citation and the 24 m Kirti Stambh from catalogue entry CHI-24; **neither was re-checked here**.

## Not traced

The gate forms (Ram Pol, Suraj Pol and the others), the other board footprints (palaces, temples, havelis beyond the checks above), the Mrigvan area and other features the old hand level had,
the approach road and ramps in detail, the 41 dropped steps and paths, bastions, the sieges' works (1303, 1535, 1568 mines), and any interior terracing.

## Conflicts

- **Size.** Britannica gives a circumference of about 13 km and about 700 acres (280 ha); the mapped ring is much smaller. Which boundary Britannica means is not established.
- **Boundary.** UNESCO and ASI coordinates for the fort are 441 m apart (existing boundary-reconciliation note); the mapped geometry follows OSM.
- **Terrain.** The 20 m DEM gives the mesa about 180 m above the plain but not the cliff faces, tanks or rampart; nothing was altered.
- **"Surhadia".** The reading of the name on the board is uncertain.

## Missing evidence for T2 and beyond

1. A survey-grade plan (ASI measured drawing or INTACH plan) with gates, bastions and building footprints.
2. A source for rampart, gate and tower heights (Vijay Stambh and Kirti Stambh heights should be re-read from a primary or ASI source).
3. A finer DEM (LiDAR) for the mesa and its scarps.
4. A dated plan or image for 1568.

## Attribution

Guide board photograph: Amitbanerjee0143, Wikimedia Commons, CC BY-SA 4.0. OpenStreetMap contributors (ODbL).

## Verification (2026-11-11)

- `check_sources`: 0 errors (279 elements; 246 KB trace.js, within the 250 KB budget, which is close; 4 elements documented, 275 mapped).
- `node build.mjs --min`: builds. `node tools/smoke.mjs chittorgarh`: 4 scenes (2 eras, mapped and constructed), 0 failures. Each scene takes about 25-30 s to build, so `TIME_SCALE.chittorgarh = 6` was added to `tools/trace/budget.mjs`.
  Allowed-unreachable: Padmini Mahal (the mapped footprint is inside a mapped pond, no causeway mapped).
- Fixes on the way, all in the pipeline: the spawn is now at least 12 m from any tank or pond (the first runs spawned on a tank rim and left the player in a 208-node pocket); a mapped building within 4 m of a gate is drawn flat, because OSM gate-house footprints were blocking the gate passages once the rampart was raised;
  the unreachable carried-back marker for wall `way/782236562` (no name in OSM) is dropped; inland water gets a derived level (above).
- Screenshots: `docs/fort-fidelity/shots/chittorgarh-{1568,today}.jpg` and `chittorgarh-{1568,today}-constructed.jpg`. Whole-mesa overview only; the rampart and gates are not legible at this scale and no close-ups were taken.
- Not verified: no survey; the three board tanks are unconfirmed; the Vijay Stambh and Kirti Stambh heights were not re-read.
