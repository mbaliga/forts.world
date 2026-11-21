# Fort York

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-york-q204083` |
| Coordinates | 43.63889, -79.40361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.63889/-79.40361)) |
| Wikidata | [Q204083](https://www.wikidata.org/wiki/Q204083) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | Toronto |
| Inception | 1793 |
| Designations | heritage conservation district\|national historic site of Canada |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 8, road 343, building 91, retaining-wall 5, wall 14, zone 10).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 56, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1416813033 historic=fort 29 m from ledger point
- roads capped: kept the 150 longest of 343 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.63889/-79.40361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=8; wikidata:Q204083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/fort-york-q204083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
