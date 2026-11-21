# Schloss Wolfenbüttel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-wolfenbuttel-q2244232` |
| Coordinates | 52.1627, 10.52983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1627/10.52983)) |
| Wikidata | [Q2244232](https://www.wikidata.org/wiki/Q2244232) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|royal palace |
| Administrative area | Wolfenbüttel |
| Inception | 1283 |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 6, road 135, building 97, waterway 7, water 9, zone 2, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 7, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/331104 historic=castle Q2244232 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1627/10.52983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|royal palace; sitelinks=8; wikidata:Q2244232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/schloss-wolfenbuttel-q2244232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
