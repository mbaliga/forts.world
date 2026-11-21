# Battery Weed

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-weed-q2178916` |
| Coordinates | 40.60528, -74.05472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.60528/-74.05472)) |
| Wikidata | [Q2178916](https://www.wikidata.org/wiki/Q2178916) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Staten Island |
| Inception | 1861 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 33, zone 20, building 7, coastline 2, wall 5, waterway 3, water 1).

Evidence: documented 0, mapped 72, inferred 0, derived 1; heights documented 4, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35098919 historic=fort 108 m from ledger point
- origin moved 115 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":147,"medianInside":6.8,"medianOutside":21.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.60528/-74.05472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=5; wikidata:Q2178916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/battery-weed-q2178916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
