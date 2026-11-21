# Mrigadayavan Palace

> Thailand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mrigadayavan-palace-q6581499` |
| Coordinates | 12.69784, 99.96357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.69784/99.96357)) |
| Wikidata | [Q6581499](https://www.wikidata.org/wiki/Q6581499) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Cha-am |
| Inception | 1923 |
| Designations | registered Thai historic site |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, waterway 1, road 13, building 14, zone 1, coastline 1, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7852448 historic=castle Q6581499 46 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":231,"medianInside":2,"medianOutside":9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.69784/99.96357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q6581499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/mrigadayavan-palace-q6581499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/thailand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
