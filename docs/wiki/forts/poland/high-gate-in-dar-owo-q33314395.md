# High Gate in Darłowo

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `high-gate-in-dar-owo-q33314395` |
| Coordinates | 54.42315, 16.41262 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.42315/16.41262)) |
| Wikidata | [Q33314395](https://www.wikidata.org/wiki/Q33314395) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate\|immovable monument in Poland |
| Administrative area | Darłowo |
| Inception | 1737 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 2, waterway 5, road 164, building 225, zone 2, wall 1, coastline 3, water 1).

Evidence: documented 0, mapped 285, inferred 0, derived 1; heights documented 39, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6986844 historic=castle Q2243270 376 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 225 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 375 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":3.6,"medianOutside":5.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.42315/16.41262) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate\|immovable monument in Poland; sitelinks=3; wikidata:Q33314395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/high-gate-in-dar-owo-q33314395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
