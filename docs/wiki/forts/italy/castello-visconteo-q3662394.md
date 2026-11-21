# Castello Visconteo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-visconteo-q3662394` |
| Coordinates | 44.98937, 9.00929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.98937/9.00929)) |
| Wikidata | [Q3662394](https://www.wikidata.org/wiki/Q3662394) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Voghera |
| Inception | 1335 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 4, road 369, building 383, waterway 2, wall 83, zone 8, retaining-wall 8).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 11, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1103837297 historic=castle Q3662394 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 383 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 369 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.98937/9.00929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q3662394 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/castello-visconteo-q3662394.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
