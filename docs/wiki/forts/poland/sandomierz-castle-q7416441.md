# Sandomierz Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sandomierz-castle-q7416441` |
| Coordinates | 50.67611, 21.74722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.67611/21.74722)) |
| Wikidata | [Q7416441](https://www.wikidata.org/wiki/Q7416441) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sandomierz |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 4, road 108, building 44, waterway 4, zone 26, cliff 8, water 1, wall 4).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 8, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119156368 historic=castle Q7416441 20 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.67611/21.74722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q7416441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/sandomierz-castle-q7416441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
