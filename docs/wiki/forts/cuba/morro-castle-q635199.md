# Morro Castle

> Cuba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `morro-castle-q635199` |
| Coordinates | 23.15042, -82.35667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.15042/-82.35667)) |
| Wikidata | [Q635199](https://www.wikidata.org/wiki/Q635199) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Havana |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 204-002 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, marker 4, road 28, building 10, retaining-wall 2, wall 2, zone 14, coastline 2, water 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23918434 historic=castle Q635199 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":363,"medianInside":1.6,"medianOutside":11.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.15042/-82.35667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=15; wikidata:Q635199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/morro-castle-q635199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
