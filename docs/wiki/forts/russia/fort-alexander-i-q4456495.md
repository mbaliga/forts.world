# Fort Alexander I

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-alexander-i-q4456495` |
| Coordinates | 59.9895, 29.7178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.9895/29.7178)) |
| Wikidata | [Q4456495](https://www.wikidata.org/wiki/Q4456495) (CC0) |
| Wikidata class | fort |
| Types | architectural landmark\|sea fort |
| Administrative area | Kronstadt |
| Inception | 1845 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003b 12 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 3 elements (outline 1, coastline 1, road 1).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9936953 historic=fort 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.9895/29.7178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural landmark\|sea fort; sitelinks=6; wikidata:Q4456495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 3 elements); data/traces/fort-alexander-i-q4456495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
