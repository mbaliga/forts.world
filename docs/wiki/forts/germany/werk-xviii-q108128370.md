# Werk XVIII

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `werk-xviii-q108128370` |
| Coordinates | 48.41178, 9.98733 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41178/9.98733)) |
| Wikidata | [Q108128370](https://www.wikidata.org/wiki/Q108128370) (CC0) |
| Wikidata class | fortification |
| Types | curtain wall\|defence work |
| Administrative area | Ulm |
| Inception | 1858 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 2, road 201, wall 17, zone 19, building 128, waterway 1, water 1).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 1, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226934351 historic=castle 562 m from ledger point
- origin moved 561 m from the ledger point to the centre of the mapped site
- 7735 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41178/9.98733) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; curtain wall\|defence work; sitelinks=1; wikidata:Q108128370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/werk-xviii-q108128370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
