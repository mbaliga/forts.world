# Viljandi Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `viljandi-castle-q373326` |
| Coordinates | 58.35917, 25.59528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.35917/25.59528)) |
| Wikidata | [Q373326](https://www.wikidata.org/wiki/Q373326) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Viljandi City |
| Inception | 1224 |
| Designations | architectural monument |
| Wikipedia language editions | 19 |
| OSM `historic` | citywalls |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 5, road 233, building 106, wall 55, zone 17, water 2, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 119, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244597209 historic=citywalls 226 m from ledger point
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 226 m from the ledger point to the outline centroid
- 42 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.35917/25.59528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=19; wikidata:Q373326 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/viljandi-castle-q373326.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
