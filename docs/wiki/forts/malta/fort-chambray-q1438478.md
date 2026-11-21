# Fort Chambray

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-chambray-q1438478` |
| Coordinates | 36.02083, 14.29333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.02083/14.29333)) |
| Wikidata | [Q1438478](https://www.wikidata.org/wiki/Q1438478) (CC0) |
| Wikidata class | fort |
| Types | hospital\|fort\|former hospital |
| Administrative area | Għajnsielem |
| Inception | 1749 |
| Wikipedia language editions | 11 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, marker 1, wall 10, road 32, building 3, zone 4, retaining-wall 3, coastline 1, water 1).

Evidence: documented 0, mapped 56, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/315360109 historic=building 155 m from ledger point
- origin moved 149 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":-0.6,"medianOutside":61.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.02083/14.29333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hospital\|fort\|former hospital; sitelinks=11; wikidata:Q1438478 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/fort-chambray-q1438478.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
