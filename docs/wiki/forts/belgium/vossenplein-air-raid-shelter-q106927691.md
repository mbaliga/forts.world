# Vossenplein air-raid shelter

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vossenplein-air-raid-shelter-q106927691` |
| Coordinates | 50.83702, 4.34574 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83702/4.34574)) |
| Wikidata | [Q106927691](https://www.wikidata.org/wiki/Q106927691) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Brussels |
| Inception | 1942 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 16, road 637, building 523, wall 31, zone 14, retaining-wall 6, water 2).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 20, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169173072 historic=yes Q850537 422 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 523 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 637 mapped (trace size budget); minor lanes are not drawn
- origin moved 423 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83702/4.34574) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q106927691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/vossenplein-air-raid-shelter-q106927691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
