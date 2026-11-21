# Foso Real, Ceuta

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `foso-real-ceuta-q53495051` |
| Coordinates | 35.88883, -5.31851 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88883/-5.31851)) |
| Wikidata | [Q53495051](https://www.wikidata.org/wiki/Q53495051) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Ceuta |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 10, road 148, coastline 4, building 99, wall 15, zone 35, water 3).

Evidence: documented 0, mapped 315, inferred 0, derived 3; heights documented 0, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/819502647 historic=castle 26 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":417,"medianInside":3.6,"medianOutside":8}
- sea-1: DEM check ok {"cells":19,"medianInside":1,"medianOutside":6.2}
- sea-2: DEM check ok {"cells":523,"medianInside":5.8,"medianOutside":6.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88883/-5.31851) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=1; wikidata:Q53495051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/foso-real-ceuta-q53495051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
