# Esterházy Palace

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `esterhazy-palace-q3919243` |
| Coordinates | 48.14226, 17.1081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14226/17.1081)) |
| Wikidata | [Q3919243](https://www.wikidata.org/wiki/Q3919243) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Bratislava |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 36, road 267, building 140, zone 18, water 3, wall 6, retaining-wall 1).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 78, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10811262 historic=castle Q3919243 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14226/17.1081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q3919243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/esterhazy-palace-q3919243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
