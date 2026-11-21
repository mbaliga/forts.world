# Levant Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `levant-battery-q6534896` |
| Coordinates | 36.11994, -5.34354 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.11994/-5.34354)) |
| Wikidata | [Q6534896](https://www.wikidata.org/wiki/Q6534896) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Gibraltar |
| Inception | 1901 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, marker 1, road 24, cliff 4, building 19, coastline 1, retaining-wall 6, zone 6, wall 16, water 1).

Evidence: documented 0, mapped 79, inferred 0, derived 1; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/949769573 historic=fort Q15217052 168 m from ledger point
- origin moved 170 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":0,"medianOutside":111.8}
- 67 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.11994/-5.34354) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q6534896 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 79 elements); data/traces/levant-battery-q6534896.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
