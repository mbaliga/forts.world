# Dierkosttoren

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dierkosttoren-q112115982` |
| Coordinates | 50.77072, 3.88396 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77072/3.88396)) |
| Wikidata | [Q112115982](https://www.wikidata.org/wiki/Q112115982) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Geraardsbergen |
| Inception | 1686 |
| Designations | vastgesteld bouwkundig erfgoed |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, road 119, water 2, waterway 7, zone 9, building 456, retaining-wall 1, wall 4).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 2, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/683915763 historic=monument 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77072/3.88396) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=2; wikidata:Q112115982 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/dierkosttoren-q112115982.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
