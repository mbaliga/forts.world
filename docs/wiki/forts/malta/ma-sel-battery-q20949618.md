# Maħsel Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ma-sel-battery-q20949618` |
| Coordinates | 35.85531, 14.56617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.85531/14.56617)) |
| Wikidata | [Q20949618](https://www.wikidata.org/wiki/Q20949618) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Marsaskala |
| Inception | 1714 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 96 elements (outline 1, marker 1, road 44, zone 3, building 15, wall 30, coastline 1, water 1).

Evidence: documented 0, mapped 96, inferred 0, derived 1; heights documented 2, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/334804454 historic=building 270 m from ledger point
- origin moved 268 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":29,"medianInside":0,"medianOutside":5.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.85531/14.56617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q20949618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 96 elements); data/traces/ma-sel-battery-q20949618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
