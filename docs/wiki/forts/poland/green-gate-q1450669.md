# Green Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `green-gate-q1450669` |
| Coordinates | 54.34794, 18.65573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.34794/18.65573)) |
| Wikidata | [Q1450669](https://www.wikidata.org/wiki/Q1450669) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument\|water gate |
| Administrative area | Gdańsk |
| Inception | 1564 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 15 |
| OSM `historic` | fortification |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 4, road 341, building 138, zone 21, waterway 4, coastline 3, wall 7, retaining-wall 1, water 3).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 89, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96637644 historic=fortification Q557202 184 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 138 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 341 mapped (trace size budget); minor lanes are not drawn
- origin moved 183 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":17,"medianInside":-2.3,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.34794/18.65573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument\|water gate; sitelinks=15; wikidata:Q1450669 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/green-gate-q1450669.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
