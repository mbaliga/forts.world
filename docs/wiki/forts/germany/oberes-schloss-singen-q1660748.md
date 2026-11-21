# Oberes Schloss Singen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oberes-schloss-singen-q1660748` |
| Coordinates | 47.76239, 8.83386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.76239/8.83386)) |
| Wikidata | [Q1660748](https://www.wikidata.org/wiki/Q1660748) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Singen |
| Inception | 1810 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 16, road 96, waterway 1, building 389, zone 1, wall 3).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 7, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/430178982 historic=yes 480 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- origin moved 481 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.76239/8.83386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=2; wikidata:Q1660748 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/oberes-schloss-singen-q1660748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
