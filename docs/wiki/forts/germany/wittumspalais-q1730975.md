# Wittumspalais

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wittumspalais-q1730975` |
| Coordinates | 50.97977, 11.32668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.97977/11.32668)) |
| Wikidata | [Q1730975](https://www.wikidata.org/wiki/Q1730975) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|dwelling |
| Administrative area | Weimar |
| Designations | Kulturdenkmal |
| UNESCO WHC id | 846 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 15, road 276, building 420, waterway 3, zone 6, wall 58).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 72, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198265034 historic=castle Q1730975 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.97977/11.32668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|dwelling; sitelinks=7; wikidata:Q1730975 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/wittumspalais-q1730975.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
