# Hausmannsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hausmannsturm-q1514189` |
| Coordinates | 51.3609, 11.1043 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3609/11.1043)) |
| Wikidata | [Q1514189](https://www.wikidata.org/wiki/Q1514189) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bad Frankenhausen |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 1, road 110, waterway 11, building 121, water 1, wall 10, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 24, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203795874 historic=castle Q1514189 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3609/11.1043) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1514189 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/hausmannsturm-q1514189.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
