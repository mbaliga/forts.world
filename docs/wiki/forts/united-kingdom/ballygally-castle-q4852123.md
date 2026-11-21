# Ballygally Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ballygally-castle-q4852123` |
| Coordinates | 54.899, -5.8617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.899/-5.8617)) |
| Wikidata | [Q4852123](https://www.wikidata.org/wiki/Q4852123) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ballygalley |
| Inception | 1649 |
| Designations | Grade A listed building |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 124 elements (outline 1, coastline 1, road 37, building 73, waterway 2, retaining-wall 5, wall 4, water 1).

Evidence: documented 0, mapped 124, inferred 0, derived 1; heights documented 21, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/522690822 historic=castle Q4852123 38 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":511,"medianInside":20,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.899/-5.8617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q4852123 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 124 elements); data/traces/ballygally-castle-q4852123.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
