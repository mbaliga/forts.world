# Schloss Nussdorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-nussdorf-q2242727` |
| Coordinates | 48.89281, 8.93969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.89281/8.93969)) |
| Wikidata | [Q2242727](https://www.wikidata.org/wiki/Q2242727) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Eberdingen |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 2, road 96, zone 2, building 305, water 1, retaining-wall 5, wall 7).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 0, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37629397 historic=castle Q2242727 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 305 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.89281/8.93969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2242727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/schloss-nussdorf-q2242727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
