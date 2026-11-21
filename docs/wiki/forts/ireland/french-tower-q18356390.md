# French Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `french-tower-q18356390` |
| Coordinates | 52.2573, -7.11431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2573/-7.11431)) |
| Wikidata | [Q18356390](https://www.wikidata.org/wiki/Q18356390) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|building |
| Administrative area | Waterford |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 2, road 123, building 617, zone 8, wall 8).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 1, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/777580117 historic=castle Q18356390 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 617 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2573/-7.11431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|building; sitelinks=1; wikidata:Q18356390 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/french-tower-q18356390.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
