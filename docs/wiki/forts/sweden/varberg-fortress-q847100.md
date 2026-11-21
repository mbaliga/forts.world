# Varberg Fortress

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `varberg-fortress-q847100` |
| Coordinates | 57.1043, 12.24157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.1043/12.24157)) |
| Wikidata | [Q847100](https://www.wikidata.org/wiki/Q847100) (CC0) |
| Wikidata class | fort |
| Types | fortress\|architectural ensemble\|cultural property\|heritage site in Sweden\|working life museum |
| Administrative area | Varberg Municipality |
| Inception | 1287 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 15, road 148, water 5, wall 2, building 108, coastline 3, cliff 1, zone 2, retaining-wall 2).

Evidence: documented 0, mapped 287, inferred 0, derived 3; heights documented 7, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1314877925 historic=castle 212 m from ledger point
- origin moved 216 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":0.9,"medianOutside":3.8}
- sea-1: DEM check ok {"cells":555,"medianInside":-1,"medianOutside":4.1}
- sea-2: DEM check ok {"cells":1208,"medianInside":-1,"medianOutside":6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.1043/12.24157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|architectural ensemble\|cultural property\|heritage site in Sweden\|working life museum; sitelinks=12; wikidata:Q847100 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/varberg-fortress-q847100.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
