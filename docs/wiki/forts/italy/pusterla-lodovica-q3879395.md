# Pusterla Lodovica

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pusterla-lodovica-q3879395` |
| Coordinates | 45.45603, 9.18742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45603/9.18742)) |
| Wikidata | [Q3879395](https://www.wikidata.org/wiki/Q3879395) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Inception | 1496 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 2, road 224, building 103, zone 1, waterway 1, wall 22).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 69, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/400503 historic=castle Q24941535 375 m from ledger point
- origin moved 371 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45603/9.18742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3879395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/pusterla-lodovica-q3879395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
