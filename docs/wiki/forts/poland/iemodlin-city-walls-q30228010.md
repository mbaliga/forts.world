# iemodlin City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `iemodlin-city-walls-q30228010` |
| Coordinates | 50.64111, 17.62061 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64111/17.62061)) |
| Wikidata | [Q30228010](https://www.wikidata.org/wiki/Q30228010) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Niemodlin |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 3, road 105, zone 5, water 4, building 102, waterway 6, wall 2).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 15, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3522699 historic=castle Q9386689 203 m from ledger point
- origin moved 203 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64111/17.62061) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30228010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/iemodlin-city-walls-q30228010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
