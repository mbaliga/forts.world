# Citadel of Montpellier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-montpellier-q2849122` |
| Coordinates | 43.61167, 3.88611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.61167/3.88611)) |
| Wikidata | [Q2849122](https://www.wikidata.org/wiki/Q2849122) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Montpellier |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 19, road 1072, water 11, building 477, waterway 12, zone 73, wall 143, retaining-wall 26).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 57, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26935964 historic=castle Q2849122 40 m from ledger point
- pruned to the outline plus 150 m: 1834 -> 899 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 587 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.61167/3.88611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=5; wikidata:Q2849122 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/citadel-of-montpellier-q2849122.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
