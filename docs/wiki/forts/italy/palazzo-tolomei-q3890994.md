# Palazzo Tolomei

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-tolomei-q3890994` |
| Coordinates | 43.31995, 11.33103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31995/11.33103)) |
| Wikidata | [Q3890994](https://www.wikidata.org/wiki/Q3890994) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Siena |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 5, road 253, building 205, wall 23, retaining-wall 13, water 1, zone 2).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 14, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/278481943 historic=castle Q3890994 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 253 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31995/11.33103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=6; wikidata:Q3890994 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/palazzo-tolomei-q3890994.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
