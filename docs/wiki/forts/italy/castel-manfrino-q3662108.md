# Castel Manfrino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-manfrino-q3662108` |
| Coordinates | 42.74737, 13.58983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.74737/13.58983)) |
| Wikidata | [Q3662108](https://www.wikidata.org/wiki/Q3662108) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Valle Castellana |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, wall 15, road 4, zone 1, waterway 2).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/460359148 historic=castle Q3662108 30 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.74737/13.58983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662108 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/castel-manfrino-q3662108.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
