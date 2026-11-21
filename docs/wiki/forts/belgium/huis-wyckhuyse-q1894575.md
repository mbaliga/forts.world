# Huis Wyckhuyse

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huis-wyckhuyse-q1894575` |
| Coordinates | 50.94842, 3.12734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.94842/3.12734)) |
| Wikidata | [Q1894575](https://www.wikidata.org/wiki/Q1894575) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house |
| Administrative area | Roeselare |
| Inception | 1873. |
| Designations | beschermd monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 2, road 218, building 461, zone 8, waterway 1, wall 15, water 2).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 3, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/300793050 historic=castle Q1894575 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 461 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 218 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.94842/3.12734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house; sitelinks=1; wikidata:Q1894575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/huis-wyckhuyse-q1894575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
