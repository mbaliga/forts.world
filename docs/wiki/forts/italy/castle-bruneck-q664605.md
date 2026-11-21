# Castle Bruneck

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-bruneck-q664605` |
| Coordinates | 46.7944, 11.93941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.7944/11.93941)) |
| Wikidata | [Q664605](https://www.wikidata.org/wiki/Q664605) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bruneck |
| Inception | 1276 |
| Designations | Italian national heritage\|cultural heritage monument in South Tyrol |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 3, road 116, zone 5, building 144, water 1, wall 3, waterway 2).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 8, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112513247 historic=castle Q664605 21 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.7944/11.93941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q664605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/castle-bruneck-q664605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
