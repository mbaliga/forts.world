# Nizhny Novgorod Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nizhny-novgorod-kremlin-q1550905` |
| Coordinates | 56.32865, 44.00286 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.32865/44.00286)) |
| Wikidata | [Q1550905](https://www.wikidata.org/wiki/Q1550905) (CC0) |
| Wikidata class | fort |
| Types | kremlin\|official residence\|building of public administration\|architectural landmark\|historic district |
| Administrative area | Nizhny Novgorod |
| Inception | 1508 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 49, road 971, wall 89, waterway 1, building 176, retaining-wall 84, water 1, zone 127).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 32, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2906502 historic=castle Q1550905 59 m from ledger point
- pruned to the outline plus 60 m: 1499 -> 733 elements
- roads capped: kept the 40 longest of 486 mapped (trace size budget); minor lanes are not drawn
- origin moved 57 m from the ledger point to the outline centroid
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.32865/44.00286) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin\|official residence\|building of public administration\|architectural landmark\|historic district; sitelinks=23; wikidata:Q1550905 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/nizhny-novgorod-kremlin-q1550905.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
