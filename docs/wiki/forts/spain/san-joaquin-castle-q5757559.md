# San Joaquin Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-joaquin-castle-q5757559` |
| Coordinates | 28.46583, -16.28167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.46583/-16.28167)) |
| Wikidata | [Q5757559](https://www.wikidata.org/wiki/Q5757559) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Santa Cruz de Tenerife |
| Inception | 1586 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, road 82, building 116, waterway 1, wall 12).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 4, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1741348 historic=castle Q5757559 19 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.46583/-16.28167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q5757559 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/san-joaquin-castle-q5757559.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
