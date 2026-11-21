# Palau Alòs

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palau-alos-q11939839` |
| Coordinates | 41.38827, 2.1784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38827/2.1784)) |
| Wikidata | [Q11939839](https://www.wikidata.org/wiki/Q11939839) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Sant Pere, Santa Caterina i la Ribera |
| Inception | 1700 |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 7, road 147, building 423, wall 16, zone 1, waterway 2).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 82, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9177380 historic=castle Q11939839 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 423 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38827/2.1784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q11939839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/palau-alos-q11939839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
