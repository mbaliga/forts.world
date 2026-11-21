# Warsaw Citadel

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warsaw-citadel-q206212` |
| Coordinates | 52.265, 21 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.265/21)) |
| Wikidata | [Q206212](https://www.wikidata.org/wiki/Q206212) (CC0) |
| Wikidata class | fort |
| Types | military museum\|citadel |
| Administrative area | Żoliborz |
| Inception | 1834 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 16 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 31, road 584, waterway 4, building 93, wall 15, zone 212, water 2, retaining-wall 33).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 71, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31102888 historic=fort Q206212 262 m from ledger point
- pruned to the outline plus 80 m: 975 -> 585 elements
- roads capped: kept the 80 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 260 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.265/21) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military museum\|citadel; sitelinks=16; wikidata:Q206212 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/warsaw-citadel-q206212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
