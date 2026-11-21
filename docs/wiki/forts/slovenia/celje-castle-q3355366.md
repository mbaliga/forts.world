# Celje Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `celje-castle-q3355366` |
| Coordinates | 46.21972, 15.27167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.21972/15.27167)) |
| Wikidata | [Q3355366](https://www.wikidata.org/wiki/Q3355366) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | City Municipality of Celje |
| Inception | 1322 |
| Designations | monument of local significance |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.visitcelje.eu/product-category/old-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 77 elements (outline 1, marker 1, waterway 1, road 25, building 11, zone 36, wall 1).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192774121 historic=castle Q3355366 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.21972/15.27167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q3355366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 77 elements); data/traces/celje-castle-q3355366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
