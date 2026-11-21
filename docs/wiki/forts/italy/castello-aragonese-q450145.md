# Castello Aragonese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-aragonese-q450145` |
| Coordinates | 40.4731, 17.23399 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.4731/17.23399)) |
| Wikidata | [Q450145](https://www.wikidata.org/wiki/Q450145) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Taranto |
| Inception | 1486 |
| Designations | Italian national heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, marker 3, road 97, water 3, coastline 2, zone 6, building 25, retaining-wall 2, wall 9).

Evidence: documented 0, mapped 148, inferred 0, derived 2; heights documented 1, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5724531 historic=castle Q450145 44 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":199,"medianInside":0,"medianOutside":8.7}
- sea-1: DEM check ok {"cells":5,"medianInside":0,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.4731/17.23399) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q450145 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/castello-aragonese-q450145.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
