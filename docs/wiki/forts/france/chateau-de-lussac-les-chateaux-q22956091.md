# Château de Lussac-les-Châteaux

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-lussac-les-chateaux-q22956091` |
| Coordinates | 46.40502, 0.72826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.40502/0.72826)) |
| Wikidata | [Q22956091](https://www.wikidata.org/wiki/Q22956091) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château |
| Administrative area | Lussac-les-Châteaux |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 227 elements (marker 2, road 65, waterway 13, building 340, zone 11, cliff 9, wall 5, water 2).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2100105 historic=ruins Q22956091 0 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (48 x 45 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 340 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.40502/0.72826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=1; wikidata:Q22956091 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 227 elements); data/traces/chateau-de-lussac-les-chateaux-q22956091.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
