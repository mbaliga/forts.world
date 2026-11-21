# Rivage city gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rivage-city-gate-q3399190` |
| Coordinates | 50.85567, 4.34742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85567/4.34742)) |
| Wikidata | [Q3399190](https://www.wikidata.org/wiki/Q3399190) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brussels |
| Inception | 1562 |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 1, road 237, water 1, building 543, waterway 4, wall 5, retaining-wall 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1189782279 historic=yes 469 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 543 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 469 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85567/4.34742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q3399190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/rivage-city-gate-q3399190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
