# Neratzia

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neratzia-q1977923` |
| Coordinates | 36.89626, 27.29014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.89626/27.29014)) |
| Wikidata | [Q1977923](https://www.wikidata.org/wiki/Q1977923) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Kos Municipality |
| Designations | protected building in Greece\|archaeological site in Greece |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, marker 2, road 85, zone 7, waterway 1, coastline 1, wall 24, building 43, retaining-wall 4, water 2).

Evidence: documented 0, mapped 170, inferred 0, derived 2; heights documented 3, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5186189 historic=castle Q1977923 28 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2090,"medianInside":0,"medianOutside":2.2}
- sea-1: DEM check ok {"cells":3318,"medianInside":0,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.89626/27.29014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=9; wikidata:Q1977923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 170 elements); data/traces/neratzia-q1977923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
