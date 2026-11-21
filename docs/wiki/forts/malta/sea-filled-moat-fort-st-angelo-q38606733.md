# Sea-filled Moat – Fort St Angelo

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sea-filled-moat-fort-st-angelo-q38606733` |
| Coordinates | 35.89089, 14.51958 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89089/14.51958)) |
| Wikidata | [Q38606733](https://www.wikidata.org/wiki/Q38606733) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Birgu |
| Designations | Grade 1 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |
| OSM `website` | https://heritagemalta.mt/explore/fort-st-angelo/ |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 2, road 68, building 112, wall 31, retaining-wall 4, coastline 3, zone 2, water 2).

Evidence: documented 0, mapped 226, inferred 0, derived 2; heights documented 90, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54896162 historic=castle Q2207146 176 m from ledger point
- origin moved 173 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":621,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":750,"medianInside":0,"medianOutside":9.5}
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89089/14.51958) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=1; wikidata:Q38606733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/sea-filled-moat-fort-st-angelo-q38606733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
