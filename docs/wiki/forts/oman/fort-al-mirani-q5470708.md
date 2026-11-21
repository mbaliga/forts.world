# Fort Al-Mirani

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-al-mirani-q5470708` |
| Coordinates | 23.61722, 58.59306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.61722/58.59306)) |
| Wikidata | [Q5470708](https://www.wikidata.org/wiki/Q5470708) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural heritage |
| Administrative area | Muscat |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, coastline 3, road 36, building 29, wall 5, zone 4, water 4).

Evidence: documented 0, mapped 82, inferred 0, derived 3; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178157862 historic=fort Q5470708 35 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":441,"medianInside":6.9,"medianOutside":null}
- sea-1: DEM check ok {"cells":1,"medianInside":3.4,"medianOutside":6.9}
- sea-2: DEM check ok {"cells":191,"medianInside":2.8,"medianOutside":10}
- 94 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.61722/58.59306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural heritage; sitelinks=9; wikidata:Q5470708 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/fort-al-mirani-q5470708.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
