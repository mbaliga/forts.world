# Castelo Real

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-real-q4350941` |
| Coordinates | 31.50944, -9.775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.50944/-9.775)) |
| Wikidata | [Q4350941](https://www.wikidata.org/wiki/Q4350941) (CC0) |
| Wikidata class | fort |
| Types | fortress\|destroyed building or structure |
| Administrative area | Essaouira |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, marker 1, building 9, zone 1, road 38, wall 6, water 6, waterway 1, coastline 12).

Evidence: documented 0, mapped 75, inferred 0, derived 4; heights documented 4, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1669716 historic=citywalls Q21619234 103 m from ledger point
- island ring (746 m2) cut out of sea-0
- island ring (2408 m2) cut out of sea-0
- origin moved 79 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":255,"medianInside":-0.9,"medianOutside":0.9}
- sea-1: DEM check failed {"cells":513,"medianInside":0.4,"medianOutside":-0.4}
- sea-2: DEM check failed {"cells":52,"medianInside":0.5,"medianOutside":0.4}
- sea-3: DEM check failed {"cells":19,"medianInside":1.3,"medianOutside":0.4}
- 92 DEM cells below -3 m (bathymetry) clamped to -3 m
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.50944/-9.775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|destroyed building or structure; sitelinks=6; wikidata:Q4350941 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/castelo-real-q4350941.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
