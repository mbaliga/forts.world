# Torre del Infantado

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-infantado-q6150656` |
| Coordinates | 43.15411, -4.62358 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.15411/-4.62358)) |
| Wikidata | [Q6150656](https://www.wikidata.org/wiki/Q6150656) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Potes |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 3, road 161, waterway 7, water 1, retaining-wall 3, building 276, wall 4).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 117, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568551490 historic=castle Q6150656 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.15411/-4.62358) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q6150656 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/torre-del-infantado-q6150656.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
