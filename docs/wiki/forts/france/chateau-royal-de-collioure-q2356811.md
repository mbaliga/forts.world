# Château Royal de Collioure

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-royal-de-collioure-q2356811` |
| Coordinates | 42.52556, 3.08458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.52556/3.08458)) |
| Wikidata | [Q2356811](https://www.wikidata.org/wiki/Q2356811) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Collioure |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, coastline 2, road 99, building 435, wall 13, waterway 1, zone 2, retaining-wall 5, cliff 1, water 2).

Evidence: documented 0, mapped 246, inferred 0, derived 2; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63016431 historic=fort 360 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 435 mapped (trace size budget); the rest of the town is not drawn
- origin moved 360 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":6,"medianInside":5.4,"medianOutside":20.6}
- sea-1: DEM check ok {"cells":78,"medianInside":0,"medianOutside":24.1}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.52556/3.08458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2356811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/chateau-royal-de-collioure-q2356811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
