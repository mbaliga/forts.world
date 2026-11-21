# Serdica

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `serdica-q4067160` |
| Coordinates | 42.7, 23.33333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.7/23.33333)) |
| Wikidata | [Q4067160](https://www.wikidata.org/wiki/Q4067160) (CC0) |
| Wikidata class | fort |
| Types | fortress\|municipium\|Roman city\|ancient city |
| Administrative area | Sofia |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 291 elements (outline 1, marker 17, road 273, building 94, waterway 1, water 4, zone 24).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 24, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157740218 historic=castle Q6057793 647 m from ledger point
- roads capped: kept the 150 longest of 273 mapped (trace size budget); minor lanes are not drawn
- origin moved 647 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.7/23.33333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|municipium\|Roman city\|ancient city; sitelinks=11; wikidata:Q4067160 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 291 elements); data/traces/serdica-q4067160.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
