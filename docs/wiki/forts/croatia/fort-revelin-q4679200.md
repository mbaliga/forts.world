# Fort Revelin

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-revelin-q4679200` |
| Coordinates | 42.64209, 18.11224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.64209/18.11224)) |
| Wikidata | [Q4679200](https://www.wikidata.org/wiki/Q4679200) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Dubrovnik |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 5, road 197, coastline 4, wall 28, building 207, retaining-wall 7, zone 5, water 2).

Evidence: documented 0, mapped 322, inferred 0, derived 2; heights documented 3, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172461166 historic=fort Q4679200 11 m from ledger point
- island ring (1220 m2) cut out of sea-0
- present-day buildings capped: kept the 120 nearest the outline centre of 207 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1588,"medianInside":25.5,"medianOutside":68.3}
- sea-1: DEM check ok {"cells":381,"medianInside":0,"medianOutside":35}
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.64209/18.11224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=9; wikidata:Q4679200 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/fort-revelin-q4679200.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
