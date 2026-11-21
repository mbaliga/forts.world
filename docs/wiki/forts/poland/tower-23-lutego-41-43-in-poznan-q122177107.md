# Tower, 23 Lutego 41/43 in Poznan

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-23-lutego-41-43-in-poznan-q122177107` |
| Coordinates | 52.41005, 16.93222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.41005/16.93222)) |
| Wikidata | [Q122177107](https://www.wikidata.org/wiki/Q122177107) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Poznań |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Zamek Królewski odtworzony w latach 2002-2014 z inicjatywy Komitetu Odbudowy Zamku (...) według projektu arch. Witolda Milewskiego ze środków samorządów, m. Poznania i Województwa Wielkopolskiego, Ministra Kultury oraz darowizn społeczeństwa |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 54, road 398, building 171, wall 37, zone 73, retaining-wall 34, water 5).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 59, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363747422 historic=castle Q52961 126 m from ledger point
- pruned to the outline plus 150 m: 773 -> 458 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 79 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 263 mapped (trace size budget); minor lanes are not drawn
- origin moved 125 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.41005/16.93222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q122177107 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/tower-23-lutego-41-43-in-poznan-q122177107.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
