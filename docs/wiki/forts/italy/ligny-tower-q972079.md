# Ligny Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ligny-tower-q972079` |
| Coordinates | 38.0196, 12.49697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.0196/12.49697)) |
| Wikidata | [Q972079](https://www.wikidata.org/wiki/Q972079) (CC0) |
| Wikidata class | fortification |
| Types | historic building\|watchtower\|coastal tower |
| Administrative area | Trapani |
| Inception | 1670 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 134 elements (outline 1, road 57, building 59, wall 8, zone 6, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 134, inferred 0, derived 1; heights documented 3, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105131380 historic=fort 503 m from ledger point
- origin moved 503 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":154,"medianInside":0,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.0196/12.49697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; historic building\|watchtower\|coastal tower; sitelinks=7; wikidata:Q972079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 134 elements); data/traces/ligny-tower-q972079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
