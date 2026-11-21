# Iwaya Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `iwaya-castle-q11474378` |
| Coordinates | 33.52594, 130.52031 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.52594/130.52031)) |
| Wikidata | [Q11474378](https://www.wikidata.org/wiki/Q11474378) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hill castle |
| Administrative area | Dazaifu |
| Inception | 1600 |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 73 elements (marker 3, road 56, waterway 11, retaining-wall 1, zone 1, wall 1).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2101811 historic=archaeological_site 1170 m from ledger point
- site is a collection relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1495 x 1742 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.52594/130.52031) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hill castle; sitelinks=2; wikidata:Q11474378 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 73 elements); data/traces/iwaya-castle-q11474378.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
