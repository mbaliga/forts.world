# Nicholas Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nicholas-palace-q1990715` |
| Coordinates | 59.93244, 30.29309 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.93244/30.29309)) |
| Wikidata | [Q1990715](https://www.wikidata.org/wiki/Q1990715) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Saint Petersburg |
| Inception | 1861 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 9, waterway 4, road 331, building 39, retaining-wall 20, zone 11, wall 6).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 29, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1404109 historic=castle Q1990715 6 m from ledger point
- roads capped: kept the 150 longest of 331 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.93244/30.29309) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=12; wikidata:Q1990715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/nicholas-palace-q1990715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
