# Schloss Engers

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-engers-q2240858` |
| Coordinates | 50.4225, 7.54346 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4225/7.54346)) |
| Wikidata | [Q2240858](https://www.wikidata.org/wiki/Q2240858) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château\|hunting lodge |
| Administrative area | Neuwied |
| Inception | 1762 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, road 81, zone 4, waterway 1, building 344, wall 2).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193369764 historic=castle Q2240858 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4225/7.54346) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château\|hunting lodge; sitelinks=5; wikidata:Q2240858 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/schloss-engers-q2240858.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
