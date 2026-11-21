# Schleißheim palace complex

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlei-heim-palace-complex-q680166` |
| Coordinates | 48.24884, 11.561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.24884/11.561)) |
| Wikidata | [Q680166](https://www.wikidata.org/wiki/Q680166) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|architectural ensemble\|summer residence\|royal palace |
| Administrative area | Oberschleißheim |
| Designations | heritage monument ensemble in Bavaria\|architectural heritage monument in Bavaria |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.schloesser-schleissheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 10, road 322, water 12, waterway 26, building 85, zone 90, wall 1).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 2, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/7920443 historic=castle Q680166 4 m from ledger point
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.24884/11.561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|architectural ensemble\|summer residence\|royal palace; sitelinks=27; wikidata:Q680166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/schlei-heim-palace-complex-q680166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
