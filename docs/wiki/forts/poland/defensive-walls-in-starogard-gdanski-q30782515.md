# Defensive walls in Starogard Gdański

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-starogard-gdanski-q30782515` |
| Coordinates | 53.96733, 18.53216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.96733/18.53216)) |
| Wikidata | [Q30782515](https://www.wikidata.org/wiki/Q30782515) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Starogard Gdański |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 3, road 211, waterway 11, building 147, zone 22, wall 3, water 8, retaining-wall 5).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312216226 historic=castle Q16586974 277 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 147 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 277 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.96733/18.53216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30782515 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/defensive-walls-in-starogard-gdanski-q30782515.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
