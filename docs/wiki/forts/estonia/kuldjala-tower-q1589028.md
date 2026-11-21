# Kuldjala Tower

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuldjala-tower-q1589028` |
| Coordinates | 59.43996, 24.74248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.43996/24.74248)) |
| Wikidata | [Q1589028](https://www.wikidata.org/wiki/Q1589028) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tallinn |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 2, road 302, wall 52, water 2, building 193, zone 43, retaining-wall 9).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 73, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21628445 historic=citywalls 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 193 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 302 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.43996/24.74248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=9; wikidata:Q1589028 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/kuldjala-tower-q1589028.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
