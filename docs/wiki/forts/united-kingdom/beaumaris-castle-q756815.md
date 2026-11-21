# Beaumaris Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beaumaris-castle-q756815` |
| Coordinates | 53.26491, -4.08957 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.26491/-4.08957)) |
| Wikidata | [Q756815](https://www.wikidata.org/wiki/Q756815) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Beaumaris |
| Inception | 1295 |
| Designations | part of UNESCO World Heritage Site\|Grade I listed building\|National Monument of Wales\|scheduled monument |
| UNESCO WHC id | 374-001 |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 3, road 85, zone 9, building 140, water 2, wall 10, coastline 1).

Evidence: documented 0, mapped 251, inferred 0, derived 1; heights documented 34, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1720376 historic=castle 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":19,"medianInside":2.3,"medianOutside":7.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.26491/-4.08957) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=37; wikidata:Q756815 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/beaumaris-castle-q756815.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
