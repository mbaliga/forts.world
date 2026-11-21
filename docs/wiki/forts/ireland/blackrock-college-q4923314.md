# Blackrock College

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blackrock-college-q4923314` |
| Coordinates | 53.30472, -6.19167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.30472/-6.19167)) |
| Wikidata | [Q4923314](https://www.wikidata.org/wiki/Q4923314) (CC0) |
| Wikidata class | castle |
| Types | castle\|secondary school\|nonprofit organization\|boarding school\|Catholic school\|day school |
| Administrative area | Dún Laoghaire–Rathdown |
| Inception | 1860 |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, road 203, zone 41, waterway 4, building 734, wall 140, coastline 2, water 1).

Evidence: documented 0, mapped 325, inferred 0, derived 1; heights documented 8, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7317345 historic=yes 367 m from ledger point
- pruned to the outline plus 150 m: 1126 -> 1122 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 734 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 203 mapped (trace size budget); minor lanes are not drawn
- origin moved 374 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":5,"medianOutside":20.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.30472/-6.19167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|secondary school\|nonprofit organization\|boarding school\|Catholic school\|day school; sitelinks=6; wikidata:Q4923314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/blackrock-college-q4923314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
