# Europa Advance Batteries

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `europa-advance-batteries-q15217052` |
| Coordinates | 36.11736, -5.34195 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.11736/-5.34195)) |
| Wikidata | [Q15217052](https://www.wikidata.org/wiki/Q15217052) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Gibraltar |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, road 11, cliff 4, building 16, coastline 1, retaining-wall 1, zone 4, wall 6, water 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/966701155 historic=fort Q15217052 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":205,"medianInside":0,"medianOutside":75.3}
- 51 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.11736/-5.34195) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q15217052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/europa-advance-batteries-q15217052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
