# Neuer Wildenstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neuer-wildenstein-q1014613` |
| Coordinates | 50.9257, 14.2571 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9257/14.2571)) |
| Wikidata | [Q1014613](https://www.wikidata.org/wiki/Q1014613) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bad Schandau |
| Inception | 1409 |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `location-only`, 139 elements (marker 2, road 73, waterway 2, cliff 25, building 3, zone 34).

Evidence: documented 0, mapped 139, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19644153 historic=building Q49461755 48 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (86 x 45 m)
- origin moved 41 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9257/14.2571) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 148 elements); data/traces/neuer-wildenstein-q1014613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
