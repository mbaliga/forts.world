# Niepołomice Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `niepo-omice-castle-q9386532` |
| Coordinates | 50.03428, 20.21783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.03428/20.21783)) |
| Wikidata | [Q9386532](https://www.wikidata.org/wiki/Q9386532) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|built structure |
| Administrative area | Niepołomice |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.zamekkrolewski.com.pl/new/ |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 13, road 269, building 114, wall 4, zone 39, water 2, waterway 4).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 78, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2119457 historic=castle Q9386532 5 m from ledger point
- roads capped: kept the 150 longest of 269 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.03428/20.21783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|built structure; sitelinks=10; wikidata:Q9386532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/niepo-omice-castle-q9386532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
