# Turnberry Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turnberry-castle-q4590136` |
| Coordinates | 55.3261, -4.8441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.3261/-4.8441)) |
| Wikidata | [Q4590136](https://www.wikidata.org/wiki/Q4590136) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | South Ayrshire |
| Inception | 1873 |
| Designations | scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, coastline 1, road 17, building 2, wall 2, zone 8, cliff 3, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/429766067 historic=ruins Q4590136 16 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1042,"medianInside":2,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.3261/-4.8441) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q4590136 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/turnberry-castle-q4590136.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
