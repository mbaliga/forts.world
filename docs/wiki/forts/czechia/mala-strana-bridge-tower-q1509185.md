# Malá Strana Bridge Tower

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mala-strana-bridge-tower-q1509185` |
| Coordinates | 50.08731, 14.40686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08731/14.40686)) |
| Wikidata | [Q1509185](https://www.wikidata.org/wiki/Q1509185) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate |
| Administrative area | Prague 1 |
| Designations | part of national cultural heritage site in the Czech Republic |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 39, road 318, building 145, waterway 3, zone 8, wall 28, water 2, retaining-wall 3).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 99, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/60019 historic=castle Q12031195 104 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 145 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 318 mapped (trace size budget); minor lanes are not drawn
- origin moved 104 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08731/14.40686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate; sitelinks=11; wikidata:Q1509185 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/mala-strana-bridge-tower-q1509185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
