# Valkenburg Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valkenburg-castle-q1473283` |
| Coordinates | 50.86194, 5.83081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.86194/5.83081)) |
| Wikidata | [Q1473283](https://www.wikidata.org/wiki/Q1473283) (CC0) |
| Wikidata class | castle |
| Types | castle\|yes\|hilltop castle\|château |
| Administrative area | Valkenburg aan de Geul |
| Inception | 1115 |
| Designations | Rijksmonument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 6, road 148, zone 9, water 3, waterway 3, building 387, wall 22).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 16, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1294976086 historic=castle Q2611044 306 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 387 mapped (trace size budget); the rest of the town is not drawn
- origin moved 307 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.86194/5.83081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|yes\|hilltop castle\|château; sitelinks=11; wikidata:Q1473283 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/valkenburg-castle-q1473283.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
