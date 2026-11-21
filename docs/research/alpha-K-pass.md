# Alpha-K batch: auto-T1 pass (2026-11-15)

Scope: ten forts spread across A-Z from K (`docs/fort-fidelity/batch-alpha-K.csv`). This pass only ran the offline auto-T1 builder on OSM and Terrarium data already fetched. **No plans, surveys or photographs were researched, so nothing here is T2.** Every element is `mapped` from OSM or derived from the DEM; nothing is inferred or invented.

| Fort | Result | Notes |
|---|---|---|
| Orchha | T1 outline+walls, 204 elements | OSM relation 14634834 outline, walls, 111 present-day buildings. |
| Gingee | T1 outline+walls, 33 elements | OSM way 555716227 (castle). Gingee is three citadels on three hills (Rajagiri, Krishnagiri, Chandragiri); only the mapped outline is drawn. |
| Qila Mubarak, Bathinda | T1 outline-only, 47 elements | OSM relation 18111373. No mapped wall line. |
| Udgir | T1 outline+walls, 26 elements | OSM way 361745273. |
| Asirgarh | T1 outline-only, 18 elements | OSM way 379876762, tanks mapped as water. |
| Warangal | T1 outline+walls, 225 elements | Window and pruning set by hand (see below). 8 city_gate nodes mapped as markers; 16 paths meet wall lines (candidate openings for T2, not drawn). |
| Shivneri | T1 outline-only, 13 elements, **smoke fails** | See below. |
| Mahim Fort | location-only, 56 elements | No closed historic=* way in OSM; coastline and sea checked against the DEM. |
| Kumbhalgarh | no OSM | First fetch returned terrain only; re-requested on line 1 of `data/geometry/REQUEST.txt`. |
| Champaner-Pavagadh | no geometry | Geometry requested on line 1 of `REQUEST.txt`. |

## Decisions and pipeline changes
- **Warangal**: the auto-picked outline (way 280178528) is a 138 m castle way, not the fort. OSM maps an outer retaining wall about 2.3 km across (way 101824978) and an inner city wall about 1.2 km (way 101825044). Options in `data/traces/build-options.json`: bounds `[-780,-720,580,740]`, stride 20, prune to 30 m of the largest closed wall, and at most 120 buildings (nearest the centre of 602 mapped; the town is not drawn). The outer ring is mostly outside the window.
- `tools/build-t1.mjs` gained two options: `pruneRef` (`largest-closed-wall` or an element id) and `maxBuildings`. Both record themselves in the trace notes.
- **Shivneri**: window set to the outline (bounds `[-420,-400,520,800]`). The smoke test still fails: the spawn reaches only about 130 nodes and the Birthplace marker (OSM node 5503345161) is unreachable. Two mapped cliff lines split the hilltop, and no mapped gate or path crosses them. Not fixed, because opening it would mean inventing an approach route. Needs the ASI plan or a photo of the approach.

## Evidence still missing for T2
Every fort: a plan, ASI/survey drawing or dated photo for gates, bastions, major buildings and wall heights. No heights beyond the DEM are sourced. Not searched in this pass.
