# Dùn Morbhaidh

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-morbhaidh-q5320413` |
| Coordinates | 56.67945, -6.51702 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.67945/-6.51702)) |
| Wikidata | [Q5320413](https://www.wikidata.org/wiki/Q5320413) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | Argyll and Bute |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 5, road 2, water 3).

Evidence: documented 0, mapped 11, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1115714513 historic=fort Q5320413 14 m from ledger point
- island ring (448 m2) cut out of sea-2
- island ring (556 m2) cut out of sea-2
- island ring (2566 m2) cut out of sea-2
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":16,"medianInside":2.5,"medianOutside":2.1}
- sea-1: DEM check ok {"cells":1,"medianInside":1,"medianOutside":2.2}
- sea-2: DEM check ok {"cells":210,"medianInside":1.1,"medianOutside":3.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.67945/-6.51702) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=3; wikidata:Q5320413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/dun-morbhaidh-q5320413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
