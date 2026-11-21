# Ospedale L'Albergo Reale dei Poveri

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ospedale-l-albergo-reale-dei-poveri-q221640` |
| Coordinates | 40.86345, 14.26548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.86345/14.26548)) |
| Wikidata | [Q221640](https://www.wikidata.org/wiki/Q221640) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|hospital\|public building\|former hospital |
| Administrative area | Naples |
| Inception | 1751 |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 2, road 522, wall 9, building 318, zone 8, water 4, retaining-wall 2).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 4, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/62884 historic=castle Q221640 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 318 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 522 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.86345/14.26548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|hospital\|public building\|former hospital; sitelinks=13; wikidata:Q221640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/ospedale-l-albergo-reale-dei-poveri-q221640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
