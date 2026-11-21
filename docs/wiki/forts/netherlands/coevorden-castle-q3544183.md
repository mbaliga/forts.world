# Coevorden Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coevorden-castle-q3544183` |
| Coordinates | 52.66257, 6.74145 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.66257/6.74145)) |
| Wikidata | [Q3544183](https://www.wikidata.org/wiki/Q3544183) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Coevorden |
| Inception | 1024 |
| Designations | Rijksmonument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.kasteleninnederland.nl/kasteeldetails.php?id=14 |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 30, road 131, zone 19, water 1, building 439, waterway 1, wall 2).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275925199 historic=castle Q3544183 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 439 mapped (trace size budget); the rest of the town is not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.66257/6.74145) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=6; wikidata:Q3544183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/coevorden-castle-q3544183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
