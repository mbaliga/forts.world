# Ōno Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ono-castle-q4503545` |
| Coordinates | 33.5386, 130.507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.5386/130.507)) |
| Wikidata | [Q4503545](https://www.wikidata.org/wiki/Q4503545) (CC0) |
| Wikidata class | fort |
| Types | Korean-style fortress in Japan |
| Administrative area | Umi |
| Inception | 0665 |
| Designations | Special Historic Site\|Historic Site of Japan |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 51 elements (road 31, waterway 10, building 10).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2101811 historic=archaeological_site 1368 m from ledger point
- site is a collection relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1495 x 1742 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.5386/130.507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; Korean-style fortress in Japan; sitelinks=7; wikidata:Q4503545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/ono-castle-q4503545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
