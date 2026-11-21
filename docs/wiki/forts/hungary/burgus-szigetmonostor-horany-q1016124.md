# Burgus Szigetmonostor-Horány

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgus-szigetmonostor-horany-q1016124` |
| Coordinates | 47.65848, 19.11246 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.65848/19.11246)) |
| Wikidata | [Q1016124](https://www.wikidata.org/wiki/Q1016124) (CC0) |
| Wikidata class | fortification |
| Types | burgus |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, marker 1, waterway 1, road 6, building 2, wall 3, zone 1).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 4, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/292697761 historic=castle Q471153 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.65848/19.11246) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; burgus; sitelinks=2; wikidata:Q1016124 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/burgus-szigetmonostor-horany-q1016124.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
