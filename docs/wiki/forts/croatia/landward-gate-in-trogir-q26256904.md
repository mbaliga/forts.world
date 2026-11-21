# Landward Gate in Trogir

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landward-gate-in-trogir-q26256904` |
| Coordinates | 43.51758, 16.25056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.51758/16.25056)) |
| Wikidata | [Q26256904](https://www.wikidata.org/wiki/Q26256904) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Trogir |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 3, road 156, building 369, zone 3, wall 9, coastline 6, water 3).

Evidence: documented 0, mapped 295, inferred 0, derived 3; heights documented 2, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/344508450 historic=castle Q16116710 104 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 156 mapped (trace size budget); minor lanes are not drawn
- origin moved 103 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":198,"medianInside":0.1,"medianOutside":2.8}
- sea-1: DEM check failed {"cells":367,"medianInside":1.6,"medianOutside":1.5}
- sea-2: DEM check failed {"cells":387,"medianInside":1.8,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.51758/16.25056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q26256904 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/landward-gate-in-trogir-q26256904.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
