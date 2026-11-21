# Örenäs Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orenas-castle-q4993199` |
| Coordinates | 55.94021, 12.78095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.94021/12.78095)) |
| Wikidata | [Q4993199](https://www.wikidata.org/wiki/Q4993199) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Landskrona Municipality |
| Inception | 1918 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, coastline 1, road 13, building 18, water 1).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/286842260 historic=castle Q4993199 1 m from ledger point
- sea-0: DEM check ok {"cells":20,"medianInside":6.1,"medianOutside":24.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.94021/12.78095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q4993199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 34 elements); data/traces/orenas-castle-q4993199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
