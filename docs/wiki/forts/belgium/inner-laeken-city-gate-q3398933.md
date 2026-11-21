# Inner Laeken city gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `inner-laeken-city-gate-q3398933` |
| Coordinates | 50.85128, 4.35064 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85128/4.35064)) |
| Wikidata | [Q3398933](https://www.wikidata.org/wiki/Q3398933) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Brussels |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 4, road 382, building 475, water 4, wall 10, zone 1, waterway 2).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 8, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244850819 historic=yes 264 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 475 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 382 mapped (trace size budget); minor lanes are not drawn
- origin moved 263 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85128/4.35064) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3398933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/inner-laeken-city-gate-q3398933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
