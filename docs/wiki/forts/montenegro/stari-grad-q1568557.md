# Stari Grad

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stari-grad-q1568557` |
| Coordinates | 42.27826, 18.838 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.27826/18.838)) |
| Wikidata | [Q1568557](https://www.wikidata.org/wiki/Q1568557) (CC0) |
| Wikidata class | fort |
| Types | fortress\|old town |
| Administrative area | Budva |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 17, road 105, zone 8, building 291, cliff 1, wall 8, retaining-wall 1, coastline 3, water 2).

Evidence: documented 0, mapped 267, inferred 0, derived 2; heights documented 122, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36862527 historic=fort 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 291 mapped (trace size budget); the rest of the town is not drawn
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":375,"medianInside":0,"medianOutside":2.7}
- sea-1: DEM check failed {"cells":104,"medianInside":0,"medianOutside":0}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 110 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.27826/18.838) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|old town; sitelinks=5; wikidata:Q1568557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/stari-grad-q1568557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
