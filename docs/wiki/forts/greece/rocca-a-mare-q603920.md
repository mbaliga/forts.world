# Rocca a Mare

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-a-mare-q603920` |
| Coordinates | 35.34457, 25.13688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.34457/25.13688)) |
| Wikidata | [Q603920](https://www.wikidata.org/wiki/Q603920) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Heraklion Municipality |
| Inception | 1523 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Venetian castle built on Byzantine site. (Source: Wikipedia.en) |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, marker 1, wall 5, road 21, building 2, coastline 1, retaining-wall 6, zone 1, water 4).

Evidence: documented 0, mapped 42, inferred 0, derived 4; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5251038 historic=castle Q603920 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1467,"medianInside":0,"medianOutside":0.2}
- sea-1: DEM check failed {"cells":1595,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":925,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":525,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.34457/25.13688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; sea fort; sitelinks=20; wikidata:Q603920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/rocca-a-mare-q603920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
