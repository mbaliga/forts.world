# Cottonera Lines

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cottonera-lines-q2621907` |
| Coordinates | 35.87694, 14.52194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.87694/14.52194)) |
| Wikidata | [Q2621907](https://www.wikidata.org/wiki/Q2621907) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cospicua |
| Inception | 1670 |
| Designations | Grade 1 |
| Wikipedia language editions | 11 |
| OSM `historic` | citywalls |
| OSM `description` | Map of the Santa Margherita and Cottonera Lines, Malta, before the western part of the lines was demolished in the 19th century to make way for extensions to the dockyard. |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 3, road 284, wall 211, building 604, zone 19, water 3, retaining-wall 9, coastline 1).

Evidence: documented 0, mapped 317, inferred 0, derived 1; heights documented 23, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9613911 historic=citywalls 696 m from ledger point
- pruned to the outline plus 60 m: 1135 -> 1133 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 604 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 676 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":4,"medianInside":9.1,"medianOutside":42.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.87694/14.52194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=11; wikidata:Q2621907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/cottonera-lines-q2621907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
