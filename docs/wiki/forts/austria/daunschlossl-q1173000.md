# Daunschlössl

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `daunschlossl-q1173000` |
| Coordinates | 47.79232, 13.04369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.79232/13.04369)) |
| Wikidata | [Q1173000](https://www.wikidata.org/wiki/Q1173000) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|villa |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 136 elements (outline 1, road 73, water 4, waterway 8, building 32, zone 14, wall 4).

Evidence: documented 0, mapped 136, inferred 0, derived 0; heights documented 1, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101439894 historic=castle Q1173000 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.79232/13.04369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|villa; sitelinks=2; wikidata:Q1173000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 136 elements); data/traces/daunschlossl-q1173000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
