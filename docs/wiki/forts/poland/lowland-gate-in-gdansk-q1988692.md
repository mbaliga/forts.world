# Lowland Gate in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lowland-gate-in-gdansk-q1988692` |
| Coordinates | 54.34003, 18.64735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.34003/18.64735)) |
| Wikidata | [Q1988692](https://www.wikidata.org/wiki/Q1988692) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Gdańsk |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fortification |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 2, road 270, building 123, waterway 3, zone 6, wall 12, retaining-wall 3, water 1).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 76, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104729529 historic=fortification Q9166850 276 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 123 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 270 mapped (trace size budget); minor lanes are not drawn
- origin moved 276 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.34003/18.64735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=3; wikidata:Q1988692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/lowland-gate-in-gdansk-q1988692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
