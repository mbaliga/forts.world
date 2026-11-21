# Porta Trigemina

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-trigemina-q1970689` |
| Coordinates | 41.88667, 12.48 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.88667/12.48)) |
| Wikidata | [Q1970689](https://www.wikidata.org/wiki/Q1970689) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|former place |
| Administrative area | Rome |
| Inception | -0400 |
| Wikipedia language editions | 19 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 382 elements (marker 5, road 869, zone 51, wall 86, retaining-wall 93, building 491, water 4, waterway 3).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 5, inferred 0, unknown 234.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20347404 historic=citywalls Q3867314 1294 m from ledger point
- site is a site relation of 146 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (5127 x 4429 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 491 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 869 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.88667/12.48) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|former place; sitelinks=19; wikidata:Q1970689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/porta-trigemina-q1970689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
