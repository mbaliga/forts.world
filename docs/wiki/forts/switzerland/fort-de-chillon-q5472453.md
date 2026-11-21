# Fort de Chillon

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-chillon-q5472453` |
| Coordinates | 46.41417, 6.92917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.41417/6.92917)) |
| Wikidata | [Q5472453](https://www.wikidata.org/wiki/Q5472453) (CC0) |
| Wikidata class | fort |
| Types | bunker\|fort |
| Administrative area | Canton of Vaud |
| Inception | 1942 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.chillon.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, marker 2, road 55, building 28, waterway 1, retaining-wall 8, zone 2, wall 3).

Evidence: documented 0, mapped 100, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6501627 historic=castle Q372647 119 m from ledger point
- origin moved 120 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.41417/6.92917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bunker\|fort; sitelinks=5; wikidata:Q5472453 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 100 elements); data/traces/fort-de-chillon-q5472453.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
