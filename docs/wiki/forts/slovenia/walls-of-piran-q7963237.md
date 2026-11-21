# Walls of Piran

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-piran-q7963237` |
| Coordinates | 45.52751, 13.57158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.52751/13.57158)) |
| Wikidata | [Q7963237](https://www.wikidata.org/wiki/Q7963237) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Piran Municipality |
| Designations | monument of local significance |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 2, road 106, cliff 3, zone 11, building 174, wall 5, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 306, inferred 0, derived 1; heights documented 11, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/457666289 historic=citywalls Q7963237 44 m from ledger point
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":74,"medianInside":0,"medianOutside":35}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.52751/13.57158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=5; wikidata:Q7963237 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/walls-of-piran-q7963237.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
