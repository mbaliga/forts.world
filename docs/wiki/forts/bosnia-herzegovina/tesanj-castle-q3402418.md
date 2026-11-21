# Tešanj Castle

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tesanj-castle-q3402418` |
| Coordinates | 44.61346, 17.9894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.61346/17.9894)) |
| Wikidata | [Q3402418](https://www.wikidata.org/wiki/Q3402418) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tešanj |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, road 60, waterway 5, building 338, wall 21, retaining-wall 2, zone 30, cliff 1).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17564155 historic=castle Q3402418 48 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- origin moved 47 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.61346/17.9894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q3402418 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/tesanj-castle-q3402418.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
