# Castello Normanno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-normanno-q2968035` |
| Coordinates | 37.5542, 15.14952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.5542/15.14952)) |
| Wikidata | [Q2968035](https://www.wikidata.org/wiki/Q2968035) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum of a public entity\|natural history museum\|historical park museum\|military museum building\|archaeological museum |
| Administrative area | Aci Castello |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, road 54, building 180, zone 4, wall 18, cliff 3, coastline 1, retaining-wall 1, water 2).

Evidence: documented 0, mapped 264, inferred 0, derived 2; heights documented 1, inferred 0, unknown 198.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31665112 historic=castle Q2968035 10 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":239,"medianInside":0,"medianOutside":14.6}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.5542/15.14952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum of a public entity\|natural history museum\|historical park museum\|military museum building\|archaeological museum; sitelinks=8; wikidata:Q2968035 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/castello-normanno-q2968035.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
