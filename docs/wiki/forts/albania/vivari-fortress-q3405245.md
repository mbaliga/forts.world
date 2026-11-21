# Vivari Fortress

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vivari-fortress-q3405245` |
| Coordinates | 39.74167, 19.9925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.74167/19.9925)) |
| Wikidata | [Q3405245](https://www.wikidata.org/wiki/Q3405245) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Butrint |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, coastline 7, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145178246 historic=castle Q3405245 10 m from ledger point
- island ring (1061 m2) cut out of sea-0
- island ring (3439 m2) cut out of sea-0
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1519,"medianInside":-1638.3,"medianOutside":-1638.3}
- 6561 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.74167/19.9925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q3405245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/vivari-fortress-q3405245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
