# Reduta

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reduta-q932745` |
| Coordinates | 48.14135, 17.11003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14135/17.11003)) |
| Wikidata | [Q932745](https://www.wikidata.org/wiki/Q932745) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|concert hall |
| Administrative area | Bratislava |
| Inception | 2000 |
| Designations | Cultural Heritage Monuments of Slovakia\|cultural heritage of Slovakia |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 50, road 307, building 107, zone 23, water 3, wall 9, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 81, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/56305202 historic=building Q932745 44 m from ledger point
- roads capped: kept the 150 longest of 307 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14135/17.11003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|concert hall; sitelinks=4; wikidata:Q932745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/reduta-q932745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
