# Namdaemun

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `namdaemun-q465345` |
| Coordinates | 37.55997, 126.97531 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.55997/126.97531)) |
| Wikidata | [Q465345](https://www.wikidata.org/wiki/Q465345) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jung District |
| Inception | 2013 |
| Designations | National Treasures of South Korea |
| Wikipedia language editions | 39 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 5, road 193, building 270, wall 12, zone 41, water 1, retaining-wall 6).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 12, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26658458 historic=castle Q482631 654 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 270 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 655 m from the ledger point to the outline centroid
- 44 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.55997/126.97531) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=39; wikidata:Q465345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/namdaemun-q465345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
