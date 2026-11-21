# Sforza Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sforza-castle-q23354` |
| Coordinates | 45.47101, 9.17969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.47101/9.17969)) |
| Wikidata | [Q23354](https://www.wikidata.org/wiki/Q23354) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Milan |
| Inception | 1360 |
| Designations | Italian national heritage |
| Wikipedia language editions | 44 |
| OSM `historic` | castle |
| OSM `website` | https://www.milanocastello.it/ |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 7, road 683, building 120, water 3, zone 31, wall 2, waterway 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 94, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1918 historic=castle Q23354 82 m from ledger point
- roads capped: kept the 150 longest of 683 mapped (trace size budget); minor lanes are not drawn
- origin moved 112 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.47101/9.17969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=44; wikidata:Q23354 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/sforza-castle-q23354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
