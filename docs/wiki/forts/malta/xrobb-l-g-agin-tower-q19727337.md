# Xrobb l-Għaġin Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `xrobb-l-g-agin-tower-q19727337` |
| Coordinates | 35.84111, 14.57125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.84111/14.57125)) |
| Wikidata | [Q19727337](https://www.wikidata.org/wiki/Q19727337) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Marsaxlokk |
| Inception | 1659 |
| Wikipedia language editions | 5 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, coastline 2, road 15, wall 5, building 4, zone 1, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1034322323 historic=building 700 m from ledger point
- origin moved 699 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":0,"medianOutside":35.8}
- 69 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.84111/14.57125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=5; wikidata:Q19727337 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/xrobb-l-g-agin-tower-q19727337.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
