# Butchers' Tower

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `butchers-tower-q25305441` |
| Coordinates | 46.21874, 24.7901 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.21874/24.7901)) |
| Wikidata | [Q25305441](https://www.wikidata.org/wiki/Q25305441) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Sighișoara |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 1, road 111, zone 5, building 309, wall 5).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 11, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264044235 historic=building 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.21874/24.7901) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q25305441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/butchers-tower-q25305441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
