# Fort Ricasoli

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ricasoli-q1431801` |
| Coordinates | 35.8975, 14.52583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8975/14.52583)) |
| Wikidata | [Q1431801](https://www.wikidata.org/wiki/Q1431801) (CC0) |
| Wikidata class | fort |
| Types | hospital\|fort\|former hospital |
| Administrative area | Kalkara |
| Inception | 1670 |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, road 37, wall 78, building 40, zone 7, coastline 2, cliff 4, waterway 1, water 3).

Evidence: documented 0, mapped 173, inferred 0, derived 3; heights documented 3, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/691542011 historic=castle Q1431801 135 m from ledger point
- origin moved 138 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5102,"medianInside":0,"medianOutside":12.5}
- sea-1: DEM check ok {"cells":7921,"medianInside":0,"medianOutside":null}
- sea-2: DEM check ok {"cells":7730,"medianInside":0,"medianOutside":8.9}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8975/14.52583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hospital\|fort\|former hospital; sitelinks=20; wikidata:Q1431801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/fort-ricasoli-q1431801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
