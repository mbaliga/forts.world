# Bucksturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bucksturm-q999915` |
| Coordinates | 52.2775, 8.0385 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2775/8.0385)) |
| Wikidata | [Q999915](https://www.wikidata.org/wiki/Q999915) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Osnabrück |
| Inception | 1300 |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 5 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 5, road 255, building 209, retaining-wall 11, wall 16, zone 15, water 3).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 6, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312330570 historic=building Q999915 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid
- 73 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2775/8.0385) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=5; wikidata:Q999915 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/bucksturm-q999915.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
