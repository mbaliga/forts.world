# city walls of Old San Juan

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-old-san-juan-q52063661` |
| Coordinates | 18.46861, -66.11713 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.46861/-66.11713)) |
| Wikidata | [Q52063661](https://www.wikidata.org/wiki/Q52063661) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | San Juan |
| Designations | National Register of Historic Places contributing property\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 266-001 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 1, road 38, zone 16, building 5, wall 6, coastline 1, water 2, retaining-wall 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 4, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1024680666 historic=fort 399 m from ledger point
- origin moved 398 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":100,"medianInside":0.8,"medianOutside":20.4}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.46861/-66.11713) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q52063661 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/city-walls-of-old-san-juan-q52063661.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
