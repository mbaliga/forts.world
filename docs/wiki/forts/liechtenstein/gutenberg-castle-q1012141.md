# Gutenberg Castle

> Liechtenstein · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gutenberg-castle-q1012141` |
| Coordinates | 47.06525, 9.50028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.06525/9.50028)) |
| Wikidata | [Q1012141](https://www.wikidata.org/wiki/Q1012141) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Balzers |
| Inception | 1101 |
| Designations | cultural heritage monument in Liechtenstein |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.burg-gutenberg.li/ |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 1, road 126, zone 22, waterway 4, building 67, wall 7, water 1).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 5, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/437733962 historic=castle Q1012141 50 m from ledger point
- origin moved 50 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.06525/9.50028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=17; wikidata:Q1012141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/gutenberg-castle-q1012141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/liechtenstein.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
