# Palais du Pharo

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-du-pharo-q1906882` |
| Coordinates | 43.29424, 5.35823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.29424/5.35823)) |
| Wikidata | [Q1906882](https://www.wikidata.org/wiki/Q1906882) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Marseille |
| Inception | 1870 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |
| OSM `website` | https://palaisdupharo.marseille.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 1, road 63, coastline 4, building 66, zone 13, wall 2, water 3).

Evidence: documented 0, mapped 153, inferred 0, derived 3; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/265247086 historic=castle Q1906882 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2,"medianInside":4.8,"medianOutside":0.8}
- sea-1: DEM check ok {"cells":156,"medianInside":0,"medianOutside":12.7}
- sea-2: DEM check failed {"cells":400,"medianInside":3.6,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.29424/5.35823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=11; wikidata:Q1906882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/palais-du-pharo-q1906882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
