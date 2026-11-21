# Vyšehrad

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vysehrad-q616334` |
| Coordinates | 50.06443, 14.41764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.06443/14.41764)) |
| Wikidata | [Q616334](https://www.wikidata.org/wiki/Q616334) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|ruins\|hillfort |
| Administrative area | Vyšehrad |
| Inception | 1000 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 40 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 97, road 678, wall 47, building 256, waterway 7, cliff 6, retaining-wall 30, zone 22, water 1).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 49, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8888301 historic=citywalls 62 m from ledger point
- pruned to the outline plus 150 m: 1145 -> 949 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 541 mapped (trace size budget); minor lanes are not drawn
- origin moved 63 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.06443/14.41764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|ruins\|hillfort; sitelinks=40; wikidata:Q616334 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/vysehrad-q616334.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
