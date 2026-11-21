# Nadbiskupska palača

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nadbiskupska-palaca-q16112377` |
| Coordinates | 43.54576, 16.42565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.54576/16.42565)) |
| Wikidata | [Q16112377](https://www.wikidata.org/wiki/Q16112377) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Kaštela |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, road 85, building 284, wall 1, coastline 1, water 2).

Evidence: documented 0, mapped 374, inferred 0, derived 2; heights documented 4, inferred 0, unknown 281.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360816061 historic=castle Q16112377 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":153,"medianInside":0,"medianOutside":7.6}
- sea-1: DEM check ok {"cells":5,"medianInside":3.4,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.54576/16.42565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q16112377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/nadbiskupska-palaca-q16112377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
