# Giessen Old Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `giessen-old-castle-q439545` |
| Coordinates | 50.587, 8.6769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.587/8.6769)) |
| Wikidata | [Q439545](https://www.wikidata.org/wiki/Q439545) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Giessen |
| Inception | 1152 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 228, building 290, water 2, wall 11, retaining-wall 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 31, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26556724 historic=castle Q439545 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 290 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.587/8.6769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q439545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/giessen-old-castle-q439545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
