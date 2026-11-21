# Castillo de Santa Catalina

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-santa-catalina-q24023827` |
| Coordinates | 36.00931, -5.60708 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.00931/-5.60708)) |
| Wikidata | [Q24023827](https://www.wikidata.org/wiki/Q24023827) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tarifa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 1, road 134, building 75, coastline 5, retaining-wall 3, wall 21, zone 5, water 4).

Evidence: documented 0, mapped 249, inferred 0, derived 4; heights documented 33, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1465686637 historic=castle Q24023827 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":38,"medianInside":0,"medianOutside":2.2}
- sea-1: DEM check ok {"cells":20,"medianInside":0.1,"medianOutside":2}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1.9}
- sea-3: DEM check ok {"cells":5,"medianInside":0,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.00931/-5.60708) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q24023827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/castillo-de-santa-catalina-q24023827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
