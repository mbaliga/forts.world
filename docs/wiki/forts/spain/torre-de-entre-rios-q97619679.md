# Torre de Entre Rios

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-entre-rios-q97619679` |
| Coordinates | 36.17538, -5.43134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.17538/-5.43134)) |
| Wikidata | [Q97619679](https://www.wikidata.org/wiki/Q97619679) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Los Barrios |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | watchtower |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, road 50, coastline 1, waterway 1, building 16, water 5, zone 3, wall 1).

Evidence: documented 0, mapped 78, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/558594071 historic=castle Q97619679 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":1,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.17538/-5.43134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q97619679 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/torre-de-entre-rios-q97619679.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
