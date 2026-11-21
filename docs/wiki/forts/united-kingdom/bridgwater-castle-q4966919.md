# Bridgwater Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bridgwater-castle-q4966919` |
| Coordinates | 51.1295, -3.00411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1295/-3.00411)) |
| Wikidata | [Q4966919](https://www.wikidata.org/wiki/Q4966919) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bridgwater |
| Inception | 1202 |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 1, road 120, water 4, building 176, zone 45, wall 126, waterway 5).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153097864 historic=ruins 226 m from ledger point
- pruned to the outline plus 150 m: 478 -> 283 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 100 mapped (trace size budget); the rest of the town is not drawn
- origin moved 227 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1295/-3.00411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q4966919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/bridgwater-castle-q4966919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
