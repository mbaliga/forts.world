# Bürgergehorsam

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgergehorsam-q1021095` |
| Coordinates | 52.2795, 8.03962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2795/8.03962)) |
| Wikidata | [Q1021095](https://www.wikidata.org/wiki/Q1021095) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Osnabrück |
| Inception | 1510 |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 3, road 193, building 167, retaining-wall 11, zone 8, water 3, wall 20).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 4, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183028249 historic=building Q1021095 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 167 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2795/8.03962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q1021095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/burgergehorsam-q1021095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
