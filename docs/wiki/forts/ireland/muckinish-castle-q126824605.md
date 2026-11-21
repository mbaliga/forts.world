# Muckinish Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muckinish-castle-q126824605` |
| Coordinates | 53.12869, -9.08053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.12869/-9.08053)) |
| Wikidata | [Q126824605](https://www.wikidata.org/wiki/Q126824605) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Muckinish East |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 7 elements (outline 1, road 1, coastline 1, wall 2, zone 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/949532316 historic=castle Q126824605 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":123,"medianInside":22,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.12869/-9.08053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q126824605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 7 elements); data/traces/muckinish-castle-q126824605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
