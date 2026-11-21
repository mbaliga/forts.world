# Trångsund Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trangsund-fortress-q13668634` |
| Coordinates | 60.63528, 28.57444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.63528/28.57444)) |
| Wikidata | [Q13668634](https://www.wikidata.org/wiki/Q13668634) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Administrative area | Vyborg |
| Inception | 1860 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, coastline 5, building 12, road 36, wall 12, zone 4, water 3).

Evidence: documented 0, mapped 73, inferred 0, derived 3; heights documented 1, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11876719 historic=castle Q13668634 79 m from ledger point
- origin moved 78 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":673,"medianInside":19.5,"medianOutside":9.3}
- sea-1: DEM check ok {"cells":159,"medianInside":9.4,"medianOutside":21.5}
- sea-2: DEM check failed {"cells":168,"medianInside":32,"medianOutside":18.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.63528/28.57444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=5; wikidata:Q13668634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/trangsund-fortress-q13668634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
