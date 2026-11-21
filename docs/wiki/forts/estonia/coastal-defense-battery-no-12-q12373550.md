# Coastal Defense Battery No. 12

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coastal-defense-battery-no-12-q12373550` |
| Coordinates | 59.48449, 24.68844 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.48449/24.68844)) |
| Wikidata | [Q12373550](https://www.wikidata.org/wiki/Q12373550) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Tallinn |
| Designations | architectural monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, building 8, road 16, cliff 1, water 6, coastline 3).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162530766 historic=yes 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":183,"medianInside":4.5,"medianOutside":9.8}
- 104 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.48449/24.68844) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=2; wikidata:Q12373550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/coastal-defense-battery-no-12-q12373550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
