# Castro dos Prados

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-dos-prados-q2941522` |
| Coordinates | 43.72335, -7.81268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.72335/-7.81268)) |
| Wikidata | [Q2941522](https://www.wikidata.org/wiki/Q2941522) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|hillfort |
| Administrative area | Espasante, Ortigueira |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, road 16, building 3, wall 1, coastline 1, zone 3, water 3).

Evidence: documented 0, mapped 28, inferred 0, derived 3; heights documented 3, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/976627724 historic=archaeological_site Q2941522 10 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":145,"medianInside":0,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":28,"medianInside":0,"medianOutside":0.1}
- sea-2: DEM check failed {"cells":8,"medianInside":0.4,"medianOutside":0}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.72335/-7.81268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|hillfort; sitelinks=3; wikidata:Q2941522 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/castro-dos-prados-q2941522.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
