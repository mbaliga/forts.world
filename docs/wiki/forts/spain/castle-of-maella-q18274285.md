# Castle of Maella

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-maella-q18274285` |
| Coordinates | 41.12194, 0.14167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.12194/0.14167)) |
| Wikidata | [Q18274285](https://www.wikidata.org/wiki/Q18274285) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Maella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, waterway 1, road 59, wall 89, building 602, retaining-wall 1).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 0, inferred 0, unknown 210.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/537200437 historic=castle Q18274285 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 602 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.12194/0.14167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q18274285 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/castle-of-maella-q18274285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
