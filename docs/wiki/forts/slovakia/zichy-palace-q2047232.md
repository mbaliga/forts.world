# Zichy palace

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zichy-palace-q2047232` |
| Coordinates | 48.1431, 17.10612 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1431/17.10612)) |
| Wikidata | [Q2047232](https://www.wikidata.org/wiki/Q2047232) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural center |
| Administrative area | Bratislava |
| Inception | 1770 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 394 elements (outline 1, marker 49, road 285, building 191, zone 15, wall 42, water 4, retaining-wall 13).

Evidence: documented 0, mapped 394, inferred 0, derived 0; heights documented 52, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12595737 historic=castle Q2047232 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1431/17.10612) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural center; sitelinks=4; wikidata:Q2047232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/zichy-palace-q2047232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
