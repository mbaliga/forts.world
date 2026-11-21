# Dun Aengus

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-aengus-q1265205` |
| Coordinates | 53.12591, -9.76636 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.12591/-9.76636)) |
| Wikidata | [Q1265205](https://www.wikidata.org/wiki/Q1265205) (CC0) |
| Wikidata class | fort |
| Types | promontory fort\|archaeological site |
| Administrative area | County Galway |
| Designations | national monument of Ireland |
| Wikipedia language editions | 14 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | 2 |
| OSM `website` | https://heritageireland.ie/visit/places-to-visit/dun-aonghasa/ |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, road 2, wall 25, retaining-wall 1, coastline 2, building 3, cliff 1, zone 1, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 1; heights documented 1, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367009778 historic=archaeological_site Q1265205 48 m from ledger point
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":843,"medianInside":12.7,"medianOutside":51.9}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.12591/-9.76636) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort\|archaeological site; sitelinks=14; wikidata:Q1265205 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/dun-aengus-q1265205.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
