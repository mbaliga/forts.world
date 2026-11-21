# Aarburg Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aarburg-castle-q673786` |
| Coordinates | 47.32151, 7.90108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.32151/7.90108)) |
| Wikidata | [Q673786](https://www.wikidata.org/wiki/Q673786) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Aarburg |
| Inception | 1659 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 1, waterway 15, road 201, building 551, zone 2, wall 17, retaining-wall 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202704921 historic=castle Q673786 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 551 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.32151/7.90108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=15; wikidata:Q673786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/aarburg-castle-q673786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
