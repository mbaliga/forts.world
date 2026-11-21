# Wallenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wallenburg-q2664433` |
| Coordinates | 50.78167, 10.43 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.78167/10.43)) |
| Wikidata | [Q2664433](https://www.wikidata.org/wiki/Q2664433) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brotterode-Trusetal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, road 22, zone 5, building 7, waterway 1).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204521497 historic=castle Q2664433 13 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.78167/10.43) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2664433 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/wallenburg-q2664433.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
