# Fort Tigné

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tigne-q17340318` |
| Coordinates | 35.90647, 14.51323 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.90647/14.51323)) |
| Wikidata | [Q17340318](https://www.wikidata.org/wiki/Q17340318) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Sliema |
| Inception | 1793 |
| Designations | Grade 1 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, road 23, building 30, wall 11, coastline 1, zone 4, cliff 1, water 1).

Evidence: documented 0, mapped 73, inferred 0, derived 1; heights documented 6, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/339459510 historic=castle 49 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1324,"medianInside":0,"medianOutside":5.2}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.90647/14.51323) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q17340318 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/fort-tigne-q17340318.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
