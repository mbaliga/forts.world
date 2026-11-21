# Kurtine zwischen den Bastionen Ferdinand und Cassius

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kurtine-zwischen-den-bastionen-ferdinand-und-cas-q99669087` |
| Coordinates | 50.7324, 7.10027 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7324/7.10027)) |
| Wikidata | [Q99669087](https://www.wikidata.org/wiki/Q99669087) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Stadtbezirk Bonn |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 58, road 805, building 970, wall 57, zone 128, water 7, retaining-wall 21).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 21, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2881966 historic=castle Q1793056 306 m from ledger point
- pruned to the outline plus 150 m: 2047 -> 1095 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 379 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 540 mapped (trace size budget); minor lanes are not drawn
- origin moved 321 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7324/7.10027) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=1; wikidata:Q99669087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/kurtine-zwischen-den-bastionen-ferdinand-und-cas-q99669087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
