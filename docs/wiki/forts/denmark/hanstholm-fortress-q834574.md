# Hanstholm Fortress

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hanstholm-fortress-q834574` |
| Coordinates | 57.12083, 8.61639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.12083/8.61639)) |
| Wikidata | [Q834574](https://www.wikidata.org/wiki/Q834574) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Thisted Municipality |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 316 elements (outline 1, marker 4, road 149, building 156, zone 3, coastline 2, water 1).

Evidence: documented 0, mapped 316, inferred 0, derived 1; heights documented 1, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/379676290 historic=castle 86 m from ledger point
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":3.8,"medianOutside":32.8}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.12083/8.61639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=4; wikidata:Q834574 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 316 elements); data/traces/hanstholm-fortress-q834574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
