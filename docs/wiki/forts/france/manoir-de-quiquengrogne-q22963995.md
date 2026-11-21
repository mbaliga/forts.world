# Manoir de Quiquengrogne

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-quiquengrogne-q22963995` |
| Coordinates | 49.41908, 0.22946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41908/0.22946)) |
| Wikidata | [Q22963995](https://www.wikidata.org/wiki/Q22963995) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Honfleur |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 279 elements (road 112, water 8, building 909, waterway 6, wall 29, zone 2, retaining-wall 2).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 2, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7250438 historic=castle Q22963995 0 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (18 x 22 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 909 mapped (trace size budget); the rest of the town is not drawn
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41908/0.22946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22963995 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 279 elements); data/traces/manoir-de-quiquengrogne-q22963995.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
