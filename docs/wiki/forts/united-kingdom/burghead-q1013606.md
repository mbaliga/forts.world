# Burghead

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burghead-q1013606` |
| Coordinates | 57.7004, -3.48468 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.7004/-3.48468)) |
| Wikidata | [Q1013606](https://www.wikidata.org/wiki/Q1013606) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Moray |
| Wikipedia language editions | 18 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 216 elements (outline 1, marker 2, road 37, building 161, zone 3, retaining-wall 4, wall 2, coastline 2, cliff 1, water 3).

Evidence: documented 0, mapped 216, inferred 0, derived 3; heights documented 3, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1187856369 historic=archaeological_site 707 m from ledger point
- origin moved 706 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":83,"medianInside":2.2,"medianOutside":7}
- sea-1: DEM check ok {"cells":22,"medianInside":4.2,"medianOutside":6.1}
- sea-2: DEM check ok {"cells":17,"medianInside":1,"medianOutside":6.1}
- 123 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.7004/-3.48468) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=18; wikidata:Q1013606 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/burghead-q1013606.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
