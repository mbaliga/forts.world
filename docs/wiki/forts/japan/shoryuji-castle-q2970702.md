# Shōryūji Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shoryuji-castle-q2970702` |
| Coordinates | 34.91811, 135.70069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.91811/135.70069)) |
| Wikidata | [Q2970702](https://www.wikidata.org/wiki/Q2970702) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Nagaokakyō-shi |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 24, road 183, waterway 9, building 494, wall 11, water 3, retaining-wall 21, zone 8).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/438277655 historic=castle Q2970702 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 494 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.91811/135.70069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=7; wikidata:Q2970702 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/shoryuji-castle-q2970702.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
