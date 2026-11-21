# Defensive walls in Lwówek Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-lwowek-slaski-q30055190` |
| Coordinates | 51.10911, 15.58742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10911/15.58742)) |
| Wikidata | [Q30055190](https://www.wikidata.org/wiki/Q30055190) (CC0) |
| Wikidata class | fort |
| Types | defensive wall\|fortified tower |
| Administrative area | Lwówek Śląski |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 13, road 541, building 285, zone 98, water 4, wall 73, retaining-wall 4, waterway 3).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 49, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394422906 historic=citywalls 2 m from ledger point
- pruned to the outline plus 150 m: 1022 -> 590 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 185 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10911/15.58742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; defensive wall\|fortified tower; sitelinks=2; wikidata:Q30055190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/defensive-walls-in-lwowek-slaski-q30055190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
