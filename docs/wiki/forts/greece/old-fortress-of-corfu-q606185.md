# Old Fortress of Corfu

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-fortress-of-corfu-q606185` |
| Coordinates | 39.62333, 19.92944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.62333/19.92944)) |
| Wikidata | [Q606185](https://www.wikidata.org/wiki/Q606185) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Municipality of Central Corfu and Diapontia Islands |
| Inception | 1545 |
| Designations | Protected monument\|archaeological site in Greece |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 397 elements (outline 1, marker 22, road 474, retaining-wall 69, wall 188, building 89, water 4, cliff 2, coastline 6, zone 69, waterway 1).

Evidence: documented 0, mapped 397, inferred 0, derived 1; heights documented 26, inferred 0, unknown 215.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/624275904 historic=castle Q606185 21 m from ledger point
- pruned to the outline plus 150 m: 925 -> 651 elements
- roads capped: kept the 80 longest of 334 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5753,"medianInside":0,"medianOutside":12.4}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.62333/19.92944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=13; wikidata:Q606185 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 397 elements); data/traces/old-fortress-of-corfu-q606185.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
