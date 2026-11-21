# Rabastens - Hôtel de Rolland

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rabastens-hotel-de-rolland-q22997796` |
| Coordinates | 43.82035, 1.72393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.82035/1.72393)) |
| Wikidata | [Q22997796](https://www.wikidata.org/wiki/Q22997796) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Rabastens |
| Inception | C15 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 255 elements (marker 2, road 123, building 514, water 2, zone 3, waterway 2, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8348952 historic=building Q22940119 71 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (22 x 58 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 514 mapped (trace size budget); the rest of the town is not drawn
- origin moved 69 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.82035/1.72393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=1; wikidata:Q22997796 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 255 elements); data/traces/rabastens-hotel-de-rolland-q22997796.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
