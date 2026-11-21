# Bateria Alta ao norte da Praia da Água Doce

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-alta-ao-norte-da-praia-da-agua-doce-q9651470` |
| Coordinates | 38.72825, -9.47617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72825/-9.47617)) |
| Wikidata | [Q9651470](https://www.wikidata.org/wiki/Q9651470) (CC0) |
| Wikidata class | fort |
| Types | restaurant\|hotel\|cultural heritage\|fort |
| Administrative area | Cascais e Estoril |
| Inception | 1750 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 66 elements (outline 1, road 43, building 7, wall 2, coastline 3, waterway 2, zone 5, cliff 2, water 1).

Evidence: documented 0, mapped 66, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202355143 historic=castle Q9651470 7 m from ledger point
- island ring (519 m2) cut out of sea-0
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":196,"medianInside":0,"medianOutside":11.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72825/-9.47617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; restaurant\|hotel\|cultural heritage\|fort; sitelinks=3; wikidata:Q9651470 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 66 elements); data/traces/bateria-alta-ao-norte-da-praia-da-agua-doce-q9651470.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
