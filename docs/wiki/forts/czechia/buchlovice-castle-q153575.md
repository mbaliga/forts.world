# Buchlovice Castle

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buchlovice-castle-q153575` |
| Coordinates | 49.08381, 17.33656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.08381/17.33656)) |
| Wikidata | [Q153575](https://www.wikidata.org/wiki/Q153575) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Buchlovice |
| Inception | 1707 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-buchlovice.cz/ |

## What the model contains

Tier **T1**, status `location-only`, 226 elements (marker 4, road 104, zone 15, waterway 1, wall 6, building 92, water 4).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 30, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5374801 historic=castle Q153575 7 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (111 x 75 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.08381/17.33656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=10; wikidata:Q153575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/buchlovice-castle-q153575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
