# Kleinkastell Salzberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kleinkastell-salzberg-q32065946` |
| Coordinates | 49.4311, 9.43047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4311/9.43047)) |
| Wikidata | [Q32065946](https://www.wikidata.org/wiki/Q32065946) (CC0) |
| Wikidata class | fortification |
| Types | castellum |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |
| OSM `description` | Grundriss ist NICHT rekonstruiert, sondern nur mit Beton im 19 Jh. überkront, um weiteren Steinraub zu verhindern. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 377 elements (outline 1, marker 1, road 156, building 161, waterway 3, zone 72, water 1, retaining-wall 7, wall 22).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 61, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92022433 historic=castle Q1243550 617 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 156 mapped (trace size budget); minor lanes are not drawn
- origin moved 615 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4311/9.43047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castellum; sitelinks=1; wikidata:Q32065946 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 377 elements); data/traces/kleinkastell-salzberg-q32065946.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
