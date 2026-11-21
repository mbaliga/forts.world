# Kastell Oudenburg

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-oudenburg-q113715089` |
| Coordinates | 51.18431, 3.00444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.18431/3.00444)) |
| Wikidata | [Q113715089](https://www.wikidata.org/wiki/Q113715089) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Oudenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | https://id.erfgoed.net/erfgoedobjecten/45595 |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 7, road 72, zone 4, building 401, waterway 3, water 1, wall 1).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144560478 historic=castle 137 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 401 mapped (trace size budget); the rest of the town is not drawn
- origin moved 138 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.18431/3.00444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=1; wikidata:Q113715089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/kastell-oudenburg-q113715089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
