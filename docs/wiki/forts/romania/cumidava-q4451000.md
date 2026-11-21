# Cumidava

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cumidava-q4451000` |
| Coordinates | 45.59052, 25.4695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.59052/25.4695)) |
| Wikidata | [Q4451000](https://www.wikidata.org/wiki/Q4451000) (CC0) |
| Wikidata class | fortification |
| Types | dava |
| Administrative area | Brașov County |
| Designations | Historic Monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.cetatea-rasnov.ro/ |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 67, building 170, wall 52, zone 3, retaining-wall 1).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 0, inferred 0, unknown 224.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20659881 historic=castle Q3656045 47 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.59052/25.4695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; dava; sitelinks=1; wikidata:Q4451000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/cumidava-q4451000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
