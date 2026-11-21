# Żabbar Batteries and Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zabbar-batteries-and-redoubt-q20050778` |
| Coordinates | 35.87508, 14.53392 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.87508/14.53392)) |
| Wikidata | [Q20050778](https://www.wikidata.org/wiki/Q20050778) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Żabbar |
| Inception | 1798 |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `description` | Map of the Santa Margherita and Cottonera Lines, Malta, before the western part of the lines was demolished in the 19th century to make way for extensions to the dockyard. |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, road 17, wall 15, zone 7, building 4).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9613911 historic=citywalls 1253 m from ledger point
- origin moved 1115 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.87508/14.53392) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q20050778 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/zabbar-batteries-and-redoubt-q20050778.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
