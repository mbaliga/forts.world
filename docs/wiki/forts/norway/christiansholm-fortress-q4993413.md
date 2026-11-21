# Christiansholm Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `christiansholm-fortress-q4993413` |
| Coordinates | 58.14419, 8.00336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.14419/8.00336)) |
| Wikidata | [Q4993413](https://www.wikidata.org/wiki/Q4993413) (CC0) |
| Wikidata class | fort |
| Types | heritage site\|fortress |
| Administrative area | Kristiansand Municipality |
| Inception | 1672 |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 158 elements (outline 1, marker 5, road 76, building 43, zone 5, waterway 1, coastline 22, water 5).

Evidence: documented 0, mapped 158, inferred 0, derived 5; heights documented 28, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172698770 historic=fort Q4993413 10 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":68,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":905,"medianInside":0,"medianOutside":0.8}
- sea-2: DEM check failed {"cells":1585,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":1584,"medianInside":0,"medianOutside":0}
- sea-4: DEM check failed {"cells":1,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.14419/8.00336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; heritage site\|fortress; sitelinks=8; wikidata:Q4993413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 158 elements); data/traces/christiansholm-fortress-q4993413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
