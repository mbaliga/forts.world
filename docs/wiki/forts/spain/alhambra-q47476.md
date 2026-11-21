# Alhambra

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alhambra-q47476` |
| Coordinates | 37.17606, -3.58904 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.17606/-3.58904)) |
| Wikidata | [Q47476](https://www.wikidata.org/wiki/Q47476) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|palace\|garden\|architectural ensemble\|group of monuments |
| Administrative area | Granada |
| Inception | 1239 |
| Designations | part of UNESCO World Heritage Site\|Zona Patrimonial\|Historic Garden\|bien de interés cultural |
| UNESCO WHC id | 314 |
| Wikipedia language editions | 96 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |
| OSM `description` | Moorish palace and fortress complex. |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 25, road 1091, zone 112, building 770, water 16, wall 68, waterway 27, retaining-wall 28, cliff 3).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 32, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92528618 historic=castle Q47476 41 m from ledger point
- pruned to the outline plus 150 m: 2141 -> 1004 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 633 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.17606/-3.58904) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|palace\|garden\|architectural ensemble\|group of monuments; sitelinks=96; wikidata:Q47476 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/alhambra-q47476.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
