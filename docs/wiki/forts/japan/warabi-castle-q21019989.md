# Warabi Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warabi-castle-q21019989` |
| Coordinates | 35.82656, 139.68169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.82656/139.68169)) |
| Wikidata | [Q21019989](https://www.wikidata.org/wiki/Q21019989) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Chūō |
| Inception | 1400 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 277 elements (marker 2, road 305, building 285, waterway 5).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 15, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/54496 historic=yes Q1154479 45936 m from ledger point
- site is a route relation of 1044 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (202033 x 95856 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 285 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 305 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.82656/139.68169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q21019989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 277 elements); data/traces/warabi-castle-q21019989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
