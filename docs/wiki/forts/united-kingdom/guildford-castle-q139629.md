# Guildford Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `guildford-castle-q139629` |
| Coordinates | 51.2339, -0.57266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2339/-0.57266)) |
| Wikidata | [Q139629](https://www.wikidata.org/wiki/Q139629) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic house museum |
| Administrative area | Guildford |
| Inception | 1100 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 5, road 189, waterway 7, water 4, building 257, wall 1, zone 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35954768 historic=castle Q139629 45 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 257 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 189 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2339/-0.57266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic house museum; sitelinks=8; wikidata:Q139629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/guildford-castle-q139629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
