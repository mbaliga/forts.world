# Burg Wertheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-wertheim-q1014557` |
| Coordinates | 49.75887, 9.51991 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.75887/9.51991)) |
| Wikidata | [Q1014557](https://www.wikidata.org/wiki/Q1014557) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wertheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.burgwertheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 16, road 263, waterway 2, zone 28, retaining-wall 23, wall 52, building 276, water 1).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 9, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88289134 historic=castle Q1014557 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 263 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.75887/9.51991) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1014557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/burg-wertheim-q1014557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
