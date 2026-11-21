# Duncannon Fort

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duncannon-fort-q28232341` |
| Coordinates | 52.22077, -6.93663 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.22077/-6.93663)) |
| Wikidata | [Q28232341](https://www.wikidata.org/wiki/Q28232341) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | County Wexford |
| Designations | National Inventory of Architectural Heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `fortification_type` | sea_fort |
| OSM `heritage` | 2 |
| OSM `description` | Access via guided tours. Tickets for guided tours can be purchased from the Hook Tourism tourist office. |
| OSM `website` | https://duncannonfort.ie |

## What the model contains

Tier **T1**, status `outline-only`, 130 elements (outline 1, marker 3, road 27, zone 5, building 89, coastline 1, retaining-wall 2, water 2).

Evidence: documented 0, mapped 130, inferred 0, derived 2; heights documented 2, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92966401 historic=fort Q28232341 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":3.9,"medianOutside":7}
- sea-1: DEM check ok {"cells":389,"medianInside":7,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.22077/-6.93663) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q28232341 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 130 elements); data/traces/duncannon-fort-q28232341.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
