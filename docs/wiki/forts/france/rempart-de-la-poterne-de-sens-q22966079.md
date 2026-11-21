# Rempart de la Poterne de Sens

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rempart-de-la-poterne-de-sens-q22966079` |
| Coordinates | 48.19552, 3.28271 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19552/3.28271)) |
| Wikidata | [Q22966079](https://www.wikidata.org/wiki/Q22966079) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Sens |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 1, road 245, building 660, wall 66, retaining-wall 4, zone 2, waterway 4).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 1, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72812848 historic=building Q22248823 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 660 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19552/3.28271) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q22966079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/rempart-de-la-poterne-de-sens-q22966079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
