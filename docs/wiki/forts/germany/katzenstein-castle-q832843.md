# Katzenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katzenstein-castle-q832843` |
| Coordinates | 48.72361, 10.39167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72361/10.39167)) |
| Wikidata | [Q832843](https://www.wikidata.org/wiki/Q832843) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dischingen |
| Inception | 1099 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.burgkatzenstein.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 1, road 19, building 44, waterway 3, zone 1, wall 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17808450 historic=castle Q832843 12 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72361/10.39167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q832843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/katzenstein-castle-q832843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
