# Palazzo Borromeo d'Adda

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-borromeo-d-adda-q3889706` |
| Coordinates | 45.47146, 9.19378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.47146/9.19378)) |
| Wikidata | [Q3889706](https://www.wikidata.org/wiki/Q3889706) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|Palazzo |
| Administrative area | Milan |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 3, road 377, building 119, zone 3, wall 9).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 51, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6416227 historic=castle Q3889706 11 m from ledger point
- roads capped: kept the 150 longest of 377 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.47146/9.19378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|Palazzo; sitelinks=3; wikidata:Q3889706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/palazzo-borromeo-d-adda-q3889706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
