# Blackness Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blackness-castle-q1524366` |
| Coordinates | 56.00611, -3.51611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.00611/-3.51611)) |
| Wikidata | [Q1524366](https://www.wikidata.org/wiki/Q1524366) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Falkirk |
| Designations | scheduled monument |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, coastline 1, building 8, wall 9, zone 2, road 41, waterway 1, water 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 1, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1458800 historic=castle Q1524366 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1348,"medianInside":10,"medianOutside":4.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 32 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.00611/-3.51611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q1524366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/blackness-castle-q1524366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
