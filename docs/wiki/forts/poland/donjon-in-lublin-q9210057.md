# Donjon in Lublin

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-in-lublin-q9210057` |
| Coordinates | 51.2503, 22.5724 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2503/22.5724)) |
| Wikidata | [Q9210057](https://www.wikidata.org/wiki/Q9210057) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Lublin |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 15, road 328, waterway 4, building 75, retaining-wall 4, zone 51, wall 16, cliff 9).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 46, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48500136 historic=castle Q2604117 18 m from ledger point
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2503/22.5724) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=1; wikidata:Q9210057 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/donjon-in-lublin-q9210057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
