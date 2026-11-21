# Shtip Fortress

> North Macedonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shtip-fortress-q20570361` |
| Coordinates | 41.73876, 22.18677 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.73876/22.18677)) |
| Wikidata | [Q20570361](https://www.wikidata.org/wiki/Q20570361) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|archaeological site |
| Administrative area | Štip |
| Designations | Heritage Site in North Macedonia |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 4, road 233, waterway 6, water 3, wall 4, zone 7, building 343).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 114, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/417361065 historic=ruins Q20570361 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.73876/22.18677) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|archaeological site; sitelinks=4; wikidata:Q20570361 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/shtip-fortress-q20570361.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-macedonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
