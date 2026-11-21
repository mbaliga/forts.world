# Enderttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enderttor-q151459` |
| Coordinates | 50.1471, 7.16517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1471/7.16517)) |
| Wikidata | [Q151459](https://www.wikidata.org/wiki/Q151459) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cochem |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 6, road 94, waterway 1, building 135, zone 13, wall 16, retaining-wall 7).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 35, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/961681417 historic=citywalls 547 m from ledger point
- origin moved 547 m from the ledger point to the centre of the mapped site
- 53 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1471/7.16517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q151459 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/enderttor-q151459.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
