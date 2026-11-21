# Wasserburg Rückingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserburg-ruckingen-q2550886` |
| Coordinates | 50.1549, 8.99419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1549/8.99419)) |
| Wikidata | [Q2550886](https://www.wikidata.org/wiki/Q2550886) (CC0) |
| Wikidata class | castle |
| Types | built structure\|water castle |
| Administrative area | Erlensee |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 1, road 45, waterway 4, building 389, wall 1, water 2, zone 4).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247045758 historic=castle Q2550886 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1549/8.99419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; built structure\|water castle; sitelinks=2; wikidata:Q2550886 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/wasserburg-ruckingen-q2550886.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
