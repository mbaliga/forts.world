# Castello Aragonese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-aragonese-q3662303` |
| Coordinates | 40.80862, 14.08019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.80862/14.08019)) |
| Wikidata | [Q3662303](https://www.wikidata.org/wiki/Q3662303) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bacoli |
| Inception | 1495 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 123 elements (outline 1, road 70, coastline 1, building 37, retaining-wall 6, wall 4, zone 3, water 1).

Evidence: documented 0, mapped 123, inferred 0, derived 1; heights documented 2, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144917231 historic=castle Q3662303 255 m from ledger point
- origin moved 257 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":271,"medianInside":0,"medianOutside":28.9}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.80862/14.08019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662303 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 123 elements); data/traces/castello-aragonese-q3662303.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
