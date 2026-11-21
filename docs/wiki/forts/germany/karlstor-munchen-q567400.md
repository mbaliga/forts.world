# Karlstor (München)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karlstor-munchen-q567400` |
| Coordinates | 48.139, 11.5668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.139/11.5668)) |
| Wikidata | [Q567400](https://www.wikidata.org/wiki/Q567400) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Munich |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 14 |
| OSM `historic` | building |
| OSM `heritage` | 4 |
| OSM `description` | neubarocker viergeschossiger Monumentalbau mit zwei Innenhöfen, anspruchsvoller Gliederung und Glas-Eisen-Kuppel, von Friedrich von Thiersch, 1891/97. |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 5, road 507, building 127, water 2, zone 28, waterway 1, wall 18, retaining-wall 2).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 88, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14897 historic=building Q130609 206 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 507 mapped (trace size budget); minor lanes are not drawn
- origin moved 200 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.139/11.5668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=14; wikidata:Q567400 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/karlstor-munchen-q567400.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
