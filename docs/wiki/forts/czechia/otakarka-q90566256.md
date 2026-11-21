# Otakarka

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `otakarka-q90566256` |
| Coordinates | 48.9736, 14.4722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9736/14.4722)) |
| Wikidata | [Q90566256](https://www.wikidata.org/wiki/Q90566256) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | České Budějovice |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 10, waterway 4, road 300, water 4, building 161, wall 26, zone 28, retaining-wall 1).

Evidence: documented 0, mapped 344, inferred 0, derived 0; heights documented 71, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49444270 historic=yes Q102443244 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 300 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9736/14.4722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q90566256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/otakarka-q90566256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
