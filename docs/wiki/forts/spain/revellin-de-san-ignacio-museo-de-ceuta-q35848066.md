# Revellín de San Ignacio, Museo de Ceuta

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `revellin-de-san-ignacio-museo-de-ceuta-q35848066` |
| Coordinates | 35.88866, -5.31964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88866/-5.31964)) |
| Wikidata | [Q35848066](https://www.wikidata.org/wiki/Q35848066) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|ravelin |
| Administrative area | Ceuta |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 192 elements (outline 1, marker 6, road 90, coastline 4, building 61, wall 12, zone 16, water 2).

Evidence: documented 0, mapped 192, inferred 0, derived 2; heights documented 0, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378670423 historic=castle Q35848066 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":109,"medianInside":8.3,"medianOutside":10.3}
- sea-1: DEM check failed {"cells":334,"medianInside":10.1,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88866/-5.31964) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|ravelin; sitelinks=3; wikidata:Q35848066 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 192 elements); data/traces/revellin-de-san-ignacio-museo-de-ceuta-q35848066.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
