# First Rašpor Gate

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `first-raspor-gate-q60362449` |
| Coordinates | 45.52788, 13.56953 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.52788/13.56953)) |
| Wikidata | [Q60362449](https://www.wikidata.org/wiki/Q60362449) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Piran Municipality |
| Designations | monument of local significance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 8, road 176, building 266, cliff 3, wall 10, zone 6, coastline 4, retaining-wall 2, water 2).

Evidence: documented 0, mapped 306, inferred 0, derived 2; heights documented 10, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/464759235 historic=castle 116 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 266 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 115 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":146,"medianInside":0,"medianOutside":11.4}
- sea-1: DEM check ok {"cells":399,"medianInside":4.7,"medianOutside":15.9}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.52788/13.56953) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q60362449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/first-raspor-gate-q60362449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
