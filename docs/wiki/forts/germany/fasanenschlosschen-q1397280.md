# Fasanenschlösschen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fasanenschlosschen-q1397280` |
| Coordinates | 49.01343, 8.41286 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.01343/8.41286)) |
| Wikidata | [Q1397280](https://www.wikidata.org/wiki/Q1397280) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Karlsruhe |
| Inception | 1765 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 1, road 248, building 86, water 1, zone 54, waterway 1, wall 14, retaining-wall 2).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 73, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89715226 historic=castle Q1397280 2 m from ledger point
- roads capped: kept the 150 longest of 248 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.01343/8.41286) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=3; wikidata:Q1397280 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/fasanenschlosschen-q1397280.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
