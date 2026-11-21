# Namhansanseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `namhansanseong-q562529` |
| Coordinates | 37.47803, 127.18419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.47803/127.18419)) |
| Wikidata | [Q562529](https://www.wikidata.org/wiki/Q562529) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Gyeonggi Province |
| Designations | World Heritage Site\|Historic sites of South Korea |
| UNESCO WHC id | 1439 |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 132 elements (outline 1, marker 3, road 38, wall 16, building 70, water 1, zone 1, waterway 2).

Evidence: documented 0, mapped 132, inferred 0, derived 0; heights documented 1, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/872196107 historic=castle Q20651693 257 m from ledger point
- origin moved 255 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.47803/127.18419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=37; wikidata:Q562529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/namhansanseong-q562529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
