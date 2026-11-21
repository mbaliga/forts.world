# Tangermünde castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tangermunde-castle-q1014203` |
| Coordinates | 52.5428, 11.9775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5428/11.9775)) |
| Wikidata | [Q1014203](https://www.wikidata.org/wiki/Q1014203) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tangermünde |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 7, waterway 2, road 200, building 281, zone 15, wall 29, water 1, retaining-wall 11).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 28, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1286845968 historic=castle Q1014203 41 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5428/11.9775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014203 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/tangermunde-castle-q1014203.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
