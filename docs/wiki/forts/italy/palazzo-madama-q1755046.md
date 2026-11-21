# Palazzo Madama

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-madama-q1755046` |
| Coordinates | 41.89897, 12.4746 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.89897/12.4746)) |
| Wikidata | [Q1755046](https://www.wikidata.org/wiki/Q1755046) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Rome |
| Designations | Italian national heritage |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 7, road 226, building 174, water 4, wall 4, zone 1, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 17, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/76432 historic=castle Q1755046 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 174 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.89897/12.4746) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=20; wikidata:Q1755046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/palazzo-madama-q1755046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
