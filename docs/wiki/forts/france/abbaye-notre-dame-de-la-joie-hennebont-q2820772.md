# Abbaye Notre-Dame-de-la-Joie, Hennebont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `abbaye-notre-dame-de-la-joie-hennebont-q2820772` |
| Coordinates | 47.81405, -3.28178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.81405/-3.28178)) |
| Wikidata | [Q2820772](https://www.wikidata.org/wiki/Q2820772) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|abbey |
| Administrative area | Hennebont |
| Inception | 1693 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |
| OSM `website` | https://monumentum.fr/ancienne-abbaye-joie-pa00091277.html |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, road 22, zone 6, building 23, waterway 1, coastline 1, wall 3, water 2).

Evidence: documented 0, mapped 59, inferred 0, derived 2; heights documented 1, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71250921 historic=castle Q2820772 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":374,"medianInside":9.8,"medianOutside":15.9}
- sea-1: DEM check ok {"cells":105,"medianInside":5.3,"medianOutside":11.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.81405/-3.28178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|abbey; sitelinks=4; wikidata:Q2820772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/abbaye-notre-dame-de-la-joie-hennebont-q2820772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
