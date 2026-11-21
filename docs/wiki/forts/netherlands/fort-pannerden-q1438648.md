# Fort Pannerden

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pannerden-q1438648` |
| Coordinates | 51.88092, 6.02661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.88092/6.02661)) |
| Wikidata | [Q1438648](https://www.wikidata.org/wiki/Q1438648) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Lingewaard |
| Inception | 1871 |
| Designations | part of UNESCO World Heritage Site\|Rijksmonument complex |
| UNESCO WHC id | 759bis-009 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `website` | https://fortpannerden.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, waterway 2, water 1, road 32, building 7, wall 4, zone 3, retaining-wall 1).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7917976 historic=fort Q1438648 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.88092/6.02661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=6; wikidata:Q1438648 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-pannerden-q1438648.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
