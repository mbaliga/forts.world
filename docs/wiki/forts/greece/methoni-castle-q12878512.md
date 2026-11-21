# Methoni Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `methoni-castle-q12878512` |
| Coordinates | 36.8154, 21.7045 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.8154/21.7045)) |
| Wikidata | [Q12878512](https://www.wikidata.org/wiki/Q12878512) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Municipality of Pylos-Nestor |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 9, coastline 4, road 78, wall 28, waterway 1, building 165, zone 11, water 4).

Evidence: documented 0, mapped 301, inferred 0, derived 3; heights documented 6, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5185447 historic=castle Q12878512 19 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2983,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":2440,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":7902,"medianInside":0,"medianOutside":0}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.8154/21.7045) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q12878512 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/methoni-castle-q12878512.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
