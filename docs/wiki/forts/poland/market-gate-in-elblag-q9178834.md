# Market Gate in Elbląg

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `market-gate-in-elblag-q9178834` |
| Coordinates | 54.16104, 19.39576 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.16104/19.39576)) |
| Wikidata | [Q9178834](https://www.wikidata.org/wiki/Q9178834) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Elbląg |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 395 elements (outline 1, marker 6, road 186, building 169, zone 29, wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 395, inferred 0, derived 1; heights documented 129, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1379314679 historic=yes 143 m from ledger point
- origin moved 143 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":3.3,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.16104/19.39576) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=3; wikidata:Q9178834 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 395 elements); data/traces/market-gate-in-elblag-q9178834.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
