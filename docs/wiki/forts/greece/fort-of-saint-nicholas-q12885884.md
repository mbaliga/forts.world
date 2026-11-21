# Fort of Saint Nicholas

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-saint-nicholas-q12885884` |
| Coordinates | 36.4511, 28.2279 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.4511/28.2279)) |
| Wikidata | [Q12885884](https://www.wikidata.org/wiki/Q12885884) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Rodos Municipality |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, marker 1, road 5, building 7, retaining-wall 3, wall 18, coastline 3, water 4).

Evidence: documented 0, mapped 42, inferred 0, derived 4; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20444469 historic=castle Q12885884 8 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":365,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":398,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":399,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":389,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.4511/28.2279) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; sea fort; sitelinks=5; wikidata:Q12885884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/fort-of-saint-nicholas-q12885884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
