# Fredriksvern

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fredriksvern-q5499579` |
| Coordinates | 58.9948, 10.03971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.9948/10.03971)) |
| Wikidata | [Q5499579](https://www.wikidata.org/wiki/Q5499579) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|cultural property\|naval base |
| Administrative area | Larvik |
| Inception | 1677 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 7, coastline 2, road 190, building 186, wall 10, retaining-wall 2, cliff 5, zone 13, water 6).

Evidence: documented 0, mapped 316, inferred 0, derived 6; heights documented 4, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29891073 historic=castle Q5499579 59 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 62 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2023,"medianInside":1.8,"medianOutside":1.9}
- sea-1: DEM check ok {"cells":2025,"medianInside":1.8,"medianOutside":null}
- sea-2: DEM check ok {"cells":1989,"medianInside":1.6,"medianOutside":7.7}
- sea-3: DEM check ok {"cells":2025,"medianInside":1.8,"medianOutside":null}
- sea-4: DEM check ok {"cells":116,"medianInside":0,"medianOutside":2.5}
- sea-5: DEM check ok {"cells":837,"medianInside":0,"medianOutside":6.4}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.9948/10.03971) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|cultural property\|naval base; sitelinks=5; wikidata:Q5499579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/fredriksvern-q5499579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
