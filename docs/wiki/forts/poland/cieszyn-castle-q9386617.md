# Cieszyn Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cieszyn-castle-q9386617` |
| Coordinates | 49.7514, 18.6261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7514/18.6261)) |
| Wikidata | [Q9386617](https://www.wikidata.org/wiki/Q9386617) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Cieszyn |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | http://www.zamekcieszyn.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 14, road 207, building 216, waterway 10, wall 8, retaining-wall 3, zone 41, water 1).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 33, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59566706 historic=castle Q28673123 93 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 216 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 94 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7514/18.6261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=6; wikidata:Q9386617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/cieszyn-castle-q9386617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
