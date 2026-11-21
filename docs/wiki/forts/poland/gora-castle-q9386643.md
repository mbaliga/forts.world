# Góra Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gora-castle-q9386643` |
| Coordinates | 51.66813, 16.53881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.66813/16.53881)) |
| Wikidata | [Q9386643](https://www.wikidata.org/wiki/Q9386643) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive tower |
| Administrative area | Góra |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 3, road 283, wall 19, building 482, zone 36, water 1).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 2, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/362200288 historic=castle Q9386643 154 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 482 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 154 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.66813/16.53881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive tower; sitelinks=6; wikidata:Q9386643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/gora-castle-q9386643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
