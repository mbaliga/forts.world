# Electoral Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `electoral-palace-q316766` |
| Coordinates | 49.75331, 6.64381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.75331/6.64381)) |
| Wikidata | [Q316766](https://www.wikidata.org/wiki/Q316766) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|château |
| Administrative area | Trier |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 377 elements (outline 1, marker 6, road 314, water 1, building 194, wall 74, zone 23, retaining-wall 2).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 116, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50284090 historic=castle Q316766 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 194 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 314 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.75331/6.64381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|château; sitelinks=11; wikidata:Q316766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 377 elements); data/traces/electoral-palace-q316766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
