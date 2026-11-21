# Wardija Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wardija-battery-q23003208` |
| Coordinates | 35.94356, 14.39997 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.94356/14.39997)) |
| Wikidata | [Q23003208](https://www.wikidata.org/wiki/Q23003208) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | St. Paul's Bay |
| Inception | 1915 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, road 40, zone 4, building 13, wall 6, coastline 1, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 2; heights documented 6, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/376190514 historic=castle Q20949686 553 m from ledger point
- origin moved 551 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":6.3,"medianOutside":20}
- sea-1: DEM check ok {"cells":47,"medianInside":4,"medianOutside":22}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.94356/14.39997) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q23003208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/wardija-battery-q23003208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
