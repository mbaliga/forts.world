# Fort Vredenburgh

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vredenburgh-q2139666` |
| Coordinates | 5.05214, -1.48391 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.05214/-1.48391)) |
| Wikidata | [Q2139666](https://www.wikidata.org/wiki/Q2139666) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Central Region |
| Inception | 1682 |
| Designations | part of UNESCO World Heritage Site\|Ghana’s material cultural heritage |
| UNESCO WHC id | 34-009 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, coastline 1, road 12, building 5, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1024365436 historic=castle 668 m from ledger point
- origin moved 667 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":371,"medianInside":3,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.05214/-1.48391) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q2139666 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/fort-vredenburgh-q2139666.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
