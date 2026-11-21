# Milefortlet 21

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `milefortlet-21-q6851204` |
| Coordinates | 54.7466, -3.45046 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7466/-3.45046)) |
| Wikidata | [Q6851204](https://www.wikidata.org/wiki/Q6851204) (CC0) |
| Wikidata class | castle |
| Types | milecastle |
| Administrative area | Crosscanonby |
| Designations | part of UNESCO World Heritage Site\|scheduled monument |
| UNESCO WHC id | 430ter-153 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, marker 1, road 11, coastline 1, wall 3, waterway 3, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/510792542 historic=yes 115 m from ledger point
- origin moved 114 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":132,"medianInside":1.1,"medianOutside":8.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7466/-3.45046) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; milecastle; sitelinks=2; wikidata:Q6851204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/milefortlet-21-q6851204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
