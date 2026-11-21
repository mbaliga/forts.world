# Castellare degli Ugurgieri

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellare-degli-ugurgieri-q3662246` |
| Coordinates | 43.31982, 11.33269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31982/11.33269)) |
| Wikidata | [Q3662246](https://www.wikidata.org/wiki/Q3662246) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Siena |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 3, road 250, building 210, wall 23, retaining-wall 24, water 1, waterway 1, zone 3).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 15, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/742479614 historic=castle Q3889846 96 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 210 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 97 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31982/11.33269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/castellare-degli-ugurgieri-q3662246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
