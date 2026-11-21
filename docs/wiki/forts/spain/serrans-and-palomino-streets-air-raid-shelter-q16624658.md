# Serrans and Palomino streets air raid shelter

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `serrans-and-palomino-streets-air-raid-shelter-q16624658` |
| Coordinates | 39.47829, -0.37654 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.47829/-0.37654)) |
| Wikidata | [Q16624658](https://www.wikidata.org/wiki/Q16624658) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Ciutat Vella |
| Inception | 1937 |
| Designations | Property of Local Relevance |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 3, road 223, building 363, wall 51, zone 8, water 2, retaining-wall 1).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 52, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1303164127 historic=castle 122 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 119 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.47829/-0.37654) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=3; wikidata:Q16624658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/serrans-and-palomino-streets-air-raid-shelter-q16624658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
