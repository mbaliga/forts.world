# Burgbefestigung , mittelalterlich

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgbefestigung-mittelalterlich-q41278564` |
| Coordinates | 48.15711, 12.82978 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.15711/12.82978)) |
| Wikidata | [Q41278564](https://www.wikidata.org/wiki/Q41278564) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Burghausen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, road 267, building 385, waterway 5, zone 48, wall 52, retaining-wall 9, water 1).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 55, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68741063 historic=castle Q258217 266 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 385 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 267 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.15711/12.82978) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q41278564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/burgbefestigung-mittelalterlich-q41278564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
