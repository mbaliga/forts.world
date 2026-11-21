# Vasche Limarie

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vasche-limarie-q4008848` |
| Coordinates | 40.63615, 17.93946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.63615/17.93946)) |
| Wikidata | [Q4008848](https://www.wikidata.org/wiki/Q4008848) (CC0) |
| Wikidata class | fortification |
| Types | Roman aqueduct\|castellum aquae |
| Administrative area | Brindisi |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 116 elements (outline 1, road 28, wall 14, building 66, zone 3, coastline 1, water 3).

Evidence: documented 0, mapped 116, inferred 0, derived 3; heights documented 2, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257650846 historic=castle Q3662381 491 m from ledger point
- origin moved 490 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":3.1,"medianOutside":8}
- sea-1: DEM check ok {"cells":174,"medianInside":0,"medianOutside":13.9}
- sea-2: DEM check ok {"cells":2,"medianInside":0.4,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.63615/17.93946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Roman aqueduct\|castellum aquae; sitelinks=2; wikidata:Q4008848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 116 elements); data/traces/vasche-limarie-q4008848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
