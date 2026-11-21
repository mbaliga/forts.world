# Shing Mun Redoubt

> China · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shing-mun-redoubt-q10930083` |
| Coordinates | 22.37658, 114.14641 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.37658/114.14641)) |
| Wikidata | [Q10930083](https://www.wikidata.org/wiki/Q10930083) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Hong Kong |
| Designations | Grade II historic building |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `location-only`, 51 elements (marker 8, road 35, building 7, waterway 1).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13997958 historic=fort Q10930083 0 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (250 x 280 m)
- origin moved 58 m from the ledger point to the centre of the mapped site
- 40 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.37658/114.14641) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=2; wikidata:Q10930083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 27 elements); data/traces/shing-mun-redoubt-q10930083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
