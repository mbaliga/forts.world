# Castillo San Felipe del Morro

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-san-felipe-del-morro-q550502` |
| Coordinates | 18.47111, -66.12444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.47111/-66.12444)) |
| Wikidata | [Q550502](https://www.wikidata.org/wiki/Q550502) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fort |
| Administrative area | San Juan |
| Inception | 1539 |
| Designations | part of UNESCO World Heritage Site\|National Register of Historic Places contributing property |
| UNESCO WHC id | 266-001 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, marker 2, road 65, wall 3, coastline 1, building 3, zone 6, retaining-wall 1, water 1).

Evidence: documented 0, mapped 83, inferred 0, derived 1; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561634537 historic=castle Q550502 30 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":356,"medianInside":1.9,"medianOutside":22.3}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.47111/-66.12444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fort; sitelinks=14; wikidata:Q550502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/castillo-san-felipe-del-morro-q550502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
