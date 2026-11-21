# Admiralty Pier Turret

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `admiralty-pier-turret-q4683777` |
| Coordinates | 51.1116, 1.31887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1116/1.31887)) |
| Wikidata | [Q4683777](https://www.wikidata.org/wiki/Q4683777) (CC0) |
| Wikidata class | fortification |
| Types | battery tower\|artillery battery |
| Administrative area | Dover |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, building 4, road 8, retaining-wall 1, coastline 2, water 2).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1219028424 historic=fort Q4683777 8 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":99,"medianInside":-2.3,"medianOutside":-2.8}
- sea-1: DEM check ok {"cells":216,"medianInside":-3.1,"medianOutside":-2.2}
- 532 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1116/1.31887) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; battery tower\|artillery battery; sitelinks=2; wikidata:Q4683777 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/admiralty-pier-turret-q4683777.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
