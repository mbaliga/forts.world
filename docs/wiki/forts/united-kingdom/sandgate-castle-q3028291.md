# Sandgate Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sandgate-castle-q3028291` |
| Coordinates | 51.07344, 1.14889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.07344/1.14889)) |
| Wikidata | [Q3028291](https://www.wikidata.org/wiki/Q3028291) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Sandgate |
| Inception | 1539 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 1, coastline 1, road 100, zone 3, waterway 6, wall 12, building 174, retaining-wall 2, water 1).

Evidence: documented 0, mapped 301, inferred 0, derived 1; heights documented 0, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1319921308 historic=castle 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":638,"medianInside":-1.4,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.07344/1.14889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=7; wikidata:Q3028291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/sandgate-castle-q3028291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
