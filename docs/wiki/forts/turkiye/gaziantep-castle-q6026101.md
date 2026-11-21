# Gaziantep Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gaziantep-castle-q6026101` |
| Coordinates | 37.0664, 37.3833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.0664/37.3833)) |
| Wikidata | [Q6026101](https://www.wikidata.org/wiki/Q6026101) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Şahinbey district |
| Wikipedia language editions | 24 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, road 89, building 1069, wall 1, water 3, waterway 5).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237058550 historic=castle Q6026101 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1069 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.0664/37.3833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=24; wikidata:Q6026101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/gaziantep-castle-q6026101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
