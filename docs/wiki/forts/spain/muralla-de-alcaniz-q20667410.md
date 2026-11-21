# Muralla de Alcañiz

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-alcaniz-q20667410` |
| Coordinates | 41.05135, -0.1359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.05135/-0.1359)) |
| Wikidata | [Q20667410](https://www.wikidata.org/wiki/Q20667410) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Alcañiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 218 elements (outline 1, road 84, waterway 1, retaining-wall 3, wall 7, building 382, zone 2).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 63, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3117417 historic=castle Q8342648 422 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- origin moved 424 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.05135/-0.1359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=3; wikidata:Q20667410 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 218 elements); data/traces/muralla-de-alcaniz-q20667410.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
