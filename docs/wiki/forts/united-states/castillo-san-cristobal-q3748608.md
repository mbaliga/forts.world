# Castillo San Cristóbal

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-san-cristobal-q3748608` |
| Coordinates | 18.46722, -66.11111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.46722/-66.11111)) |
| Wikidata | [Q3748608](https://www.wikidata.org/wiki/Q3748608) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | San Juan |
| Designations | part of UNESCO World Heritage Site\|National Register of Historic Places contributing property |
| UNESCO WHC id | 266-001 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 2, road 113, coastline 1, building 170, zone 16, wall 5, cliff 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 311, inferred 0, derived 1; heights documented 148, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142863669 historic=castle Q3748608 32 m from ledger point
- origin moved 34 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":151,"medianInside":5.2,"medianOutside":11.9}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.46722/-66.11111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=10; wikidata:Q3748608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/castillo-san-cristobal-q3748608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
