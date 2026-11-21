# Schloss Neuwied

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-neuwied-q1323241` |
| Coordinates | 50.4293, 7.45467 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4293/7.45467)) |
| Wikidata | [Q1323241](https://www.wikidata.org/wiki/Q1323241) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Rhineland-Palatinate |
| Inception | 1706 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 86, road 109, zone 3, building 259, waterway 2, wall 3).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30111305 historic=castle Q1323241 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4293/7.45467) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q1323241 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/schloss-neuwied-q1323241.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
