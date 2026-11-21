# Oldenburger Wall

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oldenburger-wall-q2018676` |
| Coordinates | 54.294, 10.885 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.294/10.885)) |
| Wikidata | [Q2018676](https://www.wikidata.org/wiki/Q2018676) (CC0) |
| Wikidata class | fortification |
| Types | gord\|former town |
| Administrative area | Oldenburg in Holstein |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 6, road 234, building 365, waterway 16, wall 2, water 5, retaining-wall 4, zone 7).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 11, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26815811 historic=archaeological_site 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.294/10.885) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gord\|former town; sitelinks=4; wikidata:Q2018676 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/oldenburger-wall-q2018676.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
