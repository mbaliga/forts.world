# Foso del Hornabeque, Melilla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `foso-del-hornabeque-melilla-q33035183` |
| Coordinates | 35.29412, -2.93584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29412/-2.93584)) |
| Wikidata | [Q33035183](https://www.wikidata.org/wiki/Q33035183) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Melilla |
| Designations | Historic Ensemble\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 5, road 146, building 63, coastline 2, wall 10, retaining-wall 6, cliff 2, zone 5, water 3).

Evidence: documented 0, mapped 243, inferred 0, derived 2; heights documented 7, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/579982422 historic=castle 21 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":0.8,"medianOutside":8.8}
- sea-1: DEM check ok {"cells":20,"medianInside":5.6,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29412/-2.93584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=3; wikidata:Q33035183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/foso-del-hornabeque-melilla-q33035183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
