# Festung Saarlouis

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `festung-saarlouis-q96313206` |
| Coordinates | 49.31679, 6.74891 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.31679/6.74891)) |
| Wikidata | [Q96313206](https://www.wikidata.org/wiki/Q96313206) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Saarlouis |
| Designations | heritage monument in Saarland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 10, waterway 3, road 219, building 143, water 3, wall 21, zone 15, retaining-wall 14).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 35, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/372882703 historic=castle Q99351918 196 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 193 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.31679/6.74891) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q96313206 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/festung-saarlouis-q96313206.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
