# Tour Vauban

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-vauban-q1494461` |
| Coordinates | 48.28003, -4.59168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.28003/-4.59168)) |
| Wikidata | [Q1494461](https://www.wikidata.org/wiki/Q1494461) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Camaret-sur-Mer |
| Inception | 1693 |
| Designations | part of UNESCO World Heritage Site\|classified historical monument |
| UNESCO WHC id | 1283-005 |
| Wikipedia language editions | 8 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 22, building 12, coastline 3, retaining-wall 3, wall 4, zone 6, water 2).

Evidence: documented 0, mapped 53, inferred 0, derived 2; heights documented 1, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53971170 historic=yes Q1494461 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":220,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":113,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.28003/-4.59168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=8; wikidata:Q1494461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/tour-vauban-q1494461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
