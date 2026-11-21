# Castello Svevo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-svevo-q3662381` |
| Coordinates | 40.63953, 17.93815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.63953/17.93815)) |
| Wikidata | [Q3662381](https://www.wikidata.org/wiki/Q3662381) (CC0) |
| Wikidata class | castle |
| Types | castle\|history museum\|Category:Hohenstaufen castles in Southern Italy\|historical park museum |
| Administrative area | Brindisi |
| Inception | 1227 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 119 elements (outline 1, road 29, wall 15, building 66, zone 3, coastline 2, water 3).

Evidence: documented 0, mapped 119, inferred 0, derived 3; heights documented 2, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257650846 historic=castle Q3662381 109 m from ledger point
- origin moved 107 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":3.1,"medianOutside":8}
- sea-1: DEM check ok {"cells":174,"medianInside":0,"medianOutside":13.9}
- sea-2: DEM check ok {"cells":2,"medianInside":0.4,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.63953/17.93815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|history museum\|Category:Hohenstaufen castles in Southern Italy\|historical park museum; sitelinks=5; wikidata:Q3662381 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 119 elements); data/traces/castello-svevo-q3662381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
