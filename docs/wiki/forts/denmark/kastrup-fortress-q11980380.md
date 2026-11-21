# Kastrup Fortress

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastrup-fortress-q11980380` |
| Coordinates | 55.6486, 12.6397 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6486/12.6397)) |
| Wikidata | [Q11980380](https://www.wikidata.org/wiki/Q11980380) (CC0) |
| Wikidata class | fort |
| Types | fort\|ancient monument |
| Administrative area | Tårnby Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, road 176, coastline 2, building 403, zone 17, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 294, inferred 0, derived 2; heights documented 48, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295635546 historic=fort Q11980380 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 403 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1146,"medianInside":1.9,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":139,"medianInside":0.7,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6486/12.6397) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|ancient monument; sitelinks=3; wikidata:Q11980380 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/kastrup-fortress-q11980380.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
