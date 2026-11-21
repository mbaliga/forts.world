# Ducal Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ducal-castle-q442169` |
| Coordinates | 53.42621, 14.56036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.42621/14.56036)) |
| Wikidata | [Q442169](https://www.wikidata.org/wiki/Q442169) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural heritage monument |
| Administrative area | Szczecin |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://zamek.szczecin.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, marker 11, road 462, water 1, building 170, waterway 1, zone 118, wall 33, retaining-wall 9).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 64, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12774910 historic=castle Q442169 20 m from ledger point
- pruned to the outline plus 80 m: 806 -> 234 elements
- roads capped: kept the 80 longest of 128 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.42621/14.56036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural heritage monument; sitelinks=15; wikidata:Q442169 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/ducal-castle-q442169.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
