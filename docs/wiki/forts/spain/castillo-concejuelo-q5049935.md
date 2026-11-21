# Castillo Concejuelo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-concejuelo-q5049935` |
| Coordinates | 43.25299, -3.13092 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.25299/-3.13092)) |
| Wikidata | [Q5049935](https://www.wikidata.org/wiki/Q5049935) (CC0) |
| Wikidata class | castle |
| Types | castle\|automobile museum |
| Administrative area | Galdames |
| Inception | 1978 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://torreloizaga.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 17, building 22, wall 14, zone 10).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 1, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/471511190 historic=castle Q5049935 210 m from ledger point
- origin moved 210 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.25299/-3.13092) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|automobile museum; sitelinks=3; wikidata:Q5049935 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/castillo-concejuelo-q5049935.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
