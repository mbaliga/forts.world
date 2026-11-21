# Fortín de San Gerónimo

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-san-geronimo-q5473028` |
| Coordinates | 18.46278, -66.08417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.46278/-66.08417)) |
| Wikidata | [Q5473028](https://www.wikidata.org/wiki/Q5473028) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | San Juan |
| Designations | National Register of Historic Places listed place\|National Register of Historic Places contributing property |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, road 19, coastline 6, building 6, zone 3, retaining-wall 1, water 3).

Evidence: documented 0, mapped 39, inferred 0, derived 3; heights documented 2, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203615461 historic=castle Q5473028 19 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":247,"medianInside":0.8,"medianOutside":2.5}
- sea-1: DEM check failed {"cells":8,"medianInside":5.8,"medianOutside":1}
- sea-2: DEM check failed {"cells":400,"medianInside":1,"medianOutside":0.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.46278/-66.08417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q5473028 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/fortin-de-san-geronimo-q5473028.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
