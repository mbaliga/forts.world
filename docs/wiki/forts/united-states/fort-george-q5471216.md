# Fort George

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q5471216` |
| Coordinates | 30.41861, -87.21722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.41861/-87.21722)) |
| Wikidata | [Q5471216](https://www.wikidata.org/wiki/Q5471216) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Florida |
| Inception | 1778 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 290 elements (marker 3, road 252, building 333, wall 2, zone 15).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 10, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2649569 historic=yes 36012 m from ledger point
- site is a route relation of 189 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (80462 x 32850 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 252 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.41861/-87.21722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 290 elements); data/traces/fort-george-q5471216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
