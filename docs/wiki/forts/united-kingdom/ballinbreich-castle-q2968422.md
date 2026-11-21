# Ballinbreich Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ballinbreich-castle-q2968422` |
| Coordinates | 56.37118, -3.18018 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.37118/-3.18018)) |
| Wikidata | [Q2968422](https://www.wikidata.org/wiki/Q2968422) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, road 1, zone 3, waterway 1, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/562225952 historic=ruins Q2968422 24 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":125,"medianInside":6.9,"medianOutside":20.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.37118/-3.18018) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2968422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/ballinbreich-castle-q2968422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
