# Fort Metal Cross

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-metal-cross-q1427246` |
| Coordinates | 4.79342, -1.94504 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/4.79342/-1.94504)) |
| Wikidata | [Q1427246](https://www.wikidata.org/wiki/Q1427246) (CC0) |
| Wikidata class | fort |
| Types | factory\|fort |
| Administrative area | Dixcove |
| Inception | 1683 |
| Designations | Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 34-008 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, coastline 2, road 7, waterway 1, building 7, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178066257 historic=castle Q1427246 0 m from ledger point
- island ring (1470 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":836,"medianInside":1.3,"medianOutside":7.1}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/4.79342/-1.94504) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; factory\|fort; sitelinks=10; wikidata:Q1427246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/fort-metal-cross-q1427246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
