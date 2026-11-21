# Vallikraav

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vallikraav-q61398064` |
| Coordinates | 58.24667, 22.47639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.24667/22.47639)) |
| Wikidata | [Q61398064](https://www.wikidata.org/wiki/Q61398064) (CC0) |
| Wikidata class | fortification |
| Types | moat\|artificial lake |
| Administrative area | Saaremaa Rural Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, marker 1, road 75, coastline 1, building 13, wall 19, zone 6, water 1).

Evidence: documented 0, mapped 117, inferred 0, derived 1; heights documented 12, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/414356 historic=castle Q1768091 179 m from ledger point
- origin moved 184 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":2,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.24667/22.47639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat\|artificial lake; sitelinks=2; wikidata:Q61398064 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 117 elements); data/traces/vallikraav-q61398064.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
