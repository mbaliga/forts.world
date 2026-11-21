# Coracha de Moya

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coracha-de-moya-q30907298` |
| Coordinates | 39.95133, -1.36732 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.95133/-1.36732)) |
| Wikidata | [Q30907298](https://www.wikidata.org/wiki/Q30907298) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coracha |
| Administrative area | Moya |
| Inception | 1301 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, marker 1, road 20, wall 16, retaining-wall 1, waterway 1, building 1, zone 3).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/924975454 historic=castle 570 m from ledger point
- origin moved 570 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.95133/-1.36732) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coracha; sitelinks=3; wikidata:Q30907298 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/coracha-de-moya-q30907298.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
