# Muralla de Jaca

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-jaca-q107128126` |
| Coordinates | 42.56808, -0.54719 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.56808/-0.54719)) |
| Wikidata | [Q107128126](https://www.wikidata.org/wiki/Q107128126) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Jaca |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 2, road 133, wall 17, building 288, zone 12, retaining-wall 2).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 120, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/403630599 historic=castle 336 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 288 mapped (trace size budget); the rest of the town is not drawn
- origin moved 335 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.56808/-0.54719) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q107128126 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/muralla-de-jaca-q107128126.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
