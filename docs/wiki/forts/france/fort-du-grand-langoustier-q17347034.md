# Fort du Grand Langoustier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-grand-langoustier-q17347034` |
| Coordinates | 42.999, 6.16431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.999/6.16431)) |
| Wikidata | [Q17347034](https://www.wikidata.org/wiki/Q17347034) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hyères |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 14, coastline 2, zone 4, wall 6, cliff 8, water 5).

Evidence: documented 0, mapped 40, inferred 0, derived 5; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48789057 historic=castle Q17347034 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":3.5}
- sea-1: DEM check failed {"cells":6,"medianInside":7.3,"medianOutside":3.3}
- sea-2: DEM check ok {"cells":143,"medianInside":0,"medianOutside":6.9}
- sea-3: DEM check ok {"cells":2,"medianInside":1.1,"medianOutside":3.5}
- sea-4: DEM check failed {"cells":400,"medianInside":4.1,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.999/6.16431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q17347034 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/fort-du-grand-langoustier-q17347034.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
