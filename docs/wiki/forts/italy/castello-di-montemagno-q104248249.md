# Castello di Montemagno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-montemagno-q104248249` |
| Coordinates | 44.98419, 8.32494 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.98419/8.32494)) |
| Wikidata | [Q104248249](https://www.wikidata.org/wiki/Q104248249) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Montemagno Monferrato |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 1, road 50, wall 1, building 124, retaining-wall 1).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/531057486 historic=castle Q104248249 18 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.98419/8.32494) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q104248249 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/castello-di-montemagno-q104248249.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
