# Castillo de Hervás

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-hervas-q27044077` |
| Coordinates | 40.27399, -5.8597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.27399/-5.8597)) |
| Wikidata | [Q27044077](https://www.wikidata.org/wiki/Q27044077) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Extremadura |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | motte |
| OSM `heritage` | yes |
| OSM `description` | Castillo medieval transformado en la iglesia de Santa María de Aguas Vivas |
| OSM `ruins` | yes |
| OSM `website` | https://www.xn--castillosdeespaa-lub.es/es/content/san-gervasio-castillo-de |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, road 122, zone 1, building 403, waterway 3, wall 1).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1430393354 historic=castle 118 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 403 mapped (trace size budget); the rest of the town is not drawn
- origin moved 117 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.27399/-5.8597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q27044077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/castillo-de-hervas-q27044077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
