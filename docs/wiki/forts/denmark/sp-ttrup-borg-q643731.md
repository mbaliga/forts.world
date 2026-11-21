# Spøttrup Borg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sp-ttrup-borg-q643731` |
| Coordinates | 56.63961, 8.78269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.63961/8.78269)) |
| Wikidata | [Q643731](https://www.wikidata.org/wiki/Q643731) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Skive Municipality |
| Inception | 1404 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.spottrupborg.dk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, marker 2, road 34, water 1, building 7, zone 2, wall 1, waterway 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 1, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5653305 historic=castle Q643731 12 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.63961/8.78269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=11; wikidata:Q643731 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/sp-ttrup-borg-q643731.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
