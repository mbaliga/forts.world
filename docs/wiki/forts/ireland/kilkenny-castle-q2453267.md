# Kilkenny Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kilkenny-castle-q2453267` |
| Coordinates | 52.65028, -7.24917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.65028/-7.24917)) |
| Wikidata | [Q2453267](https://www.wikidata.org/wiki/Q2453267) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|castle museum |
| Administrative area | County Kilkenny |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 174 elements (outline 1, marker 25, road 506, waterway 5, building 197, zone 32, wall 80, water 3).

Evidence: documented 0, mapped 174, inferred 0, derived 0; heights documented 21, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1023433070 historic=castle Q2453267 14 m from ledger point
- pruned to the outline plus 80 m: 849 -> 247 elements
- roads capped: kept the 80 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.65028/-7.24917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|castle museum; sitelinks=20; wikidata:Q2453267 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/kilkenny-castle-q2453267.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
