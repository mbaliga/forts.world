# City walls of Kamienna Góra

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-kamienna-gora-q30046108` |
| Coordinates | 50.78235, 16.03155 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.78235/16.03155)) |
| Wikidata | [Q30046108](https://www.wikidata.org/wiki/Q30046108) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|city walls |
| Administrative area | Kamienna Góra |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 6, road 314, building 327, wall 20, waterway 2, zone 152, water 1, retaining-wall 5).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 3, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1490497122 historic=monument 126 m from ledger point
- pruned to the outline plus 150 m: 828 -> 407 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 160 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 126 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.78235/16.03155) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|city walls; sitelinks=2; wikidata:Q30046108 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/city-walls-of-kamienna-gora-q30046108.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
