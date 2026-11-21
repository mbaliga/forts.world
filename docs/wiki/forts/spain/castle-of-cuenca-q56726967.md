# Castle of Cuenca

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-cuenca-q56726967` |
| Coordinates | 40.08159, -2.12663 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.08159/-2.12663)) |
| Wikidata | [Q56726967](https://www.wikidata.org/wiki/Q56726967) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cuenca |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, marker 3, waterway 2, road 103, zone 17, building 63, wall 3, water 3, cliff 1).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103830815 historic=monastery 108 m from ledger point
- origin moved 106 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.08159/-2.12663) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q56726967 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/castle-of-cuenca-q56726967.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
