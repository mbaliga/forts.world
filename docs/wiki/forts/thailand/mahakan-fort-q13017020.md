# Mahakan Fort

> Thailand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mahakan-fort-q13017020` |
| Coordinates | 13.75558, 100.50554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.75558/100.50554)) |
| Wikidata | [Q13017020](https://www.wikidata.org/wiki/Q13017020) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bowon Niwet |
| Inception | 1783 |
| Designations | registered Thai historic site |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 7, road 200, building 165, wall 6, waterway 5, zone 22).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 10, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103022352 historic=fort Q13017020 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 58 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.75558/100.50554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q13017020 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/mahakan-fort-q13017020.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/thailand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
