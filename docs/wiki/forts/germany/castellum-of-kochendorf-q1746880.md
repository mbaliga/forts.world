# Castellum of Kochendorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellum-of-kochendorf-q1746880` |
| Coordinates | 49.2257, 9.22535 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2257/9.22535)) |
| Wikidata | [Q1746880](https://www.wikidata.org/wiki/Q1746880) (CC0) |
| Wikidata class | fortification |
| Types | castellum |
| Administrative area | Bad Friedrichshall |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, road 120, waterway 5, building 276, zone 10, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 24, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46898545 historic=castle Q1544499 526 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- origin moved 525 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2257/9.22535) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castellum; sitelinks=1; wikidata:Q1746880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/castellum-of-kochendorf-q1746880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
