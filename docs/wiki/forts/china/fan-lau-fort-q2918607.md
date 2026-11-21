# Fan Lau Fort

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fan-lau-fort-q2918607` |
| Coordinates | 22.19845, 113.85128 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.19845/113.85128)) |
| Wikidata | [Q2918607](https://www.wikidata.org/wiki/Q2918607) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1729 |
| Designations | declared monument |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |
| OSM `ruins` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, coastline 1, road 6, water 3).

Evidence: documented 0, mapped 12, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105234588 historic=ruins Q2918607 19 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":126,"medianInside":6.2,"medianOutside":31.1}
- sea-1: DEM check ok {"cells":38,"medianInside":2.5,"medianOutside":29.1}
- sea-2: DEM check ok {"cells":39,"medianInside":7.7,"medianOutside":29.3}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.19845/113.85128) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q2918607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/fan-lau-fort-q2918607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
