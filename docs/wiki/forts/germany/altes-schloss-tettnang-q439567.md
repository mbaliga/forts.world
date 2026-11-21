# Altes Schloss (Tettnang)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altes-schloss-tettnang-q439567` |
| Coordinates | 47.67031, 9.58643 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.67031/9.58643)) |
| Wikidata | [Q439567](https://www.wikidata.org/wiki/Q439567) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|Rathaus |
| Administrative area | Tettnang |
| Inception | 1667 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | https://www.tettnang.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 2, road 222, building 292, water 2, waterway 19, zone 24, wall 6).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 64, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79620363 historic=castle Q439567 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 292 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 222 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.67031/9.58643) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|Rathaus; sitelinks=2; wikidata:Q439567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/altes-schloss-tettnang-q439567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
