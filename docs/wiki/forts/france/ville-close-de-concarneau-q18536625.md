# Ville Close de Concarneau

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ville-close-de-concarneau-q18536625` |
| Coordinates | 47.87266, -3.9138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.87266/-3.9138)) |
| Wikidata | [Q18536625](https://www.wikidata.org/wiki/Q18536625) (CC0) |
| Wikidata class | fortification |
| Types | closed city |
| Administrative area | Concarneau |
| Inception | 1600 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 4, road 346, coastline 3, wall 3, building 519, zone 9, waterway 1, water 5).

Evidence: documented 0, mapped 296, inferred 0, derived 3; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1096398751 historic=castle 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 519 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 346 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":776,"medianInside":0,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":1153,"medianInside":0.1,"medianOutside":0.3}
- sea-2: DEM check ok {"cells":1015,"medianInside":0,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.87266/-3.9138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; closed city; sitelinks=6; wikidata:Q18536625 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/ville-close-de-concarneau-q18536625.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
