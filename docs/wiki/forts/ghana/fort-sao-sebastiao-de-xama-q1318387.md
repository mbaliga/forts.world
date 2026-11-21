# Fort São Sebastião de Xama

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sao-sebastiao-de-xama-q1318387` |
| Coordinates | 5.01082, -1.6292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.01082/-1.6292)) |
| Wikidata | [Q1318387](https://www.wikidata.org/wiki/Q1318387) (CC0) |
| Wikidata class | fort |
| Types | factory\|fort |
| Administrative area | Shama |
| Inception | 1590 |
| Designations | Heritage of Portuguese Influence\|Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 34-007 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, road 6, coastline 2, building 1, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568923414 historic=castle Q1318387 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":327,"medianInside":3.3,"medianOutside":11}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.01082/-1.6292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; factory\|fort; sitelinks=14; wikidata:Q1318387 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/fort-sao-sebastiao-de-xama-q1318387.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
