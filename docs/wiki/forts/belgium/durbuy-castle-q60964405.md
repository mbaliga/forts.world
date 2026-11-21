# Durbuy Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `durbuy-castle-q60964405` |
| Coordinates | 50.35286, 5.4557 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.35286/5.4557)) |
| Wikidata | [Q60964405](https://www.wikidata.org/wiki/Q60964405) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Durbuy |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, road 160, waterway 7, water 2, building 226, zone 8, wall 52, cliff 1, retaining-wall 2).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 1, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262987799 historic=castle Q60964405 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.35286/5.4557) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q60964405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/durbuy-castle-q60964405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
