# Suncheon Castle

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `suncheon-castle-q624263` |
| Coordinates | 34.90722, 127.58111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.90722/127.58111)) |
| Wikidata | [Q624263](https://www.wikidata.org/wiki/Q624263) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle in Korea |
| Administrative area | Haeryong-myeon |
| Designations | Monuments of Jeollanam-do |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 2, road 6, water 2).

Evidence: documented 0, mapped 11, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100220932 historic=castle Q624263 19 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":563,"medianInside":19.7,"medianOutside":5.9}
- sea-1: DEM check ok {"cells":143,"medianInside":8.3,"medianOutside":21.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.90722/127.58111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle in Korea; sitelinks=7; wikidata:Q624263 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/suncheon-castle-q624263.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
