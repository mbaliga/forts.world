# Spike Island

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spike-island-q3777131` |
| Coordinates | 51.835, -8.285 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.835/-8.285)) |
| Wikidata | [Q3777131](https://www.wikidata.org/wiki/Q3777131) (CC0) |
| Wikidata class | fort |
| Types | island\|fort |
| Administrative area | County Cork |
| Designations | national monument of Ireland |
| Wikipedia language editions | 12 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, marker 9, road 32, coastline 1, wall 12, zone 7, building 36, retaining-wall 1, water 1).

Evidence: documented 0, mapped 100, inferred 0, derived 1; heights documented 4, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70765945 historic=fort 137 m from ledger point
- origin moved 137 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1437,"medianInside":3.4,"medianOutside":11.1}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.835/-8.285) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fort; sitelinks=12; wikidata:Q3777131 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 100 elements); data/traces/spike-island-q3777131.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
