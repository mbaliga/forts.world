# Royal Castle, Poznań

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-castle-poznan-q52961` |
| Coordinates | 52.40913, 16.93099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.40913/16.93099)) |
| Wikidata | [Q52961](https://www.wikidata.org/wiki/Q52961) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Poznań |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Zamek Królewski odtworzony w latach 2002-2014 z inicjatywy Komitetu Odbudowy Zamku (...) według projektu arch. Witolda Milewskiego ze środków samorządów, m. Poznania i Województwa Wielkopolskiego, Ministra Kultury oraz darowizn społeczeństwa |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 54, road 398, water 6, building 171, wall 37, zone 73, retaining-wall 34).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 30, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363747422 historic=castle Q52961 6 m from ledger point
- pruned to the outline plus 80 m: 774 -> 201 elements
- roads capped: kept the 80 longest of 128 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.40913/16.93099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q52961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/royal-castle-poznan-q52961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
