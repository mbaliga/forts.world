# remparts de Brême

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-breme-q907857` |
| Coordinates | 53.07887, 8.79813 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.07887/8.79813)) |
| Wikidata | [Q907857](https://www.wikidata.org/wiki/Q907857) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bremen |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 14, road 152, water 4, building 112, retaining-wall 3, wall 6, waterway 2, coastline 2).

Evidence: documented 0, mapped 296, inferred 0, derived 3; heights documented 77, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/523718098 historic=archaeological_site 1 m from ledger point
- sea-0: DEM check ok {"cells":156,"medianInside":-2,"medianOutside":12.1}
- sea-1: DEM check ok {"cells":398,"medianInside":7.5,"medianOutside":12.7}
- sea-2: DEM check ok {"cells":386,"medianInside":7.8,"medianOutside":11.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.07887/8.79813) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q907857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/remparts-de-breme-q907857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
