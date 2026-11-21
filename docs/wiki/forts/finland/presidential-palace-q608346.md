# Presidential Palace

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `presidential-palace-q608346` |
| Coordinates | 60.16843, 24.95631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.16843/24.95631)) |
| Wikidata | [Q608346](https://www.wikidata.org/wiki/Q608346) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|presidential palace\|administrative building |
| Administrative area | Helsinki |
| Inception | 1813 |
| Designations | building protected by city plan\|building protected by Decree 480/85 in Finland |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 3, road 506, building 70, retaining-wall 32, coastline 6, zone 21, cliff 4, wall 4, waterway 27, water 6).

Evidence: documented 0, mapped 324, inferred 0, derived 4; heights documented 49, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2123871 historic=castle Q608346 2 m from ledger point
- roads capped: kept the 150 longest of 506 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":389,"medianInside":23.4,"medianOutside":30.5}
- sea-1: DEM check failed {"cells":152,"medianInside":18.8,"medianOutside":30}
- sea-2: DEM check failed {"cells":331,"medianInside":23.9,"medianOutside":24}
- sea-3: DEM check failed {"cells":2,"medianInside":18.6,"medianOutside":24}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.16843/24.95631) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|presidential palace\|administrative building; sitelinks=23; wikidata:Q608346 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/presidential-palace-q608346.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
