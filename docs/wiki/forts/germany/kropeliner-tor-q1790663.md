# Kröpeliner Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kropeliner-tor-q1790663` |
| Coordinates | 54.0885, 12.1289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.0885/12.1289)) |
| Wikidata | [Q1790663](https://www.wikidata.org/wiki/Q1790663) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Stadtmitte |
| Inception | 1255 |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `website` | https://www.geschichtswerkstatt-rostock.de/historisches-gebaeude-kroepeliner-tor/ |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 3, road 322, water 2, wall 13, building 64, zone 26, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 66, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144151649 historic=yes Q1790663 21 m from ledger point
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.0885/12.1289) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q1790663 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/kropeliner-tor-q1790663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
