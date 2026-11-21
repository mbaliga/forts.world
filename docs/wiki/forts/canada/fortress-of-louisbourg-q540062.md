# Fortress of Louisbourg

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-louisbourg-q540062` |
| Coordinates | 45.8925, -59.985 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8925/-59.985)) |
| Wikidata | [Q540062](https://www.wikidata.org/wiki/Q540062) (CC0) |
| Wikidata class | fort |
| Types | fortress\|National Historic Site Administered by Parks Canada |
| Administrative area | Cape Breton |
| Inception | 1713 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 24 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, marker 28, water 9, road 45, building 68, waterway 11, wall 31, zone 1, coastline 3).

Evidence: documented 0, mapped 197, inferred 0, derived 2; heights documented 49, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106990421 historic=fort 171 m from ledger point
- origin moved 172 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":664,"medianInside":0,"medianOutside":3.6}
- sea-1: DEM check ok {"cells":132,"medianInside":0,"medianOutside":1.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8925/-59.985) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|National Historic Site Administered by Parks Canada; sitelinks=24; wikidata:Q540062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/fortress-of-louisbourg-q540062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
