# Conwy Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `conwy-castle-q756830` |
| Coordinates | 53.28015, -3.82563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.28015/-3.82563)) |
| Wikidata | [Q756830](https://www.wikidata.org/wiki/Q756830) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Conwy County Borough |
| Inception | 1283 |
| Designations | Grade I listed building\|National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 40 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |
| OSM `website` | https://cadw.gov.wales/visit/places-to-visit/castell-conwy |

## What the model contains

Tier **T1**, status `outline+walls`, 399 elements (outline 1, marker 9, coastline 3, road 165, building 116, zone 16, wall 86, waterway 3, retaining-wall 10, water 5).

Evidence: documented 0, mapped 399, inferred 0, derived 2; heights documented 134, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52467063 historic=castle Q756830 12 m from ledger point
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":773,"medianInside":11.5,"medianOutside":12}
- sea-1: DEM check failed {"cells":1800,"medianInside":11.7,"medianOutside":23}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 144 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.28015/-3.82563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=40; wikidata:Q756830 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 399 elements); data/traces/conwy-castle-q756830.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
