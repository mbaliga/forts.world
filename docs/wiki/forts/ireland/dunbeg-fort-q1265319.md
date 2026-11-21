# Dunbeg Fort

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunbeg-fort-q1265319` |
| Coordinates | 52.10333, -10.40861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.10333/-10.40861)) |
| Wikidata | [Q1265319](https://www.wikidata.org/wiki/Q1265319) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | County Kerry |
| Designations | national monument of Ireland |
| Wikipedia language editions | 8 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | promontory_fort |
| OSM `heritage` | 2 |
| OSM `description` | 500 BC cliff site. |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, road 15, cliff 1, building 4, coastline 1, wall 21, zone 1, water 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1144640201 historic=archaeological_site Q1265319 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":538,"medianInside":14.1,"medianOutside":34.7}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.10333/-10.40861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=8; wikidata:Q1265319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/dunbeg-fort-q1265319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
