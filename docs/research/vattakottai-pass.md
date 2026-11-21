# Vattakottai Fort, Kanniyakumari: fort-fidelity pass (batch alpha-T, mapped T1 plus schematic wall)

Date of pass: 2026-11-15. Branch `fort-fidelity`. Trace: `src/levels/vattakottai-fort-q7917189.trace.js`
(from `data/traces/vattakottai-fort-q7917189.trace.json` plus `tools/trace/curation/vattakottai-fort-q7917189.mjs`). Level: `src/levels/vattakottai.js` (`makeT1`, id `vattakottai`). No earlier scene existed, so there is no `-hand` level.

**Status: `needs-plan`, tier T1.** No plan, survey drawing or dated image was found. Wikipedia gives dates and builders but no dimensions; the only dimensions found are on a tourism page.
So there is no registration step and no T2. The evidence layer is the OSM outline, wall line and coast; the constructed layer draws the perimeter as a wall of the tourism page's height.

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Built | 18th century, for the kings of Travancore; credited to Punachal/Elakkara Valiyaveetil Marthandan Chempakaraman Pillai | Wikipedia | secondary |
| Reign | Marthandavarma, 1729-58, with Eustachius De Lannoy directing the work | Kanyakumari tourism page | weak (tourism site) |
| Reconstruction | under De Lannoy; no year; which parts are his is not stated | Wikipedia | secondary |
| Material | granite blocks; part of the fort extends into the sea | Wikipedia; tourism page | agree |
| Shape and area | "rectangular", about 3.5 acres | tourism page | weak |
| Wall | 25-26 ft high including the parapet; 29 ft thick at the front, 18 ft at the corners, 6 ft at the rear | tourism page | weak, no survey cited |
| Position | about 7 km from Kanyakumari town | Wikipedia | secondary |
| Renovation | "recent", by the Archaeological Department, no date | Wikipedia; tourism page | secondary |

Wikipedia reports no wall height, thickness, area or plan. A "903" birth date for the builder cannot be read as a Gregorian year and is not used.

## Mapped (OpenStreetMap, ODbL)

Outline and `barrier=wall` are one way (157804925, 23 vertices). Its area is 13,842 m2, **3.4 acres, which agrees with the tourism page's 3.5**.
**The shape does not agree**: the mapped polygon is irregular, with a long arm running to the shore, not the rectangle the page describes. The area match therefore does not prove the page's other figures.
Also mapped: the shoreline (sea derived from the OSM coastline, DEM check ok: median 2.2 m inside against 11.3 m outside), a zone (way 390020314), two small ponds (derived surface level, not mapped), one waterway and 15 paths. Two of the paths meet the closed wall; they are candidates for openings and are not drawn. No gate, bastion, tower or height is mapped.
Terrain: Terrarium z15 at 5 m stride over a 532 m square, about 30 m SRTM-derived: the fort is on low ground at about 11 m.

## Inferred (flagged in the trace)

- **Era c. 1750.** The mapped outline, wall line and coast carried back about 275 years. 1750 is a mid-reign marker inside Marthandavarma's 1729-58, not a documented date.
- **Heights.** None in the evidence layer; everything is kerb-high.

## Constructed layer (schematic, `1750~built` and `today~built`)

`c-wall`: the mapped perimeter drawn as a wall 7.9 m (26 ft) high and 5.5 m (18 ft) thick. The height is the upper figure of the tourism page's range; the thickness is its corner value used all round, because the page does not say which side is the front. The wall is sealed (no gate is sourced), so the player arrives outside it, and the derived sea is flagged `unreachableOk`.

## Not traced

Barracks, gate, watch positions, the part "extending into the sea" as a distinct structure, and any bastion: no source places them.
**Evidence needed for T2:** an ASI or Tamil Nadu Department of Archaeology plan or survey (the fort was renovated recently, so drawings should exist), or a dated 18th-19th century view; a primary source for the dimensions.

## Pipeline change made on the way

`src/levels/t1.js`: the derived-sea POI now passes `unreachableOk` and `unreachableNote` through, as the wall and building POIs already did. Without it a sealed schematic wall around a coastal fort fails the smoke test on the sea marker. Smoke re-run on Jaisalmer and Thirumalai Nayakkar Mahal: unchanged.

## Checks run

`node tools/smoke.mjs vattakottai`: 4 scenes, 0 failures. `node tools/check_sources.mjs`: 0 errors. Screenshots: `docs/fort-fidelity/shots/vattakottai-{1750,1750-constructed,today,today-constructed}.jpg`.
