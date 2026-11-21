# Hohnstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohnstein-castle-q315602` |
| Coordinates | 50.9797, 14.1094 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9797/14.1094)) |
| Wikidata | [Q315602](https://www.wikidata.org/wiki/Q315602) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Hohnstein |
| Inception | 1200 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 8, road 213, waterway 6, building 238, zone 26, cliff 28, wall 26, retaining-wall 30, water 1).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 27, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69360253 historic=castle 48 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 238 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9797/14.1094) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q315602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/hohnstein-castle-q315602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
