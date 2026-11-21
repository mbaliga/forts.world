# Igreja de S. Bárbara e Arco de S. Gonçalo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `igreja-de-s-barbara-e-arco-de-s-goncalo-q111917848` |
| Coordinates | 37.09918, -8.66947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.09918/-8.66947)) |
| Wikidata | [Q111917848](https://www.wikidata.org/wiki/Q111917848) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|oratory\|destroyed church |
| Administrative area | São Gonçalo de Lagos |
| Inception | 1940 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 188 elements (outline 1, marker 3, road 79, wall 14, building 60, water 4, zone 13, retaining-wall 9, cliff 1, waterway 1, coastline 3).

Evidence: documented 0, mapped 188, inferred 0, derived 3; heights documented 3, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3132559 historic=castle Q10283735 107 m from ledger point
- origin moved 110 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":2.5,"medianOutside":0}
- sea-1: DEM check ok {"cells":54,"medianInside":0,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":18,"medianInside":0,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.09918/-8.66947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|oratory\|destroyed church; sitelinks=1; wikidata:Q111917848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 188 elements); data/traces/igreja-de-s-barbara-e-arco-de-s-goncalo-q111917848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
