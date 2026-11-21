# Petrovaradin Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petrovaradin-fortress-q2586088` |
| Coordinates | 45.2525, 19.8625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.2525/19.8625)) |
| Wikidata | [Q2586088](https://www.wikidata.org/wiki/Q2586088) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Petrovaradin |
| Inception | 1780 |
| Designations | Spatial Cultural-Historical Unit of Great Importance |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 36, waterway 1, road 433, retaining-wall 121, building 176, wall 16, zone 69, cliff 5).

Evidence: documented 0, mapped 388, inferred 0, derived 0; heights documented 5, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152795360 historic=castle Q2586088 182 m from ledger point
- pruned to the outline plus 150 m: 858 -> 847 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 431 mapped (trace size budget); minor lanes are not drawn
- origin moved 189 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.2525/19.8625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=22; wikidata:Q2586088 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/petrovaradin-fortress-q2586088.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
