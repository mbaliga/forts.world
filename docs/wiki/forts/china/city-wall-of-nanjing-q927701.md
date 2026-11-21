# City Wall of Nanjing

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-of-nanjing-q927701` |
| Coordinates | 32.01504, 118.77669 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.01504/118.77669)) |
| Wikidata | [Q927701](https://www.wikidata.org/wiki/Q927701) (CC0) |
| Wikidata class | fortification |
| Types | Chinese city wall |
| Administrative area | Nanjing |
| Inception | 1368 |
| Designations | Major Historical and Cultural Site Protected at the National Level |
| Wikipedia language editions | 14 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, road 27, water 4, waterway 2, building 128, zone 3).

Evidence: documented 0, mapped 166, inferred 0, derived 0; heights documented 1, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20427375 historic=citywalls 974 m from ledger point
- origin moved 980 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.01504/118.77669) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Chinese city wall; sitelinks=14; wikidata:Q927701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/city-wall-of-nanjing-q927701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
