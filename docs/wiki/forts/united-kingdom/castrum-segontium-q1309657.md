# Castrum Segontium

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-segontium-q1309657` |
| Coordinates | 53.13734, -4.2658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.13734/-4.2658)) |
| Wikidata | [Q1309657](https://www.wikidata.org/wiki/Q1309657) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Caernarfon |
| Designations | scheduled monument |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 5, road 275, building 263, wall 41, waterway 1, coastline 1, retaining-wall 2, zone 21, water 2).

Evidence: documented 0, mapped 344, inferred 0, derived 2; heights documented 61, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70264991 historic=castle Q275128 777 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 275 mapped (trace size budget); minor lanes are not drawn
- origin moved 777 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1176,"medianInside":7.3,"medianOutside":11.3}
- sea-1: DEM check ok {"cells":1858,"medianInside":9.3,"medianOutside":15.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 159 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.13734/-4.2658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=13; wikidata:Q1309657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/castrum-segontium-q1309657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
