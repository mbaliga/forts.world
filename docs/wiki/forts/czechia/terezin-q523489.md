# Terezín

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terezin-q523489` |
| Coordinates | 50.51108, 14.15064 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.51108/14.15064)) |
| Wikidata | [Q523489](https://www.wikidata.org/wiki/Q523489) (CC0) |
| Wikidata class | fort |
| Types | fortress\|municipality of the Czech Republic\|municipality with town privileges in the Czech Republic |
| Wikipedia language editions | 48 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, marker 12, road 239, zone 4, water 4, building 386, wall 78, waterway 32, retaining-wall 9).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 28, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13991951 historic=castle Q64676248 146 m from ledger point
- pruned to the outline plus 150 m: 765 -> 733 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 386 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 239 mapped (trace size budget); minor lanes are not drawn
- origin moved 137 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.51108/14.15064) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|municipality of the Czech Republic\|municipality with town privileges in the Czech Republic; sitelinks=48; wikidata:Q523489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/terezin-q523489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
