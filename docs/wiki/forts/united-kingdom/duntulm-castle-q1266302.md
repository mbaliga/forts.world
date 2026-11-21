# Duntulm Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duntulm-castle-q1266302` |
| Coordinates | 57.6835, -6.3489 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.6835/-6.3489)) |
| Wikidata | [Q1266302](https://www.wikidata.org/wiki/Q1266302) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | no access inside because ground considered unsafe - sug 2013 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, coastline 1, road 10, waterway 4, wall 3, zone 4, building 1, cliff 2, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353722849 historic=castle Q1266302 148 m from ledger point
- origin moved 148 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":993,"medianInside":9.1,"medianOutside":13.1}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.6835/-6.3489) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1266302 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/duntulm-castle-q1266302.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
