# Castello Visconteo

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-visconteo-q3662393` |
| Coordinates | 46.168, 8.79338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.168/8.79338)) |
| Wikidata | [Q3662393](https://www.wikidata.org/wiki/Q3662393) (CC0) |
| Wikidata class | castle |
| Types | built structure\|Lowland Castle |
| Administrative area | Locarno |
| Inception | 1341 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://castellolocarno.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 16, road 186, building 181, waterway 1, zone 10, water 1, wall 1, retaining-wall 6).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 5, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/317356795 historic=castle Q3662393 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.168/8.79338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; built structure\|Lowland Castle; sitelinks=9; wikidata:Q3662393 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/castello-visconteo-q3662393.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
