# Castle Hill

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-hill-q5050123` |
| Coordinates | 51.091, -2.2728 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.091/-2.2728)) |
| Wikidata | [Q5050123](https://www.wikidata.org/wiki/Q5050123) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | England |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `description` | approximate route of Charles II's escape |
| OSM `website` | http://monarchsway.50megs.com/ |

## What the model contains

Tier **T1**, status `location-only`, 225 elements (marker 5, road 162, zone 13, building 42, waterway 2, water 1).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 1, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20611 historic=yes Q6897970 57144 m from ledger point
- site is a route relation of 3417 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (195825 x 218525 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.091/-2.2728) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5050123 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/castle-hill-q5050123.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
