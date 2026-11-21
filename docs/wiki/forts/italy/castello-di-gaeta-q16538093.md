# Castello di Gaeta

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-gaeta-q16538093` |
| Coordinates | 41.20752, 13.58454 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.20752/13.58454)) |
| Wikidata | [Q16538093](https://www.wikidata.org/wiki/Q16538093) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gaeta |
| Inception | 1223 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 263 elements (marker 2, road 135, building 291, zone 1, coastline 2, water 3).

Evidence: documented 0, mapped 263, inferred 0, derived 3; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5178433 historic=castle Q16538093 61 m from ledger point
- site is a site relation of 35 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (261 x 155 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 291 mapped (trace size budget); the rest of the town is not drawn
- origin moved 75 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":369,"medianInside":0,"medianOutside":16.8}
- sea-1: DEM check ok {"cells":22,"medianInside":0.1,"medianOutside":0.7}
- sea-2: DEM check ok {"cells":5,"medianInside":-0.6,"medianOutside":0.5}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.20752/13.58454) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q16538093 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 358 elements); data/traces/castello-di-gaeta-q16538093.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
