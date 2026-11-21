# Fort Saumarez

> Guernsey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saumarez-q5471989` |
| Coordinates | 49.4576, -2.656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4576/-2.656)) |
| Wikidata | [Q5471989](https://www.wikidata.org/wiki/Q5471989) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower\|artillery battery\|high-rise bunker\|defensive tower |
| Administrative area | Saint Peter's |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 2, road 29, building 6, zone 3, wall 1, retaining-wall 1, coastline 1, water 2).

Evidence: documented 0, mapped 46, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1213716556 historic=fort Q5471989 15 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":180,"medianInside":1,"medianOutside":8.6}
- sea-1: DEM check failed {"cells":4,"medianInside":4.8,"medianOutside":3.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4576/-2.656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower\|artillery battery\|high-rise bunker\|defensive tower; sitelinks=3; wikidata:Q5471989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/fort-saumarez-q5471989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/guernsey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
