# Najima Mon

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `najima-mon-q141756300` |
| Coordinates | 33.58713, 130.38091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.58713/130.38091)) |
| Wikidata | [Q141756300](https://www.wikidata.org/wiki/Q141756300) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jōnai |
| Designations | Tangible Cultural Property of Japan |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 25, road 349, water 2, building 345, zone 32, wall 1, retaining-wall 30).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 43, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345642780 historic=castle Q1143944 329 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 345 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 349 mapped (trace size budget); minor lanes are not drawn
- origin moved 338 m from the ledger point to the centre of the mapped site
- 97 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.58713/130.38091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q141756300 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/najima-mon-q141756300.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
