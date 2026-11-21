# Castro of O Chao

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-of-o-chao-q59314278` |
| Coordinates | 43.41835, -8.14297 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.41835/-8.14297)) |
| Wikidata | [Q59314278](https://www.wikidata.org/wiki/Q59314278) (CC0) |
| Wikidata class | fort |
| Types | hillfort\|archaeological site |
| Administrative area | Pontedeume |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, road 4, coastline 4, zone 4, waterway 1, water 3).

Evidence: documented 0, mapped 17, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/429515027 historic=archaeological_site 323 m from ledger point
- origin moved 317 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":254,"medianInside":1,"medianOutside":19.1}
- sea-1: DEM check ok {"cells":3,"medianInside":-0.1,"medianOutside":8.6}
- sea-2: DEM check ok {"cells":2,"medianInside":1.9,"medianOutside":8.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.41835/-8.14297) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort\|archaeological site; sitelinks=1; wikidata:Q59314278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 17 elements); data/traces/castro-of-o-chao-q59314278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
