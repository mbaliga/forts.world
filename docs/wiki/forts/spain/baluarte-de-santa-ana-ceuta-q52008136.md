# Baluarte de Santa Ana, Ceuta

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluarte-de-santa-ana-ceuta-q52008136` |
| Coordinates | 35.88764, -5.31882 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88764/-5.31882)) |
| Wikidata | [Q52008136](https://www.wikidata.org/wiki/Q52008136) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|bastion |
| Administrative area | Ceuta |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, marker 8, road 74, building 51, coastline 3, wall 12, zone 27, water 3).

Evidence: documented 0, mapped 179, inferred 0, derived 3; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378670424 historic=castle 34 m from ledger point
- origin moved 36 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":297,"medianInside":8.2,"medianOutside":8.1}
- sea-1: DEM check ok {"cells":203,"medianInside":4.3,"medianOutside":9.3}
- sea-2: DEM check failed {"cells":400,"medianInside":8.4,"medianOutside":6.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88764/-5.31882) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|bastion; sitelinks=2; wikidata:Q52008136 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/baluarte-de-santa-ana-ceuta-q52008136.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
