# Charles V Wall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `charles-v-wall-q130182` |
| Coordinates | 36.13214, -5.34829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.13214/-5.34829)) |
| Wikidata | [Q130182](https://www.wikidata.org/wiki/Q130182) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gibraltar |
| Inception | 1540 |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, marker 9, road 89, building 67, zone 3, coastline 1, wall 9, water 4, retaining-wall 1).

Evidence: documented 0, mapped 184, inferred 0, derived 3; heights documented 0, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1475381586 historic=fort 450 m from ledger point
- origin moved 451 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1596,"medianInside":9.8,"medianOutside":31.5}
- sea-1: DEM check ok {"cells":78,"medianInside":0,"medianOutside":10.1}
- sea-2: DEM check ok {"cells":49,"medianInside":-0.1,"medianOutside":9.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.13214/-5.34829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=7; wikidata:Q130182 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/charles-v-wall-q130182.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
