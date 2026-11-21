# Gozzoburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gozzoburg-q1540600` |
| Coordinates | 48.41182, 15.6019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41182/15.6019)) |
| Wikidata | [Q1540600](https://www.wikidata.org/wiki/Q1540600) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Krems |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 4, road 329, building 399, waterway 1, wall 36, retaining-wall 14, water 2, zone 6).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 19, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280017384 historic=castle Q1540600 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 399 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 329 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41182/15.6019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=4; wikidata:Q1540600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/gozzoburg-q1540600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
