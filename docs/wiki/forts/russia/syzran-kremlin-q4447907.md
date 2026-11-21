# Syzran Kremlin

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `syzran-kremlin-q4447907` |
| Coordinates | 53.14689, 48.45434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14689/48.45434)) |
| Wikidata | [Q4447907](https://www.wikidata.org/wiki/Q4447907) (CC0) |
| Wikidata class | fort |
| Types | kremlin |
| Administrative area | Syzran |
| Inception | 1683 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `location-only`, 123 elements (marker 3, road 66, waterway 2, zone 2, building 50).

Evidence: documented 0, mapped 123, inferred 0, derived 0; heights documented 2, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1710344 historic=castle Q4447907 0 m from ledger point
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14689/48.45434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin; sitelinks=3; wikidata:Q4447907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 123 elements); data/traces/syzran-kremlin-q4447907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
