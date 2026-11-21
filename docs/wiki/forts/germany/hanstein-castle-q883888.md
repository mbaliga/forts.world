# Hanstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hanstein-castle-q883888` |
| Coordinates | 51.3394, 9.94 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3394/9.94)) |
| Wikidata | [Q883888](https://www.wikidata.org/wiki/Q883888) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bornhagen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, marker 7, road 54, building 52, zone 30, wall 17, cliff 4).

Evidence: documented 0, mapped 165, inferred 0, derived 0; heights documented 11, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7760866 historic=castle Q883888 37 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3394/9.94) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q883888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/hanstein-castle-q883888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
