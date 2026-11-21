# Soroca Fort

> Moldova · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `soroca-fort-q2374273` |
| Coordinates | 48.16122, 28.30548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.16122/28.30548)) |
| Wikidata | [Q2374273](https://www.wikidata.org/wiki/Q2374273) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Soroca |
| Designations | historical monument of Moldova\|architectural monument of Moldova |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, road 92, building 148, zone 35, waterway 4, wall 1, retaining-wall 21).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 91, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12593748 historic=castle Q2374273 20 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.16122/28.30548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=22; wikidata:Q2374273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/soroca-fort-q2374273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/moldova.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
