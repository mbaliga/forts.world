# Old Gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-gate-q22567` |
| Coordinates | 49.3175, 8.43227 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.3175/8.43227)) |
| Wikidata | [Q22567](https://www.wikidata.org/wiki/Q22567) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Speyer |
| Inception | 1300 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, road 96, waterway 2, zone 4, wall 12, building 654, retaining-wall 4).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 2, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/589701443 historic=citywalls 540 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 654 mapped (trace size budget); the rest of the town is not drawn
- origin moved 539 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.3175/8.43227) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=6; wikidata:Q22567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 239 elements); data/traces/old-gate-q22567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
