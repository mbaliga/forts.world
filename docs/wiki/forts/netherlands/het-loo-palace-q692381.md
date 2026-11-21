# Het Loo Palace

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `het-loo-palace-q692381` |
| Coordinates | 52.23379, 5.94646 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.23379/5.94646)) |
| Wikidata | [Q692381](https://www.wikidata.org/wiki/Q692381) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Apeldoorn |
| Inception | 1686 |
| Designations | Rijksmonument |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, road 292, zone 130, water 24, wall 27, retaining-wall 4, waterway 31, building 39).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/191884475 historic=castle Q692381 18 m from ledger point
- pruned to the outline plus 150 m: 548 -> 436 elements
- roads capped: kept the 80 longest of 253 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.23379/5.94646) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=22; wikidata:Q692381 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/het-loo-palace-q692381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
