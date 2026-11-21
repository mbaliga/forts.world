# Terraces

> New Zealand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terraces-q96327581` |
| Coordinates | -41.09892, 174.86221 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-41.09892/174.86221)) |
| Wikidata | [Q96327581](https://www.wikidata.org/wiki/Q96327581) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Porirua City |
| Designations | Heritage New Zealand Category 2 historic place listing |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `ruins` | barrack |

## What the model contains

Tier **T1**, status `outline-only`, 65 elements (outline 1, marker 1, road 32, building 27, coastline 2, waterway 1, water 1).

Evidence: documented 0, mapped 65, inferred 0, derived 1; heights documented 2, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/879456248 historic=ruins Q5471792 347 m from ledger point
- origin moved 348 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":179,"medianInside":0.6,"medianOutside":5.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-41.09892/174.86221) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=0; wikidata:Q96327581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 65 elements); data/traces/terraces-q96327581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
