# Aqaba Fortress

> Jordan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aqaba-fortress-q4782454` |
| Coordinates | 29.52147, 35.00205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.52147/35.00205)) |
| Wikidata | [Q4782454](https://www.wikidata.org/wiki/Q4782454) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aqaba |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, marker 1, road 54, coastline 1, building 35, wall 1, water 3, zone 2, waterway 1).

Evidence: documented 0, mapped 100, inferred 0, derived 2; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106995824 historic=castle Q4782454 16 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":29,"medianInside":3.5,"medianOutside":14}
- sea-1: DEM check ok {"cells":28,"medianInside":4.1,"medianOutside":13.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.52147/35.00205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q4782454 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 100 elements); data/traces/aqaba-fortress-q4782454.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jordan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
