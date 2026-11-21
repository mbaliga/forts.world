# la Talaia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-talaia-q17590629` |
| Coordinates | 41.36021, 2.09763 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.36021/2.09763)) |
| Wikidata | [Q17590629](https://www.wikidata.org/wiki/Q17590629) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|defensive tower |
| Administrative area | L'Hospitalet de Llobregat |
| Inception | 1587 |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 1, road 280, building 448, zone 8, wall 15).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 6, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/715101214 historic=castle Q17590629 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 448 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 280 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.36021/2.09763) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|defensive tower; sitelinks=2; wikidata:Q17590629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/la-talaia-q17590629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
