# Torres dels Serrans

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torres-dels-serrans-q2455550` |
| Coordinates | 39.4793, -0.37593 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.4793/-0.37593)) |
| Wikidata | [Q2455550](https://www.wikidata.org/wiki/Q2455550) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Valencia |
| Inception | 1400 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 3, road 223, building 363, wall 51, zone 8, water 2, retaining-wall 1).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 52, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1303164127 historic=castle 243 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 240 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.4793/-0.37593) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=15; wikidata:Q2455550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/torres-dels-serrans-q2455550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
