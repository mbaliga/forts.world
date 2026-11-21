# Burgtor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgtor-q538276` |
| Coordinates | 53.874, 10.6911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.874/10.6911)) |
| Wikidata | [Q538276](https://www.wikidata.org/wiki/Q538276) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Lübeck's Old City |
| Inception | 1444 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 12 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 20, road 230, waterway 4, building 306, zone 1, wall 6, water 3, retaining-wall 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 21, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29049029 historic=building Q247787 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 306 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.874/10.6911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=12; wikidata:Q538276 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/burgtor-q538276.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
