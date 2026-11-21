# Fort Vastenburg

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vastenburg-q34158` |
| Coordinates | -7.57208, 110.83126 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.57208/110.83126)) |
| Wikidata | [Q34158](https://www.wikidata.org/wiki/Q34158) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Surakarta |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | Castle |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, road 70, waterway 1, wall 6, building 146).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/486753513 historic=castle 637 m from ledger point
- origin moved 636 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.57208/110.83126) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q34158 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/fort-vastenburg-q34158.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
