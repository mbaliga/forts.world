# Yoros Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yoros-castle-q1015617` |
| Coordinates | 41.17861, 29.09444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.17861/29.09444)) |
| Wikidata | [Q1015617](https://www.wikidata.org/wiki/Q1015617) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Anadolu Kavağı |
| Inception | 1262 |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 66 elements (outline 1, coastline 1, road 43, zone 5, building 12, retaining-wall 2, water 2).

Evidence: documented 0, mapped 66, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/688720068 historic=castle 48 m from ledger point
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":78.8}
- sea-1: DEM check ok {"cells":24,"medianInside":0.7,"medianOutside":79.5}
- 159 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.17861/29.09444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=16; wikidata:Q1015617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 66 elements); data/traces/yoros-castle-q1015617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
