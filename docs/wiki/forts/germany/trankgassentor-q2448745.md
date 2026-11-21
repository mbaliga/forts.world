# Trankgassentor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trankgassentor-q2448745` |
| Coordinates | 50.9421, 6.96261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9421/6.96261)) |
| Wikidata | [Q2448745](https://www.wikidata.org/wiki/Q2448745) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Altstadt-Nord |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `description` | römisches Untergeschoss des modernen Turms |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 27, road 249, building 161, zone 4, wall 11, water 3, retaining-wall 18, waterway 1).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 42, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1225523324 historic=citywalls 558 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 558 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9421/6.96261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q2448745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/trankgassentor-q2448745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
