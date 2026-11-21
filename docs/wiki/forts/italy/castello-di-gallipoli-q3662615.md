# Castello di Gallipoli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-gallipoli-q3662615` |
| Coordinates | 40.05521, 17.97861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.05521/17.97861)) |
| Wikidata | [Q3662615](https://www.wikidata.org/wiki/Q3662615) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gallipoli |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 5, road 122, wall 8, building 30, zone 2, coastline 1, retaining-wall 3, water 6).

Evidence: documented 0, mapped 178, inferred 0, derived 6; heights documented 3, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6344776 historic=castle Q3662615 67 m from ledger point
- origin moved 48 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":0.4,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":55,"medianInside":0,"medianOutside":1.5}
- sea-2: DEM check failed {"cells":400,"medianInside":0.4,"medianOutside":0.1}
- sea-3: DEM check ok {"cells":115,"medianInside":0,"medianOutside":4.2}
- sea-4: DEM check failed {"cells":400,"medianInside":0.4,"medianOutside":0.1}
- sea-5: DEM check failed {"cells":393,"medianInside":0.6,"medianOutside":0.1}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.05521/17.97861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662615 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/castello-di-gallipoli-q3662615.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
