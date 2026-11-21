# Fort Fredrick

> Sri Lanka · Trincomalee · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-fredrick-q3070381` |
| Coordinates | 8.575278, 81.241389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/8.575278/81.241389)) |
| Wikidata | [Q3070381](https://www.wikidata.org/wiki/Q3070381) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Trincomalee |
| Inception | 1623 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence medium, significance rank 3244; sources wikidata:Q3070381 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 5, road 9, building 116, cliff 1, wall 2, retaining-wall 1, zone 1, coastline 1, water 2).

Evidence: documented 0, mapped 139, inferred 0, derived 2; heights documented 0, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/439563994 historic=fort Q3070381 430 m from ledger point
- origin moved 437 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3153,"medianInside":0.9,"medianOutside":11.9}
- sea-1: DEM check ok {"cells":2101,"medianInside":0.9,"medianOutside":8.9}
- 2366 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/8.575278/81.241389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3244; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/fort-fredrick-q3070381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
