# Dún Dúchathair

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-duchathair-q1262996` |
| Coordinates | 53.10456, -9.68757 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.10456/-9.68757)) |
| Wikidata | [Q1262996](https://www.wikidata.org/wiki/Q1262996) (CC0) |
| Wikidata class | fort |
| Types | promontory fort\|ringfort\|fort |
| Administrative area | County Galway |
| Designations | national monument of Ireland |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | yes |
| OSM `description` | Remains of the ramparts of an ancient fortress with terraced walls constructed in black limestone. |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, road 1, wall 40, coastline 1, zone 45, cliff 14, water 2).

Evidence: documented 0, mapped 104, inferred 0, derived 2; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/702558287 historic=archaeological_site Q1262996 26 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1059,"medianInside":5.3,"medianOutside":15.1}
- sea-1: DEM check ok {"cells":1599,"medianInside":7.5,"medianOutside":16.3}
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.10456/-9.68757) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort\|ringfort\|fort; sitelinks=7; wikidata:Q1262996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/dun-duchathair-q1262996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
