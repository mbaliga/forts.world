# Firka Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `firka-fortress-q38279797` |
| Coordinates | 35.51861, 24.01566 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.51861/24.01566)) |
| Wikidata | [Q38279797](https://www.wikidata.org/wiki/Q38279797) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Chania Municipality |
| Inception | 1620 |
| Designations | Protected monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 5, road 76, wall 12, coastline 9, building 213, water 5, zone 2).

Evidence: documented 0, mapped 323, inferred 0, derived 4; heights documented 0, inferred 0, unknown 225.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1069616183 historic=castle Q38279797 29 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":440,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":434,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":438,"medianInside":0,"medianOutside":-0.2}
- sea-3: DEM check ok {"cells":273,"medianInside":0,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.51861/24.01566) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q38279797 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/firka-fortress-q38279797.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
