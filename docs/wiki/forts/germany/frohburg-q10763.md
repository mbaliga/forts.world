# Frohburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frohburg-q10763` |
| Coordinates | 51.05418, 12.55832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05418/12.55832)) |
| Wikidata | [Q10763](https://www.wikidata.org/wiki/Q10763) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|urban municipality in Germany |
| Administrative area | Leipzig District |
| Inception | 1220 |
| Wikipedia language editions | 44 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, road 117, water 9, waterway 12, building 335, retaining-wall 3, wall 12, zone 23).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5951614 historic=castle Q10763 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 335 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05418/12.55832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|urban municipality in Germany; sitelinks=44; wikidata:Q10763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/frohburg-q10763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
