# Fort Forno

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-forno-q12631099` |
| Coordinates | 44.99889, 13.72528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.99889/13.72528)) |
| Wikidata | [Q12631099](https://www.wikidata.org/wiki/Q12631099) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pula |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, road 21, zone 1, coastline 1, building 2, retaining-wall 2, wall 1, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/199153648 historic=fort Q12631099 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":110,"medianInside":2.2,"medianOutside":18.2}
- sea-1: DEM check ok {"cells":11,"medianInside":4,"medianOutside":12.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.99889/13.72528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q12631099 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/fort-forno-q12631099.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
