# Capuchin Convent Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `capuchin-convent-battery-q19871868` |
| Coordinates | 35.88631, 14.53289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88631/14.53289)) |
| Wikidata | [Q19871868](https://www.wikidata.org/wiki/Q19871868) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Kalkara |
| Inception | 1799 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 132 elements (outline 1, road 55, building 30, wall 37, zone 4, coastline 2, waterway 1, water 1).

Evidence: documented 0, mapped 132, inferred 0, derived 1; heights documented 1, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/409770028 historic=fort Q20667115 458 m from ledger point
- origin moved 457 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":7.4,"medianOutside":27.7}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88631/14.53289) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q19871868 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/capuchin-convent-battery-q19871868.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
