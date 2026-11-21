# Ribat of Monastir

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ribat-of-monastir-q3430097` |
| Coordinates | 35.77616, 10.83291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.77616/10.83291)) |
| Wikidata | [Q3430097](https://www.wikidata.org/wiki/Q3430097) (CC0) |
| Wikidata class | fortification |
| Types | ribat |
| Administrative area | Monastir |
| Inception | 0796 |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 1, road 80, zone 20, building 15, wall 7, coastline 2, retaining-wall 1, water 2).

Evidence: documented 0, mapped 129, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29152256 historic=castle Q3430097 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":4.8,"medianOutside":13.9}
- sea-1: DEM check ok {"cells":96,"medianInside":3,"medianOutside":13.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.77616/10.83291) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; ribat; sitelinks=8; wikidata:Q3430097 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/ribat-of-monastir-q3430097.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
