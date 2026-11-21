# Fort Julien

> Egypt · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-julien-q3077898` |
| Coordinates | 31.43972, 30.38944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.43972/30.38944)) |
| Wikidata | [Q3077898](https://www.wikidata.org/wiki/Q3077898) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rosetta |
| Inception | 1470 |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, road 10, waterway 2, wall 2, building 5).

Evidence: documented 0, mapped 21, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/301170249 historic=castle Q3077898 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 176 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.43972/30.38944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=17; wikidata:Q3077898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/fort-julien-q3077898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
