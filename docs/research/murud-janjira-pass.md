# Murud-Janjira: fort-fidelity pass (batch 2, plan-traced)

Date of pass: 2026-11-11. Branch `fort-fidelity`. Trace: `src/levels/murud-janjira.trace.js`
(from `data/traces/murud-janjira.trace.json` plus `tools/trace/curation/murud-janjira.mjs`). Level: `src/levels/janjira.js`
(`makeT1` over the trace, id `murud-janjira`). The old 734-line hand level is kept as `src/levels/janjira-hand.js` (id `murud-janjira-hand`, not registered).
Plan: `data/plans/murud-janjira/` (manifest, two BnF Gallica scans via Commons, public domain). Registration: `data/plans/murud-janjira/registration.json`.
Earlier note on the 1733 campaign: `docs/research/janjira-1733.md`.

**Method and limit.** Werner's inset plan "Gingerah Fort" (engraved by Begbie, published by Dalrymple, June 1771) was read from the native scan.
It was registered to OSM by fitting the island silhouette alone (IoU 0.88), so every interior feature is an independent check.
Bastion centres, the two gates, the mosque courtyard and the magazine were located by eye on crops and converted through that fit.
The plan draws no heights, wall thickness or gate form.

## Two layers

- **Documented layer** (eras `1733`, `1774`, `today`): OSM outline, wall line, two tanks, the palace and the citadel footprints, plus 18 bastion discs, two gates, the mosque courtyard and the magazine from the plan.
  Everything is kerb-high (0.5 m, "unknown"). There are no invented elevations and no invented gates: the gate openings are plain 3 m cuts because the plan draws no form.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): a schematic with assumed heights, each element carrying a `basis` and the rule behind its height.
  Perimeter wall 14 m, 18 bastions at 15 m, palace mass 16 m, and two schematic gate openings (see Conflicts: the east one is moved).

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| 18 round bastions | centres and about 25 m diameter | Werner/Dalrymple plan, 1771 | plan, +-15 m after registration |
| Two gates | east (main, towards Rajapuri) and west (sea gate) | same plan, legend "e. The two gates" | plan, +-15 m, snapped to the OSM wall |
| Mosque courtyard "b", magazine "d" | rectangles | same plan | footprint only, +-15 m |
| Two tanks "c", palace "a" | agree with OSM within 3-15 m | same plan against OSM | independent check |
| Plan date | June 1771 imprint; BnF dates the copies 1774 and 1784 | BnF records | catalogue |

## Mapped (OpenStreetMap, ODbL)

Outline way 330556777; perimeter wall line; two tanks; the palace (Sidi Surul Khan's) and citadel footprints; a short inner wall (`wall-7`).
OSM's far mainland coast line was removed. The sea is derived from the coastline; the island is cut out as a hole in that sea polygon (a fix made in this pass).
Terrain is Terrarium z15 (~30 m SRTM-derived).

## Registration accuracy (honest)

- Fit: 0.265 m per plan pixel, rotation 269 deg, shift (-17, 8) m; IoU 0.884 against the OSM outline.
- Not used in the fit: palace 3 m, citadel 9 m, tanks 12-15 m, magazine 9 m from the citadel footprint. Stated accuracy of plan elements: +-15 m.
- **Scale conflict.** The printed scale bar (1000 ft = 877 px) gives 0.3475 m/px; the fit gives 0.265. The engraved island is about 24% bigger than its own bar says.
  The fit agrees with OSM, so it is used; the plan is not a metric source beyond the stated +-15 m.

## Inferred (flagged `inferred` in the trace)

- **Historic eras.** The 1771 plan elements and the present OSM lines are carried back to 1733 unchanged (38 years) and, for the `today` era, forward to now.
  No plan of 1733 was found, and whether each plan element survives today is not checked.
- **Heights.** None on the documented layer. Every height on the constructed layer is an assumption: the wall from one travel page (45-50 ft), bastions one metre above it, the palace from "at least four storeys" at 4 m.

## Not traced

About 80 small house blocks on the plan, the sea approaches and soundings, the inner boundary walls, individual guns and other named structures not lettered on the plan, the 1733 siege works at Rajapuri and the mainland.
The plan shows 18 bastions; the written sources say 19, and the plan is hatched where small ones may be hidden.

## Conflicts

- **Bastion count:** 18 on the plan against 19 in Wikipedia and a travel page. The 18 are drawn; the 19th is not placed.
- **Scale:** printed bar against registration (above).
- **Plan date:** imprint June 1771; BnF copies dated 1774 and 1784. The era is labelled 1774 (publication), the text says drawn 1771.
- **East gate in the constructed layer.** The plan gate lies 9 m from the centre of bastion 17, inside its 12.5 m radius. A raised bastion would bury the opening,
  so the constructed layer moves the opening along the wall by the minimum needed to clear the bastion by 6 m (within the +-15 m error) and says so in the element's `basis`.
  The documented layer keeps the plan position.
- **Heights:** the 45-50 ft wall height is from an unverified travel page, not a survey.

## Terrain limit (read before using the heights)

The 30 m SRTM-derived DEM puts 16-21 m on the island, because pixels this coarse mix the wall, rock and surrounding returns. The island is probably lower and flatter than drawn.
The citadel hill is a steep DEM high with no walkable surface near the magazine, so `plan-magazine` cannot be reached on foot. It is flagged in the trace (`unreachableOk`) and the point of interest says why.
The terrain was not altered: flattening it would be an invented elevation.

## Missing evidence for T2 and beyond

1. A survey-grade plan or an ASI measured drawing, to replace a 1771 engraving with a scale conflict.
2. Photographs or elevations giving wall, bastion and gate heights, and gate forms.
3. A finer DEM (LiDAR or a drone model) for the island, to remove the 16-21 m artefact.
4. A plan earlier than 1771 for the 1733 era, and the 19th bastion.

## Verification (2026-11-11)

- `check_sources`: 0 errors (32 elements in the base trace, 20 constructed; 108 KB trace.js, within the 250 KB and 400-element budgets).
- `node build.mjs --min`: builds. `node tools/smoke.mjs murud-janjira`: 6 scenes (3 eras, documented and constructed), 0 failures.
  Allowed-unreachable places: `plan-magazine` (DEM artefact) in every era, and in the constructed eras the 18 `c-bastion-*` markers (solid schematic masses with no stair or top).
  The smoke printout labels them "inside sealed enclosure (allowed)", which is the generic wording; the reason is the one given here.
- Fixes made on the way, all in the pipeline and so also relevant to the other island forts: island keyhole holes in the derived sea polygon (`osm.mjs`),
  a spawn just inside a plan gate when the only ground outside the ring is sea (`t1.js`), a point-of-interest marker that avoids water, and rendering of plan `bastion` elements as kerb-high discs.
  The first smoke runs failed 6 of 6: no reachable ground (spawn in the sea; island dug to -3 m), then the magazine and the constructed-layer markers.
- Screenshots: `docs/fort-fidelity/shots/murud-janjira-{1733,1774,today}.jpg` and `murud-janjira-{1733,1774,today}-constructed.jpg`. Overview views only; no close-ups.
- Not verified: no independent survey was available, so the registration was checked only against OSM features. The two gates were not checked against a photograph.
