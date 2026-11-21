# Wychbury Ring

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wychbury-ring-q8039550` |
| Coordinates | 52.4341, -2.12041 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4341/-2.12041)) |
| Wikidata | [Q8039550](https://www.wikidata.org/wiki/Q8039550) (CC0) |
| Wikidata class | fort |
| Types | contour fort |
| Administrative area | Hagley |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | approximate route of Charles II's escape |
| OSM `website` | http://monarchsway.50megs.com/ |

## What the model contains

Tier **T1**, status `location-only`, 39 elements (marker 1, road 16, water 1, building 10, zone 2, waterway 9).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20611 historic=yes Q6897970 94082 m from ledger point
- site is a route relation of 3417 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (190084 x 218525 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4341/-2.12041) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; contour fort; sitelinks=2; wikidata:Q8039550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/wychbury-ring-q8039550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
