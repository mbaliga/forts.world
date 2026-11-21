# Forte do Pinhão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-do-pinhao-q106545345` |
| Coordinates | 37.09571, -8.66627 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.09571/-8.66627)) |
| Wikidata | [Q106545345](https://www.wikidata.org/wiki/Q106545345) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort\|coastal battery |
| Administrative area | São Gonçalo de Lagos |
| Inception | 1500 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 188 elements (outline 1, marker 3, road 79, wall 14, building 60, water 4, zone 13, retaining-wall 9, cliff 1, waterway 1, coastline 3).

Evidence: documented 0, mapped 188, inferred 0, derived 3; heights documented 3, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3132559 historic=castle Q10283735 412 m from ledger point
- origin moved 412 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":2.5,"medianOutside":0}
- sea-1: DEM check ok {"cells":54,"medianInside":0,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":18,"medianInside":0,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.09571/-8.66627) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort\|coastal battery; sitelinks=2; wikidata:Q106545345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 188 elements); data/traces/forte-do-pinhao-q106545345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
