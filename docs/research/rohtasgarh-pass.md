# Rohtasgarh: fort-fidelity pass (alpha-R batch, mapped T1)

Date of pass: 2026-11-14. Branch `fort-fidelity`. Trace: `src/levels/rohtasgarh.trace.js`
(from `data/traces/rohtasgarh.trace.json` plus `tools/trace/curation/rohtasgarh.mjs`). Level: `src/levels/rohtasgarh.js` (`makeT1` over the trace, id `rohtasgarh`).
The older inferred prototype stays in `src/levels/kaimur-ganga.js` (`rohtasgarh` export, no longer registered in `index.js`; `chunar` still is).

**Status: `needs-plan`, tier T1.** No plan, survey drawing, section or dated image was read. A Wikimedia Commons plan search was attempted but needs a URL approval that was not given in this session, so it did not run. Nothing is traced from a plan, so there is no registration step and no T2.

## Two layers

- **Mapped layer** (eras `1597`, `today`): the OSM castle outline, one stretch of plateau-edge wall (clipped), two ruin footprints, one fort footprint, the plateau cliff, two bridges and the roads. All kerb-high; no invented heights.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): the mapped wall drawn 6 m high and 3 m thick, both assumed (schematic, confidence 0.2). Nothing else is added.

## Scale warning

The fort is a plateau site, reported as remains over about 42 km2 with 83 gates. This scene is a 2.2 km window (+-1100 m) round the OSM castle outline, so it holds a small part of the fort. The mapped castle outline is only 216 x 243 m. Its identification with the Man Singh palace (Mahal Sarai / Aina Mahal) is **not** established here: OSM tags it `historic=castle` with the fort's name and wikidata Q11946159, nothing more.

## Documented (secondary web sources only; no primary source read)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Hathiya Pol (Elephant Gate) | built 1597; largest gate and main entrance; no builder named | Tutorialspoint "Rohtasgarh Fort" pages; Wikipedia "Rohtas Fort, India" | secondary |
| Capture by Sher Shah | 1539, by a ruse (palanquins carrying soldiers) | Wikipedia | secondary, traditional account |
| Jami Masjid | 1543, by Haibat Khan; Habsh Khan's mausoleum also stands | Wikipedia; Tutorialspoint | secondary |
| Man Singh's palace | four storeys with a cupola; north-south axis, entrance to the west | Wikipedia; Tutorialspoint | secondary |
| Gates | 83 counted; extent about 42 km2 | Wikipedia | secondary, unverified |
| 1763 / 1857 | Mir Kasim at Rohtas then Captain Goddard; Amar Singh's blockade | Wikipedia | secondary |
| Other monuments | Ganesh temple W of the palace; Rohtasan (Harishchandra) temple NE, 84 steps; ruined Devi temple NE | Tutorialspoint | secondary |

## Mapped (OpenStreetMap, ODbL)

- Way 119221893: `historic=castle`, "Rohtasgarh Fort", 8 vertices, 216 x 243 m (the outline).
- Way 119221888: `barrier=city_wall`, 48 vertices, about 2.4 km, running east of the outline past the scene window; 15 vertices beyond the +-1090 m edge are cut in the curation so no wall is drawn over missing terrain.
- Way 323885919: `natural=cliff` (plateau edge). Ways 521506104 and 521506105: `historic=ruins`, about 35 m across, unnamed. Way 521506107: `historic=fort`, 133 x 196 m, unnamed.
- Way 1303307266 (`barrier=city_wall` + cliff, about 650 x 560 m) lies about 1.8 km north of the outline, outside the window, so it is not drawn.
- 30 roads and tracks, two of them bridges (source maxar).
- Terrain: Terrarium z15 (about 30 m, SRTM-derived), 160-545 m across the window; the plateau edge is smoothed.

## Inferred (flagged `inferred` in the trace)

- **Era 1597.** The mapped outline, wall and cliff are carried back about 430 years unchanged; roads, ruins and the fort footprint are left out. 1597 is the Hathiya Pol date from the web pages. No plan of that date was found.
- **Constructed wall.** 6 m high and 3 m thick are assumed; no source gives either.

## Not traced

All gates (including the Hathiya Pol, Singh Dwar and the ghats), the palace, Jami Masjid, mausoleum, temples, tanks, the 2,000-step approach and the remaining 80-odd gates: none has a plan position here.

## Conflicts and uncertainties

- **Coordinates.** The fetched Wikipedia article text gave 24°57′N 84°2′E, about 40 km from the OSM / Wikidata position (24.623, 83.918) used by this project. The OSM position was used; the article's figure was not.
- **Man Singh's dates.** One page dates his rule at Rohtas to 1558-9 and lists a different ruler in 1559; that does not fit his career (governor of Bihar from the late 1580s), so those dates are not used. The Mahal Sarai date is therefore unfixed; only the 1597 gate date is cited.
- **Builder of the Hathiya Pol.** Not named by either page.
- **Extent.** The 42 km2 and 83-gate figures are unverified and may include the whole plateau.

## Missing evidence for T2 and beyond

1. An ASI or Bihar State Archaeology survey plan of the plateau with gate and palace positions (the Aina Mahal and Hathiya Pol first).
2. Asher and Asher, "The Magnificent Hill Fort of Rohtas, India", *Archaeology* 37(3), 1984, and D. R. Patil, *The Antiquarian Remains in Bihar* (1963), pp. 486-488 (both cited by Wikipedia; not read).
3. Elevations or photographs giving wall, gate and palace heights.
4. A finer DEM than 30 m for the plateau edge and the approach stairs.
5. Plan-sourced gates: the scene stays sealed (no gate drawn) until one has a plan position.

## Verification (2026-11-14)

- `check_sources`: 0 errors, 0 warnings (36 elements; 156 KB trace.js).
- `node tools/smoke.mjs rohtasgarh`: 4 scenes (2 eras, mapped and constructed), 0 failures, no unreachable places.
- Screenshots: `docs/fort-fidelity/shots/rohtasgarh-today.jpg`, `rohtasgarh-today-constructed.jpg`, `rohtasgarh-wide-constructed.jpg`. Overview views only.
- Not verified: no independent survey; the mapped lines were not compared with any plan or photograph.
