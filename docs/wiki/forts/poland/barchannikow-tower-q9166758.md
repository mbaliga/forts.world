# Barchanników Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barchannikow-tower-q9166758` |
| Coordinates | 50.0622, 19.9436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0622/19.9436)) |
| Wikidata | [Q9166758](https://www.wikidata.org/wiki/Q9166758) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|destroyed building or structure |
| Administrative area | Kraków |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Dawna siedziba WSE - w 2018 roku siedziba Wyższej Szkoły Europejskiej im. ks. Józefa Tischnera została przeniesiona na Al. Jana Pawła II 39A. |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 19, road 234, building 183, zone 118, wall 108, retaining-wall 6).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 41, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152334095 historic=castle Q126963760 98 m from ledger point
- pruned to the outline plus 150 m: 669 -> 379 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 92 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 134 mapped (trace size budget); minor lanes are not drawn
- origin moved 98 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0622/19.9436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|destroyed building or structure; sitelinks=1; wikidata:Q9166758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/barchannikow-tower-q9166758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
