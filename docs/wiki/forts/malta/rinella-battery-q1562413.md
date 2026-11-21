# Rinella Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rinella-battery-q1562413` |
| Coordinates | 35.89444, 14.5325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89444/14.5325)) |
| Wikidata | [Q1562413](https://www.wikidata.org/wiki/Q1562413) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery\|open-air museum |
| Administrative area | Kalkara |
| Inception | 1878 |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `description` | Built by the British to guard the naval base and dockyard. It ceased to be used as a fort in 1906. It housed the 100-ton cannon built by Sir George Arstrong. |
| OSM `website` | https://www.fortrinella.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, marker 2, road 25, wall 32, water 4, building 15, zone 6, coastline 1, cliff 4).

Evidence: documented 0, mapped 90, inferred 0, derived 3; heights documented 0, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7886670 historic=fort 14 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":80,"medianInside":2.9,"medianOutside":15.9}
- sea-1: DEM check ok {"cells":14,"medianInside":4.2,"medianOutside":15.3}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":15.2}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89444/14.5325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery\|open-air museum; sitelinks=7; wikidata:Q1562413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/rinella-battery-q1562413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
