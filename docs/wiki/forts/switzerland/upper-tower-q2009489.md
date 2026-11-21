# Upper Tower

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upper-tower-q2009489` |
| Coordinates | 47.39192, 8.04445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.39192/8.04445)) |
| Wikidata | [Q2009489](https://www.wikidata.org/wiki/Q2009489) (CC0) |
| Wikidata class | fortification |
| Types | tower\|gate tower |
| Administrative area | Aarau |
| Inception | 1270 |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 3, road 239, waterway 25, building 280, zone 4, wall 7, retaining-wall 1).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 94, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/480308009 historic=ruins 136 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 280 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 239 mapped (trace size budget); minor lanes are not drawn
- origin moved 136 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.39192/8.04445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|gate tower; sitelinks=2; wikidata:Q2009489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/upper-tower-q2009489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
