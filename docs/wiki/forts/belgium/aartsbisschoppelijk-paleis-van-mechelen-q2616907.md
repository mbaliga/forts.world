# Aartsbisschoppelijk Paleis van Mechelen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aartsbisschoppelijk-paleis-van-mechelen-q2616907` |
| Coordinates | 51.03025, 4.47852 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.03025/4.47852)) |
| Wikidata | [Q2616907](https://www.wikidata.org/wiki/Q2616907) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|episcopal palace |
| Administrative area | Mechelen |
| Inception | 1800 |
| Designations | beschermd monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 8, road 123, water 6, building 436, waterway 3, wall 24, zone 11).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 1, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/90838347 historic=castle Q2616907 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 436 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.03025/4.47852) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|episcopal palace; sitelinks=3; wikidata:Q2616907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/aartsbisschoppelijk-paleis-van-mechelen-q2616907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
