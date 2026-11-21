# Cippico Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cippico-castle-q5121289` |
| Coordinates | 43.54743, 16.33899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.54743/16.33899)) |
| Wikidata | [Q5121289](https://www.wikidata.org/wiki/Q5121289) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Split-Dalmatia County |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 156 elements (outline 1, marker 1, road 44, building 105, wall 1, coastline 3, water 1).

Evidence: documented 0, mapped 156, inferred 0, derived 1; heights documented 0, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1230143660 historic=fort Q5121289 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":257,"medianInside":0,"medianOutside":3.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.54743/16.33899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5121289 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 156 elements); data/traces/cippico-castle-q5121289.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
