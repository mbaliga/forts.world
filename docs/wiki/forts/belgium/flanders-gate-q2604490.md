# Flanders Gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flanders-gate-q2604490` |
| Coordinates | 50.85306, 4.34167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85306/4.34167)) |
| Wikidata | [Q2604490](https://www.wikidata.org/wiki/Q2604490) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brussels |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, road 269, water 1, building 429, wall 15, zone 8, waterway 4, retaining-wall 2).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 8, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/891049983 historic=yes 98 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 429 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 269 mapped (trace size budget); minor lanes are not drawn
- origin moved 100 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85306/4.34167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q2604490 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/flanders-gate-q2604490.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
