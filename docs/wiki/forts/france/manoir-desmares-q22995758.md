# Manoir Desmares

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-desmares-q22995758` |
| Coordinates | 49.1465, 0.22863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1465/0.22863)) |
| Wikidata | [Q22995758](https://www.wikidata.org/wiki/Q22995758) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Lisieux |
| Inception | C15 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 236 elements (marker 1, road 98, building 396, zone 4, water 5, wall 8).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 2, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7253279 historic=castle Q22995758 3 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (9 x 22 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1465/0.22863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22995758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 236 elements); data/traces/manoir-desmares-q22995758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
