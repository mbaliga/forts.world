# Castillo de Bayas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-bayas-q5757135` |
| Coordinates | 42.6825, -2.95361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.6825/-2.95361)) |
| Wikidata | [Q5757135](https://www.wikidata.org/wiki/Q5757135) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Miranda de Ebro |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 4, road 195, building 342, wall 64, waterway 4, retaining-wall 21).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 8, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/318915068 historic=ruins Q5910394 231 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 342 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 232 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.6825/-2.95361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q5757135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/castillo-de-bayas-q5757135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
