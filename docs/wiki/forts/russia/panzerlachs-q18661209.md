# Panzerlachs

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `panzerlachs-q18661209` |
| Coordinates | 60.70786, 28.73785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.70786/28.73785)) |
| Wikidata | [Q18661209](https://www.wikidata.org/wiki/Q18661209) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural landmark |
| Administrative area | Vyborg |
| Inception | 1579 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 4, road 378, wall 55, building 98, cliff 27, zone 16, coastline 1, retaining-wall 18, water 1).

Evidence: documented 0, mapped 371, inferred 0, derived 1; heights documented 95, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2384833 historic=yes Q4080271 322 m from ledger point
- roads capped: kept the 150 longest of 378 mapped (trace size budget); minor lanes are not drawn
- origin moved 322 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":12,"medianInside":9.1,"medianOutside":21.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.70786/28.73785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural landmark; sitelinks=4; wikidata:Q18661209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/panzerlachs-q18661209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
