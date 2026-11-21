# Burg Wassenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-wassenberg-q1014495` |
| Coordinates | 51.1009, 6.15769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1009/6.15769)) |
| Wikidata | [Q1014495](https://www.wikidata.org/wiki/Q1014495) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wassenberg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |
| OSM `description` | Die Anlage hat einen annähernd quadratischen Grundriß, auf dessen höchster Punkt sich der Bergfried aus der ersten Hälfte des 15. Jahrhunderts befindet, als glatter viergeschossiger Backsteinturm |
| OSM `website` | http://www.limburg-bernd.de |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 12, road 169, building 356, wall 12, water 1, zone 8, waterway 3).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 1, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/258922031 historic=castle Q1014495 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1009/6.15769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1014495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/burg-wassenberg-q1014495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
