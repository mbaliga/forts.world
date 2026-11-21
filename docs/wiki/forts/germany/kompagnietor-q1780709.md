# Kompagnietor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kompagnietor-q1780709` |
| Coordinates | 54.7902, 9.43357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7902/9.43357)) |
| Wikidata | [Q1780709](https://www.wikidata.org/wiki/Q1780709) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|building |
| Administrative area | Flensburg |
| Inception | 1604 |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 13, road 146, building 363, wall 10, coastline 2, waterway 4, water 1).

Evidence: documented 0, mapped 297, inferred 0, derived 1; heights documented 61, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162814722 historic=yes Q1780709 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":118,"medianInside":3.5,"medianOutside":8.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7902/9.43357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|building; sitelinks=4; wikidata:Q1780709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/kompagnietor-q1780709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
