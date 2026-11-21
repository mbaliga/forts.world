# Jaisalmer: fort-fidelity pass (batch 2, mapped T1)

Date of pass: 2026-11-11. Branch `fort-fidelity`. Trace: `src/levels/jaisalmer.trace.js`
(from `data/traces/jaisalmer.trace.json` plus `tools/trace/curation/jaisalmer.mjs`). Level: `src/levels/jaisalmer.js` (`makeT1` over the trace, id `jaisalmer`).
The older hand level is kept as `src/levels/jaisalmer-hand.js` (id `jaisalmer-hand`, not registered).

**Status: `needs-plan`, tier T1.** No plan, survey drawing, section or dated image of the fort was found. A Commons plan search returned only gazetteer pages and 2012-13 photographs.
Nothing here is traced from a plan, so there is no registration step and no T2.

## Two layers

- **Mapped layer** (eras `1647`, `today`): the OSM outline and perimeter wall (way 31614017), one gate, four gate-house footprints, two palace footprints (today only), other buildings, roads and markers. All kerb-high; no invented heights.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): the mapped perimeter drawn as a wall 4.6 m high and 2.5 m thick (schematic, confidence 0.2).

## Documented (Wikipedia only; no primary source read)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Foundation | 1156; "legend has it" | Wikipedia | legend, secondary |
| Capture | about 1299 by Alauddin Khalji | Wikipedia | secondary |
| Bastions | 99; 92 built or rebuilt 1633-47 | Wikipedia | secondary |
| Size | about 460 x 230 m on a 76 m hill | Wikipedia | secondary |
| Walls | outer base wall 15 ft (4.6 m); upper wall about 2.5 miles | Wikipedia | secondary, unverified |
| Listing | UNESCO 2013 (Hill Forts of Rajasthan) | Wikipedia | secondary |
| Population | about 4,000 live in the fort | Wikipedia | secondary |
| Rani Mahal | collapsed (partly) | Wikipedia | secondary |

## Mapped (OpenStreetMap, ODbL)

Outline way 31614017 and its perimeter wall; 44 buildings; 145 roads; four markers (three cannons, one unnamed); the Fort Palace Museum zone.
One OSM node tagged as a Pol (Akhey/Akhai Pol) lies 9 m from the perimeter and is promoted to `gate-1` (mapped, confidence 0.6) with a plain 3 m opening. The other three Pols (Suraj, Ganesh, Hawa) are mapped as small buildings, not nodes, so they stay footprints, labelled "mapped gate-house footprint".
Where a footprint lies within 4 m of a gate, it is drawn flat so the passage stays open.
Terrain: Terrarium z15 (about 30 m, SRTM-derived), 230-281 m: the 76 m Trikuta hill is smoothed and the cliffs under the wall are not resolved.

## Inferred (flagged `inferred` in the trace)

- **Era 1647.** The mapped outline, perimeter wall, gate, Pol buildings and other walls are carried back to 1647 (the end of the bastion rebuilding), about 380 years, unchanged. The palaces, roads and other buildings are left out because their dates are not established. No dated plan was found.
- **Heights.** None on the mapped layer. The constructed wall uses the one dimension a source gives (15 ft), applied to the whole perimeter; the thickness is assumed. The upper rampart and the 99 bastions are not separated from it.

## Not traced

The bastions (no source gives positions), the real gate forms and their dog-leg approach, the Jain temples, the havelis, wells and the palace interiors, the foundation legend's earlier site, the lower town and its walls, and the 1156 / 1299 fortifications.

## Conflicts and uncertainties

- **Date of foundation.** 1156 is given as "legend has it"; no first-hand source for the date was read.
- **Wall height.** Wikipedia's 15 ft is the outer base wall only; the whole defended height is larger, but no source gives it.
- **Terrain.** The 30 m DEM cannot show the hill's cliffs, so the fort looks flatter than it is.

## Missing evidence for T2 and beyond

1. A survey-grade plan (ASI, INTACH, or the UNESCO nomination maps) with bastion positions and gates.
2. Elevations or photographs giving wall, bastion and gate heights and forms.
3. A finer DEM (LiDAR or drone) for the Trikuta hill.
4. A dated plan or view for 1647.

## Verification (2026-11-11)

- `check_sources`: 0 errors (198 elements; 124 KB trace.js, within the 250 KB and 400-element budgets).
- `node tools/smoke.mjs jaisalmer`: 4 scenes (2 eras, mapped and constructed), 0 failures, no unreachable places.
- Screenshots: `docs/fort-fidelity/shots/jaisalmer-{1647,today}.jpg` and `jaisalmer-{1647,today}-constructed.jpg`. Overview views only.
- Not verified: no independent survey; the mapped perimeter was not compared with any plan or photograph.
