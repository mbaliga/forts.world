# Burg Holtzbrinck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-holtzbrinck-q1012471` |
| Coordinates | 51.2955, 7.67379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2955/7.67379)) |
| Wikidata | [Q1012471](https://www.wikidata.org/wiki/Q1012471) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Altena |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, road 177, building 319, waterway 14, wall 5, zone 2, retaining-wall 5).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 13, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/622902272 historic=castle Q1010748 459 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 319 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 458 m from the ledger point to the outline centroid
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2955/7.67379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1012471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/burg-holtzbrinck-q1012471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
