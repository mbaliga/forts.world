# Fort Amsterdam

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-amsterdam-q633264` |
| Coordinates | 40.704, -74.0137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.704/-74.0137)) |
| Wikidata | [Q633264](https://www.wikidata.org/wiki/Q633264) (CC0) |
| Wikidata class | fort |
| Types | fort\|destroyed building or structure |
| Administrative area | New York |
| Inception | 1625 |
| Wikipedia language editions | 13 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 12, road 323, retaining-wall 17, zone 16, coastline 2, building 25, wall 32, water 10).

Evidence: documented 0, mapped 265, inferred 0, derived 1; heights documented 65, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3695755 historic=fort Q1049423 267 m from ledger point
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 263 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":143,"medianInside":5.2,"medianOutside":3.2}
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.704/-74.0137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|destroyed building or structure; sitelinks=13; wikidata:Q633264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/fort-amsterdam-q633264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
