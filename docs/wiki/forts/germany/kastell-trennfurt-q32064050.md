# Kastell Trennfurt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-trennfurt-q32064050` |
| Coordinates | 49.77763, 9.17791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.77763/9.17791)) |
| Wikidata | [Q32064050](https://www.wikidata.org/wiki/Q32064050) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Klingenberg am Main |
| UNESCO WHC id | 430ter-328 |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 7, road 204, water 2, zone 4, building 184, waterway 4, wall 11, retaining-wall 22).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 10, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/563254292 historic=building 605 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 184 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 607 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.77763/9.17791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=4; wikidata:Q32064050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/kastell-trennfurt-q32064050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
