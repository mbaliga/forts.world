# Manin Battery

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manin-battery-q113401326` |
| Coordinates | 45.30848, 12.31272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.30848/12.31272)) |
| Wikidata | [Q113401326](https://www.wikidata.org/wiki/Q113401326) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, road 34, building 26, wall 19, water 4, waterway 3, retaining-wall 1, coastline 1, zone 2).

Evidence: documented 0, mapped 91, inferred 0, derived 2; heights documented 1, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152544251 historic=fort 8 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":61,"medianInside":0,"medianOutside":-1.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":-0.8}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.30848/12.31272) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q113401326 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/manin-battery-q113401326.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
