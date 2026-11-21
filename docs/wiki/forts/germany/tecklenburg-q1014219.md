# Tecklenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tecklenburg-q1014219` |
| Coordinates | 52.2197, 7.80972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2197/7.80972)) |
| Wikidata | [Q1014219](https://www.wikidata.org/wiki/Q1014219) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tecklenburg |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 4, road 320, zone 57, building 274, water 2, retaining-wall 23, wall 5).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 30, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14974025 historic=castle Q1014219 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2197/7.80972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1014219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/tecklenburg-q1014219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
