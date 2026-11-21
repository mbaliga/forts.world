# Ljubljana Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ljubljana-castle-q2075156` |
| Coordinates | 46.04871, 14.50863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.04871/14.50863)) |
| Wikidata | [Q2075156](https://www.wikidata.org/wiki/Q2075156) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ljubljana City Municipality |
| Inception | 0900 |
| Designations | monument of local significance |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `website` | https://www.ljubljanskigrad.si/ |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 7, road 234, waterway 1, zone 10, building 183, wall 25, retaining-wall 29).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 86, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/5821190 historic=castle Q2075156 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.04871/14.50863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=32; wikidata:Q2075156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/ljubljana-castle-q2075156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
