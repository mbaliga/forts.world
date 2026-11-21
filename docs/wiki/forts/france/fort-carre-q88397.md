# Fort Carré

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-carre-q88397` |
| Coordinates | 43.59028, 7.12722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.59028/7.12722)) |
| Wikidata | [Q88397](https://www.wikidata.org/wiki/Q88397) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Antibes |
| Inception | 1553 |
| Designations | classified historical monument |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, marker 2, road 45, building 26, wall 2, coastline 4, water 4).

Evidence: documented 0, mapped 84, inferred 0, derived 4; heights documented 1, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1074429 historic=fort Q88397 11 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":0,"medianOutside":5.2}
- sea-1: DEM check ok {"cells":3,"medianInside":0,"medianOutside":5.2}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5.2}
- sea-3: DEM check ok {"cells":13,"medianInside":0,"medianOutside":5.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.59028/7.12722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q88397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/fort-carre-q88397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
