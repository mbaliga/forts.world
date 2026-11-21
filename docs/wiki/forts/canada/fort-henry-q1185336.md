# Fort Henry

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-henry-q1185336` |
| Coordinates | 44.23026, -76.45968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.23026/-76.45968)) |
| Wikidata | [Q1185336](https://www.wikidata.org/wiki/Q1185336) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | Kingston |
| Inception | 1812 |
| Designations | part of UNESCO World Heritage Site\|national historic site of Canada |
| UNESCO WHC id | 1221-002 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 33, wall 4, building 7, zone 2, retaining-wall 15, waterway 1).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 2, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/286910 historic=castle Q1185336 60 m from ledger point
- origin moved 64 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.23026/-76.45968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=7; wikidata:Q1185336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/fort-henry-q1185336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
