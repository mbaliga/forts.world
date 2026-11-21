# Forte da Igreja

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-da-igreja-q5472526` |
| Coordinates | 38.655, -27.27222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.655/-27.27222)) |
| Wikidata | [Q5472526](https://www.wikidata.org/wiki/Q5472526) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Inception | 1567 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, building 102, road 22, coastline 2, retaining-wall 3, wall 4, zone 7, water 1).

Evidence: documented 0, mapped 142, inferred 0, derived 1; heights documented 4, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1076805695 historic=fort Q5472525 563 m from ledger point
- origin moved 564 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":143,"medianInside":0,"medianOutside":11.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.655/-27.27222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5472526 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/forte-da-igreja-q5472526.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
