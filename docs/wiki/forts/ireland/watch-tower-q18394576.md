# Watch Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `watch-tower-q18394576` |
| Coordinates | 52.25646, -7.11192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.25646/-7.11192)) |
| Wikidata | [Q18394576](https://www.wikidata.org/wiki/Q18394576) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|building |
| Administrative area | Waterford |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 4, road 142, waterway 2, building 460, zone 8, wall 15).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 6, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/675001739 historic=castle Q18394576 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 460 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.25646/-7.11192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|building; sitelinks=1; wikidata:Q18394576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/watch-tower-q18394576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
