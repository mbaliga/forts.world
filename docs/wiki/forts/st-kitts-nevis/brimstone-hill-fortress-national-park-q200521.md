# Brimstone Hill Fortress National Park

> St. Kitts & Nevis · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brimstone-hill-fortress-national-park-q200521` |
| Coordinates | 17.34744, -62.83575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.34744/-62.83575)) |
| Wikidata | [Q200521](https://www.wikidata.org/wiki/Q200521) (CC0) |
| Wikidata class | fortification |
| Types | hill\|national park |
| Administrative area | Saint Thomas Middle Island Parish |
| Inception | 1987 |
| Designations | World Heritage Site |
| UNESCO WHC id | 910 |
| Wikipedia language editions | 36 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, road 15, coastline 1, zone 2, building 79, wall 2, water 1).

Evidence: documented 0, mapped 101, inferred 0, derived 1; heights documented 0, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/683564478 historic=fort Q5470917 1168 m from ledger point
- origin moved 1164 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":274,"medianInside":3.4,"medianOutside":20.5}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.34744/-62.83575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; hill\|national park; sitelinks=36; wikidata:Q200521 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/brimstone-hill-fortress-national-park-q200521.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/st-kitts-nevis.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
