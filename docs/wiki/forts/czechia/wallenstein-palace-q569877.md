# Wallenstein Palace

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wallenstein-palace-q569877` |
| Coordinates | 50.09002, 14.40571 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09002/14.40571)) |
| Wikidata | [Q569877](https://www.wikidata.org/wiki/Q569877) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|parliament building |
| Administrative area | Malá Strana |
| Inception | 1623 |
| Designations | part of national cultural heritage site in the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `description` | Senát Parlamentu České republiky |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 35, road 382, building 97, waterway 2, wall 36, zone 37, retaining-wall 47, water 5).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 31, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/73471 historic=castle Q569877 9 m from ledger point
- pruned to the outline plus 150 m: 642 -> 525 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 71 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09002/14.40571) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|parliament building; sitelinks=25; wikidata:Q569877 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/wallenstein-palace-q569877.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
