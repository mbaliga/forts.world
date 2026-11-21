# Hamamatsu Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hamamatsu-castle-q1152352` |
| Coordinates | 34.7118, 137.72496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.7118/137.72496)) |
| Wikidata | [Q1152352](https://www.wikidata.org/wiki/Q1152352) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Chūō Ward |
| Inception | 1532 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 9, waterway 1, road 174, building 269, zone 6, water 1, retaining-wall 22, wall 6).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 18, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/689644600 historic=castle Q1152352 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.7118/137.72496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=11; wikidata:Q1152352 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/hamamatsu-castle-q1152352.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
