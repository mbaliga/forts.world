# Queen Darejan's palace

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `queen-darejan-s-palace-q65289514` |
| Coordinates | 41.69159, 44.81235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.69159/44.81235)) |
| Wikidata | [Q65289514](https://www.wikidata.org/wiki/Q65289514) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Tbilisi |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 5, road 295, building 254, water 1, cliff 2, retaining-wall 13, wall 9, waterway 6, zone 16).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 82, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123574122 historic=castle Q65289514 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 254 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 295 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.69159/44.81235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=5; wikidata:Q65289514 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/queen-darejan-s-palace-q65289514.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
