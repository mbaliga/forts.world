# Gwalior Fort: fort-fidelity pass (batch 1, rebuilt with a plan)

Date of pass: 2026-11-04. Branch `fort-fidelity`. Trace: `src/levels/gwalior.trace.js`
(from `data/traces/gwalior.trace.json` plus `tools/trace/curation/gwalior.mjs`). Level: `src/levels/gwalior.js`.
The old hand level is kept as `src/levels/gwalior-hand.js` (id `gwalior-hand`, not registered) for its points of interest and the 1780 escalade story.
Plan sources: `docs/research/plan-sources-batch1.md`. Registration: `data/plans/gwalior/registration.json`.

**Method and limit.** Cunningham's plan of Gwalior Fort (Gwalior State Gazetteer 1908; Commons; public domain) was downloaded and read at 1660 x 2543 px.
Gates, palace blocks and tanks were located by eye on crops, then registered to OSM by two local similarity fits because the plan is a hand-drawn sketch,
about 6% stretched and with its axis straightened. No height, wall thickness or gate form is on the plan. Wikipedia gave dates and a few dimensions.

## Two layers

- **Documented layer** (eras `1780`, `1868`, `today`): the OSM scarp wall line, tanks, markers, buildings and roads inside the fort, plus gates 1-7, the Dondha gate and palace blocks A-F from the plan.
  Every wall and building is a kerb-high line; there are no invented elevations and no invented gates.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): a schematic with assumed heights, each element carrying a `basis` and the rule that fixed its height.
  The fort wall at 8 m, six palace masses at 10-12 m, Teli ka Mandir as a 25 m tower, and two cylindrical towers flanking the Hathiya gate.

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Gate positions | gates 1-7 and the Dondha gate as numbered on the plan | Cunningham 1908 plan (GWA-28) | plan sketch; +-80 m after registration, snapped to the mapped wall |
| Palace blocks | A Shah Jahani, B Jahangiri, C Karan, D Vikramaditya, E Man Mandir, F Gujari Mahal | same plan | footprint only, +-60 m |
| Popham's escalade | 3 August 1780 | Wikipedia (GWA-29); the hand level said 4 August | secondary; conflict |
| British takeover; Scindias | June 1858; 1886 | Wikipedia | secondary |
| Teli ka Mandir | 25 m masonry tower, refurbished 1881-83 | Wikipedia | secondary |
| Man Mandir | 15th century, refurbished 1648 | Wikipedia | secondary |
| Fort extent | about 3 km2, ridge 2.4 km x 910 m | Wikipedia | consistent with the mapped outline |

## Mapped (OpenStreetMap, ODbL)

Outline way 171185148 (spans x -424..590, y -1264..1377 m); scarp wall way 1500161570 (closed, 946 vertices, `wall-1549`); five short walls inside; markers 1-5
(Thirtankars, ruins, Man Singh Palace, Teli ka Mandir, Thirtankars); tanks Suraj Kund, Gangola Talao, Johar Kund and two small ones; buildings and roads inside or within 25 m of the outline.
The surrounding city (1,400+ roads, 65 buildings), waterways, a far tomb marker and zones outside the fort were pruned in `build-t1.mjs` (`pruneNearM` 25 m).
Terrain is Terrarium z15, about 30 m (SRTM-derived), so the plateau edge is smoothed.

## Registration accuracy (honest)

- South fit (Suraj Kund and Gangola Talao against OSM tank centroids): 1.294 m/px, +2.4 deg; the Teli check lands about 30 m off (776,1444 against 800,1434 px).
- North fit (Man Mandir against marker 3, Johar Talao against water 1482): 1.14 m/px, -16.4 deg. The two fits differ because the sketch is straightened; blended between plan y 800 and 1100.
- Plan gates land 18-98 m from the mapped scarp wall; they are snapped to the nearest wall point and named "+-80 m". They should not be read as survey positions.

## Inferred (flagged `inferred` in the trace)

- **Historic eras.** The present scarp wall, tanks, markers and the plan's gates and palaces are carried back to 1780 and 1868; the plan dates from the 1860s, so 1780 is conjecture.
- **Heights.** None on the documented layer. All heights on the constructed layer are assumptions with their rule stated in the element.

## Not traced

Sas-Bahu and the Urwahi/Gargaj gates beyond the plan's numbered seven, the southern tanks (Dhobi, Ram, Chedi, Kaitora, Ek Khamba), the Jain rock-cut statue groups, Badalgarh outwork,
Gurudwara Data Bandi Chhod, Suraj Kund's surrounds, General White's breach, the Scindia School buildings (only those OSM maps), and the 1780 escalade location.

## Conflicts

- Gate count and names: Wikipedia lists Alamgiri, Ganesh, Chaturbhuj, Urvai, Laxman, Badal and Hathi Pol; the plan numbers Alamgiri, Hindola, Bhairon, Ganes, Lakshman, Hathiya, Hawa. The mapping between the lists is not established.
- Hathiya Gate: the plan puts it at the north-east; Wikipedia describes the Hathi Pol with cylindrical towers. The towers in the constructed layer assume they are the same.
- Popham's date: 3 August (Wikipedia) versus 4 August (hand level).
- "Height 11 m" in Wikipedia is the fort above the terrain, not a wall height; it is not used for the wall.

## Missing evidence for T2

1. A survey-grade plan (ASI/MP Archaeology) or the 1911 ASI plan (licence "No restrictions" was skipped by `fetch-plans.mjs`; re-request after widening the licence list).
2. Photographs or elevations giving wall heights, gate forms and palace heights.
3. A high-resolution DEM so the scarp edge is not smoothed.
4. Dated plans earlier than the 1860s for the 1780 era.

## Verification (2026-11-04)

- `check_sources`: 0 errors (65-element base trace; 79 elements with the plan layer; 225 KB trace.js, 400-element and 250 KB budgets hold).
- `node build.mjs --min`: builds. `node tools/smoke.mjs gwalior`: 6 scenes (3 eras, documented and constructed), 0 failures, no unreachable places.
  The first run failed 4 of 6 (palace marker inside the raised mass; the Bheem Singh Rana chhatri's point of interest fell in Johar Kund); both fixed in `t1.js` and `curation/gwalior.mjs`.
- Screenshots: `docs/fort-fidelity/shots/gwalior-{1780,1868,today}.jpg` (documented) and `gwalior-{1780,1868,today}-constructed.jpg`. Overview views only; a close-up of the palace area was attempted and missed, so there is no close-up image yet.
- Not verified: the plan-registration accuracy was checked only against control points and the tank/marker positions, not against an independent survey.
