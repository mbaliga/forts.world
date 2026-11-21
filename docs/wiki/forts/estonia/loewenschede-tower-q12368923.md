# Loewenschede Tower

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `loewenschede-tower-q12368923` |
| Coordinates | 59.44057, 24.74322 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.44057/24.74322)) |
| Wikidata | [Q12368923](https://www.wikidata.org/wiki/Q12368923) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 2, road 193, building 211, wall 55, zone 26, retaining-wall 6).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 79, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21628449 historic=citywalls 91 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 90 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.44057/24.74322) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=6; wikidata:Q12368923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/loewenschede-tower-q12368923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
