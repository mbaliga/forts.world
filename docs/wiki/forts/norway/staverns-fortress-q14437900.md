# Staverns Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `staverns-fortress-q14437900` |
| Coordinates | 58.9958, 10.0494 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.9958/10.0494)) |
| Wikidata | [Q14437900](https://www.wikidata.org/wiki/Q14437900) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural property |
| Administrative area | Larvik |
| Inception | 1677 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, marker 4, coastline 3, building 7, road 8, retaining-wall 2, wall 15, water 4).

Evidence: documented 0, mapped 44, inferred 0, derived 4; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/609975637 historic=fort Q14437900 18 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":367,"medianInside":0,"medianOutside":2.7}
- sea-1: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-3: DEM check ok {"cells":342,"medianInside":0,"medianOutside":2.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.9958/10.0494) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural property; sitelinks=4; wikidata:Q14437900 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/staverns-fortress-q14437900.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
