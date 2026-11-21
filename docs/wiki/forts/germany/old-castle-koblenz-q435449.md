# Old Castle (Koblenz)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-castle-koblenz-q435449` |
| Coordinates | 50.3624, 7.59403 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3624/7.59403)) |
| Wikidata | [Q435449](https://www.wikidata.org/wiki/Q435449) (CC0) |
| Wikidata class | castle |
| Types | Lowland Castle |
| Administrative area | Koblenz |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 16, road 262, building 231, waterway 2, zone 8, wall 17, retaining-wall 12).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 98, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/155559340 historic=castle Q435449 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 231 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 262 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3624/7.59403) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Lowland Castle; sitelinks=6; wikidata:Q435449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/old-castle-koblenz-q435449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
