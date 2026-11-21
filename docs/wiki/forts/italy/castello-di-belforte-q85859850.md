# Castello di Belforte

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-belforte-q85859850` |
| Coordinates | 45.78325, 13.57813 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.78325/13.57813)) |
| Wikidata | [Q85859850](https://www.wikidata.org/wiki/Q85859850) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Monfalcone |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `barrier` | ditch |

## What the model contains

Tier **T1**, status `location-only`, 62 elements (building 23, road 22, waterway 6, zone 5, cliff 1, coastline 2, water 3).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 16, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10223331 historic=yes 7248 m from ledger point
- site is a site relation of 1354 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (22809 x 17220 m)
- sea-0: DEM check failed {"cells":118,"medianInside":0,"medianOutside":0}
- 438 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.78325/13.57813) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q85859850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 62 elements); data/traces/castello-di-belforte-q85859850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
