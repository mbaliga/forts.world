# Castello di Castronovo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-castronovo-q111521608` |
| Coordinates | 37.67747, 13.59898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.67747/13.59898)) |
| Wikidata | [Q111521608](https://www.wikidata.org/wiki/Q111521608) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castronovo di Sicilia |
| Inception | 1077 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, road 195, waterway 1, building 956, retaining-wall 36, wall 101, cliff 1, zone 1).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 0, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1099775467 historic=building 489 m from ledger point
- pruned to the outline plus 150 m: 1292 -> 819 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 594 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 131 mapped (trace size budget); minor lanes are not drawn
- origin moved 490 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.67747/13.59898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q111521608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/castello-di-castronovo-q111521608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
