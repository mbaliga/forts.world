# Bastion Luginsland

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-luginsland-q112086177` |
| Coordinates | 48.14353, 17.10209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14353/17.10209)) |
| Wikidata | [Q112086177](https://www.wikidata.org/wiki/Q112086177) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Bratislava |
| Inception | 1500 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://www.bratislava-hrad.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 38, road 775, building 320, zone 94, wall 72, retaining-wall 54, water 5, waterway 1).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 37, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1128350263 historic=castle Q593311 158 m from ledger point
- pruned to the outline plus 150 m: 1360 -> 940 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 554 mapped (trace size budget); minor lanes are not drawn
- origin moved 157 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14353/17.10209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q112086177 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/bastion-luginsland-q112086177.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
