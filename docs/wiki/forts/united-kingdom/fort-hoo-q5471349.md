# Fort Hoo

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-hoo-q5471349` |
| Coordinates | 51.40333, 0.58139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.40333/0.58139)) |
| Wikidata | [Q5471349](https://www.wikidata.org/wiki/Q5471349) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hoo St Werburgh |
| Inception | 1861 |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, waterway 2, coastline 2, wall 2, zone 13, water 4).

Evidence: documented 0, mapped 24, inferred 0, derived 4; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122052898 historic=fort Q5471349 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":239,"medianInside":-0.8,"medianOutside":2.7}
- sea-1: DEM check failed {"cells":39,"medianInside":2.3,"medianOutside":0}
- sea-2: DEM check failed {"cells":2,"medianInside":2.2,"medianOutside":0.2}
- sea-3: DEM check ok {"cells":386,"medianInside":0.1,"medianOutside":0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.40333/0.58139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471349 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/fort-hoo-q5471349.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
