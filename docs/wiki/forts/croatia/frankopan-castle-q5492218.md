# Frankopan Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frankopan-castle-q5492218` |
| Coordinates | 45.0257, 14.5764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.0257/14.5764)) |
| Wikidata | [Q5492218](https://www.wikidata.org/wiki/Q5492218) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Krk |
| Inception | 1191 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 2, road 85, building 260, wall 13, retaining-wall 7, coastline 3, water 3).

Evidence: documented 0, mapped 374, inferred 0, derived 3; heights documented 18, inferred 0, unknown 262.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148091551 historic=castle Q5492218 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":222,"medianInside":0,"medianOutside":11.5}
- sea-1: DEM check ok {"cells":400,"medianInside":0.2,"medianOutside":9.8}
- sea-2: DEM check ok {"cells":399,"medianInside":0.2,"medianOutside":9.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.0257/14.5764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=5; wikidata:Q5492218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/frankopan-castle-q5492218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
