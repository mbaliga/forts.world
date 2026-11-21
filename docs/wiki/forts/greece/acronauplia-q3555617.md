# Acronauplia

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `acronauplia-q3555617` |
| Coordinates | 37.56418, 22.79636 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.56418/22.79636)) |
| Wikidata | [Q3555617](https://www.wikidata.org/wiki/Q3555617) (CC0) |
| Wikidata class | fort |
| Types | fortress\|citadel |
| Administrative area | Nafplio Municipality |
| Designations | archaeological site in Greece\|protected building in Greece |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, marker 29, road 286, wall 31, building 376, cliff 6, water 2, coastline 5, zone 23, retaining-wall 1).

Evidence: documented 0, mapped 368, inferred 0, derived 1; heights documented 27, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3735419 historic=castle Q3555617 90 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn
- origin moved 96 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3654,"medianInside":0,"medianOutside":12.2}
- 138 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.56418/22.79636) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|citadel; sitelinks=13; wikidata:Q3555617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/acronauplia-q3555617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
