# Rangone Redent

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rangone-redent-q124309612` |
| Coordinates | 35.29822, 25.73904 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29822/25.73904)) |
| Wikidata | [Q124309612](https://www.wikidata.org/wiki/Q124309612) (CC0) |
| Wikidata class | fort |
| Types | fortification\|redan |
| Administrative area | Agios Nikolaos Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, marker 2, road 43, coastline 5, building 47, wall 41, cliff 10, retaining-wall 27, zone 19, water 2).

Evidence: documented 0, mapped 197, inferred 0, derived 2; heights documented 0, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1240500390 historic=castle Q64737877 77 m from ledger point
- island ring (83972 m2) cut out of sea-0
- origin moved 77 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1144,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":1366,"medianInside":0,"medianOutside":-0.2}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29822/25.73904) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|redan; sitelinks=1; wikidata:Q124309612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/rangone-redent-q124309612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
