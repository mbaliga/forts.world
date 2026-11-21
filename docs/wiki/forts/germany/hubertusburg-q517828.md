# Hubertusburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hubertusburg-q517828` |
| Coordinates | 51.27759, 12.93921 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.27759/12.93921)) |
| Wikidata | [Q517828](https://www.wikidata.org/wiki/Q517828) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|hunting lodge\|cultural heritage ensemble |
| Administrative area | Wermsdorf |
| Inception | 1721 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 2, road 91, zone 9, building 150, waterway 1, wall 12).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 10, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10603838 historic=castle Q517828 7 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.27759/12.93921) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|hunting lodge\|cultural heritage ensemble; sitelinks=12; wikidata:Q517828 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/hubertusburg-q517828.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
