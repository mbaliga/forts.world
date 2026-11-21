# St. Alban-Schwibbogen

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-alban-schwibbogen-q248661` |
| Coordinates | 47.5549, 7.59445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.5549/7.59445)) |
| Wikidata | [Q248661](https://www.wikidata.org/wiki/Q248661) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Canton of Basel-Stadt |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 13, road 247, building 158, wall 46, zone 3, water 5, waterway 1, retaining-wall 17, cliff 1).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 33, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/727341161 historic=archaeological_site 142 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 247 mapped (trace size budget); minor lanes are not drawn
- origin moved 141 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.5549/7.59445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q248661 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/st-alban-schwibbogen-q248661.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
