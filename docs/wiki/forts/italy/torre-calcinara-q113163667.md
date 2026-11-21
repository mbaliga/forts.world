# Torre Calcinara

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-calcinara-q113163667` |
| Coordinates | 44.33854, 8.50803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.33854/8.50803)) |
| Wikidata | [Q113163667](https://www.wikidata.org/wiki/Q113163667) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|tower |
| Administrative area | Albisola Superiore |
| Inception | 1500 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 9, road 221, waterway 5, water 3, building 165, zone 15, wall 8).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 26, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203201343 historic=castle Q113163667 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 221 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.33854/8.50803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|tower; sitelinks=1; wikidata:Q113163667 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/torre-calcinara-q113163667.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
