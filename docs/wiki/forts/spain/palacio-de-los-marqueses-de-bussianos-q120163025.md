# Palacio de los Marqueses de Bussianos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-los-marqueses-de-bussianos-q120163025` |
| Coordinates | 38.01244, -3.37108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.01244/-3.37108)) |
| Wikidata | [Q120163025](https://www.wikidata.org/wiki/Q120163025) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Úbeda |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 1, road 112, building 501, wall 250, retaining-wall 15, zone 20).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 57, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3459904 historic=castle Q120163025 4 m from ledger point
- pruned to the outline plus 150 m: 900 -> 602 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 341 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.01244/-3.37108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q120163025 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/palacio-de-los-marqueses-de-bussianos-q120163025.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
