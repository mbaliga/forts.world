# Spitzkasematte

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spitzkasematte-q131612660` |
| Coordinates | 49.41081, 8.71657 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41081/8.71657)) |
| Wikidata | [Q131612660](https://www.wikidata.org/wiki/Q131612660) (CC0) |
| Wikidata class | fortification |
| Types | casemate |
| Administrative area | Heidelberg |
| Inception | 1584 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 11, road 235, building 83, retaining-wall 27, zone 38, water 5, waterway 6, wall 41, cliff 1).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 59, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24885663 historic=yes Q131612660 3 m from ledger point
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41081/8.71657) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; casemate; sitelinks=1; wikidata:Q131612660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/spitzkasematte-q131612660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
