# Nottingham Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nottingham-castle-q17642916` |
| Coordinates | 52.94917, -1.15472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.94917/-1.15472)) |
| Wikidata | [Q17642916](https://www.wikidata.org/wiki/Q17642916) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | City of Nottingham |
| Inception | 1067 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.nottinghamcastle.org.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 23, road 323, cliff 4, waterway 7, building 225, water 5, zone 10, wall 35, retaining-wall 8).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 13, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/16459858 historic=castle Q17642916 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 225 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.94917/-1.15472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=22; wikidata:Q17642916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/nottingham-castle-q17642916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
