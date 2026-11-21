# Defensive walls in Maszewo

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-maszewo-q33248395` |
| Coordinates | 53.49417, 15.06383 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.49417/15.06383)) |
| Wikidata | [Q33248395](https://www.wikidata.org/wiki/Q33248395) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Maszewo |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 167 elements (outline 1, road 39, water 1, zone 2, building 375, wall 4).

Evidence: documented 0, mapped 167, inferred 0, derived 0; heights documented 5, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/431189387 historic=yes 397 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- origin moved 396 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.49417/15.06383) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q33248395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 167 elements); data/traces/defensive-walls-in-maszewo-q33248395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
