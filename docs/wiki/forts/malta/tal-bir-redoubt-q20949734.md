# Tal-Bir Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tal-bir-redoubt-q20949734` |
| Coordinates | 35.98581, 14.3465 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.98581/14.3465)) |
| Wikidata | [Q20949734](https://www.wikidata.org/wiki/Q20949734) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Mellieħa |
| Inception | 1715 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, marker 1, road 50, building 10, coastline 1, zone 3, water 3, wall 4).

Evidence: documented 0, mapped 73, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20675883 historic=fort Q20241078 407 m from ledger point
- origin moved 404 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.8}
- sea-1: DEM check ok {"cells":166,"medianInside":0,"medianOutside":8.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.98581/14.3465) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=4; wikidata:Q20949734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/tal-bir-redoubt-q20949734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
