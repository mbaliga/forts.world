# Burg Plau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-plau-q1013506` |
| Coordinates | 53.4596, 12.2662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4596/12.2662)) |
| Wikidata | [Q1013506](https://www.wikidata.org/wiki/Q1013506) (CC0) |
| Wikidata class | castle |
| Types | Lowland Castle |
| Administrative area | Plau am See |
| Inception | 1287 |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 95, waterway 2, building 445, water 2, zone 6, wall 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216138190 historic=castle Q1013506 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 445 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4596/12.2662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Lowland Castle; sitelinks=3; wikidata:Q1013506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/burg-plau-q1013506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
