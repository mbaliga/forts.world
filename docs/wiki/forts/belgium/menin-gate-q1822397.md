# Menin Gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `menin-gate-q1822397` |
| Coordinates | 50.85205, 2.89107 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85205/2.89107)) |
| Wikidata | [Q1822397](https://www.wikidata.org/wiki/Q1822397) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|war memorial\|Commonwealth War Graves Commission maintained memorial |
| Administrative area | Ypres |
| Inception | 1927 |
| Designations | beschermd monument\|World Heritage Site |
| Wikipedia language editions | 19 |
| OSM `historic` | building |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 4, road 158, building 679, wall 12, waterway 1, water 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 8, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2284646 historic=building Q1923610 420 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 679 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 428 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85205/2.89107) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|war memorial\|Commonwealth War Graves Commission maintained memorial; sitelinks=19; wikidata:Q1822397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/menin-gate-q1822397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
