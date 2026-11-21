# Buyeo Naseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buyeo-naseong-q16092526` |
| Coordinates | 36.27778, 126.94 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.27778/126.94)) |
| Wikidata | [Q16092526](https://www.wikidata.org/wiki/Q16092526) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Buyeo County |
| Designations | part of UNESCO World Heritage Site\|Historic sites of South Korea |
| UNESCO WHC id | 1477-006 |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, road 28, building 17, zone 10, waterway 1, wall 1, water 1).

Evidence: documented 0, mapped 59, inferred 0, derived 0; heights documented 1, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1443028272 historic=ruins 97 m from ledger point
- origin moved 94 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.27778/126.94) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=5; wikidata:Q16092526 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/buyeo-naseong-q16092526.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
