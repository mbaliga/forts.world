# Citadel of Qaitbay

> Egypt · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-qaitbay-q1938065` |
| Coordinates | 31.213, 29.8852 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.213/29.8852)) |
| Wikidata | [Q1938065](https://www.wikidata.org/wiki/Q1938065) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Alexandria Governorate |
| Inception | 1477 |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 71 elements (outline 1, marker 2, coastline 3, zone 17, building 10, road 34, water 4).

Evidence: documented 0, mapped 71, inferred 0, derived 4; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8410048 historic=castle 60 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":537,"medianInside":0.7,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":675,"medianInside":0.1,"medianOutside":0.5}
- sea-2: DEM check ok {"cells":37,"medianInside":0.1,"medianOutside":0.3}
- sea-3: DEM check ok {"cells":9,"medianInside":0.1,"medianOutside":0.3}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.213/29.8852) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=21; wikidata:Q1938065 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 71 elements); data/traces/citadel-of-qaitbay-q1938065.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
