# Schloss Leonberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-leonberg-q1700527` |
| Coordinates | 48.80129, 9.01236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.80129/9.01236)) |
| Wikidata | [Q1700527](https://www.wikidata.org/wiki/Q1700527) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Leonberg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 206, building 228, waterway 3, zone 9, wall 9, retaining-wall 1).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23537582 historic=castle Q1700527 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 228 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 206 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.80129/9.01236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q1700527 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/schloss-leonberg-q1700527.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
