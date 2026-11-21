# Royal Palace of Pedralbes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-palace-of-pedralbes-q1815135` |
| Coordinates | 41.38855, 2.11712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38855/2.11712)) |
| Wikidata | [Q1815135](https://www.wikidata.org/wiki/Q1815135) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Pedralbes |
| Inception | 1924 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `website` | https://web.gencat.cat/ca/generalitat/qui-som/seus-govern/palau-pedralbes |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, zone 61, road 275, water 9, wall 11, waterway 1, building 35, retaining-wall 11).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 34, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8906532 historic=castle Q1815135 10 m from ledger point
- roads capped: kept the 150 longest of 275 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38855/2.11712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=10; wikidata:Q1815135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/royal-palace-of-pedralbes-q1815135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
