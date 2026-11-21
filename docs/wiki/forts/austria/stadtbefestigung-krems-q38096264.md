# Stadtbefestigung Krems

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-krems-q38096264` |
| Coordinates | 48.40935, 15.59717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40935/15.59717)) |
| Wikidata | [Q38096264](https://www.wikidata.org/wiki/Q38096264) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Krems |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 4, road 328, building 398, waterway 1, wall 36, retaining-wall 14, water 2, zone 6).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 19, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280017384 historic=castle Q1540600 437 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 437 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40935/15.59717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=1; wikidata:Q38096264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/stadtbefestigung-krems-q38096264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
