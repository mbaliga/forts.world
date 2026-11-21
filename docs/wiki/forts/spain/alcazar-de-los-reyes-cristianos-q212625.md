# Alcázar de los Reyes Cristianos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazar-de-los-reyes-cristianos-q212625` |
| Coordinates | 37.8766, -4.78138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.8766/-4.78138)) |
| Wikidata | [Q212625](https://www.wikidata.org/wiki/Q212625) (CC0) |
| Wikidata class | castle |
| Types | defensive wall\|archaeological site\|hammam\|residential building\|alcázar |
| Administrative area | Córdoba |
| Designations | bien de interés cultural |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 2, road 280, building 65, zone 3, wall 37, waterway 3, water 20, retaining-wall 7).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 56, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19024092 historic=castle Q212625 5 m from ledger point
- roads capped: kept the 150 longest of 280 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.8766/-4.78138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; defensive wall\|archaeological site\|hammam\|residential building\|alcázar; sitelinks=22; wikidata:Q212625 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/alcazar-de-los-reyes-cristianos-q212625.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
