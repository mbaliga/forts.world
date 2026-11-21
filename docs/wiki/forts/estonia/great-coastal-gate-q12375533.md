# Great Coastal Gate

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `great-coastal-gate-q12375533` |
| Coordinates | 59.44243, 24.74921 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.44243/24.74921)) |
| Wikidata | [Q12375533](https://www.wikidata.org/wiki/Q12375533) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Tallinn |
| Wikipedia language editions | 4 |
| OSM `historic` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 6, road 237, zone 43, building 113, retaining-wall 5, wall 32).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 78, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21628451 historic=city_wall 35 m from ledger point
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.44243/24.74921) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q12375533 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/great-coastal-gate-q12375533.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
