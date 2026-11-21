# Druselturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `druselturm-q1261414` |
| Coordinates | 51.3164, 9.49944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3164/9.49944)) |
| Wikidata | [Q1261414](https://www.wikidata.org/wiki/Q1261414) (CC0) |
| Wikidata class | fort |
| Types | tower\|fortified tower |
| Administrative area | Kassel |
| Inception | 1415 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, road 221, building 182, zone 16, wall 2).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 45, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100607968 historic=yes Q1261414 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 182 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 221 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3164/9.49944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|fortified tower; sitelinks=2; wikidata:Q1261414 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/druselturm-q1261414.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
