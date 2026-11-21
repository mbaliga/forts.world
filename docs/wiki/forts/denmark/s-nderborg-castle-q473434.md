# Sønderborg Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `s-nderborg-castle-q473434` |
| Coordinates | 54.90694, 9.78361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.90694/9.78361)) |
| Wikidata | [Q473434](https://www.wikidata.org/wiki/Q473434) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Sønderborg Municipality |
| Inception | 1557 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://msj.dk/soenderborg-slot/ |

## What the model contains

Tier **T1**, status `outline+walls`, 125 elements (outline 1, marker 2, road 74, coastline 2, building 28, wall 11, zone 1, waterway 3, water 3).

Evidence: documented 0, mapped 125, inferred 0, derived 3; heights documented 3, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2415351 historic=castle Q473434 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1597,"medianInside":1.4,"medianOutside":5}
- sea-1: DEM check ok {"cells":1555,"medianInside":1.4,"medianOutside":3.3}
- sea-2: DEM check ok {"cells":922,"medianInside":1,"medianOutside":3.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.90694/9.78361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=13; wikidata:Q473434 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 125 elements); data/traces/s-nderborg-castle-q473434.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
